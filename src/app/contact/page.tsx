import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import { siteConfig } from "@/config/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free concrete quote from ${siteConfig.name}. Call ${siteConfig.phone}, email ${siteConfig.email}, or send a message. Thunder Bay and Northwestern Ontario.`,
};

const hours = [
  { days: "Monday – Friday", time: "7:00 AM – 5:00 PM" },
  { days: "Saturday", time: "8:00 AM – 12:00 PM" },
  { days: "Sunday", time: "Closed" },
];

export default function ContactPage() {
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
          <span className="badge-label mb-4 inline-block">Contact Us</span>
          <h1
            className="type-hero"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Get a Free Quote
          </h1>
          <p
            className="type-body-lg mt-4 max-w-xl"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Tell us about your project. We'll walk your site, review the scope, and get you a written quote within a few days.
          </p>
        </div>
      </SectionFullBleed>

      {/* Form + Sidebar */}
      <section
        className="section-standard section-bg-deep"
        aria-labelledby="contact-form-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16">

            {/* Contact form */}
            <Reveal animation="fade-up">
              <div>
                <h2
                  id="contact-form-heading"
                  className="type-section mb-8"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Tell Us About Your Project
                </h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Info sidebar */}
            <Reveal animation="slide-right">
              <div className="space-y-6">
                {/* Business info card */}
                <div className="card-featured">
                  <p
                    className="type-small font-bold uppercase tracking-widest mb-5"
                    style={{ color: "var(--clr-primary)" }}
                  >
                    Reach Us Directly
                  </p>

                  <div className="space-y-4">
                    {/* Phone — tel: link */}
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-3 group"
                      aria-label={`Call us at ${siteConfig.phone}`}
                    >
                      <div
                        className="flex-shrink-0 p-2 border-2"
                        style={{
                          borderColor: "var(--clr-primary)",
                          background: "var(--clr-surface-1)",
                        }}
                      >
                        <Phone
                          size={18}
                          aria-hidden="true"
                          style={{ color: "var(--clr-primary)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="type-small uppercase tracking-widest"
                          style={{ color: "var(--clr-text-secondary)" }}
                        >
                          Phone
                        </p>
                        <span
                          className="type-card transition-colors duration-150 group-hover:underline"
                          style={{ color: "var(--clr-text-primary)" }}
                        >
                          {siteConfig.phone}
                        </span>
                      </div>
                    </a>

                    {/* Email — mailto: link */}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 group"
                      aria-label={`Email us at ${siteConfig.email}`}
                    >
                      <div
                        className="flex-shrink-0 p-2 border-2"
                        style={{
                          borderColor: "var(--clr-primary)",
                          background: "var(--clr-surface-1)",
                        }}
                      >
                        <Mail
                          size={18}
                          aria-hidden="true"
                          style={{ color: "var(--clr-primary)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="type-small uppercase tracking-widest"
                          style={{ color: "var(--clr-text-secondary)" }}
                        >
                          Email
                        </p>
                        <span
                          className="type-body transition-colors duration-150 group-hover:underline"
                          style={{ color: "var(--clr-text-primary)" }}
                        >
                          {siteConfig.email}
                        </span>
                      </div>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 p-2 border-2"
                        style={{
                          borderColor: "var(--clr-surface-3)",
                          background: "var(--clr-surface-1)",
                        }}
                      >
                        <MapPin
                          size={18}
                          aria-hidden="true"
                          style={{ color: "var(--clr-text-secondary)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="type-small uppercase tracking-widest"
                          style={{ color: "var(--clr-text-secondary)" }}
                        >
                          Service Area
                        </p>
                        <p
                          className="type-body"
                          style={{ color: "var(--clr-text-primary)" }}
                        >
                          Thunder Bay &amp; Northwestern Ontario
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours card */}
                <div className="card-standard">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock
                      size={18}
                      aria-hidden="true"
                      style={{ color: "var(--clr-accent)" }}
                    />
                    <p
                      className="type-small font-bold uppercase tracking-widest"
                      style={{ color: "var(--clr-text-primary)" }}
                    >
                      Business Hours
                    </p>
                  </div>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div
                        key={h.days}
                        className="card-compact flex justify-between items-center"
                      >
                        <span
                          className="type-small font-bold"
                          style={{ color: "var(--clr-text-secondary)" }}
                        >
                          {h.days}
                        </span>
                        <span
                          className="type-small"
                          style={{
                            color:
                              h.time === "Closed"
                                ? "var(--clr-text-secondary)"
                                : "var(--clr-accent)",
                          }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response time note */}
                <div
                  className="p-4 border-l-4"
                  style={{
                    borderColor: "var(--clr-accent)",
                    background: "var(--clr-surface-2)",
                  }}
                >
                  <p
                    className="type-small"
                    style={{ color: "var(--clr-text-secondary)" }}
                  >
                    We respond to all enquiries within one business day. For urgent jobs, call us directly.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section
        className="section-compact section-bg-deep"
        aria-label="Our location on Google Maps"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div
              className="border-2 overflow-hidden"
              style={{ borderColor: "var(--clr-surface-3)" }}
            >
              <p
                className="px-4 py-2 type-small font-bold uppercase tracking-widest"
                style={{
                  background: "var(--clr-surface-2)",
                  borderBottom: "2px solid var(--clr-surface-3)",
                  color: "var(--clr-text-secondary)",
                }}
              >
                Thunder Bay, Ontario — Our Service Area
              </p>
              <div className="relative w-full" style={{ paddingBottom: "45%" }}>
                <iframe
                  src={siteConfig.location.mapEmbedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bedrock Concrete Solutions service area — Thunder Bay, Ontario"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
