"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function StoreInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="store" className="section-cream py-24 sm:py-32 pt-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-warm-gold text-xs font-medium tracking-[0.3em] uppercase">
            Visit Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 text-text-primary tracking-tight">
            Our <span className="italic">Store</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Come experience our luxurious collection in person. We&apos;re open
            7 days a week.
          </p>
          <div className="w-12 h-[1px] bg-warm-gold/40 mx-auto mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-cream overflow-hidden"
          >
            <div className="relative w-full h-[400px] lg:h-full min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.856!3d18.517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0659cd38f87%3A0x0!2sTulshibaug%2C%20Budhwar%20Peth%2C%20Pune!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Perfume Store Location"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Store Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5"
          >
            {/* Address */}
            <div className="card-cream p-6 flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center group-hover:bg-charcoal group-hover:scale-105 transition-all duration-300">
                <MapPin className="text-warm-gold" size={22} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Address</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="card-cream p-6 flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center group-hover:bg-charcoal group-hover:scale-105 transition-all duration-300">
                <Phone className="text-warm-gold" size={22} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Phone</h3>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-warm-gold text-sm hover:text-warm-gold-light transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="card-cream p-6 flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center group-hover:bg-charcoal group-hover:scale-105 transition-all duration-300">
                <Mail className="text-warm-gold" size={22} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-warm-gold text-sm hover:text-warm-gold-light transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="card-cream p-6 flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center group-hover:bg-charcoal group-hover:scale-105 transition-all duration-300">
                <Clock className="text-warm-gold" size={22} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Working Hours</h3>
                <p className="text-text-secondary text-sm">
                  {BUSINESS_INFO.hours.days}
                </p>
                <p className="text-warm-gold text-sm font-medium">
                  {BUSINESS_INFO.hours.time}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn-primary flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={16} />
                Call
              </motion.a>
              <motion.a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Navigation size={16} />
                Directions
              </motion.a>
              <motion.a
                href={`${BUSINESS_INFO.social.whatsapp}?text=Hi RK Perfume! I would like to inquire about your perfume collection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 text-sm !border-[#25D366]/40 !text-[#25D366] hover:!bg-[#25D366]/10 hover:!border-[#25D366]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={16} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
