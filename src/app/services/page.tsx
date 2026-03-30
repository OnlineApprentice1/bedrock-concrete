import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cuboid, ArrowUpDown, Warehouse, Palette, Wrench, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import { siteConfig } from "@/config/site";
import ServicesSidebar from "./ServicesSidebar";

export const metadata: Metadata = {
  title: "Services",
  description: `Concrete services in Thunder Bay: foundations, driveways, garage pads, decorative concrete, and repairs. ${siteConfig.name} — 20+ years in Northwestern Ontario.`,
};

const services = [
  {
    id: "foundations-footings",
    title: "Foundations & Footings",
    icon: Cuboid,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80",
    imageAlt: "Concrete foundation being poured on a construction site",
    description: [
      "The base everything else sits on. We pour residential basement foundations, commercial footings, and ICF (Insulated Concrete Form) walls built to handle Northwestern Ontario's conditions.",
      "Every pour is engineered for the frost line depth — 48 inches minimum in our region. Clay soil shifts, frost goes deep, and we account for all of it before the first truck arrives. We coordinate directly with your structural engineer and handle city inspections from start to sign-off.",
      "Whether you're building a new home in Fort William or adding a commercial addition in Oliver Paipoonge, your foundation is the one thing you can't afford to get wrong. We've been getting it right since 2004.",
    ],
    features: [
      "Frost-protected design to 48-inch depth",
      "Rebar and mesh reinforcement to spec",
      "ICF (Insulated Concrete Form) capability",
      "City permit coordination and inspection scheduling",
    ],
  },
  {
    id: "driveways-walkways",
    title: "Driveways & Walkways",
    icon: ArrowUpDown,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    imageAlt: "Freshly poured concrete driveway with broom finish",
    description: [
      "A driveway takes daily abuse — vehicles, road salt, freeze-thaw cycles, and years of UV exposure. We pour 4-inch minimum thickness on a properly compacted gravel base with drainage graded away from your foundation.",
      "Finish options include smooth broom finish (functional and clean), exposed aggregate (textured and non-slip), or stamped patterns for a more polished look. We help you choose based on how the driveway gets used and what your property looks like.",
      "Control joints are cut strategically so if any cracking does happen over decades of freeze-thaw, it happens where you won't see it — not down the middle of your slab.",
    ],
    features: [
      "Proper sub-base compaction to industry standard",
      "Control joints for managed crack prevention",
      "Drainage grading away from structures",
      "Smooth broom, exposed aggregate, or stamped finish options",
    ],
  },
  {
    id: "garage-pads-slabs",
    title: "Garage Pads & Slabs",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop&q=80",
    imageAlt: "Concrete slab pour for a garage floor",
    description: [
      "Level, reinforced slabs built to handle the weight. Whether it's a detached garage, a workshop floor, or an equipment pad, we pour to spec — the right thickness and the right reinforcement for what you're putting on it.",
      "We install vapour barriers, isolation joints to separate the slab from existing structures, and finish level to within 1/4 inch across the full surface. That matters when you're rolling a vehicle over it for the next 30 years.",
      "If you're planning a heated garage floor, we can coordinate with your mechanical contractor to ensure the slab is built to accommodate in-floor radiant tubing.",
    ],
    features: [
      "Engineered for actual load requirements",
      "Vapour barrier installation included",
      "Isolation joints between slab and existing structures",
      "Level to within 1/4 inch across the full surface",
    ],
  },
  {
    id: "decorative-concrete-stamping",
    title: "Decorative Concrete & Stamping",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&h=600&fit=crop&q=80",
    imageAlt: "Stamped decorative concrete patio with stone pattern",
    description: [
      "Plain grey concrete is functional. Stamped and coloured concrete is functional and good-looking. We offer stamped patterns, integral colour, acid staining, and exposed aggregate — often combined for a custom result.",
      "Stamp patterns include flagstone, cobblestone, and slate. Integral colour is mixed throughout the entire slab, not painted on the surface, so it won't peel. Acid staining creates rich, variegated tones by reacting with the concrete's mineral content.",
      "All decorative surfaces get sealed with a non-slip sealant that protects the finish and makes the colour pop. We reseal as needed to keep the surface looking the way it did on day one.",
    ],
    features: [
      "20+ stamp pattern options including flagstone, cobblestone, and slate",
      "Integral colour mixed throughout — not a surface coating",
      "Acid stain options for natural, variegated tones",
      "Non-slip sealant applied to all decorative surfaces",
    ],
  },
  {
    id: "concrete-repair-resurfacing",
    title: "Concrete Repair & Resurfacing",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&h=600&fit=crop&q=80",
    imageAlt: "Concrete crack repair and surface restoration work",
    description: [
      "Cracks, spalling, settling, and surface damage are all repairable — if you address the actual cause rather than just patching over symptoms. We start with an assessment: what's causing this, and what's the right fix?",
      "Settled slabs can often be raised with mudjacking or polyleveling — far less expensive than a full replacement. Structural cracks get epoxy injection rather than surface patching. Worn or spalled surfaces that are still structurally sound can be resurfaced with a bonded overlay.",
      "Not every repair needs to be a replacement, and not every patch job holds. We tell you honestly which approach makes sense for your situation.",
    ],
    features: [
      "Root cause assessment before any repair work begins",
      "Mudjacking and polyleveling for settled slabs",
      "Epoxy crack injection for structural cracks",
      "Full overlay resurfacing for worn or spalled surfaces",
    ],
  },
];

