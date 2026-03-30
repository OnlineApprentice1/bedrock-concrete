"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cuboid,
  ArrowUpDown,
  Warehouse,
  Palette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionBentoGrid from "@/components/layouts/SectionBentoGrid";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  animDir: "fan-left" | "fan-right" | "cascade";
}

const services: Service[] = [
  {
    icon: Cuboid,
    title: "Foundations & Footings",
    description:
      "Residential and commercial. Pour the base your building stands on — and pour it right the first time.",
    animDir: "fan-left",
  },
  {
    icon: ArrowUpDown,
    title: "Driveways & Walkways",
    description:
      "Smooth finishes, exposed aggregate, stamped patterns. Built to take the freeze-thaw cycle year after year.",
    animDir: "cascade",
  },
  {
    icon: Warehouse,
    title: "Garage Pads & Slabs",
    description:
      "Level, reinforced slabs built for Northwestern Ontario's freeze-thaw. No settling. No surprises.",
    animDir: "fan-right",
  },
  {
    icon: Palette,
    title: "Decorative Concrete & Stamping",
    description:
      "Transform plain concrete into something worth looking at. Patterns, colours, and texture that hold up.",
    animDir: "fan-left",
  },
  {
    icon: Wrench,
    title: "Concrete Repair & Resurfacing",
    description:
      "Cracks, spalling, settling. Fix it before it gets worse — and before next winter makes it worse still.",
    animDir: "fan-right",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  }

  const Icon = service.icon;

  return (
    <StaggerItem animation={service.animDir}>
      <div
        ref={cardRef}
        className="card-standard magma-glow h-full flex flex-col gap-4"
        onMouseMove={handleMouseMove}
      >
        {/* Hexagonal icon container */}
        <div
          className="hex-clip w-14 h-14 flex items-center justify-center flex-shrink-0"
          style={{ background: "color-mix(in oklch, var(--clr-primary) 20%, transparent)" }}
          aria-hidden="true"
        >
          <Icon
            size={22}
            style={{ color: "var(--clr-primary)" }}
            aria-hidden="true"
          />
        </div>

        <h3 className="type-card" style={{ color: "var(--clr-text-primary)" }}>
          {service.title}
        </h3>

        <p
          className="type-body flex-1"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          {service.description}
        </p>

        <a
          href="#"
          className="type-small font-bold uppercase tracking-wider flex items-center gap-1 w-fit"
          style={{ color: "var(--clr-primary)" }}
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More{" "}
          <span aria-hidden="true" style={{ fontSize: "1em" }}>
            &rarr;
          </span>
        </a>
      </div>
    </StaggerItem>
  );
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="section-standard section-bg-gradient"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-10 lg:mb-12"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
        >
          <span className="badge-label mb-4 block w-fit">Our Services</span>
          <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
            What We Pour
          </h2>
        </motion.div>

        {/* Services grid — 3 top, 2 bottom centred */}
        <StaggerGroup pattern="cascade" staggerDelay={0.06}>
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:max-w-[66%] lg:mx-auto">
            {services.slice(3).map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i + 3}
              />
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
