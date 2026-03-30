import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageSquare } from "lucide-react";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";
import { StaggerItem } from "@/components/StaggerGroup";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import SectionEditorial from "@/components/layouts/SectionEditorial";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Common questions about concrete work in Thunder Bay. How long does a pour take? Can you pour in cold weather? ${siteConfig.name} answers your questions.`,
};

const faqs = [
  {
    question: "How long does a concrete pour take?",
    answer:
      "Most residential pours — driveways, garage pads, walkways — are a single-day job. Foundations typically take 2–3 days including forming. Weather and curing time add a few days on top of the pour itself. We'll give you a realistic timeline before we start.",
  },
  {
    question: "Can you pour concrete in cold weather?",
    answer:
      "Yes — we work through Thunder Bay's shoulder seasons using heated blankets, insulated forms, and hot-water mix. We won't pour below -10°C, but we've got the Northern Ontario experience to handle most conditions. If the forecast looks risky, we'll tell you before we mobilise, not after.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "For foundation work, yes — we coordinate with the city's building department and schedule inspections. For flatwork like driveways and patios, permits usually aren't required in Thunder Bay. We'll let you know what's needed for your specific job.",
  },
  {
    question: "What's the difference between stamped and exposed aggregate?",
    answer:
      "Stamped concrete uses patterns pressed into the surface while it's still wet — great for mimicking stone or brick. Exposed aggregate reveals the natural stones in the mix for a textured, non-slip finish. Both are durable options; the right choice depends on the look you're after and the surface's use.",
  },
  {
    question: "How thick should my driveway be?",
    answer:
      "We pour residential driveways at 4 inches minimum on a compacted gravel base. If you're parking heavy equipment or RVs regularly, we'll go to 5–6 inches with extra reinforcement. We'd rather build it right the first time than have you call us back in five years.",
  },
  {
    question: "What causes concrete to crack?",
    answer:
      "Shrinkage during curing, frost heave, improper sub-base preparation, or missing control joints. We address all four: the right mix design for our climate, deep sub-base prep, proper reinforcement, and strategically placed control joints that direct any cracking where you won't notice it.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We'll walk your site, discuss what you need, and give you a written quote within a few days. No pressure, no obligation. We'd rather you make a good decision than feel rushed into anything.",
  },
  {
    question: "How soon can you start?",
    answer:
      "Depends on the season. Summer is our busiest time, so booking 2–4 weeks ahead is smart if you have a specific date in mind. Spring and fall we can usually start within a week or two. Call or email us and we'll give you an honest read on our current schedule.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <SectionFullBleed
        background={
          <div
            className="absolute inset-0 section-bg-deep grain-overlay"
            style={{
              backgroundImage:
                "linear-gradient(135deg, color-mix(in oklch, var(--clr-primary) 12%, transparent) 0%, transparent 50%)",
            }}
          />
        }
        contentPosition="bottom-left"
        minHeight="min-h-[32vh]"
        className="section-bg-deep border-b-4 border-[var(--clr-surface-3)]"
      >
        <div className="pb-8">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle
              size={20}
              aria-hidden="true"
              style={{ color: "var(--clr-accent)" }}
            />
            <span className="badge-label inline-block">FAQ</span>
          </div>
          <h1
            className="type-hero"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="type-body-lg mt-4 max-w-xl"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Straight answers about concrete work in Northwestern Ontario. No fluff.
          </p>
        </div>
      </SectionFullBleed>

      {/* FAQ accordion list */}
      <section
        className="section-standard section-bg-deep"
        aria-labelledby="faq-list-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only" id="faq-list-heading">
            All frequently asked questions
          </h2>

          <StaggerGroup pattern="cascade" staggerDelay={0.07} className="space-y-3">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div
                  className="collapse collapse-arrow border-2"
                  style={{
                    borderColor: "var(--clr-surface-3)",
                    background: "var(--clr-surface-2)",
                    borderRadius: 0,
                  }}
                >
                  <input
                    type="radio"
                    name="faq-accordion"
                    aria-label={faq.question}
                  />
                  <div
                    className="collapse-title type-card font-bold pr-12"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    {faq.question}
                  </div>
                  <div
                    className="collapse-content"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    <p className="type-body pt-2 pb-1">{faq.answer}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Editorial — more to ask? */}
      <SectionEditorial align="center" className="section-bg-gradient">
        <Reveal animation="fade-up">
          <span
            className="type-small font-bold uppercase tracking-widest"
            style={{ color: "var(--clr-primary)" }}
          >
            Still Have Questions?
          </span>
        </Reveal>
        <Reveal animation="fade-up" delay={0.06}>
          <p
            className="type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Every job is different. If your question isn't answered here, reach out directly — we're happy to talk through what you're working on before you commit to anything.
          </p>
        </Reveal>
      </SectionEditorial>

      {/* CTA section */}
      <section
        className="section-standard section-bg-deep"
        aria-labelledby="faq-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="scale-up">
            <div
              className="card-featured text-center"
            >
              <MessageSquare
                size={36}
                className="mx-auto mb-4"
                aria-hidden="true"
                style={{ color: "var(--clr-accent)" }}
              />
              <h2
                id="faq-cta-heading"
                className="type-section mb-4"
                style={{ color: "var(--clr-text-primary)" }}
              >
                Ready to Talk About Your Project?
              </h2>
              <p
                className="type-body mb-8 max-w-md mx-auto"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                Free site visit. Written quote within a few days. No obligation. We've been answering questions and pouring concrete in Thunder Bay for over 20 years.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-profile">
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="btn-profile-ghost"
                  aria-label={`Call us at ${siteConfig.phone}`}
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
