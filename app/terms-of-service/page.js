import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
  title: "Terms of Service | SmartSoft Solutions",
  description: "Review the terms and conditions for using SmartSoft Solutions' website and services.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    title: "Terms of Service | SmartSoft Solutions",
    description: "The rules and guidelines for using our website and services.",
    url: `${SITE_URL}/terms-of-service`,
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' }],
  },
  twitter: { card: 'summary_large_image', title: "Terms of Service | SmartSoft Solutions", description: "The rules and guidelines for using our website and services." },
};

export default function TermsOfServicePage() {
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Terms of Service', url: `${SITE_URL}/terms-of-service` }
  ], SITE_URL);
  const webPageSchema = webPage({ name: 'Terms of Service', description: 'Terms and conditions for using SmartSoft Solutions website and services.', url: `${SITE_URL}/terms-of-service` });
  const breadcrumbItems = [{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms-of-service' }];

  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema([breadcrumbSchema, webPageSchema]) }} />
      <Breadcrumb items={breadcrumbItems} className="mb-6" />
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-4">By accessing or using the SmartSoft Solutions website and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Our Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You must be at least 18 years old to use our services.</li>
        <li>You agree not to misuse our services or help anyone else do so.</li>
        <li>All content is for informational purposes only and may be updated at any time.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4">All content, trademarks, and data on this website are the property of SmartSoft Solutions or its licensors. Unauthorized use is prohibited.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">SmartSoft Solutions is not liable for any damages arising from the use or inability to use our website or services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4">We may update these Terms of Service at any time. Continued use of the website means you accept the new terms.</p>
      <p className="text-sm text-gray-500 mt-8">Effective date: February 3, 2026</p>
    </div>
  );
}
