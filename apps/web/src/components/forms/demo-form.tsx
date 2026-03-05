"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import { TurnstileField } from "./turnstile-field";

const practiceTypes = [
  "Solo Practice",
  "Small Group (2-5)",
  "Medium Group (6-20)",
  "Large Group (20+)",
  "Hospital / Health System",
  "Urgent Care",
  "Other",
];

export function DemoForm({ submitLabel = "Request demo" }: { submitLabel?: string }) {
  const pathname = usePathname();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceName: "",
    practiceType: "",
    currentEhr: "",
    message: "",
    turnstileToken: "",
  });
  const [status, setStatus] = useState<{
    kind: "idle" | "success" | "error";
    message?: string;
  }>({ kind: "idle" });
  const [utm, setUtm] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextUtm: Record<string, string> = {};

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
      const value = params.get(key);
      if (value) {
        nextUtm[key] = value;
      }
    });

    setUtm(nextUtm);
  }, []);

  function updateField(name: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "idle" });

    startTransition(async () => {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          sourcePage: pathname || "/demo",
          referrer: document.referrer || undefined,
          utm,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        setStatus({
          kind: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({
        kind: "success",
        message: result.message || "Your request was received.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        practiceName: "",
        practiceType: "",
        currentEhr: "",
        message: "",
        turnstileToken: "",
      });
    });
  }

  return (
    <form id="lead-form" className="card-shell space-y-6" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="First name" required>
          <input value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} className="input-shell" required />
        </Field>
        <Field label="Last name" required>
          <input value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} className="input-shell" required />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Work email" required>
          <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="input-shell" required />
        </Field>
        <Field label="Phone">
          <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="input-shell" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Practice name" required>
          <input value={form.practiceName} onChange={(e) => updateField("practiceName", e.target.value)} className="input-shell" required />
        </Field>
        <Field label="Practice type" required>
          <select value={form.practiceType} onChange={(e) => updateField("practiceType", e.target.value)} className="input-shell" required>
            <option value="">Select practice type</option>
            {practiceTypes.map((practiceType) => (
              <option key={practiceType} value={practiceType}>
                {practiceType}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Current EHR">
        <input value={form.currentEhr} onChange={(e) => updateField("currentEhr", e.target.value)} className="input-shell" />
      </Field>

      <Field label="What should we focus on in the demo?">
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="input-shell min-h-32 resize-y"
        />
      </Field>

      <TurnstileField onTokenChange={(token) => updateField("turnstileToken", token)} />

      {status.kind !== "idle" ? (
        <div
          className={
            status.kind === "success"
              ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              : "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
          }
        >
          {status.message}
        </div>
      ) : null}

      <button type="submit" className="btn-primary justify-center" disabled={isPending}>
        {isPending ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-[var(--color-ink)]">
        {label} {required ? <span className="text-[var(--color-teal)]">*</span> : null}
      </span>
      {children}
    </label>
  );
}
