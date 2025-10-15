import * as z from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export const InquiryFormSchema = z.object({
  name: z.string().min(1),
  phone: z.string(),
  email: z.email(),
  university: z.string().min(1),
  fieldOfStudy: z.string().min(1),
  additionalInfo: z.string(),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
export type InquiryFormType = z.infer<typeof InquiryFormSchema>;
