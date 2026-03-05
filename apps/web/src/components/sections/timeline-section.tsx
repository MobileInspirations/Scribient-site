import type { TimelineSection as TimelineSectionType } from "@scribient/shared";

export function TimelineSection({ section }: { section: TimelineSectionType }) {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        <h2 className="section-title">{section.heading}</h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {section.items.map((item, index) => (
          <div key={item.title} className="card-shell relative">
            <span className="absolute right-6 top-6 font-display text-5xl text-[var(--color-border-strong)]">
              0{index + 1}
            </span>
            <h3 className="max-w-[12rem] font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
