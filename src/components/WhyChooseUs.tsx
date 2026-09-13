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
    <section id="why-us" className="section-cream py-24 sm:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-warm-gold text-xs font-medium tracking-[0.3em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 text-text-primary tracking-tight">
            The RK Perfume <span className="italic">Difference</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed">
            Experience what makes us Pune&apos;s most trusted perfume destination.
            Quality, authenticity, and luxury at every step.
          </p>
          <div className="w-12 h-[1px] bg-warm-gold/40 mx-auto mt-8" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-cream p-6 sm:p-7 text-center group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-cream-dark flex items-center justify-center mx-auto mb-5 group-hover:bg-charcoal group-hover:scale-105 transition-all duration-400">
                {(() => {
                  const IconComponent = ICON_MAP[feature.icon as keyof typeof ICON_MAP] || Star;
                  return (
                    <IconComponent
                      className="text-warm-gold transition-colors duration-400"
                      size={24}
                    />
                  );
                })()}
              </div>

              {/* Text */}
              <h3 className="text-text-primary font-heading text-lg font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
