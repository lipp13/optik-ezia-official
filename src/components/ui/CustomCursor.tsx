"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch / mobile devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor-text], a, button, [role='button']");

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor-text");
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.div
        animate={{
          scale: cursorText ? 1.5 : isHovered ? 1.25 : 1,
          width: cursorText ? 64 : isHovered ? 36 : 10,
          height: cursorText ? 64 : isHovered ? 36 : 10,
          backgroundColor: cursorText
            ? "rgba(23, 23, 21, 0.92)"
            : isHovered
            ? "rgba(23, 23, 21, 0.15)"
            : "rgba(23, 23, 21, 0.8)",
          borderColor: isHovered && !cursorText ? "rgba(23, 23, 21, 0.4)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250 }}
        className="flex items-center justify-center rounded-full border border-transparent backdrop-blur-[1px] text-center"
      >
        {cursorText && (
          <span className="text-[9px] font-semibold tracking-wider text-ivory uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
