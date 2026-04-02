"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type TechItem = {
  name: string;
  image: string;
  invert?: boolean;
};

interface TechCarouselProps {
  items: TechItem[];
  reverse?: boolean;
}

export default function TechCarousel({
  items,
  reverse = false,
}: TechCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(28);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (!trackRef.current) return;

    const width = trackRef.current.scrollWidth / 2;

    const speed = 80; // velocidad

    const calculatedDuration = width / speed;

    setDuration(calculatedDuration);
  }, [items]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="tech-ribbon">
        <div
          ref={trackRef}
          className={`tech-ribbon-track ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex h-20 min-w-[160px] shrink-0 items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative h-10 w-10">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className={`object-contain ${
                    tech.invert ? "dark:invert" : ""
                  }`}
                />
              </div>

              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}