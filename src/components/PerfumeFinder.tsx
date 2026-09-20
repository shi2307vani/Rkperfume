"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, Check, MessageCircle, Heart, Flame, Droplets, Gift } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

interface Recommendation {
  id: string;
  name: string;
  category: string;
  type: "Original" | "RK Inspired" | "Discovery Set";
  price: string;
  image: string;
  notes: string;
  matchScore: number;
  reason: string;
}

const RECOMMENDATIONS_DB: Record<string, Recommendation[]> = {
  "men-fresh": [
    {
      id: "aventus-rec",
      name: "Creed Aventus Impression",
      category: "Men's Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/blue_ocean.png",
      notes: "Pineapple, Birch Smoke, Bergamot, Ambergris",
      matchScore: 98,
      reason: "Crisp and commanding with legendary all-day sillage in Indian climate.",
    },
    {
      id: "sauvage-rec",
      name: "Dior Sauvage Impression",
      category: "Men's Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/products/49_watermarked.png",
      notes: "Calabrian Bergamot, Sichuan Pepper, Ambroxan",
      matchScore: 95,
      reason: "An ultra-versatile daily signature loved worldwide.",
    },
  ],
  "men-oud": [
    {
      id: "royal-oud-rec",
      name: "Royal Arabian Oud",
      category: "Arabian Attars",
      type: "Original",
      price: "₹899",
      image: "/images/arabian_attar.png",
      notes: "Cambodian Agarwood, Saffron, Taif Rose",
      matchScore: 99,
      reason: "Pure non-alcoholic oil with 14+ hour projection on cotton garments.",
    },
    {
      id: "tomford-oud-rec",
      name: "Tom Ford Oud Wood Impression",
      category: "Men's Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/luxury_gold.png",
      notes: "Rosewood, Cardamom, Chinese Pepper, Agarwood",
      matchScore: 94,
      reason: "Smoky, sophisticated, and perfect for evening festivities.",
    },
  ],
  "women-floral": [
    {
      id: "libre-rec",
      name: "YSL Libre Impression",
      category: "Women's Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/rose_petals.png",
      notes: "Moroccan Orange Blossom, French Lavender, Vanilla",
      matchScore: 97,
      reason: "Luminous, empowering, and exceptionally long-lasting.",
    },
    {
      id: "bloom-rec",
      name: "Gucci Bloom Impression",
      category: "Women's Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/fleur_product_azure_bloom.jpg",
      notes: "Natural Tuberose, Jasmine Sambac, Rangoon Creeper",
      matchScore: 93,
      reason: "Feels like stepping into an opulent garden of white blossoms.",
    },
  ],
  "women-gourmand": [
    {
      id: "khamrah-rec",
      name: "Lattafa Khamrah Qahwa Impression",
      category: "Women's Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/luxury_gold.png",
      notes: "Roasted Coffee, Candied Dates, Praline, Vanilla",
      matchScore: 99,
      reason: "Irresistibly addictive dessert-like warmth that turns heads.",
    },
    {
      id: "vanilla-rec",
      name: "Vanilla Absolute 100ml",
      category: "Imported Fragrances",
      type: "Original",
      price: "₹999",
      image: "/images/products/ChatGPT_Image_Jun_26_2026_05_57_05_PM_1.png",
      notes: "Madagascar Vanilla, Tonka Bean, Cashmere Musk",
      matchScore: 95,
      reason: "Pure comforting vanilla with a soft creamy trail.",
    },
  ],
  "unisex-gourmand": [
    {
      id: "khamrah-uni",
      name: "Lattafa Khamrah Qahwa Impression",
      category: "Unisex Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/luxury_gold.png",
      notes: "Cinnamon, Dates, Coffee, Amberwood",
      matchScore: 98,
      reason: "Our #1 best-selling unisex cold-weather and evening fragrance.",
    },
    {
      id: "baccarat-uni",
      name: "Baccarat Rouge 540 Impression",
      category: "Unisex Collection",
      type: "RK Inspired",
      price: "₹949",
      image: "/images/unisex_velvet.png",
      notes: "Saffron, Jasmine, Amberwood, Cedar",
      matchScore: 96,
      reason: "Airy, sweet, and unmistakable luxury aura.",
    },
  ],
  "gift-default": [
    {
      id: "discovery-set-rec",
      name: "Gentlemen Discovery Box (4 x 20ml)",
      category: "Gift Sets",
      type: "Discovery Set",
      price: "₹999",
      image: "/images/gift_premium.png",
      notes: "4 Bestsellers: Aventus, Sauvage, Oud Wood, Cool Water",
      matchScore: 100,
      reason: "Zero risk! Try 4 luxury 20ml bottles before buying full sizes.",
    },
    {
      id: "femme-discovery-rec",
      name: "Femme Discovery Box (4 x 20ml)",
      category: "Gift Sets",
      type: "Discovery Set",
      price: "₹999",
      image: "/images/products/20_ml_website_for_him_20_1.png",
      notes: "4 Bestsellers: Libre, Good Girl, Black Opium, Bloom",
      matchScore: 100,
      reason: "The ultimate gifting delight packed in luxury gold presentation box.",
    },
  ],
};

