import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactAvailability from "@/components/contact/ContactAvailability";

export default function ContactPage() {
  return (
    <main className=" text-foreground">
      <ContactHero />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-8">
            <ContactInfoCards />
            <ContactAvailability />
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}