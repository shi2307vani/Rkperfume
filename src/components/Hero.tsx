"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/images/rose_gift_banner.png",
  "/images/royal_oud_banner.png",
  "/images/summer_fresh_banner.png",
  "/images/men_sport_banner.png",
  "/images/elixir_gold_banner.png",
  "/images/pocket_vibe_banner.png",
  "/images/women_floral_banner.png",
  "/images/celebrity_banner.png"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  return (
    <section
      id="home"
      className="relative w-full pt-20 bg-dark"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banners[currentIndex]}
              alt={`RK Perfume Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover object-center"
            />
            {/* Ambient luxury gradient overlay over image */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-gold/10 hover:border-gold/30 text-gold hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
        aria-label="Previous banner"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-gold/10 hover:border-gold/30 text-gold hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
        aria-label="Next banner"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-25 flex gap-2.5">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3.5 h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              currentIndex === index ? "bg-gold w-6" : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
