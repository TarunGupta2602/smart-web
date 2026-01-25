import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";
import FAQSection from "./components/faq-section";
import { organization, webSite, stringifySchema } from "@/lib/schema";

export const metadata = {
  title: "Engineering Excellence & Strategic Brand Growth",
  description: "Transform your business with SmartSoft Solutions. We specialize in digital engineering, high-end web development, and global marketing strategies.",
  keywords: ["Digital Engineering Noida", "Digital Engineering USA", "Web Development Agency", "Strategic Brand Growth", "Software Solutions", "Technical Consulting"],
  alternates: {
    canonical: 'https://smartsoftsolutions.org',
  },
  openGraph: {
    title: "SmartSoft Solutions | Engineering Excellence",
    description: "Transform your business with our elite digital engineering and strategic marketing solutions.",
    url: 'https://smartsoftsolutions.org',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function Homepage() {
  const orgSchema = organization({
    logo: '/images/logo.png', // Assuming logo.png exists in public
    description: 'SmartSoft Solutions is a leading digital engineering firm and one-stop shop for web development, software solutions, and brand marketing.'
  });
  const siteSchema = webSite({
    description: 'SmartSoft Solutions - Digital Engineering & Growth Experts'
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema([orgSchema, siteSchema]) }}
      />
      <HeroSlider />
      <ServicesSection />
      <PricingIndustriesSection />
      <ClientsSection />
      <FAQSection />
    </div>
  );
}