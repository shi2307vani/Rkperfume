"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "SHOP", href: "#customer-favorites" },
  { label: "SPECIAL OFFERS", href: "#discover-new" },
  { label: "COLLECTIONS", href: "#collections" },
  { label: "PARFUMES GUIDE", href: "#why-choose-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-[#F7F6F3]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.03)] border-b border-black/[0.06]"
            : "bg-[#F7F6F3]/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo — Elegant Fleur/ESSPRIVE Haute Parfumerie Serif */}
            <Link href="/" className="flex items-center group">
              <span className="font-heading text-2xl sm:text-3xl tracking-[0.2em] font-normal text-[#1A2024] group-hover:text-warm-gold transition-colors duration-300 uppercase">
                FLEUR
              </span>
              <span className="ml-2 text-[9px] tracking-[0.25em] text-[#8E98A0] uppercase hidden sm:inline-block font-sans">
                Paris / Pune
              </span>
            </Link>

            {/* Desktop Navigation Links — Centered */}
            <div className="hidden lg:flex items-center gap-8 mx-auto">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium tracking-[0.18em] text-[#1A2024]/80 hover:text-[#1A2024] transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A2024] hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Action Icons — Search, User, Bag */}
            <div className="flex items-center gap-5 sm:gap-6">
              <button
                aria-label="Search Fragrances"
                className="text-[#1A2024]/80 hover:text-[#1A2024] transition-colors duration-200"
              >
                <Search size={17} strokeWidth={1.5} />
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                aria-label="Contact / Account"
                className="text-[#1A2024]/80 hover:text-[#1A2024] transition-colors duration-200 hidden sm:block"
              >
                <User size={17} strokeWidth={1.5} />
              </a>
              <a
                href={`${BUSINESS_INFO.social.whatsapp}?text=Hi! I would like to inquire about your perfume collection.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shopping Bag / Cart"
                className="relative text-[#1A2024]/80 hover:text-[#1A2024] transition-colors duration-200"
              >
                <ShoppingBag size={17} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#1A2024] text-[#F7F6F3] text-[9px] font-sans flex items-center justify-center">
                  3
                </span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1 text-[#1A2024]"
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
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#F7F6F3] shadow-2xl p-6 pt-24 flex flex-col justify-between border-l border-black/[0.06]"
            >
              <div className="space-y-4">
                <div className="pb-4 border-b border-black/[0.08]">
                  <span className="font-heading text-2xl tracking-[0.2em] uppercase text-[#1A2024]">
                    FLEUR
                  </span>
                  <p className="text-xs text-[#8E98A0] tracking-[0.15em] mt-1">
                    Haute Parfumerie
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2.5 text-xs tracking-[0.2em] font-medium text-[#1A2024] hover:text-warm-gold uppercase transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.08] space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A2024] text-[#F7F6F3] text-xs tracking-[0.15em] uppercase font-medium rounded-none hover:bg-black transition-colors"
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
