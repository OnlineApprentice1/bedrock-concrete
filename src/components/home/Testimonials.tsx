"use client";

import { motion, useReducedMotion } from "framer-motion";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";

const featured = {
  quote:
    "Mike and his crew poured our foundation in October — right before the first frost. They worked fast, kept the site clean, and the slab is dead level. Three years later, not a single crack.",
  author: "Dave R.",
  location: "Current River",
};

const compact = [
  {
    quote:
      "Got our driveway and walkway done. The stamped concrete looks incredible. Neighbours keep asking who did the work.",
    author: "Sarah M.",
    location: "Westfort",
  },
  {
    quote:
      "Called them for a garage pad and they fit us in within two weeks. Fair price, solid work, zero drama.",
    author: "Tony K.",
    location: "Kakabeka Falls",
  },
];

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-standard section-bg-gradient">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-10 lg:mb-12"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
        >
          <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Asymmetric testimonials layout: 60% featured | 40% compact stack */}
        <StaggerGroup pattern="wave" staggerDelay={0.1} className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Featured testimonial — ~60% */}
          <StaggerItem animation="wave" className="w-full lg:w-[60%]">
            <motion.div
              className="card-featured h-full flex flex-col justify-between relative overflow-hidden"
              initial={prefersReducedMotion ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0 }}
            >
              {/* Decorative quote mark */}
              <span
                className="type-hero absolute top-2 left-4 leading-none select-none pointer-events-none"
                style={{
                  color: "var(--clr-primary)",
                  opacity: 0.25,
                  fontSize: "clamp(4rem, 8vw, 8rem)",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10">
                <p
                  className="type-body-lg mb-6 pt-8"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  {featured.quote}
                </p>
                <footer>
                  <span
                    className="type-card block"
                    style={{ color: "var(--clr-primary)" }}
                  >
                    {featured.author}
                  </span>
                  <span
                    className="type-small"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {featured.location}
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          </StaggerItem>

          {/* Compact testimonials stack — ~40% */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4 lg:gap-6">
            {compact.map((t, i) => (
              <StaggerItem key={t.author} animation="wave">
                <motion.div
                  className="card-compact h-full flex flex-col justify-between"
                  style={{
                    borderBottom: "2px solid var(--clr-surface-3)",
                    padding: "1.25rem",
                    background: "var(--clr-surface-2)",
                    border: "2px solid var(--clr-surface-3)",
                  }}
                  initial={prefersReducedMotion ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    delay: 0.15 + i * 0.1,
                  }}
                >
                  <blockquote>
                    <p
                      className="type-body mb-4"
                      style={{ color: "var(--clr-text-primary)" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer>
                      <span
                        className="type-small font-bold block"
                        style={{ color: "var(--clr-primary)" }}
                      >
                        {t.author}
                      </span>
                      <span
                        className="type-small"
                        style={{ color: "var(--clr-text-secondary)" }}
                      >
                        {t.location}
                      </span>
                    </footer>
                  </blockquote>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
