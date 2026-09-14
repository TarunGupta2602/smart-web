import Link from "next/link";
import { INDIA_CITIES, cityPath } from "@/lib/india-cities";

/**
 * Compact city link strip for homepage / service pages.
 */
export default function IndiaCitiesSection({
  title = "Website development across major Indian cities",
  subtitle = "Local landing pages for businesses in Delhi, Mumbai, Bangalore, and other hubs — same fixed-quote process, SEO-ready builds.",
  limit = 12,
}) {
  const cities = INDIA_CITIES.slice(0, limit);

  return (
    <section className="bg-white py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-[#0f3d68] mb-3">India</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={cityPath(city.slug)}
              className="text-sm text-slate-700 hover:text-[#0f3d68] hover:underline underline-offset-2"
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
      </div>
    </section>
  );
}
