"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-sharpen"
  | "rotate-in"
  | "clip-reveal"
  | "none";

const variants: Record<
  Exclude<AnimationType, "none" | "clip-reveal">,
  Variants
> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-sharpen": {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0 },
  },
};

const clipRevealVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0% 0)" },
};

interface RevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  /** Override spring stiffness (default: 150 — snappy/powerful) */
  stiffness?: number;
  /** Override spring damping (default: 22) */
  damping?: number;
}

export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  stiffness = 150,
  damping = 22,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  if (animation === "none" || prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const animVariants =
    animation === "clip-reveal" ? clipRevealVariants : variants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animVariants}
      transition={{ type: "spring", stiffness, damping, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
