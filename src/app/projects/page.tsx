"use client";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
  };

  return (
    <div className="px-4 text-lg">
      <div className="max-w-[50rem] mx-auto mt-8">
        <h1 className="text-white text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-white mb-6">
          Feel free to reach out to me using the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-neutral-900 p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-neutral-800 text-white border border-neutral-700 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
