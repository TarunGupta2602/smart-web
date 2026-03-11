import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import { breadcrumbList, stringifySchema } from "@/lib/schema";

export const metadata = {
  title: "SmartSoft Solutions | Website & App Development for USA Small Business",
  description: "SmartSoft Solutions specializes in website development, mobile app development, and professional content writing for USA small businesses and startups. Get fast, secure, and SEO-optimized digital solutions to grow your business online.",
  keywords: [
    "Website Development USA", "Mobile App Development USA", "Content Writing Services USA", "Small Business Websites", "Startup Web Solutions", "SEO Web Design", "Affordable App Development", "Professional Content Writing", "Fast Website Launch", "Custom Web Development"
  ],
  alternates: {
    canonical: 'https://smartsoftsolutions.org',
  },
  openGraph: {
    title: "SmartSoft Solutions | Website & App Development for USA Small Business",
    description: "Get custom websites, mobile apps, and content writing services for your small business or startup. Fast delivery, SEO-focused, and affordable pricing.",
    url: 'https://smartsoftsolutions.org',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions - Website & App Development' },
      { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
    ],
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartSoftSolutions',
    title: 'SmartSoft Solutions | Website & App Development for USA Small Business',
    description: 'Get custom websites, mobile apps, and content writing services for your small business or startup. Fast delivery, SEO-focused, and affordable pricing.',
    images: ['/og-image.jpg']
  }
};

export default function Homepage() {
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: 'https://www.smartsoftsolutions.org/' }
  ]);
  const testimonials = [
    {
      quote: "SmartSoft Solutions delivered our website in just 48 hours. The process was smooth and the result exceeded our expectations!",
      name: "Sarah M., Startup Founder"
    },
    {
      quote: "The mobile app they built for us is fast, reliable, and beautifully designed. Highly recommended for small businesses.",
      name: "James T., Small Business Owner"
    },
    {
      quote: "Their content writing team helped us boost our online presence and attract more customers. Great service and communication.",
      name: "Priya S., Marketing Lead"
    },
    {
      quote: "Affordable, professional, and always available for support. We trust SmartSoft for all our digital needs.",
      name: "Michael D., Agency Partner"
    }
  ];
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }}
        />
        <section className="mb-12 md:mb-16 lg:mb-20">
          <HeroSlider />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <ServicesSection />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <PricingIndustriesSection />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <ClientsSection />
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20">
          <FAQSection />
        </section>
        {/* Testimonials Section */}
        <section className="mb-12 md:mb-16 lg:mb-24 bg-yellow-50 border border-yellow-100 rounded-3xl shadow-xl py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="w-full">
              <h2 className="text-3xl md:text-5xl font-black text-yellow-700 mb-10 uppercase tracking-tighter">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-md p-8 border border-yellow-100 flex flex-col items-center justify-center">
                    <p className="text-lg md:text-xl text-gray-800 font-medium mb-6 italic">"{t.quote}"</p>
                    <span className="text-sm font-bold text-yellow-700 uppercase tracking-widest">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
// ...existing code...
}