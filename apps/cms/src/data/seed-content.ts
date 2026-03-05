export const siteSettingsSeed = {
  brandName: "Scribient",
  siteUrl: "https://scribient.ai",
  appUrl: "https://app.scribient.ai",
  titleTemplate: "%s | Scribient",
  defaultDescription:
    "Ambient clinical documentation for modern practices, with AI workflows built for accuracy, compliance, and less physician after-hours work.",
  defaultSeo: {
    metaTitle: "Scribient | Ambient Clinical Documentation for Modern Practices",
    metaDescription:
      "Scribient helps practices reduce documentation burden with ambient capture, structured note generation, and workflows designed for clinical teams.",
    canonicalUrl: "https://scribient.ai",
    keywords: [
      "ambient clinical documentation",
      "medical ai scribe",
      "clinical documentation software",
      "ehr documentation automation",
    ],
    noIndex: false,
  },
  navigation: [
    { label: "Features", href: "/features", target: "_self" },
    { label: "Pricing", href: "/pricing", target: "_self" },
    { label: "About", href: "/about", target: "_self" },
    { label: "Blog", href: "/blog", target: "_self" },
    { label: "Demo", href: "/demo", target: "_self" },
  ],
  footerColumns: [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "/features", target: "_self" },
        { label: "Pricing", href: "/pricing", target: "_self" },
        { label: "Demo", href: "/demo", target: "_self" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/legal/privacy", target: "_self" },
        { label: "Terms", href: "/legal/terms", target: "_self" },
        { label: "HIPAA", href: "/legal/hipaa", target: "_self" },
        { label: "BAA", href: "/legal/baa", target: "_self" },
      ],
    },
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com",
      target: "_blank",
    },
  ],
  salesNotificationEmails: ["sales@scribient.ai"],
  announcementBar: {
    label: "Now booking implementation demos for Q2 practice launches",
    href: "/demo",
  },
  businessContact: {
    email: "sales@scribient.ai",
    phone: "(800) 555-0142",
    location: "United States",
  },
};

export const categorySeeds = [
  {
    name: "Practice Operations",
    slug: "practice-operations",
    description: "Documentation workflow and practice operations guidance.",
  },
  {
    name: "Evaluation",
    slug: "evaluation",
    description: "Frameworks for evaluating healthcare AI workflow tools.",
  },
  {
    name: "Strategy",
    slug: "strategy",
    description: "Commercial and rollout strategy for healthcare platforms.",
  },
];

export const authorSeeds = [
  {
    name: "Scribient Team",
    slug: "scribient-team",
    role: "Editorial",
    bio: "Editorial content produced by the Scribient team.",
  },
];

