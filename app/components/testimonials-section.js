import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";
import { GOOGLE_BUSINESS_URL } from "@/lib/seo";

/**
 * Case-study proof from real shipped projects (no fabricated person quotes).
 */
export default function TestimonialsSection() {
  const projects = PORTFOLIO_PROJECTS;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-[#0f3d68] mb-3">Client work</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            What we shipped for real brands
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            These are live projects we built — challenge, approach, and result. Open each site yourself.
          </p>
        </Reveal>

        <div className="space-y-10 md:space-y-12 mb-16">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) + 1}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border border-slate-200 overflow-hidden bg-slate-50/40">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative lg:col-span-5 aspect-[16/11] lg:aspect-auto lg:min-h-[280px] bg-slate-100 block"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — live project`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </a>
                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[#0f3d68]">{project.category}</span>
                    <span className="text-xs text-slate-400">{project.timeline}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-900 mb-4">
                    Result: {project.result}
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-medium text-slate-800">Challenge — </span>
                      {project.challenge}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-medium text-slate-800">What we built — </span>
                      {project.approach}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 border border-slate-200 bg-white text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex px-4 py-2 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                      Visit {project.title}
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex px-4 py-2 rounded-md border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-300 transition-colors"
                    >
                      Get a similar build
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-12">
          <div className="border border-slate-200 bg-slate-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-xl">
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Google reviews
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prefer star reviews? Open our{" "}
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f3d68] font-medium hover:underline"
                >
                  Google Business Profile
                </a>
                . We ask clients to leave honest feedback after launch.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:bg-white transition-colors shrink-0"
            >
              All projects
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden px-6 py-10 md:px-12 md:py-14 text-white">
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=70"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0f3d68]/88" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                  Want a site like these?
                </h3>
                <p className="text-sm text-slate-200 max-w-xl">
                  Packages from ₹5,000 / ₹10,000 / ₹15,000. Tell us your goal — we reply with scope and a fixed quote.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex px-5 py-2.5 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  Request a quote
                </Link>
                <a
                  href="https://wa.me/917456096455"
                  className="inline-flex px-5 py-2.5 rounded-md border border-white/35 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
