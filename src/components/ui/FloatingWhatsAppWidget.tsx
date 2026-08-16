"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, MapPin, ChevronRight, Phone, Clock, Sparkles } from "lucide-react";
import { STORES_DATA, OPTIK_EZIA_CONTACT } from "@/data/stores";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function FloatingWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show widget after user scrolls 200px or after 3 seconds
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Pop-up Consultation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-[340px] sm:w-[380px] bg-ivory border border-sand-border shadow-2xl overflow-hidden rounded-none"
          >
            {/* Panel Header */}
            <div className="p-5 bg-charcoal text-ivory flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-accent-gold">
                    Live Chat Optik Ezia
                  </span>
                </div>
                <h4 className="text-base font-light font-display tracking-wide">
                  Konsultasi & Layanan Cabang
                </h4>
                <p className="text-[11px] text-ivory/70 mt-1 font-light leading-relaxed">
                  Pilih cabang atau hubungi pusat bantuan untuk reservasi periksa mata & kacamata.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-ivory/70 hover:text-ivory hover:bg-ivory/10 rounded-full transition-colors"
                aria-label="Tutup Panel Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Panel Body: Quick Options */}
            <div className="p-4 bg-ivory-warm max-h-[380px] overflow-y-auto space-y-2.5">
              {/* Central Information */}
              <a
                href={OPTIK_EZIA_CONTACT.generalInfoWa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-ivory border border-sand-border hover:border-charcoal transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-charcoal text-accent-gold flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-charcoal block group-hover:text-accent-terracotta transition-colors">
                      Pusat Informasi & CS Ezia
                    </span>
                    <span className="text-[10px] text-charcoal-muted font-mono">
                      {OPTIK_EZIA_CONTACT.generalInfoPhone} • Fast Response
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-charcoal-muted group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Branch Selector Subtitle */}
              <div className="pt-2 pb-1">
                <span className="text-[9px] uppercase tracking-[0.18em] text-charcoal-light font-mono block">
                  Pilih Outlet Cabang Terdekat:
                </span>
              </div>

              {/* List of 5 Branches */}
              {STORES_DATA.map((store) => (
                <a
                  key={store.id}
                  href={store.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-ivory border border-sand-border hover:border-charcoal hover:bg-sand/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-sand/80 text-charcoal flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-accent-terracotta" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-charcoal block group-hover:text-accent-terracotta transition-colors">
                          {store.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-charcoal-muted line-clamp-1">
                        {store.city} • {store.phone}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-charcoal-muted group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>

            {/* Panel Footer */}
            <div className="p-3 bg-ivory border-t border-sand-border text-center">
              <span className="text-[10px] text-charcoal-muted flex items-center justify-center gap-1.5 font-light">
                <Clock className="w-3 h-3 text-accent-terracotta" />
                <span>Jam Pelayanan: Setiap Hari (09.00 - 21.00 WIB)</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 px-4 py-3 bg-charcoal text-ivory border border-sand-border shadow-xl hover:bg-charcoal-deep transition-colors group cursor-pointer"
        aria-label="Konsultasi WhatsApp Optik Ezia"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-accent-gold" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-charcoal" />
        </div>
        <span className="text-xs uppercase tracking-[0.14em] font-medium hidden sm:inline-block">
          {isOpen ? "Tutup Chat" : "Konsultasi Cepat"}
        </span>
      </motion.button>
    </div>
  );
}
