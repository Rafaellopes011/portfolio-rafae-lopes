import { education, research, programs } from "@/data/education";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

interface EntryProps {
  title: string;
  organization: string;
  meta: string;
  description: string;
  points?: readonly string[];
  delay?: number;
}

/** Uma entrada da formação — sem card, separada apenas por um filete. */
function Entry({
  title,
  organization,
  meta,
  description,
  points,
  delay = 0,
}: EntryProps) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="border-t border-line pt-8 first:border-t-0 first:pt-0"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink sm:text-2xl">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-ink-dim">
          {meta}
        </p>
      </div>

      <p className="mt-1.5 text-[0.9375rem] font-medium text-accent-soft">
        {organization}
      </p>

      <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.75] text-ink-muted">
        {description}
      </p>

      {points && points.length > 0 ? (
        <ul className="mt-4 max-w-2xl space-y-2">
          {points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-[0.875rem] leading-relaxed text-ink-muted"
            >
              <span
                aria-hidden="true"
                className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </Reveal>
  );
}

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-24 py-20 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-24">
          <SectionTitle index="05" title="Formação" className="lg:sticky lg:top-28 lg:h-fit" />

          <ul className="max-w-3xl space-y-8">
            {education.map((item, index) => (
              <Entry
                key={item.id}
                title={item.course}
                organization={item.institution}
                meta={[item.period, item.location].filter(Boolean).join(" · ")}
                description={item.description}
                points={item.activities}
                delay={index * 80}
              />
            ))}

            <Entry
              title={research.title}
              organization={research.institution}
              meta={research.lab}
              description={research.description}
              points={research.points}
              delay={100}
            />

            {programs.map((program, index) => (
              <Entry
                key={program.id}
                title={program.title}
                organization={program.organization}
                meta={program.year}
                description={program.description}
                delay={160 + index * 80}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
