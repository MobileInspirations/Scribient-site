import Link from "next/link";
import type { SiteSettings } from "@scribient/shared";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[var(--color-ink)]">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-navy)] text-sm font-semibold tracking-[0.24em] text-white">
              SC
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              {settings.brandName}
            </span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
            Ambient clinical documentation for practices that care about review confidence,
            operational adoption, and disciplined rollout.
          </p>
          <div className="space-y-1 text-sm text-[var(--color-muted)]">
            {settings.businessContact?.email ? <p>{settings.businessContact.email}</p> : null}
            {settings.businessContact?.phone ? <p>{settings.businessContact.phone}</p> : null}
            {settings.businessContact?.location ? <p>{settings.businessContact.location}</p> : null}
          </div>
        </div>

        {settings.footerColumns.map((column) => (
          <div key={column.heading} className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
              {column.heading}
            </h2>
            <ul className="space-y-3 text-sm text-[var(--color-muted)]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-[var(--color-ink)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {settings.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {settings.socialLinks.map((link) => (
              <Link key={link.href} href={link.href} target={link.target} className="hover:text-[var(--color-ink)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
