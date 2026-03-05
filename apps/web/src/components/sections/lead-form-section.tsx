import type { LeadFormSection as LeadFormSectionType } from "@scribient/shared";
import { DemoForm } from "@/components/forms/demo-form";

export function LeadFormSection({ section }: { section: LeadFormSectionType }) {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
          <h2 className="section-title">{section.heading}</h2>
          {section.body ? <p className="section-copy">{section.body}</p> : null}
        </div>
        <DemoForm submitLabel={section.submitLabel} />
      </div>
    </section>
  );
}
