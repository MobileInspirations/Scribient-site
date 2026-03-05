import Link from "next/link";
import type { PricingCardsSection as PricingCardsSectionType } from "@scribient/shared";

export function PricingCardsSection({ section }: { section: PricingCardsSectionType }) {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        <h2 className="section-title">{section.heading}</h2>
        {section.body ? <p className="section-copy mt-5">{section.body}</p> : null}
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {section.cards.map((card, index) => (
          <div
            key={card.name}
            className={
              index === 1
                ? "card-shell relative border-[var(--color-border-strong)] bg-[var(--color-paper)]"
                : "card-shell"
            }
          >
            {card.badge ? (
              <p className="absolute -top-3 left-6 rounded-full bg-[var(--color-sun)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-sun-deep)]">
                {card.badge}
              </p>
            ) : null}
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
                {card.name}
              </h3>
              <div className="flex items-end gap-2">
                <span className="font-display text-5xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {card.price}
                </span>
                {card.cadence ? <span className="pb-2 text-sm text-[var(--color-muted)]">{card.cadence}</span> : null}
              </div>
              <p className="text-sm leading-7 text-[var(--color-muted)]">{card.description}</p>
            </div>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              {card.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={card.cta.href as never} className="btn-primary mt-8 justify-center">
              {card.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
