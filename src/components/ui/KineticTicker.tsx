"use client";

import React from "react";
import { motion } from "framer-motion";

interface KineticTickerProps {
  text?: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function KineticTicker({
  text = [
    "OPTIK EZIA",
    "PRECISION EYE CARE",
    "CURATED EYEWEAR",
    "CUSTOM FITTING",
    "UV400 & BLUE LIGHT",
    "PREMIUM EYEWEAR",
  ],
  speed = 25,
  reverse = false,
  className = "",
}: KineticTickerProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap select-none py-4 border-y border-sand-border/60 bg-ivory-warm/60 ${className}`}>
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-flex items-center gap-8 will-change-transform"
      >
        {/* Double the array for seamless infinite looping */}
        {[...text, ...text, ...text, ...text].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-8">
            <span className="text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-charcoal/75 font-display">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-terracotta/60" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
