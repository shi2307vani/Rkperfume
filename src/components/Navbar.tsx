"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "ABOUT", href: "/about" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "GUIDES", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openCart, totalItems } = useCart();

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

            {/* Right Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={openCart}
                className="relative inline-flex items-center justify-center p-2 text-[#1A2024] hover:text-[#C5A059] transition-colors cursor-pointer"
                aria-label={`Shopping bag with ${totalItems} items`}
                title="View shopping bag"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#1A2024] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <a
                href={BUSINESS_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase px-4 py-2 border border-black/20 hover:border-black text-[#1A2024] font-medium transition-all bg-white shadow-xs"
              >
                <MessageCircle size={13} className="text-emerald-700" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu & Cart */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={openCart}
                className="relative p-2 text-[#1A2024] hover:bg-black/5 rounded cursor-pointer"
                aria-label={`Shopping bag with ${totalItems} items`}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#1A2024] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 text-[#1A2024] hover:bg-black/5 rounded"
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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#F7F6F3] p-6 shadow-2xl flex flex-col justify-between border-l border-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-black/10">
                  <div className="flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/logo_header.png"
                      alt="ESSPRIVE"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#1A2024] hover:bg-black/5 rounded"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-4 py-8">
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
                        className={`text-sm tracking-[0.18em] py-2 border-b border-black/[0.04] uppercase transition-colors ${isActive
                            ? "font-semibold text-[#1A2024]"
                            : "font-normal text-[#5A646B] hover:text-[#1A2024]"
                          }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-black/10">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A2024] text-white text-xs uppercase tracking-[0.16em] font-medium"
                >
                  <Phone size={14} /> Call Boutique
                </a>
                <a
                  href={BUSINESS_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-black/20 text-[#1A2024] text-xs uppercase tracking-[0.16em] font-medium"
                >
                  <MessageCircle size={14} className="text-emerald-700" /> WhatsApp Concierge
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
