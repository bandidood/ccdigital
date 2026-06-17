import { getPostBySlug, getPosts } from "@/lib/ghost";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
  if (!post) notFound();

  return (
    <div className="pt-20">
      <article className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-[#00D4FF] hover:underline text-sm mb-8 inline-block">
            ← Retour au blog
          </Link>
          {post.primary_tag && (
            <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4 block">
              {post.primary_tag.name}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 mb-8 text-sm text-[#6B7A90]">
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
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#00D4FF] prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
    </div>
  );
}