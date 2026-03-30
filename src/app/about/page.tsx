import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Shield, Sparkles, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";
import { StaggerItem } from "@/components/StaggerGroup";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import SectionAsymmetricSplit from "@/components/layouts/SectionAsymmetricSplit";
import SectionEditorial from "@/components/layouts/SectionEditorial";
import SectionStackedCards from "@/components/layouts/SectionStackedCards";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn the story behind ${siteConfig.name}. Mike Dufresne founded Bedrock Concrete in 2004 after 20 years of concrete work across Northwestern Ontario. Thunder Bay's crew that shows up.`,
};

const values = [
  {
    icon: Clock,
    title: "Show Up on Time",
    body: "We schedule it, we're there. Our crew starts at 7 AM and we give you a realistic timeline, not a best-case fantasy.",
  },
  {
    icon: Shield,
    title: "Do It Right the First Time",
    body: "Proper forming, proper reinforcement, proper cure time. We don't cut corners because you'll see the results in 3 years.",
  },
  {
    icon: Sparkles,
    title: "Clean Up After Ourselves",
    body: "Your property looks better when we leave than when we arrived. No rebar sticking out of the ground, no concrete splatter on your house.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <SectionFullBleed
        background={
          <>
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80"
              alt="Concrete foundation work on a construction site in Northwestern Ontario"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, color-mix(in oklch, var(--clr-surface-1) 80%, transparent) 0%, color-mix(in oklch, var(--clr-surface-1) 50%, transparent) 60%, transparent 100%)",
              }}
            />
          </>
        }
        contentPosition="bottom-left"
        minHeight="min-h-[55vh]"
        className="grain-overlay"
      >
        <Reveal animation="fade-up">
          <span className="badge-label mb-4 inline-block">Our Story</span>
          <h1
            className="type-hero max-w-2xl"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Built on Bedrock
          </h1>
          <p
            className="type-body-lg mt-4 max-w-xl"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            20+ years of concrete work in Northwestern Ontario
          </p>
        </Reveal>
      </SectionFullBleed>

      {/* Origin Story — split layout */}
      <SectionAsymmetricSplit
        ratio="7-5"
        className="section-bg-deep"
        left={
          <Reveal animation="fade-up">
            <div className="space-y-6">
              <span
                className="type-small font-bold uppercase tracking-widest"
                style={{ color: "var(--clr-primary)" }}
              >
                How We Got Here
              </span>
              <p
                className="type-body"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                Mike Dufresne started Bedrock Concrete in 2004 with a mixer, a truck, and twenty years of working concrete for other people's companies. He'd poured foundations from Sault Ste. Marie to Kenora, and he knew two things: the work could be done better, and Thunder Bay deserved a concrete crew that actually showed up when they said they would.
              </p>
              <p
                className="type-body"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                Two decades later, Bedrock runs a tight crew of eight. We still do the same work — foundations, flatwork, repairs — but we've gotten a lot better at it. Mike's on every job site. Not every contractor can say that.
              </p>
              <p
                className="type-body"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                Northwestern Ontario's climate isn't forgiving. Clay soil heaves. Frost goes deep. Summer is short. Every pour we do accounts for these realities. We're not importing techniques from Southern Ontario and hoping they work up here.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/services" className="btn-profile">
                  See Our Services
                </Link>
                <Link href="/contact" className="btn-profile-ghost">
                  Get a Quote
                </Link>
              </div>
            </div>
          </Reveal>
        }
        right={
          <Reveal animation="slide-left">
            <div className="relative aspect-[4/5] overflow-hidden img-elevated">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80"
                alt="Mike Dufresne, founder of Bedrock Concrete, overseeing a concrete pour"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background:
                    "linear-gradient(to top, color-mix(in oklch, var(--clr-surface-1) 90%, transparent) 0%, transparent 100%)",
                }}
              >
                <p
                  className="type-small font-bold uppercase tracking-widest"
                  style={{ color: "var(--clr-primary)" }}
                >
                  Mike Dufresne
                </p>
                <p
                  className="type-small"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  Founder — Bedrock Concrete Solutions
                </p>
              </div>
            </div>
          </Reveal>
        }
      />

      {/* Editorial — experience context */}
      <SectionEditorial align="left" className="section-bg-gradient">
        <Reveal animation="fade-up">
          <span
            className="type-small font-bold uppercase tracking-widest"
            style={{ color: "var(--clr-primary)" }}
          >
            Built for This Climate
          </span>
        </Reveal>
        <Reveal animation="fade-up" delay={0.05}>
          <h2
            className="type-section"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Experience You Can't Learn in a Classroom
          </h2>
        </Reveal>
        <Reveal animation="fade-up" delay={0.1}>
          <p
            className="type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Northern Ontario concrete work is a different discipline. The freeze-thaw cycle here runs 80+ times per year. We account for that in every mix design, every control joint placement, every base preparation. These aren't details you find in Southern Ontario textbooks.
          </p>
        </Reveal>
        <Reveal animation="fade-up" delay={0.15}>
          <p
            className="type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Our crew has worked through every season Thunder Bay can throw at a concrete pour. We know when to use heated blankets, when to call the job due to weather, and when a client's deadline is realistic or wishful thinking. We'll always tell you the truth about what the weather and the calendar will allow.
          </p>
        </Reveal>
      </SectionEditorial>

      {/* Values cards */}
      <section
        className="section-standard section-bg-deep"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="mb-10 text-center">
              <span
                className="badge-label mb-3 inline-block"
                style={{ background: "var(--clr-surface-3)", color: "var(--clr-text-primary)" }}
              >
                How We Work
              </span>
              <h2
                id="values-heading"
                className="type-section"
                style={{ color: "var(--clr-text-primary)" }}
              >
                Three Things We Never Compromise
              </h2>
            </div>
          </Reveal>

          <StaggerGroup
            pattern="cascade"
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="card-standard h-full">
                    <div
                      className="mb-4 inline-flex p-3 border-2"
                      style={{
                        borderColor: "var(--clr-primary)",
                        background: "var(--clr-surface-1)",
                      }}
                    >
                      <Icon
                        size={24}
                        aria-hidden="true"
                        style={{ color: "var(--clr-primary)" }}
                      />
                    </div>
                    <h3
                      className="type-card mb-3"
                      style={{ color: "var(--clr-text-primary)" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="type-body"
                      style={{ color: "var(--clr-text-secondary)" }}
                    >
                      {value.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Service area */}
      <section
        className="section-compact section-bg-texture"
        aria-labelledby="service-area-heading"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 border-l-4"
              style={{
                borderColor: "var(--clr-accent)",
                background: "var(--clr-surface-2)",
              }}
            >
              <div className="flex-shrink-0">
                <MapPin
                  size={32}
                  aria-hidden="true"
                  style={{ color: "var(--clr-accent)" }}
                />
              </div>
              <div>
                <h2
                  id="service-area-heading"
                  className="type-card mb-1"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Where We Work
                </h2>
                <p
                  className="type-body"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  We work across Thunder Bay and Northwestern Ontario — Fort William, Kakabeka Falls, Neebing, Oliver Paipoonge, and everywhere in between.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA section */}
      <section
        className="section-standard section-bg-gradient"
        aria-labelledby="about-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="scale-up">
            <h2
              id="about-cta-heading"
              className="type-section mb-4"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Ready to Work Together?
            </h2>
            <p
              className="type-body-lg mb-8"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Free site visit, written quote within a few days. We'll tell you exactly what the job involves and what it'll cost.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-profile">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn-profile-ghost">
                View All Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
