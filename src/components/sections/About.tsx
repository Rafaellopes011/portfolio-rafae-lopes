import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { renderEmphasis } from "@/lib/richText";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-24">
          <SectionTitle index="03" title="Sobre mim" className="lg:sticky lg:top-28 lg:h-fit" />

          <div className="max-w-2xl space-y-6">
            {profile.about.map((paragraph, index) => (
              <Reveal key={index} delay={index * 90}>
                <p className="text-[1.0625rem] leading-[1.8] text-ink-muted sm:text-[1.125rem]">
                  {renderEmphasis(paragraph)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
