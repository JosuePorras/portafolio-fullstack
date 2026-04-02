import SectionBadge from "./sectionBadge";

type PassionsStrengthsSectionProps = {
  passions: string[];
  strengths: string[];
};

export default function PassionsStrengthsSection({
  passions,
  strengths,
}: PassionsStrengthsSectionProps) {
  return (
    <section className="border-y border-border bg-card/30 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionBadge>Pasiones</SectionBadge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Lo que me motiva a seguir construyendo
          </h2>

          <div className="mt-8 space-y-4">
            {passions.map((passion) => (
              <div
                key={passion}
                className="rounded-2xl border border-border bg-background/70 p-4"
              >
                <p className="text-sm leading-7 text-muted-foreground">
                  {passion}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionBadge>Fortalezas</SectionBadge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Habilidades que definen mi perfil
          </h2>

          <div className="mt-8 grid gap-4">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="rounded-2xl border border-border bg-background/70 p-4"
              >
                <p className="text-sm leading-7 text-muted-foreground">
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}