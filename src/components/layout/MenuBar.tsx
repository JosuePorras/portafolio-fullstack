"use client";

import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuBarProps {
  logoText?: string;
  items?: MenuItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultItems: MenuItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function MenuBar({
  logoText = "Josue Dev",
  items = defaultItems,
  ctaLabel = "Ver CV",
  ctaHref = "#cv",
}: MenuBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-foreground transition hover:text-primary"
        >
          {logoText}
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </a>
          ))}

          <a
            href={ctaHref}
            className="ml-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {ctaLabel}
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition hover:bg-accent md:hidden"
        >
          {isOpen ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            ))}

            <a
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}