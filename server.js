import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // tera Gmail
    pass: process.env.EMAIL_PASS, // Gmail App Password (not actual password)
  },
});

// ─── POST /api/contact ────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ success: false, error: "Enter a valid 10-digit phone number." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Enter a valid email address." });
  }

  try {
    // Mail to YOU (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #4f46e5; margin-bottom: 16px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 12px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    // Auto-reply to CLIENT
    await transporter.sendMail({
      from: `"Tanveer Singh" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! ✅`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #4f46e5;">Hey ${name}, got your message!</h2>
          <p>Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
          <p style="margin-top: 24px; color: #6b7280; font-size: 13px;">— Tanveer Singh | Frontend Developer</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ success: false, error: "Failed to send message. Try again later." });
  }
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});