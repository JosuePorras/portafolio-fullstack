function SummaryCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </article>
  );
}

export default function SummarySection() {
  return (
    <section id="summary" className=" py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
            Perfil profesional
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Un perfil en formación con enfoque en desarrollo backend y bases de datos
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Soy estudiante de Ingeniería en Sistemas de Información en la
            Universidad Nacional de Costa Rica, con interés en el desarrollo de
            software, especialmente en el área web, backend y gestión de bases
            de datos. Me caracterizo por aprender con rapidez, trabajar bien en
            equipo y aportar soluciones funcionales en proyectos técnicos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Desarrollo backend"
            text="Experiencia académica en Node.js, Express, Spring Boot, Laravel y .NET, participando en la lógica del servidor, manejo de solicitudes e integración con bases de datos."
          />
          <SummaryCard
            title="Bases de datos"
            text="Conocimiento en MySQL, SQL Server y Transact-SQL, además de diseño e implementación de tablas, consultas y procedimientos almacenados para proyectos."
          />
          <SummaryCard
            title="Trabajo en equipo"
            text="Participación activa en equipos de desarrollo bajo metodología SCRUM, colaborando en sprints, planificación de tareas, seguimiento de historias de usuario y control de versiones con GitHub."
          />
          <SummaryCard
            title="Crecimiento profesional"
            text="Perfil responsable, adaptable y orientado al aprendizaje autónomo, con interés en seguir fortaleciendo habilidades técnicas en desarrollo web, backend y construcción de soluciones de software."
          />
        </div>
      </div>
    </section>
  );
}