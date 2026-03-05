export interface LeadSubmissionInput {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  practiceName: string;
  practiceType: string;
  currentEhr?: string;
  message?: string;
  sourcePage: string;
  utm?: Record<string, string | undefined>;
  referrer?: string;
  turnstileToken: string;
}

export interface LeadSubmissionResult {
  ok: boolean;
  message: string;
  leadId?: string | number;
}
