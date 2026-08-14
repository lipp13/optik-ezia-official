"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroKineticTextBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Buttery-smooth spring physics
  const springConfig = { damping: 28, stiffness: 140, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multi-axis 3D spatial rotation & displacement
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const rotateZ = useTransform(smoothX, [-0.5, 0.5], [-2, 2]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  // Secondary depth parallax layers
  const lensTranslateX = useTransform(smoothX, [-0.5, 0.5], [45, -45]);
  const lensTranslateY = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth - 0.5);
    mouseY.set(e.clientY / innerHeight - 0.5);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* 3D Spatial Master Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          rotateZ,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex flex-col items-center justify-center will-change-transform"
      >
        {/* Layer 1: Ambient Kinetic Floating Lens Rings & Optical Crosshairs */}
        <motion.div
          style={{
            x: lensTranslateX,
            y: lensTranslateY,
            transform: "translateZ(-80px)",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 sm:opacity-35"
        >
          <div className="relative w-[340px] h-[340px] sm:w-[580px] sm:h-[580px] rounded-full border border-charcoal/30 flex items-center justify-center">
            {/* Inner Rotating Dashed Optical Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="w-[82%] h-[82%] rounded-full border border-dashed border-accent-terracotta/40"
            />
            {/* Precision Axis Crosshairs */}
            <div className="absolute w-full h-[1px] bg-charcoal/20" />
            <div className="absolute h-full w-[1px] bg-charcoal/20" />
            <div className="absolute top-2 text-[8px] sm:text-[10px] font-mono tracking-widest text-charcoal/60 uppercase">
              AXIS • 180°
            </div>
            <div className="absolute right-3 text-[8px] sm:text-[10px] font-mono tracking-widest text-charcoal/60 uppercase">
              REFRACT • 0.00
            </div>
          </div>
        </motion.div>

        {/* Layer 2: Massive Multi-layered 3D Typography "EZIA OPTICAL" */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
          className="relative flex flex-col items-center justify-center text-center opacity-[0.09] sm:opacity-[0.14] group"
        >
          {/* Main Giant Lettering with Shimmering Gradient */}
          <span
            className="text-[16vw] lg:text-[19vw] font-black uppercase tracking-[0.12em] leading-none whitespace-nowrap font-display bg-[linear-gradient(110deg,#171715_20%,#8E5238_45%,#C2A478_55%,#171715_80%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer select-none"
            style={{
              WebkitTextStroke: "2.5px rgba(23, 23, 21, 0.75)",
              filter: "drop-shadow(0 16px 30px rgba(0,0,0,0.06))",
            }}
          >
            EZIA OPTICAL
          </span>

          {/* Depth Extrusion Shadow Layer */}
          <span
            aria-hidden="true"
            className="absolute top-2 sm:top-4 text-[16vw] lg:text-[19vw] font-black uppercase tracking-[0.12em] leading-none whitespace-nowrap font-display text-charcoal/20 select-none -z-10 blur-[1px]"
            style={{
              transform: "translateZ(-30px)",
            }}
          >
            EZIA OPTICAL
          </span>
        </motion.div>

        {/* Layer 3: Floating Foreground Optical Badge (Z: +90px) */}
        <motion.div
          style={{
            transform: "translateZ(90px)",
          }}
          animate={{
            y: [6, -6, 6],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="mt-2 sm:-mt-4 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-sand/30 border border-charcoal/15 backdrop-blur-xs opacity-60 sm:opacity-85 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-accent-terracotta animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.3em] uppercase text-charcoal">
            EST. INDONESIA • PRECISION EYEWEAR
          </span>
          <span className="text-[9px] font-mono text-charcoal/50">
            [ 54 □ 18 - 145 ]
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
