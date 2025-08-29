const Contact = require("../Models/Contact");
const sendMail = require("../utils/Nodemailer");


exports.addMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save in MongoDB
    const msg = new Contact({ name, email, message });
    await msg.save();

    // Send Email to YOU
    await sendMail({
      to: "mahenderbisht218@gmail.com", // replace with your email
      subject: `New Contact Message from ${name}`,
      text: `
        📩 You have a new contact message:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.json({ message: "✅ Message sent successfully" });
  } catch (error) {
    console.error("❌ Contact Error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};