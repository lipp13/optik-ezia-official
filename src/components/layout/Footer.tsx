"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, MapPin, ShieldCheck, Mail } from "lucide-react";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";
import { STORES_DATA } from "@/data/stores";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-12 border-t border-charcoal-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          {/* Brand Col with Logo */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-10 h-10 rounded-md overflow-hidden border border-ivory/20 bg-black">
                  <Image
                    src="/images/logo.png"
                    alt="Ezia Optical Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-light tracking-[0.25em] uppercase text-ivory font-display block">
                    {OPTIK_EZIA_CONFIG.name}
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-charcoal-light block -mt-0.5">
                    EZIA OPTICAL INDONESIA
                  </span>
                </div>
              </div>
              <p className="text-sm font-light text-charcoal-subtle leading-relaxed max-w-md mb-8">
                {OPTIK_EZIA_CONFIG.shortDescription}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs tracking-wider text-charcoal-light">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              <span>Pemeriksaan Mata & Layanan Optik Terpercaya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-gold">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-subtle tracking-wide">
              <li>
                <Link href="/collection" className="hover:text-ivory transition-colors">
                  Koleksi Eyewear
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-ivory transition-colors">
                  Pemeriksaan & Lensa
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-ivory transition-colors">
                  Lokasi Cabang
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ivory transition-colors">
                  Tentang Optik Ezia
                </Link>
              </li>
            </ul>
          </div>

          {/* Known Branch Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-gold">
              Area Cabang
            </h4>
            <ul className="space-y-3 text-xs text-charcoal-subtle tracking-wide">
              {STORES_DATA.map((store) => (
                <li key={store.id}>
                  <Link
                    href={`/stores#${store.id}`}
                    className="hover:text-ivory transition-colors flex items-center justify-between group"
                  >
                    <span>{store.area} ({store.city})</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Media */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-accent-gold">
              Media Sosial Resmi
            </h4>
            <div className="space-y-3 text-xs text-charcoal-subtle">
              <a
                href={OPTIK_EZIA_CONFIG.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ivory transition-colors text-ivory"
              >
                <Instagram className="w-4 h-4 text-accent-gold" />
                <span>{OPTIK_EZIA_CONFIG.instagram.handle}</span>
              </a>
              {OPTIK_EZIA_CONFIG.tiktok && (
                <a
                  href={OPTIK_EZIA_CONFIG.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-ivory transition-colors text-ivory"
                >
                  <span className="text-accent-gold font-mono text-xs font-bold">♪</span>
                  <span>TikTok {OPTIK_EZIA_CONFIG.tiktok.handle}</span>
                </a>
              )}
              {OPTIK_EZIA_CONFIG.linktree && (
                <a
                  href={OPTIK_EZIA_CONFIG.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-ivory transition-colors text-[11px] text-accent-gold underline underline-offset-4"
                >
                  <span>Linktree Resmi Cabang ↗</span>
                </a>
              )}
              <p className="text-[11px] text-charcoal-light leading-relaxed">
                Kunjungi kanal resmi kami untuk informasi terkini dan konsultasi kacamata.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-charcoal-light gap-4">
          <p>© {new Date().getFullYear()} {OPTIK_EZIA_CONFIG.name}. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center space-x-6">
            <span>Layanan Pelanggan</span>
            <span>Informasi Produk</span>
            <a
              href={OPTIK_EZIA_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory transition-colors"
            >
              Instagram @optikezia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
