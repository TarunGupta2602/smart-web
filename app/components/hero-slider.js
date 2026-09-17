"use client";

import Link from "next/link";
import Image from "next/image";
import brandMark from "../icon.png";
import LazyHeroVideo from "./lazy-hero-video";
import ReelPlayer from "./reel-player";
import { PAGE_VIDEOS, PAGE_POSTERS } from "@/lib/page-media";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] overflow-hidden bg-[#081220] text-white">
      <div className="absolute inset-0">
        <LazyHeroVideo src={PAGE_VIDEOS.workspace} poster={PAGE_POSTERS.code} />
        <div className="absolute inset-0 hero-scrim" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 pt-24 pb-14 md:pt-28 md:pb-24 flex min-h-[88vh] md:min-h-[92vh] items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_auto] gap-10 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-3 mb-7">
              <Image
                src={brandMark}
                alt=""
                width={48}
                height={48}
                priority
                className="object-contain drop-shadow-sm"
              />
              <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
                SmartSoft Solutions
              </p>
            </div>

            <h1
              className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-semibold tracking-tight leading-[1.08] mb-6"
              style={{ animationDelay: "0.12s" }}
            >
              Website development that turns visitors into customers
            </h1>

            <p
              className="animate-fade-up max-w-xl text-base md:text-lg text-slate-200/90 leading-relaxed mb-9"
              style={{ animationDelay: "0.24s" }}
            >
              Business sites, e-commerce stores, and web apps — Next.js & React, fixed project quotes, SEO-ready structure, and a production launch you can grow.
            </p>

            <div
              className="animate-fade-up flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.36s" }}
            >
              <Link
                href="/contact"
                className="inline-flex px-6 py-3 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                Get a project quote
              </Link>
              <Link
                href="/projects"
                className="inline-flex px-6 py-3 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                See selected work
              </Link>
              <a
                href="#showreel"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30">
                  <svg className="h-3 w-3 ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.5 4.8v10.4L16 10 6.5 4.8z" />
                  </svg>
                </span>
                Watch the 7s reel
              </a>
            </div>
          </div>

          <div className="animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: "0.28s" }}>
            <ReelPlayer size="hero" glow />
          </div>
        </div>
      </div>
    </section>
  );
}
