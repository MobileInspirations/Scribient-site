# Scribient CMS

Strapi application powering the public Scribient marketing site.

## Responsibilities

- Site settings
- CMS-managed landing and legal pages
- Blog posts, authors, and categories
- Lead submission storage
- Media management via S3

## Setup

1. Copy `.env.example` to `.env`
2. Run `pnpm install` from the repo root
3. Start the app with `pnpm dev:cms`
4. Create an API token for the web app and set `STRAPI_WRITE_TOKEN` in `apps/web`
5. Configure a Strapi webhook to `WEBHOOK_REVALIDATE_URL` with header `x-revalidate-secret: WEBHOOK_REVALIDATE_SECRET`
6. Run `pnpm --filter @scribient/cms seed` after the CMS is available

## Editorial roles

- `Super Admin`: schema, media, environment, API token, and webhook management
- `Content Admin`: page, blog, media, and lead publishing
- `Editor`: draft creation and preview only

## Preview

Configure preview URLs in Strapi to hit:

- Pages: `${STRAPI_PREVIEW_URL}?secret=${STRAPI_PREVIEW_SECRET}&type=page&slug={entry.slug}`
- Blog posts: `${STRAPI_PREVIEW_URL}?secret=${STRAPI_PREVIEW_SECRET}&type=post&slug={entry.slug}`
