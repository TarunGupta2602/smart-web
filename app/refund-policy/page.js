export const metadata = {
  title: "Refund Policy | SmartSoft Solutions",
  description: "Read our refund policy to understand the terms for refunds and cancellations at SmartSoft Solutions.",
  alternates: { canonical: 'https://smartsoftsolutions.org/refund-policy' },
  openGraph: {
    title: "Refund Policy | SmartSoft Solutions",
    description: "Our terms and conditions for refunds and cancellations.",
    url: 'https://smartsoftsolutions.org/refund-policy',
    type: 'article',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <p className="mb-4">We strive for customer satisfaction. Please review our refund policy below for details on eligibility and process.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Eligibility for Refunds</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Refunds are available for services not delivered as agreed.</li>
        <li>Requests must be made within 14 days of purchase.</li>
        <li>Custom software and digital products may not be eligible for refunds once delivered.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
      <p className="mb-4">To request a refund, contact us at support@smartsoftsolutions.org with your order details and reason for the request. We will review and respond within 5 business days.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Exceptions</h2>
      <p className="mb-4">Refunds are not provided for change of mind or services already rendered in full. Please contact us for any concerns or clarifications.</p>
      <p className="text-sm text-gray-500 mt-8">Effective date: February 3, 2026</p>
    </div>
  );
}
