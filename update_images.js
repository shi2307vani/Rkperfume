const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputFolder = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const logoPath = path.join(__dirname, 'public', 'images', 'logo.png');

function isWhite(r, g, b) {
  // Relaxed neutral off-white tolerance to detect label paper under warm/cool reflections
  return r > 210 && g > 210 && b > 210 && 
         Math.abs(r - g) < 25 && 
         Math.abs(g - b) < 25 && 
         Math.abs(r - b) < 25;
}

function getCleanPerfumeName(name) {
  if (!name) return 'PREMIUM SCENT';
  let clean = name;
  
  // Remove parenthetical descriptions like (Worn by...)
  clean = clean.replace(/\([^)]*\)/g, '');
  
  // Remove brand keywords and standard noise
  clean = clean
    .replace(/Inspired\s+by/gi, '')
    .replace(/Inspired/gi, '')
    .replace(/Celestial\s+Perfume/gi, '')
    .replace(/Perfume/gi, '')
    .replace(/\s+100ml/gi, '')
    .replace(/\s+Pack\s+Of\s+Two.*/gi, '')
    .replace(/-.*/g, '') // Remove anything after a dash
    .trim();
    
  // Remove common brand prefixes
  const brandNames = [
    'Lattafa', 'Jo Malone', 'Calvin Klein', 'YSL', 'Gucci',
    'Paco Rabbane', 'Rasasi', 'Chanel', 'Roja', 'JPG', 'Tom Ford',
    'Tomford', 'Creed', 'Victoria Secret', 'Versace', 'Azzaro', 'Ck',
    'Gucci', 'Terre De', 'Bvlgari', 'Bleu De', 'Armani', 'Acqua Di'
  ];
  for (const brand of brandNames) {
    const regex = new RegExp('^' + brand + '\\s+', 'i');
    clean = clean.replace(regex, '');
  }
  
  clean = clean.replace(/\s+/g, ' ').trim();
  return clean.toUpperCase();
}

