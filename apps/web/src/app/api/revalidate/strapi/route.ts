import { revalidatePath, revalidateTag } from "next/cache";

interface StrapiWebhookPayload {
  event?: string;
  model?: string;
  uid?: string;
  entry?: {
    slug?: string;
  };
  secret?: string;
}

function normalizePath(model: string, slug?: string) {
  if (model === "site-setting") {
    return ["/"];
  }

  if (model === "blog-post" && slug) {
    return ["/blog", `/blog/${slug}`];
  }

  if (model === "page" && slug) {
    return [slug === "home" ? "/" : `/${slug}`];
  }

  return [];
}

function normalizeTags(model: string, slug?: string) {
  switch (model) {
    case "site-setting":
      return ["site-settings"];
    case "blog-post":
      return ["blog-posts", ...(slug ? [`blog-post:${slug}`] : [])];
    case "page":
      return ["pages", ...(slug ? [`page:${slug}`] : [])];
    default:
      return [];
  }
}

export async function POST(request: Request) {
  const payload = (await request.json()) as StrapiWebhookPayload;
  const headerSecret = request.headers.get("x-revalidate-secret");
  const secret = headerSecret || payload.secret;

  if (!process.env.STRAPI_WEBHOOK_SECRET || secret !== process.env.STRAPI_WEBHOOK_SECRET) {
    return Response.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const model = payload.model || payload.uid?.split(".").pop();
  if (!model) {
    return Response.json({ ok: false, message: "Missing model" }, { status: 400 });
  }

  const slug = payload.entry?.slug;
  const tags = normalizeTags(model, slug);
  const paths = normalizePath(model, slug);

  tags.forEach((tag) => revalidateTag(tag));
  paths.forEach((path) => revalidatePath(path));

  if (model === "page" || model === "blog-post") {
    revalidatePath("/sitemap.xml");
    revalidatePath("/rss.xml");
  }

  return Response.json({
    ok: true,
    event: payload.event || "unknown",
    model,
    tags,
    paths,
  });
}
