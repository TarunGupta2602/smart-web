import HeroSlider from "./components/hero-slider";
import ServicesSection from "./components/services-section";
import PricingIndustriesSection from "./components/pricing-industries-section";
import ClientsSection from "./components/clients-section";

export default function Homepage() {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <PricingIndustriesSection />
      <ClientsSection />
    </div>
  )
}