async function processProduct(p) {
  let imageUrl = p.image;

  // Determine original and watermarked paths
  const isWatermarkedAlready = imageUrl.includes('_watermarked');
  const originalWebPath = imageUrl.replace(/_watermarked\.(png|jpg|jpeg|webp)/i, '.$1');
  const watermarkedWebPath = originalWebPath.replace(/\.(png|jpg|jpeg|webp)$/i, '_watermarked.$1');

  const localOriginalPath = path.join(__dirname, 'public', originalWebPath);
  const localWatermarkedPath = path.join(__dirname, 'public', watermarkedWebPath);

  if (!fs.existsSync(localOriginalPath)) {
    console.warn(`Original image file not found at: ${localOriginalPath}`);
    return p;
  }

  try {
    const originalBuffer = fs.readFileSync(localOriginalPath);
    const filename = path.basename(localOriginalPath);

    // Identify white bottle Photoshop templates
    const shortNumberFiles = ['1_10.png', '1._1.png', '44.png', '45.png', '46.png', '48.png', '49.png'];
    const isWhiteBottle = filename.includes('New_Celestial_Product') || 
                          filename.includes('CELESTIAL_Product') || 
                          filename.includes('Tam_dao') ||
                          filename === 'King_khan_4.png' ||
                          shortNumberFiles.includes(filename);

    if (isWhiteBottle && fs.existsSync(logoPath)) {
      console.log(`Rendering premium label for [${p.name}] (file: ${filename})...`);

      // Special Case: Double Bottle mockups (e.g. King of Bollywood)
      if (filename === 'King_khan_4.png') {
        const labelWidth = 150; // scaled down to avoid overlapping background details
        const labelHeight = 220;
        const logoWidth = 48;
        
        const logoBuffer = await sharp(logoPath)
          .resize({ width: logoWidth })
          .toBuffer();

        const renderLabel = (perfumeName) => {
          let fontSize = 10;
          if (perfumeName.length > 10) fontSize = 8;

          return Buffer.from(
            `<svg width="${labelWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="doubleShading" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#eae6df" />
                  <stop offset="8%" stop-color="#f6f3ed" />
                  <stop offset="50%" stop-color="#fdfcf8" />
                  <stop offset="92%" stop-color="#f6f3ed" />
                  <stop offset="100%" stop-color="#eae6df" />
                </linearGradient>
              </defs>
              <rect width="${labelWidth}" height="${labelHeight}" fill="url(#doubleShading)" rx="2" ry="2" />
              <rect x="5" y="5" width="${labelWidth - 10}" height="${labelHeight - 10}" fill="none" stroke="#d4af37" stroke-width="1.75" />
              <rect x="7" y="7" width="${labelWidth - 14}" height="${labelHeight - 14}" fill="none" stroke="#d4af37" stroke-width="0.75" stroke-opacity="0.6" />
              
              <!-- Perfume Name -->
              <text x="${labelWidth / 2}" y="132" font-family="Georgia, serif" font-size="${fontSize}" font-weight="bold" fill="#1a1a1a" text-anchor="middle" letter-spacing="1">${perfumeName}</text>
              <text x="${labelWidth / 2}" y="152" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#777777" text-anchor="middle" letter-spacing="1.5">EXTRAIT DE PARFUM</text>
              
              <!-- Volume Details -->
              <text x="18" y="195" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#888888" text-anchor="start">60ml</text>
              <text x="${labelWidth - 18}" y="195" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#888888" text-anchor="end">2.0 OZ</text>
            </svg>`
          );
        };

        const leftLabelSvg = renderLabel("KING-DTD");
        const rightLabelSvg = renderLabel("KING-DI");

        const leftLabelBuffer = await sharp(leftLabelSvg)
          .composite([{ input: logoBuffer, top: 30, left: Math.round((labelWidth - logoWidth) / 2), blend: 'over' }])
          .png()
          .toBuffer();

        const rightLabelBuffer = await sharp(rightLabelSvg)
          .composite([{ input: logoBuffer, top: 30, left: Math.round((labelWidth - logoWidth) / 2), blend: 'over' }])
          .png()
          .toBuffer();

        await sharp(originalBuffer)
          .resize(800, 800, { fit: 'cover' })
          .composite([
            { input: leftLabelBuffer, top: 502, left: 200, blend: 'over' },
            { input: rightLabelBuffer, top: 502, left: 443, blend: 'over' }
          ])
          .png()
          .toFile(localWatermarkedPath);

        return { ...p, image: watermarkedWebPath };
      }

      // General Case: Single White Bottle mockup
      const { data, info } = await sharp(originalBuffer)
        .resize(800, 800, { fit: 'cover' })
        .raw()
        .toBuffer({ resolveWithObject: true });

      // Scan horizontal projection of white label pixels in y-range [500, 700]
      const rowCount = [];
      for (let x = 0; x < 800; x++) {
        let count = 0;
        for (let y = 500; y < 700; y++) {
          const idx = (y * 800 + x) * info.channels;
          if (isWhite(data[idx], data[idx + 1], data[idx + 2])) {
            count++;
          }
        }
        rowCount.push(count);
      }

      // Find the main white label range (width > 150)
      let labelStartX = -1;
      let labelEndX = -1;
      let inRange = false;
      let currentStart = 0;
      
      for (let x = 0; x < 800; x++) {
        if (rowCount[x] > 40) {
          if (!inRange) {
            currentStart = x;
            inRange = true;
          }
        } else {
          if (inRange) {
            const width = x - 1 - currentStart;
            if (width > 150) { // Main label is always around 180-240px wide
              labelStartX = currentStart;
              labelEndX = x - 1;
              break;
            }
            inRange = false;
          }
        }
      }

      // Fallback to standard center coordinates if label detection fails
      let centerX = 433;
      if (labelStartX !== -1 && labelEndX !== -1) {
        centerX = Math.round((labelStartX + labelEndX) / 2);
        console.log(`  -> Detected white label center at X = ${centerX} (range: ${labelStartX} to ${labelEndX})`);
      } else {
        console.log(`  -> Warning: White label center detection failed, falling back to standard center X = 433`);
      }

      // Exact dimensions matching the original white label on the mockup bottle
      const labelWidth = 202;
      const labelHeight = 298;
      const labelLeft = Math.round(centerX - labelWidth / 2);
      const labelTop = 471;

      // Scale logo down to look elegant and avoid overlapping glass reflections
      const logoWidth = 80;
      const logoBuffer = await sharp(logoPath)
        .resize({ width: logoWidth })
        .toBuffer();

      const perfumeName = getCleanPerfumeName(p.name);
      
      let fontSize = 12;
      if (perfumeName.length > 15) fontSize = 10;
      else if (perfumeName.length > 10) fontSize = 11;

      const labelSvg = Buffer.from(
        `<svg width="${labelWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- 3D cylindrical shading gradient to match bottle surface -->
            <linearGradient id="labelShading" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#eae6df" />
              <stop offset="8%" stop-color="#f6f3ed" />
              <stop offset="50%" stop-color="#fdfcf8" />
              <stop offset="92%" stop-color="#f6f3ed" />
              <stop offset="100%" stop-color="#eae6df" />
            </linearGradient>
          </defs>
          
          <!-- Base Label Background with shading -->
          <rect width="${labelWidth}" height="${labelHeight}" fill="url(#labelShading)" rx="2" ry="2" />
          
          <!-- Outer Elegant Gold Border -->
          <rect x="5" y="5" width="${labelWidth - 10}" height="${labelHeight - 10}" fill="none" stroke="#d4af37" stroke-width="1.75" rx="1" ry="1" />
          
          <!-- Inner Thin Gold Border -->
          <rect x="8" y="8" width="${labelWidth - 16}" height="${labelHeight - 16}" fill="none" stroke="#d4af37" stroke-width="0.75" stroke-opacity="0.6" />
          
          <!-- Typography -->
          <!-- Fragrance Name -->
          <text x="${labelWidth / 2}" y="180" font-family="Georgia, serif" font-size="${fontSize}" font-weight="bold" fill="#1a1a1a" text-anchor="middle" letter-spacing="1">${perfumeName}</text>
          
          <!-- Subtitle/Concentration -->
          <text x="${labelWidth / 2}" y="205" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#777777" text-anchor="middle" letter-spacing="2">EXTRAIT DE PARFUM</text>
          
          <!-- Volume details at bottom -->
          <text x="25" y="265" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#888888" text-anchor="start">60ml</text>
          <text x="${labelWidth - 25}" y="265" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#888888" text-anchor="end">2.0 OZ</text>
        </svg>`
      );

      const logoLeftInLabel = Math.round((labelWidth - logoWidth) / 2);
      const logoTopInLabel = 40;

      const finishedLabelBuffer = await sharp(labelSvg)
        .composite([{
          input: logoBuffer,
          top: logoTopInLabel,
          left: logoLeftInLabel,
          blend: 'over'
        }])
        .png()
        .toBuffer();

      await sharp(originalBuffer)
        .resize(800, 800, { fit: 'cover' })
        .composite([{
          input: finishedLabelBuffer,
          top: labelTop,
          left: labelLeft,
          blend: 'over'
        }])
        .png()
        .toFile(localWatermarkedPath);

      return {
        ...p,
        image: watermarkedWebPath
      };
    } else {
      // Revert paths for non-white bottles
      return {
        ...p,
        image: originalWebPath
      };
    }
  } catch (error) {
    console.error(`Failed to process image for ${p.name}:`, error.message);
    return p;
  }
}

