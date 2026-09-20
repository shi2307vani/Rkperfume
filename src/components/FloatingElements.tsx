"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, Phone, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToFinder = (e: React.MouseEvent) => {
    const el = document.getElementById("perfume-finder");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Sticky Quick-Action Bar (Hidden on sm and larger) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1A2024]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-around sm:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.2)]">
        {/* Call Boutique */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1 px-2 text-white/90 hover:text-white"
        >
          <Phone size={16} className="text-[#C5A059] mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-medium">Call</span>
        </a>

        <div className="w-[1px] h-6 bg-white/15" />

        {/* WhatsApp Direct */}
        <a
          href={`${BUSINESS_INFO.social.whatsapp}?text=Hi%20RK%20Perfume!%20I%20would%20like%20to%20inquire%20about%20your%20fragrance%20collection.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3 text-white"
        >
          <MessageCircle size={17} className="text-emerald-400 mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-semibold">WhatsApp</span>
        </a>

        <div className="w-[1px] h-6 bg-white/15" />

        {/* Find My Scent */}
        <Link
          href="/#perfume-finder"
          onClick={scrollToFinder}
          className="flex flex-col items-center justify-center py-1 px-2 text-white/90 hover:text-white"
        >
          <Sparkles size={16} className="text-[#C5A059] mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-medium">Finder</span>
        </Link>
      </div>

      {/* Desktop WhatsApp Floating Button (Hidden on mobile) */}
      <motion.a
        href={`${BUSINESS_INFO.social.whatsapp}?text=Hi%20RK%20Perfume!%20I%20would%20like%20to%20inquire%20about%20your%20fragrance%20collection.`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 sm:right-8 z-40 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1A2024] border border-[#C5A059]/40 items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.15)] hover:bg-black hover:border-[#C5A059] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-[#C5A059]" size={22} />
      </motion.a>

      {/* Back To Top (Desktop) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="hidden sm:flex fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#1A2024] border border-black/20 items-center justify-center text-white hover:bg-black transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
