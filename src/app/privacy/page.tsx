import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information in accordance with PIPEDA.`,
};

export default function PrivacyPage() {
  return (
    <div className="section-bg-deep min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="type-section mb-3">Privacy Policy</h1>
        <p className="type-small text-base-content/50 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="type-card mb-4">Introduction</h2>
            <p className="type-body text-base-content/80">
              {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
              protecting your personal information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your personal information when
              you visit our website or use our services, in accordance with the{" "}
              <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and
              applicable provincial privacy legislation in Ontario.
            </p>
            <p className="type-body text-base-content/80 mt-4">
              By using our website or contacting us, you consent to the collection and use of
              your personal information as described in this policy.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Information We Collect</h2>
            <p className="type-body text-base-content/80 mb-4">
              We collect only the personal information necessary to respond to your enquiries and
              provide concrete and foundation services. This includes:
            </p>
            <ul className="list-disc list-inside type-body text-base-content/80 space-y-2 ml-2">
              <li>
                <strong>Contact form submissions:</strong> your name, email address, phone number,
                and the content of your message
              </li>
              <li>
                <strong>Quote requests:</strong> service location or address, project details, and
                preferred contact method
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type, operating system, and
                pages visited — collected automatically via cookies and server logs
              </li>
            </ul>
            <p className="type-body text-base-content/80 mt-4">
              We do not collect sensitive personal information such as financial account numbers,
              government identification numbers, or health data.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">How We Use Your Information</h2>
            <p className="type-body text-base-content/80 mb-4">
              Your personal information is used only for the purposes for which it was collected:
            </p>
            <ul className="list-disc list-inside type-body text-base-content/80 space-y-2 ml-2">
              <li>Responding to your enquiries and providing project quotes</li>
              <li>Scheduling site visits and delivering contracted services</li>
              <li>Sending service-related communications (invoices, project updates)</li>
              <li>Improving our website experience and service offerings</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>
            <p className="type-body text-base-content/80 mt-4">
              We will not use your information for unrelated purposes without first obtaining
              your consent, as required under PIPEDA.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Disclosure of Personal Information</h2>
            <p className="type-body text-base-content/80">
              We do not sell, rent, or trade your personal information to third parties for
              marketing or any other purpose. Your information may be shared only in the following
              limited circumstances:
            </p>
            <ul className="list-disc list-inside type-body text-base-content/80 space-y-2 ml-2 mt-4">
              <li>
                <strong>Service providers:</strong> trusted third-party vendors who assist us in
                operating our website or delivering services (e.g., email delivery), bound by
                confidentiality obligations
              </li>
              <li>
                <strong>Legal requirements:</strong> when disclosure is required by law, court
                order, or government authority
              </li>
              <li>
                <strong>Business transfers:</strong> in the unlikely event of a sale or merger of
                our business, subject to confidentiality protections
              </li>
            </ul>
          </div>

          <div>
            <h2 className="type-card mb-4">Cookies and Tracking Technologies</h2>
            <p className="type-body text-base-content/80">
              Our website may use cookies and similar technologies to improve your browsing
              experience and analyse site traffic. Cookies are small text files stored on your
              device. You can control or disable cookies through your browser settings; however,
              doing so may affect the functionality of certain parts of our website.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Data Security</h2>
            <p className="type-body text-base-content/80">
              We implement reasonable technical and organisational safeguards to protect your
              personal information from unauthorised access, disclosure, alteration, or destruction.
              While we strive to use commercially acceptable means to protect your information,
              no method of transmission over the Internet is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Retention of Information</h2>
            <p className="type-body text-base-content/80">
              We retain personal information only as long as necessary to fulfil the purposes for
              which it was collected, or as required by law. Contact and quote enquiries are
              generally retained for up to two years. You may request deletion of your information
              at any time (see &quot;Your Rights&quot; below).
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Your Rights Under PIPEDA</h2>
            <p className="type-body text-base-content/80 mb-4">
              Under the <em>Personal Information Protection and Electronic Documents Act</em>
              (PIPEDA), you have the right to:
            </p>
            <ul className="list-disc list-inside type-body text-base-content/80 space-y-2 ml-2">
              <li>Know what personal information we hold about you</li>
              <li>Access your personal information and request a copy</li>
              <li>Challenge the accuracy of your information and request corrections</li>
              <li>Withdraw consent to the collection or use of your information (subject to
                legal or contractual restrictions)</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>
            <p className="type-body text-base-content/80 mt-4">
              To exercise any of these rights, please contact us using the information below.
              We will respond to your request within 30 days, as required by PIPEDA.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Changes to This Policy</h2>
            <p className="type-body text-base-content/80">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or applicable law. Any updates will be posted on this page with a revised
              date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">Contact Us</h2>
            <p className="type-body text-base-content/80 mb-4">
              If you have questions or concerns about this Privacy Policy, or wish to exercise
              your rights under PIPEDA, please contact us:
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
