import type {
  BlogPostViewModel,
  LeadSubmissionInput,
  PageViewModel,
  SiteSettings,
} from "@scribient/shared";
import { fallbackBlogPosts, fallbackPages, fallbackSiteSettings } from "./fallback-content";
import { mapBlogPost, mapPage, mapSiteSettings } from "./mappers";

const CMS_REVALIDATE_SECONDS = 300;

function getBaseUrl() {
  return process.env.STRAPI_URL?.replace(/\/$/, "");
}

function getHeaders(preview = false, write = false) {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  const token = write
    ? process.env.STRAPI_WRITE_TOKEN
    : preview
      ? process.env.STRAPI_PREVIEW_TOKEN
      : process.env.STRAPI_PUBLIC_TOKEN;

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
}

async function fetchFromStrapi<T>(
  path: string,
  options?: {
    preview?: boolean;
    tags?: string[];
    method?: "GET" | "POST";
    body?: unknown;
    write?: boolean;
  },
): Promise<T | null> {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    return null;
  }

  const url = new URL(`${baseUrl}${path}`);

  try {
    const isGet = !options?.method || options.method === "GET";
    const response = await fetch(url, {
      method: options?.method || "GET",
      headers: getHeaders(options?.preview, options?.write),
      body: options?.body ? JSON.stringify(options.body) : undefined,
      ...(isGet
        ? {
            next: {
              revalidate: CMS_REVALIDATE_SECONDS,
              tags: options?.tags,
            },
          }
        : {}),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function toPageSlug(routeSlug?: string) {
  return !routeSlug || routeSlug === "/" ? "home" : routeSlug.replace(/^\/+/, "");
}

export async function getSiteSettings(preview = false): Promise<SiteSettings> {
  const response = await fetchFromStrapi<{ data?: unknown }>(
    `/api/site-setting?populate[defaultSeo][populate]=*&populate[navigation]=*&populate[footerColumns][populate][links]=*&populate[socialLinks]=*&populate[announcementBar]=*&populate[businessContact]=*&status=${preview ? "draft" : "published"}`,
    {
      preview,
      tags: ["site-settings"],
    },
  );

  return response?.data ? mapSiteSettings(response.data) : fallbackSiteSettings;
}

export async function getAllPages(preview = false): Promise<PageViewModel[]> {
  const response = await fetchFromStrapi<{ data?: unknown[] }>(
    `/api/pages?populate[hero][populate]=*&populate[sections][populate]=*&populate[seo][populate]=*&sort[0]=slug:asc&status=${preview ? "draft" : "published"}`,
    {
      preview,
      tags: ["pages"],
    },
  );

  if (!response?.data?.length) {
    return fallbackPages;
  }

  return response.data.map((page) => mapPage(page));
}

export async function getPageBySlug(
  slug: string,
  preview = false,
): Promise<PageViewModel | null> {
  const normalized = toPageSlug(slug);
  const response = await fetchFromStrapi<{ data?: unknown[] }>(
    `/api/pages?filters[slug][$eq]=${encodeURIComponent(
      normalized,
    )}&populate[hero][populate]=*&populate[sections][populate]=*&populate[seo][populate]=*&status=${preview ? "draft" : "published"}`,
    {
      preview,
      tags: ["pages", `page:${normalized}`],
    },
  );

  const page = response?.data?.[0];
  if (page) {
    return mapPage(page);
  }

  return fallbackPages.find((item) => item.slug === normalized) || null;
}

export async function getPageSlugs(preview = false) {
  const pages = await getAllPages(preview);
  return pages.map((page) => page.slug);
}

export async function getBlogPosts(preview = false): Promise<BlogPostViewModel[]> {
  const response = await fetchFromStrapi<{ data?: unknown[] }>(
    `/api/blog-posts?populate[coverImage][populate]=*&populate[author][populate]=*&populate[category][populate]=*&populate[seo][populate]=*&sort[0]=publishedAt:desc&status=${preview ? "draft" : "published"}`,
    {
      preview,
      tags: ["blog-posts"],
    },
  );

  if (!response?.data?.length) {
    return fallbackBlogPosts;
  }

  return response.data.map((post) => mapBlogPost(post));
}

export async function getBlogPostBySlug(
  slug: string,
  preview = false,
): Promise<BlogPostViewModel | null> {
  const response = await fetchFromStrapi<{ data?: unknown[] }>(
    `/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(
      slug,
    )}&populate[coverImage][populate]=*&populate[author][populate]=*&populate[category][populate]=*&populate[seo][populate]=*&status=${preview ? "draft" : "published"}`,
    {
      preview,
      tags: ["blog-posts", `blog-post:${slug}`],
    },
  );

  const post = response?.data?.[0];
  if (post) {
    return mapBlogPost(post);
  }

  return fallbackBlogPosts.find((item) => item.slug === slug) || null;
}

export async function getBlogSlugs(preview = false) {
  const posts = await getBlogPosts(preview);
  return posts.map((post) => post.slug);
}

export async function getFeaturedBlogPosts(limit = 3, preview = false) {
  const posts = await getBlogPosts(preview);
  return posts.filter((post) => post.featured).slice(0, limit);
}

export async function createLeadSubmission(payload: LeadSubmissionInput) {
  const response = await fetchFromStrapi<{ data?: { id?: number | string } }>(
    "/api/lead-submissions",
    {
      method: "POST",
      write: true,
      body: {
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          phone: payload.phone,
          practiceName: payload.practiceName,
          practiceType: payload.practiceType,
          currentEhr: payload.currentEhr,
          message: payload.message,
          sourcePage: payload.sourcePage,
          utm: payload.utm,
          referrer: payload.referrer,
          submittedAt: new Date().toISOString(),
          status: "new",
        },
      },
    },
  );

  return response?.data;
}
