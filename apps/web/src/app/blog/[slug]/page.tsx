import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/blog/article-content";
import { BlogPostHero } from "@/components/blog/blog-post-hero";
import { StructuredData } from "@/components/layout/structured-data";
import { getBlogPostBySlug, getBlogSlugs, getSiteSettings } from "@/lib/cms/strapi-client";
import { buildBlogJsonLd, buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = await getBlogSlugs(false);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [post, settings] = await Promise.all([
    getBlogPostBySlug(slug, false),
    getSiteSettings(false),
  ]);

  if (!post) {
    return buildMetadata({ settings, path: `/blog/${slug}` });
  }

  return buildMetadata({
    title: post.title,
    seo: post.seo,
    settings,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { isEnabled } = await draftMode();
  const { slug } = await params;
  const [post, settings] = await Promise.all([
    getBlogPostBySlug(slug, isEnabled),
    getSiteSettings(isEnabled),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <StructuredData data={buildBlogJsonLd(post, settings)} />
      <BlogPostHero post={post} />
      <section className="section-shell">
        <div className="mx-auto max-w-3xl">
          <ArticleContent content={post.content} />
        </div>
      </section>
    </>
  );
}
