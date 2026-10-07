"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AUTOPLAY_MS = 4200;

function wrapOffset(index, active, count) {
  let diff = index - active;
  if (diff > count / 2) diff -= count;
  if (diff < -count / 2) diff += count;
  return diff;
}

export default function WorkCarousel({ projects }) {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced || paused || count < 2) return undefined;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [active, count, paused, reduced]);

  const go = (direction) => {
    setActive((current) => (current + direction + count) % count);
  };

  const project = projects[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div className="relative mx-auto aspect-[16/10] w-[78%] max-w-[780px]">
          {projects.map((item, index) => {
            const diff = wrapOffset(index, active, count);
            const center = diff === 0;
            const hidden = Math.abs(diff) > 1;
            return (
              <button
                key={item.title}
                type="button"
                aria-label={center ? `${item.title}, current project` : `Show ${item.title}`}
                aria-hidden={hidden}
                tabIndex={center || hidden ? -1 : 0}
                onClick={() => {
                  if (!center) setActive(index);
                }}
                className="absolute left-1/2 top-0 h-full w-full text-left"
                style={{
                  transform: `translateX(calc(-50% + ${diff * 100}% + ${diff * 40}px)) scale(${center ? 1 : 0.84})`,
                  opacity: hidden ? 0 : center ? 1 : 0.55,
                  filter: center ? "none" : "grayscale(1) brightness(1.12)",
                  zIndex: center ? 3 : 1,
                  transition:
                    "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: hidden ? "none" : "auto",
                }}
              >
                <span
                  className={`relative block h-full overflow-hidden rounded-[22px] bg-slate-100 ${
                    center ? "shadow-[0_28px_70px_-24px_rgba(8,18,32,0.45)] ring-1 ring-black/5" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} live homepage`}
                    fill
                    sizes="(max-width: 768px) 80vw, 780px"
                    className="object-cover object-top"
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="min-w-0 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            {project.timeline}
            <span className="mx-2 text-slate-300">·</span>
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-[1.7rem]">
            {project.title}
          </h3>
          <div className="mt-4 flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="press inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-slate-400"
              aria-label="Previous project"
            >
              <span aria-hidden="true">←</span>
            </button>
            <p className="min-w-0 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>
            <button
              type="button"
              onClick={() => go(1)}
              className="press inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-slate-400"
              aria-label="Next project"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-shift mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-900"
          >
            Visit live site <span className="shift-icon" aria-hidden="true">→</span>
          </a>
        </div>

        <p className="font-display text-6xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-7xl lg:text-8xl" aria-live="polite">
          {String(active + 1).padStart(2, "0")}
          <span className="ml-2 text-2xl font-medium tracking-normal text-slate-300 sm:text-3xl">/ {String(count).padStart(2, "0")}</span>
        </p>
      </div>
    </div>
  );
}
