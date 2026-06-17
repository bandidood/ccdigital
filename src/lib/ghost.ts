import GhostContentAPI from '@tryghost/content-api';

const ghostUrl = process.env.NEXT_PUBLIC_GHOST_URL || 'https://la-cyber-en-clair.ccdigital.fr';
const ghostKey = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY || '';

const api = ghostKey
  ? new GhostContentAPI({
      url: ghostUrl,
      key: ghostKey,
      version: 'v5',
    })
  : null;

export interface GhostPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  html: string;
  tags?: { id: string; name: string; slug: string }[];
  primary_tag?: { id: string; name: string; slug: string };
  primary_author?: { id: string; name: string; slug: string; profile_image: string };
}

export interface GhostPage {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string | null;
}

/** Revalidation interval for ISR (in seconds) */
const REVALIDATE_SECONDS = 300; // 5 minutes

export async function getPosts(limit = 3): Promise<GhostPost[]> {
  if (!api) {
    console.warn('Ghost API not configured — NEXT_PUBLIC_GHOST_CONTENT_API_KEY missing');
    return [];
  }
  try {
    const posts = await api.posts.browse({
      limit,
      include: ['tags', 'authors'],
      formats: ['html'],
    }) as GhostPost[];
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    console.error('Ghost API getPosts error:', err);
    return [];
  }
}

export async function getAllPosts(): Promise<GhostPost[]> {
  if (!api) return [];
  try {
    const posts = await api.posts.browse({
      limit: 999,
      include: ['tags', 'authors'],
      formats: ['html'],
    }) as GhostPost[];
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    console.error('Ghost API getAllPosts error:', err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  if (!api) return null;
  try {
    const post = await api.posts.read(
      { slug },
      { include: ['tags', 'authors'], formats: ['html'] }
    ) as GhostPost;
    return post || null;
  } catch (err) {
    console.error('Ghost API getPostBySlug error:', err);
    return null;
  }
}

export async function getPages(): Promise<GhostPage[]> {
  if (!api) return [];
  try {
    const pages = await api.pages.browse({
      formats: ['html'],
    }) as GhostPage[];
    return Array.isArray(pages) ? pages : [];
  } catch (err) {
    console.error('Ghost API getPages error:', err);
    return [];
  }
}

export async function getPostsByTag(tagSlug: string, limit = 10): Promise<GhostPost[]> {
  if (!api) return [];
  try {
    const posts = await api.posts.browse({
      limit,
      include: ['tags', 'authors'],
      formats: ['html'],
      filter: `tag:${tagSlug}`,
    }) as GhostPost[];
    return Array.isArray(posts) ? posts : [];
  } catch (err) {
    console.error('Ghost API getPostsByTag error:', err);
    return [];
  }
}

export async function getTags(): Promise<{ id: string; name: string; slug: string; count: { posts: number } }[]> {
  if (!api) return [];
  try {
    const tags = await api.tags.browse({
      limit: 999,
      include: ['count.posts'],
    }) as any[];
    return Array.isArray(tags) ? tags.filter((t: any) => t.count?.posts > 0) : [];
  } catch (err) {
    console.error('Ghost API getTags error:', err);
    return [];
  }
}

export { REVALIDATE_SECONDS };
export default api;