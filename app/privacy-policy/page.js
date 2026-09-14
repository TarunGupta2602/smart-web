import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = "https://www.smartsoftsolutions.org";
const CONTACT_EMAIL = "smartsoftsols@gmail.com";
const INDIA_ADDRESS = "H-25 Sec 63, Basement Floor, Noida 201301, India";

export const metadata = {
  title: "Privacy Policy | SmartSoft Solutions",
  description:
    "How SmartSoft Solutions collects, uses, and protects personal information for website development, e-commerce, and digital service clients.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | SmartSoft Solutions",
    description: "How we collect, use, and protect your data.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    siteName: "SmartSoft Solutions",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SmartSoft Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SmartSoft Solutions",
    description: "How we collect, use, and protect your data.",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Privacy Policy", url: `${SITE_URL}/privacy-policy` },
    ],
    SITE_URL
  );
  const webPageSchema = webPage({
    name: "Privacy Policy",
    description:
      "How SmartSoft Solutions collects, uses, and protects personal information for website and digital service clients.",
    url: `${SITE_URL}/privacy-policy`,
  });
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
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
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Effective date: September 14, 2026 · Last updated: September 14, 2026
          </p>

          <div className="space-y-4 text-[15px] text-slate-600 leading-relaxed mb-10">
            <p>
              SmartSoft Solutions (“we”, “us”, or “our”) builds business websites, e-commerce stores, web apps,
              SEO, and digital marketing services. This Privacy Policy explains how we collect, use, store, and
              protect personal information when you visit{" "}
              <a href={SITE_URL} className="text-[#0f3d68] hover:underline">
                www.smartsoftsolutions.org
              </a>
              , request a quote, or use our services.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">1. Information we collect</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              We may collect:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>
                <span className="font-medium text-slate-800">Contact details</span> — name, email, phone number,
                company name, and messages you send through our contact form, WhatsApp, or email.
              </li>
              <li>
                <span className="font-medium text-slate-800">Project details</span> — goals, budget range, timeline,
                and files you share for website, e-commerce, or web app quotes.
              </li>
              <li>
                <span className="font-medium text-slate-800">Usage data</span> — pages visited, approximate location
                derived from IP, device/browser type, and referral source.
              </li>
              <li>
                <span className="font-medium text-slate-800">Cookies and similar tech</span> — as described in our{" "}
                <a href="/cookie-policy" className="text-[#0f3d68] hover:underline">
                  Cookie Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">2. How we use your information</h2>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>To respond to quote requests and deliver website development or related services</li>
              <li>To communicate about project scope, timelines, invoices, and support</li>
              <li>To improve our website, content, and service quality</li>
              <li>To measure marketing performance (for example analytics or ads, where enabled)</li>
              <li>To comply with legal obligations and protect our rights</li>
            </ul>
            <p className="text-[15px] text-slate-600 leading-relaxed mt-3">
              We do not sell your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">3. Sharing of information</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              We may share information only with:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>Trusted service providers (hosting, email, analytics, payment processors) who help us operate</li>
              <li>Professional advisors when required</li>
              <li>Authorities when legally required</li>
            </ul>
            <p className="text-[15px] text-slate-600 leading-relaxed mt-3">
              Project credentials and client content are handled confidentially and used only to deliver the agreed work.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">4. Data storage and security</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We use reasonable technical and organizational measures to protect personal information. No method of
              transmission over the internet is 100% secure. You should also keep any login credentials we provide
              confidential after project handoff.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">5. Retention</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We keep personal information only as long as needed for the purposes above — including project records,
              invoices, and legal compliance — then delete or anonymize it when appropriate.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">6. Your rights</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              Depending on applicable law, you may request access, correction, deletion, or restriction of your
              personal information. Contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0f3d68] hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">7. Third-party links</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Our site may link to third-party websites or tools. Their privacy practices are their own; please review
              their policies separately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">8. Changes to this policy</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with
              a new effective date.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">9. Contact</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              SmartSoft Solutions
              <br />
              {INDIA_ADDRESS}
              <br />
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0f3d68] hover:underline">
                {CONTACT_EMAIL}
              </a>
              <br />
              Phone:{" "}
              <a href="tel:17077084062" className="text-[#0f3d68] hover:underline">
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
