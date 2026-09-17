"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { SHOWREEL } from "@/lib/page-media";

const SIZE_CLASS = {
  hero: "w-[196px] sm:w-[220px] lg:w-[248px]",
  feature: "w-[220px] sm:w-[252px] lg:w-[280px]",
};

export default function ReelPlayer({
  src = SHOWREEL.src,
  poster = SHOWREEL.poster,
  title = SHOWREEL.title,
  size = "feature",
  glow = false,
  className = "",
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const lightboxVideoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !src) return undefined;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = Boolean(connection?.saveData);
    const slowNet = connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";
    if (saveData || slowNet) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.01 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [src]);

  useEffect(() => {
    if (!shouldLoad || lightboxOpen) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    const play = async () => {
      try {
        await video.play();
      } catch {
        // Poster remains if autoplay is blocked.
      }
    };
    play();
  }, [shouldLoad, src, muted, lightboxOpen]);

  const closeLightbox = useCallback(() => {
    const lightboxVideo = lightboxVideoRef.current;
    if (lightboxVideo) {
      lightboxVideo.pause();
    }
    setLightboxOpen(false);
    setMuted(true);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const video = lightboxVideoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.play().catch(() => {});
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen, closeLightbox]);

  const toggleMute = (event) => {
    event.stopPropagation();
    const video = videoRef.current;
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (video) {
      video.muted = nextMuted;
      video.play().catch(() => {});
    }
  };

  const openLightbox = () => {
    setLightboxOpen(true);
    const inline = videoRef.current;
    if (inline) inline.pause();
  };

  return (
    <>
      <figure ref={containerRef} className={`relative ${SIZE_CLASS[size] || SIZE_CLASS.feature} ${className}`}>
        {glow ? (
          <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(125,186,232,0.18),transparent_62%)] pointer-events-none" />
        ) : null}
        <div className="relative rounded-[2rem] bg-[#07090d] p-[7px] ring-1 ring-white/15">
          <div className="relative overflow-hidden rounded-[1.55rem] aspect-[9/16] bg-black">
            <div className="absolute top-2.5 left-1/2 z-10 h-3 w-[72px] -translate-x-1/2 rounded-full bg-black/90" />
            {poster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={poster}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
              />
            ) : null}
            {shouldLoad ? (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                muted={muted}
                loop
                playsInline
                preload="metadata"
                poster={poster}
                title={title}
              >
                <source src={src} type="video/mp4" />
              </video>
            ) : null}

            <button
              type="button"
              onClick={openLightbox}
              className="absolute inset-0 z-[1]"
              aria-label={`Play ${title} with sound`}
            />

            <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-2 p-3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
              <p className="text-[10px] font-medium tracking-wide text-white/85">7s reel</p>
              <div className="flex items-center gap-1.5 pointer-events-auto">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/20 hover:bg-black/75"
                  aria-label={muted ? "Unmute reel" : "Mute reel"}
                >
                  {muted ? <MuteIcon /> : <UnmuteIcon />}
                </button>
                <button
                  type="button"
                  onClick={openLightbox}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0f3d68] hover:bg-slate-100"
                  aria-label="Open reel fullscreen"
                >
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <figcaption className="sr-only">
          We build websites. Need a website? SmartSoft Solutions.
        </figcaption>
      </figure>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#05070b]/92 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close reel"
            onClick={closeLightbox}
          />
          <div className="relative z-10 w-full max-w-[360px]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p id={titleId} className="font-display text-sm font-semibold text-white">
                {title}
              </p>
              <button
                type="button"
                onClick={closeLightbox}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl bg-black ring-1 ring-white/15">
              <video
                ref={lightboxVideoRef}
                className="aspect-[9/16] w-full object-cover"
                controls
                playsInline
                loop
                poster={poster}
                title={title}
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
            <p className="mt-3 text-center text-sm text-slate-300 mb-4">Need a website? Get a fixed quote.</p>
            <div className="flex justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex px-5 py-2.5 rounded-md bg-white text-[#0f3d68] text-sm font-semibold hover:bg-slate-100"
              >
                Get a project quote
              </Link>
              <a
                href="https://wa.me/917456096455"
                className="inline-flex px-5 py-2.5 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function PlayIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6.5 4.8v10.4L16 10 6.5 4.8z" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5 6 9H3v6h3l5 4V5zM16.5 9.5l4 4m0-4-4 4" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5 6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
