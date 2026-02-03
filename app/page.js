import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import { organization, webSite, breadcrumbList, stringifySchema } from "@/lib/schema";

export const metadata = {
  title: "SmartSoft Solutions | Engineering Excellence & Strategic Brand Growth",
  description: "Transform your business with SmartSoft Solutions. We are a global leader in digital engineering, high-end web development, and strategic brand growth. Partner with us for innovative software solutions and measurable business results.",
  keywords: [
    "Digital Engineering Noida", "Digital Engineering USA", "Web Development Agency", "Strategic Brand Growth", "Software Solutions", "Technical Consulting", "Digital Marketing", "SEO Services", "Brand Consulting", "Custom Software Development"
  ],
  alternates: {
    canonical: 'https://smartsoftsolutions.org',
  },
  openGraph: {
    title: "SmartSoft Solutions | Engineering Excellence & Brand Growth",
    description: "Transform your business with our elite digital engineering, web development, and global marketing solutions. Trusted by global brands.",
    url: 'https://smartsoftsolutions.org',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions - Digital Engineering & Brand Growth' },
      { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
    ],
    type: 'website',
    siteName: 'SmartSoft Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartSoftSolutions',
    title: 'SmartSoft Solutions | Engineering Excellence & Brand Growth',
    description: 'Transform your business with our elite digital engineering, web development, and global marketing solutions.',
    images: ['/og-image.jpg']
  }
};

export default function Homepage() {
  const orgSchema = organization({
    logo: '/images/logo.png',
    description: 'SmartSoft Solutions is a leading digital engineering firm and one-stop shop for web development, software solutions, and brand marketing.'
  });
  const siteSchema = webSite({
    description: 'SmartSoft Solutions - Digital Engineering & Growth Experts'
  });
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: 'https://smartsoftsolutions.org/' }
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema([orgSchema, siteSchema, breadcrumbSchema]) }}
      />
      <HeroSlider />
      <ServicesSection />
      <PricingIndustriesSection />
      <ClientsSection />
      <FAQSection />
    </div>
  );
}