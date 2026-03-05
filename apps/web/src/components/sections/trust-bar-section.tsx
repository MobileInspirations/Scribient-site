import type { TrustBarSection as TrustBarSectionType } from "@scribient/shared";

export function TrustBarSection({ section }: { section: TrustBarSectionType }) {
  return (
    <section className="section-shell py-8">
      <div className="grid gap-4 rounded-[2rem] border border-[var(--color-border)] bg-white px-6 py-6 sm:grid-cols-3">
        {section.items.map((item) => (
          <div key={item} className="text-sm font-medium text-[var(--color-muted)]">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
