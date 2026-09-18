/**
 * Schema.org JSON-LD Schema Generators
 * 
 * All functions return schema.org compliant objects that can be stringified to JSON-LD
 * Based on official schema.org specifications: https://schema.org/
 */

import {
    CONTACT_WHATSAPP_URL,
    FACEBOOK_URL,
    GOOGLE_BUSINESS_URL,
    SITE_NAME,
    SITE_URL,
} from "./seo";

const BUSINESS_ADDRESS = {
    '@type': 'PostalAddress',
    streetAddress: 'SK2 Shastri Nagar',
    addressLocality: 'Ghaziabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201002',
    addressCountry: 'IN',
};

/**
 * Generate BreadcrumbList schema
 * @param {Array} items - Array of {name, url} objects
 * @param {string} baseUrl - Base URL for absolute URLs
 * @returns {Object} BreadcrumbList schema
 */
export function breadcrumbList(items = [], baseUrl = SITE_URL) {
    const normalizedBaseUrl = baseUrl.replace(/\/+$/, '');

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => {
            let itemUrl = item.url;
            if (!itemUrl.startsWith('http')) {
                itemUrl = `${normalizedBaseUrl}${itemUrl.startsWith('/') ? itemUrl : '/' + itemUrl}`;
            }
            return {
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: itemUrl,
            };
        }),
    };
}

/**
 * Generate WebPage schema
 * @param {Object} options
 * @returns {Object} WebPage schema
 */
export function webPage({
    name,
    description,
    url,
    breadcrumb,
    isPartOf = SITE_URL,
    datePublished,
    dateModified,
    image,
}) {
    const fullUrl = url?.startsWith('http') ? url : `${SITE_URL}${url || ''}`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: name || 'Page',
        description: description || '',
        url: fullUrl,
        isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: isPartOf,
        },
    };

    if (breadcrumb && breadcrumb.length > 0) {
        schema.breadcrumb = breadcrumbList(breadcrumb);
    }

    if (datePublished) schema.datePublished = datePublished;
    if (dateModified) schema.dateModified = dateModified;
    if (image) {
        schema.image = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : '/' + image}`;
    }

    return schema;
}

/**
 * Generate CollectionPage schema
 * @param {Object} options
 * @returns {Object} CollectionPage schema
 */
export function collectionPage(options) {
    const schema = webPage(options);
    schema['@type'] = 'CollectionPage';
    return schema;
}

/**
 * Generate WebSite schema
 * @param {Object} options
 * @returns {Object} WebSite schema
 */
export function webSite({
    name = SITE_NAME,
    url = SITE_URL,
    description,
    potentialAction,
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name,
        url,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
    };

    if (description) schema.description = description;
    if (potentialAction) schema.potentialAction = potentialAction;

    return schema;
}

/**
 * Generate Organization schema
 * @param {Object} options
 * @returns {Object} Organization schema
 */
const INDIA_SERVICE_CITIES = [
    'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Pune', 'Ahmedabad', 'Jaipur', 'Noida', 'Gurugram', 'Ghaziabad', 'Chandigarh',
    'Lucknow', 'Indore', 'Kochi', 'Surat', 'Coimbatore', 'Nagpur',
];

export function organization({
    name = SITE_NAME,
    url = SITE_URL,
    logo,
    description,
    telephone = '+917456096455',
    email = 'smartsoft.solutions0@gmail.com',
    sameAs = [FACEBOOK_URL, CONTACT_WHATSAPP_URL, GOOGLE_BUSINESS_URL],
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name,
        url,
        email,
        telephone,
        address: BUSINESS_ADDRESS,
        foundingDate: '2018',
        founder: {
            '@type': 'Person',
            name: 'Tarun Gupta',
            jobTitle: 'Managing Director',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+917456096455',
                email,
                contactType: 'sales',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi'],
            },
        ],
        areaServed: [
            { '@type': 'Country', name: 'India' },
            ...INDIA_SERVICE_CITIES.map((city) => ({
                '@type': 'City',
                name: city,
                containedInPlace: { '@type': 'Country', name: 'India' },
            })),
        ],
        knowsAbout: [
            'Website Development',
            'E-commerce Development',
            'Next.js',
            'React',
            'SEO',
            'Digital Marketing',
            'Web Applications',
        ],
    };

    if (logo) {
        schema.logo = logo.startsWith('http') ? logo : `${SITE_URL}${logo.startsWith('/') ? logo : '/' + logo}`;
        schema.image = schema.logo;
    }
    if (description) schema.description = description;
    if (sameAs.length > 0) schema.sameAs = sameAs;

    return schema;
}

/**
 * Generate LocalBusiness schema
 * @param {Object} options
 * @returns {Object} LocalBusiness schema
 */
export function localBusiness({
    name = SITE_NAME,
    url = SITE_URL,
    description,
    telephone = '+917456096455',
    email = 'smartsoft.solutions0@gmail.com',
    areaServed,
    priceRange = '$$',
    serviceType = 'Website Development and Digital Services',
    openingHours = 'Mo-Su 00:00-23:59',
}) {
    const defaultArea = [
        { '@type': 'Country', name: 'India' },
        ...INDIA_SERVICE_CITIES.map((city) => ({
            '@type': 'City',
            name: city,
            containedInPlace: { '@type': 'Country', name: 'India' },
        })),
    ];

    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${url}#business`,
        name,
        description: description || 'SmartSoft Solutions is a website development company in Ghaziabad building business websites, e-commerce stores, and web apps with Next.js and React for companies across India.',
        url,
        telephone,
        email,
        address: BUSINESS_ADDRESS,
        openingHours,
        priceRange,
        image: `${SITE_URL}/og-image.jpg`,
        logo: `${SITE_URL}/images/logo.png`,
        areaServed: areaServed
            ? (Array.isArray(areaServed)
                ? areaServed.map((c) => (typeof c === 'string' ? { '@type': 'Country', name: c } : c))
                : { '@type': 'Country', name: areaServed })
            : defaultArea,
        serviceType,
        sameAs: [FACEBOOK_URL, CONTACT_WHATSAPP_URL, GOOGLE_BUSINESS_URL],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Development', url: `${SITE_URL}/services/website-designing` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Store Development', url: `${SITE_URL}/services/website-designing` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Apps & Dashboards', url: `${SITE_URL}/services/website-designing` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Complete NFC + QR Table Ordering', url: `${SITE_URL}/services/nfc-digital-menu` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing', url: `${SITE_URL}/services/digital-marketing` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services', url: `${SITE_URL}/services/seo` } },
            ],
        },
    };
}

