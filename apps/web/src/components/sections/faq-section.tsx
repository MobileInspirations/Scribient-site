import type { FaqSection as FaqSectionType } from "@scribient/shared";

export function FaqSection({ section }: { section: FaqSectionType }) {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        <h2 className="section-title">{section.heading}</h2>
      </div>
      <div className="mt-12 space-y-4">
        {section.items.map((item) => (
          <details key={item.question} className="card-shell group">
            <summary className="cursor-pointer list-none font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              {item.question}
            </summary>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
