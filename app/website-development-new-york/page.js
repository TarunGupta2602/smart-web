import ServiceContent from "./ServiceContent";
import Breadcrumb from "../components/Breadcrumb";
import { service, breadcrumbList, faqPage, stringifySchema } from "@/lib/schema";
import { nycData } from "@/lib/seoData";

const SITE_URL = 'https://www.smartsoftsolutions.org';
const PAGE_URL = `${SITE_URL}/website-development-new-york`;

export const metadata = {
    title: "Elite Website Development New York City | SmartSoft Solutions",
    description: "Scale your revenue with premier website development services in New York City. SmartSoft Solutions engineers high-performance, SEO-dominant platforms for NYC businesses.",
    keywords: [
        "Website Development Services in New York City",
        "Web Development NYC",
        "Professional Web Developers New York",
        "Custom Website Design NYC",
        "Ecommerce Development New York",
        "Responsive Web Design NYC",
        "NYC Tech Startup Development",
        "Business Website Design NYC"
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "NYC Website Development | Strategic Digital Engineering",
        description: "Scale your New York business with elite website development and strategic digital solutions.",
        url: PAGE_URL,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/images/banner.jpg', width: 1200, height: 630, alt: 'Website Development NYC' }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'Website Development Services in New York City',
        description: 'Elite web engineering for New York businesses and startups.',
        images: ['/images/banner.jpg']
    }
};

export default function ServicePage() {
    const serviceSchema = service({
        name: 'Website Development Services in New York City',
        description: 'Professional website development solutions for startups, small businesses, and growing companies in NYC.',
        url: PAGE_URL,
        serviceType: 'Website Development',
        areaServed: 'New York City'
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: '/' },
        { name: 'Website Development NYC', url: '/website-development-new-york' }
    ]);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Website Development NYC', url: '/website-development-new-york' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([serviceSchema, breadcrumbSchema, faqPage(nycData.faqs)]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " />
            <ServiceContent />
        </>
    );
}
