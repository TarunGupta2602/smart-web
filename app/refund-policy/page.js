import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = "https://www.smartsoftsolutions.org";
const CONTACT_EMAIL = "smartsoft.solutions0@gmail.com";
const INDIA_ADDRESS = "H-25 Sec 63, Basement Floor, Noida 201301, India";

export const metadata = {
  title: "Refund Policy | SmartSoft Solutions",
  description:
    "Refund and cancellation terms for SmartSoft Solutions website development, e-commerce, web app, SEO, and digital marketing projects.",
  alternates: { canonical: `${SITE_URL}/refund-policy` },
  openGraph: {
    title: "Refund Policy | SmartSoft Solutions",
    description: "Refund and cancellation terms for digital project services.",
    url: `${SITE_URL}/refund-policy`,
    type: "website",
    siteName: "SmartSoft Solutions",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SmartSoft Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | SmartSoft Solutions",
    description: "Refund and cancellation terms for digital project services.",
  },
};

export default function RefundPolicyPage() {
  const breadcrumbSchema = breadcrumbList(
    [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Refund Policy", url: `${SITE_URL}/refund-policy` },
    ],
    SITE_URL
  );
  const webPageSchema = webPage({
    name: "Refund Policy",
    description:
      "Refund and cancellation terms for SmartSoft Solutions website and digital services.",
    url: `${SITE_URL}/refund-policy`,
  });
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Refund Policy", url: "/refund-policy" },
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
            Refund Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Effective date: September 14, 2026 · Last updated: September 14, 2026
          </p>

          <p className="text-[15px] text-slate-600 leading-relaxed mb-10">
            This Refund Policy applies to website development, e-commerce builds, web apps, SEO, and digital marketing
            projects quoted and delivered by SmartSoft Solutions. Fixed quotes and payment schedules in your written
            proposal take priority when they differ from this page.
          </p>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">1. How our projects are billed</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              Most projects use a fixed quote with a deposit before work starts and remaining payments at milestones or
              before launch. Because digital work begins after the deposit, refunds are limited once productive work has
              started.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">2. When refunds may apply</h2>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>
                <span className="font-medium text-slate-800">Before work starts</span> — If you cancel after paying a
                deposit but before we begin design or development, we may refund the deposit minus any non-recoverable
                third-party costs already incurred (for example domain, licenses, or paid tools purchased at your
                request).
              </li>
              <li>
                <span className="font-medium text-slate-800">Service not delivered as agreed</span> — If we fail to
                deliver the agreed scope without a reasonable plan to remedy, you may be eligible for a partial or full
                refund of amounts paid for undelivered work, assessed case by case.
              </li>
              <li>
                <span className="font-medium text-slate-800">Duplicate / erroneous payment</span> — Accidental duplicate
                payments will be refunded after verification.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">3. Non-refundable items</h2>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>Work already completed and accepted (design, development, content, SEO tasks, campaigns run)</li>
              <li>Completed milestones marked approved in writing or by continued use of deliverables</li>
              <li>Change-of-mind after development or design work has started</li>
              <li>Third-party fees (hosting, domains, app store fees, ad spend, SaaS subscriptions)</li>
              <li>Custom code, designs, or assets already delivered and transferred to you</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">4. Client delays and cancellations</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              If a project stalls because required content, feedback, or access is not provided within a reasonable
              time (typically 14 days after request), we may pause the project. Deposits for work already performed are
              not refundable. Unused prepaid amounts for incomplete milestones may be credited toward resumed work
              within 90 days, subject to a revised quote.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">5. How to request a refund</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed mb-3">
              Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0f3d68] hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              with:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-[15px] text-slate-600 leading-relaxed">
              <li>Your name and company</li>
              <li>Project / invoice reference</li>
              <li>Payment date and amount</li>
              <li>Reason for the request</li>
            </ul>
            <p className="text-[15px] text-slate-600 leading-relaxed mt-3">
              We review requests within 5 business days. Approved refunds are returned to the original payment method
              within 7–14 business days, depending on your bank or payment provider.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">6. Chargebacks</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Please contact us before filing a payment dispute. Unwarranted chargebacks for delivered work may result
              in suspension of services and recovery of fees, including dispute costs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">7. Related policies</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              See also our{" "}
              <a href="/terms-of-service" className="text-[#0f3d68] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-[#0f3d68] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-display text-2xl font-semibold text-slate-900 mb-3">8. Contact</h2>
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
