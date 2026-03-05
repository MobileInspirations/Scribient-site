import { draftMode } from "next/headers";

export async function POST() {
  const draft = await draftMode();
  draft.disable();

  return Response.json({ ok: true });
}
