import TechCarousel from "./techCarousel";



const portfolioTech = [
  { name: "Next.js", image: "/assets/images/tech/nextjs.svg", invert: true },
  { name: "React", image: "/assets/images/tech/react.svg" },
  { name: "TypeScript", image: "/assets/images/tech/typescript.svg" },
  { name: "Tailwind CSS", image: "/assets/images/tech/tailwind.svg" },
  { name: "Vercel", image: "/assets/images/tech/vercel.svg", invert: true },
  { name: "Node.js", image: "/assets/images/tech/nodejs.svg" },
  { name: "Supabase", image: "/assets/images/tech/supabase.svg" },
  { name: "Prisma", image: "/assets/images/tech/prisma.svg", invert: true },
  { name: "PostgreSQL", image: "/assets/images/tech/postgresql.svg" },
  { name: "GitHub", image: "/assets/images/tech/github.svg", invert: true },
];

const stack = [
  { name: "Android", image: "/assets/images/tech/android-svgrepo-com.svg", invert: true },

  { name: "C++", image: "/assets/images/tech/c.svg" },
  { name: "Java", image: "/assets/images/tech/java.svg" },
  { name: "Python", image: "/assets/images/tech/python.svg" },
  { name: "PHP", image: "/assets/images/tech/php.svg" },

  { name: "HTML5", image: "/assets/images/tech/html.svg" },
  { name: "CSS3", image: "/assets/images/tech/css.svg" },
  { name: "JavaScript", image: "/assets/images/tech/js.svg" },
  { name: "TypeScript", image: "/assets/images/tech/typescript.svg" },

  { name: "React", image: "/assets/images/tech/react.svg" },
  { name: "Next.js", image: "/assets/images/tech/nextjs.svg", invert: true },
  { name: "Tailwind CSS", image: "/assets/images/tech/tailwind.svg" },

  { name: "Node.js", image: "/assets/images/tech/nodejs.svg" },
  { name: "Express", image: "/assets/images/tech/Express.svg", invert: true },
  { name: "Spring Boot", image: "/assets/images/tech/spring.svg", invert: true },

  { name: "Prisma", image: "/assets/images/tech/prisma.svg", invert: true },
  { name: "Supabase", image: "/assets/images/tech/supabase.svg" },

  { name: "PostgreSQL", image: "/assets/images/tech/postgresql.svg" },
  { name: "MySQL", image: "/assets/images/tech/mysql.svg" },
  { name: "SQL Server", image: "/assets/images/tech/microsoft.svg" },

  { name: "JWT", image: "/assets/images/tech/jwt.svg", invert: true },

  { name: "GitHub", image: "/assets/images/tech/github.svg", invert: true },
  { name: "Vercel", image: "/assets/images/tech/vercel.svg", invert: true },
  { name: "Railway", image: "/assets/images/tech/railway.svg", invert: true },

  { name: "Postman", image: "/assets/images/tech/postman.svg" },
  { name: "Jira", image: "/assets/images/tech/jira.svg" },
  { name: "Figma", image: "/assets/images/tech/figma.svg" },
  { name: "Slack", image: "/assets/images/tech/slack.svg" },
  { name: "Microsoft Teams", image: "/assets/images/tech/microsoft-teams.svg" },

  { name: "Scrum", image: "/assets/images/tech/scrum.svg", invert: true },
  { name: "UiPath", image: "/assets/images/tech/uipath.svg" },
];

export default function StackSection() {
  return (
    <section id="stack" className="border-y border-border  py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/**/}
        <div>
          <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
            Este portafolio
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tecnologías utilizadas en este proyecto
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            Stack utilizado para diseñar, desarrollar y desplegar este portafolio.
          </p>

          {/* Carrusel tipo ribbon */}
          <div className="relative mt-8 overflow-hidden">
          
            <TechCarousel items={portfolioTech} />
        
          </div>
        </div>

        {/**/}
        <div className="mt-16">
          <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
            Mi stack
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tecnologías que utilizo regularmente
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            Herramientas que uso en el desarrollo de aplicaciones completas,
            desde frontend hasta backend y base de datos.
          </p>

          {/* */}
          <div className="relative mt-8 overflow-hidden">
          
            <TechCarousel items={stack} reverse />
        
          </div>
        </div>

      </div>
    </section>
  );
}