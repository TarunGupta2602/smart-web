import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = "https://www.smartsoftsolutions.org";
const CONTACT_EMAIL = "smartsoft.solutions0@gmail.com";
const SERVICE_MODEL = "SK2 Shastri Nagar, Ghaziabad, Uttar Pradesh 201002";

export const metadata = {
  title: "Terms of Service | SmartSoft Solutions",
  description:
    "Terms governing use of the SmartSoft Solutions website and website development, e-commerce, web app, SEO, and digital marketing services.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    title: "Terms of Service | SmartSoft Solutions",
    description: "Rules for using our website and development services.",
    url: `${SITE_URL}/terms-of-service`,
    type: "website",
    siteName: "SmartSoft Solutions",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SmartSoft Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | SmartSoft Solutions",
    description: "Rules for using our website and development services.",
  },
};

export default function TermsOfServicePage() {
  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Terms of Service", url: `${SITE_URL}/terms-of-service` },
    ],
    SITE_URL
  );
  const webPageSchema = webPage({
    name: "Terms of Service",
    description:
      "Terms governing use of SmartSoft Solutions website and digital services.",
    url: `${SITE_URL}/terms-of-service`,
  });
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms-of-service" },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema([breadcrumbSchema, webPageSchema]) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Effective date: September 14, 2026 · Last updated: September 14, 2026
          </p>

          <p className="text-[15px] text-slate-600 leading-relaxed mb-10">
            By accessing{" "}
            <a href={SITE_URL} className="text-[#0f3d68] hover:underline">
              www.smartsoftsolutions.org
            </a>{" "}
            or engaging SmartSoft Solutions for website development, e-commerce, web apps, SEO, or digital marketing,
            you agree to these Terms of Service. If you do not agree, do not use our website or services.
          </p>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">1. Who we are</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              SmartSoft Solutions provides digital product and growth services, including business websites, online
              stores, custom web applications, search engine optimization, and digital marketing. Work is delivered
              remotely with fixed project quotes where agreed in writing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">2. Using our website</h2>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>You must be at least 18 years old (or the age of majority in your jurisdiction) to request services.</li>
              <li>Do not misuse the site, attempt unauthorized access, or disrupt our systems.</li>
              <li>Website content is informational and may change without notice; it is not legal or financial advice.</li>
              <li>Quotes, timelines, and features become binding only when confirmed in a written proposal or agreement.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">3. Project services</h2>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>
                <span className="font-medium text-slate-800">Scope</span> — Deliverables, timeline, and price are
                defined in the quote or statement of work. Work outside that scope may require a change request and
                additional fees.
              </li>
              <li>
                <span className="font-medium text-slate-800">Client responsibilities</span> — Provide timely content,
                feedback, access credentials, and approvals needed to complete the project.
              </li>
              <li>
                <span className="font-medium text-slate-800">Payments</span> — Fees are due as stated in the quote
                (for example deposit + milestone or final payment). Late payment may pause work.
              </li>
              <li>
                <span className="font-medium text-slate-800">Third-party tools</span> — Hosting, domains, payment
                gateways, APIs, and licenses may have separate fees and terms owned by those providers.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">4. Intellectual property</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>
                Upon full payment, you receive ownership or a license to use the custom project deliverables created
                specifically for you (as specified in the quote).
              </li>
              <li>
                SmartSoft Solutions retains rights to pre-existing tools, libraries, frameworks, and reusable
                components used in delivery.
              </li>
              <li>
                Site content, branding, and marketing materials on smartsoftsolutions.org remain our property.
              </li>
              <li>
                You confirm you have rights to materials you provide (logos, copy, images, product data).
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">5. Portfolio use</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Unless you ask us in writing not to, we may reference your project name, public website, and non-sensitive
              screenshots in our portfolio and marketing after launch.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">6. Warranties and limitation of liability</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              Services are provided professionally and in good faith. Except as required by law:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>We do not guarantee specific search rankings, traffic, or revenue outcomes.</li>
              <li>We are not liable for third-party outages, browser changes, or hosting/provider failures beyond our control.</li>
              <li>
                To the maximum extent permitted by law, our total liability for a project is limited to the fees you
                paid us for that project in the three months before the claim.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">7. Cancellation and refunds</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Cancellations and refunds are governed by our{" "}
              <a href="/refund-policy" className="text-[#0f3d68] hover:underline">
                Refund Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">8. Privacy</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Personal information is handled as described in our{" "}
              <a href="/privacy-policy" className="text-[#0f3d68] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">9. Governing law</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              These terms are governed by the laws of India. Courts in India shall have jurisdiction, without prejudice to any mandatory consumer protections that apply in your location.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">10. Changes</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We may update these Terms of Service. Continued use of the website after changes means you accept the
              updated terms. For active projects, material changes to the service agreement will be confirmed in writing.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">11. Contact</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              SmartSoft Solutions
              <br />
              {SERVICE_MODEL}
              <br />
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0f3d68] hover:underline">
                {CONTACT_EMAIL}
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+917456096455" className="text-[#0f3d68] hover:underline">
                +91 74560 96455
              </a>
              {" "}(primary) · US:{" "}
              <a href="tel:+17077084062" className="text-[#0f3d68] hover:underline">
                +1 707 708 4062
              </a>
              <br />
              WhatsApp:{" "}
              <a href="https://wa.me/917456096455" className="text-[#0f3d68] hover:underline">
                +91 74560 96455
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
