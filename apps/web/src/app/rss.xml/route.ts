import { getBlogPosts } from "@/lib/cms/strapi-client";

export async function GET() {
  const posts = await getBlogPosts(false);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scribient.ai";

  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${siteUrl}/blog/${post.slug}</link>
          <guid>${siteUrl}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.publishedAt || Date.now()).toUTCString()}</pubDate>
          <description><![CDATA[${post.excerpt}]]></description>
        </item>`,
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Scribient Blog</title>
      <link>${siteUrl}/blog</link>
      <description>Insights on clinical documentation and practice operations.</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
