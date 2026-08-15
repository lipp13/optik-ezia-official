"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Preload logo image first
    const img = new window.Image();
    img.src = "/images/logo.png";
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true); // Continue even if image fails

    // Ultra smooth progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a bit at 100% then start exit animation
          setTimeout(() => {
            setIsLoading(false);
          }, 800); // Increased wait time for better feeling
          return 100;
        }
        // Smoother increment with smaller steps
        const increment = Math.floor(Math.random() * 6) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 60); // Slightly slower for smoother feel

    // Safety timeout - force complete after 5 seconds
    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Ultra smooth curtain ease - butter smooth!
  const curtainEase = [0.83, 0, 0.17, 1]; // easeInOutQuint - even smoother!

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{ 
            y: "-100%",
            transition: {
              duration: 1.5, // Increased duration for ultra smooth
              ease: curtainEase,
            }
          }}
          className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#1a1816] via-[#121210] to-[#0a0a08] overflow-hidden touch-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Animated Grid Background - Hidden on small mobile */}
          <div className="absolute inset-0 opacity-[0.03] hidden xs:block">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Ambient Glow Orbs - Simplified on mobile */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 xs:w-96 xs:h-96 bg-accent-gold/20 rounded-full blur-[80px] xs:blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-56 h-56 xs:w-80 xs:h-80 bg-accent-terracotta/15 rounded-full blur-[60px] xs:blur-[100px]"
          />

          {/* Main Content - Will slide up with the curtain */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-full flex flex-col justify-between p-4 xs:p-6 sm:p-12 lg:p-16 select-none"
          >
            {/* Top Brand Bar */}
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: curtainEase }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-ivory/20 shadow-lg bg-black">
                  <Image
                    src="/images/logo.png"
                    alt="Ezia Optical"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-[0.28em] font-light text-ivory/90 font-display">
                  EZIA OPTICAL
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: curtainEase }}
                className="text-right"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/40 mb-1">
                  EST. INDONESIA
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-accent-gold/60">
                  MODERN EYEWEAR
                </div>
              </motion.div>
            </div>

            {/* Centerpiece - Logo & Typography */}
            <div className="flex flex-col items-center justify-center my-auto space-y-8 text-center">
              {/* Pulsing Logo with Glow - More Symmetric */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: curtainEase }}
                className="relative flex items-center justify-center"
              >
                {/* Outer Glow Ring - Perfectly Centered */}
                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 -m-10 bg-accent-gold/20 rounded-full blur-3xl"
                />

                {/* Logo Container - Perfect Square */}
                <div className="relative w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-ivory/20 shadow-2xl bg-gradient-to-br from-charcoal to-black flex items-center justify-center">
                  <div className="relative w-full h-full p-2">
                    {isImageLoaded ? (
                      <Image
                        src="/images/logo.png"
                        alt="Ezia Optical Logo"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 375px) 128px, (max-width: 640px) 144px, 160px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                  
                  {/* Shine Effect - Slower and More Subtle, hidden on mobile */}
                  <motion.div
                    animate={{
                      x: ["-150%", "250%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12 hidden xs:block"
                  />

                  {/* Pulsing Overlay - More Subtle */}
                  <motion.div
                    animate={{
                      opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent hidden xs:block"
                  />
                </div>
              </motion.div>

              {/* Brand Typography - More Balanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: curtainEase }}
                className="space-y-4 flex flex-col items-center"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.35em] uppercase text-ivory font-display text-center">
                  OPTIK EZIA
                </h2>
                <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-ivory/50 font-light text-center">
                  Precision Eyewear × Eye Care
                </p>
              </motion.div>

              {/* Loading Indicator - Smoother */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-2.5 justify-center"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-5 h-5 border-2 border-accent-gold/20 border-t-accent-gold rounded-full"
                />
                <span className="text-[10px] uppercase tracking-[0.26em] text-ivory/40 font-light">
                  Memuat Pengalaman
                </span>
              </motion.div>
            </div>

            {/* Bottom Progress Section */}
            <div className="space-y-4">
              {/* Progress Info */}
              <div className="flex items-baseline justify-between">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-ivory/40 font-light"
                >
                  Mempersiapkan Visual
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl sm:text-2xl font-light text-accent-gold tracking-wide font-mono"
                >
                  {progress}
                  <span className="text-sm text-ivory/40">%</span>
                </motion.span>
              </div>

              {/* Progress Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: curtainEase }}
                className="w-full h-[2px] bg-ivory/10 overflow-hidden relative origin-left"
              >
                {/* Progress Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-terracotta via-accent-gold to-accent-gold relative"
                  style={{ width: `${progress}%` }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent-gold/50 rounded-full blur-lg" />
                </motion.div>
              </motion.div>

              {/* Subtle instruction */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center text-[9px] uppercase tracking-[0.2em] text-ivory/20"
              >
                Tunggu Sebentar
              </motion.p>
            </div>
          </motion.div>

          {/* Curtain Bottom Shadow for depth - appears during exit */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
