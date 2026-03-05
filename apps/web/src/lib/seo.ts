import type { BlogPostViewModel, PageViewModel, SeoMeta, SiteSettings } from "@scribient/shared";
import type { Metadata } from "next";
import { absoluteUrl } from "./utils";

function resolveTitle(
  title: string | undefined,
  settings: SiteSettings,
) {
  if (!title) {
    return settings.brandName;
  }

  return settings.titleTemplate.replace("%s", title);
}

export function buildMetadata({
  title,
  seo,
  settings,
  path,
}: {
  title?: string;
  seo?: SeoMeta;
  settings: SiteSettings;
  path: string;
}): Metadata {
  const canonical = seo?.canonicalUrl || absoluteUrl(path);
  const metaTitle = resolveTitle(seo?.metaTitle || title, settings);
  const description = seo?.metaDescription || settings.defaultDescription;
  const noIndex = seo?.noIndex || seo?.metaRobots === "noindex";
  const image = seo?.openGraphImage?.url || settings.defaultSeo.openGraphImage?.url;

  return {
    title: metaTitle,
    description,
    keywords: seo?.keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: metaTitle,
      description,
      siteName: settings.brandName,
      images: image
        ? [
            {
              url: image,
              alt: seo?.openGraphImage?.alt || metaTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: seo?.twitterImage?.url || image ? [seo?.twitterImage?.url || image!] : undefined,
    },
  };
}

export function buildPageJsonLd(page: PageViewModel, settings: SiteSettings) {
  const isHome = page.slug === "home";
  const url = absoluteUrl(isHome ? "/" : `/${page.slug}`);

  const data: Record<string, unknown>[] = [];

  if (isHome) {
    data.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: settings.brandName,
      url: settings.siteUrl,
      email: settings.businessContact?.email,
      telephone: settings.businessContact?.phone,
    });
  }

  if (page.slug === "pricing" || page.slug === "features") {
    data.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: settings.brandName,
      description: page.seo.metaDescription || settings.defaultDescription,
      url,
      brand: {
        "@type": "Brand",
        name: settings.brandName,
      },
    });
  }

  const faqSection = page.sections.find(
    (section) => section.__component === "sections.faq",
  );

  if (faqSection && faqSection.__component === "sections.faq") {
    data.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSection.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (page.slug.includes("/")) {
    const segments = page.slug.split("/");
    const itemListElement = segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: segment,
        item: absoluteUrl(path),
      };
    });

    data.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    });
  }

  return data;
}

export function buildBlogJsonLd(post: BlogPostViewModel, settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: post.author
      ? {
          "@type": "Person",
          name: post.author.name,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: settings.brandName,
      url: settings.siteUrl,
    },
    image: post.coverImage?.url,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}
