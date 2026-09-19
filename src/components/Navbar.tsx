"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "SPECIAL OFFERS", href: "/special-offers" },
  { label: "ABOUT", href: "/about" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#F7F6F3]/98 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-black/[0.08]"
            : "bg-[#F7F6F3]/90 backdrop-blur-sm border-b border-black/[0.04]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo — Pure Brand Logo */}
            <Link href="/" className="flex items-center group shrink-0 py-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo_header.png"
                alt="ESSPRIVE"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links — Centered */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-8 mx-auto">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-[11px] tracking-[0.18em] transition-all duration-300 relative py-1 uppercase ${isActive
                        ? "font-semibold text-[#1A2024] after:w-full"
                        : "font-medium text-[#1A2024]/75 hover:text-[#1A2024]"
                      } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#1A2024] hover:after:w-full after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Icons — Search, User, WhatsApp Cart */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/collections"
                aria-label="Search Fragrances in Collections"
                className="text-[#1A2024]/80 hover:text-[#1A2024] transition-colors duration-200"
              >
                <Search size={18} strokeWidth={1.5} />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                aria-label="Contact Boutique"
                className="text-[#1A2024]/80 hover:text-[#1A2024] transition-colors duration-200 hidden sm:block"
                title={`Call: ${BUSINESS_INFO.phone}`}
              >
                <User size={18} strokeWidth={1.5} />
              </a>
              <a
                href={`${BUSINESS_INFO.social.whatsapp}?text=Hi! I would like to inquire about your perfume collection.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                className="relative text-[#1A2024]/80 hover:text-[#1A2024] transition-colors duration-200"
                title="Inquire on WhatsApp"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#1A2024] text-[#F7F6F3] text-[9px] font-sans flex items-center justify-center font-medium">
                  5
                </span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 text-[#1A2024] hover:bg-black/5 rounded"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#F7F6F3] shadow-2xl p-6 pt-20 flex flex-col justify-between border-l border-black/[0.08]"
            >
              <div className="space-y-4">
                <div className="pb-4 border-b border-black/[0.08] flex items-center justify-between">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/logo_header.png"
                      alt="ESSPRIVE"
                      className="h-9 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 text-[#1A2024] hover:bg-black/5 rounded"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-1.5 pt-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname?.startsWith(item.href);

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3.5 py-3 text-xs tracking-[0.2em] font-medium uppercase transition-colors rounded ${isActive
                            ? "bg-[#1A2024] text-[#F7F6F3]"
                            : "text-[#1A2024] hover:bg-black/5 hover:text-warm-gold"
                          }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.08] space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A2024] text-[#F7F6F3] text-xs tracking-[0.15em] uppercase font-medium rounded hover:bg-black transition-colors"
                >
                  <Phone size={14} />
                  Call Boutique
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
