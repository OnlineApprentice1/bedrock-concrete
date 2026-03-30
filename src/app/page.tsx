import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQPreview from "@/components/home/FAQPreview";
import CTA from "@/components/home/CTA";

/** Lava-channel SVG divider — crimson-to-orange gradient flowing curve */
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
          <linearGradient id="lava-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "var(--clr-primary)" }} />
            <stop offset="50%" style={{ stopColor: "var(--clr-accent)" }} />
            <stop offset="100%" style={{ stopColor: "var(--clr-primary)" }} />
          </linearGradient>
        </defs>
        <path
          d="M0,20 Q360,0 720,20 T1440,20"
          stroke="url(#lava-grad)"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* 1. Hero — section-spacious, section-bg-deep + grain-overlay */}
      <Hero />

      {/* 2. Stats — section-compact, section-bg-deep */}
      <Stats />

      {/* Lava channel divider: Stats → Services */}
      <LavaChannelDivider />

      {/* 3. Services — section-standard, section-bg-gradient */}
      <Services />

      {/* Lava channel divider: Services → Process */}
      <LavaChannelDivider />

      {/* 4. Process — section-standard, section-bg-texture */}
      <Process />

      {/* Lava channel divider: Process → Testimonials */}
      <LavaChannelDivider />

      {/* 5. Testimonials — section-standard, section-bg-gradient */}
      <Testimonials />

      {/* 6. FAQ Preview — section-compact, section-bg-texture */}
      <FAQPreview />

      {/* 7. CTA — section-spacious, section-bg-deep + grain-overlay */}
      <CTA />
    </main>
  );
}
