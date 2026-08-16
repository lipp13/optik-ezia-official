"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

interface FAQItem {
  question: string;
  answer: string;
  category: "Pemeriksaan & Lensa" | "Garansi & Servis" | "Layanan Perusahaan";
}

const FAQS: FAQItem[] = [
  {
    question: "Berapa lama proses pembuatan dan pemasangan lensa kacamata?",
    answer:
      "Untuk lensa standar single vision (minus, plus, atau silinder standar) umumnya dapat diproses cepat dalam waktu 30 hingga 60 menit di gerai kami yang memiliki laboratorium edging. Untuk lensa custom spesifik seperti progresif berteknologi tinggi, photochromic khusus, atau silinder tinggi, proses pengerjaan membutuhkan waktu 2-3 hari kerja untuk memastikan akurasi optikal absolut.",
    category: "Pemeriksaan & Lensa",
  },
  {
    question: "Apakah pemeriksaan refraksi mata di Optik Ezia dikenakan biaya?",
    answer:
      "Pemeriksaan refraksi mata 5-tahap standar Optik Ezia disediakan secara cuma-cuma (gratis) bagi pelanggan yang melakukan pemesanan kacamata atau penggantian lensa di seluruh cabang resmi kami.",
    category: "Pemeriksaan & Lensa",
  },
  {
    question: "Apakah saya bisa hanya mengganti lensa pada bingkai kacamata yang sudah saya miliki?",
    answer:
      "Tentu saja. Anda dapat membawa bingkai pribadi Anda ke cabang Optik Ezia. Refraksionis kami akan memeriksa kelayakan struktur bingkai terlebih dahulu, lalu melakukan pengukuran fokus (PD & fitting height) sebelum memotongkan lensa baru yang sesuai dengan kebutuhan mata Anda.",
    category: "Pemeriksaan & Lensa",
  },
  {
    question: "Bagaimana kebijakan garansi purna jual di Optik Ezia?",
    answer:
      "Setiap kacamata dari Optik Ezia disertai Garansi Adaptasi Refraksi selama 30 hari (gratis penyesuaian ukuran jika terasa pusing/kurang nyaman). Selain itu, kami memberikan Layanan Servis Seumur Hidup (Lifetime) mencakup gratis pembersihan ultrasonik, pengencangan baut, penggantian nosepad standar, dan penyetelan lekukan frame di seluruh cabang resmi.",
    category: "Garansi & Servis",
  },
  {
    question: "Bagaimana cara kerja sama program Corporate Eyecare untuk instansi / perusahaan?",
    answer:
      "Kami menyediakan program pemeriksaan mata on-site ke kantor perusahaan, voucher kesehatan mata karyawan dengan harga korporasi khusus, serta penagihan klaim fleksibel (asuransi / reimbursement). Silakan hubungi tim B2B kami melalui nomor WhatsApp Customer Service 0812-9066-5553.",
    category: "Layanan Perusahaan",
  },
  {
    question: "Apakah Optik Ezia melayani home visit / pemeriksaan di tempat tinggal?",
    answer:
      "Ya, kami memiliki layanan 'Ezia Eye Care Mobile' untuk pelanggan lansia atau individu yang membutuhkan pemeriksaan mata di rumah beserta pemilihan koleksi bingkai langsung di tempat dengan perjanjian terlebih dahulu.",
    category: "Layanan Perusahaan",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory relative border-t border-sand-border overflow-hidden" id="faq">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/50 border border-sand-border text-[10px] uppercase tracking-[0.2em] text-accent-terracotta mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pusat Bantuan & Edukasi</span>
          </div>

          <TextReveal
            as="h2"
            text="Pertanyaan yang Sering Diajukan"
            className="editorial-headline text-3xl sm:text-5xl text-charcoal"
          />
          <p className="text-sm sm:text-base font-light text-charcoal-muted mt-4 leading-relaxed">
            Informasi lengkap seputar alur pemeriksaan mata, proses lensa, jaminan garansi purna jual, dan program korporasi Optik Ezia.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-ivory-warm border border-sand-border transition-all duration-300 hover:border-charcoal/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-accent-terracotta shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-light text-charcoal font-display">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border border-sand-border flex items-center justify-center text-charcoal shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-charcoal text-ivory border-charcoal" : "bg-sand/30"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm font-light text-charcoal-muted leading-relaxed border-t border-sand-border/50 pl-14">
                        <p>{faq.answer}</p>
                        <span className="inline-block mt-3 px-2.5 py-1 bg-sand/60 text-charcoal-light text-[10px] uppercase tracking-wider font-mono">
                          {faq.category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
