"use client";

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F7F6F3] border-t border-black/[0.08] text-[#1A2024] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Brand Story */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl tracking-[0.2em] uppercase text-[#1A2024]">
                FLEUR
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#8E98A0] uppercase font-sans mt-0.5">
                Haute Parfumerie Pune
              </span>
            </Link>
            <p className="text-[#5A646B] text-xs sm:text-sm leading-relaxed mb-6 font-light">
              Crafted in the spirit of French haute parfumerie, offering curated luxury scents, rare Arabian attars, and bespoke imported fragrances in Tulshibaug, Pune.
            </p>
            {/* Social Links */}
            <div className="flex gap-2.5">
              {["Instagram", "WhatsApp", "Facebook"].map((social) => (
                <a
                  key={social}
                  href={social === "WhatsApp" ? BUSINESS_INFO.social.whatsapp : "#"}
                  target={social === "WhatsApp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 border border-black/[0.1] text-[10px] tracking-[0.15em] uppercase text-[#5A646B] hover:text-[#1A2024] hover:border-black/40 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.18em] uppercase text-[#1A2024] mb-5 font-normal">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs tracking-[0.1em] text-[#5A646B]">
              <li><a href="#customer-favorites" className="hover:text-[#1A2024] transition-colors">Customer Favorites</a></li>
              <li><a href="#discover-new" className="hover:text-[#1A2024] transition-colors">Air Collection</a></li>
              <li><a href="#collections" className="hover:text-[#1A2024] transition-colors">Arabian Attars</a></li>
              <li><a href="#collections" className="hover:text-[#1A2024] transition-colors">Luxury Designer Parfums</a></li>
              <li><a href="#collections" className="hover:text-[#1A2024] transition-colors">Artisanal Gift Sets</a></li>
            </ul>
          </div>

          {/* Boutique Hours */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.18em] uppercase text-[#1A2024] mb-5 font-normal">
              Boutique Hours
            </h4>
            <div className="space-y-3 text-xs text-[#5A646B] font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Clock size={15} className="text-warm-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#1A2024]">{BUSINESS_INFO.hours.days}</p>
                  <p>{BUSINESS_INFO.hours.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2">
                <MapPin size={15} className="text-warm-gold mt-0.5 flex-shrink-0" />
                <p>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}</p>
              </div>
            </div>
          </div>

          {/* Newsletter / Concierge */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.18em] uppercase text-[#1A2024] mb-5 font-normal">
              Bespoke Concierge
            </h4>
            <p className="text-xs text-[#5A646B] mb-4 font-light leading-relaxed">
              Connect directly with our master perfumer for bespoke recommendations and sampling.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-[#1A2024] border-b border-[#1A2024] pb-1 hover:text-warm-gold hover:border-warm-gold transition-colors"
            >
              <span>Call Boutique ({BUSINESS_INFO.phone})</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E98A0] tracking-wider gap-4">
          <p>© {currentYear} FLEUR / ESSPRIVE · RK Perfume. All rights reserved.</p>
          <p className="tracking-widest uppercase">Haute Parfumerie · Pune, India</p>
        </div>
      </div>
    </footer>
  );
}
