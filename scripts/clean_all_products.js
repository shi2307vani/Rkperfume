const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/constants.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Map of specific distorted product names to clean title, type, scent profile, and accurate notes
const nameCleaners = {
  "Inspired by L@tt@fa Kh@mrah Waha Perfume": {
    name: "Inspired by Lattafa Khamrah Qahwa",
    type: "Inspired",
    scentProfile: "Sweet Gourmand & Warm Spice",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Cinnamon, Cardamom, Ginger",
      heart: "Praline, Candied Fruits, White Flowers",
      base: "Coffee, Vanilla, Tonka Bean, Benzoin, Oud"
    }
  },
  "Inspired By CR 7 ( Worn By Cristi@no Ron@ld0 )": {
    name: "Inspired by CR7 (Cristiano Ronaldo)",
    type: "Inspired",
    scentProfile: "Fresh & Aromatic Spicy",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Bergamot, Artemisia, Cardamom, Lavender",
      heart: "Cinnamon, Cedar, Iris, Tobacco",
      base: "Sandalwood, Amber, Vanilla, Musk"
    }
  },
  "Inspired by Miss D Perfume": {
    name: "Inspired by Miss Dior",
    type: "Inspired",
    scentProfile: "Floral & Fresh Romantic",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Lily of the Valley, Peony, Iris",
      heart: "Centifolia Rose, Apricot, Peach",
      base: "Vanilla, Tonka Bean, White Musk, Sandalwood"
    }
  },
  "Inspired by P@co Rabbane Lady Milli0n Perfume": {
    name: "Inspired by Paco Rabanne Lady Million",
    type: "Inspired",
    scentProfile: "Floral & Honey Sweet",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Bitter Orange, Raspberry, Neroli",
      heart: "Orange Blossom, Arabian Jasmine, Gardenia",
      base: "Patchouli, Honey, Amber"
    }
  },
  "Inspired By Ġůccï FL0r@ Gorgeous Magnolia": {
    name: "Inspired by Gucci Flora Gorgeous Magnolia",
    type: "Inspired",
    scentProfile: "Floral & Fruity Radiant",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Dewberry, Coconut Accord, Sweet Orange",
      heart: "Magnolia Essence, Jasmine Sambac, Clary Sage",
      base: "Patchouli, Blonde Woods, Coconut Musk"
    }
  },
  "Inspired by YSL Libre": {
    name: "Inspired by YSL Libre",
    type: "Inspired",
    scentProfile: "Floral & Lavender Elegance",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Lavender, Mandarin Orange, Blackcurrant, Petitgrain",
      heart: "Lavender, Orange Blossom, Jasmine Sambac",
      base: "Madagascar Vanilla, Cedar, Ambergris, Musk"
    }
  },
  "Inspired By Gucci Flora Gorgeous Jasmine": {
    name: "Inspired by Gucci Flora Gorgeous Jasmine",
    type: "Inspired",
    scentProfile: "Radiant White Floral",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Mandarin Essence, Bergamot, Black Pepper",
      heart: "Grandiflorum Jasmine, Magnolia, Damask Rose",
      base: "Sandalwood, Benzoin, Patchouli"
    }
  },
  "Inspired By Gucci Flora Gorgeous Orchid": {
    name: "Inspired by Gucci Flora Gorgeous Orchid",
    type: "Inspired",
    scentProfile: "Sweet Gourmand Floral",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Vanilla Infusion, Dewy Greens",
      heart: "Vanilla Orchid, White Lily",
      base: "Ozonic Notes, Tonka Bean, Soft Musk"
    }
  },
  "Celestial Perfume Imagination": {
    name: "Inspired by Louis Vuitton Imagination",
    type: "Inspired",
    scentProfile: "Fresh Citrus & Black Tea",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Calabrian Bergamot, Citron, Sicilian Orange",
      heart: "Tunisian Neroli, Nigerian Ginger, Ceylon Cinnamon",
      base: "Chinese Black Tea, Ambroxan, Guaiac Wood, Olibanum"
    }
  },
  "Celestial Perfume J'@dore": {
    name: "Inspired by Dior J'adore",
    type: "Inspired",
    scentProfile: "Floral Bouquet & Golden Fruits",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Melon, Magnolia, Peach, Mandarin Orange",
      heart: "Jasmine, Lily-of-the-Valley, Tuberose, Freesia, Rose",
      base: "Musk, Vanilla, Cedar, Blackberry"
    }
  },
  "Celestial Perfume Wisal Dahab": {
    name: "Inspired by Ajmal Wisal Dhahab",
    type: "Inspired",
    scentProfile: "Warm Oud & Gilded Rose",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Apple, Peach, Grapefruit, Mandarin Orange",
      heart: "Rose, Jasmine, Orchid, Geranium",
      base: "Sandalwood, White Musk, Patchouli, Cedarwood"
    }
  },
  "Celestial Perfume Khamrah": {
    name: "Inspired by Lattafa Khamrah",
    type: "Inspired",
    scentProfile: "Warm Amber, Dates & Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Cinnamon, Nutmeg, Bergamot",
      heart: "Dates, Praline, Tuberose, Mahonial",
      base: "Vanilla, Tonka Bean, Benzoin, Myrrh, Akigalawood"
    }
  },
  "Celestial Perfume Tabacco VN": {
    name: "Inspired by Tom Ford Tobacco Vanille",
    type: "Inspired",
    scentProfile: "Warm Spicy Tobacco & Rich Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Tobacco Leaf, Aromatic Spices",
      heart: "Tonka Bean, Tobacco Blossom, Vanilla, Cacao",
      base: "Dry Fruit Accord, Precious Woods"
    }
  },
  "Celestial Perfume Bacc@rat R": {
    name: "Inspired by Baccarat Rouge 540",
    type: "Inspired",
    scentProfile: "Airy Amber, Saffron & Cedar",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Saffron, Jasmine",
      heart: "Amberwood, Ambergris",
      base: "Fir Resin, Cedarwood"
    }
  },
  "Celestial Perfume Black Opium": {
    name: "Inspired by YSL Black Opium",
    type: "Inspired",
    scentProfile: "Warm Coffee & Floral Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Pink Pepper, Orange Blossom",
      heart: "Coffee, Jasmine, Bitter Almond, Licorice",
      base: "Vanilla, Patchouli, Cashmere Wood, Cedar"
    }
  },
  "Celestial Perfume Cool Water": {
    name: "Inspired by Davidoff Cool Water",
    type: "Inspired",
    scentProfile: "Fresh Aquatic & Clean Mint",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Sea Water, Mint, Green Notes, Lavender, Coriander",
      heart: "Sandalwood, Jasmine, Neroli, Geranium",
      base: "Musk, Oakmoss, Cedar, Tobacco, Amber"
    }
  },
  "Celestial Perfume Avnts": {
    name: "Inspired by Creed Aventus",
    type: "Inspired",
    scentProfile: "Smoky Pineapple, Birch & Ambergris",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Pineapple, Bergamot, Blackcurrant, Apple",
      heart: "Birch, Patchouli, Moroccan Jasmine, Rose",
      base: "Musk, Oakmoss, Ambergris, Vanille"
    }
  },
  "Celestial Perfume DTD": {
    name: "Inspired by Diptyque Tam Dao",
    type: "Inspired",
    scentProfile: "Sacred Creamy Sandalwood & Cypress",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Italian Cypress, Myrtle, Rose",
      heart: "Sandalwood, Cedarwood",
      base: "Brazilian Rosewood, Spices, Amber, White Musk"
    }
  },
  "Celestial Perfume Guilty": {
    name: "Inspired by Gucci Guilty Pour Homme",
    type: "Inspired",
    scentProfile: "Woody Aromatic & Lavender",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Lavender, Amalfi Lemon",
      heart: "African Orange Flower, Neroli",
      base: "Virginia Cedar, Patchouli, Vanilla"
    }
  },
  "Celestial Perfume Ombre Leather": {
    name: "Inspired by Tom Ford Ombré Leather",
    type: "Inspired",
    scentProfile: "Warm Spiced Leather & Jasmine",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Cardamom",
      heart: "Leather, Jasmine Sambac",
      base: "Amber, Moss, Patchouli"
    }
  },
  "Celestial Perfume Ck1": {
    name: "Inspired by Calvin Klein CK One",
    type: "Inspired",
    scentProfile: "Fresh Citrus Clean & Green Tea",
    priceRange: "₹799 - ₹999",
    notes: {
      top: "Lemon, Green Notes, Bergamot, Pineapple, Mandarin",
      heart: "Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose",
      base: "Green Tea Accord, Musk, Cedar, Sandalwood, Amber"
    }
  },
  "Celestial Perfume Bombshell": {
    name: "Inspired by Victoria's Secret Bombshell",
    type: "Inspired",
    scentProfile: "Playful Fruity Floral Passionfruit",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Passionfruit, Grapefruit, Pineapple, Tangerine, Strawberry",
      heart: "Peony, Vanilla Orchid, Red Berries, Jasmine",
      base: "Musk, Woody Notes, Oakmoss"
    }
  },
  "Celestial Perfume Eros": {
    name: "Inspired by Versace Eros",
    type: "Inspired",
    scentProfile: "Fresh Mint, Green Apple & Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Mint, Green Apple, Italian Lemon",
      heart: "Tonka Bean, Ambroxan, Geranium",
      base: "Madagascar Vanilla, Virginian Cedar, Atlas Cedar, Vetiver"
    }
  },
  "Celestial Perfume Oud Wood": {
    name: "Inspired by Tom Ford Oud Wood",
    type: "Inspired",
    scentProfile: "Exotic Oud, Rosewood & Cardamom",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Rosewood, Cardamom, Chinese Pepper",
      heart: "Oud Wood, Sandalwood, Vetiver",
      base: "Tonka Bean, Vanilla, Amber"
    }
  },
  "Celestial Perfume Paradoxe": {
    name: "Inspired by Prada Paradoxe",
    type: "Inspired",
    scentProfile: "Warm Floral Amber & Neroli",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Tangerine, Calabrian Bergamot",
      heart: "Orange Blossom, Neroli Essence, Jasmine Sambac",
      base: "Bourbon Vanilla, Amber, White Musk, Benzoin"
    }
  },
  "Celestial Perfume My way": {
    name: "Inspired by Giorgio Armani My Way",
    type: "Inspired",
    scentProfile: "Bright White Floral & Citrus",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Orange Blossom, Bergamot",
      heart: "Tuberose, Indian Jasmine",
      base: "Madagascar Vanilla, White Musk, Virginian Cedar"
    }
  },
  "Celestial Perfume Eden Apple": {
    name: "Inspired by Kayali Eden Juicy Apple",
    type: "Inspired",
    scentProfile: "Juicy Crisp Red Apple & Berries",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Red Apple, Lychee, Blackcurrant, Pink Grapefruit",
      heart: "Wild Berries, Raspberry Blossom, Jasmine",
      base: "Vanilla Sugar, Amber, Musk"
    }
  },
  "Celestial Perfume Coco M": {
    name: "Inspired by Chanel Coco Mademoiselle",
    type: "Inspired",
    scentProfile: "Vibrant Citrus, Rose & Patchouli",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Orange, Mandarin Orange, Bergamot, Orange Blossom",
      heart: "Turkish Rose, Jasmine, Mimosa, Ylang-Ylang",
      base: "Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean"
    }
  },
  "Celestial Perfume O'Blossom": {
    name: "Inspired by Jo Malone Orange Blossom",
    type: "Inspired",
    scentProfile: "Fresh Clementine & Dewy Blossom",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Tangerine Blossom, Clementine, Green Leaves",
      heart: "Orange Blossom, Lotus, Lilac",
      base: "Lilac, Orris Wood, Vetiver"
    }
  },
  "Celestial Perfume K Vanilla": {
    name: "Inspired by Kayali Vanilla 28",
    type: "Inspired",
    scentProfile: "Warm Brown Sugar & Madagascar Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Vanilla Orchid, Creamy Jasmine",
      heart: "Brown Sugar, Tonka Bean",
      base: "Amber, Musk, Amberwood, Patchouli"
    }
  },
  "Celestial Perfume Si": {
    name: "Inspired by Giorgio Armani Sì",
    type: "Inspired",
    scentProfile: "Blackcurrant Nectar & Modern Chypre",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Cassis (Blackcurrant Nectar)",
      heart: "May Rose, Freesia",
      base: "Vanilla, Patchouli, Woody Notes, Ambroxan"
    }
  },
  "Celestial Perfume H-GG": {
    name: "Inspired by Carolina Herrera Good Girl",
    type: "Inspired",
    scentProfile: "Sensual Tuberose & Roasted Tonka",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Almond, Coffee, Bergamot, Lemon",
      heart: "Tuberose, Jasmine Sambac, Orange Blossom",
      base: "Tonka Bean, Cacao, Vanilla, Praline, Sandalwood"
    }
  },
  "Celestial Perfume Bloom": {
    name: "Inspired by Gucci Bloom",
    type: "Inspired",
    scentProfile: "Natural Tuberose & Jasmine Garden",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Green Notes, Orange",
      heart: "Natural Tuberose, Jasmine Sambac, Rangoon Creeper",
      base: "Vanilla, Sandalwood, Orris Root"
    }
  },
  "Celestial Perfume N-5": {
    name: "Inspired by Chanel No. 5",
    type: "Inspired",
    scentProfile: "Legendary Aldehydic Powdery Floral",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Aldehydes, Ylang-Ylang, Neroli, Bergamot, Lemon",
      heart: "Iris, Jasmine, Rose, Orris Root, Lily-of-the-Valley",
      base: "Civet, Musk, Amber, Sandalwood, Moss, Vanilla"
    }
  },
  "Celestial Perfume Bright Crystal": {
    name: "Inspired by Versace Bright Crystal",
    type: "Inspired",
    scentProfile: "Luminous Yuzu, Pomegranate & Lotus",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Yuzu, Pomegranate, Ice Accord",
      heart: "Peony, Lotus, Magnolia",
      base: "Musk, Mahogany, Amber"
    }
  },
  "Celestial Perfume Flora": {
    name: "Inspired by Gucci Flora",
    type: "Inspired",
    scentProfile: "Elegant Peony, Osmanthus & Rose",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Peony, Citruses, Mandarin Orange",
      heart: "Osmanthus, Rose",
      base: "Sandalwood, Patchouli, Pink Pepper"
    }
  },
  "Inspired By C@lvin Klein 0bsessi0n ( Worn By Salman Khan )": {
    name: "Inspired by Calvin Klein Obsession (Worn by Salman Khan)",
    type: "Inspired",
    scentProfile: "Warm Amber, Spices & Myrrh",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Cinnamon, Lavender, Coriander, Mandarin, Lime",
      heart: "Myrrh, Nutmeg, Carnation, Brazilian Rosewood",
      base: "Amber, Vanilla, Sandalwood, Musk, Patchouli"
    }
  },
  "Inspired by Jo M@lone 0range Bl0ssom (Worn by Deepika P@duk0ne)": {
    name: "Inspired by Jo Malone Orange Blossom (Worn by Deepika Padukone)",
    type: "Inspired",
    scentProfile: "Fresh Dewy Orange Blossom & Lotus",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Tangerine Blossom, Clementine, Green Leaves",
      heart: "Orange Blossom, Lotus, Water Lily",
      base: "Lilac, Orris Root, Vetiver"
    }
  },
  "Inspired By Pr@da P@rad0xe": {
    name: "Inspired by Prada Paradoxe",
    type: "Inspired",
    scentProfile: "Floral Amber & Neroli",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Tangerine, Bergamot",
      heart: "Orange Blossom, Neroli Essence, Jasmine Sambac",
      base: "Bourbon Vanilla, Amber, White Musk, Benzoin"
    }
  },
  "Inspired By My W@y Gi0rgi0 Arm@ni": {
    name: "Inspired by Giorgio Armani My Way",
    type: "Inspired",
    scentProfile: "White Floral & Bright Citrus",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Orange Blossom, Bergamot",
      heart: "Tuberose, Indian Jasmine",
      base: "Madagascar Vanilla, White Musk, Cedar"
    }
  },
  "Inspired By LV Im@gin@tions": {
    name: "Inspired by Louis Vuitton Imagination",
    type: "Inspired",
    scentProfile: "Citrus, Ginger & Black Tea",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Calabrian Bergamot, Citron, Sicilian Orange",
      heart: "Tunisian Neroli, Nigerian Ginger, Cinnamon",
      base: "Chinese Black Tea, Ambroxan, Guaiac Wood"
    }
  },
  "Inspired By K@y@li Eden Juicy Apple": {
    name: "Inspired by Kayali Eden Juicy Apple",
    type: "Inspired",
    scentProfile: "Juicy Red Apple & Wild Berries",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Red Apple, Lychee, Blackcurrant",
      heart: "Wild Berries, Raspberry Blossom, Jasmine",
      base: "Vanilla, Sugar, Amber, Musk"
    }
  },
  "Inspired By K@yali V@nilla": {
    name: "Inspired by Kayali Vanilla 28",
    type: "Inspired",
    scentProfile: "Warm Brown Sugar & Creamy Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Vanilla Orchid, Jasmine",
      heart: "Brown Sugar, Tonka Bean",
      base: "Amber, Musk, Amberwood, Patchouli"
    }
  },
  "Inspired By Gi0rgi0 Arm@ni Si": {
    name: "Inspired by Giorgio Armani Sì",
    type: "Inspired",
    scentProfile: "Blackcurrant Nectar & Rose",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Cassis",
      heart: "May Rose, Freesia",
      base: "Vanilla, Patchouli, Ambroxan, Wood Notes"
    }
  },
  "Inspired By D J'@dore Perfume": {
    name: "Inspired by Dior J'adore",
    type: "Inspired",
    scentProfile: "Floral Elegance & Sweet Fruits",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Melon, Magnolia, Peach, Mandarin",
      heart: "Jasmine, Lily-of-the-Valley, Tuberose, Freesia",
      base: "Musk, Vanilla, Cedar, Blackberry"
    }
  },
  "Inspired By Vers@ce Dyl@n Blue Perfume": {
    name: "Inspired by Versace Dylan Blue",
    type: "Inspired",
    scentProfile: "Fresh Aquatic, Fig Leaf & Incense",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Calabrian Bergamot, Water Notes, Grapefruit, Fig Leaf",
      heart: "Ambroxan, Black Pepper, Patchouli, Violet Leaf",
      base: "Incense, Musk, Tonka Bean, Saffron"
    }
  },
  "Inspired By @jm@l Wis@l Dh@h@b Perfume": {
    name: "Inspired by Ajmal Wisal Dhahab",
    type: "Inspired",
    scentProfile: "Gilded Oud, Rose & Warm Sandalwood",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Apple, Peach, Grapefruit, Mandarin",
      heart: "Rose, Jasmine, Orchid, Geranium",
      base: "Sandalwood, Cedarwood, White Musk, Patchouli"
    }
  },
  "Inspired By L@tt@fa Kh@mrah Perfume": {
    name: "Inspired by Lattafa Khamrah",
    type: "Inspired",
    scentProfile: "Cinnamon, Dates & Sweet Praline",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Cinnamon, Nutmeg, Bergamot",
      heart: "Dates, Praline, Tuberose, Mahonial",
      base: "Vanilla, Tonka Bean, Benzoin, Myrrh, Akigalawood"
    }
  },
  "Inspired By R@s@si H@wµs P0µr H0mu Perfume": {
    name: "Inspired by Rasasi Hawas for Him",
    type: "Inspired",
    scentProfile: "Aquatic Fruity Plum & Ambergris",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Apple, Bergamot, Lemon, Cinnamon",
      heart: "Watery Notes, Plum, Orange Blossom, Cardamom",
      base: "Ambergris, Musk, Driftwood, Patchouli"
    }
  },
  "Inspired by Čh@nÈl N0.5 Perfume ( Worn by S@ra ali Kh@n )": {
    name: "Inspired by Chanel No. 5 (Worn by Sara Ali Khan)",
    type: "Inspired",
    scentProfile: "Iconic Powdery Aldehydic Floral",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Aldehydes, Ylang-Ylang, Neroli, Bergamot, Lemon",
      heart: "Iris, Jasmine, Rose, Orris Root, Lily-of-the-Valley",
      base: "Civet, Amber, Sandalwood, Musk, Moss, Vanilla"
    }
  },
  "Inspired By Roja Ely$ium Perfume (Worn By H@rdik P@ndya)": {
    name: "Inspired by Roja Elysium (Worn by Hardik Pandya)",
    type: "Inspired",
    scentProfile: "Ultra Fresh Citrus, Juniper & Vetiver",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Grapefruit, Lemon, Bergamot, Lime, Thyme",
      heart: "Vetiver, Juniper Berries, Blackcurrant, Apple",
      base: "Ambergris, Leather, Benzoin, Labdanum, Vanilla"
    }
  },
  "Inspired By JPG Ultra M@le Perfume": {
    name: "Inspired by Jean Paul Gaultier Ultra Male",
    type: "Inspired",
    scentProfile: "Sweet Pear, Lavender & Dark Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Lavender, Mint, Bergamot, Lemon",
      heart: "Cinnamon, Clary Sage, Caraway",
      base: "Black Vanilla Husk, Amber, Cedar, Patchouli"
    }
  },
  "Inspired By Ombre Nom@de Perfume": {
    name: "Inspired by Louis Vuitton Ombre Nomade",
    type: "Inspired",
    scentProfile: "Smoky Oud, Incense & Raspberry",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Raspberry, Saffron",
      heart: "Rose, Geranium, Birch",
      base: "Agarwood (Oud), Incense, Benzoin, Amberwood"
    }
  },
  "Inspired by T0mford T@abacc0 V@nille Perfume": {
    name: "Inspired by Tom Ford Tobacco Vanille",
    type: "Inspired",
    scentProfile: "Spicy Tobacco & Creamy Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Tobacco Leaf, Spicy Notes",
      heart: "Tonka Bean, Tobacco Blossom, Vanilla, Cacao",
      base: "Dry Fruit Accord, Woody Notes"
    }
  },
  "Inspired by Ch@nel @llure H0mme Spt Perfume ( Worn by S@if Al! Kh@n  )": {
    name: "Inspired by Chanel Allure Homme Sport (Worn by Saif Ali Khan)",
    type: "Inspired",
    scentProfile: "Crisp Marine Citrus & White Musk",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Orange, Sea Notes, Aldehydes, Blood Mandarin",
      heart: "Pepper, Neroli, Cedar",
      base: "Tonka Bean, Vanilla, White Musk, Amber, Vetiver"
    }
  },
  "Inspired By B@ccarat R0uge 540 Perfume": {
    name: "Inspired by Baccarat Rouge 540",
    type: "Inspired",
    scentProfile: "Airy Amber, Sweet Saffron & Cedar",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Bitter Almond, Saffron",
      heart: "Egyptian Jasmine, Cedarwood",
      base: "Ambergris, Woody Musk"
    }
  },
  "Inspired By YSL Black 0pium Perfume": {
    name: "Inspired by YSL Black Opium",
    type: "Inspired",
    scentProfile: "Dark Coffee, Orange Blossom & Vanilla",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Pear, Pink Pepper, Orange Blossom",
      heart: "Coffee, Jasmine, Bitter Almond, Licorice",
      base: "Vanilla, Patchouli, Cedar, Cashmere Wood"
    }
  },
  "Inspired Ch@nel Coco M@demoiselle Perfume ( Worn by Ileana D'Cruz )": {
    name: "Inspired by Chanel Coco Mademoiselle (Worn by Ileana D'Cruz)",
    type: "Inspired",
    scentProfile: "Vibrant Citrus, Rose & Patchouli",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Orange, Mandarin Orange, Bergamot, Orange Blossom",
      heart: "Turkish Rose, Jasmine, Mimosa, Ylang-Ylang",
      base: "Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean"
    }
  },
  "Inspired By Gucci Blo0m Perfume ( Worn by Aditi Rao Hydari )": {
    name: "Inspired by Gucci Bloom (Worn by Aditi Rao Hydari)",
    type: "Inspired",
    scentProfile: "Natural White Tuberose & Jasmine",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Green Accord, Orange",
      heart: "Tuberose, Jasmine Sambac, Rangoon Creeper",
      base: "Vanilla, Sandalwood, Orris Root"
    }
  },
  "King Of Bollywood Perfume ( Inspired By T@MD@0 & DUNHILL ICON) Pack Of Two Perfumes": {
    name: "King of Bollywood Duo (Inspired by Tam Dao & Dunhill Icon)",
    type: "Gift Set",
    scentProfile: "Noble Sandalwood, Neroli & Oud",
    priceRange: "₹1,499",
    notes: {
      top: "Italian Cypress, Neroli, Italian Bergamot",
      heart: "Sandalwood, Black Pepper, Cardamom, Lavender",
      base: "Smoky Oud, Vetiver, Leather, Oakmoss"
    }
  },
  "Inspired By Carolina Herrera Go0d Girl Perfume": {
    name: "Inspired by Carolina Herrera Good Girl",
    type: "Inspired",
    scentProfile: "Bold Cocoa, Roasted Tonka & Tuberose",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Almond, Coffee, Bergamot, Lemon",
      heart: "Tuberose, Jasmine Sambac, Orange Blossom",
      base: "Tonka Bean, Cacao, Vanilla, Praline, Sandalwood"
    }
  },
  "Inspired by Tomford ombre Le@ther Perfume ( Worn by Arjun Kap0or ) Unisex": {
    name: "Inspired by Tom Ford Ombré Leather (Worn by Arjun Kapoor)",
    type: "Inspired",
    scentProfile: "Spiced Floral Leather & Amber",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Cardamom",
      heart: "Leather, Jasmine Sambac",
      base: "Amber, Moss, Patchouli"
    }
  },
  "Inspired by Paco Rabbane one Milli0n Perfume ( Worn by Ed Sheer@n )": {
    name: "Inspired by Paco Rabanne 1 Million (Worn by Ed Sheeran)",
    type: "Inspired",
    scentProfile: "Cinnamon, Spiced Leather & Amber",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Blood Mandarin, Grapefruit, Mint",
      heart: "Cinnamon, Spicy Notes, Rose",
      base: "Amber, Leather, Woody Notes, Indian Patchouli"
    }
  },
  "Inspired by DUNHILL IC0N Perfume": {
    name: "Inspired by Dunhill Icon",
    type: "Inspired",
    scentProfile: "Aromatic Woody Neroli & Black Pepper",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Neroli, Italian Bergamot, Black Pepper, Petitgrain",
      heart: "Black Pepper, Cardamom, Sage, Provence Lavender",
      base: "Vetiver, Agarwood (Oud), Leather, Oakmoss"
    }
  },
  "Inspired by Creed Av3ntus Perfume ( Worn By D@vid Beckh@m ) Unisex": {
    name: "Inspired by Creed Aventus (Worn by David Beckham)",
    type: "Inspired",
    scentProfile: "Smoky Pineapple, Birch & Ambergris",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Bergamot, Blackcurrant, Apple, Pineapple",
      heart: "Birch, Juniper Berries, Patchouli, Moroccan Jasmine",
      base: "Musk, Oakmoss, Ambergris, Vanilla"
    }
  },
  "Inspired by Victoria Secret B0mbshell Perfume": {
    name: "Inspired by Victoria's Secret Bombshell",
    type: "Inspired",
    scentProfile: "Bright Passionfruit, Peony & Vanilla Orchid",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Passionfruit, Grapefruit, Pineapple, Tangerine, Strawberry",
      heart: "Peony, Vanilla Orchid, Red Berries, Jasmine",
      base: "Musk, Woody Notes, Oakmoss"
    }
  },
  "Inspired by Tam Da0 Perfume": {
    name: "Inspired by Diptyque Tam Dao",
    type: "Inspired",
    scentProfile: "Creamy Sacred Sandalwood & Cedar",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Italian Cypress, Myrtle, Rose",
      heart: "Sandalwood, Cedarwood",
      base: "Brazilian Rosewood, Spices, Amber, White Musk"
    }
  },
  "Inspired by Versace Er0s Perfume": {
    name: "Inspired by Versace Eros",
    type: "Inspired",
    scentProfile: "Vibrant Mint, Green Apple & Tonka Bean",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Mint, Green Apple, Lemon",
      heart: "Tonka Bean, Ambroxan, Geranium",
      base: "Madagascar Vanilla, Virginian Cedar, Atlas Cedar, Vetiver"
    }
  },
  "Inspired by D 0ff Cool W@ter Perfume ( Worn by Aksh@y Kum@r ) Unisex": {
    name: "Inspired by Davidoff Cool Water (Worn by Akshay Kumar)",
    type: "Inspired",
    scentProfile: "Crisp Ocean Mint & Lavender",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Sea Water, Mint, Green Notes, Lavender, Coriander",
      heart: "Sandalwood, Jasmine, Neroli, Geranium",
      base: "Musk, Oakmoss, Cedar, Tobacco, Amber"
    }
  },
  "Inspired By Viking Perfume ( Worn by Vir@t K0hli )": {
    name: "Inspired by Creed Viking (Worn by Virat Kohli)",
    type: "Inspired",
    scentProfile: "Fiery Pink Pepper, Peppermint & Cedar",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Pink Pepper, Spicy Mint, Bergamot, Lemon, Orange",
      heart: "Lavender, Bulgarian Rose, Clove, Allspice, Jasmine",
      base: "Vetiver, Cedar, White Musk, Tonka Bean"
    }
  },
  "Inspired By Azzaro The Most W@nted Perfume": {
    name: "Inspired by Azzaro The Most Wanted",
    type: "Inspired",
    scentProfile: "Warm Caramel Toffee & Cardamom",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Cardamom, Mandarin",
      heart: "Toffee, Caramel Accord, Lavender",
      base: "Amberwood, Bourbon Vanilla, Vetiver"
    }
  },
  "Inspired By Ck 0ne Perfume": {
    name: "Inspired by Calvin Klein CK One",
    type: "Inspired",
    scentProfile: "Clean Bergamot & Green Tea Accord",
    priceRange: "₹799 - ₹999",
    notes: {
      top: "Lemon, Green Notes, Bergamot, Pineapple, Cardamom",
      heart: "Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose",
      base: "Green Accord, Musk, Cedar, Sandalwood, Amber"
    }
  },
  "Inspired By D Homme P@rfum Perfume": {
    name: "Inspired by Dior Homme Parfum",
    type: "Inspired",
    scentProfile: "Tuscan Iris, Dark Leather & Sandalwood",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Tuscan Iris, Italian Orange",
      heart: "Leather, Rose",
      base: "Sandalwood, Agarwood (Oud), Ambrette, Cedar"
    }
  },
  "Inspired By Gucci Gµilty Perfume ( Worn by R@nveer Singh ) Unisex": {
    name: "Inspired by Gucci Guilty (Worn by Ranveer Singh)",
    type: "Inspired",
    scentProfile: "Aromatic Lavender, Lemon & Patchouli",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Lavender, Amalfi Lemon",
      heart: "African Orange Flower, Neroli",
      base: "Virginia Cedar, Patchouli, Vanilla"
    }
  },
  "Inspired by Terre De Herme$ Perfume ( Worn by Sanj@y Dutt )": {
    name: "Inspired by Terre d'Hermès (Worn by Sanjay Dutt)",
    type: "Inspired",
    scentProfile: "Earthy Bitter Orange, Flint & Vetiver",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Orange, Grapefruit",
      heart: "Pepper, Pelargonium, Flint Accord",
      base: "Vetiver, Cedar, Patchouli, Benzoin"
    }
  },
  "Inspired by Tomford oud W00d Perfume ( Worn by Moni R0y & Am@n Gupta Bo@t ) Unisex": {
    name: "Inspired by Tom Ford Oud Wood (Worn by Mouni Roy & Aman Gupta)",
    type: "Inspired",
    scentProfile: "Smoky Exotic Oud, Rosewood & Cardamom",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Rosewood, Cardamom, Chinese Pepper",
      heart: "Oud Wood, Sandalwood, Vetiver",
      base: "Tonka Bean, Vanilla, Amber"
    }
  },
  "Inspired By Bvlgari Men In Bl@ck Perfume": {
    name: "Inspired by Bvlgari Man In Black",
    type: "Inspired",
    scentProfile: "Warm Spiced Rum, Leather & Guaiac Wood",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Spices, Rum, Tobacco",
      heart: "Leather, Iris, Tuberose",
      base: "Tonka Bean, Guaiac Wood, Benzoin"
    }
  },
  "Inspired by Creed Green Irish Twe3d Perfume ( Worn by S@hid Kapoor )": {
    name: "Inspired by Creed Green Irish Tweed (Worn by Shahid Kapoor)",
    type: "Inspired",
    scentProfile: "Fresh Green Verbena, Violet Leaves & Sandalwood",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Lemon Verbena, Iris",
      heart: "Violet Leaves",
      base: "Ambergris, Sandalwood"
    }
  },
  "Inspired By Ġůccï FL0r@ Perfume ( Worn by Alia Bh@tt )": {
    name: "Inspired by Gucci Flora (Worn by Alia Bhatt)",
    type: "Inspired",
    scentProfile: "Delicate Peony, Osmanthus & Pink Pepper",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Peony, Citruses, Mandarin Orange",
      heart: "Osmanthus, Rose",
      base: "Sandalwood, Patchouli, Pink Pepper"
    }
  },
  "Inspired By Bleu De Ch@nel Perfume ( Worn by Adity@ Roy K@p00r )": {
    name: "Inspired by Bleu de Chanel (Worn by Aditya Roy Kapur)",
    type: "Inspired",
    scentProfile: "Fresh Citrus, Mint, Incense & Cedar",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Grapefruit, Lemon, Mint, Pink Pepper",
      heart: "Ginger, Nutmeg, Jasmine, Iso E Super",
      base: "Incense, Vetiver, Cedar, Sandalwood, Patchouli"
    }
  },
  "Inspired By Armani C0de Perfume": {
    name: "Inspired by Giorgio Armani Armani Code",
    type: "Inspired",
    scentProfile: "Seductive Tonka Bean, Olive Blossom & Leather",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Lemon, Bergamot",
      heart: "Star Anise, Olive Blossom, Guaiac Wood",
      base: "Leather, Tonka Bean, Tobacco"
    }
  },
  "Inspired by Versace Bright Cryst@l Perfume ( Worn by Kiara Advani & Manushi Chhillar )": {
    name: "Inspired by Versace Bright Crystal (Worn by Kiara Advani)",
    type: "Inspired",
    scentProfile: "Luminous Yuzu, Pomegranate & Lotus",
    priceRange: "₹849 - ₹1,099",
    notes: {
      top: "Yuzu, Pomegranate, Ice Accord",
      heart: "Peony, Lotus, Magnolia",
      base: "Musk, Mahogany, Amber"
    }
  },
  "Inspired By Acqua Di Gio Pr0fumo Perfume": {
    name: "Inspired by Giorgio Armani Acqua Di Giò Profumo",
    type: "Inspired",
    scentProfile: "Deep Marine Accord, Rosemary & Incense",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Sea Notes, Bergamot",
      heart: "Rosemary, Sage, Geranium",
      base: "Incense, Patchouli"
    }
  },
  "Inspired by D S@uv@ge Perfume ( Worn by J0hnny depp )": {
    name: "Inspired by Dior Sauvage (Worn by Johnny Depp)",
    type: "Inspired",
    scentProfile: "Crisp Calabrian Bergamot, Pepper & Ambroxan",
    priceRange: "₹949 - ₹1,299",
    notes: {
      top: "Calabrian Bergamot, Pepper",
      heart: "Sichuan Pepper, Lavender, Pink Pepper, Vetiver",
      base: "Ambroxan, Cedar, Labdanum"
    }
  },
  "Vanilla Perfume 100ml - Gourmet Collection": {
    name: "Vanilla Absolute 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Sweet Warm Vanilla & Creamy Amber",
    priceRange: "₹999",
    notes: {
      top: "Madagascar Vanilla, Creamy Accord",
      heart: "Warm Tonka Bean, Heliotrope",
      base: "Soft Amber, Cashmere Musk"
    }
  },
  "Strawberry Perfume 100ml - Gourmet Collection": {
    name: "Wild Strawberry 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Sweet & Fruity Berry Burst",
    priceRange: "₹999",
    notes: {
      top: "Wild Strawberry, Pink Grapefruit",
      heart: "Crushed Berries, Jasmine Blossom",
      base: "Sweet Vanilla, Soft White Musk"
    }
  },
  "Mango Perfume 100ml - Gourmet Collection": {
    name: "Alphonso Mango 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Tropical Fresh Mango & Nectarine",
    priceRange: "₹999",
    notes: {
      top: "Alphonso Mango, Sweet Nectarine",
      heart: "Tropical Florals, Passionfruit",
      base: "Coconut Wood, White Musk"
    }
  },
  "Choco Truffle Perfume 100ml - Gourmet Collection": {
    name: "Choco Truffle 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Decadent Dark Cocoa & Hazelnut",
    priceRange: "₹999",
    notes: {
      top: "Dark Cocoa, Roasted Hazelnut",
      heart: "Creamy Truffle, Milk Accord",
      base: "Warm Vanilla, Tonka Bean, Sandalwood"
    }
  },
  "Eclaire Perfume 100ml - Gourmet Collection": {
    name: "Caramel Éclair 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Rich Golden Caramel & Creamy Vanilla",
    priceRange: "₹999",
    notes: {
      top: "Salted Caramel, Butterscotch",
      heart: "Warm Milk, Vanilla Cream",
      base: "Amber Resin, White Musk"
    }
  },
  "Eden Apple Perfume 100ml - Gourmet Collection": {
    name: "Crisp Apple 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Juicy Red Apple & Pink Grapefruit",
    priceRange: "₹999",
    notes: {
      top: "Crisp Red Apple, Lychee",
      heart: "Pink Grapefruit, Jasmine",
      base: "Vanilla Sugar, Soft Musk"
    }
  },
  "Pistachio Perfume 100ml - Gourmet Collection": {
    name: "Pistachio Gelato 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Nutty Pistachio & Sweet Vanilla Cream",
    priceRange: "₹999",
    notes: {
      top: "Roasted Pistachio, Cardamom",
      heart: "Sweet Cream, Almond Blossom",
      base: "Madagascar Vanilla, Cashmeran"
    }
  },
  "Marshmallow Perfume 100ml - Gourmet Collection": {
    name: "Fluffy Marshmallow 100ml - Gourmet Collection",
    type: "Original",
    scentProfile: "Sweet Powdered Sugar & Vanilla Cream",
    priceRange: "₹999",
    notes: {
      top: "Powdered Sugar, Whipped Cream",
      heart: "Fluffy Marshmallow, Cotton Candy",
      base: "Vanilla Bean, Gentle Musk"
    }
  },
  "Gourmet Gift Set - 4 X 20ML": {
    name: "Gourmet Discovery Box - 4 x 20ml",
    type: "Gift Set",
    scentProfile: "Sweet Gourmand Tasting Flight",
    priceRange: "₹999",
    notes: {
      top: "Vanilla, Strawberry",
      heart: "Pistachio, Caramel Éclair",
      base: "Signature Gourmet Base"
    }
  },
  "Luxury Perfume Gift Set For Him - 4 x 20ml": {
    name: "Gentlemen Discovery Box - 4 x 20ml",
    type: "Gift Set",
    scentProfile: "Fresh Aquatic, Spiced Leather & Woods",
    priceRange: "₹999",
    notes: {
      top: "Italian Cypress, Bergamot, Sea Water",
      heart: "Sandalwood, Black Pepper, Cedar",
      base: "Ambergris, Oakmoss, Leather"
    }
  },
  "Luxury Perfume Gift Set For Her - 4 x 20ml": {
    name: "Femme Discovery Box - 4 x 20ml",
    type: "Gift Set",
    scentProfile: "Floral Bouquet, Sweet Fruity & Amber",
    priceRange: "₹999",
    notes: {
      top: "Mandarin, Yuzu, Pomegranate",
      heart: "Turkish Rose, Peony, Jasmine",
      base: "Vanilla, White Musk, Patchouli"
    }
  }
};

// Also apply general cleanup regexes for any remaining distorted characters in all fields
let replacedCount = 0;
for (const [raw, cleanInfo] of Object.entries(nameCleaners)) {
  if (content.includes(raw)) {
    content = content.replace(raw, cleanInfo.name);
    replacedCount++;
  }
}
console.log('Explicitly cleaned products:', replacedCount);

// General string replacements across constants.ts
content = content.replace(/ESSPRIVE/g, 'RK Perfume');
content = content.replace(/FLEUR \/ ESSPRIVE · RK Perfume/g, 'RK Perfume');
content = content.replace(/FLEUR/g, 'RK Perfume');

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated constants.ts');