async function run() {
  const constantsPath = path.join(__dirname, 'src', 'lib', 'constants.ts');
  if (!fs.existsSync(constantsPath)) {
    console.error(`Constants file not found at ${constantsPath}`);
    return;
  }

  const currentContent = fs.readFileSync(constantsPath, 'utf8');

  // Find the COLLECTION_PRODUCTS array block
  const startIdx = currentContent.indexOf('export const COLLECTION_PRODUCTS = [');
  if (startIdx === -1) {
    console.error('Could not find COLLECTION_PRODUCTS in constants.ts');
    return;
  }

  const arrayStr = currentContent.substring(startIdx);
  const bracketIndex = arrayStr.indexOf('] as const;');
  if (bracketIndex === -1) {
    console.error('Could not find closing bracket for COLLECTION_PRODUCTS');
    return;
  }

  const cleanArrayStr = arrayStr.substring(0, bracketIndex + 1);
  const tempJSPath = path.join(__dirname, 'temp_products.cjs');
  const jsContent = cleanArrayStr
    .replace('export const COLLECTION_PRODUCTS =', 'const COLLECTION_PRODUCTS =')
    .replace('as const', '');
  
  fs.writeFileSync(tempJSPath, jsContent + '\nmodule.exports = { COLLECTION_PRODUCTS };', 'utf8');

  const { COLLECTION_PRODUCTS } = require('./temp_products.cjs');
  if (fs.existsSync(tempJSPath)) {
    fs.unlinkSync(tempJSPath);
  }

  console.log(`Processing images for ${COLLECTION_PRODUCTS.length} products...`);

  const updatedProducts = [];
  for (const product of COLLECTION_PRODUCTS) {
    const updated = await processProduct(product);
    updatedProducts.push(updated);
  }

  // Format the updated products array
  let collectionStr = 'export const COLLECTION_PRODUCTS = [\n';
  updatedProducts.forEach(p => {
    collectionStr += '  {\n';
    collectionStr += `    id: "${p.id}",\n`;
    collectionStr += `    name: "${p.name.replace(/"/g, '\\"')}",\n`;
    collectionStr += `    category: "${p.category}",\n`;
    collectionStr += `    priceRange: "${p.priceRange}",\n`;
    collectionStr += `    description: "${p.description.replace(/"/g, '\\"')}",\n`;
    collectionStr += `    notes: {\n`;
    collectionStr += `      top: "${p.notes.top.replace(/"/g, '\\"')}",\n`;
    collectionStr += `      heart: "${p.notes.heart.replace(/"/g, '\\"')}",\n`;
    collectionStr += `      base: "${p.notes.base.replace(/"/g, '\\"')}"\n`;
    collectionStr += `    },\n`;
    collectionStr += `    image: "${p.image}",\n`;
    if (p.tag) {
      collectionStr += `    tag: "${p.tag}"\n`;
    }
    collectionStr += '  },\n';
  });
  collectionStr += '] as const;\n';

  const beforeCollection = currentContent.substring(0, startIdx);
  const newContent = beforeCollection + collectionStr;

  fs.writeFileSync(constantsPath, newContent, 'utf8');
  console.log(`\nSuccessfully processed all product images and updated constants.ts!`);
}

run().catch(err => console.error(err));
