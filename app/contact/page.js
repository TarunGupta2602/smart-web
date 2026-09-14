import ContactContent from "./ContactContent";
import Breadcrumb from "../components/Breadcrumb";
import { organization, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Get a Project Quote | Contact SmartSoft Solutions",
    description: "Request a quote for a business website, e-commerce store, or web app. SmartSoft Solutions replies with scope, timeline, and a clear price.",
    keywords: ["website quote", "e-commerce development quote", "hire web development company", "contact SmartSoft Solutions"],
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Get a Project Quote | SmartSoft Solutions",
        description: "Share your brief — we reply with scope and a fixed quote for websites, stores, and web apps.",
        url: `${SITE_URL}/contact`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'Get a Project Quote | SmartSoft Solutions',
        description: 'Share your brief — we reply with scope and a fixed quote.',
        images: ['/og-image.jpg']
    },
};

export default function ContactPage() {
    const contactSchema = organization({
        name: 'SmartSoft Solutions',
        description: 'Contact SmartSoft Solutions for website, e-commerce, and web app project quotes.',
        email: 'smartsoftsols@gmail.com',
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Contact', url: `${SITE_URL}/contact` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([contactSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="container mx-auto px-6 pt-4 pb-2" />
            <ContactContent />
        </>
    );
}
