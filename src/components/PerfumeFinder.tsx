"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, Check, MessageCircle, Heart, Flame, Droplets, Gift, ShoppingBag } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

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
      name: "ESSPRIVE Aventus",
      category: "Men's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_aventus.jpg",
      notes: "Pineapple, Birch Smoke, Bergamot, Ambergris",
      matchScore: 98,
      reason: "Crisp and commanding with legendary all-day sillage in Indian climate.",
    },
    {
      id: "sauvage-rec",
      name: "ESSPRIVE Sauvage",
      category: "Men's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_sauvage.jpg",
      notes: "Calabrian Bergamot, Sichuan Pepper, Ambroxan",
      matchScore: 95,
      reason: "An ultra-versatile daily signature loved worldwide.",
    },
  ],
  "men-oud": [
    {
      id: "oud-wood-rec",
      name: "ESSPRIVE Oud Wood",
      category: "Unisex Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_oud_wood.jpg",
      notes: "Rosewood, Cardamom, Chinese Pepper, Agarwood",
      matchScore: 99,
      reason: "Pure opulent woods with 14+ hour projection.",
    },
    {
      id: "eros-rec",
      name: "ESSPRIVE Eros",
      category: "Men's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_eros.jpg",
      notes: "Mint Leaves, Green Apple, Tonka Bean, Vanilla",
      matchScore: 94,
      reason: "Luminous, sensual, and perfect for evening festivities.",
    },
  ],
  "women-floral": [
    {
      id: "flora-rec",
      name: "ESSPRIVE Flora",
      category: "Women's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_flora.jpg",
      notes: "White Gardenia, Solar Jasmine, Pear Blossom, Brown Sugar",
      matchScore: 97,
      reason: "Feels like stepping into an opulent garden of white blossoms.",
    },
    {
      id: "bright-crystal-rec",
      name: "ESSPRIVE Bright Crystal",
      category: "Women's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_bright_crystal.jpg",
      notes: "Frosted Yuzu, Pomegranate, Peony, Lotus Flower",
      matchScore: 93,
      reason: "Enthralling and voluptuous freshness with delicate florals.",
    },
  ],
  "women-gourmand": [
    {
      id: "black-opium-rec",
      name: "ESSPRIVE Black Opium",
      category: "Women's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_black_opium.jpg",
      notes: "Roasted Black Coffee, Jasmine, Bitter Almond, Vanilla",
      matchScore: 99,
      reason: "Irresistibly addictive dessert-like warmth that turns heads.",
    },
    {
      id: "coco-m-rec",
      name: "ESSPRIVE Coco M",
      category: "Women's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_coco_m.jpg",
      notes: "Turkish Rose, Jasmine, Orange, Bourbon Vanilla",
      matchScore: 96,
      reason: "A timeless, sophisticated amber floral icon.",
    },
  ],
  "unisex-gourmand": [
    {
      id: "rouge-540-rec",
      name: "ESSPRIVE Rouge 540",
      category: "Unisex Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_rouge_540.jpg",
      notes: "Saffron, Jasmine, Amberwood, Cedar",
      matchScore: 98,
      reason: "Airy, sweet, and unmistakable luxury aura.",
    },
    {
      id: "bleu-rec",
      name: "ESSPRIVE Bleu",
      category: "Men's Collection",
      type: "RK Inspired",
      price: "₹599 - ₹649",
      image: "/images/products/essprive_bleu.jpg",
      notes: "Grapefruit, Dry Cedar, Sandalwood, Frankincense",
      matchScore: 96,
      reason: "An invigorating clean trail of cedar and fresh grapefruit zest.",
    },
  ],
  "gift-default": [
    {
      id: "discovery-set-rec",
      name: "Gentlemen Discovery Box (4 x 20ml)",
      category: "Gift Sets",
      type: "Discovery Set",
      price: "₹599 - ₹649",
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
      price: "₹599 - ₹649",
      image: "/images/gift_premium.png",
      notes: "4 Bestsellers: Libre, Good Girl, Black Opium, Bloom",
      matchScore: 100,
      reason: "The ultimate gifting delight packed in luxury gold presentation box.",
    },
  ],
};

export default function PerfumeFinder() {
  const { addToCart, openCart } = useCart();
  const [step, setStep] = useState(1);
  const [addedRecId, setAddedRecId] = useState<string | null>(null);
  const [addedDiscovery, setAddedDiscovery] = useState(false);
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

  const handleAddToCart = (rec: Recommendation) => {
    addToCart({
      id: rec.id,
      name: rec.name,
      price: 599,
      displayPrice: "₹599",
      size: "50 ml / 2 OZ",
      image: rec.image,
    });
    setAddedRecId(rec.id);
    openCart();
    setTimeout(() => {
      setAddedRecId(null);
    }, 2000);
  };

  const handleAddDiscoveryBox = () => {
    addToCart({
      id: "discovery-box-4x20ml",
      name: "ESSPRIVE 4 x 20ml Discovery Box",
      price: 599,
      displayPrice: "₹599",
      size: "4 x 20 ml Flacons",
      image: "/images/gift_premium.png",
    });
    setAddedDiscovery(true);
    openCart();
    setTimeout(() => {
      setAddedDiscovery(false);
    }, 2000);
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
                    { id: "standard", title: "₹599 – ₹649 Range", desc: "All 50ml luxury Extrait de Parfums & 4-piece Discovery Boxes" },
                    { id: "luxury", title: "Best Match", desc: "Show me the top recommended match tailored to your scent preferences" },
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

                      <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
                        <div className="flex items-baseline justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="font-heading text-lg sm:text-xl text-[#1A2024] font-semibold">
                              {rec.price}
                            </span>
                            <span className="text-xs text-[#8E98A0] line-through">
                              ₹899 - ₹999
                            </span>
                          </div>
                          <span className="text-[10px] uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 font-medium">
                            Free Delivery
                          </span>
                        </div>

                        {/* Dual Action: Luxury Add to Cart + WhatsApp */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAddToCart(rec)}
                            className="py-3 px-3 bg-[#1A2024] text-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                          >
                            {addedRecId === rec.id ? (
                              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                                <Check size={14} /> ADDED
                              </span>
                            ) : (
                              <>
                                <ShoppingBag size={14} className="text-[#C5A059]" />
                                <span>ADD TO CART</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={() => orderViaWhatsApp(rec.name, rec.price)}
                            className="py-3 px-3 border border-black/15 bg-white text-[#1A2024] text-xs uppercase tracking-[0.14em] font-medium hover:bg-black/[0.04] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <MessageCircle size={14} className="text-emerald-600 shrink-0" />
                            <span>WhatsApp</span>
                          </button>
                        </div>
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
                      Try our 4 x 20ml Discovery Box for ₹599 - ₹649
                    </h4>
                    <p className="text-xs text-[#5A646B] font-light">
                      Pick 4 fragrances from our collection and test them on your skin for 2 weeks before ordering a full bottle.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 shrink-0 flex flex-col sm:flex-row items-center gap-2.5">
                    <button
                      onClick={handleAddDiscoveryBox}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#1A2024] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      {addedDiscovery ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <Check size={14} /> ADDED TO CART
                        </span>
                      ) : (
                        <>
                          <ShoppingBag size={14} className="text-[#C5A059]" />
                          <span>ADD TO CART (₹599)</span>
                        </>
                      )}
                    </button>
                    <Link
                      href="/collections"
                      className="w-full sm:w-auto px-4 py-2.5 border border-black/20 text-[#1A2024] text-xs uppercase tracking-[0.18em] font-medium hover:bg-black/5 transition-colors inline-block text-center"
                    >
                      View Sets
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
