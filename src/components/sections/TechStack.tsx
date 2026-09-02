import { techCategories } from "@/data/tech";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";

export function TechStack() {
  /**
   * Com um número de categorias que não fecha a grade de 3 colunas,
   * o último card se estica para não deixar um buraco na última linha.
   */
  const lastSpansTwo = techCategories.length % 3 === 2;

  return (
    <section
      id="tecnologias"
      className="scroll-mt-24 border-t border-line/70 bg-surface/30 py-24 md:py-32"
    >
      <div className="container-page">
        <SectionTitle
          eyebrow="Tecnologias"
          title={
            <>
              A stack que eu uso{" "}
              <span className="text-gradient">no dia a dia</span>
            </>
          }
          description="Organizada por camada da aplicação. Com áreas de foco e tecnologias que eu uso com frequência."
        />

        <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={index * 70}
              className={`card card-hover hairline-top flex flex-col p-6 md:p-7 ${
                category.primary ? "md:col-span-2 lg:col-span-1" : ""
              } ${
                lastSpansTwo && index === techCategories.length - 1
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink">
                  {category.title}
                </h3>
                {category.primary ? (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent-soft">
                    Foco
                  </span>
                ) : null}
              </div>

              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-muted">
                {category.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {category.items.map((item) => (
                  <li key={item}>
                    <TechBadge
                      label={item}
                      size="md"
                      accent={Boolean(category.primary)}
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
