export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const BUSINESS_INFO = {
  name: "RK Perfume",
  tagline: "Premium Perfume Shop in Tulshibaug Pune",
  owner: "Rakesh",
  phone: "+91 82828 25008",
  phoneClean: "918282825008",
  email: "connect@rkperfume.in",
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

export interface CollectionProduct {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  description: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  image: string;
  tag?: string;
}

export const COLLECTION_PRODUCTS: readonly CollectionProduct[] = [
  {
    id: "essprive-coco-m",
    name: "ESSPRIVE Coco M",
    category: "Women's Collection",
    priceRange: "₹599 - ₹649",
    description: "An intoxicating amber floral symphony inspired by Coco Mademoiselle. Fresh sparks of vibrant orange and bergamot unfold into a heart of pure Turkish rose and blossoming jasmine, grounded in sensual patchouli and warm bourbon vanilla.",
    notes: {
      top: "Orange, Mandarin, Bergamot",
      heart: "Turkish Rose, Jasmine, Ylang-Ylang",
      base: "Patchouli, White Musk, Vanilla, Vetiver"
    },
    image: "/images/products/essprive_coco_m.jpg",
    tag: "Bestseller"
  },
  {
    id: "essprive-sauvage",
    name: "ESSPRIVE Sauvage",
    category: "Men's Collection",
    priceRange: "₹599 - ₹649",
    description: "A radically crisp, magnetic composition inspired by Dior Sauvage. Juicy Calabrian bergamot bursts open with spicy Sichuan pepper before settling into an untamed, noble trail of rich ambroxan and cedarwood.",
    notes: {
      top: "Calabrian Bergamot, Black Pepper",
      heart: "Sichuan Pepper, Lavender, Pink Pepper",
      base: "Ambroxan, Cedar, Labdanum"
    },
    image: "/images/products/essprive_sauvage.jpg",
    tag: "Trending"
  },
  {
    id: "essprive-black-opium",
    name: "ESSPRIVE Black Opium",
    category: "Women's Collection",
    priceRange: "₹599 - ₹649",
    description: "A dark, addictive gourmand elixir inspired by YSL Black Opium. An adrenaline-rich shot of roasted black coffee and bitter almond collides with feminine white floral blossoms, finished in velvety vanilla and cashmere woods.",
    notes: {
      top: "Pear Accord, Pink Pepper, Orange Blossom",
      heart: "Dark Coffee, Jasmine, Bitter Almond, Licorice",
      base: "Vanilla, Patchouli, Cashmere Wood, Cedar"
    },
    image: "/images/products/essprive_black_opium.jpg",
    tag: "Customer Favorite"
  },
  {
    id: "essprive-eros",
    name: "ESSPRIVE Eros",
    category: "Men's Collection",
    priceRange: "₹599 - ₹649",
    description: "A luminous ode to power and passion inspired by Versace Eros. Crisp Italian lemon zest and vibrant green apple meet radiant mint leaves, enveloped by creamy Madagascar vanilla and warm cedar.",
    notes: {
      top: "Mint Leaves, Italian Lemon Zest, Green Apple",
      heart: "Tonka Bean, Ambroxan, Geranium Flower",
      base: "Madagascar Vanilla, Virginian Cedar, Vetiver"
    },
    image: "/images/products/essprive_eros.jpg",
    tag: "Popular"
  },
  {
    id: "essprive-oud-wood",
    name: "ESSPRIVE Oud Wood",
    category: "Unisex Collection",
    priceRange: "₹599 - ₹649",
    description: "A smoky, masterfully crafted artisanal fragrance inspired by Tom Ford Oud Wood. Exotic rosewood and fiery cardamom blend with rare agarwood (oud), sandalwood, and vetiver, enriched by tonka bean and amber.",
    notes: {
      top: "Exotic Rosewood, Cardamom, Chinese Pepper",
      heart: "Rare Oud Wood, Sandalwood, Vetiver",
      base: "Tonka Bean, Bourbon Vanilla, Golden Amber"
    },
    image: "/images/products/essprive_oud_wood.jpg",
    tag: "Niche Luxury"
  },
  {
    id: "essprive-aventus",
    name: "ESSPRIVE Aventus",
    category: "Men's Collection",
    priceRange: "₹599 - ₹649",
    description: "The ultimate emblem of prestige and triumph inspired by Creed Aventus. Crisp apple and juicy blackcurrant intertwine with smoky birch and Moroccan jasmine, resting on a base of rare oakmoss and ambergris.",
    notes: {
      top: "Blackcurrant, Italian Bergamot, Apple, Pineapple",
      heart: "Smoky Birch, Patchouli, Moroccan Jasmine, Rose",
      base: "Musk, Oakmoss, Ambergris, Vanille"
    },
    image: "/images/products/essprive_aventus.jpg",
    tag: "Signature Scent"
  },
  {
    id: "essprive-rouge-540",
    name: "ESSPRIVE Rouge 540",
    category: "Unisex Collection",
    priceRange: "₹599 - ₹649",
    description: "An ethereal and luminous amber floral woodiness inspired by Baccarat Rouge 540. Airy jasmine blossoms and radiant saffron boost mineral ambergris facets and fresh-cut cedarwood into pure magic.",
    notes: {
      top: "Grandiflorum Jasmine, Saffron",
      heart: "Bitter Almond, Cedarwood, Amberwood",
      base: "Ambergris Accord, Woody Musk, Fir Resin"
    },
    image: "/images/products/essprive_rouge_540.jpg",
    tag: "VIP Exclusive"
  },
  {
    id: "essprive-bleu",
    name: "ESSPRIVE Bleu",
    category: "Men's Collection",
    priceRange: "₹599 - ₹649",
    description: "A tribute to masculine freedom inspired by Bleu de Chanel. A captivating aromatic-woody fragrance blending zesty grapefruit, vibrant peppermint, and frankincense with dry cedar and creamy sandalwood.",
    notes: {
      top: "Grapefruit, Lemon, Mint, Pink Pepper",
      heart: "Ginger, Nutmeg, Jasmine, Iso E Super",
      base: "Incense, Vetiver, Cedar, Sandalwood, Patchouli"
    },
    image: "/images/products/essprive_bleu.jpg",
    tag: "Everyday Signature"
  },
  {
    id: "essprive-flora",
    name: "ESSPRIVE Flora",
    category: "Women's Collection",
    priceRange: "₹599 - ₹649",
    description: "A joyful and delectable floral fantasy inspired by Gucci Flora Gorgeous Gardenia. The mystical White Gardenia blends with solar Jasmine Grandiflorum absolute, juicy pear blossom accord, and sweet brown sugar.",
    notes: {
      top: "Pear Blossom, Red Berries, Italian Mandarin",
      heart: "White Gardenia, Jasmine Grandiflorum, Frangipani",
      base: "Patchouli, Brown Sugar"
    },
    image: "/images/products/essprive_flora.jpg",
    tag: "Floral Delight"
  },
  {
    id: "essprive-bright-crystal",
    name: "ESSPRIVE Bright Crystal",
    category: "Women's Collection",
    priceRange: "₹599 - ₹649",
    description: "An enthralling and voluptuous freshness inspired by Versace Bright Crystal. Vibrant pomegranate grains and frosted yuzu give way to a delicate bouquet of peony, magnolia, and lotus, with amber and acajou wood.",
    notes: {
      top: "Yuzu, Pomegranate, Chilled Ice Accord",
      heart: "Peony, Lotus Flower, Magnolia",
      base: "Acajou Wood, Vegetal Amber, Musk"
    },
    image: "/images/products/essprive_bright_crystal.jpg",
    tag: "Fresh & Elegant"
  }
];
