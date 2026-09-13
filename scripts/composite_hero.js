const sharp = require('d:/Rkperfume-main/node_modules/sharp');
const path = require('path');

async function main() {
  const bgPath = 'C:/Users/shiva/.gemini/antigravity-ide/brain/498f5cc7-1463-458a-afd1-fef7a45758a2/fleur_hero_bottle_clean_1789312561825.jpg';
  const logoPath = 'd:/Rkperfume-main/public/images/logo_essprive_clean.png';
  const outPath = 'd:/Rkperfume-main/public/images/fleur_hero_bottle_branded.png';

  // Resize logo
  const resizedLogo = await sharp(logoPath)
    .resize({ width: 92 })
    .toBuffer();

  const logoMeta = await sharp(resizedLogo).metadata();

  // The white box is approximately X: 375 to 520, Y: 548 to 680
  const left = Math.round(448 - logoMeta.width / 2);
  const top = Math.round(710 - logoMeta.height / 2);

  await sharp(bgPath)
    .composite([
      { input: resizedLogo, left: left, top: top }
    ])
    .toFile(outPath);

  console.log('Successfully composited hero bottle logo to', outPath);
}

main().catch(console.error);
