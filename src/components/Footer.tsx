"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-dark-border">
      {/* Gold accent line */}
      <div className="luxury-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="RK Perfume Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray text-sm leading-relaxed mb-6">
              Pune&apos;s premier destination for luxury perfumes, attars, and
              imported fragrances. Genuine products at affordable prices.
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-10 h-10 rounded-xl border border-dark-border flex items-center justify-center text-gray hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  <span className="text-xs uppercase font-bold">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray text-sm leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold flex-shrink-0" size={16} />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-gray text-sm hover:text-gold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold flex-shrink-0" size={16} />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-gray text-sm hover:text-gold transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-gold flex-shrink-0" size={16} />
                <span className="text-gray text-sm">
                  {BUSINESS_INFO.hours.days} · {BUSINESS_INFO.hours.time}
                </span>
              </li>
            </ul>
          </div>

          {/* Mini Map */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-5">
              Find Us
            </h4>
            <div className="rounded-xl overflow-hidden border border-dark-border h-[180px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.856!3d18.517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0659cd38f87%3A0x0!2sTulshibaug%2C%20Budhwar%20Peth%2C%20Pune!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Perfume Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray text-sm text-center sm:text-left">
              © {currentYear} RK Perfume. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
