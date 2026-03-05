import type { LogoCloudSection as LogoCloudSectionType } from "@scribient/shared";

export function LogoCloudSection({ section }: { section: LogoCloudSectionType }) {
  if (!section.logos.length) {
    return null;
  }

  return (
    <section className="section-shell">
      <div className="space-y-8">
        {section.title ? <p className="eyebrow">{section.title}</p> : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {section.logos.map((logo) => (
            <div key={logo.name} className="card-shell grid place-items-center py-8 text-center text-sm font-medium text-[var(--color-muted)]">
              {logo.image ? (
                <img src={logo.image.url} alt={logo.image.alt || logo.name} className="max-h-10 w-auto object-contain" />
              ) : (
                <span>{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
