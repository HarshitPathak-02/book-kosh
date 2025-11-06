import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

interface MailOptions {
  from?: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendMail = async (options: MailOptions) => {
  if (!options.to || !options.subject)
    throw new Error("Missing 'to' or 'subject' in mail options");

  try {
    const info = await transporter.sendMail({
      from: options.from || `"BookKosh" <${process.env.MAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      text: options.text || "",
      html: options.html || "",
    });

    console.log("Mail sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error("Mail sending failed:", error);
    throw new Error("Failed to send email: " + error.message);
  }
};
