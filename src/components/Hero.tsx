"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToPerfumeFinder = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("perfume-finder");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#perfume-finder";
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#F7F6F3] overflow-hidden pt-28 pb-16 lg:py-0 flex items-center"
    >
      {/* Subtle Botanical Sketch Line Art Background — Top Left */}
      <div className="absolute -top-10 -left-10 w-96 h-96 pointer-events-none opacity-30 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fleur_botanical_sketch.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Subtle Botanical Sketch Line Art Background — Center Right */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] pointer-events-none opacity-25 z-0 rotate-45">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fleur_botanical_sketch.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[78vh]">
          {/* Left Column: Editorial Headline, Starting Price & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-4 lg:pt-0 z-20">
            {/* Heritage Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-4 text-[#C5A059]"
            >
              <MapPin size={14} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium">
                Tulshibaug, Pune &middot; Flagship Boutique
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.2rem] text-[#1A2024] font-normal leading-[1.08] tracking-tight uppercase mb-6"
            >
              The Art of Scent,
              <br />
              Crafted in Pune
            </motion.h1>

            {/* Value Proposition & Pricing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-sm sm:text-base text-[#5A646B] max-w-xl font-light leading-relaxed mb-8"
            >
              Pune&apos;s premier destination for pure Arabian attars, luxury Eau de Parfums, and artisanal inspired fragrances. Handcrafted compositions starting from{" "}
              <strong className="text-[#1A2024] font-semibold">₹299</strong> with complimentary delivery on orders above ₹999.
            </motion.p>

            {/* 3 Direct CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10"
            >
              <Link
                href="/collections"
                className="px-7 py-3.5 bg-[#1A2024] text-[#F7F6F3] text-xs tracking-[0.2em] font-medium uppercase hover:bg-black transition-all shadow-sm inline-flex items-center gap-2 group"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <button
                onClick={scrollToPerfumeFinder}
                className="px-6 py-3.5 bg-white border border-black/15 text-[#1A2024] text-xs tracking-[0.18em] font-medium uppercase hover:border-black transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <Sparkles size={13} className="text-[#C5A059]" />
                <span>FIND YOUR SCENT</span>
              </button>

              <Link
                href="/contact"
                className="text-xs tracking-[0.2em] font-medium text-[#7A848D] hover:text-[#1A2024] transition-colors uppercase py-2"
              >
                VISIT BOUTIQUE
              </Link>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[#5A646B]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-700" />
                <span>100% Genuine Fragrances</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-[#C5A059]" />
                <span>Pan-India 3–5 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>In-Store Testing at Tulshibaug</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Flacon Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] aspect-[3/4]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fleur_hero_bottle_branded.png"
                alt="RK Perfume Luxury Flacon"
                className="w-full h-full object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Magnolia Branch — Emerging organically from Bottom Left corner */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-64 sm:w-80 md:w-96 lg:w-[400px] pointer-events-none z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fleur_magnolia_branch_transparent.png"
          alt="Artisanal Blossom"
          className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)]"
        />
      </motion.div>
    </section>
  );
}
