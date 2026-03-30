"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const svgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef}>
      <SectionFullBleed
        minHeight="min-h-screen"
        contentPosition="left"
        className="section-spacious section-bg-deep grain-overlay pt-20"
        background={
          <>
            {/* Parallax SVG magma river */}
            <motion.div
              className="absolute inset-0 flex items-center"
              style={prefersReducedMotion ? {} : { y: svgY }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1440 200"
                className="w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="hero-lava-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "var(--clr-primary)", stopOpacity: 0 }} />
                    <stop offset="20%" style={{ stopColor: "var(--clr-primary)" }} />
                    <stop offset="50%" style={{ stopColor: "var(--clr-accent)" }} />
                    <stop offset="80%" style={{ stopColor: "var(--clr-primary)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--clr-primary)", stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                {/* Main magma river path — organic curve */}
                <path
                  d="M0,100 Q180,40 360,100 T720,80 T1080,110 T1440,90"
                  stroke="url(#hero-lava-grad)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Secondary trace — thinner, offset */}
                <path
                  d="M0,115 Q180,55 360,115 T720,95 T1080,125 T1440,105"
                  stroke="url(#hero-lava-grad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </motion.div>

            {/* Background image — dark basalt overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.08,
              }}
            />
          </>
        }
      >
        <div className="py-20 lg:py-0">
          {/* Pre-label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.1 }}
          >
            <span className="badge-label mb-6 block w-fit">
              Thunder Bay, Ontario
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="type-hero mb-4"
            style={{ color: "var(--clr-text-primary)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.2 }}
          >
            BEDROCK
            <br />
            <span style={{ color: "var(--clr-primary)" }}>CONCRETE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="type-hero-sub mb-10 max-w-xl"
            style={{ color: "var(--clr-text-secondary)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.32 }}
          >
            Foundations Built for Northern Winters
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.44 }}
          >
            <Link href="/contact" className="btn-profile inline-block text-center">
              Get a Free Quote
            </Link>
            <Link href="#services" className="btn-profile-ghost inline-block text-center">
              Our Services
            </Link>
          </motion.div>
        </div>
      </SectionFullBleed>
    </div>
  );
}
