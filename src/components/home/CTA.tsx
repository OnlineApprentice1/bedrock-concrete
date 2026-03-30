import Link from "next/link";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <SectionFullBleed
      minHeight="min-h-[60vh]"
      contentPosition="center"
      className="section-spacious section-bg-deep grain-overlay"
      background={
        /* Subtle radial glow from centre — no animation, intentional stillness */
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              ellipse at 50% 50%,
              color-mix(in oklch, var(--clr-primary) 12%, transparent),
              transparent 65%
            )`,
          }}
          aria-hidden="true"
        />
      }
    >
      <div className="text-center py-8">
        {/* Lava channel accent above heading */}
        <div
          className="w-16 h-1 mx-auto mb-8"
          style={{
            background: "linear-gradient(90deg, var(--clr-primary), var(--clr-accent))",
          }}
          aria-hidden="true"
        />

        <h2
          className="type-hero mb-6"
          style={{ color: "var(--clr-text-primary)" }}
        >
          Ready to Pour?
        </h2>

        <p
          className="type-hero-sub mb-10 max-w-2xl mx-auto"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Get a free estimate for your next concrete project. We&apos;ll walk
          your site and give you a straight answer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-profile inline-block">
            Get a Free Quote
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="btn-profile-ghost inline-block"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </SectionFullBleed>
  );
}
