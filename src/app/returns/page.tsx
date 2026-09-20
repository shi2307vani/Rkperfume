"use client";

import Link from "next/link";
import { RotateCcw, AlertTriangle, Video, CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function ReturnsPage() {
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
            Store Policies & Customer Care
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl text-[#1A2024] uppercase tracking-[0.1em] font-normal mb-4">
            Return & Replacement Policy
          </h1>
          <p className="text-[#5A646B] text-sm leading-relaxed max-w-2xl font-light">
            Due to the hygiene, safety, and personal-care nature of fine fragrances and attars, we maintain clear replacement and return guidelines to protect every customer.
          </p>
        </div>

        {/* Unboxing Notice Alert */}
        <div className="p-6 bg-amber-50 border border-amber-200/80 mb-10 flex items-start gap-4">
          <Video className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong className="font-semibold block mb-1 uppercase tracking-wide">Important: Mandatory Unboxing Video Guideline</strong>
            To process any claim for parcel damage, leakage during transit, or missing items, we kindly request customers to record a continuous 360° unboxing video showing the outer seal being cut open and the bottles inspected.
          </div>
        </div>

        {/* Core Policy Details */}
        <div className="space-y-8 text-sm text-[#3E454B] leading-relaxed font-light">
          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#C5A059]" />
              1. 48-Hour Transit Damage & Leakage Guarantee
            </h2>
            <p className="text-xs sm:text-sm mb-3">
              If your perfume bottle arrives cracked, broken, or leaking due to courier mishandling:
            </p>
            <ul className="space-y-2.5 list-disc pl-5 text-xs sm:text-sm mb-4">
              <li>Contact our concierge team within <strong>48 hours</strong> of receiving the package.</li>
              <li>Share your order number, photo evidence, and continuous unboxing video via WhatsApp at <strong>+91 82828 25008</strong>.</li>
              <li>Once verified by our dispatch manager, we will ship a <strong>free replacement bottle immediately</strong> at zero additional charge to you.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal flex items-center gap-2">
              <AlertTriangle size={18} className="text-[#C5A059]" />
              2. Scent Preference & Opened Bottles
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed mb-3">
              Fragrance perception is deeply personal and reacts differently with individual skin chemistries. Since fragrances cannot be sanitized or restocked once unsealed and sprayed:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
              <li>Opened or sprayed bottles cannot be returned for a refund solely based on personal scent preference.</li>
              <li>
                <strong>Try-Before-You-Buy Discovery Sets:</strong> If you are unsure which fragrance suits you, we strongly recommend ordering our <strong>4 x 20ml Discovery Box (₹999)</strong> first before committing to full 50ml/100ml bottles.
              </li>
              <li>You are also always welcome to visit our Tulshibaug boutique in Pune to sample any scent on your skin for free.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal flex items-center gap-2">
              <RotateCcw size={18} className="text-[#C5A059]" />
              3. Wrong Item Dispatched
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              In the unlikely event that you receive a different fragrance variant than what you ordered, notify us within 48 hours. Keep the outer package unopened. We will arrange a reverse pickup from your doorstep and immediately dispatch the correct product at our cost.
            </p>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              4. Refunds Processing
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              In instances where a replacement cannot be provided due to out-of-stock items, a full refund will be credited directly to your original payment method (UPI / Bank Account / Card) within 3–5 business days after inspection.
            </p>
          </section>
        </div>

        {/* Contact Assistance */}
        <div className="mt-12 text-center p-8 bg-white border border-black/[0.06]">
          <h3 className="font-heading text-base uppercase tracking-wider text-[#1A2024] mb-2">
            Have a question regarding your order?
          </h3>
          <p className="text-xs text-[#5A646B] mb-5">
            Reach out directly to Rakesh & the RK Perfume support team on WhatsApp.
          </p>
          <a
            href={BUSINESS_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A2024] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors"
          >
            <MessageCircle size={15} /> WhatsApp Order Support
          </a>
        </div>
      </div>
    </main>
  );
}
