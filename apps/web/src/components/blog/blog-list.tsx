import Link from "next/link";
import type { BlogPostViewModel } from "@scribient/shared";
import { formatDate } from "@/lib/utils";

export function BlogList({ posts }: { posts: BlogPostViewModel[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="card-shell flex h-full flex-col gap-5"
        >
          <div className="space-y-3">
            {post.category ? (
              <p className="eyebrow">{post.category.name}</p>
            ) : null}
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-teal)]">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              {post.excerpt}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between text-sm text-[var(--color-muted)]">
            <span>{post.author?.name || "Scribient Team"}</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
