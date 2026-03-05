import type {
  BlogPostViewModel,
  HeroSection,
  MediaAsset,
  PageViewModel,
  SectionUnion,
  SeoMeta,
  SiteSettings,
} from "@scribient/shared";

function flattenEntity<T extends Record<string, unknown>>(value: unknown): T {
  if (!value || typeof value !== "object") {
    return {} as T;
  }

  const record = value as Record<string, unknown>;
  const attributes = record.attributes;

  if (attributes && typeof attributes === "object") {
    return {
      ...record,
      ...(attributes as Record<string, unknown>),
    } as T;
  }

  return record as T;
}

function flattenRelation(value: unknown) {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const record = value as Record<string, unknown>;
  const data = record.data;

  if (Array.isArray(data)) {
    return data.map((item) => flattenEntity(item));
  }

  if (data) {
    return flattenEntity(data);
  }

  return flattenEntity(record);
}

export function mapMedia(value: unknown): MediaAsset | undefined {
  const media = flattenRelation(value) as Record<string, unknown> | undefined;

  if (!media) {
    return undefined;
  }

  const urlValue = media.url;
  if (typeof urlValue !== "string") {
    return undefined;
  }

  return {
    url: urlValue,
    alt: typeof media.alternativeText === "string" ? media.alternativeText : undefined,
    width: typeof media.width === "number" ? media.width : undefined,
    height: typeof media.height === "number" ? media.height : undefined,
  };
}

function mapLink(value: unknown) {
  const link = flattenEntity<Record<string, unknown>>(value);
  const label = typeof link.label === "string" ? link.label : undefined;
  const href = typeof link.href === "string" ? link.href : undefined;

  if (!label || !href) {
    return undefined;
  }

  return {
    label,
    href,
    target: link.target === "_blank" ? "_blank" : "_self",
  } as const;
}

export function mapSeo(value: unknown): SeoMeta {
  const seo = flattenEntity<Record<string, unknown>>(value);

  return {
    metaTitle: typeof seo.metaTitle === "string" ? seo.metaTitle : undefined,
    metaDescription:
      typeof seo.metaDescription === "string" ? seo.metaDescription : undefined,
    canonicalUrl: typeof seo.canonicalUrl === "string" ? seo.canonicalUrl : undefined,
    metaRobots: typeof seo.metaRobots === "string" ? seo.metaRobots : undefined,
    keywords: Array.isArray(seo.keywords)
      ? seo.keywords.filter((item): item is string => typeof item === "string")
      : undefined,
    openGraphImage: mapMedia(seo.openGraphImage),
    twitterImage: mapMedia(seo.twitterImage),
    noIndex: Boolean(seo.noIndex),
  };
}

function mapHero(value: unknown): HeroSection | undefined {
  const hero = flattenEntity<Record<string, unknown>>(value);
  if (!hero.heading || typeof hero.heading !== "string") {
    return undefined;
  }

  return {
    __component: "sections.hero",
    eyebrow: typeof hero.eyebrow === "string" ? hero.eyebrow : undefined,
    heading: hero.heading,
    body: typeof hero.body === "string" ? hero.body : "",
    primaryCta: mapLink(hero.primaryCta),
    secondaryCta: mapLink(hero.secondaryCta),
    highlights: Array.isArray(hero.highlights)
      ? hero.highlights.filter((item): item is string => typeof item === "string")
      : undefined,
    media: mapMedia(hero.media),
  };
}

