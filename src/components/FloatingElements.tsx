"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

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

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href={`${BUSINESS_INFO.social.whatsapp}?text=Hi RK Perfume! I would like to inquire about your perfume collection.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:right-8 z-40 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1A2024] border border-warm-gold/40 flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.15)] hover:bg-black hover:border-warm-gold transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-warm-gold" size={22} />
      </motion.a>

      {/* Back To Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-charcoal border border-border-dark flex items-center justify-center text-text-on-dark hover:bg-charcoal-light transition-colors cursor-pointer"
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
