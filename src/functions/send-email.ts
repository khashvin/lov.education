import { createServerFn } from '@tanstack/react-start';
import { Resend } from 'resend';

interface SendEmailParams {
  name: string;
  from: string;
  subject: string;
  text: string;
}

export const sendEmail = createServerFn({
  method: 'POST',
})
  .inputValidator((data: SendEmailParams) => data)
  .handler(async (ctx) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `lov.education System <${process.env.EMAIL_FROM}>`,
      replyTo: `${ctx.data.name} <${ctx.data.from}>`,
      to: [`${process.env.EMAIL_TO}`],
      subject: ctx.data.subject,
      text: ctx.data.text,
    });
  });
