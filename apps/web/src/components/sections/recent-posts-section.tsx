import type { BlogPostViewModel, RecentPostsSection as RecentPostsSectionType } from "@scribient/shared";
import { BlogList } from "@/components/blog/blog-list";

export function RecentPostsSection({
  section,
  posts,
}: {
  section: RecentPostsSectionType;
  posts: BlogPostViewModel[];
}) {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        <h2 className="section-title">{section.heading}</h2>
        {section.body ? <p className="section-copy mt-5">{section.body}</p> : null}
      </div>
      <div className="mt-12">
        <BlogList posts={posts} />
      </div>
    </section>
  );
}
