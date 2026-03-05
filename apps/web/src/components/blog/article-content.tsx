import { markdownishToHtml } from "@/lib/utils";

export function ArticleContent({ content }: { content: string }) {
  return (
    <div
      className="rich-content"
      dangerouslySetInnerHTML={{ __html: markdownishToHtml(content) }}
    />
  );
}
