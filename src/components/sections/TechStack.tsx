import { techCategories } from "@/data/tech";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function TechStack() {
  return (
    <section
      id="tecnologias"
      className="scroll-mt-24 border-t border-line/70 bg-surface/30 py-20 md:py-32"
    >
      <div className="container-page">
        <SectionTitle
          index="04"
          title="Tecnologias"
          description="O que uso com frequência, agrupado por camada da aplicação."
        />

        <dl className="mt-14 border-t border-line md:mt-16">
          {techCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={index * 60}
              className="group relative grid gap-3 border-b border-line py-7 transition-colors duration-500 md:grid-cols-[16rem_1fr] md:gap-10 md:py-9 md:hover:border-accent/30"
            >
              {/* filete de acento que percorre a linha no hover */}
              <span
                aria-hidden="true"
                className="absolute -bottom-px left-0 hidden h-px w-0 bg-accent transition-[width] duration-700 ease-out md:block md:group-hover:w-full"
              />

              <dt className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-accent/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {category.title}
                </span>
              </dt>

              <dd className="flex flex-wrap gap-x-8 gap-y-3 md:items-center">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-[1rem] text-ink-muted transition-colors duration-300 group-hover:text-ink sm:text-[1.0625rem]"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
