"use client";

import { MapPin, Phone, Mail, Clock, ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F7F6F3] border-t border-black/[0.08] text-[#1A2024] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Brand Story & Pune Heritage */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo_header.png"
                alt="ESSPRIVE"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-[#5A646B] text-xs sm:text-sm leading-relaxed mb-4 font-light">
              Pune&apos;s premier boutique for pure Arabian attars, luxury fragrances, and artisanal inspired impressions by ESSPRIVE in Tulshibaug.
            </p>

            {/* Google Rating Badge */}
            <a
              href={BUSINESS_INFO.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-2.5 bg-white border border-black/[0.08] text-xs text-[#1A2024] hover:border-black/30 transition-all mb-4 shadow-sm"
            >
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span className="font-medium">4.9 ★ on Google Maps</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-2">
              <a
                href={BUSINESS_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-black/[0.1] text-[10px] tracking-[0.15em] uppercase text-[#5A646B] hover:text-[#1A2024] hover:border-black/40 transition-colors bg-white"
              >
                WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-black/[0.1] text-[10px] tracking-[0.15em] uppercase text-[#5A646B] hover:text-[#1A2024] hover:border-black/40 transition-colors bg-white"
              >
                Store Location
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.18em] uppercase text-[#1A2024] mb-5 font-normal">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs tracking-[0.08em] text-[#5A646B]">
              <li><Link href="/" className="hover:text-[#1A2024] transition-colors">Home Experience</Link></li>
              <li><Link href="/collections" className="hover:text-[#1A2024] transition-colors">All Collections & Shop</Link></li>
              <li><Link href="/about" className="hover:text-[#1A2024] transition-colors">Our Story & Craft</Link></li>
              <li><Link href="/reviews" className="hover:text-[#1A2024] transition-colors">Verified Customer Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-[#1A2024] transition-colors">Fragrance Guides & Journal</Link></li>
              <li><Link href="/contact" className="hover:text-[#1A2024] transition-colors">Contact & Boutique Visit</Link></li>
            </ul>
          </div>

          {/* Store Policies */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.18em] uppercase text-[#1A2024] mb-5 font-normal">
              Trust & Policies
            </h4>
            <ul className="space-y-2.5 text-xs tracking-[0.08em] text-[#5A646B]">
              <li><Link href="/shipping" className="hover:text-[#1A2024] transition-colors">Shipping & Delivery Policy</Link></li>
              <li><Link href="/returns" className="hover:text-[#1A2024] transition-colors">Return & Replacement Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#1A2024] transition-colors">Privacy & Data Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#1A2024] transition-colors">Terms of Service & Disclaimer</Link></li>
            </ul>

            <div className="mt-6 pt-4 border-t border-black/[0.06] space-y-1.5 text-xs text-[#5A646B]">
              <div className="flex items-center gap-1.5 text-[#1A2024] font-medium">
                <Truck size={13} className="text-[#C5A059]" />
                <span>Pan-India 3–5 Day Delivery</span>
              </div>
              <p className="text-[11px] text-[#8E98A0]">Free shipping on orders above ₹999</p>
            </div>
          </div>

          {/* Boutique Visit & Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.18em] uppercase text-[#1A2024] mb-5 font-normal">
              Tulshibaug Boutique
            </h4>
            <div className="space-y-3 text-xs text-[#5A646B] font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#1A2024]">{BUSINESS_INFO.hours.days}</p>
                  <p>{BUSINESS_INFO.hours.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin size={15} className="text-[#C5A059] mt-0.5 flex-shrink-0" />
                <p>{BUSINESS_INFO.address.full}</p>
              </div>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-[#1A2024] border-b border-[#1A2024] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                >
                  <Phone size={12} />
                  <span>Call Boutique: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Accepted Payment Methods Bar */}
        <div className="py-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs text-[#8E98A0]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-700" />
            <span className="text-[#5A646B]">100% Secure Checkout &middot; UPI, Cards, Net Banking & COD Available</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-medium text-[#5A646B]">
            <span className="px-2 py-0.5 bg-white border border-black/[0.06] rounded">Google Pay</span>
            <span className="px-2 py-0.5 bg-white border border-black/[0.06] rounded">PhonePe</span>
            <span className="px-2 py-0.5 bg-white border border-black/[0.06] rounded">Paytm</span>
            <span className="px-2 py-0.5 bg-white border border-black/[0.06] rounded">Cards</span>
            <span className="px-2 py-0.5 bg-white border border-black/[0.06] rounded">COD</span>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E98A0] tracking-wider gap-4">
          <p>© {currentYear} ESSPRIVE. All rights reserved.</p>
          <p className="tracking-widest uppercase">ESSPRIVE &middot; Haute Parfumerie & Arabian Attars &middot; Pune, India</p>
        </div>
      </div>
    </footer>
  );
}
