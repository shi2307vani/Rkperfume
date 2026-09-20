"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DiscoverNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="discover-new"
      ref={ref}
      className="relative w-full py-20 sm:py-32 bg-[#F7F6F3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-Fashion Editorial Model Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-black/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fleur_editorial_portrait.jpg"
                alt="RK Perfume Editorial Campaign"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Stacked DISCOVER NEW + Air Collection Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col justify-center"
          >
            {/* Background Botanical Sketch */}
            <div className="absolute -top-16 -right-16 w-80 h-80 pointer-events-none opacity-30 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fleur_botanical_sketch.svg"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Stacked Headline matching reference: "DISCOVER NEW" */}
            <div className="mb-10 lg:mb-14 relative z-10">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#1A2024] font-normal leading-[1.05] tracking-tight uppercase">
                Discover
                <br />
                New
              </h2>
            </div>

            {/* Air Collection Product Card */}
            <div className="relative z-10 max-w-md">
              {/* Product Photo */}
              <div className="relative w-full aspect-square overflow-hidden bg-white mb-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-black/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/fleur_product_air.jpg"
                  alt="Artisanal Collection — RK Perfume Pune"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg sm:text-xl tracking-[0.14em] uppercase font-normal text-[#1A2024] mb-3">
                Air Collection
              </h3>

              {/* Description matching reference copy */}
              <p className="text-xs sm:text-sm text-[#5A646B] leading-relaxed mb-6 font-light">
                Our niche perfumes capture the essence of blooming gardens, the gentle breeze, and the lightness of a spring morning.
              </p>

              {/* MORE DETAILS Link */}
              <Link
                href="/collections"
                className="fleur-link text-xs tracking-[0.2em] text-[#1A2024] hover:text-warm-gold uppercase py-1"
              >
                <span>EXPLORE ALL COLLECTIONS</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
