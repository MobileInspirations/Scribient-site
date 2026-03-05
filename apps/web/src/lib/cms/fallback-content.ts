import type {
  BlogPostViewModel,
  PageViewModel,
  SiteSettings,
} from "@scribient/shared";

export const fallbackSiteSettings: SiteSettings = {
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
      "hipaa compliant ai scribe",
    ],
  },
  navigation: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Demo", href: "/demo" },
  ],
  footerColumns: [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Demo", href: "/demo" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/legal/privacy" },
        { label: "Terms", href: "/legal/terms" },
        { label: "HIPAA", href: "/legal/hipaa" },
        { label: "BAA", href: "/legal/baa" },
      ],
    },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com", target: "_blank" },
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

export const fallbackPages: PageViewModel[] = [
  {
    id: 1,
    title: "Ambient Clinical Documentation for Modern Practices",
    slug: "home",
    pageKind: "home",
    hero: {
      __component: "sections.hero",
      eyebrow: "HIPAA-ready documentation workflows",
      heading: "Clinical documentation that stays out of the room and off your evenings.",
      body:
        "Scribient captures encounters, structures the chart, and gives your team a clean review path without forcing physicians into another brittle template workflow.",
      primaryCta: { label: "Book a demo", href: "/demo" },
      secondaryCta: { label: "Sign in", href: "https://app.scribient.ai/login" },
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
          "Scribient is designed around the operational realities of small and mid-sized practices: note completion, review confidence, throughput, and cleaner handoff into the record.",
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
          {
            title: "Operational visibility",
            description:
              "Give teams a cleaner view of documentation load, turnaround, and note readiness.",
            icon: "activity",
          },
          {
            title: "Implementation support",
            description:
              "Move from pilot to practice rollout with a process designed for real clinic operations.",
            icon: "stethoscope",
          },
        ],
      },
      {
        __component: "sections.split-content",
        eyebrow: "What changes in practice",
        heading: "Reduce after-hours charting without introducing more admin friction.",
        body:
          "The goal is not novelty. It is fewer late notes, less duplicated effort, and more confidence that the output can be reviewed and finalized quickly.",
        bullets: [
          "Shorter physician documentation loops",
          "Clearer operational handoff for support staff",
          "More consistent formatting across encounters",
        ],
        mediaPosition: "right",
      },
      {
        __component: "sections.stats-band",
        eyebrow: "Operational outcomes",
        heading: "The metrics buyers actually ask about",
        stats: [
          { label: "Documentation hours saved", value: "2+ hrs/day" },
          { label: "Launch model", value: "Sales-led" },
          { label: "Support posture", value: "Implementation-first" },
        ],
      },
      {
        __component: "sections.testimonials",
        eyebrow: "Practice feedback",
        heading: "Designed to feel operationally credible, not experimental.",
        testimonials: [
          {
            quote:
              "The key difference was not just transcription quality. It was that the note review workflow actually matched how our physicians close charts.",
            name: "Dr. Elena Suarez",
            role: "Family Medicine",
            organization: "Suarez Family Practice",
          },
          {
            quote:
              "Our team cared about predictability. Scribient gave us a cleaner documentation process without asking the physicians to change how they run visits.",
            name: "Jordan Lee",
            role: "Practice Administrator",
            organization: "Northside Primary Care",
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
            features: [
              "Ambient capture",
              "Structured draft notes",
              "Practice onboarding support",
            ],
            cta: { label: "Book a demo", href: "/demo" },
          },
          {
            name: "Pro",
            price: "$999",
            cadence: "/month",
            description: "Adds deeper workflow and EHR-oriented integration support for practices scaling beyond the basics.",
            features: [
              "Everything in Core",
              "Integration planning",
              "Priority onboarding",
            ],
            cta: { label: "Book a demo", href: "/demo" },
            badge: "Most requested",
          },
          {
            name: "Concierge",
            price: "$20",
            cadence: "/visit",
            description: "Human-assisted documentation operations layered on top of the Pro workflow.",
            features: [
              "Human scribe support",
              "Operational follow-through",
              "White-glove delivery",
            ],
            cta: { label: "Talk to sales", href: "/demo" },
          },
        ],
      },
      {
        __component: "sections.faq",
        eyebrow: "FAQ",
        heading: "Questions practices raise early in evaluation",
        items: [
          {
            question: "Is Scribient self-serve?",
            answer:
              "No. The launch model is sales-led so implementation fit, workflow requirements, and practice readiness can be assessed before onboarding.",
          },
          {
            question: "Do you support public pricing?",
            answer:
              "Yes. Pricing is visible publicly, but qualification and rollout planning still happen through a demo-led process.",
          },
          {
            question: "Can we start with a specific workflow?",
            answer:
              "Yes. The implementation approach is intentionally scoped around the workflows that matter most for the practice first.",
          },
        ],
      },
      {
        __component: "sections.cta-banner",
        eyebrow: "Ready to evaluate",
        heading: "Get a working view of the platform before you commit your team.",
        body:
          "Book a demo to review fit, rollout expectations, pricing, and the implementation path for your practice.",
        primaryCta: { label: "Book a demo", href: "/demo" },
        secondaryCta: { label: "Read the blog", href: "/blog" },
      },
    ],
    seo: {
      metaTitle: "Ambient Clinical Documentation for Modern Practices",
      metaDescription:
        "Scribient helps practices reduce after-hours documentation with ambient capture, reviewable note generation, and implementation support.",
      canonicalUrl: "https://scribient.ai/",
    },
  },
  {
    id: 2,
    title: "Features",
    slug: "features",
    pageKind: "standard",
    hero: {
      __component: "sections.hero",
      eyebrow: "Platform capabilities",
      heading: "A documentation platform built around review confidence and operational adoption.",
      body:
        "Scribient focuses on the work buyers actually care about: cleaner note production, review throughput, and rollout discipline.",
      primaryCta: { label: "Book a demo", href: "/demo" },
      secondaryCta: { label: "See pricing", href: "/pricing" },
    },
    sections: [
      {
        __component: "sections.feature-grid",
        eyebrow: "Core platform",
        heading: "Product capabilities",
        features: [
          {
            title: "Ambient visit capture",
            description: "Capture encounters without disrupting the patient conversation.",
          },
          {
            title: "Structured note generation",
            description: "Create usable draft notes with a clinical review path.",
          },
          {
            title: "Practice rollout support",
            description: "Support implementation with a defined onboarding motion.",
          },
          {
            title: "Operations-aware workflows",
            description: "Support note completion with visibility into the process around the note.",
          },
        ],
      },
      {
        __component: "sections.timeline",
        eyebrow: "Evaluation path",
        heading: "How launch typically works",
        items: [
          {
            title: "Discovery",
            description: "Align on specialty, workflow, and rollout constraints.",
          },
          {
            title: "Implementation planning",
            description: "Define the review flow, team responsibilities, and operational checkpoints.",
          },
          {
            title: "Pilot launch",
            description: "Launch with a narrow workflow and refine around actual use.",
          },
          {
            title: "Scale",
            description: "Expand once documentation and review quality are stable.",
          },
        ],
      },
      {
        __component: "sections.cta-banner",
        heading: "See the workflow in context.",
        body:
          "The value is clearest when the documentation loop is shown end to end for your practice scenario.",
        primaryCta: { label: "Book a demo", href: "/demo" },
      },
    ],
    seo: {
      metaTitle: "Scribient Features",
      metaDescription:
        "Explore Scribient’s ambient documentation capabilities, implementation approach, and workflow support for modern practices.",
      canonicalUrl: "https://scribient.ai/features",
    },
  },
  {
    id: 3,
    title: "Pricing",
    slug: "pricing",
    pageKind: "standard",
    hero: {
      __component: "sections.hero",
      eyebrow: "Transparent pricing",
      heading: "Pricing is public. Rollout is still qualified.",
      body:
        "Scribient uses a sales-led launch so teams can evaluate workflow fit, implementation requirements, and support expectations before rollout.",
      primaryCta: { label: "Book a demo", href: "/demo" },
    },
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
            features: [
              "Ambient capture",
              "AI draft note generation",
              "Implementation onboarding",
            ],
            cta: { label: "Book a demo", href: "/demo" },
          },
          {
            name: "Pro",
            price: "$999",
            cadence: "/month",
            description: "Adds deeper implementation and integration support.",
            features: [
              "Everything in Core",
              "Advanced workflow planning",
              "Priority support",
            ],
            cta: { label: "Book a demo", href: "/demo" },
            badge: "Recommended",
          },
          {
            name: "Concierge",
            price: "$20",
            cadence: "/visit",
            description: "Human-assisted documentation operations on top of Pro.",
            features: [
              "Pro base required",
              "Scribe-backed support",
              "Operational completion workflow",
            ],
            cta: { label: "Talk to sales", href: "/demo" },
          },
        ],
      },
      {
        __component: "sections.faq",
        heading: "Commercial FAQ",
        items: [
          {
            question: "Why not self-serve checkout?",
            answer:
              "Implementation fit and clinical workflow requirements matter enough that early qualification is intentionally handled through sales and onboarding.",
          },
          {
            question: "Is Concierge a standalone plan?",
            answer:
              "No. Concierge is modeled as a per-visit service layer on top of the Pro package.",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "Scribient Pricing",
      metaDescription:
        "Review Scribient pricing for Core, Pro, and Concierge plans, with demo-led evaluation and implementation planning.",
      canonicalUrl: "https://scribient.ai/pricing",
    },
  },
  {
    id: 4,
    title: "About",
    slug: "about",
    pageKind: "standard",
    hero: {
      __component: "sections.hero",
      eyebrow: "About Scribient",
      heading: "Built for practices that need cleaner documentation operations, not just faster dictation.",
      body:
        "Scribient is positioned around operational credibility: helping practices reduce documentation burden with workflows that can actually be adopted.",
      primaryCta: { label: "Book a demo", href: "/demo" },
    },
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Our position",
        content:
          "Scribient was shaped around a simple premise: documentation tools fail when they optimize for novelty instead of adoption.\n\nPractices need workflows that physicians will use, administrators can trust, and support teams can operate consistently.",
      },
      {
        __component: "sections.timeline",
        heading: "What we focus on",
        items: [
          {
            title: "Reduce charting drag",
            description: "Support faster note completion without reducing review quality.",
          },
          {
            title: "Improve operational clarity",
            description: "Make documentation status and handoff easier for teams to manage.",
          },
          {
            title: "Launch with discipline",
            description: "Roll out by workflow, not by abstract feature checklist.",
          },
        ],
      },
    ],
    seo: {
      metaTitle: "About Scribient",
      metaDescription:
        "Learn how Scribient approaches ambient documentation, implementation support, and operationally credible practice rollout.",
      canonicalUrl: "https://scribient.ai/about",
    },
  },
  {
    id: 5,
    title: "Book a Demo",
    slug: "demo",
    pageKind: "standard",
    hero: {
      __component: "sections.hero",
      eyebrow: "Demo request",
      heading: "Schedule a working session, not a generic product tour.",
      body:
        "Use the form below to share your practice profile, workflow needs, and EHR context. We will tailor the demo around that reality.",
      primaryCta: { label: "Submit your request", href: "#lead-form" },
      secondaryCta: { label: "Read pricing", href: "/pricing" },
    },
    sections: [
      {
        __component: "sections.lead-form",
        eyebrow: "Tell us about your practice",
        heading: "Request a Scribient demo",
        body:
          "We use this information to tailor the discussion around specialty, workflow, staffing, and implementation scope.",
        submitLabel: "Request demo",
      },
      {
        __component: "sections.rich-text",
        heading: "What to expect",
        content:
          "- A workflow-oriented product walkthrough\n- Commercial fit discussion\n- Implementation and onboarding conversation",
      },
    ],
    seo: {
      metaTitle: "Book a Scribient Demo",
      metaDescription:
        "Request a Scribient demo to review clinical documentation workflows, implementation fit, and pricing for your practice.",
      canonicalUrl: "https://scribient.ai/demo",
    },
  },
  {
    id: 6,
    title: "Privacy Policy",
    slug: "legal/privacy",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Privacy Policy",
        content:
          "## Overview\nThis website collects business contact information submitted through demo and contact forms.\n\n## What we collect\n- Name\n- Work email\n- Phone number\n- Practice information\n\n## Use of information\nWe use submitted information to respond to inquiries, schedule demos, and evaluate commercial fit.",
      },
    ],
    seo: {
      metaTitle: "Privacy Policy",
      metaDescription: "Read the Scribient privacy policy for website visitors and demo inquiries.",
      canonicalUrl: "https://scribient.ai/legal/privacy",
    },
  },
  {
    id: 7,
    title: "Terms of Service",
    slug: "legal/terms",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Terms of Service",
        content:
          "## Website terms\nBy using this website, you agree to use it for lawful business evaluation purposes.\n\n## No public purchase commitment\nPublic pricing does not create a binding commercial agreement until both parties complete the sales and onboarding process.",
      },
    ],
    seo: {
      metaTitle: "Terms of Service",
      metaDescription: "Read the Scribient terms of service for website usage and commercial evaluation.",
      canonicalUrl: "https://scribient.ai/legal/terms",
    },
  },
  {
    id: 8,
    title: "HIPAA",
    slug: "legal/hipaa",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "HIPAA Overview",
        content:
          "Scribient is positioned for HIPAA-conscious workflows and implementation. Specific compliance obligations, deployment configuration, and contractual terms are addressed during sales and onboarding.",
      },
    ],
    seo: {
      metaTitle: "HIPAA Overview",
      metaDescription: "Read Scribient’s HIPAA overview for commercial evaluation and implementation planning.",
      canonicalUrl: "https://scribient.ai/legal/hipaa",
    },
  },
  {
    id: 9,
    title: "Business Associate Agreement",
    slug: "legal/baa",
    pageKind: "legal",
    sections: [
      {
        __component: "sections.rich-text",
        heading: "Business Associate Agreement",
        content:
          "Business Associate Agreement terms are handled during the commercial and implementation process. Contact Scribient to discuss your organization’s contracting requirements.",
      },
    ],
    seo: {
      metaTitle: "Business Associate Agreement",
      metaDescription: "Learn how Scribient handles Business Associate Agreement discussions during implementation.",
      canonicalUrl: "https://scribient.ai/legal/baa",
    },
  },
  {
    id: 10,
    title: "Ambient Clinical Documentation",
    slug: "ambient-clinical-documentation",
    pageKind: "seo-landing",
    hero: {
      __component: "sections.hero",
      eyebrow: "SEO landing page",
      heading: "Ambient clinical documentation software for practices that need operational adoption.",
      body:
        "Scribient helps practices evaluate ambient documentation in the context that matters: chart completion, clinician review, and implementation discipline.",
      primaryCta: { label: "Book a demo", href: "/demo" },
    },
    sections: [
      {
        __component: "sections.rich-text",
        content:
          "Ambient clinical documentation only creates value when practices can operationalize it. Scribient is designed to support that with a review-oriented workflow and sales-led onboarding.",
      },
    ],
    seo: {
      metaTitle: "Ambient Clinical Documentation Software",
      metaDescription:
        "Evaluate ambient clinical documentation software with a workflow-focused platform built for practice rollout and review confidence.",
      canonicalUrl: "https://scribient.ai/ambient-clinical-documentation",
    },
  },
  {
    id: 11,
    title: "AI Medical Scribe",
    slug: "ai-medical-scribe",
    pageKind: "seo-landing",
    hero: {
      __component: "sections.hero",
      eyebrow: "SEO landing page",
      heading: "AI medical scribe workflows built for review confidence.",
      body:
        "Scribient frames AI medical scribing as a documentation operations problem, not just a transcript generation problem.",
      primaryCta: { label: "Book a demo", href: "/demo" },
    },
    sections: [
      {
        __component: "sections.rich-text",
        content:
          "Practices evaluating AI medical scribe software usually care about adoption, review speed, and commercial fit. Scribient is built around those questions.",
      },
    ],
    seo: {
      metaTitle: "AI Medical Scribe Platform",
      metaDescription:
        "Explore an AI medical scribe platform designed around clinical review, rollout planning, and operational adoption.",
      canonicalUrl: "https://scribient.ai/ai-medical-scribe",
    },
  },
  {
    id: 12,
    title: "EHR Documentation Automation",
    slug: "ehr-documentation-automation",
    pageKind: "seo-landing",
    hero: {
      __component: "sections.hero",
      eyebrow: "SEO landing page",
      heading: "EHR documentation automation with a practice-first rollout model.",
      body:
        "See how Scribient approaches documentation automation around operational readiness instead of generic automation claims.",
      primaryCta: { label: "Book a demo", href: "/demo" },
    },
    sections: [
      {
        __component: "sections.rich-text",
        content:
          "Documentation automation only matters when the output can be trusted, reviewed, and finalized inside real clinical workflows. That is the lens Scribient uses.",
      },
    ],
    seo: {
      metaTitle: "EHR Documentation Automation",
      metaDescription:
        "Evaluate EHR documentation automation with a platform designed for implementation fit and note review confidence.",
      canonicalUrl: "https://scribient.ai/ehr-documentation-automation",
    },
  },
];

