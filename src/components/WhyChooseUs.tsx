"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Sparkles, 
  Star, 
  Package, 
  BadgeCheck, 
  Headphones 
} from "lucide-react";

const ICON_MAP = {
  ShieldCheck,
  Award,
  TrendingUp,
  Sparkles,
  Star,
  Package,
  BadgeCheck,
  Headphones
} as const;

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-gradient py-24 sm:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            The RK Perfume{" "}
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Experience what makes us Pune&apos;s most trusted perfume destination.
            Quality, authenticity, and luxury at every step.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group luxury-card p-6 sm:p-7 text-center relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {(() => {
                    const IconComponent = ICON_MAP[feature.icon as keyof typeof ICON_MAP] || Star;
                    return (
                      <IconComponent
                        className="text-gold group-hover:text-gold-light transition-colors duration-500"
                        size={28}
                      />
                    );
                  })()}
                </motion.div>

                {/* Text */}
                <h3 className="text-white font-heading text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
