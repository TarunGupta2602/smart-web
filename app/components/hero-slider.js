"use client";

import Link from "next/link";
import Image from "next/image";
import brandMark from "../icon.png";
import LazyHeroVideo from "./lazy-hero-video";
import { PAGE_VIDEOS, PAGE_POSTERS, SHOWREEL } from "@/lib/page-media";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[92vh] overflow-hidden bg-[#081220] text-white">
      <div className="absolute inset-0 lg:hidden">
        <LazyHeroVideo
          src={SHOWREEL.src}
          poster={SHOWREEL.poster}
          withSound
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081220]/90 via-[#081220]/20 to-transparent" />
      </div>
      <div className="absolute inset-0 hidden lg:block">
        <LazyHeroVideo src={PAGE_VIDEOS.workspace} poster={PAGE_POSTERS.code} />
        <div className="absolute inset-0 hero-scrim" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 pt-20 pb-10 lg:pt-28 lg:pb-24 flex min-h-[100svh] lg:min-h-[92vh] items-end lg:items-center">
        <div className="max-w-3xl w-full">
          <div className="hidden lg:flex animate-fade-up items-center gap-3 mb-7">
              <Image
                src={brandMark}
                alt=""
                width={48}
                height={48}
                className="object-contain drop-shadow-sm"
              />
            <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
              SmartSoft Solutions
            </p>
          </div>

          <h1
            className="animate-fade-up font-display text-[1.7rem] sm:text-4xl md:text-5xl lg:text-[4.15rem] font-semibold tracking-tight leading-[1.12] mb-3 lg:mb-6"
            style={{ animationDelay: "0.12s" }}
          >
            Website development that turns visitors into customers
          </h1>

          <p
            className="animate-fade-up hidden lg:block max-w-xl text-base md:text-lg text-slate-200/90 leading-relaxed mb-9"
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
          </div>
        </div>
      </div>
    </section>
  );
}
