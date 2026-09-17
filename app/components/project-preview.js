import Image from "next/image";

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectPreview({
  src,
  alt,
  liveUrl,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
}) {
  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden ${className}`}
    >
      <div className="relative flex items-center gap-2 px-3 py-2 bg-white border-b border-slate-200">
        <span className="flex gap-1 shrink-0" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-sm bg-slate-50 px-2 py-0.5 text-[11px] text-slate-500">
          {hostname(liveUrl)}
        </span>
        <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-[#0f3d68]">
          Live
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </a>
  );
}
