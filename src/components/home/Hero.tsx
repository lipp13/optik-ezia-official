"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for ambient elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 120, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const welcomeRotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const welcomeRotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const welcomeTranslateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const welcomeTranslateY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  // Card physics for Stage 2
  const cardRotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const cardRotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const cardX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth - 0.5);
    mouseY.set(e.clientY / innerHeight - 0.5);
  };

  // Scroll Progress Orchestration for 200vh pinned sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1 (Welcome Scene) transitions out on scroll [0 -> 0.45]
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.35, 0.48], [1, 0.7, 0]);
  const stage1Scale = useTransform(scrollYProgress, [0, 0.45], [1, 0.92]);
  const stage1Y = useTransform(scrollYProgress, [0, 0.45], [0, -50]);
  const stage1PointerEvents = useTransform(scrollYProgress, (v) => (v > 0.4 ? "none" : "auto"));

  // Stage 2 (Main Editorial Copy & Card) transitions in [0.45 -> 1.0]
  const stage2Opacity = useTransform(scrollYProgress, [0.42, 0.58, 1], [0, 1, 1]);
  const stage2Scale = useTransform(scrollYProgress, [0.42, 0.62], [0.95, 1]);
  const stage2Y = useTransform(scrollYProgress, [0.42, 0.62], [40, 0]);
  const stage2PointerEvents = useTransform(scrollYProgress, (v) => (v < 0.4 ? "none" : "auto"));

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[200vh] bg-ivory"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Subtle Ambient Editorial Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#171715_1px,transparent_1px),linear-gradient(to_bottom,#171715_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Ambient Soft Glow Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-sand/35 blur-[120px] pointer-events-none" />

        {/* ======================================================== */}
        {/* STAGE 1: SOFI-STYLE CLEAN CINEMATIC WELCOME              */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: stage1Opacity,
            scale: stage1Scale,
            y: stage1Y,
            pointerEvents: stage1PointerEvents as any,
          }}
          className="absolute inset-0 flex flex-col items-center justify-between pt-28 pb-12 px-6 sm:px-12 z-20"
        >
          {/* Refined Minimalist Category Tag (Properly Spaced Below Navbar) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sand/40 border border-sand-border text-[11px] uppercase tracking-[0.24em] text-charcoal-muted"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta animate-pulse" />
            <span>Optik Ezia • Indonesian Eyewear & Eye Care</span>
          </motion.div>

          {/* Grand Clean 3D Typography (No redundant logo box) */}
          <div
            className="my-auto flex flex-col items-center justify-center text-center select-none"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{
                rotateX: welcomeRotateX,
                rotateY: welcomeRotateY,
                x: welcomeTranslateX,
                y: welcomeTranslateY,
                transformStyle: "preserve-3d",
              }}
              className="space-y-4 will-change-transform flex flex-col items-center"
            >
              {/* Grand Elegant Title */}
              <div style={{ transform: "translateZ(50px)" }}>
                <h1 className="editorial-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-charcoal tracking-tight font-extralight uppercase leading-none">
                  EZIA OPTICAL
                </h1>
              </div>

              {/* Subtitle Tagline */}
              <div style={{ transform: "translateZ(25px)" }}>
                <p className="text-xs sm:text-sm md:text-base font-light tracking-[0.32em] uppercase text-accent-terracotta">
                  Modern Eyewear • Precision Eye Care
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Clean Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center space-y-2 text-charcoal-muted"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-mono text-charcoal-light">
              GULIR KE BAWAH UNTUK MENJELAJAH
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-charcoal/60" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ======================================================== */}
        {/* STAGE 2: EDITORIAL MAIN CONTENT ("SEE THE WORLD DIFF.")   */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: stage2Opacity,
            scale: stage2Scale,
            y: stage2Y,
            pointerEvents: stage2PointerEvents as any,
          }}
          className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 lg:px-12 z-30"
        >
          <div className="max-w-7xl mx-auto w-full pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              
              {/* Left Editorial Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-charcoal/40" />
                  <span className="editorial-tag text-charcoal-muted">
                    {OPTIK_EZIA_CONFIG.tagline}
                  </span>
                </div>

                {/* Oversized Headline */}
                <div className="space-y-1">
                  <h2 className="editorial-headline text-4xl sm:text-6xl xl:text-7xl font-light text-charcoal">
                    SEE THE WORLD
                  </h2>
                  <h2 className="editorial-headline text-4xl sm:text-6xl xl:text-7xl font-normal italic text-charcoal/85 font-serif">
                    DIFFERENTLY.
                  </h2>
                </div>

                {/* Supporting Copy */}
                <p className="text-base sm:text-lg font-light text-charcoal-muted max-w-xl leading-relaxed">
                  Optik Ezia menghadirkan kurasi kacamata, frame, lensa, sunglasses, dan softlens pilihan dengan layanan pemeriksaan mata serta fitting yang nyaman dan terpercaya.
                </p>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <MagneticButton strength={0.25}>
                    <Link
                      href="/stores"
                      className="btn-editorial-primary group w-full sm:w-auto shadow-xs"
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
              </div>

              {/* Right Cinematic Editorial Showcase Card */}
              <div className="lg:col-span-5 relative">
                <motion.div
                  style={{
                    rotateX: cardRotateX,
                    rotateY: cardRotateY,
                    x: cardX,
                    y: cardY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-ivory-warm border border-sand-border p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] group will-change-transform"
                >
                  {/* Top Editorial Ribbon */}
                  <div className="flex items-center justify-between pb-3 border-b border-sand-border/70 text-[11px] uppercase tracking-[0.18em] text-charcoal-muted font-medium">
                    <span>Kurasi Eyewear</span>
                    <span className="text-accent-terracotta flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-accent-gold" />
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
                    <div className="absolute bottom-3 left-3 bg-ivory/95 backdrop-blur-md px-3 py-1.5 border border-sand-border text-[10px] uppercase tracking-wider text-charcoal font-semibold shadow-xs">
                      Pure Craftsmanship
                    </div>
                  </div>

                  {/* Overlapping Product Inset Frame */}
                  <div className="relative bg-ivory border border-sand-border p-3.5 flex items-center justify-between shadow-xs -mt-2">
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
                  </div>

                  {/* Bottom Editorial Meta */}
                  <div className="flex items-center justify-between pt-3 border-t border-sand-border/70 text-[10px] uppercase tracking-widest text-charcoal-light mt-3">
                    <span>Pemeriksaan & Fitting</span>
                    <span className="text-charcoal font-medium">Kenyamanan Maksimal</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
