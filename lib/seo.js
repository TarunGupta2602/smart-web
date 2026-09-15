/**
 * Shared SEO helpers and default metadata for SmartSoft Solutions.
 * Target intents: website development, e-commerce, web apps, SEO, digital marketing.
 */

export const SITE_URL = 'https://www.smartsoftsolutions.org';
export const SITE_NAME = 'SmartSoft Solutions';
export const CONTACT_EMAIL = 'smartsoft.solutions0@gmail.com';

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
  const fullTitle = title.includes(SITE_NAME) ? title : undefined;

  return {
    title: fullTitle || title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle || `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle || `${title} | ${SITE_NAME}`,
      description,
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