function mapSection(value: unknown): SectionUnion | null {
  const section = flattenEntity<Record<string, unknown>>(value);
  const component = section.__component;

  if (typeof component !== "string") {
    return null;
  }

  switch (component) {
    case "sections.logo-cloud":
      return {
        __component: component,
        title: typeof section.title === "string" ? section.title : undefined,
        logos: Array.isArray(section.logos)
          ? section.logos
              .map((logo) => flattenEntity<Record<string, unknown>>(logo))
              .map((logo) => ({
                name: typeof logo.name === "string" ? logo.name : "Logo",
                image: mapMedia(logo.image),
              }))
          : [],
      };
    case "sections.feature-grid":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        body: typeof section.body === "string" ? section.body : undefined,
        features: Array.isArray(section.features)
          ? section.features
              .map((item) => flattenEntity<Record<string, unknown>>(item))
              .map((feature) => ({
                title: typeof feature.title === "string" ? feature.title : "",
                description:
                  typeof feature.description === "string"
                    ? feature.description
                    : "",
                icon: typeof feature.icon === "string" ? feature.icon : undefined,
              }))
          : [],
      };
    case "sections.split-content":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        body: typeof section.body === "string" ? section.body : "",
        bullets: Array.isArray(section.bullets)
          ? section.bullets.filter((item): item is string => typeof item === "string")
          : undefined,
        media: mapMedia(section.media),
        mediaPosition: section.mediaPosition === "left" ? "left" : "right",
      };
    case "sections.stats-band":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : undefined,
        stats: Array.isArray(section.stats)
          ? section.stats
              .map((item) => flattenEntity<Record<string, unknown>>(item))
              .map((stat) => ({
                label: typeof stat.label === "string" ? stat.label : "",
                value: typeof stat.value === "string" ? stat.value : "",
                detail: typeof stat.detail === "string" ? stat.detail : undefined,
              }))
          : [],
      };
    case "sections.testimonials":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        testimonials: Array.isArray(section.testimonials)
          ? section.testimonials
              .map((item) => flattenEntity<Record<string, unknown>>(item))
              .map((testimonial) => ({
                quote: typeof testimonial.quote === "string" ? testimonial.quote : "",
                name: typeof testimonial.name === "string" ? testimonial.name : "",
                role:
                  typeof testimonial.role === "string" ? testimonial.role : undefined,
                organization:
                  typeof testimonial.organization === "string"
                    ? testimonial.organization
                    : undefined,
              }))
          : [],
      };
    case "sections.pricing-cards":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        body: typeof section.body === "string" ? section.body : undefined,
        cards: Array.isArray(section.cards)
          ? section.cards
              .map((item) => flattenEntity<Record<string, unknown>>(item))
              .map((card) => ({
                name: typeof card.name === "string" ? card.name : "",
                price: typeof card.price === "string" ? card.price : "",
                cadence:
                  typeof card.cadence === "string" ? card.cadence : undefined,
                description:
                  typeof card.description === "string" ? card.description : "",
                features: Array.isArray(card.features)
                  ? card.features.filter(
                      (feature): feature is string => typeof feature === "string",
                    )
                  : [],
                cta: mapLink(card.cta) || { label: "Learn more", href: "/demo" },
                badge: typeof card.badge === "string" ? card.badge : undefined,
              }))
          : [],
      };
    case "sections.faq":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        items: Array.isArray(section.items)
          ? section.items
              .map((item) => flattenEntity<Record<string, unknown>>(item))
              .map((faq) => ({
                question:
                  typeof faq.question === "string" ? faq.question : "",
                answer: typeof faq.answer === "string" ? faq.answer : "",
              }))
          : [],
      };
    case "sections.rich-text":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : undefined,
        content: typeof section.content === "string" ? section.content : "",
      };
    case "sections.timeline":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        items: Array.isArray(section.items)
          ? section.items
              .map((item) => flattenEntity<Record<string, unknown>>(item))
              .map((timelineItem) => ({
                title:
                  typeof timelineItem.title === "string"
                    ? timelineItem.title
                    : "",
                description:
                  typeof timelineItem.description === "string"
                    ? timelineItem.description
                    : "",
              }))
          : [],
      };
    case "sections.cta-banner":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        body: typeof section.body === "string" ? section.body : undefined,
        primaryCta: mapLink(section.primaryCta),
        secondaryCta: mapLink(section.secondaryCta),
      };
    case "sections.recent-posts":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        body: typeof section.body === "string" ? section.body : undefined,
        limit: typeof section.limit === "number" ? section.limit : undefined,
      };
    case "sections.lead-form":
      return {
        __component: component,
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : "",
        body: typeof section.body === "string" ? section.body : undefined,
        submitLabel:
          typeof section.submitLabel === "string" ? section.submitLabel : undefined,
      };
    case "sections.trust-bar":
      return {
        __component: component,
        items: Array.isArray(section.items)
          ? section.items.filter((item): item is string => typeof item === "string")
          : [],
      };
    default:
      return null;
  }
}