export const pageSeeds = [
  {
    title: "Ambient Clinical Documentation for Modern Practices",
    slug: "home",
    pageKind: "home",
    hero: {
      eyebrow: "HIPAA-ready documentation workflows",
      heading: "Clinical documentation that stays out of the room and off your evenings.",
      body:
        "Scribient captures encounters, structures the chart, and gives your team a clean review path without forcing physicians into another brittle template workflow.",
      primaryCta: { label: "Book a demo", href: "/demo", target: "_self" },
      secondaryCta: {
        label: "Sign in",
        href: "https://app.scribient.ai/login",
        target: "_self",
      },
      highlights: [
        "Ambient capture built for outpatient visits",
        "Structured note workflows, not generic transcription",
        "Designed for accountable compliance review",
      ],
    },
    sections: [
      {
        __component: "sections.trust-bar",
        items: [
          "HIPAA-conscious architecture",
          "Structured chart review workflows",
          "Practice-ready implementation support",
        ],
      },
      {
        __component: "sections.feature-grid",
        eyebrow: "Why teams switch",
        heading: "Built for the work between patient visits, not just the transcript.",
        body:
          "Scribient is designed around the operational realities of small and mid-sized practices.",
        features: [
          {
            title: "Ambient capture with structure",
            description:
              "Capture visits without forcing clinicians into template-heavy interaction patterns.",
            icon: "microphone",
          },
          {
            title: "Reviewable note generation",
            description:
              "Generate usable draft notes with clear sections and an efficient clinician review pass.",
            icon: "clipboard-check",
          },
        ],
      },
      {
        __component: "sections.pricing-cards",
        eyebrow: "Pricing",
        heading: "Transparent pricing, with demo-led qualification.",
        cards: [
          {
            name: "Core",
            price: "$499",
            cadence: "/month",
            description: "Ambient documentation for practices that want a strong starting point without EHR integration.",
            features: ["Ambient capture", "Structured draft notes", "Practice onboarding support"],
            cta: { label: "Book a demo", href: "/demo", target: "_self" },
          },
          {
            name: "Pro",
            price: "$999",
            cadence: "/month",
            description: "Adds deeper workflow and EHR-oriented integration support.",
            features: ["Everything in Core", "Integration planning", "Priority onboarding"],
            cta: { label: "Book a demo", href: "/demo", target: "_self" },
            badge: "Most requested",
          },
          {
            name: "Concierge",
            price: "$20",
            cadence: "/visit",
            description: "Human-assisted documentation operations layered on top of the Pro workflow.",
            features: ["Human scribe support", "Operational follow-through", "White-glove delivery"],
            cta: { label: "Talk to sales", href: "/demo", target: "_self" },
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Ambient Clinical Documentation for Modern Practices",
      metaDescription:
        "Scribient helps practices reduce after-hours documentation with ambient capture, reviewable note generation, and implementation support.",
      canonicalUrl: "https://scribient.ai/",
      noIndex: false,
    },
  },
  {
    title: "Features",
    slug: "features",
    pageKind: "standard",
    hero: {
      eyebrow: "Platform capabilities",
      heading: "A documentation platform built around review confidence and operational adoption.",
      body:
        "Scribient focuses on the work buyers actually care about: cleaner note production, review throughput, and rollout discipline.",
      primaryCta: { label: "Book a demo", href: "/demo", target: "_self" },
    },
    sections: [
      {
        __component: "sections.feature-grid",
        heading: "Product capabilities",
        features: [
          {
            title: "Ambient visit capture",
            description: "Capture encounters without disrupting the patient conversation.",
            icon: "microphone",
          },
          {
            title: "Structured note generation",
            description: "Create usable draft notes with a clinical review path.",
            icon: "file-text",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Scribient Features",
      metaDescription: "Explore Scribient’s ambient documentation capabilities and workflow support.",
      canonicalUrl: "https://scribient.ai/features",
      noIndex: false,
    },
  },
  {
    title: "Pricing",
    slug: "pricing",
    pageKind: "standard",
    sections: [
      {
        __component: "sections.pricing-cards",
        heading: "Plans",
        cards: [
          {
            name: "Core",
            price: "$499",
            cadence: "/month",
            description: "Ambient clinical documentation without EHR integration.",
            features: ["Ambient capture", "AI draft note generation", "Implementation onboarding"],
            cta: { label: "Book a demo", href: "/demo", target: "_self" },
          },
          {
            name: "Pro",
            price: "$999",
            cadence: "/month",
            description: "Adds deeper implementation and integration support.",
            features: ["Everything in Core", "Advanced workflow planning", "Priority support"],
            cta: { label: "Book a demo", href: "/demo", target: "_self" },
            badge: "Recommended",
          },
          {
            name: "Concierge",
            price: "$20",
            cadence: "/visit",
            description: "Human-assisted documentation operations on top of Pro.",
            features: ["Pro base required", "Scribe-backed support", "Operational workflow"],
            cta: { label: "Talk to sales", href: "/demo", target: "_self" },
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Scribient Pricing",
      metaDescription: "Review Scribient pricing for Core, Pro, and Concierge plans.",
      canonicalUrl: "https://scribient.ai/pricing",
      noIndex: false,
    },
  },
  {
    title: "About",
    slug: "about",
    pageKind: "standard",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Our position",
        content:
          "Scribient was shaped around a simple premise: documentation tools fail when they optimize for novelty instead of adoption.\n\nPractices need workflows that physicians will use, administrators can trust, and support teams can operate consistently.",
      },
    ],
    seo: {
      metaTitle: "About Scribient",
      metaDescription: "Learn how Scribient approaches ambient documentation and practice rollout.",
      canonicalUrl: "https://scribient.ai/about",
      noIndex: false,
    },
  },
  {
    title: "Book a Demo",
    slug: "demo",
    pageKind: "standard",
    sections: [
      {
        __component: "sections.lead-form",
        heading: "Request a Scribient demo",
        body:
          "We use this information to tailor the discussion around specialty, workflow, staffing, and implementation scope.",
        submitLabel: "Request demo",
      },
    ],
    seo: {
      metaTitle: "Book a Scribient Demo",
      metaDescription: "Request a Scribient demo to review workflows, implementation fit, and pricing.",
      canonicalUrl: "https://scribient.ai/demo",
      noIndex: false,
    },
  },
  {
    title: "Privacy Policy",
    slug: "legal/privacy",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Privacy Policy",
        content:
          "## Overview\nThis website collects business contact information submitted through demo and contact forms.",
      },
    ],
    seo: {
      metaTitle: "Privacy Policy",
      metaDescription: "Read the Scribient privacy policy.",
      canonicalUrl: "https://scribient.ai/legal/privacy",
      noIndex: false,
    },
  },
  {
    title: "Terms of Service",
    slug: "legal/terms",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Terms of Service",
        content:
          "## Website terms\nBy using this website, you agree to use it for lawful business evaluation purposes.",
      },
    ],
    seo: {
      metaTitle: "Terms of Service",
      metaDescription: "Read the Scribient terms of service.",
      canonicalUrl: "https://scribient.ai/legal/terms",
      noIndex: false,
    },
  },
  {
    title: "HIPAA",
    slug: "legal/hipaa",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "HIPAA Overview",
        content:
          "Scribient is positioned for HIPAA-conscious workflows and implementation.",
      },
    ],
    seo: {
      metaTitle: "HIPAA Overview",
      metaDescription: "Read Scribient’s HIPAA overview.",
      canonicalUrl: "https://scribient.ai/legal/hipaa",
      noIndex: false,
    },
  },
  {
    title: "Business Associate Agreement",
    slug: "legal/baa",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Business Associate Agreement",
        content:
          "Business Associate Agreement terms are handled during the commercial and implementation process.",
      },
    ],
    seo: {
      metaTitle: "Business Associate Agreement",
      metaDescription: "Learn how Scribient handles Business Associate Agreement discussions.",
      canonicalUrl: "https://scribient.ai/legal/baa",
      noIndex: false,
    },
  },
  {
    title: "Ambient Clinical Documentation",
    slug: "ambient-clinical-documentation",
    pageKind: "seo-landing",
    sections: [
      {
        __component: "sections.rich-text",
        content:
          "Ambient clinical documentation only creates value when practices can operationalize it.",
      },
    ],
    seo: {
      metaTitle: "Ambient Clinical Documentation Software",
      metaDescription: "Evaluate ambient clinical documentation software with Scribient.",
      canonicalUrl: "https://scribient.ai/ambient-clinical-documentation",
      noIndex: false,
    },
  },
  {
    title: "AI Medical Scribe",
    slug: "ai-medical-scribe",
    pageKind: "seo-landing",
    sections: [
      {
        __component: "sections.rich-text",
        content:
          "Practices evaluating AI medical scribe software usually care about adoption, review speed, and commercial fit.",
      },
    ],
    seo: {
      metaTitle: "AI Medical Scribe Platform",
      metaDescription: "Explore an AI medical scribe platform designed around clinical review and rollout planning.",
      canonicalUrl: "https://scribient.ai/ai-medical-scribe",
      noIndex: false,
    },
  },
  {
    title: "EHR Documentation Automation",
    slug: "ehr-documentation-automation",
    pageKind: "seo-landing",
    sections: [
      {
        __component: "sections.rich-text",
        content:
          "Documentation automation only matters when the output can be trusted, reviewed, and finalized inside real clinical workflows.",
      },
    ],
    seo: {
      metaTitle: "EHR Documentation Automation",
      metaDescription: "Evaluate EHR documentation automation with a platform designed for implementation fit.",
      canonicalUrl: "https://scribient.ai/ehr-documentation-automation",
      noIndex: false,
    },
  },
];

