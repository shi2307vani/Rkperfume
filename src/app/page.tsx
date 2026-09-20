"use client";

import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import PerfumeFinder from "@/components/PerfumeFinder";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, MapPin, Clock, ShieldCheck, HeartHandshake, Award, Gift, Truck, CheckCircle } from "lucide-react";
import { BUSINESS_INFO, TESTIMONIALS } from "@/lib/constants";

export default function Home() {
  const topReviews = TESTIMONIALS.slice(0, 2);

  return (
    <>
      {/* 1. Hero Showcase with Video Background */}
      <Hero />

      {/* 2. Interactive Scent Finder Tool */}
      <PerfumeFinder />

      {/* 3. Customer Favorites (Curated Signature Selection) with link to /collections */}
      <FeaturedProducts />

      {/* 4. Promoted Discovery Set ("Try Before You Buy" - ORANGE Priority) */}
      <section className="py-16 sm:py-20 bg-[#1A2024] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[320px] bg-[#22292F] border border-white/10 p-6 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gift_premium.png"
                  alt="RK Perfume 4 x 20ml Discovery Box"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-[#C5A059] text-[#1A2024] text-[10px] uppercase tracking-widest font-bold">
                  Just ₹999
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
                Try Before You Buy &middot; 4 x 20ml Box
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-wide font-normal leading-tight mb-4">
                Test 4 Luxury Scents at Home with Zero Risk
              </h2>
              <p className="text-sm sm:text-base text-[#B8C2C9] leading-relaxed font-light mb-6 max-w-2xl">
                Unsure which fragrance matches your skin chemistry? Order our bestselling 4 x 20ml Discovery Box for ₹999. Wear them to work, evenings, and workouts for two weeks before committing to a full 100ml bottle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#E1E6EA] mb-8 font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#C5A059]" />
                  <span>4 Handpicked 20ml Spray Flacons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={15} className="text-[#C5A059]" />
                  <span>Free Pan-India Delivery Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift size={15} className="text-[#C5A059]" />
                  <span>Luxury Gold Presentation Box</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/collections"
                  className="px-8 py-3.5 bg-[#C5A059] text-[#1A2024] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#b08c45] transition-colors inline-flex items-center gap-2"
                >
                  <span>Order Discovery Box (₹999)</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={BUSINESS_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-white/20 text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-white/10 transition-colors"
                >
                  Customize Your 4 Scents via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Maison Story & Craftsmanship Teaser */}
      <section className="py-20 sm:py-28 bg-[#F2EFE9] border-y border-black/[0.05] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden bg-white shadow-lg border border-black/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/fleur_editorial_portrait.jpg"
                  alt="Haute Parfumerie Artisanal Craft"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F7F6F3]">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-warm-gold block">
                    Boutique Heritage
                  </span>
                  <p className="font-heading text-xl mt-1">Tulshibaug · Pune</p>
                </div>
              </div>
            </div>

            {/* Content & Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-warm-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
                <Sparkles size={14} />
                The Maison Philosophy
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#1A2024] font-normal tracking-tight uppercase leading-[1.15]">
                The Art of Fine Perfumery,
                <br />
                <span className="italic font-light">Rooted in Pune</span>
              </h2>
              <p className="text-[#5A646B] text-sm sm:text-base leading-relaxed mt-6 font-light max-w-xl">
                Founded with a devotion to olfactory excellence, RK Perfume unites the venerable tradition of French haute parfumerie with the mystical allure of authentic Arabian attars. Every flacon is an intimate signature of individuality and timeless elegance.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 pt-6 border-t border-black/[0.06]">
                <div>
                  <ShieldCheck size={20} className="text-warm-gold mb-2" />
                  <h3 className="font-heading text-sm text-[#1A2024] uppercase">100% Genuine</h3>
                  <p className="text-xs text-[#7A848D] mt-1 font-light">Directly sourced authentic fragrances only.</p>
                </div>
                <div>
                  <Award size={20} className="text-warm-gold mb-2" />
                  <h3 className="font-heading text-sm text-[#1A2024] uppercase">Artisanal Oils</h3>
                  <p className="text-xs text-[#7A848D] mt-1 font-light">Pure agarwood, amber, and rare floral absolutes.</p>
                </div>
                <div>
                  <HeartHandshake size={20} className="text-warm-gold mb-2" />
                  <h3 className="font-heading text-sm text-[#1A2024] uppercase">Expert Guidance</h3>
                  <p className="text-xs text-[#7A848D] mt-1 font-light">Personalized scent profiling by Rakesh bhai.</p>
                </div>
              </div>

              {/* CTA Link to /about */}
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase font-semibold text-[#1A2024] hover:text-warm-gold border-b border-[#1A2024] pb-1 hover:border-warm-gold transition-all"
                >
                  <span>Read Our Full Story & Scent Guide</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews & Google Rating */}
      <section className="py-20 sm:py-24 bg-[#F2EFE9] border-t border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-warm-gold mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-warm-gold" />
                ))}
                <span className="text-xs font-semibold text-[#1A2024] ml-1.5">4.9 / 5.0 Rating (350+ Google Reviews)</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl text-[#1A2024] uppercase font-normal">
                Loved by Fragrance Enthusiasts
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.16em] uppercase font-medium text-[#C5A059] hover:underline"
              >
                View on Google Maps &rarr;
              </a>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#1A2024] hover:text-warm-gold transition-colors"
              >
                <span>Read All Reviews</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-warm-gold mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-warm-gold" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A545C] italic leading-relaxed font-light mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] text-xs">
                  <div>
                    <span className="font-medium text-[#1A2024] block">{rev.name}</span>
                    <span className="text-[10px] text-[#8E98A0] tracking-wider uppercase">{rev.location}</span>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-emerald-700 font-medium">Verified Patron</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Boutique Visit & Concierge Teaser */}
      <section className="py-20 sm:py-24 bg-[#F7F6F3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#1A2024] text-[#F7F6F3] p-8 sm:p-14 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-warm-gold font-medium block mb-2">
                  Visit Tulshibaug Boutique
                </span>
                <h2 className="font-heading text-2xl sm:text-4xl tracking-tight uppercase font-normal leading-tight">
                  Experience Our Scents In Person
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-[#B8C2C9] font-light">
                  <div className="flex items-start gap-2.5">
                    <Clock size={16} className="text-warm-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#F7F6F3]">{BUSINESS_INFO.hours.days}</p>
                      <p>{BUSINESS_INFO.hours.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-warm-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#F7F6F3]">Tulshibaug, Budhwar Peth</p>
                      <p>Pune, Maharashtra 411002</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F7F6F3] text-[#1A2024] text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white transition-colors text-center"
                >
                  <MapPin size={14} />
                  Get Store Details
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-[#F7F6F3] text-xs tracking-[0.18em] uppercase font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Call: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
