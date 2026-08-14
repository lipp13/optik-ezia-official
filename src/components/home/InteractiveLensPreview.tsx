"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Sun, Monitor, Shield, Eye, ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface LensMode {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  tintOverlay: string;
  filterEffect: string;
  benefitBadge: string;
}

const LENS_MODES: LensMode[] = [
  {
    id: "clear",
    name: "Standar Single Vision",
    subtitle: "Kejernihan Alami",
    description: "Koreksi refraksi presisi untuk penglihatan minus, plus, atau silinder dengan kejernihan maksimal.",
    icon: Eye,
    tintOverlay: "bg-transparent",
    filterEffect: "contrast-100 brightness-100",
    benefitBadge: "Natural Clarity",
  },
  {
    id: "blue-light",
    name: "Anti-Blue Light Filter",
    subtitle: "Proteksi Layar Digital",
    description: "Lapisan pemblokir spektrum sinar biru dari komputer dan smartphone untuk mengurangi mata lelah.",
    icon: Monitor,
    tintOverlay: "bg-amber-500/15 mix-blend-color",
    filterEffect: "contrast-105 brightness-98 sepia-[0.18]",
    benefitBadge: "99% Blue Filter",
  },
  {
    id: "photochromic",
    name: "Photochromic Transition",
    subtitle: "Adaptif Terhadap Sinar UV",
    description: "Lensa otomatis berubah menjadi gelap saat terkena sinar matahari luar ruangan dan kembali jernih di dalam ruangan.",
    icon: Sun,
    tintOverlay: "bg-[#171715]/45 mix-blend-multiply",
    filterEffect: "contrast-115 brightness-90",
    benefitBadge: "UV-Activated Darkening",
  },
  {
    id: "polarized",
    name: "Polarized Anti-Glare",
    subtitle: "Eliminasi Silau Pantulan",
    description: "Memotong pantulan cahaya horizontal dari aspal dan permukaan air untuk kenyamanan berkendara serta outdoor.",
    icon: Shield,
    tintOverlay: "bg-emerald-950/30 mix-blend-overlay",
    filterEffect: "contrast-125 saturate-110",
    benefitBadge: "Glare-Free Vision",
  },
];

export function InteractiveLensPreview() {
  const [activeMode, setActiveMode] = useState<LensMode>(LENS_MODES[1]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory-warm border-t border-b border-sand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="editorial-tag text-accent-terracotta block mb-2">
            SIMULATOR LENSA INTERAKTIF
          </span>
          <TextReveal
            as="h2"
            text="Eksplorasi Teknologi Lensa Optik Ezia"
            className="editorial-headline text-3xl sm:text-5xl text-charcoal"
          />
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-4">
            Pilih mode lensa di bawah ini dan geser kursor di atas visual untuk membandingkan simulasi penglihatan secara langsung.
          </p>
        </div>

        {/* Interactive Simulator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive Visual Canvas with Split Slider */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="relative aspect-[16/10] w-full overflow-hidden bg-sand/30 border border-sand-border shadow-md select-none cursor-ew-resize group"
            >
              {/* Background Base Image (Normal Sight) */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200"
                  alt="Simulasi Lensa Optik Ezia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Filtered Split Overlay (With Active Lens Filter) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
              >
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200"
                    alt="Simulasi Lensa Terfilter"
                    fill
                    className={`object-cover ${activeMode.filterEffect} transition-all duration-500`}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className={`absolute inset-0 ${activeMode.tintOverlay} transition-colors duration-500`} />
                </div>

                {/* Badge on the Filtered Side */}
                <div className="absolute top-4 right-4 bg-charcoal/90 text-ivory text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-xs z-10 shadow-xs">
                  {activeMode.benefitBadge}
                </div>
              </div>

              {/* Normal Sight Label */}
              <div className="absolute top-4 left-4 bg-ivory/90 text-charcoal text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-xs z-10 border border-sand-border shadow-xs">
                Pandangan Normal
              </div>

              {/* Interactive Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-ivory shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-ivory border-2 border-charcoal flex items-center justify-center text-charcoal shadow-md">
                  <span className="text-[9px] font-bold tracking-tighter">⇄</span>
                </div>
              </div>

              {/* Drag Prompt */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-charcoal/80 text-ivory text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs opacity-75 group-hover:opacity-100 transition-opacity">
                Geser Kursor Untuk Simulasi Lensa
              </div>
            </div>
          </div>

          {/* Mode Selector Buttons & Detail Description */}
          <div className="lg:col-span-5 space-y-4">
            {LENS_MODES.map((mode) => {
              const isActive = activeMode.id === mode.id;
              const Icon = mode.icon;
              return (
                <motion.div
                  key={mode.id}
                  onClick={() => setActiveMode(mode)}
                  whileHover={{ x: 4 }}
                  className={`p-5 border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                    isActive
                      ? "bg-ivory border-charcoal shadow-xs"
                      : "bg-ivory/50 border-sand-border hover:border-charcoal/30"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeLensIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent-terracotta"
                    />
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isActive ? "text-accent-terracotta" : "text-charcoal-light"}`} />
                      <h3 className={`text-sm font-semibold tracking-wide uppercase ${
                        isActive ? "text-charcoal" : "text-charcoal-muted"
                      }`}>
                        {mode.name}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-mono">
                      {mode.subtitle}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs text-charcoal-muted leading-relaxed mt-2 pt-2 border-t border-sand-border/60"
                      >
                        {mode.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <div className="pt-4">
              <MagneticButton strength={0.15}>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-charcoal hover:text-accent-terracotta transition-colors group"
                >
                  <span>Pelajari Seluruh Opsi Lensa & Pemeriksaan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
