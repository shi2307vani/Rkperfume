"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  return (
    <section id="testimonials" className="section-dark py-24 sm:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our Customers{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-base sm:text-lg">
            Don&apos;t just take our word for it — hear from our delighted
            customers.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-3xl mx-auto mb-16"
        >
          <div className="luxury-card p-8 sm:p-12 gold-glow relative overflow-hidden">
            {/* Decorative quote */}
            <Quote className="absolute top-6 right-6 text-gold/10" size={60} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="star-rating fill-gold"
                      />
                    )
                  )}
                </div>

                {/* Review text */}
                <p className="text-white text-lg sm:text-xl leading-relaxed font-light italic text-center sm:text-left mb-8">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 justify-center sm:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/20">
                    <span className="text-gold font-bold text-sm">
                      {TESTIMONIALS[current].initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-gray text-sm">
                      {TESTIMONIALS[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-gold"
                        : "w-1.5 bg-gold/20 hover:bg-gold/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className="luxury-card p-6 group"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="star-rating fill-gold"
                  />
                ))}
              </div>
              <p className="text-gray text-sm leading-relaxed mb-4 line-clamp-3">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 flex items-center justify-center">
                  <span className="text-gold text-[10px] font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-gray text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
