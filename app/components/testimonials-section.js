import Link from "next/link";

const testimonials = [
    {
        quote:
            "SmartSoft rebuilt our jewellery store with clear collections, offers, and a checkout that works on mobile. We moved from brochure traffic to real online orders.",
        name: "Ananya R.",
        role: "Founder, jewellery brand",
    },
    {
        quote:
            "Our support site finally turns urgent printer issues into phone calls. Clear pages, call-first CTAs, and a callback flow that our team can manage.",
        name: "Imran K.",
        role: "Owner, print support business",
    },
    {
        quote:
            "Clear quote, weekly demos, and a maintainable Next.js codebase. No surprise fees. Exactly what we needed from a development partner.",
        name: "Sarah L.",
        role: "Marketing lead, service company",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="bg-white py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="max-w-2xl mb-14">
                    <p className="text-sm font-medium text-[#0f3d68] mb-3">Client feedback</p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                        What partners say after launch
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        Real projects. Clear communication. Live results — not slide decks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
                    {testimonials.map((t) => (
                        <figure key={t.name} className="border-t border-slate-200 pt-6">
                            <blockquote className="text-sm text-slate-700 leading-relaxed mb-6">
                                “{t.quote}”
                            </blockquote>
                            <figcaption>
                                <p className="text-sm font-medium text-slate-900">{t.name}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="bg-slate-50 border border-slate-200 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            Have a project? Let’s price it and ship.
                        </h3>
                        <p className="text-sm text-slate-600 max-w-xl">
                            Send a short brief — what you need, timeline, and budget range. We reply with scope and a clear quote.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <Link
                            href="/contact"
                            className="inline-flex px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                        >
                            Request a quote
                        </Link>
                        <a
                            href="https://wa.me/917456096455"
                            className="inline-flex px-5 py-2.5 rounded-md border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-slate-300 transition-colors"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
