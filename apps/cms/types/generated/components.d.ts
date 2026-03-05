import type { Schema, Struct } from '@strapi/strapi';

export interface CtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    body: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    highlights: Schema.Attribute.JSON;
    media: Schema.Attribute.Media<'images'>;
    primaryCta: Schema.Attribute.Component<'cta.button', false>;
    secondaryCta: Schema.Attribute.Component<'cta.button', false>;
  };
}

export interface NavigationFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footer_columns';
  info: {
    displayName: 'Footer Column';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'navigation.link', true>;
  };
}

export interface NavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface SectionsCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_banners';
  info: {
    displayName: 'CTA Banner';
    icon: 'star';
  };
  attributes: {
    body: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCta: Schema.Attribute.Component<'cta.button', false>;
    secondaryCta: Schema.Attribute.Component<'cta.button', false>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'sections.faq-item', true>;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    displayName: 'Feature Grid';
    icon: 'apps';
  };
  attributes: {
    body: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'sections.feature-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_items';
  info: {
    displayName: 'Feature Item';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    displayName: 'Lead Form';
    icon: 'mail';
  };
  attributes: {
    body: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    submitLabel: Schema.Attribute.String;
  };
}

export interface SectionsLogoCloud extends Struct.ComponentSchema {
  collectionName: 'components_sections_logo_clouds';
  info: {
    displayName: 'Logo Cloud';
    icon: 'collage';
  };
  attributes: {
    logos: Schema.Attribute.Component<'sections.logo-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_logo_items';
  info: {
    displayName: 'Logo Item';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_cards_items';
  info: {
    displayName: 'Pricing Card';
    icon: 'shoppingCart';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cadence: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'cta.button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.JSON;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPricingCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_cards';
  info: {
    displayName: 'Pricing Cards';
    icon: 'shoppingCart';
  };
  attributes: {
    body: Schema.Attribute.Text;
    cards: Schema.Attribute.Component<'sections.pricing-card', true>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsRecentPosts extends Struct.ComponentSchema {
  collectionName: 'components_sections_recent_posts';
  info: {
    displayName: 'Recent Posts';
    icon: 'book';
  };
  attributes: {
    body: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsSplitContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_split_contents';
  info: {
    displayName: 'Split Content';
    icon: 'feather';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    bullets: Schema.Attribute.JSON;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images'>;
    mediaPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
  };
}

export interface SectionsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'chartPie';
  };
  attributes: {
    detail: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsStatsBand extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_bands';
  info: {
    displayName: 'Stats Band';
    icon: 'chartBar';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'sections.stat-item', true>;
  };
}

export interface SectionsTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
    icon: 'quote';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    organization: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'quote';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<'sections.testimonial-item', true>;
  };
}

export interface SectionsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_sections_timelines';
  info: {
    displayName: 'Timeline';
    icon: 'bulletList';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'sections.timeline-item', true>;
  };
}

export interface SectionsTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_timeline_items';
  info: {
    displayName: 'Timeline Item';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTrustBar extends Struct.ComponentSchema {
  collectionName: 'components_sections_trust_bars';
  info: {
    displayName: 'Trust Bar';
    icon: 'shield';
  };
  attributes: {
    items: Schema.Attribute.JSON;
  };
}

export interface SeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta';
  info: {
    displayName: 'Meta';
    icon: 'earth';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.JSON;
    metaDescription: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    openGraphImage: Schema.Attribute.Media<'images'>;
    twitterImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cta.button': CtaButton;
      'hero.hero': HeroHero;
      'navigation.footer-column': NavigationFooterColumn;
      'navigation.link': NavigationLink;
      'sections.cta-banner': SectionsCtaBanner;
      'sections.faq': SectionsFaq;
      'sections.faq-item': SectionsFaqItem;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.feature-item': SectionsFeatureItem;
      'sections.lead-form': SectionsLeadForm;
      'sections.logo-cloud': SectionsLogoCloud;
      'sections.logo-item': SectionsLogoItem;
      'sections.pricing-card': SectionsPricingCard;
      'sections.pricing-cards': SectionsPricingCards;
      'sections.recent-posts': SectionsRecentPosts;
      'sections.rich-text': SectionsRichText;
      'sections.split-content': SectionsSplitContent;
      'sections.stat-item': SectionsStatItem;
      'sections.stats-band': SectionsStatsBand;
      'sections.testimonial-item': SectionsTestimonialItem;
      'sections.testimonials': SectionsTestimonials;
      'sections.timeline': SectionsTimeline;
      'sections.timeline-item': SectionsTimelineItem;
      'sections.trust-bar': SectionsTrustBar;
      'seo.meta': SeoMeta;
    }
  }
}
