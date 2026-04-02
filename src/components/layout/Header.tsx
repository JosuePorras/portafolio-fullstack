"use client";

import { useState } from "react";
import DownloadCVButton from "../ui/DownloadCvButton";

const navItems = [
  { label: "Inicio", href: "/home" },
  { label: "Perfil", href: "/profile" },
  { label: "Stack", href: "/stacks" },
  { label: "Proyectos", href: "/projects" },
  { label: "Contacto", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-foreground transition hover:text-primary"
        >
          Josue Porras
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </a>
          ))}

         <DownloadCVButton/>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition hover:bg-accent md:hidden"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            ))}

             <DownloadCVButton/>
          </div>
        </div>
      )}
    </header>
  );
}