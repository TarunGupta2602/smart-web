import Link from "next/link";
import Reveal from "./reveal";
import ReelPlayer from "./reel-player";
import LazyHeroVideo from "./lazy-hero-video";
import { PAGE_POSTERS, PAGE_VIDEOS } from "@/lib/page-media";

const beats = [
  { label: "01", text: "We build websites" },
  { label: "02", text: "Stores and web apps that go live" },
  { label: "03", text: "Need a website?" },
  { label: "04", text: "SmartSoft Solutions — fixed quote" },
];

export default function ShowreelSection() {
  return (
    <section id="showreel" className="relative overflow-hidden bg-[#081220] text-white py-20 md:py-28">
      <div className="absolute inset-0">
        <LazyHeroVideo src={PAGE_VIDEOS.typing} poster={PAGE_POSTERS.laptop} />
        <div className="absolute inset-0 bg-[#081220]/82" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-sm font-medium text-sky-200/85 mb-3">7-second reel</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08] mb-5">
                We build websites. Need one?
              </h2>
              <p className="max-w-xl text-base text-slate-200/90 leading-relaxed mb-8">
                Watch the SmartSoft reel, then request a quote. Business sites, e-commerce stores, and web apps — Next.js, written scope, production launch.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {beats.map((beat, index) => (
                <Reveal key={beat.label} delay={(index % 3) + 1}>
                  <div className="border border-white/12 bg-white/5 px-4 py-3">
                    <p className="text-[11px] tracking-wide text-sky-200/70 mb-1">{beat.label}</p>
                    <p className="text-sm font-medium text-white">{beat.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex px-6 py-3 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  Get a project quote
                </Link>
                <a
                  href="https://wa.me/917456096455"
                  className="inline-flex px-6 py-3 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5 flex justify-center lg:justify-end" delay={2}>
            <ReelPlayer size="feature" glow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
