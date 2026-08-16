"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

interface Testimonial {
  name: string;
  role: string;
  branch: string;
  comment: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Amanda Saraswati",
    role: "Dosen & Peneliti",
    branch: "Optik Ezia 5 (Pondok Cina)",
    comment:
      "Pemeriksaan refraksinya sangat teliti dan detail. Lensa anti-blue light yang disarankan sangat membantu kenyamanan mata saya saat berjam-jam menatap layar laptop dan membaca jurnal.",
    rating: 5,
  },
  {
    name: "Dimas Pratama",
    role: "Arsitek / Desainer",
    branch: "Optik Ezia 9 (Sentul City)",
    comment:
      "Koleksi frame Titanium di Optik Ezia Sentul sangat berkelas dan minimalis. Penyetelan nosepad dan lekuk gagang kacamata pas di wajah tanpa menekan pelipis. Pelayanan ramah bintang lima!",
    rating: 5,
  },
  {
    name: "Jessica Novita",
    role: "Executive Professional",
    branch: "Optik Ezia 15 (Gading Serpong)",
    comment:
      "Layanan aftersales-nya luar biasa. Setiap kali kacamata longgar atau kotor, saya bisa mampir ke outlet untuk pembersihan ultrasonik dan servis gratis. Sangat recommended!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-warm border-t border-sand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="editorial-tag text-accent-terracotta block mb-2">
            KEPERCAYAAN PELANGGAN
          </span>
          <TextReveal
            as="h2"
            text="Pengalaman Nyata Bersama Optik Ezia"
            className="editorial-headline text-3xl sm:text-5xl text-charcoal"
          />
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-4">
            Dedikasi kami terhadap ketajaman penglihatan dan estetika kacamata tercermin dari kepuasan ribuan pelanggan di setiap cabang.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * idx, duration: 0.6 }}
              className="bg-ivory border border-sand-border p-8 flex flex-col justify-between hover:border-charcoal/40 transition-colors shadow-xs"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-accent-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-sand-border" />
                </div>

                <p className="text-sm font-light text-charcoal leading-relaxed italic mb-8">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-sand-border pt-4">
                <span className="text-base font-light text-charcoal font-display block">
                  {t.name}
                </span>
                <span className="text-[11px] text-charcoal-muted block">
                  {t.role}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-accent-terracotta font-mono font-medium mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{t.branch}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
