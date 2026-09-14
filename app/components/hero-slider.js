import Link from "next/link";

export default function HeroSlider() {
    return (
        <section className="bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 md:py-28 lg:py-32">
                <p className="text-sm font-medium text-[#0f3d68] mb-5">
                    Website development · E-commerce · Web apps
                </p>
                <h1 className="max-w-3xl text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-slate-900 leading-[1.15] mb-6">
                    Websites and web apps that help businesses get customers
                </h1>
                <p className="max-w-2xl text-lg text-slate-600 leading-relaxed mb-10">
                    SmartSoft Solutions builds marketing sites, online stores, and full-stack products with Next.js and React.
                    You get a fixed quote, clear timeline, and a live launch — not a demo.
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-12">
                    <Link
                        href="/contact"
                        className="inline-flex px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                        Get a project quote
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex px-5 py-2.5 rounded-md border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium transition-colors"
                    >
                        See selected work
                    </Link>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-500">
                    <span>Next.js & React</span>
                    <span>Firebase & Supabase</span>
                    <span>Remote delivery worldwide</span>
                    <span>Canada & India offices</span>
                </div>
            </div>
        </section>
    );
}
