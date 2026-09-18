

// New helper: strip common markdown syntax to get plain text for meta descriptions
export const stripMarkdown = (md) => {
    if (!md) return ''
    // Remove image and link markdown: ![alt](url) and [text](url)
    let s = md.replace(/!\[.*?\]\(.*?\)/g, '')
    s = s.replace(/\[(.*?)\]\(.*?\)/g, '$1')
    // Remove code fences and inline code
    s = s.replace(/```[\s\S]*?```/g, '')
    s = s.replace(/`([^`]*)`/g, '$1')
    // Remove remaining markdown characters # * _ > -
    s = s.replace(/[#*>_\-~]/g, '')
    // Collapse whitespace
    s = s.replace(/\s+/g, ' ').trim()
    return s
}



export const estimateReadTime = (text = '') => {
    const words = (text || '').trim().split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.round(words / 200))
}

export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-')   // Replace multiple - with single -
}

const truncateText = (text = '', maxLength = 160) => {
    if (!text) return '';
    const cleaned = text.replace(/\s+/g, ' ').trim();
    if (cleaned.length <= maxLength) return cleaned;
    return `${cleaned.slice(0, maxLength - 1).trimEnd()}…`;
};

export const buildBlogSeo = (blog = {}) => {
    const title = (blog.title || '').toString().trim();
    const contentText = stripMarkdown(blog.content || blog.description || '').replace(/\s+/g, ' ').trim();
    const fallbackDescription = title
        ? `Learn more about ${title} from SmartSoft Solutions — website development, e-commerce, and digital growth insights.`
        : 'Website development, e-commerce, SEO, and digital growth insights for businesses.';

    const metaTitle = truncateText((blog.meta_title || title || '').toString().trim(), 60);
    const metaDescription = truncateText((blog.meta_description || contentText || fallbackDescription).toString().trim(), 155);

    const keywords = (blog.meta_keywords || '')
        .toString()
        .split(',')
        .map((keyword) => keyword.trim())
        .filter(Boolean);

    return {
        title: metaTitle || title || 'SmartSoft Solutions Blog',
        metaTitle,
        metaDescription: metaDescription || fallbackDescription,
        keywords: keywords.length > 0 ? keywords : ['website development', 'e-commerce', 'SEO', 'web apps', 'digital marketing'],
        slug: (blog.slug || '').toString().trim(),
    };
};

/**
 * Infer category/classification from blog post title and body content
 * (not stored in the database).
 *
 * Title / meta signals are preferred. Digital topics are the default brand focus.
 */
export const resolveBlogTaxonomy = (blog = {}) => {
    const titleText = stripMarkdown(
        `${blog.title || ''} ${blog.meta_title || ''} ${blog.meta_keywords || ''} ${blog.slug || ''}`
    ).toLowerCase()
    const bodyText = stripMarkdown(
        `${blog.description || ''} ${blog.content || ''}`
    ).toLowerCase()

    const rules = [
        {
            category: 'Restaurant tech',
            classification: 'Digital Services',
            re: /\b(nfc|digital\s*menu|table\s*order|qr\s*menu|restaurant\s*menu|contactless\s*menu)\b/,
        },
        {
            category: 'SEO',
            classification: 'Digital Services',
            re: /\b(seo|search\s*engine|organic\s*traffic|keyword\s*research|backlink|serp)\b/,
        },
        {
            category: 'E-commerce',
            classification: 'Digital Services',
            re: /\b(e-?commerce|online\s*store|checkout|shopping\s*cart|razorpay|shopify|product\s*catalog)\b/,
        },
        {
            category: 'Digital Marketing',
            classification: 'Digital Services',
            re: /\b(digital\s*marketing|paid\s*ads|google\s*ads|facebook\s*ads|email\s*marketing|lead\s*gen)\b/,
        },
        {
            category: 'Web Development',
            classification: 'Digital Services',
            re: /\b(web\s*dev|website|web\s*design|javascript|typescript|react|next\.?js|node\.?js|api|saas|coding|programming|app\s*dev|ui\/ux|frontend|backend|full[\s-]?stack|web\s*app)\b/,
        },
    ]

    const matchRule = (text) => rules.find((rule) => rule.re.test(text)) || null

    const titleMatch = matchRule(titleText)
    if (titleMatch) {
        return { category: titleMatch.category, classification: titleMatch.classification }
    }

    const bodyMatch = matchRule(bodyText)
    if (bodyMatch) {
        return { category: bodyMatch.category, classification: bodyMatch.classification }
    }

    return { category: 'Web Development', classification: 'Digital Services' }
}
