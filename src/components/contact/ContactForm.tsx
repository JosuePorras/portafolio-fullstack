"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Formulario enviado:", form);

    alert("Mensaje enviado correctamente");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold">Envíame un mensaje</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Completa el formulario y me pondré en contacto contigo.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tucorreo@gmail.com"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Asunto</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Asunto del mensaje"
            className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Mensaje</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            rows={6}
            className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary resize-none"
            required
          />
        </div>

        <Button type="submit" className="rounded-2xl px-6">
          Enviar mensaje
        </Button>
      </form>
    </div>
  );
}