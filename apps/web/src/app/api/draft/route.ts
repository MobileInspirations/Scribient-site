import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  const slug = url.searchParams.get("slug") || "/";
  const type = url.searchParams.get("type") || "page";

  if (!process.env.PREVIEW_SECRET || secret !== process.env.PREVIEW_SECRET) {
    return Response.json({ ok: false, message: "Invalid preview secret" }, { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  if (type === "post") {
    return NextResponse.redirect(new URL(`/blog/${slug.replace(/^\/+/, "")}`, request.url));
  }

  return NextResponse.redirect(
    new URL(slug === "home" ? "/" : `/${slug.replace(/^\/+/, "")}`, request.url),
  );
}
