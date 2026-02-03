export const metadata = {
  title: "Cookie Policy | SmartSoft Solutions",
  description: "Learn how SmartSoft Solutions uses cookies and similar technologies on our website.",
  alternates: { canonical: 'https://smartsoftsolutions.org/cookie-policy' },
  openGraph: {
    title: "Cookie Policy | SmartSoft Solutions",
    description: "How we use cookies and your choices.",
    url: 'https://smartsoftsolutions.org/cookie-policy',
    type: 'article',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="mb-4">This Cookie Policy explains how SmartSoft Solutions uses cookies and similar technologies to recognize you when you visit our website.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">What Are Cookies?</h2>
      <p className="mb-4">Cookies are small data files placed on your device when you visit a website. They help us improve your experience and analyze site usage.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To remember your preferences and settings</li>
        <li>To analyze website traffic and usage</li>
        <li>To provide relevant content and offers</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Choices</h2>
      <p className="mb-4">You can control cookies through your browser settings. Disabling cookies may affect your experience on our website.</p>
      <p className="text-sm text-gray-500 mt-8">Effective date: February 3, 2026</p>
    </div>
  );
}
