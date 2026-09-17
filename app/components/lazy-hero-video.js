"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Poster-first hero video — loads/plays only when near viewport to keep LCP fast.
 */
export default function LazyHeroVideo({
  src,
  poster,
  className = "h-full w-full object-cover animate-slow-zoom",
  withSound = false,
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

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

    let idleId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 1200 });
          } else {
            setTimeout(() => setShouldLoad(true), 200);
          }
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.01 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (idleId && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
    };
  }, [src]);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    const node = containerRef.current;
    if (!video || !node) return undefined;

    const tryPlay = () => {
      if (withSound) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
        return;
      }
      video.muted = true;
      video.play().catch(() => {});
    };

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    visibility.observe(node);

    const unlock = () => {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
    };
    if (withSound) {
      window.addEventListener("pointerdown", unlock, { once: true });
      window.addEventListener("touchstart", unlock, { once: true });
      window.addEventListener("click", unlock, { once: true });
    }

    tryPlay();

    return () => {
      visibility.disconnect();
      if (withSound) {
        window.removeEventListener("pointerdown", unlock);
        window.removeEventListener("touchstart", unlock);
        window.removeEventListener("click", unlock);
      }
    };
  }, [shouldLoad, src, withSound]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          className={`${className} absolute inset-0`}
          fetchPriority="high"
          decoding="async"
        />
      ) : null}
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={`${className} absolute inset-0`}
          autoPlay
          loop
          playsInline
          preload={withSound ? "auto" : "none"}
          poster={poster}
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          aria-hidden="true"
          {...(withSound ? {} : { muted: true })}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
