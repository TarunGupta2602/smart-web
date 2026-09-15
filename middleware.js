import { NextResponse } from "next/server";

/**
 * Exact-path permanent redirects for retired URLs.
 * Middleware runs before App Router matching so /blog/[slug] cannot swallow these.
 */
const REDIRECTS = new Map([
  ["/blog-uploads", "/blog"],
  ["/portfolio", "/projects"],
  ["/app-development-los-angeles", "/services/website-designing"],
  ["/website-development-new-york", "/website-development-company-in"],

  ["/services/bookkeeping", "/services"],
  ["/services/accounting", "/services"],
  ["/services/invoicing", "/services"],
  ["/services/payroll", "/services"],
  ["/services/tax-preparation", "/services"],
  ["/services/financial-consulting", "/services"],

  ["/blog/choose-right-web-development-company-2026-guide", "/blog/how-to-choose-website-development-company-in-india"],
  ["/blog/best-website-design-company-usa-smartsoft-solutions", "/blog/how-to-choose-website-development-company-in-india"],
  ["/blog/how-much-does-a-website-cost-2026-pricing-guide", "/blog/business-website-cost-in-india"],
  ["/blog/why-your-business-needs-website-2026-cost-guide", "/blog/business-website-cost-in-india"],
  ["/blog/do-you-need-website-for-business-2026", "/blog/how-to-choose-website-development-company-in-india"],
  ["/blog/why-small-business-needs-website-2026", "/blog/how-to-choose-website-development-company-in-india"],
  ["/blog/small-business-needs-website-usa-2026", "/blog/how-to-choose-website-development-company-in-india"],
  ["/blog/launch-seo-ready-website-fast-2026", "/blog/seo-checklist-for-new-business-website"],

  ["/blog/why-website-not-ranking-google-seo-fixes", "/blog/seo-checklist-for-new-business-website"],
  ["/blog/website-not-getting-traffic-fix-seo-content", "/blog/seo-checklist-for-new-business-website"],
  ["/blog/website-not-showing-up-on-google-fixes", "/blog/seo-checklist-for-new-business-website"],
  ["/blog/website-speed-seo-google-rankings-2026", "/blog/seo-checklist-for-new-business-website"],
  ["/blog/website-loading-slow-fix-speed-optimization-usa", "/blog/nextjs-for-business-websites"],
  ["/blog/website-loading-slow-speed-optimization-guide", "/blog/nextjs-for-business-websites"],
  ["/blog/website-not-loading-slow-fix-guide-usa", "/blog/nextjs-for-business-websites"],
  ["/blog/why-is-my-website-slow-speed-optimization-usa", "/blog/nextjs-for-business-websites"],

  ["/blog/website-not-working-site-wont-load-fixes", "/blog/ecommerce-website-development-checklist"],
  ["/blog/website-not-loading-fix-cant-access-website", "/blog/ecommerce-website-development-checklist"],
  ["/blog/website-not-loading-fix-guide", "/blog/ecommerce-website-development-checklist"],
  ["/blog/website-not-loading-fix-site-wont-open", "/blog/ecommerce-website-development-checklist"],
  ["/blog/website-not-loading-not-responding-fix", "/blog/ecommerce-website-development-checklist"],
  ["/blog/this-site-cant-be-reached-error-fix", "/blog/ecommerce-website-development-checklist"],

  ["/blog/why-businesses-need-mobile-apps-2026", "/services/website-designing"],
  ["/blog/social-media-marketing-problems-solutions", "/services/digital-marketing"],
  ["/blog/why-businesses-need-content-writing-services-usa", "/services/digital-marketing"],

  ["/blog/how-much-does-bookkeeping-cost-for-a-small-business-2026", "/services"],
  ["/blog/small-business-tax-deductions-2026", "/services"],
  ["/blog/w2-vs-1099-worker-classification-guide", "/services"],

  ["/blog/microsoft-edge-not-responding-working-opening-fix", "/blog"],
  ["/blog/microsoft-edge-problems-solutions-fixes", "/blog"],
  ["/blog/google-chrome-not-opening-fix", "/blog"],
  ["/blog/google-chrome-not-opening-fixi", "/blog"],
  ["/blog/chrome-not-responding-fix-windows", "/blog"],
  ["/blog/windows-11-problems-issues-2026-fixes", "/blog"],
  ["/blog/windows-11-not-updating-fixes", "/blog"],
  ["/blog/wifi-not-working-windows-10-fixes", "/blog"],
  ["/blog/router-not-working-fix-usa-guide", "/blog"],
  ["/blog/blue-screen-of-death-bsod-fix-guide", "/blog"],
]);

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const normalized = pathname.endsWith("/") && pathname.length > 1
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
