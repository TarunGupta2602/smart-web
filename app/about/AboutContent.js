import Image from "next/image";
import PageHero from "../components/page-hero";
import PageCta from "../components/page-cta";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";
import { FACEBOOK_URL, GOOGLE_BUSINESS_URL } from "@/lib/seo";

export default function AboutContent({ expertiseItems }) {
    return (
        <div className="bg-white text-slate-900">
            <PageHero
                eyebrow="About SmartSoft Solutions"
                title="A founder-led studio that ships live business websites"
                description="Since 2018 we’ve built business websites, e-commerce stores, and web apps with Next.js and React. You talk to the person who quotes the work — then see weekly staging links until launch."
                videoSrc={PAGE_VIDEOS.huddle}
                posterSrc={PAGE_POSTERS.huddle}
                primaryCta={{ href: "/get-a-quote", label: "Get a quote" }}
                secondaryCta={{ href: "/free-website-audit", label: "Free website review" }}
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "About", url: "/about" },
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <Reveal>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-5">
                                Why businesses hire us
                            </h2>
                            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
                                <p>
                                    SmartSoft Solutions is a founder-led website studio in Ghaziabad (Delhi NCR). We help
                                    owners get customers online — through clearer websites, stores that take orders, and
                                    apps teams can actually use.
                                </p>
                                <p>
                                    The 2018 start date is not a slogan on an empty About page. We have been shipping
                                    production sites since then: written scope, a fixed quote before build, weekly demos,
                                    and a maintainable handoff. You are not paying a sales layer that disappears after
                                    the contract.
                                </p>
                                <p>
                                    We work from SK2 Shastri Nagar, Uttar Pradesh 201002, and deliver across India and
                                    worldwide via WhatsApp, email, and video. Find us on{" "}
                                    <a
                                        href={GOOGLE_BUSINESS_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#0f3d68] hover:underline"
                                    >
                                        Google Business Profile
                                    </a>
                                    {" "}and{" "}
                                    <a
                                        href={FACEBOOK_URL}
                                        target="_blank"
                                        rel="me noopener noreferrer"
                                        className="text-[#0f3d68] hover:underline"
                                    >
                                        Facebook
                                    </a>
                                    .
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={2}>
                            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                                <div className="grid grid-cols-1 sm:grid-cols-[210px_minmax(0,1fr)]">
                                    <div className="relative h-72 bg-[#f4f6f8] sm:h-full sm:min-h-[340px]">
                                        <Image
                                            src="/images/tarun-gupta.png"
                                            alt="Tarun Gupta, Managing Director of SmartSoft Solutions"
                                            fill
                                            sizes="210px"
                                            className="object-cover object-[center_12%]"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center px-6 py-6 md:px-7">
                                        <p className="text-xs font-medium text-[#0f3d68]">You talk to</p>
                                        <p className="mt-1 font-display text-2xl font-semibold text-slate-900">Tarun Gupta</p>
                                        <p className="mt-1 text-sm text-slate-500">Managing Director · Ghaziabad</p>
                                        <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                                            {[
                                                ["Building since", "2018"],
                                                ["Primary stack", "Next.js · React"],
                                                ["Pricing model", "Fixed project quotes"],
                                                ["Proof", "Live client sites + GBP"],
                                            ].map(([label, value]) => (
                                                <div key={label} className="flex items-baseline justify-between gap-4 text-sm">
                                                    <span className="text-slate-500">{label}</span>
                                                    <span className="text-right font-medium text-slate-900">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                        <Reveal className="lg:col-span-4">
                            <Image
                                src="/images/tarun-gupta.png"
                                alt="Tarun Gupta"
                                width={80}
                                height={80}
                                className="mb-5 h-20 w-20 rounded-full object-cover object-[center_18%] ring-4 ring-white shadow-sm"
                                unoptimized
                            />
                            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
                                Founder story
                            </h2>
                            <p className="text-sm text-slate-500">Tarun Gupta · Managing Director</p>
                        </Reveal>
                        <Reveal className="lg:col-span-8 space-y-4 text-slate-600 text-[15px] leading-relaxed" delay={2}>
                            <p>
                                I started SmartSoft Solutions in 2018 because local businesses were being sold pretty
                                templates that did not rank, did not convert, and could not be handed over cleanly. The
                                studio stayed small on purpose: I quote the work, I stay on the weekly demos, and I
                                ship the production launch.
                            </p>
                            <p>
                                That is the credential we can stand behind — not a wall of invented teammates or awards.
                                Open{" "}
                                <a href="/projects" className="text-[#0f3d68] hover:underline">
                                    live client sites
                                </a>
                                , read the Google Business Profile, and start with a{" "}
                                <a href="/free-website-audit" className="text-[#0f3d68] hover:underline">
                                    free website review
                                </a>{" "}
                                if you want proof before you pay for a build.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 border-y border-slate-100 soft-grid">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <Reveal>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-10">
                            What we are good at
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {expertiseItems.map((item, index) => (
                            <Reveal key={item.name} delay={(index % 3) + 1}>
                                <div className="border-t border-slate-200 pt-5">
                                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <Reveal className="max-w-2xl mb-10">
                        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                            How projects run
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            A simple path from brief to production — so you always know what happens next.
                        </p>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Brief & quote", text: "You share goals, references, and budget range. We reply with scope, timeline, and a fixed price." },
                            { step: "02", title: "Design & build", text: "We ship in weekly checkpoints — layouts, pages, and integrations you can click on staging." },
                            { step: "03", title: "SEO foundations", text: "Titles, structure, performance, and internal links are part of the build — not a last-day plugin." },
                            { step: "04", title: "Launch & handoff", text: "Production deploy, access, and notes so your team can run and grow the product." },
                        ].map((item, index) => (
                            <Reveal key={item.step} delay={(index % 4) + 1}>
                                <p className="text-xs font-medium text-[#0f3d68] mb-2">{item.step}</p>
                                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <PageCta
                title="Ready to start a project?"
                description="Send a brief — we reply with scope and a fixed quote. Or start with a free review of your current site."
                secondaryLabel="Free website review"
                secondaryHref="/free-website-audit"
            />
            <RelatedLinks excludeHref="/about" />
        </div>
    );
}
