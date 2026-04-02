import SectionBadge from "@/components/profiles/sectionBadge";
import StackSection from "@/components/stacks/StackSection";
import { sectionParticles } from "@/components/particles/particles";

export default function StackPage() {
  return (
    <main className=" text-foreground">
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
                  "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(168,85,247,0.65) 40%, transparent 100%)",
                boxShadow: "0 0 14px rgba(168,85,247,0.25)",
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <SectionBadge>Stack tecnológico</SectionBadge>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Tecnologías con las que{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
                construyo soluciones
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              Este espacio reúne las tecnologías, herramientas y metodologías
              que forman parte de mi perfil como desarrollador. Están
              organizadas por categorías para mostrar de forma clara las áreas
              en las que he trabajado y fortalecido experiencia.
            </p>
          </div>
        </div>
      </section>

      <StackSection />
    </main>
  );
}