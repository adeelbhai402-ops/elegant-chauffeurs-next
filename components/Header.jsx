
"use client";
import { useState } from "react";
import Container from "./Container";

const NavLink = ({ href, children, onClick }) => (
  <a href={href} className="hover:text-blue-800" onClick={onClick}>{children}</a>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <Container className="flex justify-between items-center py-4">
        <a href="/" className="text-lg font-bold text-blue-800">Elegant Chauffeurs</a>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? "✖" : "☰"}
        </button>
        <ul className="hidden md:flex gap-6">
          <li><NavLink href="#services">Services</NavLink></li>
          <li><NavLink href="/fleet">Fleet</NavLink></li>
          <li><NavLink href="/booking">Booking</NavLink></li>
          <li><NavLink href="/blog">Blog</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>
        </ul>
      </Container>
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow">
          <li><NavLink href="#services" onClick={() => setOpen(false)}>Services</NavLink></li>
          <li><NavLink href="/fleet" onClick={() => setOpen(false)}>Fleet</NavLink></li>
          <li><NavLink href="/booking" onClick={() => setOpen(false)}>Booking</NavLink></li>
          <li><NavLink href="/blog" onClick={() => setOpen(false)}>Blog</NavLink></li>
          <li><NavLink href="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
        </ul>
      )}
    </nav>
  );
}
