"use client";

import DiscoverNew from "@/components/DiscoverNew";
import Link from "next/link";
import { ArrowRight, Gift, Sparkles, Tag } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function SpecialOffersPage() {
  return (
    <main className="pt-24 sm:pt-28 min-h-screen bg-[#F7F6F3]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-gold/10 text-warm-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
          <Sparkles size={14} />
          Limited Releases & Special Editions
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#1A2024] tracking-tight font-normal uppercase">
          Exclusive Special Offers
        </h1>
        <p className="max-w-2xl mx-auto text-[#5A646B] text-sm sm:text-base mt-4 font-light leading-relaxed">
          Discover our curated seasonal privileges, limited edition flacons, and artisanal gift sets crafted exclusively for true connoisseurs in Pune.
        </p>
        <div className="w-16 h-[1px] bg-warm-gold/40 mx-auto mt-6" />
      </div>

      {/* Discover New / Air Collection Feature */}
      <DiscoverNew />

      {/* Special Offer Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.25em] text-[#8E98A0] uppercase font-sans">
            Boutique Privileges
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1A2024] uppercase mt-2">
            Current Promotions & Bundles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between group hover:border-black/20 transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-warm-gold mb-5">
                <Gift size={20} />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#8E98A0] uppercase">
                Artisanal Set
              </span>
              <h3 className="font-heading text-xl text-[#1A2024] mt-1 mb-3">
                Luxury Discovery Box
              </h3>
              <p className="text-xs text-[#5A646B] leading-relaxed mb-6 font-light">
                Enjoy 4 x 20ml deluxe discovery atomizers across Arabian Attars and Eau de Parfums at a special introductory price.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <span className="font-heading text-base text-[#1A2024]">₹999 Only</span>
              <a
                href={`${BUSINESS_INFO.social.whatsapp}?text=Hi! I am interested in the Luxury Discovery Box special offer (₹999).`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase font-medium text-[#1A2024] hover:text-warm-gold flex items-center gap-1.5"
              >
                Claim Offer <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="p-8 bg-white border border-warm-gold/40 shadow-sm flex flex-col justify-between relative group hover:border-warm-gold transition-all">
            <div className="absolute -top-3 right-6 bg-[#1A2024] text-[#F7F6F3] text-[9px] tracking-[0.2em] uppercase font-medium px-3 py-1">
              Best Value
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold mb-5">
                <Tag size={20} />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#8E98A0] uppercase">
                Twin Scent Deal
              </span>
              <h3 className="font-heading text-xl text-[#1A2024] mt-1 mb-3">
                Signature Couple Duo
              </h3>
              <p className="text-xs text-[#5A646B] leading-relaxed mb-6 font-light">
                Select any two full 100ml flacons from our Men & Women collections and receive complimentary boutique luxury packaging.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <span className="font-heading text-base text-[#1A2024]">Save 25%</span>
              <a
                href={`${BUSINESS_INFO.social.whatsapp}?text=Hi! I am interested in the Signature Couple Duo offer with complimentary gift packaging.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase font-medium text-[#1A2024] hover:text-warm-gold flex items-center gap-1.5"
              >
                Claim Offer <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="p-8 bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between group hover:border-black/20 transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-warm-gold mb-5">
                <Sparkles size={20} />
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#8E98A0] uppercase">
                Store Exclusive
              </span>
              <h3 className="font-heading text-xl text-[#1A2024] mt-1 mb-3">
                In-Store Scent Consult
              </h3>
              <p className="text-xs text-[#5A646B] leading-relaxed mb-6 font-light">
                Visit our Tulshibaug boutique in Pune for a complimentary olfactory tasting session with our fragrance artisans.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <span className="font-heading text-base text-[#1A2024]">Complimentary</span>
              <Link
                href="/contact"
                className="text-xs tracking-[0.15em] uppercase font-medium text-[#1A2024] hover:text-warm-gold flex items-center gap-1.5"
              >
                Visit Boutique <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
