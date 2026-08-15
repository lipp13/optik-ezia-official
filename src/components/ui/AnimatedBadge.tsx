"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedBadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  animate?: boolean;
}

export function AnimatedBadge({ 
  text, 
  icon, 
  variant = "primary",
  animate = true 
}: AnimatedBadgeProps) {
  const variants = {
    primary: "bg-sand/60 text-charcoal border-sand-border",
    secondary: "bg-ivory text-charcoal-muted border-sand-border",
    accent: "bg-gradient-to-r from-accent-terracotta/10 to-accent-gold/10 text-accent-terracotta border-accent-terracotta/20",
  };

  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] uppercase tracking-[0.18em] font-medium ${variants[variant]}`}
      initial={animate ? { opacity: 0, scale: 0.8 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : false}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {icon && (
        <motion.span
          animate={animate ? { rotate: [0, 360] } : false}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {icon}
        </motion.span>
      )}
      <span>{text}</span>
    </motion.div>
  );
}
