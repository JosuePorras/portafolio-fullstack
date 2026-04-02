import SectionBadge from "@/components/profiles/sectionBadge";
import StackCategoryCard from "./StackCategoryCard";
import { stackCategories } from "./data";

export default function StackSection() {
  return (
    <section id="stack" className="border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge>Stack tecnológico</SectionBadge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tecnologías organizadas por áreas de trabajo
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Mi stack combina herramientas para desarrollo frontend, backend,
            bases de datos, automatización, despliegue y trabajo colaborativo,
            permitiéndome construir soluciones completas con una visión
            estructurada y profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {stackCategories.map((category) => (
            <StackCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
