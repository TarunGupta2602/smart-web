import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { webPage, breadcrumbList, stringifySchema } from "@/lib/schema";

const SITE_URL = 'https://www.smartsoftsolutions.org';

export const metadata = {
    title: "Business Websites & E-commerce Development",
    description: "Custom business websites, e-commerce stores, and web apps built with Next.js and React. Conversion-focused, mobile-ready, quoted up front.",
    alternates: { canonical: `${SITE_URL}/services/website-designing` },
};

export default function WebsiteDesigningServicePage() {
    const pageSchema = webPage({
        name: 'Business Websites & E-commerce',
        description: 'Custom website and e-commerce development with Next.js and React.',
        url: `${SITE_URL}/services/website-designing`,
    });
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
        { name: 'Websites & Stores', url: `${SITE_URL}/services/website-designing` }
    ], SITE_URL);
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Websites & Stores', url: '/services/website-designing' }
    ];

    return (
        <div className="bg-white text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([pageSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-6xl mx-auto px-5 sm:px-6 pt-4" />

            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-20">
                    <p className="text-sm font-medium text-[#0f3d68] mb-4">Websites · Stores · Apps</p>
                    <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
                        Business websites and online stores built to launch
                    </h1>
                    <p className="max-w-xl text-base text-slate-600 leading-relaxed">
                        Marketing sites, e-commerce stores, and web apps with Next.js and React — quoted up front so visitors become customers.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                            Designed to convert. Built to maintain.
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                            From structure to launch, we craft sites that communicate trust, load quickly, and guide users toward contact, booking, or purchase.
                        </p>
                        <ul className="space-y-3 text-sm text-slate-700">
                            {[
                                "Custom UI and brand-aligned layouts",
                                "Mobile-first responsive design",
                                "Fast performance and Core Web Vitals focus",
                                "Landing pages, stores, and web apps",
                            ].map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span className="text-[#0f3d68]">–</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border border-slate-200 bg-slate-50 p-7 space-y-4">
                        <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                            <span className="text-slate-500">Wireframes & structure</span>
                            <span className="font-medium text-slate-900">Included</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                            <span className="text-slate-500">Responsive breakpoints</span>
                            <span className="font-medium text-slate-900">Mobile · Tablet · Desktop</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Deliverable</span>
                            <span className="font-medium text-slate-900">Live production site</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-100 py-14">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">Need a new site or store?</h2>
                        <p className="text-sm text-slate-600">Tell us your goals and budget — we will map a clear plan.</p>
                    </div>
                    <Link
                        href="/contact?service=Business%20Website"
                        className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                        Request a quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
