import { NextResponse } from "next/server";
import { legacyRedirects } from "./lib/legacy-redirects.mjs";

/**
 * Exact-path permanent redirects for retired URLs.
 * Middleware runs before App Router matching so /blog/[slug] cannot swallow these.
 * Keep in sync with lib/legacy-redirects.mjs (also used by next.config).
 */
const REDIRECTS = new Map(
  legacyRedirects
    .filter((r) => !String(r.source).includes(":path*"))
    .map((r) => [r.source, r.destination])
);

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const normalized =
    pathname.endsWith("/") && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;

  if (normalized.startsWith("/blog-uploads/")) {
    return NextResponse.redirect(new URL("/blog", request.url), 308);
  }

  const destination = REDIRECTS.get(normalized);
  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/blog-uploads",
    "/blog-uploads/:path*",
    "/portfolio",
    "/app-development-los-angeles",
    "/website-development-new-york",
    "/services/bookkeeping",
    "/services/accounting",
    "/services/invoicing",
    "/services/payroll",
    "/services/tax-preparation",
    "/services/financial-consulting",
    "/blog/:path*",
  ],
};