export const fallbackBlogPosts: BlogPostViewModel[] = [
  {
    id: 1,
    title: "What Practices Actually Need From Ambient Documentation",
    slug: "what-practices-actually-need-from-ambient-documentation",
    excerpt:
      "Ambient tools are judged less by transcript novelty and more by whether physicians can close charts faster with confidence.",
    content:
      "## Ambient documentation has an adoption problem\nMany products are evaluated on demo polish rather than operational fit.\n\n## Buyers care about the note loop\nIf the draft note still requires a messy cleanup process, the practice has not really solved the underlying problem.\n\n## Implementation matters\nThe strongest deployments start with a narrow workflow, clear review ownership, and disciplined rollout.",
    tags: ["ambient documentation", "practice operations"],
    featured: true,
    publishedAt: "2026-02-14T12:00:00.000Z",
    author: {
      name: "Scribient Team",
      slug: "scribient-team",
      role: "Editorial",
    },
    category: {
      name: "Practice Operations",
      slug: "practice-operations",
    },
    seo: {
      metaTitle: "What Practices Need From Ambient Documentation",
      metaDescription:
        "A practical look at what makes ambient documentation valuable in real practice operations.",
      canonicalUrl:
        "https://scribient.ai/blog/what-practices-actually-need-from-ambient-documentation",
    },
  },
  {
    id: 2,
    title: "How to Evaluate an AI Medical Scribe Platform",
    slug: "how-to-evaluate-an-ai-medical-scribe-platform",
    excerpt:
      "The strongest AI scribe evaluations focus on review confidence, implementation fit, and physician behavior change.",
    content:
      "## Start with workflow fit\nEvaluation should begin with the workflow, not the feature matrix.\n\n## Measure review burden\nA platform that generates drafts but increases cleanup time will not improve practice operations.\n\n## Commercial fit matters\nPricing, onboarding scope, and staffing expectations should be explicit before launch.",
    tags: ["ai medical scribe", "evaluation"],
    featured: true,
    publishedAt: "2026-02-21T12:00:00.000Z",
    author: {
      name: "Scribient Team",
      slug: "scribient-team",
      role: "Editorial",
    },
    category: {
      name: "Evaluation",
      slug: "evaluation",
    },
    seo: {
      metaTitle: "How to Evaluate an AI Medical Scribe Platform",
      metaDescription:
        "Use this framework to evaluate AI medical scribe platforms around workflow fit, review confidence, and rollout discipline.",
      canonicalUrl:
        "https://scribient.ai/blog/how-to-evaluate-an-ai-medical-scribe-platform",
    },
  },
  {
    id: 3,
    title: "Why Sales-Led Onboarding Still Makes Sense in Healthcare AI",
    slug: "why-sales-led-onboarding-still-makes-sense-in-healthcare-ai",
    excerpt:
      "In healthcare workflows, qualification and onboarding discipline are often part of the product, not just the go-to-market motion.",
    content:
      "## Self-serve is not always the right default\nWhen implementation shape materially affects outcomes, qualification is product strategy.\n\n## Workflow risk is real\nHealthcare teams need clarity around ownership, review steps, and expectations.\n\n## Onboarding is part of value delivery\nA disciplined launch often produces better retention than a fast but misaligned self-serve start.",
    tags: ["healthcare ai", "onboarding"],
    featured: false,
    publishedAt: "2026-02-28T12:00:00.000Z",
    author: {
      name: "Scribient Team",
      slug: "scribient-team",
      role: "Editorial",
    },
    category: {
      name: "Strategy",
      slug: "strategy",
    },
    seo: {
      metaTitle: "Why Sales-Led Onboarding Still Makes Sense in Healthcare AI",
      metaDescription:
        "A practical view on why sales-led onboarding remains a rational launch model in healthcare AI workflows.",
      canonicalUrl:
        "https://scribient.ai/blog/why-sales-led-onboarding-still-makes-sense-in-healthcare-ai",
    },
  },
];
