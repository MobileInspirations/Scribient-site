import type { StatsBandSection as StatsBandSectionType } from "@scribient/shared";

export function StatsBandSection({ section }: { section: StatsBandSectionType }) {
  return (
    <section className="section-shell">
      <div className="rounded-[2rem] bg-[var(--color-navy)] px-8 py-10 text-white lg:px-12 lg:py-14">
        {section.eyebrow ? <p className="eyebrow !text-[var(--color-mint)]">{section.eyebrow}</p> : null}
        {section.heading ? (
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {section.heading}
          </h2>
        ) : null}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {section.stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/60">{stat.label}</p>
              <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
                {stat.value}
              </p>
              {stat.detail ? <p className="mt-3 text-sm leading-7 text-white/70">{stat.detail}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
