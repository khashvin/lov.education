import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

type SendEmailParams = {
  name: string;
  from: string;
  subject: string;
  text: string;
}

export const sendEmail = createServerFn({
  method: "POST",
})
.validator((data: SendEmailParams) => data)
.handler(async (ctx) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "465"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const result = await transporter.sendMail({
    from: `"${ctx.data.name}" <${ctx.data.from}>`, // sender address
    to: process.env.EMAIL_TO, // list of receivers
    subject: ctx.data.subject, // Subject line
    text: ctx.data.text, // plain text body
  })
  
  return result;
});