import { Request, Response } from "express";
import * as mailService from "../services/mailService";

export const mailToTeam = async (req: Request, res: Response) => {
  try {
    const { fullName, phone, email, type, notes } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL || "hatshitpathak.hp@gmail.com",
      subject: `New Lead: ${fullName || "Unknown"} (${type || "N/A"})`,
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${fullName || "-"}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Email:</b> ${email || "-"}</p>
        <p><b>Type:</b> ${type || "-"}</p>
        ${notes ? `<p><b>Notes:</b> ${notes}</p>` : ""}
      `,
    };

    const result = await mailService.sendMail(mailOptions);
    res.status(201).json({ ok: true, messageId: result.messageId });
  } catch (err: any) {
    console.error("Mail sending failed:", err);
    res.status(500).json({ ok: false, message: err.message });
  }
};
