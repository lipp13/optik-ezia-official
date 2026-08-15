"use client";

import React from "react";
import Link from "next/link";
import { Eye, Glasses, Wrench, HeartHandshake, MapPin, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { motion } from "framer-motion";

export function WhyOptikEzia() {
  const values = [
    {
      icon: Eye,
      title: "Pemeriksaan Ketajaman Mata",
      description: "Pengecekan refraksi secara teliti untuk kenyamanan membaca, bekerja, dan beraktivitas.",
    },
    {
      icon: Glasses,
      title: "Pilihan Frame & Lensa Lengkap",
      description: "Koleksi frame optikal, kacamata hitam, lensa anti-radiasi, hingga softlens untuk berbagai kebutuhan.",
    },
    {
      icon: Wrench,
      title: "Penyetelan & Fitting Kacamata",
      description: "Penyesuaian sudut bantalan hidung dan gagang agar kacamata terpasang pas dan nyaman.",
    },
    {
      icon: HeartHandshake,
      title: "Konsultasi Ramah & Terpercaya",
      description: "Tim Optik Ezia siap membantu Anda memilih bentuk kacamata yang sesuai dengan proporsi wajah.",
    },
  ];

  const stats = [
    { value: 15, suffix: "+", label: "Lokasi Cabang", sublabel: "Di berbagai kota" },
    { value: 1000, suffix: "+", label: "Pilihan Frame", sublabel: "Model & gaya beragam" },
    { value: 100, suffix: "%", label: "Pemeriksaan Gratis", sublabel: "Evaluasi ketajaman mata" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ivory-warm border-b border-sand-border/50 relative overflow-hidden">
      {/* Subtle Background Ambient Effects */}
      <GradientOrb size="lg" color="gold" position={{ top: "15%", right: "8%" }} blur="heavy" />
      <GradientOrb size="md" color="sand" position={{ bottom: "25%", left: "12%" }} blur="heavy" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="editorial-tag text-accent-terracotta block mb-2">
            NILAI & KOMITMEN
          </span>
          <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
            Pelayanan Optik yang Nyaman dan Terpercaya
          </h2>
        </div>

        {/* Stats Showcase with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-sand-border">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-8 bg-ivory/70 border border-sand-border hover:border-accent-terracotta/30 transition-all duration-500 hover-lift group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent-terracotta/20 to-accent-gold/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                {idx === 0 && <MapPin className="w-6 h-6 text-accent-terracotta" />}
                {idx === 1 && <Glasses className="w-6 h-6 text-accent-terracotta" />}
                {idx === 2 && <Award className="w-6 h-6 text-accent-gold" />}
              </div>
              <div className="text-5xl sm:text-6xl font-light text-charcoal mb-2 gradient-text">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-sm font-medium uppercase tracking-wider text-charcoal mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-charcoal-light">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-ivory border border-sand-border flex flex-col justify-between space-y-6 hover:border-charcoal/20 transition-all duration-500 hover-lift group"
              >
                <div>
                  <div className="w-10 h-10 bg-sand/60 flex items-center justify-center mb-6 text-accent-terracotta group-hover:bg-accent-terracotta group-hover:text-ivory transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-charcoal mb-2 font-display group-hover:text-accent-terracotta transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 text-[10px] uppercase tracking-widest text-charcoal-light">
                  Komitmen Optik Ezia
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
