import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const services = [
  { label: "Foundation & Footings", href: "/services#foundations" },
  { label: "Driveways & Walkways", href: "/services#driveways" },
  { label: "Garage Pads & Slabs", href: "/services#garage-pads" },
  { label: "Decorative Concrete", href: "/services#decorative" },
  { label: "Repair & Resurfacing", href: "/services#repair" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/services#faq" },
];

export default function Footer() {
  return (
    <footer className="section-bg-deep border-t-2" style={{ borderColor: "var(--clr-primary)" }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Business Info */}
          <div>
            <h2
              className="type-card font-heading mb-4"
              style={{ color: "var(--clr-primary)", fontFamily: "var(--font-heading)" }}
            >
              {siteConfig.name}
            </h2>
            <p
              className="type-body mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              {siteConfig.description}
            </p>
            <p
              className="type-small font-semibold uppercase tracking-widest"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Service Area
            </p>
            <p
              className="type-small mt-1"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              {siteConfig.location.serviceArea}
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3
              className="type-small font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="type-small transition-colors hover:text-primary"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3
              className="type-small font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-small transition-colors hover:text-primary"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3
              className="type-small font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="type-small flex items-center gap-2 transition-colors hover:text-primary"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  <Phone size={14} aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="type-small flex items-center gap-2 transition-colors hover:text-primary"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  <Mail size={14} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span
                  className="type-small flex items-center gap-2"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  <MapPin size={14} aria-hidden="true" />
                  {siteConfig.location.city}, {siteConfig.location.province}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t-2"
        style={{ borderColor: "var(--clr-surface-3)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p
            className="type-caption"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="type-caption transition-colors hover:text-primary"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="type-caption transition-colors hover:text-primary"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
