export type StackCategory = {
  title: string;
  description: string;
  technologies: {
    name: string;
    image: string;
    invert?: boolean;
  }[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "Frontend",
    description:
      "Tecnologías enfocadas en interfaces modernas, componentes reutilizables y experiencias web responsivas.",
    technologies: [
      { name: "Next.js", image: "/assets/images/tech/nextjs.svg", invert: true },
      { name: "React", image: "/assets/images/tech/react.svg" },
      { name: "TypeScript", image: "/assets/images/tech/typescript.svg" },
      { name: "Tailwind CSS", image: "/assets/images/tech/tailwind.svg" },
      { name: "HTML5", image: "/assets/images/tech/html.svg" },
      { name: "CSS3", image: "/assets/images/tech/css.svg" },
      { name: "JS", image: "/assets/images/tech/js.svg" },
      { name: "Laravel", image: "/assets/images/tech/laravel.svg" },
    ],
  },
  {
    title: "Backend",
    description:
      "Herramientas y entornos orientados a lógica de negocio, APIs, arquitectura modular y escalabilidad.",
    technologies: [
      { name: "Node.js", image: "/assets/images/tech/nodejs.svg" },
      { name: "Express", image: "/assets/images/tech/Express.svg", invert: true },
      { name: "Prisma", image: "/assets/images/tech/prisma.svg", invert: true },
      { name: "Java", image: "/assets/images/tech/java.svg" },
      { name: "Python", image: "/assets/images/tech/python.svg" },
      { name: "C++", image: "/assets/images/tech/c.svg" },
      { name: "Spring Boot", image: "/assets/images/tech/spring.svg",invert:true },
      { name: "PHP", image: "/assets/images/tech/php.svg"},
    ],
  },
  {
    title: "Bases de datos",
    description:
      "Sistemas de almacenamiento y modelado de información utilizados en proyectos académicos y profesionales.",
    technologies: [
      { name: "PostgreSQL", image: "/assets/images/tech/postgresql.svg" },
      { name: "MySQL", image: "/assets/images/tech/mysql.svg" },
      { name: "Supabase", image: "/assets/images/tech/supabase.svg" },
      { name: "Microsoft SQL Server", image: "/assets/images/tech/microsoft.svg" },
    ],
  },
  {
    title: "Herramientas y despliegue",
    description:
      "Plataformas y utilidades que apoyan el desarrollo, la colaboración y la publicación de proyectos.",
    technologies: [
      { name: "GitHub", image: "/assets/images/tech/github.svg", invert: true },
      { name: "Vercel", image: "/assets/images/tech/vercel.svg", invert: true },
      { name: "Postman", image: "/assets/images/tech/postman.svg" },
      { name: "Railway", image: "/assets/images/tech/railway.svg",invert:true },
      { name: "Jira", image: "/assets/images/tech/jira.svg" },
      { name: "Figma", image: "/assets/images/tech/figma.svg" },
      { name: "Slack", image: "/assets/images/tech/slack.svg" },
      { name: "Microsoft Teams", image: "/assets/images/tech/microsoft-teams.svg" }
    ],
  },
  {
    title: "Metodologías y automatización",
    description:
      "Enfoques de trabajo y herramientas que fortalecen la organización, eficiencia y mejora continua.",
    technologies: [
      { name: "Scrum", image: "/assets/images/tech/scrum.svg",invert:true },
      { name: "UiPath", image: "/assets/images/tech/uipath.svg" },
    ],
  },
];