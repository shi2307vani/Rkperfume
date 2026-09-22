import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_DIR = path.resolve(__dirname, "../public/images/products");
const LOGO_SRC = path.resolve(__dirname, "../public/images/logo_essprive_clean.png");
const REPORT_OUT = path.resolve(__dirname, "../rebrand_report.md");
const BACKUP_DIR = path.resolve(__dirname, "../public/images/products/_originals_backup");
const SKIP_SET = new Set(["ChatGPT_Image_Feb_9_2026_01_02_01_PM.png", "ChatGPT_Image_Feb_9_2026_01_31_56_PM.png", "ChatGPT_Image_Jun_26_2026_05_51_39_PM.png", "ChatGPT_Image_Jun_26_2026_05_57_05_PM_1.png", "ChatGPT_Image_Jun_26_2026_05_59_09_PM.png", "Untitleddesign_20.png", "Untitleddesign_3.png", "King_khan_4.png", "test_blend.png", "test_correct_patch.png", "test_gemini.png", "test_patch.png", "WhatsAppImage2026-04-17at3.29.46PM.jpg", "Tam_dao.jpg", "Tam_dao_watermarked.jpg"]);
function findLabel(buf, W, H) {
  let x0 = W, x1 = 0, y0 = H, y1 = 0, cnt = 0;
  const sl = Math.floor(W * 0.35), st = Math.floor(H * 0.42);
  for (let y = st; y < H; y++) for (let x = sl; x < W; x++) {
    const i = (y * W + x) * 4;
    if (buf[i + 3] > 180 && buf[i] > 210 && buf[i + 1] > 210 && buf[i + 2] > 210) {
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; cnt++;
    }
  }
  if (cnt < 3000 || x1 - x0 < 100 || y1 - y0 < 80) return null;
  return { left: x0 + 3, top: y0 + 3, width: x1 - x0 - 6, height: y1 - y0 - 6 };
}
function makeSvg(lw, lh) {
  const s = lw / 340, ob = Math.max(2, Math.round(3 * s)), ib = 1, gap = Math.max(3, Math.round(5 * s));
  const g = "rgb(200,163,78)", inner = ob + gap;
  return "<svg width=\"" + lw + "\" height=\"" + lh + "\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"" + lw + "\" height=\"" + lh + "\" fill=\"white\"/><rect x=\"" + ob / 2 + "\" y=\"" + ob / 2 + "\" width=\"" + (lw - ob) + "\" height=\"" + (lh - ob) + "\" fill=\"none\" stroke=\"" + g + "\" stroke-width=\"" + ob + "\"/><rect x=\"" + inner + "\" y=\"" + inner + "\" width=\"" + (lw - inner * 2) + "\" height=\"" + (lh - inner * 2) + "\" fill=\"none\" stroke=\"" + g + "\" stroke-width=\"" + ib + "\"/></svg>";
}
async function processOne(fp, logoBuf) {
  const img = sharp(fp);
  const { width: W, height: H } = await img.metadata();
  const { data } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const bbox = findLabel(data.data, W, H);
  if (!bbox) return { ok: false, reason: "label not detected" };
  const { left, top, width: lw, height: lh } = bbox;
  const svgBuf = Buffer.from(makeSvg(lw, lh));
  const logoW = Math.round(lw * 0.72);
  const logoH = Math.round(logoW / (6223 / 2535));
  const logoLeft = Math.round((lw - logoW) / 2);
  const logoTop = Math.round(lh * 0.12);
  const scaledLogo = await sharp(logoBuf).resize(logoW, logoH, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).ensureAlpha().toBuffer();
  const patch = await sharp(svgBuf).resize(lw, lh).composite([{ input: scaledLogo, left: logoLeft, top: logoTop, blend: "over" }]).png().toBuffer();
  const out = await sharp(fp).composite([{ input: patch, left, top, blend: "over" }]).png({ compressionLevel: 8 }).toBuffer();
  await fs.promises.writeFile(fp, out);
  return { ok: true, bbox };
}
async function main() {
  const testMode = process.argv.includes("--test");
  console.log("ESSPRIVE Bulk Rebranding" + (testMode ? " [TEST]" : ""));
  if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });
  const logoBuf = await fs.promises.readFile(LOGO_SRC);
  console.log("Logo:", Math.round(logoBuf.length / 1024), "KB");
  let files = fs.readdirSync(PRODUCTS_DIR).filter(f => /\.(png|jpg)$/i.test(f) && !f.includes("_watermarked") && !SKIP_SET.has(f)).sort();
  if (testMode) files = files.slice(0, 3);
  console.log("Processing", files.length, "files");
  const ok = [], sk = [], fail = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i], fp = path.join(PRODUCTS_DIR, f);
    process.stdout.write("[" + (i + 1) + "/" + files.length + "] " + f.substring(0, 50).padEnd(52) + " ");
    try {
      const bk = path.join(BACKUP_DIR, f);
      if (!fs.existsSync(bk)) await fs.promises.copyFile(fp, bk);
      const r = await processOne(fp, logoBuf);
      if (r.ok) { console.log("OK " + r.bbox.width + "x" + r.bbox.height); ok.push({ f, bbox: r.bbox }); }
      else { console.log("SKIP: " + r.reason); sk.push({ f, reason: r.reason }); }
    } catch (e) { console.log("FAIL: " + e.message.substring(0, 50)); fail.push({ f, error: e.message }); }
  }
  console.log("DONE OK:" + ok.length + " Skip:" + sk.length + " Fail:" + fail.length);
  let rpt = "# ESSPRIVE Rebranding Report\nDate: " + new Date().toISOString() + "\n\n## Summary\n|Category|Count|\n|---|---|\n|Edited|" + ok.length + "|\n|Skipped|" + sk.length + "|\n|Failed|" + fail.length + "|\n\n";
  if (ok.length) rpt += "## Edited Images\n" + ok.map(x => "- " + x.f + " (label " + x.bbox.width + "x" + x.bbox.height + ")").join("\n") + "\n\n";
  if (sk.length) rpt += "## Skipped\n" + sk.map(x => "- " + x.f + ": " + x.reason).join("\n") + "\n\n";
  if (fail.length) rpt += "## Failed\n" + fail.map(x => "- " + x.f + ": " + x.error).join("\n") + "\n\n";
  await fs.promises.writeFile(REPORT_OUT, rpt);
  console.log("Report:", REPORT_OUT);
}
main().catch(e => { console.error("Fatal:", e); process.exit(1); });