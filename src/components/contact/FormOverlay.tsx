"use client";

import Image from "next/image";

type FormSubmittingOverlayProps = {
  visible: boolean;
  title?: string;
  description?: string;
};

export default function FormSubmittingOverlay({
  visible,
  title = "Enviando mensaje...",
  description = "Espera un momento mientras proceso tu formulario.",
}: FormSubmittingOverlayProps) {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center rounded-[2rem] bg-background/80 backdrop-blur-sm">
      <div className="mx-4 flex max-w-sm flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl" />

          <Image
            src="/assets/images/josue.svg"
            alt="Josue personaje"
            width={220}
            height={220}
            className="h-auto w-40 drop-shadow-2xl animate-float-character"
            priority
          />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-5 h-2 w-52 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-loading-bar rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}