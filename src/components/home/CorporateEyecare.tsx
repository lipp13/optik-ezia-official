"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, Users, ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { CORPORATE_SERVICES } from "@/data/services";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function CorporateEyecare() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal text-ivory relative overflow-hidden">
      {/* Subtle Background Glow & Pattern */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/10 border border-ivory/20 text-[10px] uppercase tracking-[0.2em] text-accent-gold">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B & Kemitraan Korporat</span>
            </div>

            <h2 className="editorial-headline text-3xl sm:text-5xl text-ivory leading-tight font-light">
              Solusi Kesehatan Mata untuk <span className="italic font-serif text-accent-gold">Perusahaan & Institusi.</span>
            </h2>

            <p className="text-sm sm:text-base font-light text-ivory/70 leading-relaxed">
              Optik Ezia menghadirkan program kemitraan resmi bagi korporasi, lembaga pendidikan, dan komunitas. Kami menyediakan layanan pemeriksaan refraksi <em>on-site</em>, skema tunjangan kacamata karyawan, hingga penyediaan kacamata pelindung kerja.
            </p>

            {/* Corporate Highlights Grid */}
            <div className="space-y-4 pt-4">
              {CORPORATE_SERVICES.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="p-5 bg-ivory/5 border border-ivory/10 hover:border-accent-gold/40 transition-colors flex items-start gap-4"
                >
                  <div className="p-2 bg-accent-gold/10 text-accent-gold shrink-0 mt-0.5">
                    {idx === 0 && <Users className="w-5 h-5" />}
                    {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 2 && <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-ivory tracking-wide uppercase font-display">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-ivory/60 mt-1 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={OPTIK_EZIA_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-gold text-charcoal font-semibold text-xs uppercase tracking-[0.16em] hover:bg-ivory transition-all shadow-md"
              >
                <span>Ajukan Kemitraan Korporat</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ivory/30 text-ivory font-medium text-xs uppercase tracking-[0.16em] hover:bg-ivory/10 transition-colors"
              >
                <span>Lihat Detail Layanan</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-ivory/20 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1200"
                alt="Corporate Eyecare Optik Ezia"
                fill
                className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-70" />

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-charcoal/90 backdrop-blur-md border border-ivory/15">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-accent-gold block">
                      Komitmen Mutu
                    </span>
                    <h4 className="text-sm font-light text-ivory mt-0.5">
                      Pemeriksaan Refraksi Terstandar & Peralatan Kalibrasi Presisi
                    </h4>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-accent-gold shrink-0 ml-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
