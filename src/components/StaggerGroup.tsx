"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * StaggerGroup — wraps children and staggers their entrance animations.
 *
 * Patterns:
 *   cascade — children reveal top-to-bottom in sequence (default)
 *   fan     — children spread out from the centre; odd indexes go left, even go right
 *   wave    — children enter with a sine-wave vertical offset
 *
 * Each child that you want staggered must accept and forward the Framer Motion
 * `variants` prop. Wrap each child in a <StaggerItem> for convenience, or
 * use Reveal components which already accept variants via whileInView.
 */

export type StaggerPattern = "cascade" | "fan" | "wave";

interface StaggerGroupProps {
  children: ReactNode;
  staggerDelay?: number;
  pattern?: StaggerPattern;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      // staggerChildren is merged at render time via the staggerDelay prop
    },
  },
};

export default function StaggerGroup({
  children,
  staggerDelay = 0.06,
  pattern = "cascade",
  className,
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
      data-stagger-pattern={pattern}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem — a direct child of StaggerGroup.
 * Animates based on the parent's stagger timing.
 * Uses the cascade pattern by default (fade-up).
 */

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  /** Override the cascade animation for this specific item */
  animation?: "cascade" | "fan-left" | "fan-right" | "wave";
}

const itemVariants: Record<string, Variants> = {
  cascade: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 22 } },
  },
  "fan-left": {
    hidden: { opacity: 0, x: -40, rotate: -4 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", stiffness: 150, damping: 22 } },
  },
  "fan-right": {
    hidden: { opacity: 0, x: 40, rotate: 4 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", stiffness: 150, damping: 22 } },
  },
  wave: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  },
};

export function StaggerItem({
  children,
  className,
  animation = "cascade",
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={itemVariants[animation]} className={className}>
      {children}
    </motion.div>
  );
}
