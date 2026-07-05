"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CATEGORIES, COLLECTION_PRODUCTS, BUSINESS_INFO } from "@/lib/constants";
import { 
  ArrowRight, 
  ShoppingBag, 
  Sparkles,
  Crown,
  Flame,
  Gift,
  Gem,
  Heart,
  Users,
  Droplets
} from "lucide-react";

const ICON_MAP = {
  Crown,
  Flame,
  Sparkles,
  Gift,
  Gem,
  Heart,
  Users,
  Droplets
} as const;

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

export default function Collections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});

  const toggleExpand = (productId: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  // Get unique category list
  const filterCategories = ["All", ...CATEGORIES.map((c) => c.title)];

  const products = COLLECTION_PRODUCTS as unknown as readonly Product[];

  const filteredProducts = selectedFilter === "All"
    ? products
    : products.filter((product) => product.category === selectedFilter);

  const getWhatsAppLink = (productName: string, category: string) => {
    const text = encodeURIComponent(
      `Hi Rakesh, I saw your website and I'm interested in inquiring about "${productName}" from the ${category} collection. Can you share more details?`
    );
    return `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${text}`;
  };

  return (
    <section id="collections" className="section-dark py-24 sm:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Our Collections
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Explore{" "}
            <span className="gradient-text">Premium Categories</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From exotic Arabian attars to luxury designer perfumes — discover
            our carefully curated fragrance collections.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => {
                setSelectedFilter(category.title);
                document.getElementById("gallery-header")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative luxury-card overflow-hidden cursor-pointer"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Content */}
              <div className="relative p-6 sm:p-7 flex flex-col h-full min-h-[220px]">
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center group-hover:from-gold/25 group-hover:to-gold/10 transition-all duration-500 group-hover:scale-110">
                    {(() => {
                      const IconComponent = ICON_MAP[category.icon as keyof typeof ICON_MAP] || Crown;
                      return (
                        <IconComponent
                          className="text-gold group-hover:text-gold-light transition-colors duration-500"
                          size={26}
                        />
                      );
                    })()}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-white font-heading text-xl font-semibold mb-2 group-hover:text-gold-light transition-colors duration-500">
                  {category.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed flex-1">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  <span>View Products</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Product Gallery Header */}
        <div id="gallery-header" className="text-center mb-12 scroll-mt-24">
          <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
            Fragrance Showcase
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-3 mb-6">
            Featured <span className="gradient-text">Signature Blends</span>
          </h3>
          <div className="luxury-divider max-w-[150px] mx-auto mb-10" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-4">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-500 cursor-pointer ${
                  selectedFilter === filter
                    ? "btn-gold !py-2 !px-4 shadow-lg shadow-gold/15 scale-105"
                    : "glass text-gray hover:text-white hover:border-gold/30 border border-gold/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={product.id}
                className="luxury-card overflow-hidden group flex flex-col h-full"
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
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-gold text-[10px] font-semibold tracking-widest uppercase block mb-1">
                        {product.category}
                      </span>
                      <h4 className="text-white text-xl font-heading font-semibold group-hover:text-gold-light transition-colors duration-500">
                        {product.name}
                      </h4>
                    </div>
                    <span className="text-gold-light font-medium text-sm whitespace-nowrap sm:ml-2">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
