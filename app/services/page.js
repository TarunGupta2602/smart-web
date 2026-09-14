import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "Website Development, E-commerce, SEO & Marketing Services",
    description:
        "Explore SmartSoft Solutions services: business website development, e-commerce stores, web apps, SEO, and digital marketing — fixed quotes and live launches.",
    path: "/services",
    keywords: [
        "website development services",
        "e-commerce development services",
        "SEO services company",
        "digital marketing services",
        "web app development services",
    ],
});

const services = [
    {
        slug: "website-designing",
        title: "Business websites & stores",
        tagline: "Marketing sites, e-commerce & web apps",
        description: "Mobile-ready websites and online stores that match your brand and turn visitors into leads or orders. Built with Next.js and React for production.",
    },
    {
        slug: "digital-marketing",
        title: "Digital marketing",
        tagline: "Campaigns that generate leads",
        description: "Social, paid ads, content, and email — tracked against leads and revenue, not vanity metrics.",
    },
    {
        slug: "seo",
        title: "SEO",
        tagline: "Technical & on-page search work",
        description: "Audits, keyword strategy, and on-page optimization that improve rankings and lasting organic traffic.",
    },
];

export default function ServicesPage() {
    const serviceListSchema = localBusiness({
        name: 'SmartSoft Solutions Services',
        description: 'Website development, e-commerce, web apps, digital marketing, and SEO services.'
    });
    const webPageSchema = webPage({
        name: 'SmartSoft Solutions Services',
        description: 'Business websites, e-commerce stores, web apps, marketing, and SEO.',
        url: `${SITE_URL}/services`,
    });
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` }
    ], SITE_URL);
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' }
    ];

    return (
        <div className="bg-white text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([serviceListSchema, webPageSchema, breadcrumbSchema]) }}
            />
            <Breadcrumb items={breadcrumbItems} className="max-w-6xl mx-auto px-5 sm:px-6 pt-4" />

            <section className="border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-20">
                    <p className="text-sm font-medium text-[#0f3d68] mb-4">Services</p>
                    <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
                        Website development, e-commerce, and growth services
                    </h1>
                    <p className="max-w-xl text-base text-slate-600 leading-relaxed">
                        We build and grow business websites, online stores, and web apps — with digital marketing and SEO when you need more customers.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="border-t border-slate-200 pt-6 group"
                            >
                                <p className="text-xs text-slate-400 mb-2">{service.tagline}</p>
                                <h2 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-[#0f3d68] transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <span className="text-sm font-medium text-[#0f3d68]">Learn more</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-100 py-14">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">Need a clear quote?</h2>
                        <p className="text-sm text-slate-600">Tell us what you need — we reply with scope and price before any build starts.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                        Request a quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
