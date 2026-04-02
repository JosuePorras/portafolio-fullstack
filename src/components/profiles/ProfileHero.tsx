import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sectionParticles } from "@/components/particles/particles";

export default function ProfileHero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 sm:py-24">
      <div className="absolute inset-0 -z-30 bg-hero-animated opacity-70" />

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.12),transparent_28%)]" />

      <div className="absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(circle_at_center,white,transparent_90%)]">
        <div className="animate-grid-drift h-[110%] w-[110%] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl animate-blob-slow" />
        <div className="absolute right-[-100px] bottom-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl animate-blob-medium" />
      </div>

      {/* partículas */}
      <div className="pointer-events-none absolute inset-0 -z-10">
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
                "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(168,85,247,0.65) 40%, transparent 100%)",
              boxShadow: "0 0 14px rgba(168,85,247,0.25)",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div className="flex flex-col justify-center animate-fade-up">
          <span className="inline-flex w-fit rounded-full border border-border bg-card px-4 py-1 text-sm font-medium text-muted-foreground">
            Sobre mí
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Josue Emanuel{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
              Porras Rojas
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            Soy estudiante de Ingeniería en Sistemas de Información en la
            Universidad Nacional de Costa Rica. Actualmente vivo en Alajuela,
            aunque soy originario de Sarapiquí. Mi camino ha estado marcado
            por la tecnología, la enseñanza y la construcción de soluciones
            reales que combinan lógica, estructura y creatividad.
          </p>

          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
            Mi principal área de enfoque es el desarrollo de aplicaciones web,
            especialmente en backend, donde disfruto diseñar arquitecturas
            limpias, bases de datos bien estructuradas y lógica de negocio
            pensada para escalar. También he fortalecido mi perfil mediante
            experiencias como tutor universitario en el área de informática y
            participación en proyectos relacionados con robótica STEAM.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#journey">Mi trayectoria</a>
            </Button>

            <Button asChild variant="outline" className="rounded-2xl">
              <a href="#certifications">Certificaciones</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center animate-fade-up">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/15 to-sky-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/assets/images/me.webp"
                  alt="Foto de Josue Porras"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}