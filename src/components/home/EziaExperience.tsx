"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_PROCESS } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function EziaExperience() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = SERVICES_PROCESS[activeStepIndex];

  return (
    <section className="py-24 sm:py-32 bg-ivory relative border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="editorial-tag text-accent-terracotta block mb-2">
            PENGALAMAN LAYANAN
          </span>
          <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
            Alur Layanan Kacamata di Optik Ezia
          </h2>
          <p className="text-base font-light text-charcoal-muted mt-4">
            Tahapan terpadu mulai dari pengecekan mata, pemilihan bentuk frame yang pas, hingga penyetelan kenyamanan pakai.
          </p>
        </div>

        {/* Interactive Sticky Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Step Navigation Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICES_PROCESS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-6 border transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? "bg-ivory-warm border-charcoal shadow-xs"
                      : "bg-ivory border-sand-border hover:border-charcoal/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-mono text-accent-terracotta">
                      TAHAP {step.stepNumber}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-light">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-light tracking-wide font-display ${
                    isActive ? "text-charcoal font-normal" : "text-charcoal-muted"
                  }`}>
                    {step.title}
                  </h3>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-sand-border space-y-3">
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-1.5 text-xs text-charcoal">
                        {step.detailPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-terracotta shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Stage Visual Showcase */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="bg-ivory-warm border border-sand-border p-6 sm:p-8 space-y-6">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/40 border border-sand-border">
                <Image
                  src={activeStep.image}
                  alt={activeStep.title}
                  fill
                  className="object-cover transition-all duration-700 ease-editorial"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-charcoal/90 text-ivory text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-xs">
                  TAHAP {activeStep.stepNumber} • {activeStep.subtitle}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-sand-border">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-charcoal-light block">
                    Layanan Optik Ezia
                  </span>
                  <span className="text-xs font-semibold text-charcoal uppercase tracking-wide">
                    {activeStep.title}
                  </span>
                </div>

                <Link
                  href="/stores"
                  className="btn-editorial-primary text-[11px] py-3 px-5 group"
                >
                  <span>Kunjungi Cabang</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
