"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectsContent({ projects }) {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "E-commerce", "Business Website", "Web App"];
    const filteredProjects = filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter);

    return (
        <div className="bg-white text-slate-900">
            <section className="border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-16 md:py-20">
                    <p className="text-sm font-medium text-[#0f3d68] mb-4">Selected work</p>
                    <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-5">
                        Projects we have shipped for real businesses
                    </h1>
                    <p className="max-w-xl text-base text-slate-600 leading-relaxed">
                        E-commerce stores, lead-generation sites, and business websites built with Next.js and React.
                    </p>
                </div>
            </section>

            <section className="border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-4 flex flex-wrap gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setFilter(cat)}
                            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                                filter === cat
                                    ? "bg-slate-900 text-white"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 space-y-12">
                    {filteredProjects.map((p) => (
                        <article key={p.title} className="border-t border-slate-200 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-4">
                                <p className="text-xs text-slate-400 mb-2">{p.category}</p>
                                <h2 className="text-2xl font-semibold text-slate-900 mb-3">{p.title}</h2>
                                <p className="text-sm text-slate-500 mb-1">Timeline: {p.timeline}</p>
                                <p className="text-sm font-medium text-[#0f3d68]">Result: {p.result}</p>
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-[15px] text-slate-600 leading-relaxed mb-5">{p.description}</p>
                                <div className="flex flex-wrap gap-x-4 gap-y-1">
                                    {p.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-slate-400">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-t border-slate-100 py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 mb-2">Want similar results for your business?</h2>
                        <p className="text-sm text-slate-600">Tell us about your project and we will send a fixed quote.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                        Get a quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
