import { createServerFn } from '@tanstack/react-start';

import { ContactFormSchema, InquiryFormSchema } from '@/lib/form-schema';
import { sendEmail } from './send-email';

export const handleContactForm = createServerFn({
  method: 'POST',
})
  .inputValidator(ContactFormSchema)
  .handler(async ({ data }) => {
    const emailText = `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Subject: ${data.subject}
      Message: ${data.message}
    `;
    try {
      await sendEmail({
        data: {
          name: data.name,
          from: data.email,
          subject: `Contact Form Submission from ${data.name}`,
          text: emailText,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to send email');
    }
  });

export const handleInquiryForm = createServerFn({
  method: 'POST',
})
  .inputValidator(InquiryFormSchema)
  .handler(async ({ data }) => {
    const emailText = `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      University: ${data.university}
      Field of Study: ${data.fieldOfStudy}
      Additional Info: ${data.additionalInfo}
    `;
    try {
      await sendEmail({
        data: {
          name: data.name,
          from: data.email,
          subject: `Inquiry Form Submission from ${data.name}`,
          text: emailText,
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Failed to send email');
    }
  });