export function mapSiteSettings(value: unknown): SiteSettings {
  const settings = flattenEntity<Record<string, unknown>>(value);

  return {
    brandName:
      typeof settings.brandName === "string" ? settings.brandName : "Scribient",
    siteUrl:
      typeof settings.siteUrl === "string"
        ? settings.siteUrl
        : "https://scribient.ai",
    appUrl:
      typeof settings.appUrl === "string"
        ? settings.appUrl
        : "https://app.scribient.ai",
    titleTemplate:
      typeof settings.titleTemplate === "string"
        ? settings.titleTemplate
        : "%s | Scribient",
    defaultDescription:
      typeof settings.defaultDescription === "string"
        ? settings.defaultDescription
        : "Scribient marketing site",
    defaultSeo: mapSeo(settings.defaultSeo),
    navigation: Array.isArray(settings.navigation)
      ? settings.navigation
          .map((item) => mapLink(item))
          .filter((item): item is NonNullable<typeof item> => Boolean(item))
      : [],
    footerColumns: Array.isArray(settings.footerColumns)
      ? settings.footerColumns
          .map((column) => flattenEntity<Record<string, unknown>>(column))
          .map((column) => ({
            heading: typeof column.heading === "string" ? column.heading : "",
            links: Array.isArray(column.links)
              ? column.links
                  .map((link) => mapLink(link))
                  .filter(
                    (link): link is NonNullable<typeof link> => Boolean(link),
                  )
              : [],
          }))
      : [],
    socialLinks: Array.isArray(settings.socialLinks)
      ? settings.socialLinks
          .map((item) => mapLink(item))
          .filter((item): item is NonNullable<typeof item> => Boolean(item))
      : [],
    salesNotificationEmails: Array.isArray(settings.salesNotificationEmails)
      ? settings.salesNotificationEmails.filter(
          (item): item is string => typeof item === "string",
        )
      : [],
    announcementBar:
      settings.announcementBar && typeof settings.announcementBar === "object"
        ? {
            label:
              typeof (settings.announcementBar as Record<string, unknown>).label ===
              "string"
                ? ((settings.announcementBar as Record<string, unknown>)
                    .label as string)
                : "",
            href:
              typeof (settings.announcementBar as Record<string, unknown>).href ===
              "string"
                ? ((settings.announcementBar as Record<string, unknown>)
                    .href as string)
                : undefined,
          }
        : undefined,
    businessContact:
      settings.businessContact && typeof settings.businessContact === "object"
        ? {
            email:
              typeof (settings.businessContact as Record<string, unknown>).email ===
              "string"
                ? ((settings.businessContact as Record<string, unknown>)
                    .email as string)
                : undefined,
            phone:
              typeof (settings.businessContact as Record<string, unknown>).phone ===
              "string"
                ? ((settings.businessContact as Record<string, unknown>)
                    .phone as string)
                : undefined,
            location:
              typeof (settings.businessContact as Record<string, unknown>)
                .location === "string"
                ? ((settings.businessContact as Record<string, unknown>)
                    .location as string)
                : undefined,
          }
        : undefined,
  };
}

export function mapPage(value: unknown): PageViewModel {
  const page = flattenEntity<Record<string, unknown>>(value);

  return {
    id:
      typeof page.documentId === "string"
        ? page.documentId
        : ((page.id as string | number | undefined) ?? ""),
    title: typeof page.title === "string" ? page.title : "",
    slug: typeof page.slug === "string" ? page.slug : "",
    pageKind:
      page.pageKind === "home" ||
      page.pageKind === "standard" ||
      page.pageKind === "legal" ||
      page.pageKind === "seo-landing"
        ? page.pageKind
        : "standard",
    hero: mapHero(page.hero),
    sections: Array.isArray(page.sections)
      ? page.sections
          .map((section) => mapSection(section))
          .filter((section): section is SectionUnion => Boolean(section))
      : [],
    seo: mapSeo(page.seo),
    publishedAt:
      typeof page.publishedAt === "string" ? page.publishedAt : undefined,
  };
}

export function mapBlogPost(value: unknown): BlogPostViewModel {
  const post = flattenEntity<Record<string, unknown>>(value);
  const author = flattenRelation(post.author) as Record<string, unknown> | undefined;
  const category = flattenRelation(post.category) as
    | Record<string, unknown>
    | undefined;

  return {
    id:
      typeof post.documentId === "string"
        ? post.documentId
        : ((post.id as string | number | undefined) ?? ""),
    title: typeof post.title === "string" ? post.title : "",
    slug: typeof post.slug === "string" ? post.slug : "",
    excerpt: typeof post.excerpt === "string" ? post.excerpt : "",
    content: typeof post.content === "string" ? post.content : "",
    coverImage: mapMedia(post.coverImage),
    author: author
      ? {
          name: typeof author.name === "string" ? author.name : "",
          slug: typeof author.slug === "string" ? author.slug : "",
          role: typeof author.role === "string" ? author.role : undefined,
          bio: typeof author.bio === "string" ? author.bio : undefined,
          headshot: mapMedia(author.headshot),
        }
      : undefined,
    category: category
      ? {
          name: typeof category.name === "string" ? category.name : "",
          slug: typeof category.slug === "string" ? category.slug : "",
          description:
            typeof category.description === "string"
              ? category.description
              : undefined,
        }
      : undefined,
    tags: Array.isArray(post.tags)
      ? post.tags.filter((item): item is string => typeof item === "string")
      : [],
    featured: Boolean(post.featured),
    publishedAt:
      typeof post.publishedAt === "string" ? post.publishedAt : undefined,
    seo: mapSeo(post.seo),
  };
}
