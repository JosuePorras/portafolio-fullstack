import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/JosuePorras",
      icon: "/assets/images/social/github-142-svgrepo-com.svg",
      invert:true,
    },
    {
      name: "LinkedIn",
      href: "http://www.linkedin.com/in/josue-porras-rojas-396a19350",
      icon: "/assets/images/social/linkedin-color-svgrepo-com.svg",
    },
    {
      name: "Correo",
      href: "mailto:josueporrasrojas9@gmail.com",
      icon: "/assets/images/social/gmail-svgrepo-com.svg",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative border-t border-border bg-card text-card-foreground"
    >
    
      <div className="pointer-events-none absolute left-1/2 -top-20 z-20 -translate-x-1/2">
        <Image
          src="/assets/images/josue.svg" 
          alt="Josue personaje"
          width={120}
          height={120}
          priority
          className="w-32 h-auto drop-shadow-xl"
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        
        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold">Josue Porras</h3>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            Full Stack Developer enfocado en soluciones web modernas, backend
            robusto y experiencias limpias para el usuario.
          </p>
        </div>

        {/* Redes */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-background p-2 transition hover:-translate-y-1 hover:bg-accent"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
                className={`opacity-70 transition group-hover:opacity-100 ${social.invert ? "dark:invert":""}`}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          © 2026 Josue Porras. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}