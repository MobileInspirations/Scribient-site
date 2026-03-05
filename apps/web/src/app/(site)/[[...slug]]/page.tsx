import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/layout/structured-data";
import { PageRenderer } from "@/components/sections/page-renderer";
import { getPageBySlug, getPageSlugs, getSiteSettings } from "@/lib/cms/strapi-client";
import { buildMetadata, buildPageJsonLd } from "@/lib/seo";

function toSlug(slug?: string[]) {
  return slug?.length ? slug.join("/") : "home";
}

export async function generateStaticParams() {
  const slugs = await getPageSlugs(false);

  return slugs.map((slug) => ({
    slug: slug === "home" ? [] : slug.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const [{ slug }, settings] = await Promise.all([params, getSiteSettings(false)]);
  const page = await getPageBySlug(toSlug(slug), false);

  if (!page) {
    return buildMetadata({ settings, path: "/" });
  }

  return buildMetadata({
    title: page.title,
    seo: page.seo,
    settings,
    path: page.slug === "home" ? "/" : `/${page.slug}`,
  });
}

export default async function CmsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { isEnabled } = await draftMode();
  const { slug } = await params;
  const routeSlug = toSlug(slug);
  const [page, settings] = await Promise.all([
    getPageBySlug(routeSlug, isEnabled),
    getSiteSettings(isEnabled),
  ]);

  if (!page) {
    notFound();
  }

  return (
    <>
      <StructuredData data={buildPageJsonLd(page, settings)} />
      <PageRenderer page={page} preview={isEnabled} />
    </>
  );
}
