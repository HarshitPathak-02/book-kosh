const nodemailer = require("nodemailer");

// Basic SMTP transporter (username/password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harshithogya.hp@gmail.com",
    pass: "rtei wskq uldz rsnu",
  },
});

module.exports.mailToTeam = async (req, res) => {
  const { fullName, phone, email, type, notes } = req.body;
  console.log("mail to team called: ", req.body);
  const mailOptions = {
    from: email, // e.g., "Book App <no-reply@yourdomain.com>"
    to: "hatshitpathak.hp@gmail.com", // team inbox
    subject: `New Lead: ${fullName || "Unknown"} (${type || "N/A"})`,
    text: `Name: ${fullName || "-"}
Phone: ${phone || "-"}
Email: ${email || "-"}
Type: ${type || "-"}
Notes: ${notes || "-"}`,
    html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${fullName || "-"}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Email:</b> ${email || "-"}</p>
        <p><b>Type:</b> ${type || "-"}</p>
        ${notes ? `<p><b>Notes:</b> ${notes}</p>` : ""}
      `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Eamil sent to admin successfully");
    res.status(201).json({ ok: true, id: info.messageId });
  } catch (e) {
    res
      .status(500)
      .json({ ok: false, error: e?.message || "Failed to send email" });
  }
};
