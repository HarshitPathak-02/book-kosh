"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailToTeam = void 0;
const mailService = __importStar(require("../services/mailService"));
const mailToTeam = async (req, res) => {
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
    }
    catch (err) {
        console.error("Mail sending failed:", err);
        res.status(500).json({ ok: false, message: err.message });
    }
};
exports.mailToTeam = mailToTeam;
