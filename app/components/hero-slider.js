"use client";

import Link from "next/link";
import Image from "next/image";
import brandMark from "../icon.png";
import LazyHeroVideo from "./lazy-hero-video";
import { HERO_MEDIA } from "@/lib/page-media";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden bg-[#081220] text-white lg:min-h-[78vh]">
      <div className="absolute inset-0">
        <LazyHeroVideo
          src={HERO_MEDIA.src}
          poster={HERO_MEDIA.poster}
          className="h-full w-full object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081220]/92 via-[#081220]/55 to-[#081220]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081220]/50 via-transparent to-[#081220]/25" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[86svh] max-w-7xl items-end px-4 pb-8 pt-24 sm:px-5 lg:min-h-[78vh] lg:px-6 lg:pb-10 lg:pt-28">
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
            Business sites, e-commerce stores, and web apps — Next.js & React, fixed project quotes from ₹10,000, SEO-ready structure, and a production launch you can grow.
          </p>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.36s" }}
          >
            <Link
              href="/contact"
              className="press inline-flex px-6 py-3 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100"
            >
              Get a project quote
            </Link>
            <Link
              href="/free-website-audit"
              className="press inline-flex px-6 py-3 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10"
            >
              Free website review
            </Link>
            <Link
              href="/services/nfc-digital-menu"
              className="press inline-flex px-6 py-3 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10"
            >
              NFC menu for restaurants
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
