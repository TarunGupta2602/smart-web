import Link from "next/link";
import Reveal from "./reveal";
import ProjectPreview from "./project-preview";
import { FEATURED_PROJECTS } from "@/lib/projects";

export default function FeaturedProjects() {
  const projects = FEATURED_PROJECTS;

  return (
    <section className="bg-white py-20 md:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0f3d68] mb-3">Selected client work</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
              Live sites you can open today
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real homepages from businesses we shipped — jewellery commerce and local lead-gen, not stock photos. Open the live URL, then request a quote or a free review.
            </p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-[#0f3d68] hover:underline shrink-0">
            View all work →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index + 1}>
              <article className="h-full border border-slate-200 bg-white flex flex-col overflow-hidden">
                <ProjectPreview
                  src={project.image}
                  alt={`${project.title} live homepage`}
                  liveUrl={project.liveUrl}
                />
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
          <Reveal delay={3}>
            <article className="h-full border border-slate-200 bg-slate-50 flex flex-col p-6 md:p-7">
              <p className="text-xs text-slate-400 mb-2">Lighter next step</p>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-3">
                Not ready to brief a build?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                Send your live URL. We email a written review of speed, mobile clarity, offers, and the enquiry path — no quote required.
              </p>
              <Link
                href="/free-website-audit"
                className="inline-flex px-4 py-2 rounded-md bg-[#0f3d68] hover:bg-[#0a2f52] text-white text-sm font-medium transition-colors self-start"
              >
                Request a free review
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
