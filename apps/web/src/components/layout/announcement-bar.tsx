import Link from "next/link";
import type { SiteSettings } from "@scribient/shared";

export function AnnouncementBar({ settings }: { settings: SiteSettings }) {
  if (!settings.announcementBar?.label) {
    return null;
  }

  const content = (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]">
      <span className="rounded-full bg-[var(--color-sun)]/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-sun-deep)]">
        New
      </span>
      {settings.announcementBar.label}
    </span>
  );

  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-paper)]">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 sm:px-6 lg:px-8">
        {settings.announcementBar.href ? (
          <Link href={settings.announcementBar.href} className="transition-opacity hover:opacity-80">
            {content}
          </Link>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
