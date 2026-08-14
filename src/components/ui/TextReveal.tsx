"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Component = "div",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      rotateX: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component ref={ref} className={`overflow-hidden ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block flex-wrap"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span variants={wordVariants} className="inline-block will-change-transform">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
