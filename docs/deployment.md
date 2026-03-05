# Deployment Notes

## Web app

- Deploy `apps/web` to Vercel
- Root domain: `scribient.ai`
- Project root: `apps/web`
- Build command: `pnpm --filter @scribient/web build`
- Required envs:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_APP_URL`
  - `STRAPI_URL`
  - `STRAPI_PUBLIC_TOKEN`
  - `STRAPI_PREVIEW_TOKEN`
  - `STRAPI_WRITE_TOKEN`
  - `STRAPI_WEBHOOK_SECRET`
  - `PREVIEW_SECRET`
  - `TURNSTILE_SECRET_KEY`
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  - `RESEND_API_KEY`
  - `SALES_NOTIFICATION_TO`

## CMS

- Deploy `apps/cms` to Railway
- Root path: `apps/cms`
- Provision Postgres and set `DATABASE_URL`
- Configure S3 bucket envs if using remote media storage
- After boot:
  - create API tokens for read, preview, and write access
  - configure preview URLs
  - configure the webhook to `scribient.ai/api/revalidate/strapi`
  - run the seed script once

## Product app

- Keep the existing Docscribe deployment separate
- Serve it from `app.scribient.ai`
- Point marketing CTAs and `/login` redirect to that host
