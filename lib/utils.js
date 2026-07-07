

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