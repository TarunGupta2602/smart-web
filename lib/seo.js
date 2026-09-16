/**
 * Shared SEO helpers and default metadata for SmartSoft Solutions.
 * Target intents: website development, e-commerce, web apps, SEO, digital marketing.
 */

export const SITE_URL = 'https://www.smartsoftsolutions.org';
export const SITE_NAME = 'SmartSoft Solutions';
export const CONTACT_EMAIL = 'smartsoft.solutions0@gmail.com';

/** Primary contact for India-facing NAP */
export const CONTACT_PHONE_IN = '+91 74560 96455';
export const CONTACT_PHONE_IN_TEL = '917456096455';
export const CONTACT_PHONE_IN_E164 = '+917456096455';
export const CONTACT_WHATSAPP_URL = 'https://wa.me/917456096455';

/** Secondary / US line — keep available but not primary */
export const CONTACT_PHONE_US = '+1 707 708 4062';
export const CONTACT_PHONE_US_TEL = '17077084062';

/** Google Business Profile / NAP address (Ghaziabad) */
export const CONTACT_ADDRESS = {
  streetAddress: 'SK2 Shastri Nagar',
  addressLocality: 'Ghaziabad',
  addressRegion: 'Uttar Pradesh',
  postalCode: '201002',
  addressCountry: 'IN',
};
export const CONTACT_ADDRESS_LINE =
  'SK2 Shastri Nagar, Ghaziabad, Uttar Pradesh 201002';
export const CONTACT_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=SK2+Shastri+Nagar+Ghaziabad+Uttar+Pradesh+201002';

export const DEFAULT_OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'SmartSoft Solutions — Website Development, E-commerce & Web Apps',
};

export const CORE_KEYWORDS = [
  'website development company',
  'business website design',
  'e-commerce website development',
  'Next.js development company',
  'React web development',
  'custom web app development',
  'SEO services',
  'digital marketing agency',
  'hire web developer',
  'online store development',
  'website development company in Delhi',
  'website development company in Mumbai',
  'website development company in Bangalore',
  'website development company in India',
];

export function truncateMeta(text = '', max = 160) {
  const cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
}

/**
 * Build a SERP-safe title under 60 characters (absolute — bypasses layout template).
 */
export function buildSeoTitle(title) {
  const raw = String(title || '').replace(/\s+/g, ' ').trim();
  if (!raw) return truncateMeta(SITE_NAME, 60);

  if (raw.includes(SITE_NAME) || /\bSmartSoft\b/.test(raw)) {
    return truncateMeta(raw, 60);
  }

  const withBrand = `${raw} | SmartSoft`;
  if (withBrand.length <= 60) return withBrand;

  return truncateMeta(raw, 60);
}

/**
 * Build consistent Next.js metadata for a page.
 */
export function buildPageMetadata({
  title,
  description,
  path = '/',
  keywords = CORE_KEYWORDS,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const seoTitle = buildSeoTitle(title);
  const seoDescription = truncateMeta(description, 155);

  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [image.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  };
}

export const HOME_FAQS = [
  {
    question: 'How much does a website or web app cost?',
    answer:
      'It depends on scope. A focused business website, an e-commerce store, and a custom web app are priced differently. Share your goals and budget range — SmartSoft Solutions replies with a fixed quote before any build starts.',
  },
  {
    question: 'What kinds of projects do you take?',
    answer:
      'Business and marketing websites, e-commerce stores, and web apps or dashboards built with Next.js, React, Firebase, or Supabase — including redesigns when the goal is a live product.',
  },
  {
    question: 'Do you build websites for businesses in Delhi, Mumbai, Bangalore, and other Indian cities?',
    answer:
      'Yes. SmartSoft Solutions works with companies across major Indian cities — Delhi NCR (including Noida and Gurgaon), Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, and more. Delivery is remote with fixed quotes; see our city pages under website development company in India.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Many marketing websites ship in a few weeks. Online stores and custom apps take longer based on features. Timeline is written into the quote so you know launch timing before work starts.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer:
      'Yes. SmartSoft Solutions is a remote India-based team. We work via WhatsApp, email, and video — including USA and other time zones when needed.',
  },
  {
    question: 'What do we get when the project is done?',
    answer:
      'A production deploy, a maintainable codebase, and handoff notes so you can run the site or app. Deliverables are listed in the quote up front.',
  },
  {
    question: 'Can you help my Indian business rank for local city searches?',
    answer:
      'Yes. We structure on-page SEO, service pages, and location targeting so you can compete for city-level searches (for example service keywords in Delhi or Mumbai) along with national intent.',
  },
];
