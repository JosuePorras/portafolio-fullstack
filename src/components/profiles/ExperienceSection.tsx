"use client";
import Image from "next/image";
import SectionBadge from "@/components/profiles/sectionBadge";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
};

type ExperienceSectionProps = {
  projects: Project[];
};

export default function ExperienceSection({
  projects,
}: ExperienceSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionBadge>Experiencias</SectionBadge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Áreas en las que he crecido profesionalmente
          </h2>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Mi perfil se ha construido a través de experiencias académicas,
            técnicas y humanas, que hoy influyen directamente en la forma en que
            desarrollo soluciones.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="relative h-44 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Preview"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain rounded-2xl"
              />

              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-1 text-white backdrop-blur hover:bg-white/20"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
