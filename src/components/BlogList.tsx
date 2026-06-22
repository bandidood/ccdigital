"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { GhostPost } from "@/lib/ghost";

interface BlogListProps {
  initialPosts: GhostPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
  const [posts, setPosts] = useState<GhostPost[]>(initialPosts);
  const [loading, setLoading] = useState(initialPosts.length === 0);
  const [error, setError] = useState(false);

  useEffect(() => {
    // If SSR already gave us posts, no need to fetch again
    if (initialPosts.length > 0) return;

    const ghostUrl = process.env.NEXT_PUBLIC_GHOST_URL || "https://la-cyber-en-clair.ccdigital.fr";
    const ghostKey = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY || "";

    if (!ghostKey) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    fetch(
      `${ghostUrl}/ghost/api/content/posts/?key=${ghostKey}&limit=12&include=tags,authors&formats=html`,
      { next: { revalidate: 300 } }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const fetchedPosts = Array.isArray(data?.posts) ? data.posts : [];
        setPosts(fetchedPosts);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("BlogList fetch error:", err);
        setError(true);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [initialPosts.length]);

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-20 text-content-muted">
        <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-lg">Chargement des articles…</p>
      </div>
    );
  }

  // Error or empty
  if (posts.length === 0) {
    return (
      <div className="text-center py-20 text-content-muted">
        <p className="text-xl">{error ? "Impossible de charger les articles" : "Les articles arrivent bientôt…"}</p>
        <p className="mt-2 text-sm">
          {error
            ? "Vérifiez votre connexion ou réessayez plus tard."
            : "Notre blog Ghost CMS sera connecté prochainement."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="card-hover group block rounded-2xl overflow-hidden bg-surface-card border border-edge"
        >
          {post.feature_image && (
            <div className="aspect-video overflow-hidden">
              <img
                src={post.feature_image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            {post.primary_tag && (
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {post.primary_tag.name}
              </span>
            )}
            <h2 className="text-lg font-bold mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2 text-content">
              {post.title}
            </h2>
            <p className="text-sm text-content-secondary line-clamp-3">
              {post.excerpt || ""}
            </p>
            {post.published_at && (
              <span className="inline-block mt-3 text-xs text-content-muted">
                {new Date(post.published_at).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}