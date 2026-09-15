import Link from "next/link";
import Image from "next/image";
import Reveal from "./reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/projects";

export default function FeaturedProjects({ limit = 3 }) {
  const projects = PORTFOLIO_PROJECTS.slice(0, limit);

  return (
    <section className="bg-white py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0f3d68] mb-3">Selected work</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
              Live projects you can open today
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real client sites — not mockups. Visit the live URLs, then request a quote for your own build.
            </p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-[#0f3d68] hover:underline shrink-0">
            View all work →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index + 1}>
              <article className="h-full border border-slate-200 bg-white flex flex-col overflow-hidden group">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-frame relative aspect-[16/10] bg-slate-100 block"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — live project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-slate-400 mb-2">{project.category}</p>
                  <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{project.description}</p>
                  <p className="text-xs font-medium text-[#0f3d68] mb-4">{project.result}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex px-4 py-2 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors"
                    >
                      Visit live site
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex px-4 py-2 rounded-md border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-300 transition-colors"
                    >
                      Get a quote
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
