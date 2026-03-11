import ContactContent from "./ContactContent";
import Breadcrumb from "../components/Breadcrumb";
import { organization, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Contact SmartSoft Solutions | 24/7 Technical Experts & Global Support",
    description: "Get in touch with SmartSoft Solutions for expert digital engineering consulting. Available 24/7 via call, email, or WhatsApp for global software support. Fast response and global reach.",
    keywords: ["Contact Technical Experts", "24/7 Support", "Software Consulting", "Global Digital Support", "Noida Technical Hub", "Contact SmartSoft Solutions", "Customer Support", "Business Inquiry"],
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact SmartSoft Solutions | 24/7 Expert Support & Inquiry",
        description: "Reach out for elite technical consulting and global support.",
        url: `${SITE_URL}/contact`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/images/about-us-banner.jpg', width: 1200, height: 630, alt: 'Contact SmartSoft Solutions' },
            { url: '/images/logo.png', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'Contact SmartSoft Solutions | 24/7 Expert Support & Inquiry',
        description: 'Reach out for elite technical consulting, business inquiries, and global support.',
        images: ['/images/about-us-banner.jpg']
    }
};

export default function ContactPage() {
    const contactMethods = [
        
        {
            title: "Voice Assistance",
            description: "+1-707-708-4062",
            subtext: "Toll Free Support Available 24/7",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5.5A2.5 2.5 0 015.5 3h1.8a1 1 0 01.9.6l.8 2.5a1 1 0 01-.6 1.2l-1.5.8a11 11 0 005 5l.8-1.5a1 1 0 011.2-.6l2.5.8a1 1 0 01.6.9v1.8a2.5 2.5 0 01-2.5 2.5h-1C8.5 21 3 15.5 3 8.35v-2.85z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 7a3 3 0 013 3m0-6a6 6 0 016 6" />
                </svg>
            ),
            link: "tel:17077084062",
            label: "Start Call"
        },
        {
            title: "Digital Correspondence",
            description: "support@smartsoftsolutions.org",
            subtext: "Expect a response within 2 business hours",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 13v.01M9 11v.01M15 11v.01" />
                </svg>
            ),
            link: "mailto:support@smartsoftsolutions.org",
            label: "Send Email"
        },
        {
            title: "Global WhatsApp",
            description: "+1-707-708-4062",
            subtext: "Chat with our development leads",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 21a9 9 0 10-9-9 8.9 8.9 0 001.5 5L3 21l4-1.5a8.9 8.9 0 005 1.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 10a.5.5 0 001 0V9a.5.5 0 00-1 0v1zm5 0a.5.5 0 001 0V9a.5.5 0 00-1 0v1zM9 14h6s-1 2-3 2-3-2-3-2z" />
                </svg>
            ),
            link: "https://wa.me/17077084062",
            label: "Open WhatsApp"
        }
    ];

    const contactSchema = organization({
        name: 'SmartSoft Solutions Contact Hub',
        telephone: '+1-707-708-4062',
        email: 'support@smartsoftsolutions.org',
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
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2" />
            <ContactContent contactMethods={contactMethods} />
        </>
    );
}
