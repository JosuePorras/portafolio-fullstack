import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContactItem =
  | {
      title: string;
      value: string;
      href: string;
      iconType: "lucide";
      icon: LucideIcon;
    }
  | {
      title: string;
      value: string;
      href: string;
      iconType: "image";
      icon: string;
      invert?: boolean;
    };

const contactItems: ContactItem[] = [
  {
    title: "Correo electrónico",
    value: "josueporrasrojas9@gmail.com",
    href: "mailto:josueporrasrojas9@gmail.com",
    iconType: "lucide",
    icon: Mail,
  },
  {
    title: "Ubicación",
    value: "Desamparados, Alajuela, Costa Rica",
    href: "#",
    iconType: "lucide",
    icon: MapPin,
  },
  {
    title: "LinkedIn",
    value: "Josue Porras Rojas",
    href: "http://www.linkedin.com/in/josue-porras-rojas-396a19350",
    iconType: "image",
    icon: "/assets/images/social/linkedin-color-svgrepo-com.svg",
  },
  {
    title: "GitHub",
    value: "Josue_Porras",
    href: "https://github.com/JosuePorras",
    iconType: "image",
    icon: "/assets/images/tech/github.svg",
    invert: true,
  },
];

export default function ContactInfoCards() {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">Canales de contacto</h2>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Puedes escribirme directamente por cualquiera de estos medios.
      </p>

      <div className="mt-6 space-y-4">
        {contactItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-start gap-4 rounded-2xl border border-border bg-background/70 p-4 transition hover:border-primary/40 hover:shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              {item.iconType === "image" ? (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className={`object-contain ${item.invert?"dark:invert":""}`}
                />
              ) : (
                <item.icon className="h-5 w-5" />
              )}
            </div>

            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}