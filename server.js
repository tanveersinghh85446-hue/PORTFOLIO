import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

// app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res
      .status(400)
      .json({ success: false, error: "Enter a valid 10-digit phone number." });
  }

  try {
    // Notification to you
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_USER,
      subject: `📩 New Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 12px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    // Auto-reply to client
    await resend.emails.send({
      from: "contact@tanveersingh.dev",
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

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    return res
      .status(500)
      .json({
        success: false,
        error: "Failed to send message. Try again later.",
      });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
