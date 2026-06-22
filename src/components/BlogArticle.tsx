"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { GhostPost } from "@/lib/ghost";

interface BlogArticleProps {
  slug: string;
  initialPost: GhostPost | null;
}

export function BlogArticle({ slug, initialPost }: BlogArticleProps) {
  const [post, setPost] = useState<GhostPost | null>(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (initialPost) return;

    const ghostUrl = process.env.NEXT_PUBLIC_GHOST_URL || "https://la-cyber-en-clair.ccdigital.fr";
    const ghostKey = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY || "";

    if (!ghostKey) {
      setLoading(false);
      setNotFound(true);
      return;
    }

    let cancelled = false;

    fetch(
      `${ghostUrl}/ghost/api/content/posts/slug/${slug}/?key=${ghostKey}&include=tags,authors&formats=html`
    )
      .then((res) => {
        if (res.status === 404) throw new Error("NOT_FOUND");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (data?.posts?.[0]) {
          setPost(data.posts[0]);
        } else if (data?.posts) {
          setPost(data.posts);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        if (err.message === "NOT_FOUND") setNotFound(true);
        console.error("BlogArticle fetch error:", err);
        setLoading(false);
        setNotFound(true);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, initialPost]);

  if (loading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-content-muted">Chargement de l'article…</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-content mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-accent hover:underline text-sm">
            ← Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/blog" className="text-accent hover:underline text-sm mb-8 inline-block">
          ← Retour au blog
        </Link>
        {post.primary_tag && (
          <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-4 block">
            {post.primary_tag.name}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-content">{post.title}</h1>
        <div className="flex items-center gap-4 mb-8 text-sm text-content-muted">
          {post.primary_author && (
            <span>Par {post.primary_author.name}</span>
          )}
          {post.published_at && (
            <span>{new Date(post.published_at).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
          )}
        </div>
        {post.feature_image && (
          <div className="aspect-video rounded-xl overflow-hidden mb-10">
            <img src={post.feature_image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:text-content prose-a:text-accent prose-strong:text-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </article>
  );
}