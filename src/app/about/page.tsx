"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, CheckCircle2, ShieldCheck, Eye, Award, HeartHandshake, Building2, MapPin } from "lucide-react";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";
import { TextReveal } from "@/components/ui/TextReveal";
import { motion } from "framer-motion";

export default function AboutPage() {
  const iconMap: Record<string, React.ElementType> = {
    Eye: Eye,
    HeartHandshake: HeartHandshake,
    Award: Award,
    ShieldCheck: ShieldCheck,
  };

  return (
    <div className="pt-28 pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-4xl pb-12 border-b border-sand-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-charcoal/20 bg-black shadow-xs">
              <Image
                src="/images/logo.png"
                alt="Optik Ezia Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="editorial-tag text-accent-terracotta">
              PROFIL PERUSAHAAN & IDENTITAS RESMI
            </span>
          </div>

          <TextReveal
            as="h1"
            text="Komitmen Optik Ezia dalam Pelayanan Kesehatan Mata Terpercaya."
            className="editorial-headline text-4xl sm:text-6xl text-charcoal"
          />
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-5 leading-relaxed">
            {OPTIK_EZIA_CONFIG.extendedAbout}
          </p>
        </div>

        {/* Corporate Numbers / Stats */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-sand-border">
          {OPTIK_EZIA_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-ivory-warm border border-sand-border">
              <span className="text-3xl sm:text-4xl font-light text-charcoal font-display block">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal mt-1 block">
                {stat.label}
              </span>
              <p className="text-[11px] text-charcoal-muted mt-1 leading-normal font-light">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Mission Section */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-sand-border">
          <div className="lg:col-span-5 space-y-6">
            <span className="editorial-tag text-accent-terracotta">
              01 / ARAH & TUJUAN KORPORASI
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Visi & Komitmen Kami
            </h2>
            <div className="p-7 bg-ivory-warm border-l-4 border-accent-terracotta border-sand-border space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-charcoal block">
                Visi Perusahaan
              </span>
              <p className="text-sm font-light text-charcoal-muted leading-relaxed italic font-serif">
                "{OPTIK_EZIA_CONFIG.vision}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="editorial-tag text-accent-terracotta">
              MISI & STANDAR OPERASIONAL
            </span>
            <h3 className="editorial-headline text-2xl sm:text-3xl text-charcoal">
              Langkah Nyata Pelayanan Optometri
            </h3>
            <div className="space-y-4">
              {OPTIK_EZIA_CONFIG.mission.map((m, idx) => (
                <div key={idx} className="p-5 bg-ivory-warm border border-sand-border flex items-start gap-4">
                  <span className="text-xs font-mono text-accent-terracotta font-semibold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-light">
                    {m}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-20 border-b border-sand-border">
          <div className="max-w-2xl mb-14">
            <span className="editorial-tag text-accent-terracotta block mb-2">
              02 / NILAI-NILAI UTAMA (CORE VALUES)
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Prinsip Dasar Setiap Pelayanan Kami
            </h2>
            <p className="text-sm font-light text-charcoal-muted mt-3">
              Empat pilar nilai yang menjadi pedoman tim Optik Ezia dalam melayani setiap individu, keluarga, dan mitra korporat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPTIK_EZIA_CONFIG.coreValues.map((val, idx) => {
              const IconComp = iconMap[val.icon] || Eye;
              return (
                <div
                  key={idx}
                  className="p-7 bg-ivory-warm border border-sand-border hover:border-charcoal/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-sand/70 flex items-center justify-center mb-6 text-accent-terracotta">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm uppercase tracking-wider font-semibold text-charcoal mb-2 font-display">
                      {val.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-sand-border/60 text-[10px] uppercase tracking-widest text-charcoal-light font-mono">
                    Pilar 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heritage & Standards Visual Showcase */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-sand-border">
          <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden border border-sand-border shadow-xs">
            <Image
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200"
              alt="Outlet Optik Ezia"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-tag text-accent-terracotta">
              03 / FASILITAS & PENGALAMAN OFF-LINE
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Pengalaman Outlet yang Nyaman & Lengkap
            </h2>
            <p className="text-sm sm:text-base font-light text-charcoal-muted leading-relaxed">
              Setiap cabang Optik Ezia dilengkapi dengan ruang refraksi yang bersih, display frame yang tertata rapi, dan fasilitas konsultasi personal. Kami ingin memastikan pengalaman berkunjung ke optik adalah momen yang menyenangkan dan menenangkan.
            </p>
            <p className="text-sm sm:text-base font-light text-charcoal-muted leading-relaxed">
              Mulai dari penyetelan ulang posisi frame, pergantian bantalan hidung (nosepad), hingga pembersihan menyeluruh menggunakan alat ultrasonik, seluruhnya kami berikan dengan sepenuh hati.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/stores" className="btn-editorial-primary inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-gold" />
                <span>Lihat Jaringan Cabang</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-editorial-outline inline-flex items-center gap-2">
                <span>Standar Layanan Refraksi</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Corporate Inquiries & Official Social Media */}
        <div className="mt-20 p-10 bg-charcoal text-ivory border border-sand-border space-y-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/10 text-[10px] uppercase tracking-widest text-accent-gold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Kemitraan & Hubungan Kelembagaan</span>
            </div>
            <h3 className="editorial-headline text-3xl sm:text-4xl text-ivory font-light">
              Tertarik Bekerjasama dengan Optik Ezia?
            </h3>
            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-2xl font-light">
              Kami membuka peluang kerjasama pemeriksaan mata massal untuk perusahaan, sekolah, institusi, maupun komunitas. Hubungi tim representatif kami melalui saluran resmi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 relative z-10">
            <a
              href={OPTIK_EZIA_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-gold text-charcoal font-semibold text-xs uppercase tracking-[0.16em] hover:bg-ivory transition-all shadow-md"
            >
              <span>Hubungi Kontak Resmi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={OPTIK_EZIA_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ivory/30 text-ivory font-medium text-xs uppercase tracking-[0.16em] hover:bg-ivory/10 transition-colors"
            >
              <Instagram className="w-4 h-4 text-accent-gold" />
              <span>Instagram {OPTIK_EZIA_CONFIG.instagram.handle}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

