"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Instagram, Sparkles, Building2, Wrench, Clock, FileCheck } from "lucide-react";
import { SERVICES_PROCESS, LENS_OPTIONS, WARRANTY_POLICIES, CORPORATE_SERVICES } from "@/data/services";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";
import { TextReveal } from "@/components/ui/TextReveal";

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-4xl pb-12 border-b border-sand-border">
          <span className="editorial-tag text-accent-terracotta block mb-3">
            STANDAR LAYANAN & OPTOMETRI
          </span>
          <TextReveal
            as="h1"
            text="Layanan Pemeriksaan Mata, Lensa Spesialis & Fitting Presisi"
            className="editorial-headline text-4xl sm:text-6xl text-charcoal"
          />
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-5 leading-relaxed">
            Optik Ezia memadukan keahlian pemeriksaan refraksi terstandar, teknologi lensa bersertifikasi, dan layanan purna jual berkelanjutan untuk menjamin kenyamanan penglihatan Anda setiap hari.
          </p>
        </div>

        {/* 5-Step Process Breakdown */}
        <div className="py-20 space-y-16 border-b border-sand-border">
          <div className="max-w-3xl">
            <span className="editorial-tag text-accent-terracotta block mb-2">
              ALUR 5 TAHAPAN KONSULTASI
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Standar Prosedur Pelayanan Optik Ezia
            </h2>
            <p className="text-sm font-light text-charcoal-muted mt-3">
              Setiap pengunjung di seluruh cabang kami melewati 5 tahapan terstruktur guna menghasilkan resep lensa yang paling presisi dan frame yang ergonomis.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES_PROCESS.map((step) => (
              <div
                key={step.stepNumber}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ivory-warm border border-sand-border p-6 sm:p-10 hover:border-charcoal/30 transition-all hover-lift"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-accent-terracotta bg-sand/60 px-3 py-1">
                      TAHAP {step.stepNumber}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-light font-medium">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-charcoal font-display">
                    {step.title}
                  </h3>

                  <p className="text-sm font-light text-charcoal-muted leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 pt-3 text-xs text-charcoal border-t border-sand-border/80">
                    {step.detailPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-terracotta shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden bg-sand/40 border border-sand-border">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-charcoal/90 text-ivory text-[9px] uppercase tracking-widest px-3 py-1 backdrop-blur-xs">
                    Standar Optometri Optik Ezia
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lens Innovations Portfolio */}
        <div className="py-20 border-b border-sand-border">
          <div className="max-w-3xl mb-14">
            <span className="editorial-tag text-accent-terracotta block mb-2">
              INOVASI & KURASI LENSA
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Teknologi Lensa untuk Segala Kebutuhan
            </h2>
            <p className="text-sm font-light text-charcoal-muted mt-3">
              Kami bekerjasama dengan produsen lensa optik bersertifikasi untuk memberikan proteksi maksimal dari sinar biru, radiasi UV, hingga kenyamanan fokus multi-jarak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LENS_OPTIONS.map((lens) => (
              <div
                key={lens.id}
                id={lens.id}
                className="bg-ivory-warm border border-sand-border p-8 flex flex-col justify-between space-y-6 hover:border-charcoal/30 transition-all hover-lift"
              >
                <div>
                  <span className="editorial-tag text-accent-terracotta block mb-2">
                    {lens.tag}
                  </span>
                  <h3 className="text-xl font-light text-charcoal font-display mb-3">
                    {lens.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed mb-6 font-light">
                    {lens.description}
                  </p>

                  <ul className="space-y-2 text-xs text-charcoal border-t border-sand-border pt-4">
                    {lens.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-terracotta shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/stores"
                  className="btn-editorial-primary text-center text-[11px] py-3"
                >
                  Konsultasi di Cabang
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Lifetime Aftersales & Warranty Policies */}
        <div className="py-20 border-b border-sand-border">
          <div className="max-w-3xl mb-14">
            <span className="editorial-tag text-accent-terracotta block mb-2">
              JAMINAN KUALITAS & PURNA JUAL
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Garansi & Layanan Purna Jual Seumur Hidup
            </h2>
            <p className="text-sm font-light text-charcoal-muted mt-3">
              Hubungan kami dengan Anda tidak berhenti saat kacamata selesai dibuat. Kami memberikan perlindungan dan servis berkala tanpa biaya tambahan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WARRANTY_POLICIES.map((policy, idx) => (
              <div
                key={idx}
                className="p-7 bg-ivory-warm border border-sand-border flex flex-col justify-between space-y-4 hover:border-charcoal/30 transition-all hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-accent-terracotta uppercase tracking-wider font-semibold bg-sand/60 px-2 py-0.5">
                      {policy.duration}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-accent-terracotta" />
                  </div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-charcoal font-display">
                    {policy.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-2 leading-relaxed font-light">
                    {policy.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 text-[10px] uppercase tracking-widest text-charcoal-light font-mono">
                  Benefit Bebas Biaya
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Eyecare Feature */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/50 border border-sand-border text-[10px] uppercase tracking-widest text-accent-terracotta">
              <Building2 className="w-3.5 h-3.5" />
              <span>Program Korporat & Institusi</span>
            </div>

            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              {CORPORATE_SERVICES.title}
            </h2>

            <p className="text-sm sm:text-base font-light text-charcoal-muted leading-relaxed">
              {CORPORATE_SERVICES.description}
            </p>

            <div className="space-y-4 pt-2">
              {CORPORATE_SERVICES.benefits.map((b, i) => (
                <div key={i} className="p-5 bg-ivory-warm border border-sand-border flex items-start gap-4">
                  <span className="text-xs font-mono text-accent-terracotta font-semibold mt-0.5">
                    0{i + 1}.
                  </span>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                      {b.title}
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-1 leading-relaxed font-light">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={OPTIK_EZIA_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary inline-flex items-center gap-2"
              >
                <span>Ajukan Kerjasama Korporat</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden border border-sand-border shadow-xs">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1200"
              alt="Corporate Eyecare Optik Ezia"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Consultation Guidance Banner */}
        <div className="mt-12 bg-charcoal text-ivory p-8 sm:p-12 text-center space-y-6">
          <span className="editorial-tag text-accent-gold">
            KUNJUNGAN CABANG RESMI
          </span>
          <h2 className="editorial-headline text-3xl sm:text-4xl text-ivory max-w-xl mx-auto font-light">
            Ingin Melakukan Pemeriksaan Mata?
          </h2>
          <p className="text-sm font-light text-ivory/70 max-w-lg mx-auto leading-relaxed">
            Kunjungi cabang Optik Ezia terdekat untuk pemeriksaan ketajaman mata dan pemilihan model frame yang tepat tanpa harus antre lama.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/stores"
              className="px-6 py-3.5 bg-accent-gold text-charcoal font-semibold text-xs uppercase tracking-[0.16em] hover:bg-ivory transition-all inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-charcoal" />
              <span>Lihat Lokasi & Reservasi Cabang</span>
            </Link>

            <a
              href={OPTIK_EZIA_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-ivory/30 text-ivory font-medium text-xs uppercase tracking-[0.16em] hover:bg-ivory/10 transition-colors inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-accent-gold" />
              <span>Instagram @optikezia</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
