"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { HeroEyewearCanvas } from "@/components/3d/HeroEyewearCanvas";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function Hero() {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-ivory">
      {/* Background Subtle Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#171715_1px,transparent_1px),linear-gradient(to_bottom,#171715_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-charcoal/40" />
              <span className="editorial-tag text-charcoal-muted">
                {OPTIK_EZIA_CONFIG.tagline}
              </span>
            </div>

            {/* Oversized Headline with TextReveal */}
            <div className="space-y-1">
              <TextReveal
                as="h1"
                text="SEE THE WORLD"
                className="editorial-headline text-4xl sm:text-6xl xl:text-7xl font-light text-charcoal"
                delay={0.1}
              />
              <TextReveal
                as="h1"
                text="DIFFERENTLY."
                className="editorial-headline text-4xl sm:text-6xl xl:text-7xl font-normal italic text-charcoal/85 font-serif"
                delay={0.25}
              />
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg font-light text-charcoal-muted max-w-xl leading-relaxed">
              Optik Ezia menghadirkan kurasi kacamata, frame, lensa, sunglasses, dan softlens pilihan dengan layanan pemeriksaan mata serta fitting yang nyaman dan terpercaya.
            </p>

            {/* Action CTAs with Magnetic Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <MagneticButton strength={0.2}>
                <Link
                  href="/stores"
                  className="btn-editorial-primary group w-full sm:w-auto"
                  data-cursor-text="LOKASI"
                >
                  <MapPin className="w-4 h-4 text-accent-gold" />
                  <span>Cari Cabang Terdekat</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <Link
                  href="/collection"
                  className="btn-editorial-outline group w-full sm:w-auto"
                  data-cursor-text="KOLEKSI"
                >
                  <span>Lihat Koleksi Eyewear</span>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </MagneticButton>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 border-t border-sand-border grid grid-cols-3 gap-6 text-charcoal-muted">
              <div>
                <span className="block text-sm font-semibold text-charcoal tracking-wide uppercase">Pemeriksaan</span>
                <span className="text-[11px] text-charcoal-light">Evaluasi refraksi mata</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-charcoal tracking-wide uppercase">Kurasi Frame</span>
                <span className="text-[11px] text-charcoal-light">Berbagai model & gaya</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-charcoal tracking-wide uppercase">Fitting Nyaman</span>
                <span className="text-[11px] text-charcoal-light">Penyesuaian proporsi wajah</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Accent with Frame Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-sand/50 blur-3xl pointer-events-none" />

            <div className="w-full relative z-10 rounded-2xl border border-sand-border/70 bg-ivory-warm/40 p-4 sm:p-6 backdrop-blur-xs shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between pb-3 border-b border-sand-border/50 text-[11px] uppercase tracking-[0.16em] text-charcoal-muted font-medium">
                <span>Optik Ezia Eyewear</span>
                <span className="text-accent-terracotta">Interactive 3D</span>
              </div>

              {/* 3D Canvas */}
              <HeroEyewearCanvas />

              <div className="flex items-center justify-between pt-3 border-t border-sand-border/50 text-[11px] text-charcoal-light">
                <span>Kurasi Frame & Lensa</span>
                <Link href="/collection" className="hover:text-charcoal font-medium transition-colors">
                  Lihat Koleksi →
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
