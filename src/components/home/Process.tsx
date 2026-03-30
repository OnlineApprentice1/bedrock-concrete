"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionZigzag from "@/components/layouts/SectionZigzag";

const steps = [
  {
    number: "01",
    heading: "Consultation",
    description:
      "We walk your site, take measurements, and talk through exactly what you need. No guesswork. No surprises on the invoice.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80",
    imageAlt: "Blueprint and planning documents on a table",
  },
  {
    number: "02",
    heading: "Site Preparation",
    description:
      "Excavation, grading, and compaction. Good concrete starts with good ground — we don't skip this step even when the schedule is tight.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    imageAlt: "Construction site with excavation in progress",
  },
  {
    number: "03",
    heading: "Forming & Reinforcement",
    description:
      "Custom forms built to spec. Rebar and mesh where the engineers say it goes — not where it's quick to place.",
    image: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&h=600&fit=crop&q=80",
    imageAlt: "Concrete forms and rebar reinforcement detail",
  },
  {
    number: "04",
    heading: "Pour & Finish",
    description:
      "The main event. Our crew pours, levels, and finishes in a single pour day. We coordinate weather windows so the conditions work for us.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&h=600&fit=crop&q=80",
    imageAlt: "Concrete being poured and levelled on site",
  },
  {
    number: "05",
    heading: "Cure & Seal",
    description:
      "We don't rush it. Proper curing time plus a quality sealer for long-term durability — because the work we do today has to hold up for decades.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    imageAlt: "Finished concrete patio with clean sealed surface",
  },
];

export default function Process() {
  const prefersReducedMotion = useReducedMotion();

  const zigzagItems = steps.map((step, i) => ({
    visual: (
      <motion.div
        className="relative overflow-hidden"
        style={{ border: "2px solid var(--clr-surface-3)" }}
        initial={prefersReducedMotion ? { opacity: 1, clipPath: "inset(0 0 0% 0)" } : { clipPath: "inset(0 0 100% 0)", opacity: 1 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.6,
          delay: i * 0.06,
        }}
      >
        <Image
          src={step.image}
          alt={step.imageAlt}
          width={800}
          height={600}
          className="w-full h-[260px] md:h-[320px] object-cover"
        />
        {/* Hard shadow accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklch, var(--clr-surface-1) 60%, transparent) 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
      </motion.div>
    ),
    content: (
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 22,
          delay: i * 0.06 + 0.15,
        }}
      >
        {/* Step number */}
        <span
          className="type-hero-sub font-bold block mb-2 leading-none"
          style={{ color: "var(--clr-primary)", opacity: 0.9 }}
          aria-hidden="true"
        >
          {step.number}
        </span>

        <h3
          className="type-card mb-3"
          style={{ color: "var(--clr-text-primary)" }}
        >
          {step.heading}
        </h3>

        <p
          className="type-body"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          {step.description}
        </p>
      </motion.div>
    ),
  }));

  return (
    <section className="section-bg-texture relative">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[var(--section-standard)]">
        {/* Section header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
        >
          <span className="badge-label mb-4 block w-fit">Our Process</span>
          <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
            How We Work
          </h2>
        </motion.div>

        {/* Zigzag steps */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {zigzagItems.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-1/2">{item.visual}</div>
                <div className="w-full lg:w-1/2">{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
