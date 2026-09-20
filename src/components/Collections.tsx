"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { COLLECTION_PRODUCTS, BUSINESS_INFO } from "@/lib/constants";
import { ShoppingBag, Search, Sparkles, SlidersHorizontal, Gift, ArrowRight } from "lucide-react";
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

export default function Collections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "inspired" | "original" | "attar" | "gift">("all");
  const [selectedPrice, setSelectedPrice] = useState<"all" | "under999" | "999to1499" | "1500plus">("all");
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});

  const toggleExpand = (productId: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const allProducts = COLLECTION_PRODUCTS as unknown as readonly Product[];

  // Helper to extract lowest numeric price from priceRange e.g. "₹849 - ₹1,099" -> 849
  const getMinPrice = (range: string): number => {
    const numbers = range.replace(/[^0-9]/g, " ").trim().split(/\s+/).map(Number).filter(n => n > 0);
    return numbers.length > 0 ? Math.min(...numbers) : 999;
  };

  // Filter products based on search, type, and price
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchCategory = product.category.toLowerCase().includes(q);
        const matchNotes = (product.notes.top + product.notes.heart + product.notes.base).toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchCategory && !matchNotes) {
          return false;
        }
      }

      // Type filter
      if (selectedType === "inspired") {
        if (!product.name.toLowerCase().includes("inspired") && !product.category.toLowerCase().includes("inspired")) {
          return false;
        }
      } else if (selectedType === "original") {
        if (product.name.toLowerCase().includes("inspired") || product.category === "Arabian Attars" || product.category === "Gift Sets") {
          return false;
        }
      } else if (selectedType === "attar") {
        if (product.category !== "Arabian Attars" && !product.name.toLowerCase().includes("attar") && !product.name.toLowerCase().includes("oud")) {
          return false;
        }
      } else if (selectedType === "gift") {
        if (product.category !== "Gift Sets" && !product.name.toLowerCase().includes("gift set") && !product.name.toLowerCase().includes("box") && !product.name.toLowerCase().includes("duo")) {
          return false;
        }
      }

      // Price filter
      const minPrice = getMinPrice(product.priceRange);
      if (selectedPrice === "under999") {
        if (minPrice >= 1000) return false;
      } else if (selectedPrice === "999to1499") {
        if (minPrice < 999 || minPrice >= 1500) return false;
      } else if (selectedPrice === "1500plus") {
        if (minPrice < 1500) return false;
      }

      return true;
    });
  }, [allProducts, searchQuery, selectedType, selectedPrice]);

  const getWhatsAppLink = (productName: string, priceRange: string) => {
    const text = encodeURIComponent(
      `Hi RK Perfume! I'm on your website and would like to order "${productName}" (${priceRange}). Can you share availability and payment details?`
    );
    return `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${text}`;
  };

  return (
    <section id="collections" className="bg-[#F7F6F3] py-24 sm:py-32 pt-32 text-[#1A2024]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-[#C5A059] text-xs font-medium tracking-[0.3em] uppercase block mb-3">
            Tulshibaug Flagship Boutique
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide font-normal mb-4">
            Curated Fragrance Collections
          </h1>
          <p className="text-[#5A646B] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            From pure Cambodian agarwood attars to artisanal impressions of iconic world fragrances. Handcrafted in Pune with starting prices from ₹299.
          </p>
        </motion.div>

        {/* Discovery Set Spotlight Card */}
        <div className="mb-12 p-6 sm:p-8 bg-white border border-black/[0.08] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0 text-[#C5A059]">
              <Gift size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold block">
                Try Before You Buy &middot; Special Offer
              </span>
              <h3 className="font-heading text-lg sm:text-xl uppercase tracking-wider text-[#1A2024]">
                4 x 20ml Luxury Discovery Box &mdash; ₹999
              </h3>
              <p className="text-xs text-[#5A646B] font-light mt-0.5">
                Test 4 bestselling fragrances for 14 days before committing to full 100ml bottles. Free delivery across India.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink("4 x 20ml Luxury Discovery Box", "₹999")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-[#1A2024] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors"
          >
            Order Discovery Box
          </a>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 border border-black/[0.08] shadow-xs mb-10 space-y-4">
          {/* Search Box */}
          <div className="relative w-full">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E98A0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by perfume name, note (e.g. Oud, Vanilla, Bergamot, Aventus, Khamrah)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#F7F6F3] border border-black/[0.08] text-xs sm:text-sm text-[#1A2024] placeholder-[#8E98A0] focus:outline-none focus:border-[#1A2024] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E98A0] hover:text-[#1A2024]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-black/[0.05]">
            {/* Category Type Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] mr-1 font-medium">Type:</span>
              {[
                { id: "all", label: "All Items" },
                { id: "inspired", label: "RK Inspired" },
                { id: "original", label: "Originals" },
                { id: "attar", label: "Arabian Attars" },
                { id: "gift", label: "Gift Sets & Boxes" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedType(tab.id as any)}
                  className={`px-3 py-1 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    selectedType === tab.id
                      ? "bg-[#1A2024] text-white font-medium"
                      : "bg-[#F7F6F3] text-[#5A646B] hover:text-[#1A2024] border border-black/[0.06]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] mr-1 font-medium">Budget:</span>
              {[
                { id: "all", label: "All" },
                { id: "under999", label: "Under ₹999" },
                { id: "999to1499", label: "₹999 – ₹1,499" },
                { id: "1500plus", label: "₹1,500+" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPrice(p.id as any)}
                  className={`px-3 py-1 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    selectedPrice === p.id
                      ? "bg-[#C5A059] text-[#1A2024] font-semibold"
                      : "bg-[#F7F6F3] text-[#5A646B] hover:text-[#1A2024] border border-black/[0.06]"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#8E98A0]">
          <span>Showing {filteredProducts.length} fragrances</span>
          {(searchQuery || selectedType !== "all" || selectedPrice !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
                setSelectedPrice("all");
              }}
              className="text-[#C5A059] underline uppercase tracking-wider text-[11px]"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isInspired = product.name.toLowerCase().includes("inspired") || product.category.toLowerCase().includes("inspired");
              const isAttar = product.category === "Arabian Attars";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="bg-white border border-black/[0.08] overflow-hidden group flex flex-col h-full shadow-xs hover:shadow-md transition-shadow"
                >
                  {/* Image Wrap */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#F7F6F3]">
                    {/* Floating Product Type Badge */}
                    <div className="absolute top-3 left-3 z-20 flex flex-col gap-1">
                      {isInspired ? (
                        <span className="bg-[#1A2024] text-white text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1">
                          RK Inspired
                        </span>
                      ) : isAttar ? (
                        <span className="bg-emerald-800 text-white text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1">
                          100% Attar Oil
                        </span>
                      ) : (
                        <span className="bg-[#C5A059] text-[#1A2024] text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1">
                          RK Original
                        </span>
                      )}
                      {product.tag && (
                        <span className="bg-white/90 text-[#1A2024] text-[9px] font-medium tracking-wider uppercase px-2 py-0.5 border border-black/10">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Product Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[#C5A059] text-[10px] font-medium tracking-[0.2em] uppercase block mb-1">
                          {product.category}
                        </span>
                        <h4 className="text-[#1A2024] text-base font-heading font-medium group-hover:text-[#C5A059] transition-colors uppercase tracking-wide">
                          {product.name}
                        </h4>
                      </div>
                      <span className="font-heading font-semibold text-[#1A2024] text-sm whitespace-nowrap sm:ml-2">
                        {product.priceRange}
                      </span>
                    </div>

                    {/* Description with Truncation */}
                    {(() => {
                      const isExpanded = !!expandedProducts[product.id];
                      const shouldTruncate = product.description.length > 110;
                      const displayText = shouldTruncate && !isExpanded
                        ? `${product.description.substring(0, 105)}...`
                        : product.description;

                      return (
                        <p className="text-[#5A646B] text-xs leading-relaxed mb-4 flex-1 font-light">
                          {displayText}
                          {shouldTruncate && (
                            <button
                              onClick={() => toggleExpand(product.id)}
                              className="text-[#C5A059] hover:underline font-medium ml-1.5 focus:outline-none transition-colors duration-300 inline-block cursor-pointer text-[11px]"
                            >
                              {isExpanded ? "Less" : "More"}
                            </button>
                          )}
                        </p>
                      );
                    })()}

                    {/* Accurate Olfactory Pyramid */}
                    <div className="bg-[#F7F6F3] border border-black/[0.05] p-3 mb-5 space-y-1 text-[11px]">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#8E98A0] font-medium shrink-0">Top:</span>
                        <span className="text-[#1A2024] text-right font-light">{product.notes.top}</span>
                      </div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#8E98A0] font-medium shrink-0">Heart:</span>
                        <span className="text-[#1A2024] text-right font-light">{product.notes.heart}</span>
                      </div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#8E98A0] font-medium shrink-0">Base:</span>
                        <span className="text-[#1A2024] text-right font-light">{product.notes.base}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <a
                      href={getWhatsAppLink(product.name, product.priceRange)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 w-full bg-[#1A2024] text-white text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors"
                    >
                      <ShoppingBag size={13} />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
