import { z } from "zod";

export const leadSubmissionSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  practiceName: z.string().trim().min(1).max(160),
  practiceType: z.string().trim().min(1).max(80),
  currentEhr: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  sourcePage: z.string().trim().min(1).max(200),
  referrer: z.string().trim().max(500).optional().or(z.literal("")),
  turnstileToken: z.string().trim().min(1),
  utm: z
    .record(z.string(), z.string().max(200).optional())
    .optional(),
});

export type LeadSubmissionPayload = z.infer<typeof leadSubmissionSchema>;
