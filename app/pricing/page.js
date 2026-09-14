import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { localBusiness, webPage, breadcrumbList, stringifySchema } from "@/lib/schema";
import { buildPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
    title: "Website Development Pricing | Fixed Project Quotes",
    description:
        "Transparent website development and e-commerce pricing from SmartSoft Solutions. Fixed quotes for business websites, online stores, and custom web apps before any build starts.",
    path: "/pricing",
    keywords: [
        "website development cost",
        "e-commerce website pricing",
        "web app development quote",
        "hire website developer pricing",
    ],
});

const plans = [
    {
        name: "Business website",
        description: "A focused marketing site that explains your offer, builds trust, and captures leads.",
        features: [
            "Custom Next.js / React design",
            "Service and about pages",
            "Lead forms and CTAs",
            "Mobile-first performance",
            "Basic on-page SEO",
            "Production deploy and handoff",
        ],
    },
    {
        name: "E-commerce store",
        description: "Catalogs, collections, offers, cart, and checkout so you can sell online.",
        featured: true,
        features: [
            "Product catalog and collections",
            "Cart and checkout flow",
            "Payment integration",
            "Promotions and offer messaging",
            "Mobile shopping UX",
            "Launch support",
        ],
    },
    {
        name: "Custom web app",
        description: "Login, dashboards, and product flows with Firebase or Supabase.",
        features: [
            "Auth and user roles",
            "Dashboards and workflows",
            "Firebase or Supabase backend",
            "Weekly progress demos",
            "Maintainable codebase",
            "Deploy and documentation",
        ],
    },
];

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
            <Breadcrumb items={breadcrumbItems} className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 pt-4" />

            <section className="border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-14 md:py-20">
                    <p className="text-sm font-medium text-[#0f3d68] mb-4">Pricing</p>
                    <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
                        Fixed quotes. Clear scope. No guesswork.
                    </h1>
                    <p className="max-w-xl text-base text-slate-600 leading-relaxed">
                        Share your goals and budget range. We reply with timeline and a clear fixed quote before any build starts.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`p-7 border ${plan.featured ? "border-[#0f3d68]" : "border-slate-200"}`}
                            >
                                {plan.featured && (
                                    <p className="text-xs font-medium text-[#0f3d68] mb-3">Most requested</p>
                                )}
                                <h2 className="text-lg font-semibold text-slate-900 mb-2">{plan.name}</h2>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">{plan.description}</p>
                                <ul className="space-y-2.5 mb-8">
                                    {plan.features.map((feature) => (
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
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 border-y border-slate-100 py-14 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-8">How pricing works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { q: "Are quotes fixed?", a: "Yes. Once scope is agreed, you get a clear fixed quote before any build starts." },
                            { q: "How do timelines work?", a: "Many marketing sites ship in a few weeks; stores and apps take longer. Timeline is written into the quote." },
                            { q: "Do you work remotely?", a: "Yes. We work with clients via WhatsApp, email, and video across time zones." },
                            { q: "What do we get at handoff?", a: "A production deploy, maintainable codebase, and guidance so you can run and grow the product." },
                        ].map((item) => (
                            <div key={item.q}>
                                <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.q}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">Ready for a custom quote?</h2>
                        <p className="text-sm text-slate-600">Call +1 707 708 4062 or send a brief online.</p>
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
