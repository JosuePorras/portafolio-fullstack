import Image from "next/image";
import { StackCategory } from "./data";

type StackCategoryCardProps = {
  category: StackCategory;
};

export default function StackCategoryCard({
  category,
}: StackCategoryCardProps) {
  return (
    <article className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-2xl font-semibold">{category.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {category.description}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {category.technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background/70 p-4 text-center transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card">
              <Image
                src={tech.image}
                alt={tech.name}
                width={42}
                height={42}
                className={`h-10 w-auto ${tech.invert ? "dark:invert" : ""}`}
              />
            </div>

            <p className="mt-3 text-sm font-medium text-foreground">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}