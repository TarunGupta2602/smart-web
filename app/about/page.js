import AboutContent from "./AboutContent";
import Breadcrumb from "../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "About Us | CPA Supervised Bookkeeping & Payroll Experts",
    description: "Learn about SmartSoft Solutions. We provide CPA-supervised bookkeeping, accounting, and tax filing services to USA & Canada small businesses. Learn about our commitment to accuracy.",
    keywords: ["About bookkeeping firm", "CPA accounting agency", "payroll experts USA", "about tax preparer Canada", "accurate business bookkeeping"],
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: "About SmartSoft Solutions | Bookkeeping & Accounting Experts",
        description: "Meet the experts behind our CPA-supervised financial, payroll, and compliance services.",
        url: `${SITE_URL}/about`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/og-image.jpg', width: 1200, height: 630, alt: 'SmartSoft Solutions' },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "About SmartSoft Solutions | Bookkeeping & Accounting Experts",
        description: "Meet the experts behind our CPA-supervised financial, payroll, and compliance services.",
        images: ['/og-image.jpg'],
    },
    other: {
        category: 'About Us',
        classification: 'Financial Services',
    },
};

export default function AboutPage() {
    const expertiseItems = [
        {
            name: "CPA Supervised",
            description: "All monthly reconciliations, payroll audits, and business tax filings are supervised and verified by certified accountants.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "bg-yellow-50 text-yellow-600"
        },
        {
            name: "Payroll & Tax Compliance",
            description: "Full filings for W-2/T4 payroll forms, HST/GST/Sales tax processing, and IRS/CRA compliant tax returns.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            color: "bg-orange-50 text-orange-600"
        },
        {
            name: "Automated Bookkeeping",
            description: "Integration with QuickBooks Online, Xero, and Wave, enabling instant ledger exports and error-free receipt logging.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            color: "bg-slate-50 text-slate-600"
        }
    ];

    const team = [
        { initials: "TG", name: "Tarun G.", role: "Managing Director" },
        { initials: "SC", name: "Sarah C.", role: "Senior CPA Advisor" },
        { initials: "MR", name: "Marcus R.", role: "Head of Bookkeeping" },
        { initials: "LM", name: "Linda M.", role: "Payroll Compliance Officer" },
        { initials: "JP", name: "John P.", role: "Business Tax Specialist" },
        { initials: "AK", name: "Amit K.", role: "Technical Integrations Lead" }
    ];

    const aboutPageSchema = webPage({
        name: 'About SmartSoft Solutions',
        description: 'SmartSoft Solutions is a premium bookkeeping, accounting, and tax advisory firm helping small businesses scale across USA and Canada.',
        url: `${SITE_URL}/about`,
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'About', url: `${SITE_URL}/about` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([aboutPageSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2" />
            <AboutContent expertiseItems={expertiseItems} team={team} />
        </>
    );
}
