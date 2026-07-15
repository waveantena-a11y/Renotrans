"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis — ${form.name || "Nouveau contact"}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nTéléphone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:renotrans@hotmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClasses =
    "w-full rounded-md border border-navy/15 bg-surface-alt px-5 py-4 font-body text-navy-dark placeholder:text-concrete-dark/50 outline-none transition-colors focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <input
        required
        placeholder="Nom complet"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClasses}
      />
      <input
        required
        type="tel"
        placeholder="Téléphone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClasses}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={`${inputClasses} sm:col-span-2`}
      />
      <textarea
        required
        placeholder="Décrivez votre projet..."
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputClasses} resize-none sm:col-span-2`}
      />
      <button
        type="submit"
        className="w-fit rounded-md bg-gold px-9 py-4 font-body text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors duration-200 hover:bg-gold-light sm:col-span-2"
      >
        {sent ? "Message préparé ✓" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
