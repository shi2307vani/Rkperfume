export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;

export const BUSINESS_INFO = {
  name: "RK Perfume",
  tagline: "Premium Perfume Shop in Tulshibaug Pune",
  owner: "Rakesh",
  phone: "+91 82828 25008",
  phoneClean: "918282825008",
  email: "rkperfume09@gmail.com",
  address: {
    street: "Tulshibaug Internal Rd",
    area: "Tulshibaug, Budhwar Peth",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411002",
    country: "India",
    full: "Tulshibaug Internal Rd, Tulshibaug, Budhwar Peth, Pune, Maharashtra 411002, India",
  },
  hours: {
    days: "Monday – Sunday",
    time: "10:00 AM – 9:00 PM",
  },
  social: {
    whatsapp: "https://wa.me/918282825008",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Tulshibaug+Internal+Rd+Budhwar+Peth+Pune",
  },
  type: "Private Company",
} as const;

export const CATEGORIES = [
  {
    title: "Luxury Perfumes",
    description: "Premium designer fragrances from world-renowned brands",
    icon: "Crown",
    gradient: "from-amber-900/30 to-yellow-900/20",
  },
  {
    title: "Arabian Attars",
    description: "Authentic Arabian attars with mesmerizing oriental notes",
    icon: "Flame",
    gradient: "from-rose-900/30 to-amber-900/20",
  },
  {
    title: "Imported Fragrances",
    description: "Exclusive imported scents from across the globe",
    icon: "Sparkles",
    gradient: "from-purple-900/30 to-blue-900/20",
  },
  {
    title: "Gift Sets",
    description: "Elegantly curated perfume gift sets for every occasion",
    icon: "Gift",
    gradient: "from-emerald-900/30 to-teal-900/20",
  },
  {
    title: "Men's Collection",
    description: "Bold, masculine fragrances that make a statement",
    icon: "Gem",
    gradient: "from-blue-900/30 to-indigo-900/20",
  },
  {
    title: "Women's Collection",
    description: "Elegant, feminine scents for the modern woman",
    icon: "Heart",
    gradient: "from-pink-900/30 to-rose-900/20",
  },
  {
    title: "Unisex Collection",
    description: "Versatile fragrances perfect for anyone",
    icon: "Users",
    gradient: "from-violet-900/30 to-purple-900/20",
  },
  {
    title: "Pocket Perfumes",
    description: "Compact luxury fragrances for on-the-go freshness",
    icon: "Droplets",
    gradient: "from-cyan-900/30 to-sky-900/20",
  },
] as const;

export const FEATURES = [
  {
    title: "100% Genuine Products",
    description:
      "Every fragrance is sourced directly from authorized distributors. No fakes, ever.",
    icon: "ShieldCheck",
  },
  {
    title: "Premium Quality",
    description:
      "Hand-selected fragrances that meet the highest standards of perfumery excellence.",
    icon: "Award",
  },
  {
    title: "Affordable Pricing",
    description:
      "Luxury fragrances at prices that won't break the bank. True value for money.",
    icon: "TrendingUp",
  },
  {
    title: "Latest Collections",
    description:
      "Stay ahead with the newest launches and trending fragrances from around the world.",
    icon: "Sparkles",
  },
  {
    title: "Expert Recommendations",
    description:
      "Our fragrance experts help you find your perfect signature scent.",
    icon: "Star",
  },
  {
    title: "Luxury Packaging",
    description:
      "Beautiful packaging that makes every purchase feel like a special gift.",
    icon: "Package",
  },
  {
    title: "Trusted Local Store",
    description:
      "A beloved Pune institution trusted by thousands of satisfied customers.",
    icon: "BadgeCheck",
  },
  {
    title: "Excellent Support",
    description:
      "Friendly, knowledgeable staff ready to assist you every step of the way.",
    icon: "Headphones",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Aditya Sharma",
    location: "Pune",
    text: "Amazing perfume collection! I found genuine imported fragrances at incredible prices. The staff is incredibly knowledgeable and helped me pick the perfect scent. Highly recommend RK Perfume!",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Priya Deshmukh",
    location: "Pune",
    text: "Best perfume shop in Pune, hands down! The Arabian attars are absolutely divine. Every visit feels like a luxury experience. This is my go-to store for all fragrances.",
    rating: 5,
    initials: "PD",
  },
  {
    name: "Rahul Patil",
    location: "Pune",
    text: "Affordable luxury fragrances with excellent quality. I've been a loyal customer for 3 years. The gift sets are perfect for special occasions. Outstanding customer service!",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Sneha Kulkarni",
    location: "Pune",
    text: "I love their women's collection — so elegant and long-lasting! Rakesh bhai always recommends the best fragrances. RK Perfume is a hidden gem in Tulshibaug.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "Vikram Joshi",
    location: "Pune",
    text: "The pocket perfumes are a game changer! Perfect for office and travel. Great variety, authentic products, and the prices are unbeatable. Five stars all the way!",
    rating: 5,
    initials: "VJ",
  },
] as const;

export const SEO = {
  title: "RK Perfume | Premium Perfume Shop in Tulshibaug Pune",
  description:
    "Buy premium perfumes, attars, imported fragrances, Arabian perfumes and luxury scents at RK Perfume, Tulshibaug, Pune. Genuine perfumes with affordable prices.",
  keywords: [
    "Perfume Shop Pune",
    "Best Perfume Shop Pune",
    "Perfume Shop Tulshibaug",
    "Attar Shop Pune",
    "Arabian Perfume Pune",
    "Luxury Perfume Pune",
    "Imported Perfume Pune",
    "Men Perfume Pune",
    "Women Perfume Pune",
    "Fragrance Store Pune",
    "RK Perfume",
    "RK Perfume Pune",
    "Perfume Tulshibaug Budhwar Peth",
    "Best Attar Shop Pune",
    "Pocket Perfume Pune",
  ],
  url: "https://rkperfume.in",
} as const;

