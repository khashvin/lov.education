import { type } from 'arktype';

export const ContactFormSchema = type({
  name: 'string > 0',
  email: 'string.email',
  phone: 'string',
  subject: 'string > 0',
  message: 'string > 0',
});

export const InquiryFormSchema = type({
  name: 'string > 0',
  phone: 'string',
  email: 'string.email',
  university: 'string > 0',
  fieldOfStudy: 'string > 0',
  additionalInfo: 'string',
});

export type ContactFormType = typeof ContactFormSchema.infer;
export type InquiryFormType = typeof InquiryFormSchema.infer;
