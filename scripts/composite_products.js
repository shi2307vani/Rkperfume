const sharp = require('d:/Rkperfume-main/node_modules/sharp');
const path = require('path');

async function main() {
  const logoPath = 'd:/Rkperfume-main/public/images/logo_essprive_clean.png';

  // 1. Azure Bloom (Clear Bottle)
  const azureBg = 'd:/Rkperfume-main/public/images/product_azure_bloom_clean.jpg';
  const azureOut = 'd:/Rkperfume-main/public/images/fleur_product_azure_bloom.jpg';
  const logoAzure = await sharp(logoPath).resize({ width: 120 }).toBuffer();
  await sharp(azureBg)
    .composite([{ input: logoAzure, left: 308, top: 520 }])
    .toFile(azureOut);
  console.log('Created Azure Bloom');

  // 2. Azure Bloom for Him (Black Bottle)
  const himBg = 'd:/Rkperfume-main/public/images/product_azure_him_clean.jpg';
  const himOut = 'd:/Rkperfume-main/public/images/fleur_product_azure_him.jpg';
  // White logo with subtle opacity
  const logoWhite = await sharp(logoPath)
    .negate({ alpha: false })
    .resize({ width: 110 })
    .toBuffer();
  await sharp(himBg)
    .composite([{ input: logoWhite, left: 445, top: 480 }])
    .toFile(himOut);
  console.log('Created Azure Bloom for Him');

  // 3. Air Collection (Minimalist Square Bottle)
  const airBg = 'd:/Rkperfume-main/public/images/product_air_clean.jpg';
  const airOut = 'd:/Rkperfume-main/public/images/fleur_product_air.jpg';
  const logoAir = await sharp(logoPath).resize({ width: 115 }).toBuffer();
  await sharp(airBg)
    .composite([{ input: logoAir, left: 442, top: 550 }])
    .toFile(airOut);
  console.log('Created Air Collection');
}

main().catch(console.error);