/**
 * Generate Service schema
 * @param {Object} options
 * @returns {Object} Service schema
 */
export function service({
    name,
    description,
    url,
    provider = SITE_NAME,
    providerUrl = SITE_URL,
    areaServed = 'India',
    serviceType = 'Website Development and Digital Services',
    offers,
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: {
            '@type': 'ProfessionalService',
            name: provider,
            url: providerUrl,
            telephone: '+917456096455',
        },
        areaServed: {
            '@type': 'Country',
            name: areaServed,
        },
        serviceType,
    };

    if (url) {
        schema.url = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : '/' + url}`;
    }
    if (offers && offers.length > 0) {
        schema.offers = offers.map(offer => ({
            '@type': 'Offer',
            name: offer.name,
            price: offer.price,
            priceCurrency: offer.priceCurrency || 'USD',
            availability: offer.availability || 'https://schema.org/InStock',
            ...(offer.priceSpecification && {
                priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    unitCode: offer.priceSpecification.unitCode,
                    unitText: offer.priceSpecification.unitText,
                    price: offer.price,
                },
            }),
        }));
    }

    return schema;
}

/**
 * Generate Article schema
 * @param {Object} options
 * @returns {Object} Article schema
 */
export function article({
    headline,
    description,
    url,
    image,
    author = SITE_NAME,
    publisher = SITE_NAME,
    datePublished,
    dateModified,
    keywords,
}) {
    const fullUrl = url?.startsWith('http') ? url : `${SITE_URL}${url || ''}`;
    const imageUrl = image?.startsWith('http')
        ? image
        : image
            ? `${SITE_URL}${image.startsWith('/') ? image : '/' + image}`
            : undefined;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        author: {
            '@type': author === SITE_NAME ? 'Organization' : 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: publisher,
            url: SITE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/favicon.ico`,
            }
        },
        datePublished,
        dateModified: dateModified || datePublished,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': fullUrl,
        },
    };

    if (imageUrl) schema.image = imageUrl;
    if (keywords) schema.keywords = keywords;

    return schema;
}

