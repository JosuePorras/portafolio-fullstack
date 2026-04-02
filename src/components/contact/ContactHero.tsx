import Image from "next/image";
import SectionBadge from "@/components/profiles/sectionBadge";
import { sectionParticles } from "@/components/particles/particles";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-24">
      <div className="absolute inset-0 -z-30 bg-hero-animated opacity-70" />

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(236,72,153,0.08),transparent_22%)]" />

      <div className="absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(circle_at_center,white,transparent_88%)]">
        <div className="animate-grid-drift h-[110%] w-[110%] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-100px] top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-blob-slow" />
        <div className="absolute right-[-80px] top-10 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl animate-blob-medium" />
        <div className="absolute bottom-[-60px] left-1/3 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl animate-blob-reverse" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {sectionParticles.map((particle, index) => (
          <span
            key={index}
            className="absolute rounded-full animate-particle-float"
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(168,85,247,0.78) 35%, rgba(59,130,246,0.30) 65%, transparent 100%)",
              boxShadow:
                "0 0 16px rgba(168,85,247,0.35), 0 0 28px rgba(59,130,246,0.18)",
              filter: "blur(0.4px)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <SectionBadge>Contacto</SectionBadge>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hablemos sobre tu próximo{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
              proyecto
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            Si deseas comunicarte conmigo para colaborar en un proyecto,
            consultoría, desarrollo web, automatización o una oportunidad
            profesional, puedes escribirme por medio del formulario o a través
            de mis canales directos.
          </p>
        </div>

        <div className="relative flex items-center justify-center animate-fade-up">
          <div className="absolute h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-pulse" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/10 via-fuchsia-400/10 to-sky-400/10 blur-3xl" />
          </div>

          <Image
            src="/assets/images/josue.svg"
            alt="Josue personaje"
            width={220}
            height={220}
            className="w-64 h-auto z-10 drop-shadow-2xl animate-float-character"
            priority
          />
        </div>
      </div>
    </section>
  );
}
