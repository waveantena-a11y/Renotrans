"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Demande de devis — ${form.name}`,
          from_name: "Site RENOTRANS",
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-md border border-navy/15 bg-surface-alt px-5 py-4 font-body text-navy-dark placeholder:text-concrete-dark/50 outline-none transition-colors focus:border-gold disabled:opacity-60";

  const disabled = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <input
        required
        disabled={disabled}
        placeholder="Nom complet"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClasses}
      />
      <input
        required
        disabled={disabled}
        type="tel"
        placeholder="Téléphone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClasses}
      />
      <input
        required
        disabled={disabled}
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={`${inputClasses} sm:col-span-2`}
      />
      <textarea
        required
        disabled={disabled}
        placeholder="Décrivez votre projet..."
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputClasses} resize-none sm:col-span-2`}
      />
      <button
        type="submit"
        disabled={disabled}
        className="w-fit rounded-md bg-gold px-9 py-4 font-body text-sm font-semibold uppercase tracking-wide text-navy-dark transition-colors duration-200 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
      >
        {status === "sending"
          ? "Envoi en cours..."
          : status === "sent"
          ? "Message envoyé ✓"
          : "Envoyer ma demande"}
      </button>
      {status === "sent" && (
        <p className="font-body text-sm text-green-700 sm:col-span-2">
          Merci, votre demande a bien été envoyée. Nous vous recontactons rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="font-body text-sm text-red-600 sm:col-span-2">
          Une erreur est survenue. Vous pouvez aussi nous appeler au 0478 231 696.
        </p>
      )}
    </form>
  );
}
