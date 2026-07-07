import ContactContent from "./ContactContent";
import Breadcrumb from "../components/Breadcrumb";
import { organization, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Free Bookkeeping & Tax Consultation | Contact SmartSoft Solutions",
    description: "Get a free financial consultation for your small business. Contact our accounting team for bookkeeping, payroll setup, or IRS/CRA tax return filings. Available via phone & email.",
    keywords: ["bookkeeping consultation", "outsource business accounting", "payroll service quote", "tax preparation help", "CPA supervised bookkeeping email", "USA Canada accountant phone number"],
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Free Bookkeeping & Tax Consultation | SmartSoft Solutions",
        description: "Speak with our accounting professionals to build a customized bookkeeping, payroll, or tax prep plan.",
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
        title: 'Free Bookkeeping & Tax Consultation | SmartSoft Solutions',
        description: 'Speak with our accounting professionals to build a customized bookkeeping, payroll, or tax prep plan.',
        images: ['/og-image.jpg']
    }
};

export default function ContactPage() {
    const contactSchema = organization({
        name: 'SmartSoft Solutions'
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
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " />
            <ContactContent />
        </>
    );
}

