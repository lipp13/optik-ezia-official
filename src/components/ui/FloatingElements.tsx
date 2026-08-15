"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export function FloatingElements({ count = 6, className = "" }: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((i) => {
        const size = Math.random() * 100 + 80;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 4;
        const duration = Math.random() * 8 + 20;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background: i % 3 === 0 
                ? "radial-gradient(circle, rgba(237, 231, 220, 0.2) 0%, transparent 70%)"
                : i % 3 === 1
                ? "radial-gradient(circle, rgba(142, 82, 56, 0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(194, 164, 120, 0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
