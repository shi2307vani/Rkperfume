"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { COLLECTION_PRODUCTS, BUSINESS_INFO } from "@/lib/constants";
import { ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Product {
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

export default function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});

  const toggleExpand = (productId: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  // Get the selected 6 featured products
  const featuredIds = ["p2", "p1", "p3", "p4", "p5", "p6"];
  const allProducts = COLLECTION_PRODUCTS as unknown as readonly Product[];
  const featuredProducts = allProducts.filter((product) =>
    featuredIds.includes(product.id)
  );

  const getWhatsAppLink = (productName: string, category: string) => {
    const text = encodeURIComponent(
      `Hi Rakesh, I saw your website and I'm interested in inquiring about "${productName}" from the ${category} collection. Can you share more details?`
    );
    return `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${text}`;
  };

  return (
    <section id="featured-products" className="section-dark py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Signature Scents
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Fragrances</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A handpicked selection of our most exquisite perfumes, rare Arabian attars, and premium gift sets.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="luxury-card overflow-hidden group flex flex-col h-full bg-dark"
            >
              {/* Image Wrap */}
              <div className="relative aspect-square w-full overflow-hidden bg-dark border-b border-white/5">
                {/* Floating Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 z-20 glass px-3 py-1 rounded-full border border-gold/20 flex items-center gap-1.5 animate-pulse-gold">
                    <Sparkles className="text-gold" size={10} />
                    <span className="text-gold-light text-[10px] font-semibold tracking-wider uppercase">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Glassy overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-gold text-[10px] font-semibold tracking-widest uppercase block mb-1">
                      {product.category}
                    </span>
                    <h4 className="text-white text-xl font-heading font-semibold group-hover:text-gold-light transition-colors duration-500">
                      {product.name}
                    </h4>
                  </div>
                  <span className="text-gold-light font-medium text-sm whitespace-nowrap ml-2">
                    {product.priceRange}
                  </span>
                </div>

                {(() => {
                  const isExpanded = !!expandedProducts[product.id];
                  const shouldTruncate = product.description.length > 120;
                  const displayText = shouldTruncate && !isExpanded
                    ? `${product.description.substring(0, 110)}...`
                    : product.description;

                  return (
                    <p className="text-gray text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                      {displayText}
                      {shouldTruncate && (
                        <button
                          onClick={() => toggleExpand(product.id)}
                          className="text-gold hover:text-gold-light font-medium ml-1.5 focus:outline-none transition-colors duration-300 inline-block cursor-pointer font-semibold text-xs tracking-wider"
                        >
                          {isExpanded ? "READ LESS" : "READ MORE"}
                        </button>
                      )}
                    </p>
                  );
                })()}

                {/* Notes Details */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-6 space-y-1.5 text-[11px] sm:text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray font-medium">Top Notes:</span>
                    <span className="text-white text-right">{product.notes.top}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray font-medium">Heart Notes:</span>
                    <span className="text-white text-right">{product.notes.heart}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray font-medium">Base Notes:</span>
                    <span className="text-white text-right">{product.notes.base}</span>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={getWhatsAppLink(product.name, product.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold !py-3 w-full flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-dark group-hover:border-gold cursor-pointer transition-all duration-300"
                >
                  <ShoppingBag size={14} />
                  <span>Inquire / Order Now</span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* View All Collections Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 btn-gold text-base"
          >
            <span>Explore Full Collections</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
