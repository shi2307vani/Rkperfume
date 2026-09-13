"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-cream flex items-center justify-center"
        >
          <div className="text-center">
            {/* Brand Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo1.png"
                alt="ESSPRIVE - RK Perfume"
                className="h-20 w-auto object-contain mx-auto"
              />
            </motion.div>

            {/* Minimal loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 w-32 h-[1px] bg-border-light rounded-full mx-auto overflow-hidden"
            >
              <div className="h-full w-1/3 bg-warm-gold rounded-full animate-loading-bar" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
