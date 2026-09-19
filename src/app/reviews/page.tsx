"use client";

import Testimonials from "@/components/Testimonials";
import { Star, CheckCircle, MessageSquare, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <main className="pt-24 sm:pt-28 min-h-screen bg-[#F7F6F3]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-gold/10 text-warm-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
          <Star size={14} className="fill-warm-gold text-warm-gold" />
          Verified Client Experiences
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#1A2024] tracking-tight font-normal uppercase">
          Customer Reviews & Stories
        </h1>
        <p className="max-w-2xl mx-auto text-[#5A646B] text-sm sm:text-base mt-4 font-light leading-relaxed">
          Read candid feedback from our patrons across Pune who have discovered their signature scents at RK Perfume.
        </p>
        <div className="w-16 h-[1px] bg-warm-gold/40 mx-auto mt-6" />
      </div>

      {/* Trust Stats Bar */}
      <div className="max-w-5xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border border-black/[0.06] shadow-sm text-center">
          <div>
            <span className="font-heading text-2xl sm:text-3xl text-[#1A2024]">4.9 / 5.0</span>
            <div className="flex justify-center gap-1 my-1 text-warm-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-warm-gold" />
              ))}
            </div>
            <p className="text-[10px] tracking-[0.15em] text-[#8E98A0] uppercase">Average Rating</p>
          </div>
          <div>
            <span className="font-heading text-2xl sm:text-3xl text-[#1A2024]">10,000+</span>
            <p className="text-xs text-text-primary font-medium mt-1">Bottles Curated</p>
            <p className="text-[10px] tracking-[0.15em] text-[#8E98A0] uppercase">Since Inception</p>
          </div>
          <div>
            <span className="font-heading text-2xl sm:text-3xl text-[#1A2024]">100%</span>
            <p className="text-xs text-text-primary font-medium mt-1">Authentic Scents</p>
            <p className="text-[10px] tracking-[0.15em] text-[#8E98A0] uppercase">Guaranteed Original</p>
          </div>
          <div>
            <span className="font-heading text-2xl sm:text-3xl text-[#1A2024]">Tulshibaug</span>
            <p className="text-xs text-text-primary font-medium mt-1">Pune Flagship</p>
            <p className="text-[10px] tracking-[0.15em] text-[#8E98A0] uppercase">Walk-in Welcome</p>
          </div>
        </div>
      </div>

      {/* Full Testimonials Showcase */}
      <Testimonials />

      {/* Leave Feedback CTA */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 pb-24 text-center">
        <div className="p-10 bg-white border border-black/[0.06] shadow-sm">
          <MessageSquare size={28} className="mx-auto text-warm-gold mb-3" />
          <h3 className="font-heading text-2xl text-[#1A2024] uppercase">
            Have you experienced our fragrances?
          </h3>
          <p className="text-xs sm:text-sm text-[#5A646B] max-w-md mx-auto mt-2 mb-6 font-light">
            We would love to hear about your experience with our fragrances and service in Tulshibaug, Pune.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${BUSINESS_INFO.social.whatsapp}?text=Hi! I would like to share my review for RK Perfume:`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1A2024] text-[#F7F6F3] text-xs tracking-[0.18em] uppercase font-medium hover:bg-black transition-colors"
            >
              Share Review on WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-black/[0.15] text-[#1A2024] text-xs tracking-[0.18em] uppercase font-medium hover:bg-black/5 transition-colors flex items-center gap-2"
            >
              <MapPin size={13} />
              Visit Tulshibaug Boutique
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
