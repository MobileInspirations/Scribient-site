export type LinkTarget = "_self" | "_blank";

export interface MediaAsset {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface LinkItem {
  label: string;
  href: string;
  target?: LinkTarget;
}

export interface SeoMeta {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  metaRobots?: string;
  keywords?: string[];
  openGraphImage?: MediaAsset;
  twitterImage?: MediaAsset;
  noIndex?: boolean;
}

export interface HeroSection {
  __component: "sections.hero";
  eyebrow?: string;
  heading: string;
  body: string;
  primaryCta?: LinkItem;
  secondaryCta?: LinkItem;
  highlights?: string[];
  media?: MediaAsset;
}

export interface LogoCloudSection {
  __component: "sections.logo-cloud";
  title?: string;
  logos: Array<{
    name: string;
    image?: MediaAsset;
  }>;
}

export interface FeatureGridSection {
  __component: "sections.feature-grid";
  eyebrow?: string;
  heading: string;
  body?: string;
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface SplitContentSection {
  __component: "sections.split-content";
  eyebrow?: string;
  heading: string;
  body: string;
  bullets?: string[];
  media?: MediaAsset;
  mediaPosition?: "left" | "right";
}

export interface StatsBandSection {
  __component: "sections.stats-band";
  eyebrow?: string;
  heading?: string;
  stats: Array<{
    label: string;
    value: string;
    detail?: string;
  }>;
}

export interface TestimonialSection {
  __component: "sections.testimonials";
  eyebrow?: string;
  heading: string;
  testimonials: Array<{
    quote: string;
    name: string;
    role?: string;
    organization?: string;
  }>;
}

export interface PricingCardsSection {
  __component: "sections.pricing-cards";
  eyebrow?: string;
  heading: string;
  body?: string;
  cards: Array<{
    name: string;
    price: string;
    cadence?: string;
    description: string;
    features: string[];
    cta: LinkItem;
    badge?: string;
  }>;
}

export interface FaqSection {
  __component: "sections.faq";
  eyebrow?: string;
  heading: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface RichTextSection {
  __component: "sections.rich-text";
  eyebrow?: string;
  heading?: string;
  content: string;
}

export interface TimelineSection {
  __component: "sections.timeline";
  eyebrow?: string;
  heading: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export interface CtaBannerSection {
  __component: "sections.cta-banner";
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryCta?: LinkItem;
  secondaryCta?: LinkItem;
}

export interface RecentPostsSection {
  __component: "sections.recent-posts";
  eyebrow?: string;
  heading: string;
  body?: string;
  limit?: number;
}

export interface LeadFormSection {
  __component: "sections.lead-form";
  eyebrow?: string;
  heading: string;
  body?: string;
  submitLabel?: string;
}

export interface TrustBarSection {
  __component: "sections.trust-bar";
  items: string[];
}

export type SectionUnion =
  | HeroSection
  | LogoCloudSection
  | FeatureGridSection
  | SplitContentSection
  | StatsBandSection
  | TestimonialSection
  | PricingCardsSection
  | FaqSection
  | RichTextSection
  | TimelineSection
  | CtaBannerSection
  | RecentPostsSection
  | LeadFormSection
  | TrustBarSection;

export interface FooterColumn {
  heading: string;
  links: LinkItem[];
}

export interface SiteSettings {
  brandName: string;
  siteUrl: string;
  appUrl: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultSeo: SeoMeta;
  navigation: LinkItem[];
  footerColumns: FooterColumn[];
  socialLinks: LinkItem[];
  salesNotificationEmails: string[];
  announcementBar?: {
    label: string;
    href?: string;
  };
  businessContact?: {
    email?: string;
    phone?: string;
    location?: string;
  };
}

export interface PageViewModel {
  id: number | string;
  title: string;
  slug: string;
  pageKind: "home" | "standard" | "legal" | "seo-landing";
  hero?: HeroSection;
  sections: SectionUnion[];
  seo: SeoMeta;
  publishedAt?: string;
}

export interface AuthorViewModel {
  name: string;
  slug: string;
  role?: string;
  bio?: string;
  headshot?: MediaAsset;
}

export interface CategoryViewModel {
  name: string;
  slug: string;
  description?: string;
}

export interface BlogPostViewModel {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: MediaAsset;
  author?: AuthorViewModel;
  category?: CategoryViewModel;
  tags: string[];
  featured?: boolean;
  publishedAt?: string;
  seo: SeoMeta;
}
