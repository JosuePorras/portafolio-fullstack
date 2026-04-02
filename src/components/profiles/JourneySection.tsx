import SectionBadge from "./sectionBadge";

export default function JourneySection() {
  return (
    <section id="journey" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge>Trayectoria</SectionBadge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Mi recorrido como estudiante y desarrollador
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Mi formación universitaria me ha permitido desarrollar una visión
            integral de la tecnología, combinando conocimientos técnicos con
            habilidades humanas y experiencia práctica en distintos contextos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Formación universitaria</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Actualmente curso Ingeniería en Sistemas de Información en la
              Universidad Nacional de Costa Rica, fortaleciendo mi perfil en
              desarrollo, análisis, bases de datos y construcción de sistemas.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Tutor universitario</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              He trabajado como tutor en el área de informática y
              programación, ayudando a otros estudiantes a comprender temas
              técnicos y reforzando mis capacidades de comunicación, paciencia
              y liderazgo.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Experiencia práctica</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Mi trayectoria incluye participación en proyectos de desarrollo
              web, automatización y experiencias vinculadas a robótica STEAM,
              ampliando mi capacidad para resolver problemas en entornos
              reales.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}