/** Lava channel SVG divider between service sections */
function LavaChannelDivider() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 40"
        className="w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="svc-lava-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "var(--clr-primary)" }} />
            <stop offset="50%" style={{ stopColor: "var(--clr-accent)" }} />
            <stop offset="100%" style={{ stopColor: "var(--clr-primary)" }} />
          </linearGradient>
        </defs>
        <path
          d="M0,20 Q360,0 720,20 T1440,20"
          stroke="url(#svc-lava-grad)"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <SectionFullBleed
        background={
          <div
            className="absolute inset-0 section-bg-deep grain-overlay"
            style={{
              backgroundImage:
                "linear-gradient(135deg, color-mix(in oklch, var(--clr-primary) 15%, transparent) 0%, transparent 50%)",
            }}
          />
        }
        contentPosition="bottom-left"
        minHeight="min-h-[38vh]"
        className="section-bg-deep border-b-4 border-[var(--clr-surface-3)]"
      >
        <div className="pb-8">
          <span className="badge-label mb-4 inline-block">Our Services</span>
          <h1
            className="type-hero"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Concrete Work Done Right
          </h1>
          <p
            className="type-body-lg mt-4 max-w-2xl"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Five core services. One crew that shows up when they say they will. All work backed by over 20 years of Northern Ontario concrete experience.
          </p>
        </div>
      </SectionFullBleed>

      {/* Main layout: sidebar + content */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-standard"
        style={{ color: "var(--clr-text-primary)" }}
      >
        <div className="lg:grid lg:grid-cols-[3fr_9fr] lg:gap-12">

          {/* Sidebar — client component for hover interactivity */}
          <ServicesSidebar />

          {/* Main content column */}
          <main className="lg:col-span-1 space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id}>
                  <Reveal animation="fade-up" delay={0.05}>
                    <section
                      id={service.id}
                      className="scroll-mt-24 section-standard"
                      aria-labelledby={`${service.id}-heading`}
                    >
                      {/* Service heading */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="flex-shrink-0 p-3 border-2"
                          style={{
                            borderColor: "var(--clr-primary)",
                            background: "var(--clr-surface-2)",
                          }}
                        >
                          <Icon
                            size={28}
                            aria-hidden="true"
                            style={{ color: "var(--clr-primary)" }}
                          />
                        </div>
                        <h2
                          id={`${service.id}-heading`}
                          className="type-section"
                          style={{ color: "var(--clr-text-primary)" }}
                        >
                          {service.title}
                        </h2>
                      </div>

                      {/* Service image */}
                      <div className="relative w-full aspect-[16/7] overflow-hidden mb-8 img-elevated">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 75vw"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, color-mix(in oklch, var(--clr-surface-1) 40%, transparent) 0%, transparent 60%)",
                          }}
                        />
                      </div>

                      {/* Service description */}
                      <div className="space-y-4 mb-8">
                        {service.description.map((para, i) => (
                          <p
                            key={i}
                            className="type-body"
                            style={{ color: "var(--clr-text-secondary)" }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Features list */}
                      <div
                        className="border-l-4 pl-6"
                        style={{ borderColor: "var(--clr-primary)" }}
                      >
                        <p
                          className="type-small font-bold uppercase tracking-widest mb-4"
                          style={{ color: "var(--clr-primary)" }}
                        >
                          Key Features
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 type-body"
                              style={{ color: "var(--clr-text-secondary)" }}
                            >
                              <CheckCircle2
                                size={18}
                                className="flex-shrink-0 mt-0.5"
                                aria-hidden="true"
                                style={{ color: "var(--clr-accent)" }}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </Reveal>

                  {/* Lava channel divider between services */}
                  {index < services.length - 1 && <LavaChannelDivider />}
                </div>
              );
            })}

            {/* Bottom CTA */}
            <Reveal animation="fade-up" delay={0.1}>
              <div
                className="mt-12 p-8 section-bg-gradient border-2"
                style={{ borderColor: "var(--clr-surface-3)" }}
              >
                <h2
                  className="type-section mb-4"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Not Sure What You Need?
                </h2>
                <p
                  className="type-body mb-6 max-w-xl"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  Tell us what you're working on and we'll figure it out together. Free site visit, written quote within a few days, no pressure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-profile">
                    Get a Free Quote
                  </Link>
                  <Link href="/faq" className="btn-profile-ghost">
                    Read the FAQ
                  </Link>
                </div>
              </div>
            </Reveal>
          </main>
        </div>
      </div>
    </>
  );
}
