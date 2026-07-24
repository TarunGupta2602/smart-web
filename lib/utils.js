

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
 * Resolve category/classification for a blog post from its fields,
 * or infer them from title/body when not set (financial vs technology).
 */
export const resolveBlogTaxonomy = (blog = {}) => {
    const text = stripMarkdown(
        `${blog.title || ''} ${blog.meta_title || ''} ${blog.meta_keywords || ''} ${blog.description || ''} ${blog.content || ''}`
    ).toLowerCase()

    const techRe = /\b(web\s*dev|software|javascript|typescript|react|next\.?js|node\.?js|api|saas|cloud|devops|coding|programming|technology|tech\b|app\s*dev|mobile\s*app|ui\/ux|frontend|backend|full[\s-]?stack)\b/
    const payrollRe = /\b(payroll|w-?2|t4|direct\s*deposit|paycheck)\b/
    const taxRe = /\b(tax\s*prep|tax\s*filing|irs|cra|tax\s*return|deduction)\b/
    const accountingRe = /\b(accounting|cpa|financial\s*statement|ledger|gaap)\b/
    const bookkeepingRe = /\b(bookkeeping|reconciliation|quickbooks|xero|accounts?\s*(payable|receivable))\b/
    const invoicingRe = /\b(invoic|billing|accounts?\s*receivable)\b/

    let category = (blog.category || '').trim()
    let classification = (blog.classification || '').trim()

    if (!category) {
        if (techRe.test(text)) category = 'Technology'
        else if (payrollRe.test(text)) category = 'Payroll'
        else if (taxRe.test(text)) category = 'Tax Preparation'
        else if (invoicingRe.test(text)) category = 'Invoicing'
        else if (accountingRe.test(text)) category = 'Accounting'
        else if (bookkeepingRe.test(text)) category = 'Bookkeeping'
    }

    if (!classification) {
        if (techRe.test(text) || category === 'Technology') classification = 'Technology'
        else if (category) classification = 'Financial Services'
    }

    return { category, classification }
}
