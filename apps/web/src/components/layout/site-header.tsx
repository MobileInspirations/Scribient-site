"use client";

import Link from "next/link";
import { useState } from "react";
import type { SiteSettings } from "@scribient/shared";
import { cx } from "@/lib/utils";

export function SiteHeader({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface)_84%,white)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[var(--color-ink)]">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-navy)] text-sm font-semibold tracking-[0.24em] text-white">
            SC
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            {settings.brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {settings.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={settings.appUrl + "/login"} className="btn-secondary">
            Sign in
          </Link>
          <Link href="/demo" className="btn-primary">
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span
            className={cx(
              "block h-0.5 w-5 bg-current transition-transform",
              open && "translate-y-1.5 rotate-45",
            )}
          />
          <span
            className={cx(
              "absolute block h-0.5 w-5 bg-current transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cx(
              "block h-0.5 w-5 bg-current transition-transform",
              open && "-translate-y-1.5 -rotate-45",
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {settings.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-paper)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2">
              <Link
                href={settings.appUrl + "/login"}
                className="btn-secondary justify-center"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/demo"
                className="btn-primary justify-center"
                onClick={() => setOpen(false)}
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
