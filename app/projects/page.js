import ProjectsContent from "./ProjectsContent";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Financial Case Studies & Success Stories | SmartSoft Solutions",
    description: "Read our business bookkeeping, payroll optimization, and CPA tax preparation case studies. Learn how we helped SMBs save thousands in deductions and hours of audit risk.",
    keywords: ["bookkeeping case study", "payroll integration success", "small business tax savings", "CPA supervision outcome", "accounting consulting stories"],
    alternates: {
        canonical: `${SITE_URL}/projects`,
    },
    openGraph: {
        title: "Financial Case Studies & Success Stories | SmartSoft Solutions",
        description: "Read our bookkeeping clean-up, payroll setup, and tax optimization stories.",
        url: `${SITE_URL}/projects`,
        type: 'website',
        siteName: 'SmartSoft Solutions',
        locale: 'en_US',
        images: [
            { url: '/favicon.ico', width: 512, height: 512, alt: 'SmartSoft Solutions Logo' }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@SmartSoftSolutions',
        title: 'Financial Case Studies & Success Stories | SmartSoft Solutions',
        description: 'Read our bookkeeping clean-up, payroll setup, and tax optimization stories.',
        images: ['/favicon.ico']
    }
};

export default function ProjectsPage() {
    const projects = [
        {
            title: "Retail Inventory & Bookkeeping Cleanup",
            category: "Bookkeeping & Accounting",
            timeline: "6 Weeks",
            result: "$12,450 tax savings",
            description: "A fast-growing multi-location retail business in California had incomplete books, leading to severe audit liabilities. We performed a comprehensive ledger reconciliation, restored historical transaction records over two years, and synced their point-of-sale directly with QuickBooks Online. This resulted in finding over $12k in unrecognized deductible expenses and clean accounts for current operations.",
            tags: ["Bookkeeping", "QuickBooks", "Retail", "CPA Supervised"]
        },
        {
            title: "Multistate Payroll Automation",
            category: "Payroll Processing",
            timeline: "4 Weeks",
            result: "Zero payroll errors",
            description: "A technology startup with 45 remote employees across 3 US states and 2 Canadian provinces was struggling with manual salary calculations and conflicting state/provincial tax deposits. We implemented automated direct-deposit payroll processing, configured statutory tax withholdings (W-2 and T4 equivalents), and built regular reporting dashboards.",
            tags: ["Payroll", "Compliance", "USA & Canada", "Automation"]
        },
        {
            title: "Corporate Tax Optimization & Filing",
            category: "Tax Preparation",
            timeline: "3 Weeks",
            result: "$40,000+ deductions",
            description: "An e-commerce business was facing a complex corporate tax filing deadline with unorganized shipping and procurement records. Under CPA supervision, we reviewed their tax categories, audited all business deductions, and prepared a meticulous corporate return. We maximized tax deductions by over $40,000 and e-filed the return with certified IRS/CRA approval ahead of schedule.",
            tags: ["Tax Preparation", "e-File", "CPA Checked", "E-commerce"]
        }
    ];

    const projectSchema = localBusiness({
        name: 'SmartSoft Solutions Case Studies',
        description: 'Read our detailed case studies on corporate bookkeeping cleanup, payroll automation, and small business tax optimization.'
    });

    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Projects', url: `${SITE_URL}/projects` }
    ], SITE_URL);

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/projects' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([projectSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2" />
            <ProjectsContent projects={projects} />
        </>
    );
}
