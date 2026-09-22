"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

const CUSTOMER_FAVORITES = [
  {
    id: "essprive-coco-m",
    title: "ESSPRIVE COCO M",
    type: "Extrait de Parfum",
    size: "50 ml / 2 OZ",
    price: "₹599 - ₹649",
    originalPrice: "₹899 - ₹999",
    badge: "Bestseller",
    image: "/images/products/essprive_coco_m.jpg",
    description: "Sensual amber floral harmony of Turkish rose, blooming jasmine, and Bourbon vanilla.",
  },
  {
    id: "essprive-sauvage",
    title: "ESSPRIVE SAUVAGE",
    type: "Extrait de Parfum",
    size: "50 ml / 2 OZ",
    price: "₹599 - ₹649",
    originalPrice: "₹899 - ₹999",
    badge: "Trending",
    image: "/images/products/essprive_sauvage.jpg",
    description: "Crisp Calabrian bergamot and spicy pepper unfolding into raw ambroxan and cedar.",
  },
  {
    id: "essprive-aventus",
    title: "ESSPRIVE AVENTUS",
    type: "Extrait de Parfum",
    size: "50 ml / 2 OZ",
    price: "₹599 - ₹649",
    originalPrice: "₹899 - ₹999",
    badge: "Signature",
    image: "/images/products/essprive_aventus.jpg",
    description: "Smoky birch, crisp pineapple, and Moroccan jasmine anchored by velvet ambergris.",
  },
];

export default function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: typeof CUSTOMER_FAVORITES[0]) => {
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
    // WhatsApp inquiry direct checkout
    const msg = encodeURIComponent(`Hi RK Perfume! I would like to order "${product.title}" (${product.type} ${product.size}) for ${product.price}.`);
    window.open(`${BUSINESS_INFO.social.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="customer-favorites"
      ref={ref}
      className="relative w-full py-24 sm:py-32 bg-[#F7F6F3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header — Centered Serif Title & Sublink */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1A2024] font-normal tracking-[0.14em] uppercase mb-4"
          >
            Customer Favorites
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Link
              href="/collections"
              className="fleur-link group text-xs tracking-[0.2em] text-[#5A646B] hover:text-[#1A2024]"
            >
              <span>ALL BESTSELLERS HERE</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
          {CUSTOMER_FAVORITES.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Product Photo — Square with subtle hover zoom */}
              <div className="relative w-full aspect-square overflow-hidden bg-white mb-6 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-base sm:text-lg tracking-[0.12em] uppercase font-normal text-[#1A2024] mb-1.5">
                {product.title}
              </h3>

              {/* Volume / Type */}
              <p className="text-xs tracking-[0.12em] text-[#8E98A0] uppercase mb-2">
                {product.type} &nbsp;·&nbsp; {product.size}
              </p>

              {/* Price */}
              <div className="flex items-center justify-center gap-2.5 mb-4">
                <span className="font-heading text-base sm:text-lg text-[#1A2024] font-semibold tracking-wide">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#8E98A0] line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.badge && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-amber-100/80 text-amber-900 rounded font-medium">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* ADD TO CART Link matching reference */}
              <button
                onClick={() => handleAddToCart(product)}
                className="fleur-link text-[11px] tracking-[0.2em] text-[#1A2024] hover:text-warm-gold uppercase py-1 cursor-pointer transition-all"
              >
                {addedId === product.id ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <Check size={13} /> ADDED TO CART
                  </span>
                ) : (
                  "ADD TO CART"
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A2024] text-[#F7F6F3] text-xs tracking-[0.22em] uppercase font-medium hover:bg-black hover:gap-4 transition-all shadow-sm"
          >
            <span>Explore All Fragrances & Collections</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
