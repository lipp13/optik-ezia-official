"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export function LoadingSpinner({ 
  size = "md", 
  color = "accent-terracotta" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-${color}/20 border-t-${color} rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-sand/50 rounded-md h-full w-full" />
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-ivory-warm border border-sand-border/80 p-6 animate-pulse">
      <div className="flex items-center justify-between pb-4">
        <div className="h-3 bg-sand/50 rounded w-20" />
        <div className="h-3 bg-sand/50 rounded w-16" />
      </div>
      
      <div className="aspect-[4/3] bg-sand/30 border border-sand-border/30 my-4" />
      
      <div className="pt-4 border-t border-sand-border/60 space-y-3">
        <div className="h-5 bg-sand/50 rounded w-3/4" />
        <div className="h-3 bg-sand/50 rounded w-full" />
        <div className="h-3 bg-sand/50 rounded w-5/6" />
      </div>
    </div>
  );
}
