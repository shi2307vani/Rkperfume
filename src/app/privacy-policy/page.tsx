"use client";

import Link from "next/link";
import { Shield, Lock, Eye, ArrowLeft } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function PrivacyPolicyPage() {
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
            Legal & Data Privacy
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl text-[#1A2024] uppercase tracking-[0.1em] font-normal mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#5A646B] text-sm leading-relaxed max-w-2xl font-light">
            Last Updated: January 2026. This Privacy Policy outlines how RK Perfume collects, uses, and safeguards your personal information when you visit our website or purchase our fragrances.
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white border border-black/[0.06]">
            <Shield className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#1A2024] mb-1">Zero Spam Guarantee</h3>
            <p className="text-xs text-[#5A646B] leading-relaxed">We never sell, rent, or trade your personal contact details to any third-party marketing firms.</p>
          </div>
          <div className="p-6 bg-white border border-black/[0.06]">
            <Lock className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#1A2024] mb-1">Encrypted Payments</h3>
            <p className="text-xs text-[#5A646B] leading-relaxed">Payment processing is handled via RBI-authorized, PCI-DSS compliant banking gateways.</p>
          </div>
          <div className="p-6 bg-white border border-black/[0.06]">
            <Eye className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-heading text-sm uppercase tracking-wider text-[#1A2024] mb-1">Transparent Usage</h3>
            <p className="text-xs text-[#5A646B] leading-relaxed">Information collected is strictly used for order fulfillment, invoice generation, and delivery tracking.</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8 text-sm text-[#3E454B] leading-relaxed font-light">
          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              1. Information We Collect
            </h2>
            <p className="text-xs sm:text-sm mb-3">When you interact with RK Perfume, we collect necessary transactional information including:</p>
            <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
              <li><strong>Contact Information:</strong> Name, delivery address, phone number, and email address.</li>
              <li><strong>Order Details:</strong> Fragrance selections, bottle sizes, invoice records, and shipping preferences.</li>
              <li><strong>Communication Logs:</strong> WhatsApp or telephonic inquiries related to fragrance recommendations and order tracking.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-2.5 list-disc pl-5 text-xs sm:text-sm">
              <li>To dispatch and deliver fragrance orders directly to your address via trusted logistics partners (Bluedart, Delhivery, Express).</li>
              <li>To send automatic dispatch notifications, airway bill numbers, and delivery confirmation via SMS and WhatsApp.</li>
              <li>To provide customer support regarding scent advice, note profiles, or damaged order resolution.</li>
              <li>To prevent fraudulent transactions and comply with Indian legal accounting standards.</li>
            </ul>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              3. Payment Security
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              RK Perfume does not store or process your sensitive credit card numbers, CVV codes, or net banking passwords on our local servers. All digital transactions are redirected through certified Indian payment gateways ensuring 256-bit SSL encryption.
            </p>
          </section>

          <section className="bg-white p-8 border border-black/[0.06]">
            <h2 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-4 font-normal">
              4. Contact Us
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              If you have any questions or wish to delete your account or contact records from our database, please contact our data grievance officer at{" "}
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#C5A059] font-medium underline">
                {BUSINESS_INFO.email}
              </a>{" "}
              or visit our boutique at {BUSINESS_INFO.address.full}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
