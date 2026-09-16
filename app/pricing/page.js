import Link from "next/link";
import PageHero from "../components/page-hero";
import PageCta from "../components/page-cta";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";
import { PRICING_PACKAGES, PRICING_SUMMARY } from "@/lib/pricing";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

export const metadata = buildPageMetadata({
    title: "Website Development Pricing in India",
    description:
        "Website and e-commerce pricing: business sites from ₹5,000, stores from ₹10,000, web apps from ₹15,000. Fixed quotes before any build starts.",
    path: "/pricing",
    keywords: [
        "website development cost",
        "website development cost India",
        "e-commerce website pricing",
        "web app development quote",
        "hire website developer pricing",
    ],
});

export default function PricingPage() {
    const pricingSchema = localBusiness({
        name: 'SmartSoft Solutions Pricing',
        description: 'Project pricing for business websites, e-commerce stores, and custom web apps.'
    });
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Pricing', url: `${SITE_URL}/pricing` }
    ], SITE_URL);
    const pricingPageSchema = webPage({
        name: 'SmartSoft Solutions Pricing',
        description: 'Transparent project packages for websites, e-commerce, and web apps.',
        url: `${SITE_URL}/pricing`,
    });
    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' }
    ];

    return (
        <div className="bg-white text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema([pricingSchema, breadcrumbSchema, pricingPageSchema]) }}
            />

            <PageHero
                eyebrow="Pricing"
                title="From ₹5,000 · ₹10,000 · ₹15,000"
                description={`${PRICING_SUMMARY}. Pick a starting band, then we lock a fixed quote for your exact scope before any build starts.`}
                videoSrc={PAGE_VIDEOS.workspace}
                posterSrc={PAGE_POSTERS.laptop}
                primaryCta={{ href: "/contact", label: "Request a quote" }}
                breadcrumbs={breadcrumbItems}
            />

            <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PRICING_PACKAGES.map((plan, index) => (
                            <Reveal key={plan.name} delay={index + 1}>
                                <div
                                    className={`h-full p-7 border ${plan.featured ? "border-[#0f3d68] bg-slate-50" : "border-slate-200"}`}
                                >
                                    {plan.featured && (
                                        <p className="text-xs font-medium text-[#0f3d68] mb-3">Most requested</p>
                                    )}
                                    <h2 className="font-display text-xl font-semibold text-slate-900 mb-2">{plan.name}</h2>
                                    <p className="text-3xl font-semibold text-[#0f3d68] mb-1">From {plan.priceFrom}</p>
                                    <p className="text-xs text-slate-500 mb-4">{plan.priceNote}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{plan.description}</p>
                                    <ul className="space-y-2.5 mb-8">
                                        {plan.includes.map((feature) => (
                                            <li key={feature} className="text-sm text-slate-600 flex gap-2">
                                                <span className="text-[#0f3d68]">–</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/contact?service=${encodeURIComponent(plan.name)}`}
                                        className="text-sm font-medium text-[#0f3d68] hover:underline"
                                    >
                                        Request this package
                                    </Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 border-y border-slate-100 py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <Reveal>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-8">How pricing works</h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { q: "What do the starting prices mean?", a: "They are entry bands for typical scopes — not empty bait. Your written quote may be higher if you need more pages, SKUs, or custom features." },
                            { q: "Are quotes fixed?", a: "Yes. Once scope is agreed, you get a clear fixed quote before any build starts." },
                            { q: "How do timelines work?", a: "Many marketing sites ship in a few weeks; stores and apps take longer. Timeline is written into the quote." },
                            { q: "Do you work remotely?", a: "Yes. Based in Ghaziabad (Delhi NCR), we deliver via WhatsApp, email, and video across India and other time zones." },
                        ].map((item, index) => (
                            <Reveal key={item.q} delay={(index % 2) + 1}>
                                <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.q}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedLinks excludeHref="/pricing" />
            <PageCta title="Ready for a custom quote?" description="Call +91 74560 96455 or send a brief online — mention which package band fits." />
        </div>
    );
}
