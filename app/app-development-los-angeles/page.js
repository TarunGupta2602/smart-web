import AppServiceContent from "./AppServiceContent";
import Breadcrumb from "../components/Breadcrumb";
import { service, breadcrumbList, faqPage, stringifySchema } from "@/lib/schema";
import { laData } from "@/lib/seoData";

const SITE_URL = 'https://www.smartsoftsolutions.org';
const PAGE_URL = `${SITE_URL}/app-development-los-angeles`;

export const metadata = {
    title: "Elite App Development Services in Los Angeles | SmartSoft Solutions",
    description: "Launch your visionary mobile app with elite engineering in Los Angeles. SmartSoft Solutions builds high-performance, secure, and world-class iOS and Android applications.",
    keywords: [
        "App Development Services in Los Angeles",
        "Mobile App Development LA",
        "Professional App Developers Los Angeles",
        "Custom Mobile Solutions LA",
        "iOS and Android Development LA",
        "Hire App Developers Los Angeles",
        "Silicon Beach App Development",
        "Enterprise Mobile Apps LA"
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "LA App Development | Strategic Mobile Engineering",
        description: "Dominate the Los Angeles market with elite mobile app development and strategic digital products.",
        url: PAGE_URL,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/images/about-us-banner.jpg', width: 1200, height: 630, alt: 'App Development LA' }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'App Development Services in Los Angeles',
        description: 'Elite mobile engineering for Los Angeles startups and businesses.',
        images: ['/images/about-us-banner.jpg']
    }
};

export default function AppServicePage() {
    const serviceSchema = service({
        name: 'App Development Services in Los Angeles',
        description: 'Professional mobile app development solutions for startups, businesses, and entrepreneurs in Los Angeles.',
        url: PAGE_URL,
        serviceType: 'Mobile App Development',
        areaServed: 'Los Angeles'
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: '/' },
        { name: 'App Development LA', url: '/app-development-los-angeles' }
    ]);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'App Development LA', url: '/app-development-los-angeles' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([serviceSchema, breadcrumbSchema, faqPage(laData.faqs)]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " />
            <AppServiceContent />
        </>
    );
}
