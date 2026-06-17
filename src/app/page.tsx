import { HeroSlider } from "@/components/HeroSlider";
import { KeyStats } from "@/components/KeyStats";
import { Pillars } from "@/components/Pillars";
import { BlogPreview } from "@/components/BlogPreview";
import { CTASection } from "@/components/CTASection";
import { getPosts } from "@/lib/ghost";

export const revalidate = 300; // ISR: revalidate every 5 minutes (blog content)

export default async function Home() {
  const posts = await getPosts(3);

  return (
    <>
      <HeroSlider />
      <KeyStats />
      <Pillars />
      <BlogPreview posts={posts} />
      <CTASection />
    </>
  );
}