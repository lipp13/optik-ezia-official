"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Motion values untuk smooth curtain effect
  const curtainProgress = useMotionValue(0);
  const curtainY = useTransform(curtainProgress, [0, 1], ["0%", "-100%"]);
  const contentOpacity = useTransform(curtainProgress, [0, 0.3], [1, 0]);
  const contentScale = useTransform(curtainProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    // Smooth progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            // Animate curtain up
            curtainProgress.set(1);
            // Remove loader after animation completes
            setTimeout(() => {
              setIsLoading(false);
            }, 1400); // Match with curtain animation duration
          }, 400);
          return 100;
        }
        // Smooth non-linear increment for organic feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [curtainProgress]);

  // Smooth ease for curtain
  const curtainEase = [0.76, 0, 0.24, 1]; // Custom easeInOutQuart

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          style={{
            y: isExiting ? curtainY : "0%",
          }}
          transition={{
            duration: 1.4,
            ease: curtainEase,
          }}
          className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#1a1816] via-[#121210] to-[#0a0a08] overflow-hidden"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Ambient Glow Orbs */}
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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/20 rounded-full blur-[120px]"
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-terracotta/15 rounded-full blur-[100px]"
          />

          {/* Main Content - Fades out during exit */}
          <motion.div
            style={{
              opacity: isExiting ? contentOpacity : 1,
              scale: isExiting ? contentScale : 1,
            }}
            className="relative h-full flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none"
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
              {/* Pulsing Logo with Glow */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: curtainEase }}
                className="relative"
              >
                {/* Outer Glow Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 -m-8 bg-accent-gold/20 rounded-full blur-3xl"
                />

                {/* Logo Container */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-ivory/20 shadow-2xl bg-gradient-to-br from-charcoal to-black">
                  <Image
                    src="/images/logo.png"
                    alt="Ezia Optical Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />

                  {/* Pulsing Overlay */}
                  <motion.div
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-accent-gold/30 to-transparent"
                  />
                </div>
              </motion.div>

              {/* Brand Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: curtainEase }}
                className="space-y-3"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.35em] uppercase text-ivory font-display">
                  OPTIK EZIA
                </h2>
                <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-ivory/50 font-light">
                  Precision Eyewear × Eye Care
                </p>
              </motion.div>

              {/* Loading Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-5 h-5 border-2 border-accent-gold/30 border-t-accent-gold rounded-full"
                />
                <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/40">
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

          {/* Curtain Edge Shadow for depth */}
          <motion.div
            style={{
              opacity: isExiting ? 1 : 0,
            }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
