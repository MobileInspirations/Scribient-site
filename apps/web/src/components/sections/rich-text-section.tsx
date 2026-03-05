import type { RichTextSection as RichTextSectionType } from "@scribient/shared";
import { markdownishToHtml } from "@/lib/utils";

export function RichTextSection({ section }: { section: RichTextSectionType }) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--color-border)] bg-white p-8 lg:p-12">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        {section.heading ? <h2 className="section-title">{section.heading}</h2> : null}
        <div
          className="rich-content mt-6"
          dangerouslySetInnerHTML={{ __html: markdownishToHtml(section.content) }}
        />
      </div>
    </section>
  );
}
