"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#F7F6F3] overflow-hidden pt-24 pb-16 lg:py-0 flex items-center"
    >
      {/* Botanical Sketch Line Art Background — Top Left */}
      <div className="absolute -top-10 -left-10 w-96 h-96 pointer-events-none opacity-40 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fleur_botanical_sketch.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Botanical Sketch Line Art Background — Center Right behind bottle */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] pointer-events-none opacity-35 z-0 rotate-45">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fleur_botanical_sketch.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left Column: Editorial Headline & Link */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-8 lg:pt-0 z-20">
            {/* Grand Headline matching reference: "THE ART OF SCENT, THE ESSENCE OF SPRING" */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] text-[#1A2024] font-normal leading-[1.08] tracking-tight uppercase mb-8 lg:mb-12"
            >
              The Art of Scent,
              <br />
              The Essence
              <br />
              of Spring
            </motion.h1>

            {/* Minimalist Underlined Link matching reference: "NEW SCENTS HERE →" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              <a
                href="#customer-favorites"
                className="fleur-link group text-xs sm:text-[13px] tracking-[0.2em] font-medium text-[#1A2024] hover:text-warm-gold inline-flex items-center gap-2"
              >
                <span>NEW SCENTS HERE</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Rose-Gold Crystal Bottle with Blooming Magnolia */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] aspect-[3/4]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fleur_hero_bottle_branded.png"
                alt="Fleur — Haute Parfumerie Luxury Fragrance"
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
        className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-64 sm:w-80 md:w-96 lg:w-[420px] pointer-events-none z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fleur_magnolia_branch_transparent.png"
          alt="Magnolia Blossom"
          className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)]"
        />
      </motion.div>
    </section>
  );
}
