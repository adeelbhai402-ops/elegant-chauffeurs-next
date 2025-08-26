
"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { useState } from "react";

export const metadata = { title: "Booking | The Elegant Chauffeurs" };

export default function BookingPage() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", pickup: "", dropoff: "" });
  const [status, setStatus] = useState("");
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setStatus(res.ok ? "Request received! We'll contact you." : "Something went wrong.");
  };

  return (
    <div>
      <Header />
      <Container className="py-12">
        <h1 className="text-3xl font-bold text-blue-900">Booking</h1>
        <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 max-w-xl mt-6 grid gap-4">
          <input className="border p-3 rounded" placeholder="Full Name" name="name" value={form.name} onChange={update} required />
          <input className="border p-3 rounded" placeholder="Phone" name="phone" value={form.phone} onChange={update} required />
          <input className="border p-3 rounded" type="date" name="date" value={form.date} onChange={update} required />
          <input className="border p-3 rounded" placeholder="Pickup Location" name="pickup" value={form.pickup} onChange={update} required />
          <input className="border p-3 rounded" placeholder="Dropoff Location" name="dropoff" value={form.dropoff} onChange={update} required />
          <button className="bg-blue-800 text-white py-3 rounded">Submit Booking Request</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </Container>
      <Footer />
    </div>
  );
}
