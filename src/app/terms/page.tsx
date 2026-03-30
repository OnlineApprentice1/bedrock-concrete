import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}. Understand the terms governing our concrete and foundation services in Thunder Bay, Ontario.`,
};

export default function TermsPage() {
  return (
    <div className="section-bg-deep min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="type-section mb-3">Terms of Service</h1>
        <p className="type-small text-base-content/50 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="type-card mb-4">Acceptance of Terms</h2>
            <p className="type-body text-base-content/80">
              By accessing our website or engaging {siteConfig.name} for services, you agree to
              be bound by these Terms of Service and our Privacy Policy. If you do not agree with
              any part of these terms, please do not use our website or services. We reserve the
              right to update these terms at any time; continued use of our services constitutes
              acceptance of any changes.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Scope of Services</h2>
            <p className="type-body text-base-content/80 mb-4">
              {siteConfig.name} provides concrete and foundation contracting services in Thunder
              Bay and Northwestern Ontario, including:
            </p>
            <ul className="list-disc list-inside type-body text-base-content/80 space-y-2 ml-2">
              <li>Foundations and footings</li>
              <li>Driveways and walkways</li>
              <li>Garage pads and slabs</li>
              <li>Decorative concrete</li>
              <li>Concrete repair and resurfacing</li>
            </ul>
            <p className="type-body text-base-content/80 mt-4">
              All services are subject to availability, seasonal conditions, and project scope.
              Information on this website is provided for general reference only and does not
              constitute professional structural or engineering advice. We reserve the right to
              decline any project at our discretion.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Quotes and Project Agreements</h2>
            <p className="type-body text-base-content/80">
              All quotes are estimates based on information provided at the time of assessment.
              Final pricing is confirmed in a written project agreement before work begins. Quotes
              are valid for 30 days from the date of issue unless otherwise stated. Changes to
              project scope, site conditions, or material costs discovered during the project may
              result in a revised quote, which must be approved in writing before additional work
              proceeds.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Payment Terms</h2>
            <p className="type-body text-base-content/80">
              A deposit is required before work begins; the specific amount will be outlined in
              your project agreement. The remaining balance is due upon completion of the agreed
              scope of work, unless alternate arrangements are confirmed in writing. Invoices not
              paid within 30 days of the due date may be subject to interest charges as permitted
              under Ontario law. Title to any materials supplied does not transfer to the customer
              until full payment is received.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Cancellation and Rescheduling</h2>
            <p className="type-body text-base-content/80">
              If you need to cancel or reschedule a booked service, please provide at least
              48 hours&apos; notice. Cancellations with less than 48 hours&apos; notice, or
              no-shows, may be subject to a cancellation fee to cover mobilisation costs. Deposits
              may be partially or fully non-refundable where materials have already been ordered
              or preparatory work has been completed.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Workmanship Warranty</h2>
            <p className="type-body text-base-content/80">
              We stand behind the quality of our work. {siteConfig.name} provides a standard
              workmanship warranty on all completed concrete installations. The warranty covers
              defects in workmanship for a period specified in your project agreement. It does not
              cover damage caused by normal settling, freeze-thaw cycles beyond standard Northern
              Ontario conditions, improper use, or events outside our control. Material warranties
              are provided by the manufacturer and are separate from our workmanship warranty.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Customer Responsibilities</h2>
            <p className="type-body text-base-content/80">
              You are responsible for ensuring that the work site is accessible, that underground
              utilities are located and marked prior to excavation, and that any required permits
              are obtained before work begins (unless otherwise agreed in your project contract).
              Delays caused by site inaccessibility or missing permits may result in rescheduling
              and additional charges.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Limitation of Liability</h2>
            <p className="type-body text-base-content/80">
              To the fullest extent permitted by the laws of Ontario and Canada, {siteConfig.name}{" "}
              shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our website or services. Our total
              liability for any claim arising from a specific project shall not exceed the total
              amount paid for that project.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Governing Law</h2>
            <p className="type-body text-base-content/80">
              These Terms of Service are governed by and construed in accordance with the laws of
              the Province of Ontario and the federal laws of Canada applicable therein. Any
              dispute arising under or in connection with these terms shall be subject to the
              exclusive jurisdiction of the courts of the Province of Ontario, sitting in Thunder
              Bay.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Contact Us</h2>
            <p className="type-body text-base-content/80 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <address className="not-italic type-body text-base-content/80 space-y-1.5">
              <p><strong>{siteConfig.name}</strong></p>
              <p>{siteConfig.location.city}, {siteConfig.location.province}</p>
              <p>
                Phone:{" "}
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="underline underline-offset-2">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
