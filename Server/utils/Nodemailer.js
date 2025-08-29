const nodemailer = require("nodemailer");

async function sendMail({ to, subject, text }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or outlook, yahoo
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    console.log("✅ Email sent successfully!");
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
}

module.exports = sendMail;
