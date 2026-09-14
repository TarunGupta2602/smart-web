import Link from "next/link";
import { INDIA_CITIES, cityPath } from "@/lib/india-cities";
import Reveal from "./reveal";

export default function IndiaCitiesSection({
  title = "Website development across major Indian cities",
  subtitle = "Local landing pages for businesses in Delhi, Mumbai, Bangalore, and other hubs — same fixed-quote process, SEO-ready builds.",
  limit = 12,
}) {
  const cities = INDIA_CITIES.slice(0, limit);

  return (
    <section className="bg-white py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-[#0f3d68] mb-3">India</p>
          <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>
        </Reveal>

        <Reveal delay={2}>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={cityPath(city.slug)}
                className="text-sm text-slate-700 hover:text-[#0f3d68] hover:underline underline-offset-2 transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/website-development-company-in"
              className="text-sm font-medium text-[#0f3d68] hover:underline underline-offset-2"
            >
              All cities →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