export const blogSeeds = [
  {
    title: "What Practices Actually Need From Ambient Documentation",
    slug: "what-practices-actually-need-from-ambient-documentation",
    excerpt:
      "Ambient tools are judged less by transcript novelty and more by whether physicians can close charts faster with confidence.",
    content:
      "## Ambient documentation has an adoption problem\nMany products are evaluated on demo polish rather than operational fit.\n\n## Buyers care about the note loop\nIf the draft note still requires a messy cleanup process, the practice has not really solved the underlying problem.",
    tags: ["ambient documentation", "practice operations"],
    featured: true,
    publishedAt: "2026-02-14T12:00:00.000Z",
    categorySlug: "practice-operations",
    authorSlug: "scribient-team",
    seo: {
      metaTitle: "What Practices Need From Ambient Documentation",
      metaDescription:
        "A practical look at what makes ambient documentation valuable in real practice operations.",
      canonicalUrl:
        "https://scribient.ai/blog/what-practices-actually-need-from-ambient-documentation",
      noIndex: false,
    },
  },
  {
    title: "How to Evaluate an AI Medical Scribe Platform",
    slug: "how-to-evaluate-an-ai-medical-scribe-platform",
    excerpt:
      "The strongest AI scribe evaluations focus on review confidence, implementation fit, and physician behavior change.",
    content:
      "## Start with workflow fit\nEvaluation should begin with the workflow, not the feature matrix.\n\n## Measure review burden\nA platform that generates drafts but increases cleanup time will not improve practice operations.",
    tags: ["ai medical scribe", "evaluation"],
    featured: true,
    publishedAt: "2026-02-21T12:00:00.000Z",
    categorySlug: "evaluation",
    authorSlug: "scribient-team",
    seo: {
      metaTitle: "How to Evaluate an AI Medical Scribe Platform",
      metaDescription:
        "Use this framework to evaluate AI medical scribe platforms around workflow fit, review confidence, and rollout discipline.",
      canonicalUrl:
        "https://scribient.ai/blog/how-to-evaluate-an-ai-medical-scribe-platform",
      noIndex: false,
    },
  },
  {
    title: "Why Sales-Led Onboarding Still Makes Sense in Healthcare AI",
    slug: "why-sales-led-onboarding-still-makes-sense-in-healthcare-ai",
    excerpt:
      "In healthcare workflows, qualification and onboarding discipline are often part of the product.",
    content:
      "## Self-serve is not always the right default\nWhen implementation shape materially affects outcomes, qualification is product strategy.\n\n## Onboarding is part of value delivery\nA disciplined launch often produces better retention than a fast but misaligned self-serve start.",
    tags: ["healthcare ai", "onboarding"],
    featured: false,
    publishedAt: "2026-02-28T12:00:00.000Z",
    categorySlug: "strategy",
    authorSlug: "scribient-team",
    seo: {
      metaTitle: "Why Sales-Led Onboarding Still Makes Sense in Healthcare AI",
      metaDescription:
        "A practical view on why sales-led onboarding remains a rational launch model in healthcare AI workflows.",
      canonicalUrl:
        "https://scribient.ai/blog/why-sales-led-onboarding-still-makes-sense-in-healthcare-ai",
      noIndex: false,
    },
  },
];
