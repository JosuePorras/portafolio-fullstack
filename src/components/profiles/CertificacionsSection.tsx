"use client";

import { useState } from "react";
import Image from "next/image";
import SectionBadge from "./sectionBadge";

type Certification = {
  title: string;
  description: string;
  image: string;
};

type CertificationsSectionProps = {
  certifications: Certification[];
};

export default function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  return (
    <>
      <section id="certifications" className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>Certificaciones</SectionBadge>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Formación complementaria
            </h2>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Estas certificaciones fortalecen mi enfoque profesional en
              metodologías ágiles, automatización y trabajo organizado en
              proyectos tecnológicos.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="relative h-64 w-full cursor-pointer bg-secondary"
                  onClick={() => setSelectedCertification(certification)}
                >
                  <Image
                    src={certification.image}
                    alt={certification.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {certification.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {certification.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedCertification && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setSelectedCertification(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertification(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-sm text-white transition hover:bg-black/70"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl">
              <div className="relative h-[80vh] w-full bg-black">
                <Image
                  src={selectedCertification.image}
                  alt={selectedCertification.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="border-t border-border bg-card p-6">
                <h3 className="text-2xl font-semibold">
                  {selectedCertification.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {selectedCertification.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}