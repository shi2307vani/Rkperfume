"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  Gift,
  HelpCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

const INQUIRY_TYPES = [
  { id: "recommendation", label: "Scent Recommendation" },
  { id: "order", label: "Order / Availability" },
  { id: "gifting", label: "Bulk / Wedding Gifting" },
  { id: "visit", label: "Boutique Visit Inquiry" },
];

const FAQS = [
  {
    q: "Can I test fragrances on my skin at the Tulshibaug boutique?",
    a: "Yes, absolutely! We encourage customers to test any of our Arabian attars, Eau de Parfums, or inspired impressions directly on skin or testing strips to see how the dry-down evolves with your natural body chemistry.",
  },
  {
    q: "Do you offer custom wedding or corporate gift boxes?",
    a: "Yes! We specialize in custom-branded perfume gift hampers, couple sets, and 4 x 20ml Discovery Boxes with bespoke wax seals and custom name tags for weddings, festivities, and corporate gifting.",
  },
  {
    q: "How fast is delivery within Pune and across India?",
    a: "Orders within Pune & PCMC are dispatched express for same-day or next-day delivery. Pan-India orders are dispatched via Bluedart/Delhivery and reach you within 3–5 business days.",
  },
  {
    q: "Where is the best place to park when visiting Tulshibaug?",
    a: "Since Tulshibaug is a vibrant pedestrian heritage market, we recommend parking 2-wheelers or 4-wheelers at the Aryan Parking (Mandai) or Babu Genu multi-level parking, just a 3-minute stroll from our boutique.",
  },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("recommendation");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 4000);
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name first.");
      return;
    }
    const topicLabel =
      INQUIRY_TYPES.find((t) => t.id === inquiryType)?.label || "Inquiry";
    const text = encodeURIComponent(
      `Hi RK Perfume!\n*Topic:* ${topicLabel}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone || "Not provided"}\n*Email:* ${formData.email || "Not provided"}\n*Message:* ${formData.message || "I would like to inquire about your perfume collection."}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#F7F6F3] text-[#1A2024] pt-28 sm:pt-32 pb-24">
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200/80 text-[#C5A059] text-[11px] uppercase tracking-[0.25em] font-medium mb-4 shadow-2xs">
            <Sparkles size={13} />
            Tulshibaug Flagship & Online Concierge
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wide font-normal mb-4">
            Connect With Our Perfumers
          </h1>
          <p className="text-xs sm:text-base text-[#5A646B] max-w-2xl mx-auto font-light leading-relaxed">
            Whether you seek personal fragrance recommendations, wedding gifting, or directions to our boutique in Tulshibaug Pune, we are here to assist you.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        {/* ========================================================= */}
        {/* 2. TOP SECTION: THE CONTACT & INQUIRY FORM               */}
        {/* ========================================================= */}
        <section className="bg-white border border-black/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Concierge Benefits & Direct Triggers */}
            <div className="lg:col-span-5 bg-[#1A2024] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              {/* Background ambient gold tint */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
                  Direct Boutique Access
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider mb-4 font-normal leading-tight">
                  Bespoke Fragrance Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#B8C2C9] leading-relaxed font-light mb-8">
                  Get in touch directly with our master perfumer Rakesh for tailored scent advice, seasonal blends, or order queries.
                </p>

                {/* Direct Action Cards */}
                <div className="space-y-4 mb-8">
                  {/* WhatsApp Quick Trigger */}
                  <a
                    href={BUSINESS_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 hover:border-emerald-500/60 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider font-semibold text-white">
                          Chat on WhatsApp
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-[11px] text-[#A2ACB3] mt-0.5 font-light">
                        Direct reply within 15 minutes &middot; +91 82828 25008
                      </p>
                    </div>
                  </a>

                  {/* Phone Quick Trigger */}
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 hover:border-[#C5A059]/60 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0 text-[#C5A059] group-hover:scale-105 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-white">
                        Call Store Desk
                      </span>
                      <p className="text-[11px] text-[#A2ACB3] mt-0.5 font-light">
                        {BUSINESS_INFO.phone} &middot; 10:00 AM &ndash; 9:00 PM
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-white">
                        Email Concierge
                      </span>
                      <p className="text-[11px] text-[#A2ACB3] mt-0.5 font-light">
                        {BUSINESS_INFO.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom Guarantee Strip */}
              <div className="pt-6 border-t border-white/10 relative z-10 flex items-center justify-between text-[11px] text-[#8E98A0]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>100% Genuine Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-[#C5A059]" />
                  <span>Pan-India Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Modern Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-2">
                Send an Inquiry
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-[#1A2024] font-normal mb-2">
                How Can We Help You?
              </h3>
              <p className="text-xs sm:text-sm text-[#5A646B] mb-6 font-light leading-relaxed">
                Choose your inquiry topic below, fill in your details, and submit or send directly via WhatsApp.
              </p>

              {/* Topic Selector Pills */}
              <div className="mb-6">
                <label className="block text-[11px] uppercase tracking-wider text-[#8E98A0] font-medium mb-2.5">
                  Select Inquiry Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setInquiryType(type.id)}
                      className={`px-3.5 py-2 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        inquiryType === type.id
                          ? "bg-[#1A2024] text-white font-medium shadow-xs"
                          : "bg-[#F7F6F3] text-[#5A646B] hover:text-[#1A2024] border border-black/[0.08]"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form or Success State */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 bg-emerald-50/70 border border-emerald-200 text-center py-12"
                  >
                    <CheckCircle2 size={42} className="text-emerald-700 mx-auto mb-3" />
                    <h4 className="font-heading text-xl uppercase tracking-wider text-[#1A2024] mb-2">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A646B] max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Our boutique team has received your message regarding &ldquo;{INQUIRY_TYPES.find((t) => t.id === inquiryType)?.label}&rdquo; and will respond shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Name & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#8E98A0] font-medium mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 bg-[#F7F6F3] border border-black/[0.1] text-xs sm:text-sm text-[#1A2024] placeholder-[#8E98A0] focus:outline-none focus:border-[#1A2024] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#8E98A0] font-medium mb-1.5">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-[#F7F6F3] border border-black/[0.1] text-xs sm:text-sm text-[#1A2024] placeholder-[#8E98A0] focus:outline-none focus:border-[#1A2024] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#8E98A0] font-medium mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 bg-[#F7F6F3] border border-black/[0.1] text-xs sm:text-sm text-[#1A2024] placeholder-[#8E98A0] focus:outline-none focus:border-[#1A2024] transition-colors"
                      />
                    </div>

                    {/* Message / Preferred Fragrance */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#8E98A0] font-medium mb-1.5">
                        Message / Fragrance Notes You Love
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you are looking for (e.g. I need a long-lasting woody oud scent for evening wear, or I want to order the 4x20ml Discovery Box)..."
                        className="w-full px-4 py-3 bg-[#F7F6F3] border border-black/[0.1] text-xs sm:text-sm text-[#1A2024] placeholder-[#8E98A0] focus:outline-none focus:border-[#1A2024] transition-colors resize-none"
                      />
                    </div>

                    {/* Action Buttons: Dual Option (WhatsApp / Submit) */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={handleSendViaWhatsApp}
                        className="flex-1 px-6 py-3.5 bg-emerald-800 text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-emerald-900 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <MessageCircle size={15} />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        type="submit"
                        className="px-6 py-3.5 bg-[#1A2024] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send size={13} />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. BELOW SECTION: INTERACTIVE MAP & SHOP DETAILS          */}
        {/* ========================================================= */}
        <section className="bg-white border border-black/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-black/[0.08] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] uppercase tracking-wider font-semibold mb-2 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open 7 Days a Week &middot; 10:00 AM &ndash; 9:00 PM</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl uppercase tracking-wide font-normal text-[#1A2024]">
                Visit Our Tulshibaug Boutique
              </h2>
            </div>
            <a
              href={BUSINESS_INFO.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A2024] text-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-black transition-colors shrink-0"
            >
              <Navigation size={14} />
              <span>Get Directions on Google Maps</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Interactive Embedded Google Map */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[440px] bg-[#F7F6F3] border border-black/[0.08] overflow-hidden group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.856!3d18.517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0659cd38f87%3A0x0!2sTulshibaug%2C%20Budhwar%20Peth%2C%20Pune!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Perfume Tulshibaug Store Location"
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 border border-black/10 shadow-xs pointer-events-none">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1A2024]">
                  Interactive Google Map &middot; Live View
                </span>
              </div>
            </div>

            {/* Shop Details Cards & Practical Visit Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {/* Address Card */}
              <div className="p-5 bg-[#F7F6F3] border border-black/[0.06]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] font-semibold block mb-0.5">
                      Flagship Boutique Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#1A2024] font-medium leading-relaxed">
                      {BUSINESS_INFO.address.full}
                    </p>
                    <p className="text-[11px] text-[#5A646B] mt-1 font-light">
                      Landmark: In the central Tulshibaug heritage market, near historic Ram Mandir, Budhwar Peth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-5 bg-[#F7F6F3] border border-black/[0.06]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Clock size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] font-semibold block mb-0.5">
                      Store Hours
                    </span>
                    <p className="text-xs sm:text-sm text-[#1A2024] font-medium">
                      {BUSINESS_INFO.hours.days}
                    </p>
                    <p className="text-xs text-[#5A646B] font-light mt-0.5">
                      {BUSINESS_INFO.hours.time} (Open on all public holidays & Sundays)
                    </p>
                  </div>
                </div>
              </div>

              {/* Helpline Card */}
              <div className="p-5 bg-[#F7F6F3] border border-black/[0.06]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Phone size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] font-semibold block mb-0.5">
                      Phone & Orders
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-xs sm:text-sm text-[#1A2024] font-semibold hover:text-[#C5A059] transition-colors block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#5A646B] mt-0.5 font-light">
                      Call for instant stock check or directions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parking & Market Guidance */}
              <div className="p-4 bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950 font-light leading-relaxed">
                <strong>Visitor Parking Tip:</strong> For easiest access, park at Mandai Aryan Multi-Level Parking or Babu Genu Ground and walk 3 minutes into Tulshibaug.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION                  */}
        {/* ========================================================= */}
        <section className="bg-white border border-black/[0.08] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-2">
              Help & Information
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-[#1A2024] font-normal">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-black/[0.07] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F6F3] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-medium text-[#1A2024] tracking-wide">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-[#8E98A0] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#1A2024]" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#5A646B] font-light leading-relaxed border-t border-black/[0.04] bg-[#F7F6F3]/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
