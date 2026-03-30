"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import SectionStatsBar from "@/components/layouts/SectionStatsBar";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Licensed & Insured" },
  { value: 24, suffix: "h", label: "Response Time" },
];

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 80, damping: 18 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsubscribe = springVal.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(v).toString();
      }
    });
    return unsubscribe;
  }, [springVal]);

  useEffect(() => {
    if (inView && !prefersReducedMotion) {
      motionVal.set(value);
    } else if (inView) {
      if (displayRef.current) {
        displayRef.current.textContent = value.toString();
      }
    }
  }, [inView, motionVal, value, prefersReducedMotion]);

  return (
    <span>
      <span ref={displayRef}>0</span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref}>
      <SectionStatsBar
        columns={4}
        className="section-compact section-bg-deep"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center text-center relative"
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 18,
              delay: i * 0.06,
            }}
          >
            {/* Vertical divider — hidden for first item */}
            {i > 0 && (
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block"
                style={{
                  width: "2px",
                  height: "60%",
                  background: "var(--clr-primary)",
                  opacity: 0.5,
                }}
                aria-hidden="true"
              />
            )}

            <span
              className="type-hero-sub font-bold"
              style={{ color: "var(--clr-primary)" }}
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
            </span>
            <span
              className="type-small mt-1"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </SectionStatsBar>
    </div>
  );
}
