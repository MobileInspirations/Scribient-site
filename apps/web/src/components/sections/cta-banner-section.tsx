import Link from "next/link";
import type { CtaBannerSection as CtaBannerSectionType } from "@scribient/shared";

export function CtaBannerSection({ section }: { section: CtaBannerSectionType }) {
  return (
    <section className="section-shell">
      <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0f2536,#1a9ba2)] px-8 py-12 text-white lg:px-12">
        {section.eyebrow ? <p className="eyebrow !text-[var(--color-mint)]">{section.eyebrow}</p> : null}
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white">
          {section.heading}
        </h2>
        {section.body ? <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{section.body}</p> : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {section.primaryCta ? (
            <Link href={section.primaryCta.href} className="btn-surface justify-center">
              {section.primaryCta.label}
            </Link>
          ) : null}
          {section.secondaryCta ? (
            <Link href={section.secondaryCta.href} className="btn-outline-light justify-center">
              {section.secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
