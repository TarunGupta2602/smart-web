

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
        ? `Learn more about ${title} from SmartSoft Solutions, your trusted partner for bookkeeping, payroll, tax prep, and financial guidance.`
        : 'Expert bookkeeping, payroll, tax preparation, and financial strategy insights for small businesses.';

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
        keywords: keywords.length > 0 ? keywords : ['bookkeeping', 'accounting', 'payroll', 'tax preparation', 'small business finance'],
        slug: (blog.slug || '').toString().trim(),
    };
};

/**
 * Infer category/classification from blog post title and body content
 * (not stored in the database).
 *
 * Title / meta signals are preferred. Financial topics win over generic
 * tech words in the body (e.g. "accounting software") so finance posts
 * are not mislabeled as Technology.
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
            category: 'Technology',
            classification: 'Technology',
            re: /\b(web\s*dev|website|web\s*design|software|javascript|typescript|react|next\.?js|node\.?js|api|saas|cloud|devops|coding|programming|technology|tech|app\s*dev|mobile\s*app|ui\/ux|frontend|backend|full[\s-]?stack|digital\s*marketing|seo|windows|chrome|edge|browser|wifi|wi-?fi|router|bsod|blue\s*screen|microsoft\s*edge|google\s*chrome)\b/,
        },
        {
            category: 'Payroll',
            classification: 'Financial Services',
            re: /\b(payroll|w-?2|1099|t4|direct\s*deposit|paycheck|worker\s*classification)\b/,
        },
        {
            category: 'Tax Preparation',
            classification: 'Financial Services',
            re: /\b(tax\s*deduction|tax\s*prep|tax\s*filing|tax\s*return|irs|cra|write-?offs?)\b/,
        },
        {
            category: 'Invoicing',
            classification: 'Financial Services',
            re: /\b(invoic|billing|accounts?\s*receivable)\b/,
        },
        {
            category: 'Accounting',
            classification: 'Financial Services',
            re: /\b(accounting|cpa|financial\s*statement|ledger|gaap)\b/,
        },
        {
            category: 'Bookkeeping',
            classification: 'Financial Services',
            re: /\b(bookkeeping|reconciliation|quickbooks|xero|accounts?\s*(payable|receivable))\b/,
        },
    ]

    const matchRule = (text) => rules.find((rule) => rule.re.test(text)) || null

    // Brand-specific title cues
    if (/\bquickbooks\b/.test(titleText)) {
        return { category: 'Bookkeeping', classification: 'Financial Services' }
    }
    if (/\bxero\b/.test(titleText)) {
        return { category: 'Bookkeeping', classification: 'Financial Services' }
    }

    // 1) Title / meta first (strongest signal)
    const titleMatch = matchRule(titleText)
    if (titleMatch) {
        // If title is clearly financial, keep it even when tech words appear
        if (titleMatch.classification === 'Financial Services') {
            return { category: titleMatch.category, classification: titleMatch.classification }
        }
        // Title is tech — confirm unless title also has a stronger financial cue
        const financialTitle = rules
            .filter((r) => r.classification === 'Financial Services')
            .find((r) => r.re.test(titleText))
        if (financialTitle) {
            return { category: financialTitle.category, classification: financialTitle.classification }
        }
        return { category: titleMatch.category, classification: titleMatch.classification }
    }

    // 2) Body: prefer financial over tech when both appear
    const financialBody = rules
        .filter((r) => r.classification === 'Financial Services')
        .find((r) => r.re.test(bodyText))
    if (financialBody) {
        return { category: financialBody.category, classification: financialBody.classification }
    }

    const techBody = rules.find((r) => r.category === 'Technology' && r.re.test(bodyText))
    if (techBody) {
        return { category: techBody.category, classification: techBody.classification }
    }

    return { category: '', classification: '' }
}
