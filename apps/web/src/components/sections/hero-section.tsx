import Link from "next/link";
import type { HeroSection as HeroSectionType } from "@scribient/shared";

export function HeroSection({ section }: { section: HeroSectionType }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[radial-gradient(circle_at_top_left,rgba(26,155,162,0.14),transparent_34%),linear-gradient(180deg,#fffdf8,#f4f8f8)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--color-ink)] sm:text-6xl">
            {section.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            {section.body}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {section.primaryCta ? (
              <Link href={section.primaryCta.href as never} className="btn-primary justify-center">
                {section.primaryCta.label}
              </Link>
            ) : null}
            {section.secondaryCta ? (
              <Link href={section.secondaryCta.href as never} className="btn-secondary justify-center">
                {section.secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {section.highlights?.length ? (
            <ul className="mt-10 grid gap-3 text-sm text-[var(--color-muted)] sm:grid-cols-3">
              {section.highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="relative">
          <div className="card-shell relative overflow-hidden border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(17,37,58,0.96),rgba(10,25,39,0.98))] p-8 text-white shadow-[0_24px_80px_rgba(14,42,52,0.22)]">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/70">
                Live encounter
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-[var(--color-mint)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-mint)]" />
                Processing
              </span>
            </div>
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Captured visit</p>
                <p className="mt-3 text-lg font-medium leading-8 text-white/92">
                  Physician completes the conversation without toggling between the patient and the chart.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/6 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">Draft note</p>
                  <p className="mt-2 text-base leading-7 text-white/86">
                    Structured output aligned to review rather than raw transcript cleanup.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/6 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">Workflow</p>
                  <p className="mt-2 text-base leading-7 text-white/86">
                    Operationally credible handoff for chart completion and support staff coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
