import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";
import { GOOGLE_BUSINESS_URL } from "@/lib/seo";

/**
 * Visible proof from live client sites. No invented person quotes or star counts.
 */
export default function TestimonialsSection() {
  return (
    <section className="border-y border-slate-100 bg-[#f7f5fb] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/tarun-gupta.png"
                alt="Tarun Gupta"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover object-top"
                unoptimized
              />
              <p className="text-sm text-slate-700">
                You talk to <span className="font-medium text-slate-900">Tarun Gupta</span> — the person who quotes the work.
              </p>
            </div>
            <p className="mb-3 text-sm font-medium text-[#0f3d68]">Reviews</p>
            <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Clients judge the live site, then the Google review.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              These are production builds you can open. Star reviews live on our Google Business Profile — we don’t publish made-up quotes.
            </p>
          </div>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex shrink-0 rounded-md bg-[#0f3d68] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a2f52]"
          >
            Read Google reviews
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) + 1}>
              <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-medium text-[#0f3d68]">{project.category}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-slate-700">{project.result}</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-shift mt-6 text-sm font-medium text-[#0f3d68]"
                >
                  Open {project.title} <span className="shift-icon">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">
              Finished a project with us? A Google review helps the next owner decide.
            </p>
            <Link href="/projects" className="link-shift shrink-0 text-sm font-medium text-[#0f3d68]">
              See all client work <span className="shift-icon">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
