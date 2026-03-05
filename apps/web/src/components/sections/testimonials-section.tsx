import type { TestimonialSection as TestimonialSectionType } from "@scribient/shared";

export function TestimonialsSection({ section }: { section: TestimonialSectionType }) {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
        <h2 className="section-title">{section.heading}</h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {section.testimonials.map((testimonial) => (
          <blockquote key={testimonial.quote} className="card-shell border-[var(--color-border-strong)]">
            <p className="font-display text-2xl leading-9 tracking-tight text-[var(--color-ink)]">
              “{testimonial.quote}”
            </p>
            <footer className="mt-8 text-sm leading-7 text-[var(--color-muted)]">
              <p className="font-semibold text-[var(--color-ink)]">{testimonial.name}</p>
              <p>
                {[testimonial.role, testimonial.organization].filter(Boolean).join(", ")}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
