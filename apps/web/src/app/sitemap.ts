import type { MetadataRoute } from "next";
import { getBlogPosts, getAllPages } from "@/lib/cms/strapi-client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts] = await Promise.all([getAllPages(false), getBlogPosts(false)]);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scribient.ai";

  return [
    ...pages.map((page) => ({
      url: new URL(page.slug === "home" ? "/" : `/${page.slug}`, siteUrl).toString(),
      lastModified: page.publishedAt ? new Date(page.publishedAt) : new Date(),
    })),
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    })),
  ];
}
