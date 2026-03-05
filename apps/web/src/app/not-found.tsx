import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--color-border)] bg-white px-8 py-14 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)]">
          That page is not available.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          The page may have moved, been unpublished, or never existed.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">
            Go home
          </Link>
          <Link href="/blog" className="btn-secondary">
            View blog
          </Link>
        </div>
      </div>
    </section>
  );
}
