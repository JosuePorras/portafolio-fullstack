import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroParticles } from "../particles/particles";



export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border "
    >
      <div className="absolute inset-0 -z-30 bg-hero-animated" />

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.20),transparent_22%),radial-gradient(circle_at_80%_25%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.14),transparent_22%)]" />

      <div className="absolute inset-0 -z-10 overflow-hidden opacity-100 [mask-image:radial-gradient(circle_at_center,white,transparent_88%)]">
        <div className="animate-grid-drift h-[110%] w-[110%] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-100px] top-10 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl animate-blob-slow" />
        <div className="absolute right-[-80px] top-8 h-96 w-96 rounded-full bg-sky-400/25 blur-3xl animate-blob-medium" />
        <div className="absolute bottom-[-40px] left-1/3 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl animate-blob-reverse" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {heroParticles.map((particle, index) => (
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
                "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(168,85,247,0.9) 35%, rgba(59,130,246,0.45) 65%, transparent 100%)",
              boxShadow:
                "0 0 18px rgba(168,85,247,0.55), 0 0 34px rgba(59,130,246,0.30)",
              filter: "blur(0.4px)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="animate-fade-up text-center">
          <div className="mx-auto mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/40 via-fuchsia-400/30 to-sky-400/30 blur-2xl" />
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-card/80 p-1 shadow-2xl backdrop-blur-md sm:h-32 sm:w-32">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/assets/images/me.webp"
                    alt="Foto de perfil de Josue Porras"
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <span className="inline-flex rounded-full border border-white/10 bg-card/70 px-4 py-1 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-md">
            Full Stack Developer · Costa Rica
          </span>

          <h1 className="mt-6 text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            JOSUE{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
              PORRAS
            </span>
          </h1>

          <p className="mt-4 text-base font-semibold text-foreground sm:text-lg">
            Desarrollador full stack enfocado en aplicaciones web modernas
          </p>

          <div className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
            <p>Node.js · Prisma · PostgreSQL · Next.js</p>
            <p>
              Arquitectura web · APIs · Bases de datos · Interfaces modernas
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Transformo ideas en aplicaciones reales con enfoque full stack. Me
            interesa construir sistemas bien estructurados, con interfaces
            limpias, lógica sólida de negocio y soluciones pensadas para
            escalar.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <a href="#projects">Ver proyectos</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-white/10 bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              <a href="#summary">Sobre mí</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-fade-in">
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground sm:text-4xl">
            Proyecto Destacado
          </h2>

          <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 shadow-2xl backdrop-blur-md transition duration-500 hover:-translate-y-1">
            <div className="grid items-stretch lg:grid-cols-[1.1fr_1fr]">
              <div className="relative min-h-[260px] bg-secondary sm:min-h-[320px]">
                <Image
                  src="/assets/images/projects/kanux.webp"
                  alt="Proyecto destacado"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Next.js · Node.js · Prisma · PostgreSQL
                </p>

                <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                  Kánux
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Plataforma enfocada en la validación de habilidades mediante
                  retos prácticos, permitiendo a estudiantes y talento emergente
                  demostrar sus capacidades reales sin depender de la
                  experiencia laboral tradicional. El sistema conecta
                  directamente a empresas con perfiles evaluados de forma
                  objetiva.
                </p>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p>
                    • Desarrollo backend con Node.js y arquitectura modular para
                    gestión de usuarios, retos y métricas.
                  </p>
                  <p>
                    • Modelado de base de datos relacional con Prisma y
                    PostgreSQL para manejo de perfiles y evaluaciones.
                  </p>
                  <p>
                    • Implementación de lógica para validación de habilidades
                    mediante retos y resultados verificables.
                  </p>
                  <p>
                    • Trabajo en equipo bajo metodología ágil (SCRUM) utilizando
                    GitHub y herramientas colaborativas.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl">
                    <a href="#projects">Ver más proyectos</a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border-white/10 bg-transparent"
                  >
                    <a href="#summary">Mi perfil</a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
