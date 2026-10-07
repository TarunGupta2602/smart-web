"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Brief & quote",
    text: "You share the goal, timeline, and budget range. We reply with scope and a fixed price before work begins.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    alt: "Planning a website brief with a laptop and notes",
  },
  {
    step: "02",
    title: "Build with demos",
    text: "We design and develop in Next.js or React with weekly progress you can review. Changes stay controlled.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1400&q=80",
    alt: "Designing a website layout on a laptop",
  },
  {
    step: "03",
    title: "Launch & handoff",
    text: "We deploy to production, polish the final items, and hand you a maintainable codebase with next steps.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    alt: "Live site analytics after launch",
  },
];

export default function ProcessShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-6">
        <p className="mb-3 text-sm font-medium text-[#0f3d68]">How we work</p>
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          A simple process from brief to launch
        </h2>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600">
          No vague retainers. No surprise scope. You always know what is being built and when it ships.
        </p>
        <div className="space-y-3">
          {steps.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.step}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`w-full rounded-2xl border px-5 py-4 text-left transition duration-300 ${
                  selected
                    ? "border-[#0f3d68]/30 bg-[#f4f7fb] shadow-[0_16px_40px_-28px_rgba(15,61,104,0.7)]"
                    : "border-transparent hover:bg-slate-50"
                }`}
              >
                <p className={`mb-1 text-xs font-semibold tracking-[0.16em] ${selected ? "text-[#0f3d68]" : "text-slate-400"}`}>
                  {item.step}
                </p>
                <h3 className="mb-1 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="media-frame relative aspect-[4/5] overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.55)] md:aspect-[5/4] lg:aspect-[4/5]">
          {steps.map((item, index) => (
            <Image
              key={item.step}
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={`object-cover transition duration-700 ${
                index === active ? "scale-100 opacity-100" : "pointer-events-none scale-105 opacity-0"
              }`}
              aria-hidden={index !== active}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081220]/70 to-transparent p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{steps[active].step}</p>
            <p className="mt-1 font-display text-xl font-semibold text-white">{steps[active].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
