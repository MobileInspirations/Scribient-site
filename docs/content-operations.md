# Content Operations

## Page model

- `home`: homepage content rendered from `apps/web/src/app/(site)/[[...slug]]/page.tsx`
- `standard`: top-level marketing pages like features, pricing, about, and demo
- `legal`: legal content pages under `/legal/*`
- `seo-landing`: keyword-targeted landing pages rendered without code changes

## Editorial workflow

- Draft content in Strapi
- Use the configured preview URL to review in Next.js Draft Mode
- Publish from Strapi
- Strapi webhook hits `/api/revalidate/strapi`
- Next.js revalidates the affected route tags and public paths

## Launch seed content

- 9 core public pages
- 3 SEO landing pages
- 3 blog posts
- Site settings, nav, footer, and sales notification defaults

## Lead handling

- Demo submissions post to `apps/web/src/app/api/leads/route.ts`
- The web app verifies Turnstile, stores the submission in Strapi, and sends a Resend notification
- Lead lifecycle is tracked in the `lead-submission` collection
