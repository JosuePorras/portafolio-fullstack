"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { showSuccessToast, showErrorToast } from "@/lib/toast";
import { ContactService } from "@/services/contact/contact.service";
import { handleHttpError } from "@/services/htttp/index";
import FormSubmittingOverlay from "@/components/contact/FormOverlay";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const startTime = Date.now();

  try {
    await ContactService.sendMessage(form);

    showSuccessToast(
      "Mensaje enviado",
      "Gracias por escribirme. Te responderé lo antes posible.",
    );

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    if (Array.isArray(error)) {
      error.forEach((msg, index) => {
        showErrorToast(
          index === 0 ? msg : "Validación",
          index === 0 ? "" : msg,
        );
      });
      return;
    }

    if (axios.isAxiosError(error)) {
      const messages = handleHttpError(error);

      messages.forEach((msg, index) => {
        showErrorToast(
          index === 0 ? msg : "Validación",
          index === 0 ? "" : msg,
        );
      });
      return;
    }

    showErrorToast("No se pudo enviar", "Ocurrió un error inesperado.");
  } finally {
    const elapsed = Date.now() - startTime;
    const remaining = 2000 - elapsed;

    if (remaining > 0) {
      await new Promise((resolve) => setTimeout(resolve, remaining));
    }

    setIsSubmitting(false);
  }
};

  return (
    <div className="relative rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
      <FormSubmittingOverlay visible={isSubmitting} />

      <h2 className="text-2xl font-semibold">Envíame un mensaje</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Completa el formulario y me pondré en contacto contigo.
      </p>

      <form
        onSubmit={handleSubmit}
        className={`mt-8 space-y-5 transition ${
          isSubmitting ? "pointer-events-none opacity-40" : "opacity-100"
        }`}
      >
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
            className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
            required
          />
        </div>

        <Button
          type="submit"
          className="rounded-2xl px-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  );
}