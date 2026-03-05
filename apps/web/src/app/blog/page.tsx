import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { BlogList } from "@/components/blog/blog-list";
import { getBlogPosts, getSiteSettings } from "@/lib/cms/strapi-client";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings(false);
  return buildMetadata({
    title: "Blog",
    settings,
    path: "/blog",
    seo: {
      metaTitle: "Scribient Blog",
      metaDescription:
        "Insights on ambient documentation, AI medical scribe evaluation, and practice operations.",
      canonicalUrl: "https://scribient.ai/blog",
    },
  });
}

export default async function BlogIndexPage() {
  const { isEnabled } = await draftMode();
  const posts = await getBlogPosts(isEnabled);

  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Resources</p>
        <h1 className="section-title">Perspectives on documentation workflow, evaluation, and rollout.</h1>
        <p className="section-copy mt-5">
          The Scribient blog focuses on the questions buyers and operators actually wrestle with when evaluating documentation tools in practice.
        </p>
      </div>
      <div className="mt-12">
        <BlogList posts={posts} />
      </div>
    </section>
  );
}
