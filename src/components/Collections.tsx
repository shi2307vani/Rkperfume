"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CATEGORIES, COLLECTION_PRODUCTS, BUSINESS_INFO } from "@/lib/constants";
import { 
  ArrowRight, 
  ShoppingBag, 
  Crown,
  Flame,
  Sparkles,
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
    <section id="collections" className="section-cream py-24 sm:py-32 pt-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-warm-gold text-xs font-medium tracking-[0.3em] uppercase">
            Our Collections
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 text-text-primary tracking-tight">
            Explore <span className="italic">Premium Categories</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From exotic Arabian attars to luxury designer perfumes — discover
            our carefully curated fragrance collections.
          </p>
          <div className="w-12 h-[1px] bg-warm-gold/40 mx-auto mt-8" />
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
              className="group card-cream overflow-hidden cursor-pointer p-6 sm:p-7 min-h-[220px] flex flex-col"
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-14 h-14 rounded-2xl bg-cream-dark flex items-center justify-center group-hover:bg-charcoal group-hover:scale-105 transition-all duration-500">
                  {(() => {
                    const IconComponent = ICON_MAP[category.icon as keyof typeof ICON_MAP] || Crown;
                    return (
                      <IconComponent
                        className="text-warm-gold transition-colors duration-500"
                        size={26}
                      />
                    );
                  })()}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-text-primary font-heading text-xl font-semibold mb-2 group-hover:text-warm-gold transition-colors duration-500">
                {category.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {category.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-warm-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                <span>View Products</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Gallery Header */}
        <div id="gallery-header" className="text-center mb-12 scroll-mt-24">
          <span className="text-warm-gold text-xs font-medium tracking-[0.3em] uppercase">
            Fragrance Showcase
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl mt-3 mb-6 text-text-primary tracking-tight">
            Featured <span className="italic">Signature Blends</span>
          </h3>
          <div className="w-12 h-[1px] bg-warm-gold/40 mx-auto mb-10" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-4">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-500 cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-charcoal text-cream shadow-lg scale-105"
                    : "bg-white text-text-secondary hover:text-text-primary border border-border-light hover:border-charcoal/20"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="card-cream overflow-hidden group flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="relative aspect-square w-full overflow-hidden bg-cream-dark">
                  {/* Floating Tag */}
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-20 bg-warm-gold text-charcoal px-3 py-1 rounded-sm">
                      <span className="text-[10px] font-semibold tracking-wider uppercase">
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
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-warm-gold text-[10px] font-medium tracking-[0.2em] uppercase block mb-1">
                        {product.category}
                      </span>
                      <h4 className="text-text-primary text-xl font-heading font-semibold group-hover:text-warm-gold transition-colors duration-500">
                        {product.name}
                      </h4>
                    </div>
                    <span className="text-warm-gold font-medium text-sm whitespace-nowrap sm:ml-2">
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
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                        {displayText}
                        {shouldTruncate && (
                          <button
                            onClick={() => toggleExpand(product.id)}
                            className="text-warm-gold hover:text-warm-gold-light font-medium ml-1.5 focus:outline-none transition-colors duration-300 inline-block cursor-pointer font-semibold text-xs tracking-wider"
                          >
                            {isExpanded ? "READ LESS" : "READ MORE"}
                          </button>
                        )}
                      </p>
                    );
                  })()}

                  {/* Notes Details */}
                  <div className="bg-cream-dark/50 border border-border-light rounded-xl p-3 mb-6 space-y-1.5 text-[11px] sm:text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary font-medium">Top Notes:</span>
                      <span className="text-text-primary text-right">{product.notes.top}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary font-medium">Heart Notes:</span>
                      <span className="text-text-primary text-right">{product.notes.heart}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary font-medium">Base Notes:</span>
                      <span className="text-text-primary text-right">{product.notes.base}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={getWhatsAppLink(product.name, product.category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !py-3 w-full flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
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
