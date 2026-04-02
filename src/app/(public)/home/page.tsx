import HeroSection from "@/components/home/HeroSection";
import SummarySection from "@/components/home/SummarySection";
import StackSection from "@/components/home/StackSections";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StackSection />
      <SummarySection />
    </main>
  );
}