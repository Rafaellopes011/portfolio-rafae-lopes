import { experiences } from "@/data/experience";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceItem } from "@/components/ui/ExperienceItem";

export function ExperienceSection() {
  if (experiences.length === 0) return null;

  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-t border-line/70 bg-surface/30 py-20 md:py-32"
    >
      <div className="container-page">
        <SectionTitle index="02" title="Experiência" />

        <ol className="mt-14 space-y-14 md:mt-16 md:space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              delay={index * 80}
              isLast={index === experiences.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
