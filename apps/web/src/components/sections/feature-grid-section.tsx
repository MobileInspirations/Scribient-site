import type { FeatureGridSection as FeatureGridSectionType } from "@scribient/shared";

export function FeatureGridSection({ section }: { section: FeatureGridSectionType }) {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        <h2 className="section-title">{section.heading}</h2>
        {section.body ? <p className="section-copy mt-5">{section.body}</p> : null}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {section.features.map((feature) => (
          <div key={feature.title} className="card-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {feature.icon || "Feature"}
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              {feature.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
