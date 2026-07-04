"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-dark py-24 sm:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Contact{" "}
            <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray max-w-xl mx-auto text-base sm:text-lg">
            Have a question about a fragrance? Want to place a bulk order?
            We&apos;d love to hear from you.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="luxury-card p-8 sm:p-10 gold-glow relative overflow-hidden">
            {/* Success state */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="text-gold mx-auto mb-4" size={48} />
                <h3 className="text-white text-xl font-heading font-semibold mb-2">
                  Thank You!
                </h3>
                <p className="text-gray">
                  We&apos;ve received your inquiry. We&apos;ll get back to you
                  shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray/50 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40"
                    size={18}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray/50 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray/50 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-4 text-gold/40"
                    size={18}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full bg-dark-lighter border border-dark-border rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray/50 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full btn-gold flex items-center justify-center gap-2 text-base !py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Inquiry
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
