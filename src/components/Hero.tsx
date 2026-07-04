"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

const slides = [
  {
    image: "/images/luxury_perfume_hero.png",
    tagline: "Premium Fragrance Destination",
    title: "Discover Your",
    titleGold: "Signature Fragrance",
    description: "Premium perfumes, attars, Arabian fragrances and luxury scents in Pune. Experience the art of fine perfumery.",
    tag: "Signature Scent",
    name: "Ambre Doré",
    type: "Eau de Parfum",
  },
  {
    image: "/images/arabian_attar.png",
    tagline: "Exotic Arabian Oils",
    title: "Unveil Majestic",
    titleGold: "Royal Arabian Attars",
    description: "Rich, authentic non-alcoholic concentrated perfume oils featuring deep oud, saffron, and sweet damask rose.",
    tag: "Best Seller",
    name: "Royal Oud",
    type: "Concentrated Attar",
  },
  {
    image: "/images/gift_premium.png",
    tagline: "Exquisite Presentation",
    title: "Elegant Luxury",
    titleGold: "Perfume Gift Sets",
    description: "The perfect gift for your loved ones. Elevate any special occasion with our curated fragrance pairings.",
    tag: "Premium Gift",
    name: "L'Or Premium Set",
    type: "Luxury Gift Box",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [particles, setParticles] = useState<{ top: string; left: string; duration: number; delay: number }[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map(() => ({
      top: `${10 + Math.random() * 80}%`,
      left: `${10 + Math.random() * 80}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
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
      x: dir < 0 ? 100 : -100,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-all duration-1000" 
          style={{ background: "var(--hero-bg)" }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] animate-pulse-gold" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-light/5 blur-[100px] animate-pulse-gold" style={{ animationDelay: "1.5s" }} />
        
        {/* Gold particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Main Slider Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left Column: Text & Actions */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
                <span className="text-gold-light text-sm font-medium tracking-wider uppercase">
                  {slides[currentSlide].tagline}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                <span className="text-white">{slides[currentSlide].title}</span>
                <br />
                <span className="gradient-text text-gold-glow">
                  {slides[currentSlide].titleGold}
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-gray max-w-xl mb-10 leading-relaxed min-h-[56px]">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <motion.a
                  href="#featured-products"
                  className="btn-gold flex items-center justify-center gap-2 text-base w-full sm:w-auto cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#featured-products")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <MapPin size={18} />
                  <span>Explore Scents</span>
                </motion.a>
                <motion.a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="btn-outline-gold flex items-center justify-center gap-2 text-base w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </div>

            {/* Right Column: Premium Image Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden gold-glow border border-gold/20 bg-dark group">
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-40 z-10" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-3xl transition-colors duration-500 z-20 pointer-events-none" />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating card overlay on top of image */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl z-25 flex items-center justify-between">
                  <div>
                    <h4 className="text-white text-sm font-heading font-semibold">{slides[currentSlide].name}</h4>
                    <p className="text-gold text-xs">{slides[currentSlide].type}</p>
                  </div>
                  <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-gold/20 border border-gold/30 flex items-center gap-1">
                    <Sparkles size={10} className="text-gold" />
                    {slides[currentSlide].tag}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass border border-gold/10 hover:border-gold/30 text-gold hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass border border-gold/10 hover:border-gold/30 text-gold hover:text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3.5 h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              currentSlide === index ? "bg-gold w-6" : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
