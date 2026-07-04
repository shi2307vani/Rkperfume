const fs = require('fs');

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

async function scrapeEverything() {
  const shopDomain = 'celestialperfume.in';
  const scrapedData = {
    metadata: {
      source: `https://${shopDomain}`,
      scrapedAt: new Date().toISOString(),
      counts: {
        products: 0,
        collections: 0,
        pages: 0
      }
    },
    pages: [],
    collections: [],
    products: []
  };

  console.log(`Starting comprehensive scrape of https://${shopDomain}...`);

  // 1. Scrape Pages
  try {
    console.log('Fetching pages...');
    const response = await fetch(`https://${shopDomain}/pages.json`);
    if (response.ok) {
      const data = await response.json();
      scrapedData.pages = data.pages || [];
      scrapedData.metadata.counts.pages = scrapedData.pages.length;
      console.log(`Fetched ${scrapedData.pages.length} pages.`);
    } else {
      console.warn(`Failed to fetch pages. Status: ${response.status}`);
    }
  } catch (err) {
    console.error('Error fetching pages:', err.message);
  }

  // 2. Scrape Collections
  try {
    console.log('Fetching collections...');
    const response = await fetch(`https://${shopDomain}/collections.json`);
    if (response.ok) {
      const data = await response.json();
      scrapedData.collections = data.collections || [];
      scrapedData.metadata.counts.collections = scrapedData.collections.length;
      console.log(`Fetched ${scrapedData.collections.length} collections.`);
    } else {
      console.warn(`Failed to fetch collections. Status: ${response.status}`);
    }
  } catch (err) {
    console.error('Error fetching collections:', err.message);
  }

  // 3. Scrape Products (with pagination)
  let page = 1;
  let hasMoreProducts = true;
  try {
    console.log('Fetching products...');
    while (hasMoreProducts) {
      const url = `https://${shopDomain}/products.json?limit=250&page=${page}`;
      console.log(`Fetching products page ${page}...`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.products && data.products.length > 0) {
        scrapedData.products = scrapedData.products.concat(data.products);
        console.log(`Fetched ${data.products.length} products (Total: ${scrapedData.products.length})`);
        page++;
      } else {
        hasMoreProducts = false;
      }
    }
    scrapedData.metadata.counts.products = scrapedData.products.length;
    console.log(`Finished fetching products. Total: ${scrapedData.products.length}`);
  } catch (err) {
    console.error('Error fetching products:', err.message);
  }

  // --- SAVE RAW JSON DATA ---
  const jsonPath = './celestial_scraped_data.json';
  fs.writeFileSync(jsonPath, JSON.stringify(scrapedData, null, 2), 'utf-8');
  console.log(`Raw data saved to ${jsonPath}`);

  // --- SAVE FORMATTED MARKDOWN DATA ---
  const mdPath = './celestial_scraped_data.md';
  let md = `# Celestial Perfume Website Data Scraped\n\n`;
  md += `This file contains the complete scraped information from [Celestial Perfume](https://celestialperfume.in/) including static pages, collections, and catalog products.\n\n`;
  
  md += `## 📋 Scraped Summary\n\n`;
  md += `- **Website:** https://${shopDomain}\n`;
  md += `- **Scraped Timestamp:** ${scrapedData.metadata.scrapedAt}\n`;
  md += `- **Total Pages Scraped:** ${scrapedData.metadata.counts.pages}\n`;
  md += `- **Total Collections Scraped:** ${scrapedData.metadata.counts.collections}\n`;
  md += `- **Total Products Scraped:** ${scrapedData.metadata.counts.products}\n\n`;

  md += `## 📖 Table of Contents\n\n`;
  md += `1. [Pages / Info Sections](#-pages--info-sections)\n`;
  md += `2. [Collections / Categories](#-collections--categories)\n`;
  md += `3. [Products Catalog](#-products-catalog)\n\n`;

  md += `---\n\n`;

  // Section 1: Pages
  md += `## 📄 Pages / Info Sections\n\n`;
  if (scrapedData.pages.length === 0) {
    md += `*No pages found.*\n\n`;
  } else {
    scrapedData.pages.forEach(p => {
      md += `### ${p.title}\n\n`;
      md += `- **Link:** \`https://${shopDomain}/pages/${p.handle}\`\n`;
      md += `- **Last Updated:** ${p.updated_at.split('T')[0]}\n`;
      md += `- **Content:**\n\n`;
      md += `> ${cleanHtml(p.body_html) || 'No text content'}\n\n`;
      md += `***\n\n`;
    });
  }

  md += `---\n\n`;

  // Section 2: Collections
  md += `## 🏷️ Collections / Categories\n\n`;
  if (scrapedData.collections.length === 0) {
    md += `*No collections found.*\n\n`;
  } else {
    md += `| Collection Title | Handle | Products Count | Description |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    scrapedData.collections.forEach(c => {
      const desc = cleanHtml(c.description) || 'No description';
      md += `| **${c.title}** | \`${c.handle}\` | ${c.products_count || 0} | ${desc} |\n`;
    });
    md += `\n`;
  }

  md += `---\n\n`;

  // Section 3: Products Catalog
  md += `## 🛍️ Products Catalog\n\n`;
  if (scrapedData.products.length === 0) {
    md += `*No products found.*\n\n`;
  } else {
    scrapedData.products.forEach((p, idx) => {
      md += `### ${idx + 1}. ${p.title}\n\n`;
      md += `- **ID:** \`${p.id}\`\n`;
      md += `- **Product Handle:** [\`${p.handle}\`](https://${shopDomain}/products/${p.handle})\n`;
      md += `- **Vendor:** ${p.vendor || 'N/A'}\n`;
      md += `- **Type:** ${p.product_type || 'N/A'}\n`;
      md += `- **Tags:** ${p.tags && p.tags.length > 0 ? p.tags.map(t => `\`${t}\``).join(', ') : '*None*'}\n`;
      
      // Variants
      if (p.variants && p.variants.length > 0) {
        md += `- **Pricing & Variants:**\n`;
        p.variants.forEach(v => {
          const comp = v.compare_at_price ? ` (Compare at: ₹${v.compare_at_price})` : '';
          const status = v.available ? '✅ In Stock' : '❌ Out of Stock';
          md += `  - **${v.title}**: ₹${v.price}${comp} [${status}]\n`;
        });
      }

      // Description
      md += `- **Description:** ${cleanHtml(p.body_html) || '*No description available*'}\n`;

      // Images
      if (p.images && p.images.length > 0) {
        md += `- **Images:**\n`;
        p.images.forEach((img, i) => {
          md += `  - [Image ${i + 1}](${img.src})\n`;
        });
        // Embed first image
        md += `\n![${p.title}](${p.images[0].src})\n\n`;
      }
      
      md += `***\n\n`;
    });
  }

  fs.writeFileSync(mdPath, md, 'utf-8');
  console.log(`Markdown saved to ${mdPath}`);
  console.log('All scraping and formatting completed successfully!');
}

scrapeEverything().catch(err => {
  console.error('An error occurred during scraping:', err);
});
