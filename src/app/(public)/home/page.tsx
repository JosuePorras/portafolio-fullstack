import HeroSection from "@/components/home/HeroSection";
import SummarySection from "@/components/home/SummarySection";
import StackSection from "@/components/home/StackSections";
import FeaturedProjectsSection from "@/components/home/FeaturedSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SummarySection />
      <StackSection />
      <FeaturedProjectsSection />
    </main>
  );
}