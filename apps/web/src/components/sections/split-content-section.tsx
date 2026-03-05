import type { SplitContentSection as SplitContentSectionType } from "@scribient/shared";
import { cx } from "@/lib/utils";

export function SplitContentSection({ section }: { section: SplitContentSectionType }) {
  return (
    <section className="section-shell">
      <div
        className={cx(
          "grid gap-10 rounded-[2rem] border border-[var(--color-border)] bg-white p-8 lg:grid-cols-2 lg:p-12",
          section.mediaPosition === "left" && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <div>
          {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
          <h2 className="section-title">{section.heading}</h2>
          <p className="section-copy mt-5">{section.body}</p>
          {section.bullets?.length ? (
            <ul className="mt-8 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="grid place-items-center rounded-[1.75rem] bg-[linear-gradient(180deg,#0f2536,#12354d)] p-8 text-white">
          {section.media ? (
            <img src={section.media.url} alt={section.media.alt || section.heading} className="max-h-80 w-full rounded-2xl object-cover" />
          ) : (
            <div className="max-w-md space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">Operational impact</p>
              <p className="text-2xl font-medium leading-9">
                Create a cleaner path from captured conversation to completed chart.
              </p>
              <p className="text-base leading-7 text-white/74">
                Built for documentation workflows where adoption, review speed, and implementation discipline matter more than demo theatrics.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
