import { getPosts } from "@/lib/ghost";
import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog — Ressources Cybersécurité",
  description: "Analyses, guides et retours d'expérience pour anticiper les menaces cyber en PME industrielle.",
};

export const revalidate = 300; // ISR: revalidate every 5 minutes

export default async function BlogPage() {
  const posts = await getPosts(12);

  return (
    <div className="pt-20">
      <section className="py-20 gradient-page">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-content">
            Ressources <span className="gradient-text">& Blog</span>
          </h1>
          <p className="text-lg text-content-secondary max-w-2xl mb-12">
            Analyses, guides et retours d&apos;expérience pour anticiper les menaces cyber en PME industrielle.
          </p>

          <BlogList initialPosts={posts} />
        </div>
      </section>
    </div>
  );
}