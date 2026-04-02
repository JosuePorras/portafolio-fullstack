export type ProjectTechnology = {
  name: string;
  image: string;
  invert?: boolean;
};

export type ProjectCollaborator = {
  name: string;
  role?: string;
  href: string;
  platform: "github" | "linkedin" | "instagram" | "website";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  role?: string;
  status?: string;
  year?: string;
  technologies: ProjectTechnology[];
  collaborators: ProjectCollaborator[];
  links?: ProjectLink[];
};

export const projects: ProjectItem[] = [
  {
    title: "TICMA Desk",
    description:
      "Aplicación de escritorio enfocada en la gestión interna de procesos, con una arquitectura modular entre frontend y backend para mantener una estructura escalable y profesional.",
    image: "/assets/images/projects/ticma-desk.webp",
    role: "Fullstack Developer",
    status: "En desarrollo",
    year: "2026",
    technologies: [
      { name: "Next.js", image: "/assets/images/tech/nextjs.svg", invert: true },
      { name: "Node.js", image: "/assets/images/tech/nodejs.svg" },
      { name: "Prisma", image: "/assets/images/tech/prisma.svg", invert: true },
      { name: "MySQL", image: "/assets/images/tech/mysql.svg" },
      { name: "Tailwind CSS", image: "/assets/images/tech/tailwind.svg" },
      { name: "GitHub", image: "/assets/images/tech/github.svg",invert:true },
      { name: "Electron", image: "/assets/images/tech/electron.svg",invert:true },
      { name: "Ts", image: "/assets/images/tech/typescript.svg" },
      { name: "Js", image: "/assets/images/tech/js.svg" },
    ],
    collaborators: [
      {
        name: "Ticma",
        role: "Empresa",
        href: "https://ticma.cr/",
        platform: "website",
      },
      {
        name: "Fabián López",
        role: "Líder de Desarrollo",
        href: "https://github.com/fabianrlc20",
        platform: "github",
      },
    ],
    links: [],
  },
  {
    title: "Kánux",
    description:
      "Proyecto académico-técnico orientado a la búsqueda de oportunidades para las personas que quieren demostrar sus habilidades técnicas. Participé en el área de backend, trabajando la lógica del servidor, la base de datos y la estructura general del sistema.",
    image: "/assets/images/projects/kanux.webp",
    role: "Fullstack Developer",
    status: "Finalizado",
    year: "2026",
    technologies: [
      { name: "Node.js", image: "/assets/images/tech/nodejs.svg" },
      { name: "PostgreSQL", image: "/assets/images/tech/postgresql.svg" },
      { name: "Prisma", image: "/assets/images/tech/prisma.svg", invert: true },
      { name: "GitHub", image: "/assets/images/tech/github.svg", invert: true },
      { name: "Supabase", image: "/assets/images/tech/supabase.svg" },
      { name: "Ts", image: "/assets/images/tech/typescript.svg" },
      { name: "Jira", image: "/assets/images/tech/jira.svg" },
    ],
    collaborators: [
      {
        name: "Aaron Matarrita",
        role: "Fullstack",
        href: "https://github.com/aaronMatarrita",
        platform: "github",
      },
       {
        name: "Gonzalo Dormos",
        role: "Fullstack",
        href: "https://github.com/gonzalodr",
        platform: "github",
      },
    ],
    links: [
      {
        label: "Ver proyecto",
        href: "https://github.com/AaronMatarrita/kanux-frontend-web",
      },
    ],
  },

  {
    title: "Sistema de inventario - Tienda Zair y Snayder",
    description:
      "Proyecto orientado a la gestión de inventario para una zapatería/tienda. Participé en el diseño e implementación de stored procedures para la base de datos, así como en el desarrollo de la lógica de negocio del sistema y la construcción de algunas vistas dentro de la aplicación.",
    image: "/assets/images/projects/sys.webp",
    role: "Fullstack Developer",
    status: "Finalizado",
    year: "2025",
    technologies: [
      { name: "Node.js", image: "/assets/images/tech/nodejs.svg" },
      { name: "MySQL", image: "/assets/images/tech/mysql.svg" },
      { name: "GitHub", image: "/assets/images/tech/github.svg", invert: true },
      { name: "Jira", image: "/assets/images/tech/jira.svg" },
      { name: "Js", image: "/assets/images/tech/js.svg" },
       { name: "React", image: "/assets/images/tech/react.svg" },
        { name: "Electron", image: "/assets/images/tech/electron.svg",invert:true },
    ],
    collaborators: [
      {
        name: "Aaron Matarrita",
        role: "Fullstack",
        href: "https://github.com/aaronMatarrita",
        platform: "github",
      },
       {
        name: "Daniel Briones",
        role: "Fullstack",
        href: "https://github.com/A-BrionesVargas",
        platform: "github",
      },
       {
        name: "Yeiler Montes",
        role: "Fullstack",
        href: "https://github.com/YeilerMR",
        platform: "github",
      },
    ],
    links: [
      {
        label: "Ver proyecto",
        href: "https://github.com/SistemaInventarioTienda/SistemaInventarioTienda",
      },
    ],
  } ,
   {
    title: "Komercia - Directorio comercial",
    description:
      "Plataforma web tipo directorio comercial para la visibilidad de negocios locales, con landing dinámica, buscador, categorías y panel administrativo con autenticación, desarrollada con enfoque en UX/UI, responsividad y despliegue real.",
    image: "/assets/images/projects/komercia.webp",
    role: "Fullstack Developer",
    status: "Finalizado",
    year: "2025",
    technologies: [
      { name: "Laravel", image: "/assets/images/tech/laravel.svg" },
      { name: "MySQL", image: "/assets/images/tech/mysql.svg" },
      { name: "GitHub", image: "/assets/images/tech/github.svg", invert: true },
      { name: "HTML", image: "/assets/images/tech/html.svg" },
      { name: "CSS", image: "/assets/images/tech/css.svg" },
      { name: "Railway", image: "/assets/images/tech/railway.svg",invert:true },
      
    ],
    collaborators: [
      {
        name: "Aaron Matarrita",
        role: "Fullstack",
        href: "https://github.com/aaronMatarrita",
        platform: "github",
      },
       {
        name: "Daniel Briones",
        role: "Fullstack",
        href: "https://github.com/A-BrionesVargas",
        platform: "github",
      },
       {
        name: "Yeiler Montes",
        role: "Fullstack",
        href: "https://github.com/YeilerMR",
        platform: "github",
      },
    ],
    links: [],
  } 

];