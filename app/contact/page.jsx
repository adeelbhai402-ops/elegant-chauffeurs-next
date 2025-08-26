
"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { useState } from "react";

export const metadata = { title: "Contact | The Elegant Chauffeurs" };

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(form)), headers: { "Content-Type": "application/json" } });
    setStatus(res.ok ? "Message sent!" : "Something went wrong.");
  };
  return (
    <div>
      <Header />
      <Container className="py-12">
        <h1 className="text-3xl font-bold text-blue-900">Contact</h1>
        <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 max-w-xl mt-6 grid gap-4">
          <input className="border p-3 rounded" name="name" placeholder="Your Name" required />
          <input className="border p-3 rounded" name="email" type="email" placeholder="Your Email" required />
          <textarea className="border p-3 rounded" name="message" placeholder="How can we help?" rows="5" required></textarea>
          <button className="bg-blue-800 text-white py-3 rounded">Send Message</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </Container>
      <Footer />
    </div>
  );
}
