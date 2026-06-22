import { getPostBySlug, getPosts } from "@/lib/ghost";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogArticle } from "@/components/BlogArticle";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article non trouvé" };
  return {
    title: post.title,
    description: post.excerpt || "",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      images: post.feature_image ? [{ url: post.feature_image }] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts(50);
  return posts.map((post) => ({ slug: post.slug }));
}

export const revalidate = 300; // ISR: revalidate every 5 minutes

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // If SSR has the post, render it directly. Otherwise pass null to BlogArticle
  // which will fetch it client-side.
  return (
    <div className="pt-20">
      <BlogArticle slug={slug} initialPost={post} />
    </div>
  );
}