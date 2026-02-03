export const metadata = {
  title: "Privacy Policy | SmartSoft Solutions",
  description: "Read our privacy policy to understand how SmartSoft Solutions collects, uses, and protects your information.",
  alternates: { canonical: 'https://smartsoftsolutions.org/privacy-policy' },
  openGraph: {
    title: "Privacy Policy | SmartSoft Solutions",
    description: "How we collect, use, and protect your data.",
    url: 'https://smartsoftsolutions.org/privacy-policy',
    type: 'article',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
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
