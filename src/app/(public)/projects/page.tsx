import ProjectsHero from "@/components/projects/ProjectHero";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className=" text-foreground">
      <ProjectsHero />
      <ProjectsSection />
    </main>
  );
}