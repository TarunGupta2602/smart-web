import Link from "next/link";

const services = [
    {
        slug: "website-designing",
        title: "Business websites",
        description:
            "A clear site that explains your offer and captures leads — mobile-ready, fast, and structured for search.",
        outcome: "More qualified enquiries",
    },
    {
        slug: "website-designing",
        title: "E-commerce stores",
        description:
            "Catalogs, offers, cart, and checkout with real payments — built so customers can buy on any device.",
        outcome: "A store that takes orders",
    },
    {
        slug: "website-designing",
        title: "Web apps & dashboards",
        description:
            "Login, dashboards, and product flows with Firebase or Supabase — tools your team can use every day.",
        outcome: "Less manual work",
    },
    {
        slug: "digital-marketing",
        title: "Digital marketing",
        description:
            "Practical campaigns across social, ads, content, and email — measured against leads and revenue.",
        outcome: "Steady lead flow",
    },
    {
        slug: "seo",
        title: "SEO",
        description:
            "Technical fixes, keyword strategy, and on-page work that improve rankings and lasting organic traffic.",
        outcome: "Sustainable visibility",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="max-w-2xl mb-14">
                    <p className="text-sm font-medium text-[#0f3d68] mb-3">What we build</p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                        Services for companies that need a live product
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        Quoted up front. Built in weekly checkpoints. Handed over as a maintainable codebase with a production deploy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                    {services.map((service) => (
                        <div key={service.title} className="border-t border-slate-200 pt-6">
                            <p className="text-xs text-slate-400 mb-2">{service.outcome}</p>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <Link
                                href={`/services/${service.slug}`}
                                className="text-sm font-medium text-[#0f3d68] hover:underline"
                            >
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-sm text-slate-600">
                        Prefer to talk first? Call{" "}
                        <a href="tel:17077084062" className="font-medium text-slate-900 hover:underline">
                            +1 707 708 4062
                        </a>
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                        Request a quote
                    </Link>
                </div>
            </div>
        </section>
    );
}
