"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Hero3DTextBackground } from "@/components/3d/Hero3DTextBackground";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt parallax for editorial hero visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll Parallax for background accents
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-ivory"
    >
      {/* 3D Floating Typography Background "EZIA OPTICAL" */}
      <Hero3DTextBackground />

      {/* Background Subtle Editorial Grid Lines */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#171715_1px,transparent_1px),linear-gradient(to_bottom,#171715_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-sand/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-charcoal/40" />
              <span className="editorial-tag text-charcoal-muted">
                {OPTIK_EZIA_CONFIG.tagline}
              </span>
            </motion.div>

            {/* Oversized Headline with Staggered Motion */}
            <div className="space-y-1">
              <TextReveal
                as="h1"
                text="SEE THE WORLD"
                className="editorial-headline text-4xl sm:text-6xl xl:text-7xl font-light text-charcoal"
                delay={0.15}
              />
              <TextReveal
                as="h1"
                text="DIFFERENTLY."
                className="editorial-headline text-4xl sm:text-6xl xl:text-7xl font-normal italic text-charcoal/85 font-serif"
                delay={0.3}
              />
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg font-light text-charcoal-muted max-w-xl leading-relaxed"
            >
              Optik Ezia menghadirkan kurasi kacamata, frame, lensa, sunglasses, dan softlens pilihan dengan layanan pemeriksaan mata serta fitting yang nyaman dan terpercaya.
            </motion.p>

            {/* Action CTAs with Magnetic Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <MagneticButton strength={0.25}>
                <Link
                  href="/stores"
                  className="btn-editorial-primary group w-full sm:w-auto shadow-sm"
                  data-cursor-text="LOKASI"
                >
                  <MapPin className="w-4 h-4 text-accent-gold" />
                  <span>Cari Cabang Terdekat</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <Link
                  href="/collection"
                  className="btn-editorial-outline group w-full sm:w-auto"
                  data-cursor-text="KOLEKSI"
                >
                  <span>Lihat Koleksi Eyewear</span>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="pt-6 border-t border-sand-border grid grid-cols-3 gap-6 text-charcoal-muted"
            >
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
            </motion.div>
          </motion.div>

          {/* Right Cinematic Editorial Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* 3D Perspective Card Container with Mouse Tilt Physics */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: cardX,
                y: cardY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-ivory-warm border border-sand-border p-4 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.06)] group"
            >
              {/* Top Editorial Ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-sand-border/70 text-[11px] uppercase tracking-[0.18em] text-charcoal-muted font-medium">
                <span>Kurasi Eyewear</span>
                <span className="text-accent-terracotta flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accent-gold animate-pulse" />
                  Ezia Collection
                </span>
              </div>

              {/* Main Editorial Photography with Reveal & Scale */}
              <div className="relative w-full h-[62%] sm:h-[65%] my-4 overflow-hidden bg-sand/30 border border-sand-border/50">
                <Image
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200"
                  alt="Optik Ezia Lifestyle Eyewear"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                
                {/* Floating Floating Layer Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-3 left-3 bg-ivory/90 backdrop-blur-md px-3 py-1.5 border border-sand-border text-[10px] uppercase tracking-wider text-charcoal font-semibold shadow-xs"
                >
                  Pure Craftsmanship
                </motion.div>
              </div>

              {/* Overlapping Product Inset Frame */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative bg-ivory border border-sand-border p-3.5 flex items-center justify-between shadow-xs -mt-2"
              >
                <div className="space-y-0.5">
                  <h4 className="text-sm font-light text-charcoal font-display">
                    Classic Panthos Frame
                  </h4>
                  <p className="text-[10px] text-charcoal-light uppercase tracking-wider">
                    Ergonomis • Ringan • Presisi
                  </p>
                </div>
                <Link
                  href="/collection"
                  className="p-2 bg-sand/60 text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
                  aria-label="Lihat Detail Koleksi"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Bottom Editorial Meta */}
              <div className="flex items-center justify-between pt-3 border-t border-sand-border/70 text-[10px] uppercase tracking-widest text-charcoal-light mt-3">
                <span>Pemeriksaan & Fitting</span>
                <span className="text-charcoal font-medium">Kenyamanan Maksimal</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
