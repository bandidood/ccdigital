"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { GhostPost } from "@/lib/ghost";

interface BlogPreviewProps {
  posts: GhostPost[];
}

export function BlogPreview({ posts: initialPosts }: BlogPreviewProps) {
  const [posts, setPosts] = useState<GhostPost[]>(initialPosts);
  const [loading, setLoading] = useState(initialPosts.length === 0);

  useEffect(() => {
    if (initialPosts.length > 0) return;

    const ghostUrl = process.env.NEXT_PUBLIC_GHOST_URL || "https://la-cyber-en-clair.ccdigital.fr";
    const ghostKey = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY || "";

    if (!ghostKey) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    fetch(
      `${ghostUrl}/ghost/api/content/posts/?key=${ghostKey}&limit=3&include=tags,authors&formats=html`
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
        console.error("BlogPreview fetch error:", err);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [initialPosts.length]);

  return (
    <section className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-content">
            Dernières <span className="gradient-text">publications</span>
          </h2>
          <p className="text-content-secondary max-w-xl mx-auto">
            Analyses, guides et retours d'expérience pour anticiper les menaces cyber.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-content-muted">
            <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-4" />
            <p>Chargement…</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
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
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2 text-content">
                    {post.title}
                  </h3>
                  <p className="text-sm text-content-secondary line-clamp-3">
                    {post.excerpt || ""}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
                    Lire l&apos;article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-content-muted">
            <p className="text-lg">Les articles arrivent bientôt…</p>
            <p className="text-sm mt-2">Notre blog Ghost CMS sera connecté prochainement.</p>
          </div>
        )}
      </div>
    </section>
  );
}