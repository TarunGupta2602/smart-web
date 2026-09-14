import Link from "next/link";

const packages = [
    {
        name: "Business website",
        desc: "Marketing site with clear pages, lead forms, and SEO basics.",
        includes: ["Custom Next.js build", "Mobile-first layout", "Contact / quote forms", "Production deploy"],
    },
    {
        name: "E-commerce store",
        desc: "Catalog, cart, checkout, and payments for real online sales.",
        includes: ["Product catalog", "Checkout flow", "Payment integration", "Launch support"],
        featured: true,
    },
    {
        name: "Custom web app",
        desc: "Auth, dashboards, and workflows with Firebase or Supabase.",
        includes: ["User roles", "Core product flows", "Weekly demos", "Code handoff"],
    },
];

const industries = [
    "Local service businesses",
    "E-commerce brands",
    "Professional practices",
    "Startups & product teams",
    "Retail & specialty shops",
    "Consultants & agencies",
];

export default function PricingIndustriesSection() {
    return (
        <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="max-w-2xl mb-14">
                    <p className="text-sm font-medium text-[#0f3d68] mb-3">Pricing</p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                        Fixed quotes before any build starts
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        Share your goal and budget range. We reply with scope, timeline, and a clear price — usually within two business days.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {packages.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white p-7 border ${
                                plan.featured ? "border-[#0f3d68]" : "border-slate-200"
                            }`}
                        >
                            {plan.featured && (
                                <p className="text-xs font-medium text-[#0f3d68] mb-3">Most requested</p>
                            )}
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{plan.name}</h3>
                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{plan.desc}</p>
                            <ul className="space-y-2.5 mb-8">
                                {plan.includes.map((item) => (
                                    <li key={item} className="text-sm text-slate-600 flex gap-2">
                                        <span className="text-[#0f3d68]">–</span>
                                        {item}
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

                <div className="pt-2">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Who we build for</h3>
                    <p className="text-sm text-slate-600 mb-6 max-w-2xl">
                        Businesses that need clearer offers online, more enquiries, or software that actually ships.
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {industries.map((name) => (
                            <span key={name} className="text-sm text-slate-500">
                                {name}
                            </span>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link
                            href="/pricing"
                            className="text-sm font-medium text-[#0f3d68] hover:underline"
                        >
                            View full pricing details
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
