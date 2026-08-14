"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroKineticTextBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Smooth GPU 3D perspective transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth - 0.5);
    mouseY.set(e.clientY / innerHeight - 0.5);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full flex flex-col items-center justify-center text-center opacity-[0.06] sm:opacity-[0.08] will-change-transform"
      >
        {/* Massive 3D Watermark Text */}
        <span
          className="text-[15vw] lg:text-[18vw] font-black uppercase tracking-[0.14em] text-charcoal leading-none whitespace-nowrap font-display"
          style={{
            transform: "translateZ(30px)",
            WebkitTextStroke: "2px rgba(23, 23, 21, 0.6)",
          }}
        >
          EZIA OPTICAL
        </span>

        {/* Supporting 3D Depth Layer */}
        <span
          className="text-[2.2vw] font-semibold uppercase tracking-[0.4em] text-accent-terracotta -mt-[2vw]"
          style={{
            transform: "translateZ(60px)",
          }}
        >
          EST. INDONESIA • PRECISION EYEWEAR
        </span>
      </motion.div>
    </div>
  );
}
