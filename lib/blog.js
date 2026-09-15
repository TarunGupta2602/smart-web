import { BLOG_POSTS } from "./blog-posts";

function sortByDateDesc(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.date_posted) - new Date(a.date_posted)
  );
}

/** @returns {typeof BLOG_POSTS} */
export function getAllPosts() {
  return sortByDateDesc(BLOG_POSTS);
}

export function getPostBySlug(slug) {
  if (!slug) return null;
  return BLOG_POSTS.find((post) => post.slug === slug) || null;
}

export function getRelatedPosts(currentSlug, limit = 3) {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}

export function getPaginatedPosts(page = 1, limit = 12) {
  const all = getAllPosts();
  const from = Math.max(0, (page - 1) * limit);
  const data = all.slice(from, from + limit);
  return { data, count: all.length };
}

export function getAllBlogSlugs() {
  return BLOG_POSTS.map((post) => post.slug);
}
