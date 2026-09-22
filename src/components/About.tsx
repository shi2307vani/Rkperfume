"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Award, Heart } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Sparkles,
      title: "Premium Collection",
      desc: "Over 500+ handpicked fragrances from luxury and niche brands worldwide.",
    },
    {
      icon: Award,
      title: "100% Authentic",
      desc: "Every product is sourced from authorized distributors. Guaranteed genuine.",
    },
    {
      icon: Heart,
      title: "Customer First",
      desc: "Personalized recommendations and exceptional service for every customer.",
    },
  ];

  return (
    <section id="about" className="section-cream py-24 sm:py-32 pt-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-warm-gold text-xs font-medium tracking-[0.3em] uppercase">
            Our Story
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 text-text-primary tracking-tight">
            The Art of <span className="italic">Fine Perfumery</span>
          </h2>
          <div className="w-12 h-[1px] bg-warm-gold/40 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-border-light bg-cream-dark group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/products/essprive_oud_wood.jpg"
                alt="ESSPRIVE Oud Wood Extrait De Parfum Showcase"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-text-primary text-sm font-heading font-semibold">ESSPRIVE Oud Wood</h4>
                  <p className="text-warm-gold text-xs">Extrait De Parfum &middot; ₹599 - ₹649</p>
                </div>
                <span className="text-charcoal text-xs font-semibold px-3 py-1 rounded-full bg-warm-gold/15 border border-warm-gold/20">
                  Best Seller
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                Nestled in the heart of{" "}
                <span className="text-warm-gold font-medium">
                  Tulshibaug, Pune
                </span>
                , RK Perfume has established itself as the city&apos;s premier
                destination for luxury fragrances. Founded by{" "}
                <span className="text-text-primary font-medium">Rakesh</span>, our
                store brings together an exquisite collection of perfumes,
                attars, and imported fragrances from around the world.
              </p>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                We believe that fragrance is more than just a scent — it&apos;s
                an expression of your personality, a signature that speaks
                before you do. That&apos;s why we curate only the finest,
                <span className="text-warm-gold font-medium">
                  {" "}
                  100% genuine products
                </span>{" "}
                that offer long-lasting luxury at affordable prices.
              </p>
            </motion.div>

            {/* Highlights List */}
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="card-cream p-5 flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center group-hover:bg-charcoal transition-all duration-400">
                    <item.icon className="text-warm-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3 pt-2 pl-2"
            >
              <div className="flex -space-x-2">
                {["AS", "PD", "RK", "SK"].map((initials) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full bg-warm-gold/15 border-2 border-cream flex items-center justify-center"
                  >
                    <span className="text-warm-gold text-[10px] font-bold">
                      {initials}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-text-primary text-sm font-medium">
                  10,000+ Happy Customers
                </p>
                <p className="text-text-secondary text-xs">Trusted since establishment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
