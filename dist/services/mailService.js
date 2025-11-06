"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});
const sendMail = async (options) => {
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
    }
    catch (error) {
        console.error("Mail sending failed:", error);
        throw new Error("Failed to send email: " + error.message);
    }
};
exports.sendMail = sendMail;
