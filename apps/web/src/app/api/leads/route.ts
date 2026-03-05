import { Resend } from "resend";
import type { LeadSubmissionInput, LeadSubmissionResult } from "@scribient/shared";
import { createLeadSubmission } from "@/lib/cms/strapi-client";
import { leadSubmissionSchema } from "@/lib/validators";

async function verifyTurnstile(token: string) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return token === "dev-token";
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });

  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

async function sendSalesNotification(payload: LeadSubmissionInput) {
  if (!process.env.RESEND_API_KEY || !process.env.SALES_NOTIFICATION_TO) {
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: process.env.DEFAULT_FROM_EMAIL || "Scribient <noreply@scribient.ai>",
    to: process.env.SALES_NOTIFICATION_TO.split(",").map((item) => item.trim()),
    subject: `New Scribient demo request: ${payload.practiceName}`,
    text: [
      `${payload.firstName} ${payload.lastName}`,
      payload.email,
      payload.phone || "No phone provided",
      payload.practiceName,
      payload.practiceType,
      payload.currentEhr || "No EHR specified",
      payload.message || "No message submitted",
      `Source page: ${payload.sourcePage}`,
    ].join("\n"),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadSubmissionSchema.safeParse(body);

  if (!parsed.success) {
    const result: LeadSubmissionResult = {
      ok: false,
      message: "Please complete the required fields and try again.",
    };

    return Response.json(result, { status: 400 });
  }

  const verified = await verifyTurnstile(parsed.data.turnstileToken);
  if (!verified) {
    const result: LeadSubmissionResult = {
      ok: false,
      message: "Verification failed. Please try again.",
    };

    return Response.json(result, { status: 400 });
  }

  const lead = await createLeadSubmission(parsed.data);
  if (!lead?.id) {
    const result: LeadSubmissionResult = {
      ok: false,
      message: "Lead capture is not configured correctly yet.",
    };

    return Response.json(result, { status: 502 });
  }

  await sendSalesNotification(parsed.data).catch(() => undefined);

  const result: LeadSubmissionResult = {
    ok: true,
    message: "Your demo request has been received. A member of the team will reach out shortly.",
    leadId: lead.id,
  };

  return Response.json(result);
}
