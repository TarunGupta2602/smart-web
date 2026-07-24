import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
  title: "Refund Policy | SmartSoft Solutions",
  description: "Read our refund policy to understand the terms for refunds and cancellations at SmartSoft Solutions.",
  alternates: { canonical: `${SITE_URL}/refund-policy` },
  openGraph: {
    title: "Refund Policy | SmartSoft Solutions",
    description: "Our terms and conditions for refunds and cancellations.",
    url: `${SITE_URL}/refund-policy`,
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' }],
  },
  twitter: { card: 'summary_large_image', title: "Refund Policy | SmartSoft Solutions", description: "Our terms and conditions for refunds and cancellations." },
  other: {
    category: 'Refund Policy',
    classification: 'Legal',
  },
};

export default function RefundPolicyPage() {
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Refund Policy', url: `${SITE_URL}/refund-policy` }
  ], SITE_URL);
  const webPageSchema = webPage({ name: 'Refund Policy', description: 'Terms for refunds and cancellations at SmartSoft Solutions.', url: `${SITE_URL}/refund-policy` });
  const breadcrumbItems = [{ name: 'Home', url: '/' }, { name: 'Refund Policy', url: '/refund-policy' }];

  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema([breadcrumbSchema, webPageSchema]) }} />
      <Breadcrumb items={breadcrumbItems} className="mb-6" />
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <p className="mb-4">We strive for customer satisfaction. Please review our refund policy below for details on eligibility and process.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Eligibility for Refunds</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Refunds are available for services not delivered as agreed.</li>
        <li>Requests must be made within 14 days of purchase.</li>
        <li>Custom software and digital products may not be eligible for refunds once delivered.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
      <p className="mb-4">To request a refund, contact us at smartsoft.solutions0@gmail.com with your order details and reason for the request. We will review and respond within 5 business days.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Exceptions</h2>
      <p className="mb-4">Refunds are not provided for change of mind or services already rendered in full. Please contact us for any concerns or clarifications.</p>
      <p className="text-sm text-gray-500 mt-8">Effective date: February 3, 2026</p>
    </div>
  );
}
