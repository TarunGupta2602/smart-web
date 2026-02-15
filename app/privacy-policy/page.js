import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
  title: "Privacy Policy | SmartSoft Solutions",
  description: "Read our privacy policy to understand how SmartSoft Solutions collects, uses, and protects your information.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | SmartSoft Solutions",
    description: "How we collect, use, and protect your data.",
    url: `${SITE_URL}/privacy-policy`,
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' }],
  },
  twitter: { card: 'summary_large_image', title: "Privacy Policy | SmartSoft Solutions", description: "How we collect, use, and protect your data." },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Privacy Policy', url: `${SITE_URL}/privacy-policy` }
  ], SITE_URL);
  const webPageSchema = webPage({ name: 'Privacy Policy', description: 'How SmartSoft Solutions collects, uses, and protects your information.', url: `${SITE_URL}/privacy-policy` });
  const breadcrumbItems = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy' }];

  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifySchema([breadcrumbSchema, webPageSchema]) }} />
      <Breadcrumb items={breadcrumbItems} className="mb-6" />
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how SmartSoft Solutions collects, uses, and protects your personal information when you use our website and services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Usage data and cookies</li>
        <li>Other information you provide via forms or communication</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and maintain our services</li>
        <li>To communicate with you</li>
        <li>To improve our website and services</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Protect Your Information</h2>
      <p className="mb-4">We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely and only accessible by authorized personnel.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">You have the right to access, correct, or delete your personal information. Contact us at support@smartsoftsolutions.org for any privacy-related requests.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
      <p className="mb-4">We may update our Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
      <p className="text-sm text-gray-500 mt-8">Effective date: February 3, 2026</p>
    </div>
  );
}
