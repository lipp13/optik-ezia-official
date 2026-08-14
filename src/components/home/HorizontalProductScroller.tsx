"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";

export function HorizontalProductScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollTrackRef.current) return;
    const scrollAmount = scrollTrackRef.current.clientWidth * 0.75;
    if (direction === "left") {
      scrollTrackRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-ivory relative overflow-hidden border-t border-sand-border"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-sand-border">
          <div>
            <span className="editorial-tag text-accent-terracotta block mb-2">
              EKSPLORASI HORIZONTAL
            </span>
            <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
              Galeri Kurasi Eyewear
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 border border-sand-border text-charcoal hover:bg-sand/60 transition-colors rounded-none active:scale-95"
              aria-label="Scroll Kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 border border-sand-border text-charcoal hover:bg-sand/60 transition-colors rounded-none active:scale-95"
              aria-label="Scroll Kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollTrackRef}
        className="flex gap-8 overflow-x-auto px-6 sm:px-8 lg:px-12 pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PRODUCTS_DATA.map((product, idx) => (
          <div
            key={product.id}
            className="flex-none w-[300px] sm:w-[380px] lg:w-[440px] snap-start bg-ivory-warm border border-sand-border p-6 flex flex-col justify-between group hover:border-charcoal/40 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)]"
          >
            {/* Top Label */}
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-charcoal-light pb-4 border-b border-sand-border/60">
              <span>0{idx + 1} / {product.categoryLabel}</span>
              <span className="text-accent-terracotta font-medium">{product.type}</span>
            </div>

            {/* Product Centerpiece */}
            <div className="relative aspect-[4/3] w-full my-6 bg-ivory overflow-hidden flex items-center justify-center p-6 border border-sand-border/30">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-108 transition-transform duration-700 ease-editorial"
                sizes="(max-width: 768px) 300px, 440px"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-light text-charcoal font-display">
                {product.name}
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                {product.description}
              </p>

              <div className="pt-4 border-t border-sand-border/60 flex items-center justify-between">
                <Link
                  href={`/collection#${product.id}`}
                  className="text-xs uppercase tracking-[0.16em] font-semibold text-charcoal hover:text-accent-terracotta inline-flex items-center gap-1.5 group/btn"
                >
                  <span>Lihat Detail</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/stores"
                  className="text-[11px] uppercase tracking-wider text-charcoal-muted hover:text-charcoal border-b border-charcoal/20 pb-0.5"
                >
                  Cek Cabang
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