/**
 * Generate FAQPage schema
 * @param {Array} faqs - Array of {q/question, a/answer} objects
 * @returns {Object} FAQPage schema
 */
export function faqPage(faqs = []) {
    if (!faqs || faqs.length === 0) return null;

    const mainEntity = faqs
        .filter(faq => (faq.q || faq.question) && (faq.a || faq.answer))
        .map(faq => ({
            '@type': 'Question',
            name: faq.q || faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a || faq.answer,
            },
        }));

    if (mainEntity.length === 0) return null;

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity,
    };
}

/**
 * Generate Offer schema
 * @param {Object} options
 * @returns {Object} Offer schema
 */
export function offer({
    name,
    price,
    priceCurrency = 'USD',
    availability = 'https://schema.org/InStock',
    url,
    priceSpecification,
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        name,
        price,
        priceCurrency,
        availability,
    };

    if (url) {
        schema.url = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : '/' + url}`;
    }
    if (priceSpecification) {
        schema.priceSpecification = {
            '@type': 'UnitPriceSpecification',
            unitCode: priceSpecification.unitCode,
            unitText: priceSpecification.unitText,
            price: priceSpecification.price || price,
        };
    }

    return schema;
}

/**
 * Generate ItemList schema
 * @param {Array} items - Array of items
 * @param {string} name - Name of the list
 * @returns {Object} ItemList schema
 */
export function itemList(items = [], name) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        ...(name && { name }),
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: item,
        })),
    };
}

/**
 * Generate HowTo schema
 * @param {Object} options
 * @returns {Object} HowTo schema
 */
export function howTo({
    name,
    description,
    image,
    totalTime,
    step,
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
    };

    if (image) {
        schema.image = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : '/' + image}`;
    }
    if (totalTime) schema.totalTime = totalTime;
    if (step && step.length > 0) {
        schema.step = step.map((s, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: s.name,
            text: s.text,
            ...(s.image && { image: s.image }),
            ...(s.url && { url: s.url }),
        }));
    }

    return schema;
}

/**
 * Generate VideoObject schema
 * @param {Object} options
 * @returns {Object} VideoObject schema
 */
export function videoObject({
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name,
        description,
        thumbnailUrl,
        uploadDate,
        duration,
        contentUrl,
    };

    if (embedUrl) schema.embedUrl = embedUrl;
    return schema;
}

/**
 * Generate Review schema
 * @param {Object} options
 * @returns {Object} Review schema
 */
export function review({
    author,
    datePublished,
    reviewBody,
    reviewRating,
    itemReviewed,
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Review',
        author: {
            '@type': 'Person',
            name: author,
        },
        datePublished,
        reviewBody,
        itemReviewed: {
            '@type': 'Service',
            name: itemReviewed,
        },
    };

    if (reviewRating) {
        schema.reviewRating = {
            '@type': 'Rating',
            ratingValue: reviewRating.ratingValue,
            bestRating: reviewRating.bestRating || 5,
            worstRating: reviewRating.worstRating || 1,
        };
    }

    return schema;
}

/**
 * Generate AggregateRating schema
 * @param {Object} options
 * @returns {Object} AggregateRating schema
 */
export function aggregateRating({
    ratingValue,
    reviewCount,
    bestRating = 5,
    worstRating = 1,
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'AggregateRating',
        ratingValue,
        reviewCount,
        bestRating,
        worstRating,
    };
}

/**
 * Generate a list of Service objects within an ItemList
 * @param {Array} servicesData - Array of service data objects
 * @returns {Object} ItemList schema
 */
export function serviceList(servicesData = []) {
    return itemList(
        servicesData.map(s => service({
            name: s.name || s.title,
            description: s.description,
            serviceType: s.serviceType,
            areaServed: s.areaServed,
        })),
        "Our Specialized Services"
    );
}

/**
 * Helper to stringify schema for JSON-LD script tag
 * @param {Object|Array} schema - Schema object or array of schemas
 * @returns {string} JSON string
 */
export function stringifySchema(schema) {
    if (!schema) return '';
    const schemas = Array.isArray(schema) ? schema : [schema];
    const validSchemas = schemas.filter(s => s !== null && s !== undefined);
    if (validSchemas.length === 0) return '';

    // If multiple schemas, wrap in @graph
    if (validSchemas.length > 1) {
        return JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': validSchemas
        }, null, 2);
    }

    return JSON.stringify(validSchemas[0], null, 2);
}
