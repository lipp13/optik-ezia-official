"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Instagram } from "lucide-react";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-ivory text-charcoal border-t border-sand-border relative overflow-hidden">
      {/* Subtle pulsing warm glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sand/50 blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <span className="editorial-tag text-accent-terracotta block mb-4">
          LANGKAH AWAL KENYAMANAN PENGLIHATAN
        </span>
        
        <div className="space-y-1 max-w-4xl mx-auto mb-6">
          <TextReveal
            as="h2"
            text="YOUR NEXT FRAME"
            className="editorial-headline text-4xl sm:text-6xl lg:text-7xl text-charcoal"
          />
          <TextReveal
            as="h2"
            text="STARTS HERE."
            className="editorial-headline text-4xl sm:text-6xl lg:text-7xl italic font-serif text-charcoal/80"
            delay={0.2}
          />
        </div>

        <p className="text-base sm:text-lg font-light text-charcoal-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Kunjungi cabang Optik Ezia terdekat untuk pemeriksaan mata dan pemilihan kacamata yang nyaman sesuai kebutuhan Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.25}>
            <Link
              href="/stores"
              className="btn-editorial-primary w-full sm:w-auto px-9 py-4 group shadow-sm"
              data-cursor-text="LOKASI"
            >
              <MapPin className="w-4 h-4 text-accent-gold" />
              <span>Cari Cabang Terdekat</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <a
              href={OPTIK_EZIA_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline w-full sm:w-auto px-9 py-4 group"
            >
              <Instagram className="w-4 h-4 text-accent-terracotta" />
              <span>Instagram {OPTIK_EZIA_CONFIG.instagram.handle}</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
