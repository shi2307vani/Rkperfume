"use client";

import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3] pt-32 pb-24 text-[#1A2024]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5A646B] hover:text-[#1A2024] mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="border-b border-black/[0.08] pb-8 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
            Legal & Customer Agreement
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl text-[#1A2024] uppercase tracking-[0.1em] font-normal mb-4">
            Terms & Conditions
          </h1>
          <p className="text-[#5A646B] text-sm leading-relaxed max-w-2xl font-light">
            Welcome to RK Perfume. By browsing our website, placing an order online, or purchasing in-store at Tulshibaug Pune, you agree to the following terms and guidelines.
          </p>
        </div>

        {/* Inspired Fragrance Clarification Box */}
        <div className="p-6 bg-white border-l-4 border-[#C5A059] border-y border-r border-black/[0.06] mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#3E454B] leading-relaxed">
              <strong className="text-[#1A2024] font-semibold block mb-1 uppercase tracking-wider">
                RK Inspired Fragrance Disclaimer
              </strong>
              Name trademarks and copyrights of designer fragrances referenced across our &ldquo;Inspired By&rdquo; creations belong solely to their respective designers and manufacturers. RK Perfume has no affiliation with or endorsement from the original trademark holders. Our artisanal interpretations are independently crafted olfactory tributes intended solely to give customers an understanding of the fragrance family, character, and note accords.
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8 text-sm text-[#3E454B] leading-relaxed font-light">
          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              1. Orders & Pricing
            </h2>
            <ul className="space-y-2.5 list-disc pl-5 text-xs sm:text-sm">
              <li>All prices listed on our website are in Indian National Rupees (INR ₹) and include applicable taxes.</li>
              <li>We reserve the right to modify prices or discontinue products without prior notice.</li>
              <li>In the rare event of a technical typographical error in price or description, RK Perfume reserves the right to cancel the order and provide a full refund.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              2. Fragrance Ingredients & Skin Sensitivity
            </h2>
            <p className="text-xs sm:text-sm mb-3">
              Our perfumes and attars are compounded using high-grade cosmetic perfumery oils and pure concentrates. However, natural and synthetic perfume compounds can interact differently with individual skin types:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
              <li>We strongly recommend performing a small patch test on the inner forearm prior to full application.</li>
              <li>Do not apply directly to broken, irritated, or allergic skin.</li>
              <li>Avoid spraying directly into eyes or consuming orally. Keep out of reach of infants and young children.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              3. Delivery & Transit Risk
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              Orders are handed over to certified national courier partners. While we guarantee robust multi-layered bubble packaging, customers must inspect parcel condition upon delivery and report any transit damage with an unboxing video within 48 hours for immediate replacement.
            </p>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              4. Governing Law & Jurisdiction
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              These terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with orders or store operations shall be subject exclusively to the jurisdiction of the competent courts in Pune, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
