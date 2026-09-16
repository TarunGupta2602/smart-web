"use client";

import Image from "next/image";
import PageHero from "../components/page-hero";
import PageCta from "../components/page-cta";
import Reveal from "../components/reveal";
import RelatedLinks from "../components/related-links";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

export default function AboutContent({ expertiseItems, team }) {
    return (
        <div className="bg-white text-slate-900">
            <PageHero
                showBrand
                eyebrow="About SmartSoft Solutions"
                title="A development company that ships live products"
                description="Since 2018 we’ve built business websites, e-commerce stores, and web apps with Next.js and React. Projects are quoted clearly — from ₹5,000 — delivered with weekly demos, and launched to production."
                videoSrc={PAGE_VIDEOS.office}
                posterSrc={PAGE_POSTERS.team}
                primaryCta={{ href: "/contact", label: "Get a quote" }}
                secondaryCta={{ href: "/projects", label: "See work" }}
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "About", url: "/about" },
                ]}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <Reveal>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-5">
                                Company builds. Real handoffs.
                            </h2>
                            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
                                <p>
                                    SmartSoft Solutions helps businesses get customers online — through clearer websites,
                                    stores that take orders, and apps teams can actually use.
                                </p>
                                <p>
                                    We are based in Ghaziabad (Delhi NCR) at SK2 Shastri Nagar, Uttar Pradesh 201002,
                                    and deliver projects across India and worldwide via WhatsApp, email, and video —
                                    with written scope and budget from the first quote through launch. Find us on{" "}
                                    <a
                                        href="https://share.google/R4SrBCxNLMdypmhSq"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#0f3d68] hover:underline"
                                    >
                                        Google Business Profile
                                    </a>
                                    .
                                </p>
                                <p>
                                    We started as a hands-on product team: fewer slides, more staging links. That still
                                    shapes how we work — weekly demos, written change notes, and a maintainable codebase
                                    you can keep growing after handoff.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={2}>
                            <div className="media-frame relative aspect-[5/4] bg-slate-100 mb-6">
                                <Image
                                    src={PAGE_POSTERS.desk}
                                    alt="Modern office workspace used by SmartSoft Solutions"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="border border-slate-200 bg-slate-50 p-7 md:p-8 space-y-5">
                                <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                                    <span className="text-slate-500">Primary stack</span>
                                    <span className="font-medium text-slate-900">Next.js · React</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                                    <span className="text-slate-500">Backends</span>
                                    <span className="font-medium text-slate-900">Firebase · Supabase</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-200 pb-3">
                                    <span className="text-slate-500">Pricing model</span>
                                    <span className="font-medium text-slate-900">Fixed project quotes</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Delivery</span>
                                    <span className="font-medium text-slate-900">Remote · Global</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100 soft-grid">
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

            <section className="py-16 md:py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    <Reveal>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
                            Leadership
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-2xl">
                            SmartSoft Solutions is led by Tarun G. Delivery stays lean — fixed quotes, weekly demos, and a maintainable handoff.
                        </p>
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {team.map((member, index) => (
                            <Reveal key={member.name} delay={(index % 3) + 1}>
                                <div>
                                    <div className="w-12 h-12 mb-3 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-sm font-semibold">
                                        {member.initials}
                                    </div>
                                    <p className="text-sm font-medium text-slate-900">{member.name}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <PageCta title="Ready to start a project?" description="Send a brief — we reply with scope and a fixed quote." />
            <RelatedLinks excludeHref="/about" />
        </div>
    );
}
