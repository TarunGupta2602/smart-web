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
    title: "Web Dev, E-commerce, SEO & Marketing",
    description:
        "SmartSoft Solutions services: business websites, e-commerce, web apps, NFC restaurant menus, SEO, and digital marketing — fixed quotes and live launches.",
    path: "/services",
    keywords: [
        "website development services",
        "e-commerce development services",
        "NFC digital menu",
        "SEO services company",
        "digital marketing services",
        "web app development services",
    ],
});

const services = [
    {
        slug: "nfc-digital-menu",
        title: "NFC QR digital menu",
        tagline: "Complete table ordering · not a PDF menu",
        description: "The full loop: NFC tap, QR backup, live menu, cart, unique table links, and a staff dashboard with order status. Free pilot for 1–2 Indian restaurants.",
        image: "/videos/nfc-qr-promo-poster.jpg",
    },
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
                description="We build business websites, online stores, web apps, and NFC + QR table menus for restaurants — plus SEO and marketing when you need more customers."
                videoSrc={PAGE_VIDEOS.typing}
                posterSrc={PAGE_POSTERS.code}
                primaryCta={{ href: "/contact", label: "Get a quote" }}
                secondaryCta={{ href: "/pricing", label: "View pricing" }}
                breadcrumbs={breadcrumbItems}
            />

            <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
                                            className={
                                                service.slug === "nfc-digital-menu"
                                                    ? "object-cover object-[center_20%]"
                                                    : service.imageFit === "contain"
                                                      ? "object-contain bg-slate-950 p-1"
                                                      : "object-cover"
                                            }
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

            <section className="py-14 md:py-16 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <Reveal className="max-w-2xl mb-10">
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                            Who these services are for
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We work best with owners and operators who need a live product — not a months-long redesign committee.
                        </p>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Service businesses", text: "Consultants, clinics, institutes, and agencies that need enquiries from a clear offer page." },
                            { title: "Restaurants", text: "Owners who want NFC + QR table menus so guests order from the phone and the floor sees the table in real time." },
                            { title: "Retail & D2C", text: "Brands ready for catalogues, offers, and checkout that work on Indian mobile networks." },
                            { title: "Product teams", text: "Startups and internal tools that need dashboards, auth, and maintainable React/Next.js code." },
                        ].map((item, index) => (
                            <Reveal key={item.title} delay={index + 1}>
                                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <Reveal>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
                            How we deliver
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                        {[
                            { t: "1. Scope", d: "Written deliverables and a fixed quote before coding starts." },
                            { t: "2. Build", d: "Weekly demos on staging so feedback stays concrete." },
                            { t: "3. Launch", d: "Production deploy, SEO basics, and analytics hooks." },
                            { t: "4. Grow", d: "Optional SEO and marketing once the site converts." },
                        ].map((item) => (
                            <div key={item.t} className="border-t border-slate-200 pt-4">
                                <h3 className="font-semibold text-slate-900 mb-2">{item.t}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-sm text-slate-600">
                        Compare packages on <Link href="/pricing" className="text-[#0f3d68] hover:underline font-medium">pricing</Link>
                        {" "}or see live work on <Link href="/projects" className="text-[#0f3d68] hover:underline font-medium">projects</Link>.
                    </p>
                </div>
            </section>

            <IndiaCitiesSection />
            <RelatedLinks excludeHref="/services" />
            <PageCta />
        </div>
    );
}
