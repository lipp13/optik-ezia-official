"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "terracotta" | "gold" | "olive" | "sand";
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  blur?: "light" | "medium" | "heavy";
  animate?: boolean;
}

export function GradientOrb({
  size = "md",
  color = "terracotta",
  position = { top: "50%", left: "50%" },
  blur = "heavy",
  animate = true,
}: GradientOrbProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[32rem] h-[32rem]",
  };

  const colorGradients = {
    terracotta: "bg-gradient-to-br from-accent-terracotta/15 via-accent-sienna/10 to-transparent",
    gold: "bg-gradient-to-br from-accent-gold/20 via-sand/15 to-transparent",
    olive: "bg-gradient-to-br from-accent-olive/12 via-accent-olive/8 to-transparent",
    sand: "bg-gradient-to-br from-sand/30 via-sand-dark/20 to-transparent",
  };

  const blurClasses = {
    light: "blur-xl",
    medium: "blur-2xl",
    heavy: "blur-[80px]",
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${sizeClasses[size]} ${colorGradients[color]} ${blurClasses[blur]}`}
      style={{
        ...position,
        transform: "translate(-50%, -50%)",
      }}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    />
  );
}
