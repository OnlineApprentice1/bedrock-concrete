"use client";

import { motion, useReducedMotion } from "framer-motion";
import StaggerGroup, { StaggerItem } from "@/components/StaggerGroup";

const faqs = [
  {
    question: "How long does a concrete pour take?",
    answer:
      "Most residential pours — driveways, garage pads, walkways — are a single-day job. Foundations typically take 2–3 days including forming. Weather and curing time add a few days on top.",
  },
  {
    question: "Can you pour concrete in cold weather?",
    answer:
      "Yes — we work through Thunder Bay's shoulder seasons using heated blankets, insulated forms, and hot-water mix. We won't pour below -10°C, but we've got the Northern Ontario experience to handle most conditions.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "For foundation work, yes — we coordinate with the city's building department and schedule inspections. For flatwork like driveways and patios, permits usually aren't required in Thunder Bay.",
  },
  {
    question: "What's the difference between stamped and exposed aggregate?",
    answer:
      "Stamped concrete uses patterns pressed into the surface while it's still wet — great for mimicking stone or brick. Exposed aggregate reveals the natural stones in the mix for a textured, non-slip finish.",
  },
];

export default function FAQPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-compact section-bg-texture relative">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-8"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotate: -3 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
        >
          <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
            Common Questions
          </h2>
        </motion.div>

        {/* FAQ accordion items */}
        <StaggerGroup pattern="cascade" staggerDelay={0.06}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i} animation="cascade">
              <motion.details
                className="card-compact group"
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, rotate: 0 }
                    : { opacity: 0, rotate: -4 }
                }
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 22,
                  delay: i * 0.06,
                }}
              >
                <summary
                  className="flex items-center justify-between cursor-pointer py-1 select-none list-none"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  <span
                    className="type-card pr-4"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    {faq.question}
                  </span>
                  {/* Indicator arrow */}
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center border"
                    style={{
                      border: "2px solid var(--clr-primary)",
                      color: "var(--clr-primary)",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 group-open:rotate-180"
                    >
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                    </svg>
                  </span>
                </summary>

                <p
                  className="type-body pt-3 pb-1"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  {faq.answer}
                </p>
              </motion.details>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
