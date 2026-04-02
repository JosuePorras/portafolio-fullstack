"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  BriefcaseBusiness,
  ExternalLink,
  X,
  Search,
} from "lucide-react";
import { ProjectItem, ProjectCollaborator } from "./project";

type ProjectCardProps = {
  project: ProjectItem;
};

function getCollaboratorIcon(platform: ProjectCollaborator["platform"]) {
  switch (platform) {
    case "github":
      return "/assets/images/tech/github.svg";
    case "linkedin":
      return "/assets/images/social/linkedin-color-svgrepo-com.svg";
    case "instagram":
      return "/assets/images/tech/insta.svg";
    case "website":
      return "/assets/images/social/web.svg";
    default:
      return "/assets/images/social/web.svg";
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <article className="group overflow-hidden rounded-[2rem] border border-border bg-card/95 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative">
          <div
            className="relative h-64 w-full cursor-zoom-in overflow-hidden bg-secondary"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 700px"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-100 transition" />

            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-md">
              <Search className="h-3.5 w-3.5" />
              <span>Ver imagen</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.status && (
              <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md">
                {project.status}
              </span>
            )}

            {project.year && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md">
                <Calendar className="h-3.5 w-3.5" />
                {project.year}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-card-foreground">
              {project.title}
            </h3>

            {project.role && (
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                <span>{project.role}</span>
              </div>
            )}

            <p className="text-sm leading-7 text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="mt-6 border-t border-border/80 pt-6">
            <h4 className="text-sm font-semibold text-foreground">
              Tecnologías
            </h4>

            <div className="mt-3 flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm transition hover:border-primary/30"
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={18}
                    height={18}
                    className={tech.invert ? "dark:invert" : ""}
                    style={{ width: "18px", height: "18px" }}
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border/80 pt-6">
            <h4 className="text-sm font-semibold text-foreground">
              Colaboradores
            </h4>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.collaborators.map((collaborator) => {
                const iconSrc = getCollaboratorIcon(collaborator.platform);

                return (
                  <Link
                    key={`${project.title}-${collaborator.name}`}
                    href={collaborator.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/collab inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                      <Image
                        src={iconSrc}
                        alt={collaborator.platform}
                        width={18}
                        height={18}
                        className={`object-contain ${collaborator.platform === "github" ? "dark:invert" : ""}`}
                        style={{ width: "18px", height: "18px" }}
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-medium leading-none text-foreground">
                        {collaborator.name}
                      </span>

                      {collaborator.role && (
                        <span className="mt-1 text-xs text-muted-foreground">
                          {collaborator.role}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="mt-6 border-t border-border/80 pt-6">
              <h4 className="text-sm font-semibold text-foreground">Enlaces</h4>

              <div className="mt-3 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-border px-4 py-2.5 text-sm font-medium transition hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
              aria-label="Cerrar imagen"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
              <div className="relative h-[80vh] w-full bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 4rem), 72rem"
                  className="object-contain"
                />
              </div>

              <div className="border-t border-white/10 bg-card/95 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
