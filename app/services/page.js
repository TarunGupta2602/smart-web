import Link from "next/link";
import Image from "next/image";
import IndiaCitiesSection from "../components/india-cities-section";
import PageHero from "../components/page-hero";
import PageCta from "../components/page-cta";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

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
        image: PAGE_POSTERS.analytics,
    },
    {
        slug: "digital-marketing",
        title: "Digital marketing",
        tagline: "Campaigns that generate leads",
        description: "Social, paid ads, content, and email — tracked against leads and revenue, not vanity metrics.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    },
    {
        slug: "seo",
        title: "SEO",
        tagline: "Technical & on-page search work",
        description: "Audits, keyword strategy, and on-page optimization that improve rankings and lasting organic traffic.",
        image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
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

            <PageHero
                eyebrow="Services"
                title="Website development, e-commerce, and growth services"
                description="We build and grow business websites, online stores, and web apps — with digital marketing and SEO when you need more customers."
                videoSrc={PAGE_VIDEOS.typing}
                posterSrc={PAGE_POSTERS.code}
                primaryCta={{ href: "/contact", label: "Get a quote" }}
                secondaryCta={{ href: "/pricing", label: "View pricing" }}
                breadcrumbs={breadcrumbItems}
            />

            <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {services.map((service, index) => (
                            <Reveal key={service.slug} delay={index + 1}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group block h-full border border-slate-200 hover:border-slate-300 transition-colors bg-white"
                                >
                                    <div className="media-frame relative aspect-[16/10] bg-slate-100">
                                        <Image
                                            src={service.image}
                                            alt=""
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-xs text-slate-400 mb-2">{service.tagline}</p>
                                        <h2 className="font-display text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0f3d68] transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <span className="text-sm font-medium text-[#0f3d68]">Learn more →</span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <IndiaCitiesSection />
            <RelatedLinks excludeHref="/services" />
            <PageCta />
        </div>
    );
}
