import ProfileHero from "@/components/profiles/ProfileHero";
import JourneySection from "@/components/profiles/JourneySection";
import PassionsStrengthsSection from "@/components/profiles/PassionSection";
import ExperienceSection from "@/components/profiles/ExperienceSection";
import CertificationsSection from "@/components/profiles/CertificacionsSection";
import {
  strengths,
  passions,
  projects,
  certifications,
} from "@/components/profiles/data";

export default function ProfilePage() {
  return (
    <main className="relative overflow-hidden text-foreground">
      <ProfileHero />
      <JourneySection />
      <PassionsStrengthsSection
        passions={passions}
        strengths={strengths}
      />
      <ExperienceSection projects={projects} />
      <CertificationsSection certifications={certifications} />
    </main>
  );
}
