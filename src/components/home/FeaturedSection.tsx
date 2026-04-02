const projects = [
  {
    title: "TICMA Desk – Sistema de gestión empresarial",
    description:
      "Aplicación de escritorio desarrollada con Electron y Next.js para la gestión de clientes, servicios y planes. Implementé la arquitectura backend con Node.js, Prisma y PostgreSQL, incluyendo autenticación, manejo de sesiones y estructura modular escalable.",
  },
  {
    title: "API REST segura con autenticación y validaciones",
    description:
      "Backend desarrollado con Express y Prisma, enfocado en buenas prácticas: autenticación con JWT, validaciones con Zod, manejo centralizado de errores y diseño modular basado en controladores y servicios.",
  },
  {
    title: "Dashboard administrativo full stack",
    description:
      "Interfaz moderna construida con Next.js, Tailwind y componentes reutilizables. Incluye tablas dinámicas, formularios genéricos y consumo de API, optimizada para flujos de gestión empresarial.",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className=" py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
            Proyectos destacados
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Experiencias que reflejan mi enfoque profesional
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Estos espacios pueden conectarse luego con tus proyectos reales,
            capturas, repositorios o casos de estudio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary" />

              <h3 className="text-xl font-semibold text-card-foreground">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Ver más
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}