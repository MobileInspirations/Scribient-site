import type { BlogPostViewModel } from "@scribient/shared";
import { formatDate } from "@/lib/utils";

export function BlogPostHero({ post }: { post: BlogPostViewModel }) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(243,247,248,0.92))]">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {post.category ? <p className="eyebrow">{post.category.name}</p> : null}
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
          {post.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
          <span>{post.author?.name || "Scribient Team"}</span>
          <span>{formatDate(post.publishedAt)}</span>
          {post.tags.length ? <span>{post.tags.join(" • ")}</span> : null}
        </div>
      </div>
    </section>
  );
}
