"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  parallax?: boolean;
  sizes?: string;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  priority = false,
  parallax = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [-20, 20] : [0, 0]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-sand/30 ${aspectRatio} ${className}`}
    >
      <motion.div
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        animate={
          isInView
            ? { clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }
            : { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }
        }
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full relative overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="w-full h-[115%] -top-[7.5%] relative"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-editorial hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