export default function PerfumeFinder() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    recipient: "men",
    mood: "fresh",
    occasion: "daily",
    budget: "under999",
  });

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const getResults = (): Recommendation[] => {
    if (answers.recipient === "gift") {
      return RECOMMENDATIONS_DB["gift-default"];
    }
    const key = `${answers.recipient}-${answers.mood}`;
    if (RECOMMENDATIONS_DB[key]) {
      return RECOMMENDATIONS_DB[key];
    }
    if (answers.recipient === "women") {
      return RECOMMENDATIONS_DB["women-floral"];
    }
    if (answers.recipient === "unisex") {
      return RECOMMENDATIONS_DB["unisex-gourmand"];
    }
    return RECOMMENDATIONS_DB["men-fresh"];
  };

  const restart = () => {
    setStep(1);
    setAnswers({
      recipient: "men",
      mood: "fresh",
      occasion: "daily",
      budget: "under999",
    });
  };

  const orderViaWhatsApp = (productName: string, price: string) => {
    const text = encodeURIComponent(
      `Hi RK Perfume! I used your Scent Finder tool and matched with "${productName}" (${price}). Can I place an order for this?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${text}`, "_blank");
  };

  return (
    <section id="perfume-finder" className="py-24 bg-white border-y border-black/[0.08]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 text-[#C5A059] text-[11px] uppercase tracking-[0.25em] font-medium mb-3">
            <Sparkles size={13} />
            <span>Interactive Fragrance Concierge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#1A2024] uppercase tracking-wide font-normal mb-3">
            Find Your Signature Scent
          </h2>
          <p className="text-xs sm:text-sm text-[#5A646B] leading-relaxed font-light">
            Answer 4 quick questions to discover handcrafted perfumes and pure attars calibrated to your skin, mood, and daily routine.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-[#F7F6F3] border border-black/[0.08] p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          {/* Step Progress Indicator */}
          {step <= 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#8E98A0] mb-2 font-medium">
                <span>Question {step} of 4</span>
                <span>{step === 1 ? "Recipient" : step === 2 ? "Scent Mood" : step === 3 ? "Occasion" : "Budget"}</span>
              </div>
              <div className="w-full h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1A2024] transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Question Steps */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-xl uppercase tracking-wider text-[#1A2024] mb-6 text-center sm:text-left">
                  Who are you choosing this fragrance for?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "men", title: "For Men", desc: "Bold, fresh, aquatic, woody and masculine impressions" },
                    { id: "women", title: "For Women", desc: "Elegant florals, sparkling fruits & sweet vanilla gourmands" },
                    { id: "unisex", title: "Unisex / Shared", desc: "Versatile, balanced, and modern amber & tea accords" },
                    { id: "gift", title: "A Gift / Surprise", desc: "Universally crowd-pleasing discovery sets with zero risk" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect("recipient", option.id)}
                      className={`p-5 text-left border transition-all cursor-pointer ${
                        answers.recipient === option.id
                          ? "bg-white border-[#1A2024] shadow-md ring-1 ring-[#1A2024]"
                          : "bg-white/70 border-black/10 hover:border-black/30 hover:bg-white"
                      }`}
                    >
                      <h4 className="font-heading text-base uppercase tracking-wide text-[#1A2024] mb-1">
                        {option.title}
                      </h4>
                      <p className="text-xs text-[#5A646B] font-light leading-relaxed">
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-xl uppercase tracking-wider text-[#1A2024] mb-6 text-center sm:text-left">
                  What olfactory mood do you prefer?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "fresh", title: "Fresh & Aquatic Citrus", desc: "Crisp bergamot, ocean breeze, cool mint, energizing citrus" },
                    { id: "oud", title: "Warm Oud & Exotic Woods", desc: "Rich Cambodian agarwood, saffron, ambergris, dark sandalwood" },
                    { id: "gourmand", title: "Sweet Vanilla & Coffee", desc: "Roasted beans, praline, candied dates, creamy Madagascar vanilla" },
                    { id: "floral", title: "Floral & Romantic Blossom", desc: "French rose, tuberose, night jasmine, radiant gardenia" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect("mood", option.id)}
                      className={`p-5 text-left border transition-all cursor-pointer ${
                        answers.mood === option.id
                          ? "bg-white border-[#1A2024] shadow-md ring-1 ring-[#1A2024]"
                          : "bg-white/70 border-black/10 hover:border-black/30 hover:bg-white"
                      }`}
                    >
                      <h4 className="font-heading text-base uppercase tracking-wide text-[#1A2024] mb-1">
                        {option.title}
                      </h4>
                      <p className="text-xs text-[#5A646B] font-light leading-relaxed">
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs uppercase tracking-[0.18em] text-[#8E98A0] hover:text-[#1A2024]"
                  >
                    &larr; Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-xl uppercase tracking-wider text-[#1A2024] mb-6 text-center sm:text-left">
                  Where will this fragrance be worn most?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "daily", title: "Everyday & Office", desc: "Subtle, professional, clean projection that lasts 8+ hours" },
                    { id: "evening", title: "Date Nights & Parties", desc: "Magnetic, warm, seductive trail that commands attention" },
                    { id: "festive", title: "Weddings & Festive", desc: "Royal, opulent sillage that fills the room" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect("occasion", option.id)}
                      className={`p-5 text-left border transition-all cursor-pointer ${
                        answers.occasion === option.id
                          ? "bg-white border-[#1A2024] shadow-md ring-1 ring-[#1A2024]"
                          : "bg-white/70 border-black/10 hover:border-black/30 hover:bg-white"
                      }`}
                    >
                      <h4 className="font-heading text-base uppercase tracking-wide text-[#1A2024] mb-1">
                        {option.title}
                      </h4>
                      <p className="text-xs text-[#5A646B] font-light leading-relaxed">
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs uppercase tracking-[0.18em] text-[#8E98A0] hover:text-[#1A2024]"
                  >
                    &larr; Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-xl uppercase tracking-wider text-[#1A2024] mb-6 text-center sm:text-left">
                  What is your budget preference?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "under999", title: "Under ₹999", desc: "Pocket perfumes, pure 12ml attars & best-value bottles" },
                    { id: "under1499", title: "₹999 – ₹1,499", desc: "50ml luxury Eau de Parfums & 4-piece Discovery Boxes" },
                    { id: "luxury", title: "Best Match (Any)", desc: "Show me the top recommended match regardless of price" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        handleSelect("budget", option.id);
                        setStep(5);
                      }}
                      className="p-5 text-left border bg-white/70 border-black/10 hover:border-black hover:bg-white transition-all cursor-pointer"
                    >
                      <h4 className="font-heading text-base uppercase tracking-wide text-[#1A2024] mb-1">
                        {option.title}
                      </h4>
                      <p className="text-xs text-[#5A646B] font-light leading-relaxed">
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={() => setStep(3)}
                    className="text-xs uppercase tracking-[0.18em] text-[#8E98A0] hover:text-[#1A2024]"
                  >
                    &larr; Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-black/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                      Curated For Your Profile
                    </span>
                    <h3 className="font-heading text-2xl uppercase tracking-wider text-[#1A2024]">
                      Your Perfect Matches
                    </h3>
                  </div>
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-[#5A646B] hover:text-[#1A2024] cursor-pointer"
                  >
                    <RotateCcw size={13} /> Retake Quiz
                  </button>
                </div>

                {/* Recommendations Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {getResults().map((rec) => (
                    <div
                      key={rec.id}
                      className="bg-white p-6 border border-black/[0.08] flex flex-col justify-between shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] uppercase tracking-wider font-semibold border border-emerald-200">
                            {rec.matchScore}% Match
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-[#8E98A0]">
                            {rec.type}
                          </span>
                        </div>

                        <div className="relative w-full aspect-video bg-[#F7F6F3] mb-4 overflow-hidden flex items-center justify-center p-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={rec.image}
                            alt={rec.name}
                            className="h-full w-auto object-contain"
                          />
                        </div>

                        <h4 className="font-heading text-lg uppercase tracking-wide text-[#1A2024] mb-1">
                          {rec.name}
                        </h4>
                        <p className="text-xs text-[#C5A059] font-medium mb-3">
                          Notes: {rec.notes}
                        </p>
                        <p className="text-xs text-[#5A646B] font-light leading-relaxed mb-4">
                          {rec.reason}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                        <span className="font-heading text-lg text-[#1A2024] font-semibold">
                          {rec.price}
                        </span>
                        <button
                          onClick={() => orderViaWhatsApp(rec.name, rec.price)}
                          className="px-4 py-2 bg-[#1A2024] text-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-black transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <MessageCircle size={13} className="text-emerald-400" />
                          <span>Order on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discovery Box Try-Before-You-Buy Banner */}
                <div className="p-6 bg-amber-50/80 border border-amber-200 text-center sm:text-left sm:flex items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-amber-900 font-semibold block mb-1">
                      Still Undecided?
                    </span>
                    <h4 className="font-heading text-base uppercase tracking-wider text-[#1A2024] mb-1">
                      Try our 4 x 20ml Discovery Box for ₹999
                    </h4>
                    <p className="text-xs text-[#5A646B] font-light">
                      Pick 4 fragrances from our collection and test them on your skin for 2 weeks before ordering a full bottle.
                    </p>
                  </div>
                  <Link
                    href="/collections"
                    className="mt-4 sm:mt-0 shrink-0 px-5 py-2.5 bg-[#1A2024] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors inline-block"
                  >
                    View Discovery Sets
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
