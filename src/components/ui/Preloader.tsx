"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 350);
          return 100;
        }
        // Smooth non-linear increment
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-[#121210] text-ivory flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-auto"
        >
          {/* Top Brand Bar */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="relative w-8 h-8 rounded-sm overflow-hidden border border-ivory/20">
                <Image
                  src="/images/logo.png"
                  alt="Ezia Optical"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-light text-ivory/80 font-display">
                EZIA OPTICAL
              </span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] uppercase tracking-[0.2em] text-ivory/50"
            >
              EST. INDONESIA
            </motion.span>
          </div>

          {/* Centerpiece Animated Logo & Typography */}
          <div className="flex flex-col items-center justify-center my-auto space-y-6 text-center">
            {/* Pulsing Glowing Logo Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-ivory/20 shadow-[0_0_40px_rgba(255,255,255,0.08)] bg-black"
            >
              <Image
                src="/images/logo.png"
                alt="Ezia Optical Logo"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent-gold/10 pointer-events-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-1.5"
            >
              <h2 className="text-xl sm:text-2xl font-light tracking-[0.3em] uppercase text-ivory font-display">
                OPTIK EZIA
              </h2>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                Modern Optical × Precision Eyewear
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="space-y-3">
            <div className="flex items-baseline justify-between text-xs font-mono">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/50">
                MEMPERSIAPKAN PENGALAMAN VISUAL
              </span>
              <span className="text-base font-light text-accent-gold tracking-wider">
                {progress}%
              </span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-[2px] bg-ivory/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-accent-gold"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
