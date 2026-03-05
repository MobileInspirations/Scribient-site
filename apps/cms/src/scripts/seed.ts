import {
  authorSeeds,
  blogSeeds,
  categorySeeds,
  pageSeeds,
  siteSettingsSeed,
} from "../data/seed-content";

const baseUrl = (process.env.STRAPI_SITE_URL || "http://localhost:1337").replace(/\/$/, "");
const token = process.env.STRAPI_SEED_TOKEN;

if (!token) {
  throw new Error("STRAPI_SEED_TOKEN is required to seed the CMS.");
}

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function request(path: string, init?: RequestInit) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      ...headers,
      ...(init?.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed (${response.status}): ${await response.text()}`);
  }

  return (await response.json()) as any;
}

async function upsertCollectionItem(
  endpoint: string,
  uniqueField: string,
  uniqueValue: string,
  data: Record<string, unknown>,
) {
  const query = await request(
    `/api/${endpoint}?filters[${uniqueField}][$eq]=${encodeURIComponent(uniqueValue)}`,
  );

  const existing = query?.data?.[0];
  if (existing?.id) {
    return request(`/api/${endpoint}/${existing.id}`, {
      method: "PUT",
      body: JSON.stringify({ data }),
    });
  }

  return request(`/api/${endpoint}`, {
    method: "POST",
    body: JSON.stringify({ data }),
  });
}

async function upsertSingleType(endpoint: string, data: Record<string, unknown>) {
  return request(`/api/${endpoint}`, {
    method: "PUT",
    body: JSON.stringify({ data }),
  });
}

async function seedCollections() {
  for (const category of categorySeeds) {
    await upsertCollectionItem("categories", "slug", category.slug, category);
  }

  for (const author of authorSeeds) {
    await upsertCollectionItem("authors", "slug", author.slug, author);
  }

  const categoryMap = new Map<string, number>();
  const authorMap = new Map<string, number>();

  const categoryResponse = await request("/api/categories");
  for (const item of categoryResponse.data || []) {
    categoryMap.set(item.slug, item.id);
  }

  const authorResponse = await request("/api/authors");
  for (const item of authorResponse.data || []) {
    authorMap.set(item.slug, item.id);
  }

  for (const page of pageSeeds) {
    await upsertCollectionItem("pages", "slug", page.slug, page);
  }

  for (const post of blogSeeds) {
    await upsertCollectionItem("blog-posts", "slug", post.slug, {
      ...post,
      category: categoryMap.get(post.categorySlug),
      author: authorMap.get(post.authorSlug),
    });
  }

  await upsertSingleType("site-setting", siteSettingsSeed);
}

seedCollections()
  .then(() => {
    console.log("Scribient CMS seed complete.");
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
