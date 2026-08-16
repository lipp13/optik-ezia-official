"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { motion } from "framer-motion";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function BrandStory() {
  const iconMap: Record<string, React.ElementType> = {
    Eye: Eye,
    HeartHandshake: HeartHandshake,
    Award: Award,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory-warm border-t border-b border-sand-border/50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-sand/20 rounded-full blur-3xl animate-float-gentle opacity-40" />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-glow opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="editorial-tag text-accent-terracotta">
                TENTANG KAMI & FILOSOFI
              </span>
            </div>
            <TextReveal
              as="h2"
              text="Membangun Kepercayaan Melalui Presisi & Kenyamanan Penglihatan."
              className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-charcoal"
            />
          </motion.div>

          <motion.div 
            className="lg:col-span-7 space-y-6 text-charcoal-muted font-light leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base sm:text-lg">
              {OPTIK_EZIA_CONFIG.extendedAbout}
            </p>
            <p className="text-sm sm:text-base">
              Setiap gerai Optik Ezia dirancang sebagai ruang konsultasi yang hangat dan profesional. Kami memadukan alat refraksi terkalibrasi dengan kurasi bingkai yang beragam untuk memastikan setiap pelanggan mendapatkan pengalaman optik yang personal dan memuaskan.
            </p>
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {OPTIK_EZIA_CONFIG.coreValues.map((value, idx) => {
            const IconComponent = iconMap[value.icon] || Eye;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-7 bg-ivory border border-sand-border hover:border-charcoal/30 transition-all hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-sand/60 flex items-center justify-center mb-5 text-accent-terracotta">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-charcoal mb-2 font-display">
                    {value.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-sand-border/50 text-[10px] uppercase tracking-widest text-charcoal-light font-mono">
                  Pilar 0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Asymmetric Visual Grid with ImageReveal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 lg:mt-20 items-center">
          {/* Main Large Image */}
          <motion.div 
            className="md:col-span-7 relative group overflow-hidden bg-sand/30 border border-sand-border hover:border-accent-terracotta/30 transition-all hover-lift"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageReveal
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200"
              alt="Suasana Outlet & Layanan Optik Ezia"
              aspectRatio="aspect-[4/3]"
            />
            <div className="p-6 bg-ivory/95 backdrop-blur-sm flex items-center justify-between border-t border-sand-border text-xs tracking-wider">
              <div>
                <span className="font-semibold uppercase text-charcoal block">Standar Outlet & Konsultasi</span>
                <span className="text-charcoal-light">Pemeriksaan refraksi mata akurat dan fitting kacamata</span>
              </div>
              <span className="editorial-tag text-charcoal">OPTIK EZIA</span>
            </div>
          </motion.div>

          {/* Secondary Stacked Content & Detail Card */}
          <div className="md:col-span-5 flex flex-col space-y-8">
            <motion.div 
              className="relative aspect-[5/4] w-full overflow-hidden bg-sand/30 border border-sand-border group hover:border-accent-gold/30 transition-all hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageReveal
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000"
                alt="Frame Kacamata Berkualitas"
                aspectRatio="aspect-[5/4]"
              />
              <div className="absolute top-4 right-4 bg-charcoal/90 text-ivory text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-xs z-10 group-hover:bg-accent-terracotta transition-colors">
                Kurasi Portofolio
              </div>
            </motion.div>

            {/* Feature Checklist */}
            <motion.div 
              className="p-8 bg-ivory border border-sand-border space-y-4 hover:border-charcoal/20 transition-all hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal flex items-center gap-2">
                <span className="w-8 h-[1px] bg-accent-terracotta"></span>
                Standar Pelayanan Optik Ezia
              </h4>
              <ul className="space-y-3 text-xs text-charcoal-muted">
                {OPTIK_EZIA_CONFIG.mission.slice(0, 3).map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start gap-3 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-sand-border">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal hover:text-accent-terracotta transition-colors group"
                >
                  <span>Selengkapnya Profil Perusahaan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

