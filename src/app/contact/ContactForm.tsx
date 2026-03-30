"use client";

const services = [
  "Foundations & Footings",
  "Driveways & Walkways",
  "Garage Pads & Slabs",
  "Decorative Concrete",
  "Repair & Resurfacing",
  "Other",
];

export default function ContactForm() {
  return (
    <form className="space-y-6" action="/api/contact" method="POST">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="type-small font-bold uppercase tracking-widest"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Full Name <span style={{ color: "var(--clr-primary)" }}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="px-4 py-3 border-2 bg-transparent type-body outline-none transition-colors duration-150 focus:border-[var(--clr-primary)]"
            style={{
              borderColor: "var(--clr-surface-3)",
              color: "var(--clr-text-primary)",
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="type-small font-bold uppercase tracking-widest"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Email <span style={{ color: "var(--clr-primary)" }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className="px-4 py-3 border-2 bg-transparent type-body outline-none transition-colors duration-150 focus:border-[var(--clr-primary)]"
            style={{
              borderColor: "var(--clr-surface-3)",
              color: "var(--clr-text-primary)",
            }}
          />
        </div>
      </div>

      {/* Phone + Service row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-phone"
            className="type-small font-bold uppercase tracking-widest"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(807) 555-0000"
            className="px-4 py-3 border-2 bg-transparent type-body outline-none transition-colors duration-150 focus:border-[var(--clr-primary)]"
            style={{
              borderColor: "var(--clr-surface-3)",
              color: "var(--clr-text-primary)",
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-service"
            className="type-small font-bold uppercase tracking-widest"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Service
          </label>
          <select
            id="contact-service"
            name="service"
            className="px-4 py-3 border-2 bg-[var(--clr-surface-2)] type-body outline-none transition-colors duration-150 focus:border-[var(--clr-primary)] appearance-none cursor-pointer"
            style={{
              borderColor: "var(--clr-surface-3)",
              color: "var(--clr-text-primary)",
            }}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="type-small font-bold uppercase tracking-widest"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Message <span style={{ color: "var(--clr-primary)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder="Describe your project — size, location, timeline, anything relevant…"
          className="px-4 py-3 border-2 bg-transparent type-body outline-none resize-y transition-colors duration-150 focus:border-[var(--clr-primary)]"
          style={{
            borderColor: "var(--clr-surface-3)",
            color: "var(--clr-text-primary)",
            minHeight: "8rem",
          }}
        />
      </div>

      {/* Submit */}
      <button type="submit" className="btn-profile w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
