export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number; // In INR
  displayPrice: string;
  size: string;
  image: string;
  tag?: string;
  description: string;
}

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: "essprive-coco-m",
    name: "ESSPRIVE Coco M",
    category: "Women's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_coco_m.jpg",
    tag: "Bestseller",
    description: "An intoxicating amber floral symphony inspired by Coco Mademoiselle.",
  },
  {
    id: "essprive-sauvage",
    name: "ESSPRIVE Sauvage",
    category: "Men's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_sauvage.jpg",
    tag: "Trending",
    description: "A radically crisp, magnetic composition inspired by Dior Sauvage.",
  },
  {
    id: "essprive-black-opium",
    name: "ESSPRIVE Black Opium",
    category: "Women's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_black_opium.jpg",
    tag: "Customer Favorite",
    description: "A dark, addictive gourmand elixir inspired by YSL Black Opium.",
  },
  {
    id: "essprive-eros",
    name: "ESSPRIVE Eros",
    category: "Men's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_eros.jpg",
    tag: "Popular",
    description: "A luminous ode to power and passion inspired by Versace Eros.",
  },
  {
    id: "essprive-oud-wood",
    name: "ESSPRIVE Oud Wood",
    category: "Unisex Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_oud_wood.jpg",
    tag: "Niche Luxury",
    description: "A smoky, masterfully crafted artisanal fragrance inspired by Tom Ford Oud Wood.",
  },
  {
    id: "essprive-aventus",
    name: "ESSPRIVE Aventus",
    category: "Men's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_aventus.jpg",
    tag: "Signature Scent",
    description: "The ultimate emblem of prestige and triumph inspired by Creed Aventus.",
  },
  {
    id: "essprive-rouge-540",
    name: "ESSPRIVE Rouge 540",
    category: "Unisex Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_rouge_540.jpg",
    tag: "VIP Exclusive",
    description: "An ethereal and luminous amber floral woodiness inspired by Baccarat Rouge 540.",
  },
  {
    id: "essprive-bleu",
    name: "ESSPRIVE Bleu",
    category: "Men's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_bleu.jpg",
    tag: "Everyday Signature",
    description: "A tribute to masculine freedom inspired by Bleu de Chanel.",
  },
  {
    id: "essprive-flora",
    name: "ESSPRIVE Flora",
    category: "Women's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_flora.jpg",
    tag: "Floral Delight",
    description: "A joyful and delectable floral fantasy inspired by Gucci Flora Gorgeous Gardenia.",
  },
  {
    id: "essprive-bright-crystal",
    name: "ESSPRIVE Bright Crystal",
    category: "Women's Collection",
    price: 599,
    displayPrice: "₹599",
    size: "50 ml / 2 OZ",
    image: "/images/products/essprive_bright_crystal.jpg",
    tag: "Fresh & Elegant",
    description: "An enthralling and voluptuous freshness inspired by Versace Bright Crystal.",
  },
  {
    id: "discovery-box-4x20ml",
    name: "ESSPRIVE 4 x 20ml Discovery Box",
    category: "Gift Sets",
    price: 599,
    displayPrice: "₹599",
    size: "4 x 20 ml Flacons",
    image: "/images/gift_premium.png",
    tag: "Try Before You Buy",
    description: "4 handpicked luxury flacons in a gold presentation box with free Pan-India delivery.",
  },
];

export const PRODUCTS_MAP = new Map<string, ProductItem>(
  PRODUCTS_CATALOG.map((p) => [p.id, p])
);

export function getProductById(id: string): ProductItem | undefined {
  return PRODUCTS_MAP.get(id);
}

export interface OrderValidationResult {
  valid: boolean;
  error?: string;
  subtotal: number;
  shipping: number;
  totalAmount: number;
  totalQuantity: number;
  itemDetails: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    lineTotal: number;
  }[];
  productSummaryString: string;
}

/**
 * Server-side order verification.
 * Calculates order amounts strictly from server catalog to avoid client-side price tampering.
 */
export function calculateAndValidateOrder(
  cartItems: { id: string; quantity: number }[]
): OrderValidationResult {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return {
      valid: false,
      error: "Cart is empty",
      subtotal: 0,
      shipping: 0,
      totalAmount: 0,
      totalQuantity: 0,
      itemDetails: [],
      productSummaryString: "",
    };
  }

  let subtotal = 0;
  let totalQuantity = 0;
  const itemDetails: OrderValidationResult["itemDetails"] = [];
  const summaryParts: string[] = [];

  for (const item of cartItems) {
    const product = getProductById(item.id);
    if (!product) {
      return {
        valid: false,
        error: `Invalid product ID: ${item.id}`,
        subtotal: 0,
        shipping: 0,
        totalAmount: 0,
        totalQuantity: 0,
        itemDetails: [],
        productSummaryString: "",
      };
    }

    const qty = Math.floor(Number(item.quantity));
    if (isNaN(qty) || qty <= 0) {
      return {
        valid: false,
        error: `Invalid quantity for product: ${product.name}`,
        subtotal: 0,
        shipping: 0,
        totalAmount: 0,
        totalQuantity: 0,
        itemDetails: [],
        productSummaryString: "",
      };
    }

    const lineTotal = product.price * qty;
    subtotal += lineTotal;
    totalQuantity += qty;

    itemDetails.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
      lineTotal,
    });

    summaryParts.push(`${product.name} (Qty: ${qty})`);
  }

  // Shipping policy: Free shipping on all orders as advertised on site
  const shipping = 0;
  const totalAmount = subtotal + shipping;

  return {
    valid: true,
    subtotal,
    shipping,
    totalAmount,
    totalQuantity,
    itemDetails,
    productSummaryString: summaryParts.join(", "),
  };
}
