"use client";

import Link from "next/link";
import { Cuboid, ArrowUpDown, Warehouse, Palette, Wrench, ChevronRight } from "lucide-react";

const navItems = [
  { id: "foundations-footings", title: "Foundations & Footings", icon: Cuboid },
  { id: "driveways-walkways", title: "Driveways & Walkways", icon: ArrowUpDown },
  { id: "garage-pads-slabs", title: "Garage Pads & Slabs", icon: Warehouse },
  { id: "decorative-concrete-stamping", title: "Decorative Concrete & Stamping", icon: Palette },
  { id: "concrete-repair-resurfacing", title: "Concrete Repair & Resurfacing", icon: Wrench },
];

export default function ServicesSidebar() {
  return (
    <aside className="lg:col-span-1">
      {/* Mobile: horizontal scroll pills */}
      <nav
        className="flex lg:hidden gap-2 overflow-x-auto pb-4 mb-8"
        aria-label="Service navigation"
        style={{ scrollbarWidth: "none" }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 border-2 font-bold uppercase tracking-widest type-small transition-colors duration-150"
              style={{
                borderColor: "var(--clr-surface-3)",
                color: "var(--clr-text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--clr-primary)";
                el.style.color = "var(--clr-text-primary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--clr-surface-3)";
                el.style.color = "var(--clr-text-secondary)";
              }}
            >
              <Icon size={14} aria-hidden="true" />
              <span>{item.title}</span>
            </a>
          );
        })}
      </nav>

      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block sticky top-24">
        <p
          className="type-small font-bold uppercase tracking-widest mb-4"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Jump to Service
        </p>
        <nav className="flex flex-col gap-1" aria-label="Service navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-3 px-3 py-2.5 border-l-4 transition-colors duration-150"
                style={{
                  borderColor: "var(--clr-surface-3)",
                  color: "var(--clr-text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--clr-primary)";
                  el.style.color = "var(--clr-text-primary)";
                  el.style.backgroundColor = "var(--clr-surface-2)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--clr-surface-3)";
                  el.style.color = "var(--clr-text-secondary)";
                  el.style.backgroundColor = "transparent";
                }}
              >
                <Icon size={16} aria-hidden="true" />
                <span className="type-small font-bold">{item.title}</span>
                <ChevronRight
                  size={12}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* CTA in sidebar */}
        <div className="mt-8 card-featured">
          <p
            className="type-small font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--clr-primary)" }}
          >
            Ready to Start?
          </p>
          <p
            className="type-body mb-4"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Free written quotes, no obligation. We'll walk your site and tell you exactly what it takes.
          </p>
          <Link href="/contact" className="btn-profile w-full text-center block">
            Get a Quote
          </Link>
        </div>
      </div>
    </aside>
  );
}
