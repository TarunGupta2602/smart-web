"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "../components/page-hero";
import PageCta from "../components/page-cta";
import Reveal from "../components/reveal";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

const projectImages = [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
];

export default function ProjectsContent({ projects }) {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "E-commerce", "Business Website", "Web App"];
    const filteredProjects = filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter);

    return (
        <div className="bg-white text-slate-900">
            <PageHero
                eyebrow="Selected work"
                title="Projects we have shipped for real businesses"
                description="E-commerce stores, lead-generation sites, and business websites built with Next.js and React."
                videoSrc={PAGE_VIDEOS.screens}
                posterSrc={PAGE_POSTERS.analytics}
                primaryCta={{ href: "/contact", label: "Start your project" }}
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "Work", url: "/projects" },
                ]}
            />

            <section className="border-b border-slate-100 bg-slate-50/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-4 flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setFilter(cat)}
                            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                                filter === cat
                                    ? "bg-slate-900 text-white"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 space-y-10">
                    {filteredProjects.map((p, index) => (
                        <Reveal key={p.title}>
                            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border border-slate-200 overflow-hidden bg-white">
                                <div className="lg:col-span-5 media-frame relative aspect-[16/11] lg:aspect-auto lg:min-h-[260px] bg-slate-100">
                                    <Image
                                        src={projectImages[index % projectImages.length]}
                                        alt=""
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                                    <p className="text-xs text-slate-400 mb-2">{p.category}</p>
                                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-3">{p.title}</h2>
                                    <p className="text-[15px] text-slate-600 leading-relaxed mb-5">{p.description}</p>
                                    <p className="text-sm text-slate-500 mb-1">Timeline: {p.timeline}</p>
                                    <p className="text-sm font-medium text-[#0f3d68] mb-4">Result: {p.result}</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                                        {p.tags.map((tag) => (
                                            <span key={tag} className="text-xs text-slate-400">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>

            <PageCta
                title="Want similar results for your business?"
                description="Tell us about your project and we will send a fixed quote."
            />
        </div>
    );
}
