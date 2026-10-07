import Link from "next/link";
import Reveal from "./reveal";
import WorkCarousel from "./work-carousel";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";

export default function FeaturedProjects() {
  const projects = PORTFOLIO_PROJECTS;

  return (
    <section className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 pt-20 md:pt-28 pb-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f3d68] mb-3">
              Selected client work
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-slate-900 mb-3">
              Live sites you can open today
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real homepages from businesses we shipped — jewellery commerce and local lead-gen, not stock photos. Open the live URL, then request a quote or a free review.
            </p>
          </div>
          <Link href="/projects" className="link-shift text-sm font-medium text-[#0f3d68] shrink-0">
            View all work <span className="shift-icon" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>

      <WorkCarousel projects={projects} />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-14 md:py-16">
        <article className="border border-slate-200 bg-slate-50 flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
              Lighter next step
            </p>
            <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
              Not ready to brief a build?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Send your live URL. We email a written review of speed, mobile clarity, offers, and the enquiry path — no quote required.
            </p>
          </div>
          <Link
            href="/free-website-audit"
            className="press inline-flex self-start px-5 py-2.5 rounded-md bg-[#0f3d68] text-white text-sm font-medium"
          >
            Request a free review
          </Link>
        </article>
      </div>
    </section>
  );
}