export const COLLECTION_PRODUCTS = [
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
  },
  {
    id: "celestial-10762456531254",
    name: "Inspired by L@tt@fa Kh@mrah Waha Perfume",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Khamrah Waha is a Aromatic Aquatic fragrance for women and men. This is a new fragrance. The nose behind this fragrance is Jordi Fernández. Top notes are Bergamot, Yuzu, Ginger and Juniper; middle notes are Cucumber, Sea Salt, Sage and Iris; base notes are Vanilla, Tonka Bean, Musk, Akigalawood and Ambrofix™.",
    notes: {
      top: "Bergamot, Yuzu, Ginger and Juniper",
      heart: "Cucumber, Sea Salt, Sage and Iris",
      base: "Vanilla, Tonka Bean, Musk, Akigalawood and Ambrofix™"
    },
    image: "/images/products/1_10_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10760930820406",
    name: "Luxury Perfume Gift Set For Him - 4 x 20ml",
    category: "Gift Sets",
    priceRange: "₹999",
    description: "Mystic Timber is a Floral Woody Musk fragrance for women and men. Top notes are Italian Cypress, Myrtle and Rose; middle notes are Sandalwood and Cedar; base notes are Brazilian Rosewood, Spices, Amber and White Musk. Guilty Desire is a Woody Aromatic fragrance for men & Women. Top notes are Lavender and Amalfi Lemon; middle note is African Orange flower; base notes are Virginia Cedar, Patchouli and Vanilla. Aqua Rush is a Aromatic Aquatic fragrance for men and women. Top notes are Sea water, Lavender, Mint, Green Notes, Rosemary, Calone and Coriander; middle notes are Sandalwood, Geranium, Neroli and Jasmine; base notes are Musk, Tobacco, Oakmoss, Cedar and Amber. Main character is a Aromatic Fougere fragrance for men. Top notes are Calabrian bergamot and Pepper; middle notes are Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium and elemi; base notes are Ambroxan, Cedar and Labdanum.",
    notes: {
      top: "Italian Cypress, Myrtle and Rose",
      heart: "Sandalwood and Cedar",
      base: "Brazilian Rosewood, Spices, Amber and White Musk"
    },
    image: "/images/products/1._1_1e9741f8-1654-43f6-aef3-b15f8174de01.png",
  },
  {
    id: "celestial-10760387297590",
    name: "Luxury Perfume Gift Set For Her - 4 x 20ml",
    category: "Gift Sets",
    priceRange: "₹999",
    description: "Sweet Seduction for women is a joyful floral perfume. Top note is Mandarin and pepper; middle note is Osmanthus, peony and rose; base note is Patchouli, cedar and leather. Crystal kiss is a Floral Fruity fragrance for women. Top notes are Yuzu, Pomegranate and Ice; middle notes are Peony, Lotus and Magnolia; base notes are Musk, Mahogany and Amber. Golden Veil is a Floral Aldehyde fragrance for women. Top notes are Aldehydes, Ylang-Ylang, Neroli, Bergamot and Lemon; middle notes are Iris, Jasmine, Rose, Orris Root and Lily-of-the-Valley; base notes are Civet, Musk, Amber, Sandalwood, Moss, Vanilla, Vetiver and Patchouli. Sensual Muse is a Amber Floral fragrance for women. Top notes are Orange, Mandarin Orange, Bergamot and Orange Blossom; middle notes are Turkish Rose, Jasmine, Mimosa and Ylang-Ylang; base notes are Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean and Opoponax.",
    notes: {
      top: "Yuzu, Pomegranate and Ice",
      heart: "Peony, Lotus and Magnolia",
      base: "Musk, Mahogany and Amber"
    },
    image: "/images/products/20_ml_website_for_him_20_1.png",
  },
  {
    id: "celestial-10758841336118",
    name: "Vanilla Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Vanilla is Warm, cozy, and irresistibly addictive. With its soft creamy sweetness, vanilla feels comforting, elegant, and effortlessly inviting, leaving a warm and memorable impression.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/ChatGPT_Image_Jun_26_2026_05_57_05_PM_1.png",
  },
  {
    id: "celestial-10758667338038",
    name: "Strawberry Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Strawberry is playful, sweet, and irresistibly charming. It captures the feeling of carefree summer days, juicy fresh berries, and effortless confidence. The scent opens with a bright, fruity burst that feels youthful and uplifting, creating an aura that is both fun and addictive.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/ChatGPT_Image_Jun_26_2026_05_51_39_PM.png",
  },
  {
    id: "celestial-10758654787894",
    name: "Mango Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Mango perfume feels like pure sunshine captured in a bottle—bright, juicy, and effortlessly uplifting from the very first spray. It opens with the mouthwatering sweetness of perfectlyripe mangoes, bursting with tropical freshness that instantly awakens the senses and lifts your mood. The vibrant fruity notes create a cheerful, energetic aura, reminiscent of warm summer days, golden sunshine, and carefree moments spent under clear blue skies.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/13_6cb07cb2-f88b-4170-b37a-07533a2173fb.png",
  },
  {
    id: "celestial-10758154158390",
    name: "Choco Truffle Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Choco Truffle Perfume is the kind of scent that feels like an irresistible dessert wrapped in elegance. Rich notes of creamy chocolate melt into smooth cocoa and velvety sweetness, creating a warm, comforting aura that's both playful and addictive.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/ChatGPT_Image_Jun_26_2026_05_59_09_PM.png",
  },
  {
    id: "celestial-10752064225590",
    name: "Inspired By CR 7 ( Worn By Cristi@no Ron@ld0 )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "CR7 for Men is a Woody Aromatic fragrance for men. The iconic flagship sports fragrance, it combines fresh citrus and aromatic notes with a warm woody base. Modern, energetic and versatile, CR7 is designed for everyday wear and suits both casual and special occasions.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/1._1_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10571131650358",
    name: "Special Gift Box",
    category: "Gift Sets",
    priceRange: "₹199",
    description: "Premium inspired fragrance with exceptional lasting notes.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/Untitleddesign_20.png",
  },
  {
    id: "celestial-10672026026294",
    name: "Gourmet Gift Set - 4 X 20ML",
    category: "Gift Sets",
    priceRange: "₹999",
    description: "Eden Apple is a vibrant gourmand-fruity fragrance with a burst of crisp, juicy apple. Soft sweetness and subtle florals blend seamlessly into warm musks, creating a smooth and long-lasting finish. Pistachio Perfume is a warm, creamy gourmand fragrance with the rich nuttiness of pistachio blended into soft vanilla and gentle musks. Comforting, addictive, and effortlessly elegant, it leaves a smooth, long-lasting trail that feels cozy yet luxurious. Marshmallow Perfume is a cozy, creamy gourmand fragrance that wraps you in delicate sweetness from the first spray. Fluffy marshmallow notes melt into smooth vanilla and soft sugar accords, creating a warm, comforting scent that feels gentle yet irresistible. As it settles, subtle musks add a clean, long-lasting softness that stays close to the skin. Eclaire Perfume is a luscious gourmand fragrance inspired by the irresistible richness of caramel desserts. It opens with smooth caramel sweetness, blended with creamy vanilla and soft milky accords that feel warm and indulgent from the first spray. As the scent settles, gentle amber and subtle musks add depth and a long-lasting, comforting trail.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/WhatsAppImage2026-04-17at3.29.46PM.jpg",
  },
  {
    id: "celestial-10587392934198",
    name: "Eclaire Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Eclaire Perfume is a luscious gourmand fragrance inspired by the irresistible richness of caramel desserts. It opens with smooth caramel sweetness, blended with creamy vanilla and soft milky accords that feel warm and indulgent from the first spray. As the scent settles, gentle amber and subtle musks add depth and a long-lasting, comforting trail.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/36c84d11-3683-4c89-b836-389b7d67c3c6.png",
  },
  {
    id: "celestial-10587392278838",
    name: "Eden Apple Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Eden Apple Perfume is a vibrant gourmand-fruity fragrance that captures the irresistible freshness of a perfectly ripe apple. It opens with a burst of crisp, juicy apple notes that feel bright and mouth-watering. As it unfolds, soft sweetness and subtle floral nuances balance the freshness, while gentle musks and warm undertones create a smooth, long-lasting finish.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/ChatGPT_Image_Feb_9_2026_01_31_56_PM.png",
  },
  {
    id: "celestial-10587337326902",
    name: "Pistachio Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Pistachio Perfume is a warm, creamy gourmand fragrance with the rich nuttiness of pistachio blended into soft vanilla and gentle musks. Comforting, addictive, and effortlessly elegant, it leaves a smooth, long-lasting trail that feels cozy yet luxurious.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/Untitleddesign_3.png",
  },
  {
    id: "celestial-10587388477750",
    name: "Marshmallow Perfume 100ml - Gourmet Collection",
    category: "Imported Fragrances",
    priceRange: "₹999",
    description: "Marshmallow Perfume is a cozy, creamy gourmand fragrance that wraps you in delicate sweetness from the first spray. Fluffy marshmallow notes melt into smooth vanilla and soft sugar accords, creating a warm, comforting scent that feels gentle yet irresistible. As it settles, subtle musks add a clean, long-lasting softness that stays close to the skin.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/ChatGPT_Image_Feb_9_2026_01_02_01_PM.png",
  },
  {
    id: "celestial-10531183198518",
    name: "Inspired by Miss D Perfume",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Miss D is a Oriental Floral fragrance for women . Top notes are Iris, Peony and Lily-of-the-Valley; middle notes are Rose, Apricot and Peach; base notes are Vanilla, Musk, Tonka Bean, Sandalwood and Benzoin.",
    notes: {
      top: "Iris, Peony and Lily-of-the-Valley",
      heart: "Rose, Apricot and Peach",
      base: "Vanilla, Musk, Tonka Bean, Sandalwood and Benzoin"
    },
    image: "/images/products/New_Celestial_Product_12_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10531182739766",
    name: "Inspired by P@co Rabbane Lady Milli0n Perfume",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Lady Million is a Floral Fruity fragrance for women. Top notes are Raspberry, Neroli and Amalfi Lemon; middle notes are Jasmine, African Orange Flower and Gardenia; base notes are White Honey, Patchouli and Amber.",
    notes: {
      top: "Raspberry, Neroli and Amalfi Lemon",
      heart: "Jasmine, African Orange Flower and Gardenia",
      base: "White Honey, Patchouli and Amber"
    },
    image: "/images/products/New_Celestial_Product_14_60c7e6ce-10f8-45bc-8648-c6c2d9da3008_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10531171795254",
    name: "Inspired By Ġůccï FL0r@ Gorgeous Magnolia",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Flora Gorgeous Magnolia is a Chypre Floral fragrance for women. Top notes are Dewberry, Coconut and Orange; middle notes are Magnolia, Jasmine Sambac, Ylang-Ylang and Lily of the Valley; base notes are Musk, Patchouli and Blonde Woods",
    notes: {
      top: "Dewberry, Coconut and Orange",
      heart: "Magnolia, Jasmine Sambac, Ylang-Ylang and Lily of the Valley",
      base: "Musk, Patchouli and Blonde Woods"
    },
    image: "/images/products/New_Celestial_Product_11_ffa1336e-37e5-451e-bb8b-a545ea271ca2_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10531044557110",
    name: "Inspired by YSL Libre",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Libre is a Oriental Fougere fragrance for women. Top notes are Lavender, Mandarin Orange, Black Currant and Petitgrain; middle notes are Lavender, Orange Blossom and Jasmine; base notes are Madagascar Vanilla, Musk, Cedar and Ambergris.",
    notes: {
      top: "Lavender, Mandarin Orange, Black Currant and Petitgrain",
      heart: "Lavender, Orange Blossom and Jasmine",
      base: "Madagascar Vanilla, Musk, Cedar and Ambergris"
    },
    image: "/images/products/New_Celestial_Product_4_9b5c3266-3574-4ade-8c9a-33b65b9037e9_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10522618790198",
    name: "Inspired By Gucci Flora Gorgeous Jasmine",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Flora Gorgeous Jasmine by Gucci is a Floral fragrance for women. The nose behind this fragrance is Alberto Morillas. Top notes are Italian Mandarin, Bergamot and Black Pepper; middle notes are Jasmine, Jasmine Sambac, Magnolia and Damask Rose; base notes are Australian Sandalwood, Benzoin and Patchouli.",
    notes: {
      top: "Italian Mandarin, Bergamot and Black Pepper",
      heart: "Jasmine, Jasmine Sambac, Magnolia and Damask Rose",
      base: "Australian Sandalwood, Benzoin and Patchouli"
    },
    image: "/images/products/New_Celestial_Product_9_8a347e34-cdb3-47d2-854c-65c0052c6a72_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10521720324406",
    name: "Inspired By Gucci Flora Gorgeous Orchid",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Flora Gorgeous Orchid by Gucci is a Floral Fruity Gourmand fragrance for women. This is a new fragrance. The nose behind this fragrance is Marie Salamagne. Top note is Vanilla; middle note is Vanilla Orchid; base note is Ozonic notes",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_10_ac3d9248-86cf-4b41-93f4-02078735e2ca_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394916978998",
    name: "Celestial Perfume Imagination",
    category: "Men's Collection",
    priceRange: "₹949 - ₹1,299",
    description: "Imagination by L V is a Citrus Aromatic fragrance for men. Imagination was launched in 2021. The nose behind this fragrance is Jacques Cavallier Belletrud. Top notes are Citron, Calabrian bergamot and Sicilian Orange; middle notes are Tunisian Neroli, Nigerian Ginger and Ceylon Cinnamon; base notes are Chinese Black Tea, Ambroxan, Guaiac Wood and Olibanum.",
    notes: {
      top: "Citron, Calabrian bergamot and Sicilian Orange",
      heart: "Tunisian Neroli, Nigerian Ginger and Ceylon Cinnamon",
      base: "Chinese Black Tea, Ambroxan, Guaiac Wood and Olibanum"
    },
    image: "/images/products/49_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394916946230",
    name: "Celestial Perfume J'@dore",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "J'ad0re is a Floral Fruity fragrance for women. The nose behind this fragrance is Calice Becker. Top notes are Pear, Melon, Magnolia, Peach, Mandarin Orange and Bergamot; middle notes are Jasmine, Lily-of-the-Valley, Tuberose, Freesia, Rose, Orchid, Violet and Plum; base notes are Musk, Vanilla, Cedar and Blackberry.",
    notes: {
      top: "Pear, Melon, Magnolia, Peach, Mandarin Orange and Bergamot",
      heart: "Jasmine, Lily-of-the-Valley, Tuberose, Freesia, Rose, Orchid, Violet and Plum",
      base: "Musk, Vanilla, Cedar and Blackberry"
    },
    image: "/images/products/CELESTIAL_Product_1_1_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394916847926",
    name: "Celestial Perfume Wisal Dahab",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Wis@l Dhahab is a Floral Woody Musk fragrance for women and men. Top notes are Pear, Apple, Peach, Grapefruit and Mandarin Orange; middle notes are Rose, Orchid, Jasmine and Geranium; base notes are Sandalwood, Musk, Patchouli and Cedar.",
    notes: {
      top: "Pear, Apple, Peach, Grapefruit and Mandarin Orange",
      heart: "Rose, Orchid, Jasmine and Geranium",
      base: "Sandalwood, Musk, Patchouli and Cedar"
    },
    image: "/images/products/New_Celestial_Product_23_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394916749622",
    name: "Celestial Perfume Khamrah",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Khamrah is a Oriental Spicy fragrance for women and men. This is a new fragrance.Top notes are Cinnamon, Nutmeg and Bergamot; middle notes are Dates, Praline, Tuberose and Mahonial; base notes are Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin and Akigalawood",
    notes: {
      top: "Cinnamon, Nutmeg and Bergamot",
      heart: "Dates, Praline, Tuberose and Mahonial",
      base: "Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin and Akigalawood"
    },
    image: "/images/products/New_Celestial_Product_22_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394916651318",
    name: "Celestial Perfume Tabacco VN",
    category: "Men's Collection",
    priceRange: "₹949 - ₹1,299",
    description: "Tom Ford reinvents a classic fragrance genre by adding creamy tonka bean, vanilla, cocoa, dry fruit accords and sweet wood sap for a modern, opulent, and almost heady impression that's all man, unless worn by a woman.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_20_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394916553014",
    name: "Celestial Perfume Bacc@rat R",
    category: "Men's Collection",
    priceRange: "₹949 - ₹1,299",
    description: "BR 540 is a Amber Floral fragrance for women and men. The nose behind this fragrance is Francis Kurkdjian. Top notes are Saffron and Jasmine; middle notes are Amberwood and Ambergris; base notes are Fir Resin and Cedar.",
    notes: {
      top: "Saffron and Jasmine",
      heart: "Amberwood and Ambergris",
      base: "Fir Resin and Cedar"
    },
    image: "/images/products/New_Celestial_Product_17_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394916389174",
    name: "Celestial Perfume Black Opium",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Black Opium is a Amber Vanilla fragrance for women. Top notes are Pear, Pink Pepper and Orange Blossom; middle notes are Coffee, Jasmine, Bitter Almond and Licorice; base notes are Vanilla, Patchouli, Cashmere Wood and Cedar.",
    notes: {
      top: "Pear, Pink Pepper and Orange Blossom",
      heart: "Coffee, Jasmine, Bitter Almond and Licorice",
      base: "Vanilla, Patchouli, Cashmere Wood and Cedar"
    },
    image: "/images/products/New_Celestial_Product_6_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394916290870",
    name: "Celestial Perfume Cool Water",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Cool Water is a Aromatic Aquatic fragrance for men and women. Top notes are Sea water, Lavender, Mint, Green Notes, Rosemary, Calone and Coriander; middle notes are Sandalwood, Geranium, Neroli and Jasmine; base notes are Musk, Tobacco, Oakmoss, Cedar and Amber.",
    notes: {
      top: "Sea water, Lavender, Mint, Green Notes, Rosemary, Calone and Coriander",
      heart: "Sandalwood, Geranium, Neroli and Jasmine",
      base: "Musk, Tobacco, Oakmoss, Cedar and Amber"
    },
    image: "/images/products/New_Celestial_Product_33_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394916127030",
    name: "Celestial Perfume Avnts",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Aventus is a Chypre Fruity fragrance for men and women. Top notes are Pineapple, Bergamot, Black Currant and Apple; middle notes are Birch, Patchouli, Moroccan Jasmine and Rose; base notes are Musk, oak moss, Ambergris and Vanilla.",
    notes: {
      top: "Pineapple, Bergamot, Black Currant and Apple",
      heart: "Birch, Patchouli, Moroccan Jasmine and Rose",
      base: "Musk, oak moss, Ambergris and Vanilla"
    },
    image: "/images/products/New_Celestial_Product_2_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394916028726",
    name: "Celestial Perfume DTD",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "T@m D@o Eau de Toilette is a Floral Woody Musk fragrance for women and men. Top notes are Italian Cypress, Myrtle and Rose; middle notes are Sandalwood and Cedar; base notes are Brazilian Rosewood, Spices, Amber and White Musk.",
    notes: {
      top: "Italian Cypress, Myrtle and Rose",
      heart: "Sandalwood and Cedar",
      base: "Brazilian Rosewood, Spices, Amber and White Musk"
    },
    image: "/images/products/New_Celestial_Product_30_702de8e8-db0e-44f1-8183-9778338a2c98_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394915930422",
    name: "Celestial Perfume Guilty",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Guilty Pour Homme is a Woody Aromatic fragrance for men & Women. Top notes are Lavender and Amalfi Lemon; middle note is African Orange flower; base notes are Virginia Cedar, Patchouli and Vanilla.",
    notes: {
      top: "Lavender and Amalfi Lemon",
      heart: "Floral Notes, Jasmine",
      base: "Virginia Cedar, Patchouli and Vanilla"
    },
    image: "/images/products/New_Celestial_Product_9_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394915635510",
    name: "Celestial Perfume Ombre Leather",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Ombré Leather is a Leather fragrance for women and men. Top note is Cardamom; middle notes are Leather and Jasmine Sambac; base notes are Amber, Moss and Patchouli.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Leather and Jasmine Sambac",
      base: "Amber, Moss and Patchouli"
    },
    image: "/images/products/New_Celestial_Product_11_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394915537206",
    name: "Celestial Perfume Ck1",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "One is a Citrus Aromatic fragrance for women and men. Top notes are Lemon, Green Notes, Bergamot, Pineapple, Mandarin Orange, Cardamom and Papaya; middle notes are Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose, Orris Root and Freesia; base notes are Green Accord, Musk, Cedar, Sandalwood, Oakmoss, Green Tea and Amber.",
    notes: {
      top: "Lemon, Green Notes, Bergamot, Pineapple, Mandarin Orange, Cardamom and Papaya",
      heart: "Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose, Orris Root and Freesia",
      base: "Green Accord, Musk, Cedar, Sandalwood, Oakmoss, Green Tea and Amber"
    },
    image: "/images/products/New_Celestial_Product_15_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394915471670",
    name: "Celestial Perfume Bombshell",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Bombshell is a Floral Fruity fragrance for women. Top notes are Passionfruit, Grapefruit, Pineapple, Tangerine and Big Strawberry; middle notes are Peony, Vanilla orchid, Red Berries, Jasmine and Lily-of-the-Valley; base notes are Musk, Woody Notes and Oakmoss.",
    notes: {
      top: "Passionfruit, Grapefruit, Pineapple, Tangerine and Big Strawberry",
      heart: "Peony, Vanilla orchid, Red Berries, Jasmine and Lily-of-the-Valley",
      base: "Musk, Woody Notes and Oakmoss"
    },
    image: "/images/products/New_Celestial_Product_1_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394915340598",
    name: "Celestial Perfume Eros",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Eros is a Aromatic Fougere fragrance for men. Top notes are Mint, Green Apple and Lemon; middle notes are Tonka Bean, Ambroxan and Geranium; base notes are Madagascar Vanilla, Virginian Cedar, Atlas Cedar, Vetiver and Oakmoss.",
    notes: {
      top: "Mint, Green Apple and Lemon",
      heart: "Tonka Bean, Ambroxan and Geranium",
      base: "Madagascar Vanilla, Virginian Cedar, Atlas Cedar, Vetiver and Oakmoss"
    },
    image: "/images/products/New_Celestial_Product_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394915209526",
    name: "Celestial Perfume Oud Wood",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Oud Wood is a Amber Woody fragrance for women and men.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_3_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394915045686",
    name: "Celestial Perfume Paradoxe",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Paradoxe is a Oriental Floral fragrance for women. Top notes are Pear, Tangerine and Bergamot; middle notes are Orange Blossom, Neroli Essence, Neroli and Jasmine Sambac; base notes are Bourbon Vanilla, Amber, White Musk and Benzoin.",
    notes: {
      top: "Pear, Tangerine and Bergamot",
      heart: "Orange Blossom, Neroli Essence, Neroli and Jasmine Sambac",
      base: "Bourbon Vanilla, Amber, White Musk and Benzoin"
    },
    image: "/images/products/New_Celestial_Product_12_1_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394914980150",
    name: "Celestial Perfume My way",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "My Way is a Floral fragrance for women. My Way was created by Carlos Benaïm and Bruno Jovanovic. Top notes are Orange Blossom and Bergamot; middle notes are Tuberose and Indian Jasmine; base notes are Madagascar Vanilla, White Musk and Virginian Cedar.",
    notes: {
      top: "Orange Blossom and Bergamot",
      heart: "Tuberose and Indian Jasmine",
      base: "Madagascar Vanilla, White Musk and Virginian Cedar"
    },
    image: "/images/products/46_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394914881846",
    name: "Celestial Perfume Eden Apple",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Eden Juicy Apple Fragrances is a Floral Fruity Gourmand fragrance for women and men. Top notes are Red Apple, Litchi, Black Currant and Pink Grapefruit; middle notes are Wild Berries, Raspberry Bloom, Jasmine and May Rose; base notes are Sugar, Musk, Vanilla Flower, Amber and Moss.",
    notes: {
      top: "Red Apple, Litchi, Black Currant and Pink Grapefruit",
      heart: "Wild Berries, Raspberry Bloom, Jasmine and May Rose",
      base: "Sugar, Musk, Vanilla Flower, Amber and Moss"
    },
    image: "/images/products/44_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394914095414",
    name: "Celestial Perfume Coco M",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Coco Mademoiselle is a Amber Floral fragrance for women. Top notes are Orange, Mandarin Orange, Bergamot and Orange Blossom; middle notes are Turkish Rose, Jasmine, Mimosa and Ylang-Ylang; base notes are Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean and Opoponax.",
    notes: {
      top: "Orange, Mandarin Orange, Bergamot and Orange Blossom",
      heart: "Turkish Rose, Jasmine, Mimosa and Ylang-Ylang",
      base: "Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean and Opoponax"
    },
    image: "/images/products/New_Celestial_Product_29_538358ef-4766-4d70-8e1c-f0450fe28ed6_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394914029878",
    name: "Celestial Perfume O'Blossom",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Blossom by Jo Malone London is a Floral fragrance for women and men. The nose behind this fragrance is Jean Claude Delville. Top note is Tangerine Blossom; middle notes are Orange Blossom, Lilac and Water Lily; base notes are Iris and Vetiver.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Orange Blossom, Lilac and Water Lily",
      base: "Iris and Vetiver"
    },
    image: "/images/products/New_Celestial_Product_30_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394913964342",
    name: "Celestial Perfume K Vanilla",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Vanilla 28 is a Oriental Vanilla fragrance for women and men. The nose behind this fragrance is Gabriela Chelariu. Top notes are Vanilla Orchid and Jasmine; middle notes are Brown sugar and Tonka Bean; base notes are Amber, Amberwood, Musk and Patchouli.",
    notes: {
      top: "Vanilla Orchid and Jasmine",
      heart: "Brown sugar and Tonka Bean",
      base: "Amber, Amberwood, Musk and Patchouli"
    },
    image: "/images/products/45_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394913866038",
    name: "Celestial Perfume Si",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Si by GA is a Chypre Fruity fragrance for women. The nose behind this fragrance is Christine Nagel. Top note is Cassis; middle notes are May Rose and Freesia; base notes are Vanilla, Patchouli, Woody Notes and Ambroxan.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "May Rose and Freesia",
      base: "Vanilla, Patchouli, Woody Notes and Ambroxan"
    },
    image: "/images/products/48_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10394898465078",
    name: "Celestial Perfume H-GG",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Good Girl is a Amber Floral fragrance for women. Top notes are Almond, Coffee, Bergamot and Lemon; middle notes are Tuberose, Jasmine Sambac, Orange Blossom, Orris and Bulgarian Rose; base notes are Tonka Bean, Cacao, Vanilla, Praline, Sandalwood, Musk, Amber, Cashmere Wood, Cinnamon, Patchouli and Cedar.",
    notes: {
      top: "Almond, Coffee, Bergamot and Lemon",
      heart: "Tuberose, Jasmine Sambac, Orange Blossom, Orris and Bulgarian Rose",
      base: "Tonka Bean, Cacao, Vanilla, Praline, Sandalwood, Musk, Amber, Cashmere Wood, Cinnamon, Patchouli and Cedar"
    },
    image: "/images/products/New_Celestial_Product_16_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394898104630",
    name: "Celestial Perfume Bloom",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Gucci Bloom is a Floral fragrance for women. Top notes are Galbanum Leaf, Cassis, Bergamot and Lemon; middle notes are Honeysuckle, Tuberose, Jasmine, Lily-of-the-Valley and Freesia; base notes are Musk, Iso E Super and Sandalwood.",
    notes: {
      top: "Galbanum Leaf, Cassis, Bergamot and Lemon",
      heart: "Honeysuckle, Tuberose, Jasmine, Lily-of-the-Valley and Freesia",
      base: "Musk, Iso E Super and Sandalwood"
    },
    image: "/images/products/New_Celestial_Product_25_24dbbe3d-01c2-4d05-b940-7a7fd119a254_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394897875254",
    name: "Celestial Perfume N-5",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "N5 is a Floral Aldehyde fragrance for women. Top notes are Aldehydes, Ylang-Ylang, Neroli, Bergamot and Lemon; middle notes are Iris, Jasmine, Rose, Orris Root and Lily-of-the-Valley; base notes are Civet, Musk, Amber, Sandalwood, Moss, Vanilla, Vetiver and Patchouli.",
    notes: {
      top: "Aldehydes, Ylang-Ylang, Neroli, Bergamot and Lemon",
      heart: "Iris, Jasmine, Rose, Orris Root and Lily-of-the-Valley",
      base: "Civet, Musk, Amber, Sandalwood, Moss, Vanilla, Vetiver and Patchouli"
    },
    image: "/images/products/New_Celestial_Product_27_9c267ec5-6d32-45eb-9e43-cb8c5be69696_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394897613110",
    name: "Celestial Perfume Bright Crystal",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Bright Crystal is a Floral Fruity fragrance for women. Top notes are Yuzu, Pomegranate and Ice; middle notes are Peony, Lotus and Magnolia; base notes are Musk, Mahogany and Amber.",
    notes: {
      top: "Yuzu, Pomegranate and Ice",
      heart: "Peony, Lotus and Magnolia",
      base: "Musk, Mahogany and Amber"
    },
    image: "/images/products/New_Celestial_Product_28_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10394897416502",
    name: "Celestial Perfume Flora",
    category: "Luxury Perfumes",
    priceRange: "₹799 - ₹999",
    description: "flora gorgeous for women is a joyful floral perfume . Top note is Mandarin and pepper ; middle note is Osmanthus, peony and rose ; base note is Patchouli, cedar and leather .",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_4_91900f5e-1ca9-429b-af8a-91bf598227c4_watermarked.png",
    tag: "Tejasswi Fav"
  },
  {
    id: "celestial-10313264988470",
    name: "Inspired By C@lvin Klein 0bsessi0n ( Worn By Salman Khan )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Obsession for Me n is a Oriental Woody fragrance for men. Obsession for Men was launched in 1986. The nose behind this fragrance is Robert Slattery. Top notes are Cinnamon, Lavender, Coriander, Mandarin Orange, Lime, Bergamot and Grapefruit; middle notes are Myrhh, Nutmeg, Carnation, Brazilian Rosewood, Pine Tree, Sage, Jasmine and Red Berries; base notes are Amber, Vanilla, Sandalwood, Musk, Patchouli and Vetiver.",
    notes: {
      top: "Cinnamon, Lavender, Coriander, Mandarin Orange, Lime, Bergamot and Grapefruit",
      heart: "Myrhh, Nutmeg, Carnation, Brazilian Rosewood, Pine Tree, Sage, Jasmine and Red Berries",
      base: "Amber, Vanilla, Sandalwood, Musk, Patchouli and Vetiver"
    },
    image: "/images/products/New_Celestial_Product_31_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10314232267062",
    name: "Inspired by Jo M@lone 0range Bl0ssom (Worn by Deepika P@duk0ne)",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Blossom by Jo Malone London is a Floral fragrance for women and men. The nose behind this fragrance is Jean Claude Delville. Top note is Tangerine Blossom; middle notes are Orange Blossom, Lilac and Water Lily; base notes are Iris and Vetiver.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Orange Blossom, Lilac and Water Lily",
      base: "Iris and Vetiver"
    },
    image: "/images/products/New_Celestial_Product_30_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10313272820022",
    name: "Inspired By Pr@da P@rad0xe",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Paradoxe is a Oriental Floral fragrance for women. Top notes are Pear, Tangerine and Bergamot; middle notes are Orange Blossom, Neroli Essence, Neroli and Jasmine Sambac; base notes are Bourbon Vanilla, Amber, White Musk and Benzoin.",
    notes: {
      top: "Pear, Tangerine and Bergamot",
      heart: "Orange Blossom, Neroli Essence, Neroli and Jasmine Sambac",
      base: "Bourbon Vanilla, Amber, White Musk and Benzoin"
    },
    image: "/images/products/New_Celestial_Product_12_1_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10303108153654",
    name: "Inspired By My W@y Gi0rgi0 Arm@ni",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "My Way is a Floral fragrance for women. My Way was created by Carlos Benaïm and Bruno Jovanovic. Top notes are Orange Blossom and Bergamot; middle notes are Tuberose and Indian Jasmine; base notes are Madagascar Vanilla, White Musk and Virginian Cedar.",
    notes: {
      top: "Orange Blossom and Bergamot",
      heart: "Tuberose and Indian Jasmine",
      base: "Madagascar Vanilla, White Musk and Virginian Cedar"
    },
    image: "/images/products/46_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10303106679094",
    name: "Inspired By LV Im@gin@tions",
    category: "Men's Collection",
    priceRange: "₹949 - ₹1,299",
    description: "Imagination by L V is a Citrus Aromatic fragrance for men. Imagination was launched in 2021. The nose behind this fragrance is Jacques Cavallier Belletrud. Top notes are Citron, Calabrian bergamot and Sicilian Orange; middle notes are Tunisian Neroli, Nigerian Ginger and Ceylon Cinnamon; base notes are Chinese Black Tea, Ambroxan, Guaiac Wood and Olibanum.",
    notes: {
      top: "Citron, Calabrian bergamot and Sicilian Orange",
      heart: "Tunisian Neroli, Nigerian Ginger and Ceylon Cinnamon",
      base: "Chinese Black Tea, Ambroxan, Guaiac Wood and Olibanum"
    },
    image: "/images/products/49_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10303109038390",
    name: "Inspired By K@y@li Eden Juicy Apple",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Eden Juicy Apple Fragrances is a Floral Fruity Gourmand fragrance for women and men. Top notes are Red Apple, Litchi, Black Currant and Pink Grapefruit; middle notes are Wild Berries, Raspberry Bloom, Jasmine and May Rose; base notes are Sugar, Musk, Vanilla Flower, Amber and Moss.",
    notes: {
      top: "Red Apple, Litchi, Black Currant and Pink Grapefruit",
      heart: "Wild Berries, Raspberry Bloom, Jasmine and May Rose",
      base: "Sugar, Musk, Vanilla Flower, Amber and Moss"
    },
    image: "/images/products/44_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10305123811638",
    name: "Inspired By K@yali V@nilla",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Vanilla 28 is a Oriental Vanilla fragrance for women and men. The nose behind this fragrance is Gabriela Chelariu. Top notes are Vanilla Orchid and Jasmine; middle notes are Brown sugar and Tonka Bean; base notes are Amber, Amberwood, Musk and Patchouli.",
    notes: {
      top: "Vanilla Orchid and Jasmine",
      heart: "Brown sugar and Tonka Bean",
      base: "Amber, Amberwood, Musk and Patchouli"
    },
    image: "/images/products/45_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10305082720566",
    name: "Inspired By Gi0rgi0 Arm@ni Si",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Si by GA is a Chypre Fruity fragrance for women. The nose behind this fragrance is Christine Nagel. Top note is Cassis; middle notes are May Rose and Freesia; base notes are Vanilla, Patchouli, Woody Notes and Ambroxan.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "May Rose and Freesia",
      base: "Vanilla, Patchouli, Woody Notes and Ambroxan"
    },
    image: "/images/products/48_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10205971120438",
    name: "Inspired By D J'@dore Perfume",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "J'ad0re is a Floral Fruity fragrance for women. The nose behind this fragrance is Calice Becker. Top notes are Pear, Melon, Magnolia, Peach, Mandarin Orange and Bergamot; middle notes are Jasmine, Lily-of-the-Valley, Tuberose, Freesia, Rose, Orchid, Violet and Plum; base notes are Musk, Vanilla, Cedar and Blackberry.",
    notes: {
      top: "Pear, Melon, Magnolia, Peach, Mandarin Orange and Bergamot",
      heart: "Jasmine, Lily-of-the-Valley, Tuberose, Freesia, Rose, Orchid, Violet and Plum",
      base: "Musk, Vanilla, Cedar and Blackberry"
    },
    image: "/images/products/CELESTIAL_Product_1_1_watermarked.png",
    tag: "New Arrival"
  },
  {
    id: "celestial-10205947232566",
    name: "Inspired By Vers@ce Dyl@n Blue Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Dylan Blue is a Aromatic Fougere fragrance for men. The nose behind this fragrance is Alberto Morillas. Top notes are Calabrian bergamot, Water Notes, Grapefruit and Fig Leaf; middle notes are Ambroxan, Black Pepper, Patchouli, Violet Leaf and Papyrus; base notes are Incense, Musk, Tonka Bean and Saffron.",
    notes: {
      top: "Calabrian bergamot, Water Notes, Grapefruit and Fig Leaf",
      heart: "Ambroxan, Black Pepper, Patchouli, Violet Leaf and Papyrus",
      base: "Incense, Musk, Tonka Bean and Saffron"
    },
    image: "/images/products/New_Celestial_Product_24_watermarked.png",
  },
  {
    id: "celestial-10201062375734",
    name: "Inspired By @jm@l Wis@l Dh@h@b Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Wis@l Dhahab is a Floral Woody Musk fragrance for women and men. Top notes are Pear, Apple, Peach, Grapefruit and Mandarin Orange; middle notes are Rose, Orchid, Jasmine and Geranium; base notes are Sandalwood, Musk, Patchouli and Cedar.",
    notes: {
      top: "Pear, Apple, Peach, Grapefruit and Mandarin Orange",
      heart: "Rose, Orchid, Jasmine and Geranium",
      base: "Sandalwood, Musk, Patchouli and Cedar"
    },
    image: "/images/products/New_Celestial_Product_23_watermarked.png",
  },
  {
    id: "celestial-10201058607414",
    name: "Inspired By L@tt@fa Kh@mrah Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Khamrah is a Oriental Spicy fragrance for women and men. This is a new fragrance.Top notes are Cinnamon, Nutmeg and Bergamot; middle notes are Dates, Praline, Tuberose and Mahonial; base notes are Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin and Akigalawood",
    notes: {
      top: "Cinnamon, Nutmeg and Bergamot",
      heart: "Dates, Praline, Tuberose and Mahonial",
      base: "Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin and Akigalawood"
    },
    image: "/images/products/New_Celestial_Product_22_watermarked.png",
  },
  {
    id: "celestial-10104700076342",
    name: "Inspired By R@s@si H@wµs P0µr H0mu Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "is a Aromatic Aquatic fragrance for men. Top notes are Bergamot, Apple, Cinnamon and Lemon; middle notes are Watery Notes, Plum, Orange Blossom and Cardamon; base notes are Ambergris, Musk, Driftwood and Patchouli.",
    notes: {
      top: "Bergamot, Apple, Cinnamon and Lemon",
      heart: "Watery Notes, Plum, Orange Blossom and Cardamon",
      base: "Ambergris, Musk, Driftwood and Patchouli"
    },
    image: "/images/products/New_Celestial_Product_25_watermarked.png",
  },
  {
    id: "celestial-9993652994358",
    name: "Inspired by Čh@nÈl N0.5 Perfume ( Worn by S@ra ali Kh@n )",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "N5 is a Floral Aldehyde fragrance for women. Top notes are Aldehydes, Ylang-Ylang, Neroli, Bergamot and Lemon; middle notes are Iris, Jasmine, Rose, Orris Root and Lily-of-the-Valley; base notes are Civet, Musk, Amber, Sandalwood, Moss, Vanilla, Vetiver and Patchouli.",
    notes: {
      top: "Aldehydes, Ylang-Ylang, Neroli, Bergamot and Lemon",
      heart: "Iris, Jasmine, Rose, Orris Root and Lily-of-the-Valley",
      base: "Civet, Musk, Amber, Sandalwood, Moss, Vanilla, Vetiver and Patchouli"
    },
    image: "/images/products/New_Celestial_Product_27_9c267ec5-6d32-45eb-9e43-cb8c5be69696_watermarked.png",
  },
  {
    id: "celestial-9514240999734",
    name: "Inspired By Roja Ely$ium Perfume (Worn By H@rdik P@ndya)",
    category: "Men's Collection",
    priceRange: "₹949 - ₹1,299",
    description: "$lysium Pour Homme Parfum Cologne by R0ja Dove is a Aromatic Fougere fragrance for men. $ lysium Pour Homme Parfum Cologne was launched in 2017. The nose behind this fragrance is R0ja Dove. Top notes are Grapefruit, Lemon, Bergamot, Lime, Thyme, Artemisia and Galbanum; middle notes are Vetiver, Juniper Berries, Black Currant, Apple, Pink Pepper, Cedar, Cypriol Oil or Nagarmotha, Lily-of-the-Valley, Rose and Jasmine; base notes are Ambergris, Leather, Vanilla, Benzoin and Labdanum.",
    notes: {
      top: "Grapefruit, Lemon, Bergamot, Lime, Thyme, Artemisia and Galbanum",
      heart: "Vetiver, Juniper Berries, Black Currant, Apple, Pink Pepper, Cedar, Cypriol Oil or Nagarmotha, Lily-of-the-Valley, Rose and Jasmine",
      base: "Ambergris, Leather, Vanilla, Benzoin and Labdanum"
    },
    image: "/images/products/New_Celestial_Product_24_6099dddf-2108-4562-91a0-aaa052f99e9a_watermarked.png",
  },
  {
    id: "celestial-9558303605046",
    name: "Inspired By JPG Ultra M@le Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Ultra Male, the rogue sailor who will have you lost at sea! This Eau de Toilette Intense is a lavender cologne for men fighting in an arm wrestle between power and greed. A Jean Paul Gaultier fragrance featuring an irresistible combination of dark lavender, woody vanilla, pear juice and mint.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_26_watermarked.png",
  },
  {
    id: "celestial-9514258923830",
    name: "Inspired By Ombre Nom@de Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Ombre Nom@de by L0uis Vuitt0n is a Amber Woody fragrance for women and men. Ombre Nom@de was launched in 2018. The nose behind this fragrance is J@cques C@vallier.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_27_watermarked.png",
  },
  {
    id: "celestial-9553320640822",
    name: "Inspired by T0mford T@abacc0 V@nille Perfume",
    category: "Men's Collection",
    priceRange: "₹949 - ₹1,299",
    description: "Tom Ford reinvents a classic fragrance genre by adding creamy tonka bean, vanilla, cocoa, dry fruit accords and sweet wood sap for a modern, opulent, and almost heady impression that's all man, unless worn by a woman.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_20_watermarked.png",
  },
  {
    id: "celestial-9514272424246",
    name: "Inspired by Ch@nel @llure H0mme Spt Perfume ( Worn by S@if Al! Kh@n  )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "@llure H0mme by Ch@nel is a Woody Spicy fragrance for men. @ llure H0mme Spt was launched in 2004. The nose behind this fragrance is J@cques Polge. Top notes are Orange, Sea Notes, Aldehydes and Blood Mandarin; middle notes are Pepper, Neroli and Cedar; base notes are Vanilla, Tonka Bean, White Musk, Amber, Vetiver and Elemi resin.",
    notes: {
      top: "Orange, Sea Notes, Aldehydes and Blood Mandarin",
      heart: "Pepper, Neroli and Cedar",
      base: "Vanilla, Tonka Bean, White Musk, Amber, Vetiver and Elemi resin"
    },
    image: "/images/products/New_Celestial_Product_19_watermarked.png",
  },
  {
    id: "celestial-9398753427766",
    name: "Inspired By B@ccarat R0uge 540 Perfume",
    category: "Men's Collection",
    priceRange: "₹949 - ₹1,299",
    description: "BR 540 is a Amber Floral fragrance for women and men. The nose behind this fragrance is Francis Kurkdjian. Top notes are Saffron and Jasmine; middle notes are Amberwood and Ambergris; base notes are Fir Resin and Cedar.",
    notes: {
      top: "Saffron and Jasmine",
      heart: "Amberwood and Ambergris",
      base: "Fir Resin and Cedar"
    },
    image: "/images/products/New_Celestial_Product_17_watermarked.png",
  },
  {
    id: "celestial-9378246754614",
    name: "Inspired By YSL Black 0pium Perfume",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Black Opium is a Amber Vanilla fragrance for women. Top notes are Pear, Pink Pepper and Orange Blossom; middle notes are Coffee, Jasmine, Bitter Almond and Licorice; base notes are Vanilla, Patchouli, Cashmere Wood and Cedar.",
    notes: {
      top: "Pear, Pink Pepper and Orange Blossom",
      heart: "Coffee, Jasmine, Bitter Almond and Licorice",
      base: "Vanilla, Patchouli, Cashmere Wood and Cedar"
    },
    image: "/images/products/New_Celestial_Product_6_watermarked.png",
  },
  {
    id: "celestial-9312888422710",
    name: "Inspired Ch@nel Coco M@demoiselle Perfume ( Worn by Ileana D'Cruz )",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Coco Mademoiselle is a Amber Floral fragrance for women. Top notes are Orange, Mandarin Orange, Bergamot and Orange Blossom; middle notes are Turkish Rose, Jasmine, Mimosa and Ylang-Ylang; base notes are Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean and Opoponax.",
    notes: {
      top: "Orange, Mandarin Orange, Bergamot and Orange Blossom",
      heart: "Turkish Rose, Jasmine, Mimosa and Ylang-Ylang",
      base: "Patchouli, White Musk, Vanilla, Vetiver, Tonka Bean and Opoponax"
    },
    image: "/images/products/New_Celestial_Product_29_538358ef-4766-4d70-8e1c-f0450fe28ed6_watermarked.png",
  },
  {
    id: "celestial-9312887669046",
    name: "Inspired By Gucci Blo0m Perfume ( Worn by Aditi Rao Hydari )",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Gucci Bloom is a Floral fragrance for women. Top notes are Galbanum Leaf, Cassis, Bergamot and Lemon; middle notes are Honeysuckle, Tuberose, Jasmine, Lily-of-the-Valley and Freesia; base notes are Musk, Iso E Super and Sandalwood.",
    notes: {
      top: "Galbanum Leaf, Cassis, Bergamot and Lemon",
      heart: "Honeysuckle, Tuberose, Jasmine, Lily-of-the-Valley and Freesia",
      base: "Musk, Iso E Super and Sandalwood"
    },
    image: "/images/products/New_Celestial_Product_25_24dbbe3d-01c2-4d05-b940-7a7fd119a254_watermarked.png",
  },
  {
    id: "celestial-9259155489078",
    name: "King Of Bollywood Perfume ( Inspired By T@MD@0 & DUNHILL ICON) Pack Of Two Perfumes",
    category: "Men's Collection",
    priceRange: "₹1,099",
    description: "You Get 60Ml +60Ml =120Ml T@m D@o is a Floral Woody Musk fragrance for women and men. Top notes are Italian Cypress, Myrtle and Rose; middle notes are Sandalwood and Cedar; base notes are Brazilian Rosewood, Spices, Amber and White Musk. ICON is a Woody Aromatic fragrance for men. Top notes are Neroli, Bergamot, Black Pepper and Petitgrain; middle notes are Black Pepper, Lavender, Cardamom, Juniper Berries and Sage; base notes are Vetiver, Oakmoss, iris, Leather and Agarwood (Oud).",
    notes: {
      top: "Italian Cypress, Myrtle and Rose",
      heart: "Sandalwood and Cedar",
      base: "Brazilian Rosewood, Spices, Amber and White Musk"
    },
    image: "/images/products/King_khan_4_watermarked.png",
  },
  {
    id: "celestial-9237335146806",
    name: "Inspired By Carolina Herrera Go0d Girl Perfume",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Good Girl is a Amber Floral fragrance for women. Top notes are Almond, Coffee, Bergamot and Lemon; middle notes are Tuberose, Jasmine Sambac, Orange Blossom, Orris and Bulgarian Rose; base notes are Tonka Bean, Cacao, Vanilla, Praline, Sandalwood, Musk, Amber, Cashmere Wood, Cinnamon, Patchouli and Cedar.",
    notes: {
      top: "Almond, Coffee, Bergamot and Lemon",
      heart: "Tuberose, Jasmine Sambac, Orange Blossom, Orris and Bulgarian Rose",
      base: "Tonka Bean, Cacao, Vanilla, Praline, Sandalwood, Musk, Amber, Cashmere Wood, Cinnamon, Patchouli and Cedar"
    },
    image: "/images/products/New_Celestial_Product_16_watermarked.png",
  },
  {
    id: "celestial-9237327020342",
    name: "Inspired by Tomford ombre Le@ther Perfume ( Worn by Arjun Kap0or ) Unisex",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Ombré Leather is a Leather fragrance for women and men. Top note is Cardamom; middle notes are Leather and Jasmine Sambac; base notes are Amber, Moss and Patchouli.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Leather and Jasmine Sambac",
      base: "Amber, Moss and Patchouli"
    },
    image: "/images/products/New_Celestial_Product_11_watermarked.png",
  },
  {
    id: "celestial-9237322400054",
    name: "Inspired by Paco Rabbane one Milli0n Perfume ( Worn by Ed Sheer@n )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "1 Million is a Woody Spicy fragrance for men. Top notes are Blood Mandarin, Grapefruit and Mint; middle notes are Cinnamon, Spicy Notes and Rose; base notes are Amber, Leather, Woody Notes and Indian Patchouli.",
    notes: {
      top: "Blood Mandarin, Grapefruit and Mint",
      heart: "Cinnamon, Spicy Notes and Rose",
      base: "Amber, Leather, Woody Notes and Indian Patchouli"
    },
    image: "/images/products/New_Celestial_Product_4_0f10063c-02a3-4fc2-8ff7-fae284c52239_watermarked.png",
  },
  {
    id: "celestial-9237314830646",
    name: "Inspired by DUNHILL IC0N Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "ICON is a Woody Aromatic fragrance for men. Top notes are Neroli, Bergamot, Black Pepper and Petitgrain; middle notes are Black Pepper, Lavender, Cardamom, Juniper Berries and Sage; base notes are Vetiver, Oakmoss, iris, Leather and Agarwood (Oud).",
    notes: {
      top: "Neroli, Bergamot, Black Pepper and Petitgrain",
      heart: "Black Pepper, Lavender, Cardamom, Juniper Berries and Sage",
      base: "Vetiver, Oakmoss, iris, Leather and Agarwood (Oud)"
    },
    image: "/images/products/New_Celestial_Product_31_85205faa-746a-4be1-aad7-79633cf5300b_watermarked.png",
  },
  {
    id: "celestial-9237299265846",
    name: "Inspired by Creed Av3ntus Perfume ( Worn By D@vid Beckh@m ) Unisex",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Aventus is a Chypre Fruity fragrance for men and women. Top notes are Pineapple, Bergamot, Black Currant and Apple; middle notes are Birch, Patchouli, Moroccan Jasmine and Rose; base notes are Musk, oak moss, Ambergris and Vanilla.",
    notes: {
      top: "Pineapple, Bergamot, Black Currant and Apple",
      heart: "Birch, Patchouli, Moroccan Jasmine and Rose",
      base: "Musk, oak moss, Ambergris and Vanilla"
    },
    image: "/images/products/New_Celestial_Product_2_watermarked.png",
  },
  {
    id: "celestial-9237308342582",
    name: "Inspired by Victoria Secret B0mbshell Perfume",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Bombshell is a Floral Fruity fragrance for women. Top notes are Passionfruit, Grapefruit, Pineapple, Tangerine and Big Strawberry; middle notes are Peony, Vanilla orchid, Red Berries, Jasmine and Lily-of-the-Valley; base notes are Musk, Woody Notes and Oakmoss.",
    notes: {
      top: "Passionfruit, Grapefruit, Pineapple, Tangerine and Big Strawberry",
      heart: "Peony, Vanilla orchid, Red Berries, Jasmine and Lily-of-the-Valley",
      base: "Musk, Woody Notes and Oakmoss"
    },
    image: "/images/products/New_Celestial_Product_1_watermarked.png",
  },
  {
    id: "celestial-9237308211510",
    name: "Inspired by Tam Da0 Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "T@m D@o Eau de Toilette is a Floral Woody Musk fragrance for women and men. Top notes are Italian Cypress, Myrtle and Rose; middle notes are Sandalwood and Cedar; base notes are Brazilian Rosewood, Spices, Amber and White Musk.",
    notes: {
      top: "Italian Cypress, Myrtle and Rose",
      heart: "Sandalwood and Cedar",
      base: "Brazilian Rosewood, Spices, Amber and White Musk"
    },
    image: "/images/products/Tam_dao_watermarked.jpg",
  },
  {
    id: "celestial-9237308277046",
    name: "Inspired by Versace Er0s Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Eros is a Aromatic Fougere fragrance for men. Top notes are Mint, Green Apple and Lemon; middle notes are Tonka Bean, Ambroxan and Geranium; base notes are Madagascar Vanilla, Virginian Cedar, Atlas Cedar, Vetiver and Oakmoss.",
    notes: {
      top: "Mint, Green Apple and Lemon",
      heart: "Tonka Bean, Ambroxan and Geranium",
      base: "Madagascar Vanilla, Virginian Cedar, Atlas Cedar, Vetiver and Oakmoss"
    },
    image: "/images/products/New_Celestial_Product_watermarked.png",
  },
  {
    id: "celestial-9237308113206",
    name: "Inspired by D 0ff Cool W@ter Perfume ( Worn by Aksh@y Kum@r ) Unisex",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Cool Water is a Aromatic Aquatic fragrance for men and women. Top notes are Sea water, Lavender, Mint, Green Notes, Rosemary, Calone and Coriander; middle notes are Sandalwood, Geranium, Neroli and Jasmine; base notes are Musk, Tobacco, Oakmoss, Cedar and Amber.",
    notes: {
      top: "Sea water, Lavender, Mint, Green Notes, Rosemary, Calone and Coriander",
      heart: "Sandalwood, Geranium, Neroli and Jasmine",
      base: "Musk, Tobacco, Oakmoss, Cedar and Amber"
    },
    image: "/images/products/New_Celestial_Product_33_watermarked.png",
  },
  {
    id: "celestial-9237299724598",
    name: "Inspired By Viking Perfume ( Worn by Vir@t K0hli )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Viking by is a Woody Aromatic fragrance for men. Top notes are Pink Pepper, Spicy Mint, Bergamot, Lemon, Absinthe and Orange; middle notes are Lavender, Bulgarian Rose, Clove, Allspice, Orris Root and Jasmine; base notes are Vetiver, Cedar, White Musk and Tonka Bean.",
    notes: {
      top: "Pink Pepper, Spicy Mint, Bergamot, Lemon, Absinthe and Orange",
      heart: "Lavender, Bulgarian Rose, Clove, Allspice, Orris Root and Jasmine",
      base: "Vetiver, Cedar, White Musk and Tonka Bean"
    },
    image: "/images/products/New_Celestial_Product_21_watermarked.png",
  },
  {
    id: "celestial-9237299659062",
    name: "Inspired By Azzaro The Most W@nted Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "The Most Wanted is a Amber Spicy fragrance for men. Top note is Cardamom; middle note is Toffee; base note is Amberwood. T he Most Wanted, an unpredictable masculine fragrance with an intense kick.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_8_watermarked.png",
  },
  {
    id: "celestial-9237299560758",
    name: "Inspired By Ck 0ne Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "One is a Citrus Aromatic fragrance for women and men. Top notes are Lemon, Green Notes, Bergamot, Pineapple, Mandarin Orange, Cardamom and Papaya; middle notes are Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose, Orris Root and Freesia; base notes are Green Accord, Musk, Cedar, Sandalwood, Oakmoss, Green Tea and Amber.",
    notes: {
      top: "Lemon, Green Notes, Bergamot, Pineapple, Mandarin Orange, Cardamom and Papaya",
      heart: "Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose, Orris Root and Freesia",
      base: "Green Accord, Musk, Cedar, Sandalwood, Oakmoss, Green Tea and Amber"
    },
    image: "/images/products/New_Celestial_Product_15_watermarked.png",
  },
  {
    id: "celestial-9237299462454",
    name: "Inspired By D Homme P@rfum Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Homme Parfum is a Leather fragrance for men. T op notes are Tuscan Iris and Italian Orange; middle notes are Leather and Rose; base notes are Sandalwood, Ambrette (Musk Mallow), Agarwood (Oud) and Cedar.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Leather and Rose",
      base: "Sandalwood, Ambrette (Musk Mallow), Agarwood (Oud) and Cedar"
    },
    image: "/images/products/CELESTIAL_Product_3_1_watermarked.png",
  },
  {
    id: "celestial-9237299429686",
    name: "Inspired By Gucci Gµilty Perfume ( Worn by R@nveer Singh ) Unisex",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Guilty Pour Homme is a Woody Aromatic fragrance for men & Women. Top notes are Lavender and Amalfi Lemon; middle note is African Orange flower; base notes are Virginia Cedar, Patchouli and Vanilla.",
    notes: {
      top: "Lavender and Amalfi Lemon",
      heart: "Floral Notes, Jasmine",
      base: "Virginia Cedar, Patchouli and Vanilla"
    },
    image: "/images/products/New_Celestial_Product_9_watermarked.png",
  },
  {
    id: "celestial-9237293891894",
    name: "Inspired by Terre De Herme$ Perfume ( Worn by Sanj@y Dutt )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Terre d is a Woody Spicy fragrance for men.Top notes are Orange and Grapefruit; middle notes are Pepper, Pelargonium and Flint; base notes are Vetiver, Cedar, Patchouli and Benzoin.",
    notes: {
      top: "Orange and Grapefruit",
      heart: "Pepper, Pelargonium and Flint",
      base: "Vetiver, Cedar, Patchouli and Benzoin"
    },
    image: "/images/products/New_Celestial_Product_23_4944a3ff-1538-46da-a8b2-0e3c276370ec_watermarked.png",
  },
  {
    id: "celestial-9237293826358",
    name: "Inspired by Tomford oud W00d Perfume ( Worn by Moni R0y & Am@n Gupta Bo@t ) Unisex",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Oud Wood is a Amber Woody fragrance for women and men.",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_3_watermarked.png",
  },
  {
    id: "celestial-9237293760822",
    name: "Inspired By Bvlgari Men In Bl@ck Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Men In Black is a Amber Floral fragrance for men. Top notes are Spices, Rum and Tobacco; middle notes are Leather, iris and Tuberose; base notes are Tonka Bean, Guaiac Wood and Benzoin. With Men in Black expresses the impetuous and mysterious character of fire, a transformative element symbolizing strength and energy.",
    notes: {
      top: "Spices, Rum and Tobacco",
      heart: "Leather, iris and Tuberose",
      base: "Tonka Bean, Guaiac Wood and Benzoin"
    },
    image: "/images/products/New_Celestial_Product_7_watermarked.png",
  },
  {
    id: "celestial-9237293662518",
    name: "Inspired by Creed Green Irish Twe3d Perfume ( Worn by S@hid Kapoor )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Green Irish Tweed is a Woody Floral Musk fragrance for men. Top notes are Lemon Verbena and iris; middle note is Violet Leaf; base notes are Ambergris and Sandalwood.",
    notes: {
      top: "Lemon Verbena and iris",
      heart: "Floral Notes, Jasmine",
      base: "Ambergris and Sandalwood"
    },
    image: "/images/products/CELESTIAL_Product_Mustali_16239ea6-c0a7-4625-9331-1cc158b968a4_watermarked.png",
  },
  {
    id: "celestial-9237292581174",
    name: "Inspired By Ġůccï FL0r@ Perfume ( Worn by Alia Bh@tt )",
    category: "Luxury Perfumes",
    priceRange: "₹799 - ₹999",
    description: "flora gorgeous for women is a joyful floral perfume . Top note is Mandarin and pepper ; middle note is Osmanthus, peony and rose ; base note is Patchouli, cedar and leather .",
    notes: {
      top: "Bergamot, Fresh Notes",
      heart: "Floral Notes, Jasmine",
      base: "Amber, Cedarwood, Musk"
    },
    image: "/images/products/New_Celestial_Product_4_91900f5e-1ca9-429b-af8a-91bf598227c4_watermarked.png",
  },
  {
    id: "celestial-9237291467062",
    name: "Inspired By Bleu De Ch@nel Perfume ( Worn by Adity@ Roy K@p00r )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Bleu de is a Woody Aromatic fragrance for men. Top notes are Grapefruit, Lemon, Mint and Pink Pepper; middle notes are Ginger, Nutmeg, Jasmine and Iso E Super; base notes are Incense, Vetiver, Cedar, Sandalwood, Patchouli, Labdanum and White Musk.",
    notes: {
      top: "Grapefruit, Lemon, Mint and Pink Pepper",
      heart: "Ginger, Nutmeg, Jasmine and Iso E Super",
      base: "Incense, Vetiver, Cedar, Sandalwood, Patchouli, Labdanum and White Musk"
    },
    image: "/images/products/CELESTIAL_Product_Mustali_1_watermarked.png",
  },
  {
    id: "celestial-9179590066486",
    name: "Inspired By Armani C0de Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Code is a Amber Spicy fragrance for men. Top notes are Lemon and Bergamot; middle notes are Star Anise, Olive Blossom and Guaiac Wood; base notes are Leather, Tonka Bean and Tobacco.",
    notes: {
      top: "Lemon and Bergamot",
      heart: "Star Anise, Olive Blossom and Guaiac Wood",
      base: "Leather, Tonka Bean and Tobacco"
    },
    image: "/images/products/New_Celestial_Product_10_aae7b900-5d46-4810-ad12-956e3bec4d80_watermarked.png",
  },
  {
    id: "celestial-9179590000950",
    name: "Inspired by Versace Bright Cryst@l Perfume ( Worn by Kiara Advani & Manushi Chhillar )",
    category: "Luxury Perfumes",
    priceRange: "₹849 - ₹1,099",
    description: "Bright Crystal is a Floral Fruity fragrance for women. Top notes are Yuzu, Pomegranate and Ice; middle notes are Peony, Lotus and Magnolia; base notes are Musk, Mahogany and Amber.",
    notes: {
      top: "Yuzu, Pomegranate and Ice",
      heart: "Peony, Lotus and Magnolia",
      base: "Musk, Mahogany and Amber"
    },
    image: "/images/products/New_Celestial_Product_28_watermarked.png",
  },
  {
    id: "celestial-9179589607734",
    name: "Inspired By Acqua Di Gio Pr0fumo Perfume",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Acqua di Gio Profumo is a Aromatic Aquatic fragrance for men. Top notes are Lime and Bergamot; middle notes are Sea Notes, Jasmine and Peace; base notes are Cedar, Patchouli and Amber. Profumo is an aquatic, aromatic, woody and spicy composition.",
    notes: {
      top: "Lime and Bergamot",
      heart: "Sea Notes, Jasmine and Peace",
      base: "Cedar, Patchouli and Amber"
    },
    image: "/images/products/New_Celestial_Product_13_watermarked.png",
  },
  {
    id: "celestial-9179589509430",
    name: "Inspired by D S@uv@ge Perfume ( Worn by J0hnny depp )",
    category: "Men's Collection",
    priceRange: "₹849 - ₹1,099",
    description: "Sauvage is a Aromatic Fougere fragrance for men. Top notes are Calabrian bergamot and Pepper; middle notes are Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium and elemi; base notes are Ambroxan, Cedar and Labdanum.",
    notes: {
      top: "Calabrian bergamot and Pepper",
      heart: "Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium and elemi",
      base: "Ambroxan, Cedar and Labdanum"
    },
    image: "/images/products/New_Celestial_Product_26_f855de50-c81b-4501-b448-a856b90b27a2_watermarked.png",
  },
] as const;
