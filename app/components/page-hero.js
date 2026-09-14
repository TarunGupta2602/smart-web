"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import brandMark from "../icon.png";

export default function PageHero({
  eyebrow,
  title,
  description,
  videoSrc,
  posterSrc,
  primaryCta,
  secondaryCta,
  breadcrumbs,
  showBrand = false,
  compact = false,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = async () => {
      try {
        await video.play();
      } catch {
        // Poster remains if autoplay is blocked.
      }
    };
    play();
  }, [videoSrc]);

  return (
    <section
      className={`relative overflow-hidden bg-[#081220] text-white ${
        compact ? "min-h-[52vh] md:min-h-[58vh]" : "min-h-[62vh] md:min-h-[70vh]"
      }`}
    >
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover animate-slow-zoom"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : posterSrc ? (
          <Image
            src={posterSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover animate-slow-zoom"
          />
        ) : null}
        <div className="absolute inset-0 hero-scrim" />
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex flex-col justify-end ${
          compact ? "pt-24 pb-12 md:pt-28 md:pb-16" : "pt-28 pb-14 md:pt-32 md:pb-20"
        } ${compact ? "min-h-[52vh] md:min-h-[58vh]" : "min-h-[62vh] md:min-h-[70vh]"}`}
      >
        {breadcrumbs?.length > 0 && (
          <div className="animate-fade-in mb-6">
            <Breadcrumb items={breadcrumbs} variant="light" />
          </div>
        )}

        {showBrand && (
          <div className="animate-fade-up flex items-center gap-3 mb-6">
            <Image src={brandMark} alt="" width={44} height={44} priority className="object-contain" />
            <p className="font-display text-xl md:text-2xl font-semibold tracking-tight">
              SmartSoft Solutions
            </p>
          </div>
        )}

        {eyebrow && (
          <p className="animate-fade-up text-sm font-medium text-sky-200/85 mb-4">{eyebrow}</p>
        )}

        <h1
          className="animate-fade-up font-display max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] mb-5"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>

        {description && (
          <p
            className="animate-fade-up max-w-2xl text-base md:text-lg text-slate-200/90 leading-relaxed mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div
            className="animate-fade-up flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex px-6 py-3 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex px-6 py-3 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
