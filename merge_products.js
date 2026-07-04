const fs = require('fs');
const path = require('path');

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<\/?[^>]+(>|$)/g, ' ')  // Strip HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')             // Collapse whitespace
    .trim();
}

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/@/g, 'a')
    .replace(/0/g, 'o')
    .replace(/µ/g, 'u')
    .replace(/Ġůccï/g, 'Gucci')
    .replace(/FL0r@/g, 'Flora')
    .replace(/FL0r/g, 'Flora')
    .replace(/čhanÈl/g, 'Chanel')
    .replace(/ČhanÈl/g, 'Chanel')
    .replace(/Čhanel/g, 'Chanel')
    .replace(/L\$tt\$fa/g, 'Lattafa')
    .replace(/L@tt@fa/g, 'Lattafa')
    .replace(/Kh@mrah/g, 'Khamrah')
    .replace(/Cristi@no/g, 'Cristiano')
    .replace(/Ron@ld0/g, 'Ronaldo')
    .replace(/J'@dore/g, "J'adore")
    .replace(/Wisal Dahab/g, 'Wisal Dhahab')
    .replace(/Wis@l/g, 'Wisal')
    .replace(/Dhahab/g, 'Dhahab')
    .replace(/Dh@h@b/g, 'Dhahab')
    .replace(/Bacc@rat/g, 'Baccarat')
    .replace(/0pium/g, 'Opium')
    .replace(/david_0ff/g, 'Davidoff')
    .replace(/David_0ff/g, 'Davidoff')
    .replace(/aksh_y/g, 'Akshay')
    .replace(/kum_r/g, 'Kumar')
    .replace(/Avnts/g, 'Aventus')
    .replace(/Av3ntus/g, 'Aventus')
    .replace(/d_vid/g, 'David')
    .replace(/beckh_m/g, 'Beckham')
    .replace(/T0mford/g, 'Tom Ford')
    .replace(/t_abacc0/g, 'tobacco')
    .replace(/v_nille/g, 'vanille')
    .replace(/Baccarat R/g, 'Baccarat Rouge')
    .replace(/BR 540/g, 'Baccarat Rouge 540')
    .replace(/r_nveer/g, 'Ranveer')
    .replace(/singh/g, 'Singh')
    .replace(/1ooml/g, '100ml')
    .replace(/2oml/g, '20ml')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseNotes(description) {
  const notes = {
    top: 'Bergamot, Fresh Notes',
    heart: 'Floral Notes, Jasmine',
    base: 'Amber, Cedarwood, Musk'
  };

  if (!description) return notes;

  // Search for top notes
  const topMatch = description.match(/Top notes are ([^;.]+)/i);
  if (topMatch) {
    notes.top = topMatch[1].trim();
  }

  // Search for heart/middle notes
  const heartMatch = description.match(/(?:middle|heart) notes are ([^;.]+)/i);
  if (heartMatch) {
    notes.heart = heartMatch[1].trim();
  }

  // Search for base notes
  const baseMatch = description.match(/base notes are ([^;.]+)/i);
  if (baseMatch) {
    notes.base = baseMatch[1].trim();
  }

  return notes;
}

function runMerge() {
  const scrapedDataPath = path.join(__dirname, 'celestial_scraped_data.json');
  const constantsPath = path.join(__dirname, 'src', 'lib', 'constants.ts');

  if (!fs.existsSync(scrapedDataPath)) {
    console.error(`Error: Scraped data file not found at ${scrapedDataPath}`);
    return;
  }

  if (!fs.existsSync(constantsPath)) {
    console.error(`Error: Constants file not found at ${constantsPath}`);
    return;
  }

  console.log('Reading scraped data...');
  const rawScraped = fs.readFileSync(scrapedDataPath, 'utf8');
  const scraped = JSON.parse(rawScraped);
  
  console.log(`Loaded ${scraped.products.length} products from scraped data.`);

  // Define the base products (p1 - p7) manually to preserve their details
  const baseProducts = [
    {
      id: "p1",
      name: "Ambre Doré",
      category: "Luxury Perfumes",
      priceRange: "₹2,499 - ₹4,999",
      description: "An opulent oriental fragrance opening with luminous warm amber and rich spices, drying down to fine woods and sweet vanilla.",
      notes: {
        top: "Warm Spices, Bergamot",
        heart: "Amber, Rose, Patchouli",
        base: "Sandalwood, Vanilla, Musk"
      },
      image: "/images/luxury_gold.png",
      tag: "Signature Scent"
    },
    {
      id: "p2",
      name: "Royal Oud",
      category: "Arabian Attars",
      priceRange: "₹899 - ₹2,199",
      description: "A majestic, non-alcoholic concentrated perfume oil featuring deep, authentic agarwood (oud) blended with saffron and dark rose.",
      notes: {
        top: "Saffron, Cardamom",
        heart: "Royal Oud, Damask Rose",
        base: "Ambergris, Leather, Sandalwood"
      },
      image: "/images/arabian_attar.png",
      tag: "Best Seller"
    },
    {
      id: "p3",
      name: "Oceanic Instinct",
      category: "Men's Collection",
      priceRange: "₹1,299 - ₹2,799",
      description: "A bold, masculine fragrance capturing the raw energy of the sea. Clean, fresh, and exceptionally long-lasting.",
      notes: {
        top: "Sea Salt, Grapefruit",
        heart: "Bay Leaf, Jasmine, Marine Notes",
        base: "Guaiac Wood, Ambergris, Oakmoss"
      },
      image: "/images/blue_ocean.png",
      tag: "Trending"
    },
    {
      id: "p4",
      name: "Rose Elixir",
      category: "Women's Collection",
      priceRange: "₹1,499 - ₹3,299",
      description: "An elegant, romantic floral fragrance celebrating the eternal beauty of fresh rose petals, sweet fruits, and soft vanilla cream.",
      notes: {
        top: "Red Berries, Lychee",
        heart: "Turkish Rose, Peony",
        base: "White Musk, Vanilla Elixir"
      },
      image: "/images/rose_petals.png",
      tag: "Elegant"
    },
    {
      id: "p5",
      name: "Aether Absolu",
      category: "Unisex Collection",
      priceRange: "₹1,899 - ₹3,999",
      description: "A modern, minimalist unisex masterpiece balancing earthy vetiver with bright citrus and velvety cashmeran.",
      notes: {
        top: "Calabrian Bergamot, Green Tea",
        heart: "Haitian Vetiver, Iris",
        base: "Cashmere Wood, Amberwood"
      },
      image: "/images/unisex_velvet.png",
      tag: "Exquisite"
    },
    {
      id: "p6",
      name: "L'Or Premium Set",
      category: "Gift Sets",
      priceRange: "₹2,999 - ₹5,999",
      description: "An elegantly curated gift box containing two of our most sought-after signature Eau de Parfums in luxurious custom packaging.",
      notes: {
        top: "Premium Selection",
        heart: "Double Bottle Gift Set",
        base: "Luxury Presentation Box"
      },
      image: "/images/gift_premium.png",
      tag: "Perfect Gift"
    },
    {
      id: "p7",
      name: "Aether Pocket Spray",
      category: "Pocket Perfumes",
      priceRange: "₹299 - ₹499",
      description: "Your favorite signature scents packaged in a sleek, travel-friendly metallic case for quick freshness on-the-go.",
      notes: {
        top: "Citrus Crush, Mint",
        heart: "Lavender, Fresh Notes",
        base: "Light Musk, Cedarwood"
      },
      image: "/images/pocket_fresh.png",
      tag: "On-The-Go"
    }
  ];

  console.log('Mapping scraped products...');
  const mergedProducts = [...baseProducts];

  scraped.products.forEach(p => {
    // Determine Category
    let category = 'Luxury Perfumes';
    const titleLower = p.title.toLowerCase();
    const tagsLower = p.tags ? p.tags.map(t => t.toLowerCase()) : [];

    if (titleLower.includes('gift set') || titleLower.includes('gift box') || titleLower.includes('special box') || p.handle.includes('gift')) {
      category = 'Gift Sets';
    } else if (tagsLower.includes('him') || titleLower.includes('for him') || titleLower.includes('men')) {
      category = "Men's Collection";
    } else if (tagsLower.includes('her') || titleLower.includes('for her') || titleLower.includes('women')) {
      category = "Women's Collection";
    } else if (tagsLower.includes('gourmet') || titleLower.includes('gourmet')) {
      category = 'Imported Fragrances';
    } else if (titleLower.includes('pocket') || tagsLower.includes('pocket')) {
      category = 'Pocket Perfumes';
    }

    // Parse price range
    let priceRange = '₹849 - ₹1,099';
    if (p.variants && p.variants.length > 0) {
      const prices = p.variants.map(v => parseFloat(v.price)).filter(p => !isNaN(p));
      if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        if (minPrice === maxPrice) {
          priceRange = `₹${minPrice.toLocaleString('en-IN')}`;
        } else {
          priceRange = `₹${minPrice.toLocaleString('en-IN')} - ₹${maxPrice.toLocaleString('en-IN')}`;
        }
      }
    }

    // Clean description and parse notes
    const description = cleanHtml(p.body_html);
    const cleanedDesc = cleanText(description) || 'Premium inspired fragrance with exceptional lasting notes.';
    const notes = parseNotes(description);
    
    // Notes cleaning
    notes.top = cleanText(notes.top);
    notes.heart = cleanText(notes.heart);
    notes.base = cleanText(notes.base);

    // Determine tags
    let tag = undefined;
    if (tagsLower.includes('newarrival')) {
      tag = 'New Arrival';
    } else if (tagsLower.includes('tejasswi-favourite')) {
      tag = 'Tejasswi Fav';
    } else if (tagsLower.includes('best-seller')) {
      tag = 'Best Seller';
    }

    const image = p.images && p.images.length > 0 ? p.images[0].src : '/images/luxury_gold.png';

    mergedProducts.push({
      id: `celestial-${p.id}`,
      name: cleanText(p.title),
      category: category,
      priceRange: priceRange,
      description: cleanedDesc,
      notes: notes,
      image: image,
      tag: tag
    });
  });

  console.log(`Generated ${mergedProducts.length} combined products.`);

  // Read existing constants.ts
  const currentContent = fs.readFileSync(constantsPath, 'utf8');

  // We want to replace the export const COLLECTION_PRODUCTS array.
  // Find where COLLECTION_PRODUCTS starts
  const collectionIndex = currentContent.indexOf('export const COLLECTION_PRODUCTS =');
  if (collectionIndex === -1) {
    console.error('Error: Could not find export const COLLECTION_PRODUCTS in constants.ts');
    return;
  }

  const beforeCollection = currentContent.substring(0, collectionIndex);

  // Format the new collection as clean JS/TS output
  let collectionStr = 'export const COLLECTION_PRODUCTS = [\n';
  mergedProducts.forEach(p => {
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

  const newContent = beforeCollection + collectionStr;

  fs.writeFileSync(constantsPath, newContent, 'utf8');
  console.log(`Successfully merged products and updated ${constantsPath}!`);
}

runMerge();
