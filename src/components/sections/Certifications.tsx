import { ChevronDown } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

interface IssuerGroup {
  issuer: string;
  items: Certification[];
  /** Títulos sem repetição, para a linha de resumo. */
  topics: string[];
  range: string;
}

/** Agrupa por emissor: 13 certificados viram um bloco por instituição. */
function groupByIssuer(list: Certification[]): IssuerGroup[] {
  const map = new Map<string, Certification[]>();

  for (const item of list) {
    const bucket = map.get(item.issuer);
    if (bucket) bucket.push(item);
    else map.set(item.issuer, [item]);
  }

  return [...map.entries()].map(([issuer, items]) => {
    const years = items.map((item) => item.issuedAt.slice(0, 4)).sort();
    const first = years[0];
    const last = years[years.length - 1];

    return {
      issuer,
      items,
      topics: [...new Set(items.map((item) => item.title))],
      range: first === last ? first : `${first}–${last}`,
    };
  });
}

export function Certifications() {
  const groups = groupByIssuer(certifications);

  return (
    <section
      id="certificados"
      className="scroll-mt-24 border-t border-line/70 bg-surface/30 py-20 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-24">
          <SectionTitle
            index="06"
            title="Certificações"
            className="lg:sticky lg:top-28 lg:h-fit"
          />

          <ul className="max-w-3xl space-y-8">
            {groups.map((group, index) => (
              <Reveal
                as="li"
                key={group.issuer}
                delay={index * 80}
                className="border-t border-line pt-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                    {group.issuer}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-ink-dim">
                    {group.range} · {group.items.length} certificados
                  </p>
                </div>

                <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-muted">
                  {group.topics.join("  ·  ")}
                </p>

                <details className="group mt-5">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[0.8125rem] font-medium text-ink-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                    Ver credenciais
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>

                  <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                    {group.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-[0.8125rem]"
                      >
                        {item.credentialUrl ? (
                          <a
                            href={item.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <span className="font-medium text-ink">
                            {item.title}
                          </span>
                        )}
                        <span className="text-ink-dim">{item.issued}</span>
                        <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-dim/70">
                          {item.credentialId}
                        </span>
                      </li>
                    ))}
                  </ul>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
