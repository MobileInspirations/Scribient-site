# Scribient Platform

 onorepo for the public Scribient marketing site and the Strapi CMS that powers it.

## Workspace

- `apps/web`: Next.js marketing site for `scribient.ai`
- `apps/cms`: Strapi CMS for page, blog, media, and lead content
- `packages/shared`: shared TypeScript contracts used by the apps

## Primary flows

- CMS-managed landing pages, pricing, legal content, and SEO landing pages
- CMS-managed blog with draft preview and publish workflow
- Sales-led demo/contact funnel with lead persistence and email notifications
- Webhook-driven cache revalidation from Strapi to Next.js

## Local setup

1. Install dependencies with `pnpm install`
2. Copy `apps/web/.env.example` to `apps/web/.env.local`
3. Copy `apps/cms/.env.example` to `apps/cms/.env`
4. Start the CMS with `pnpm dev:cms`
5. Start the web app with `pnpm dev:web`

## Notes

- The product application remains outside this repo and is expected to live at `app.scribient.ai`.
- This workspace was authored in an environment where Node.js execution was unavailable, so dependency installation and runtime validation need to be completed on a machine with a working Node toolchain.
