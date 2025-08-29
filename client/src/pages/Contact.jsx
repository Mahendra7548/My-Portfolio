// src/components/ContactForm.jsx
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8282/api/contact", form);
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Error sending message. Try again!");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">📩 Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col gap-6"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Message */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-center mt-6 text-lg">{status}</p>
      )}
    </section>
  );
}
