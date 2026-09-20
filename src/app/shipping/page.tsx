"use client";

import Link from "next/link";
import { Truck, ShieldCheck, Clock, MapPin, CreditCard, ArrowLeft, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F3] pt-32 pb-24 text-[#1A2024]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5A646B] hover:text-[#1A2024] mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="border-b border-black/[0.08] pb-8 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
            Store Policies & Trust
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl text-[#1A2024] uppercase tracking-[0.1em] font-normal mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-[#5A646B] text-sm leading-relaxed max-w-2xl font-light">
            At RK Perfume, every bottle is carefully packed in leak-proof, shock-absorbing luxury packaging to ensure it reaches you in pristine condition.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white border border-black/[0.06] rounded-none shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
            <Truck className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#1A2024] mb-1">Pan-India Delivery</h3>
            <p className="text-xs text-[#5A646B] leading-relaxed">Delivered in 3–5 business days across 28,000+ pincodes via premium couriers.</p>
          </div>
          <div className="p-6 bg-white border border-black/[0.06] rounded-none shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
            <Clock className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#1A2024] mb-1">Pune Local Express</h3>
            <p className="text-xs text-[#5A646B] leading-relaxed">Same-day or next-day priority delivery within Pune & PCMC city limits.</p>
          </div>
          <div className="p-6 bg-white border border-black/[0.06] rounded-none shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
            <ShieldCheck className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#1A2024] mb-1">Free Shipping on ₹999+</h3>
            <p className="text-xs text-[#5A646B] leading-relaxed">Complimentary delivery on all orders above ₹999. Flat ₹79 for smaller orders.</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-10 text-sm text-[#3E454B] leading-relaxed font-light">
          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              1. Delivery Timelines
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-xs sm:text-sm">
              <li>
                <strong>Local Pune & PCMC:</strong> Orders placed before 1:00 PM are dispatched the same day. Delivery typically takes 24–36 hours.
              </li>
              <li>
                <strong>Metro Cities (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata):</strong> Delivered within 2–4 business days.
              </li>
              <li>
                <strong>Rest of India:</strong> Delivered within 3–6 business days depending on carrier serviceability.
              </li>
              <li>
                All orders are dispatched from our flagship boutique located at Tulshibaug, Pune, Maharashtra.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              2. Order Tracking
            </h2>
            <p className="text-xs sm:text-sm mb-3">
              As soon as your package is dispatched from our store, you will receive an automatic tracking link via SMS and WhatsApp. You can monitor the real-time transit status until the package is handed to you.
            </p>
            <p className="text-xs sm:text-sm">
              If you have questions regarding your transit status, you can message our WhatsApp concierge directly at{" "}
              <a href={BUSINESS_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#C5A059] font-medium underline">
                +91 82828 25008
              </a>.
            </p>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal flex items-center gap-2">
              <CreditCard size={18} className="text-[#C5A059]" />
              3. Payment Methods & Cash on Delivery (COD)
            </h2>
            <p className="text-xs sm:text-sm mb-3">
              We accept 100% secure payment methods:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm mb-4">
              <li><strong>UPI:</strong> Google Pay, PhonePe, Paytm, BHIM, and any bank UPI app.</li>
              <li><strong>Cards:</strong> Visa, MasterCard, RuPay, and American Express debit and credit cards.</li>
              <li><strong>Net Banking:</strong> All major Indian banks.</li>
              <li><strong>Cash on Delivery (COD):</strong> Available across serviceable pin codes.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal flex items-center gap-2">
              <MapPin size={18} className="text-[#C5A059]" />
              4. In-Store Boutique Pickup (Tulshibaug, Pune)
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed mb-4">
              Visiting Tulshibaug? You can place an order via WhatsApp or phone and collect your order directly from our boutique with zero shipping fee.
            </p>
            <div className="p-4 bg-[#F7F6F3] border border-black/[0.06] text-xs space-y-1">
              <p><strong>Boutique Address:</strong> {BUSINESS_INFO.address.full}</p>
              <p><strong>Hours:</strong> Monday – Sunday: 10:00 AM – 9:00 PM</p>
              <p><strong>Boutique Helpline:</strong> {BUSINESS_INFO.phone}</p>
            </div>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-white border border-black/[0.06]">
          <h3 className="font-heading text-base uppercase tracking-wider text-[#1A2024] mb-2">
            Need urgent delivery or assistance?
          </h3>
          <p className="text-xs text-[#5A646B] mb-5">
            Our boutique team is active on WhatsApp to answer dispatch and delivery questions.
          </p>
          <a
            href={BUSINESS_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A2024] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors"
          >
            <MessageCircle size={15} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
