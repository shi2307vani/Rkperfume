"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  const [particles, setParticles] = useState<{ top: string; left: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      top: `${10 + Math.random() * 80}%`,
      left: `${10 + Math.random() * 80}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Animated gradient background that shifts with time-based themes */}
        <div 
          className="absolute inset-0 transition-all duration-1000" 
          style={{ background: "var(--hero-bg)" }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] animate-pulse-gold" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-light/5 blur-[100px] animate-pulse-gold" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-900/5 blur-[150px]" />
        
        {/* Gold particle dots */}
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

        {/* Overlay gradient */}
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
              <span className="text-gold-light text-sm font-medium tracking-wider uppercase">
                Premium Fragrance Destination
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-white">Discover Your</span>
              <br />
              <span className="gradient-text text-gold-glow">
                Signature Fragrance
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray max-w-xl mb-10 leading-relaxed"
            >
              Premium perfumes, attars, Arabian fragrances and luxury scents in
              Pune. Experience the art of fine perfumery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <motion.a
                href="#store"
                className="btn-gold flex items-center justify-center gap-2 text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#store")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <MapPin size={18} />
                Visit Store
              </motion.a>
              <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn-outline-gold flex items-center justify-center gap-2 text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} />
                Call Now
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 flex items-center gap-8 sm:gap-12 justify-center lg:justify-start w-full"
            >
              {[
                { value: "500+", label: "Fragrances" },
                { value: "10K+", label: "Happy Customers" },
                { value: "100%", label: "Genuine" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Premium Image Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden gold-glow border border-gold/20 bg-dark group"
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-40 z-10" />
              
              {/* Golden border glow on hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-3xl transition-colors duration-500 z-20 pointer-events-none" />

              {/* The image itself */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/luxury_perfume_hero.png"
                alt="Luxury RK Perfume Bottle Showcase"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Small floating card overlay on top of image */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl z-25 flex items-center justify-between">
                <div>
                  <h4 className="text-white text-sm font-heading font-semibold">Ambre Doré</h4>
                  <p className="text-gold text-xs">Eau de Parfum</p>
                </div>
                <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-gold/20 border border-gold/30">
                  Signature Scent
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <ChevronDown size={16} className="text-gold/40 animate-scroll-indicator" />
      </motion.div>
    </section>
  );
}
