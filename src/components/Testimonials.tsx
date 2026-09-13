"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section id="testimonials" className="section-cream py-24 sm:py-32 bg-[#F7F6F3]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-warm-gold text-xs font-medium tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 text-[#1A2024] tracking-tight">
            What Our Customers <span className="italic">Say</span>
          </h2>
          <p className="text-[#5A646B] max-w-xl mx-auto text-base leading-relaxed">
            Don&apos;t just take our word for it — hear from our delighted customers.
          </p>
          <div className="w-12 h-[1px] bg-warm-gold/40 mx-auto mt-8" />
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto mb-16"
        >
          <div className="bg-white border border-black/[0.06] rounded-none p-8 sm:p-12 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-warm-gold fill-warm-gold"
                      />
                    )
                  )}
                </div>

                {/* Review text */}
                <p className="text-[#1A2024] text-lg sm:text-xl leading-relaxed font-light italic text-center sm:text-left mb-8">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 justify-center sm:justify-start">
                  <div className="w-11 h-11 rounded-full bg-warm-gold/15 flex items-center justify-center border border-warm-gold/20">
                    <span className="text-warm-gold font-medium text-sm">
                      {TESTIMONIALS[current].initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#1A2024] font-medium text-sm">
                      {TESTIMONIALS[current].name}
                    </p>
                    <p className="text-[#5A646B] text-xs">
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
                className="w-10 h-10 rounded-full border border-black/[0.1] flex items-center justify-center text-[#5A646B] hover:text-[#1A2024] hover:border-warm-gold/60 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === current
                        ? "w-6 bg-warm-gold"
                        : "w-1.5 bg-black/15 hover:bg-black/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-black/[0.1] flex items-center justify-center text-[#5A646B] hover:text-[#1A2024] hover:border-warm-gold/60 transition-colors cursor-pointer"
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
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white border border-black/[0.06] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="text-warm-gold fill-warm-gold"
                  />
                ))}
              </div>
              <p className="text-[#5A646B] text-sm leading-relaxed mb-4 line-clamp-3">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-warm-gold/10 flex items-center justify-center">
                  <span className="text-warm-gold text-[10px] font-medium">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[#1A2024] text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[#8E98A0] text-xs">
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
