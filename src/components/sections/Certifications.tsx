import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section
      id="certificados"
      className="scroll-mt-24 border-t border-line/70 py-24 md:py-32"
    >
      <div className="container-page">
        <SectionTitle
          eyebrow="Certificados"
          title={
            <>
              Estudo contínuo,{" "}
              <span className="text-gradient">com credencial</span>
            </>
          }
          description="Cursos concluídos que sustentam a stack do dia a dia — do fundamento em lógica ao Angular e Node.js usados em produção."
        />

        <ul className="mt-14 grid gap-3 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, index) => {
            const hasLink = Boolean(item.credentialUrl);

            const content = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent-soft">
                    <BadgeCheck className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="rounded-lg border border-line bg-surface-2/60 px-2 py-1 text-[0.68rem] text-ink-dim">
                      {item.track}
                    </span>
                    {hasLink ? (
                      <ArrowUpRight
                        className="h-4 w-4 text-ink-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                </div>

                <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-ink-muted">
                  {item.issuer} · {item.issued}
                </p>

                <p
                  className="mt-4 truncate border-t border-line pt-3 font-[family-name:var(--font-mono)] text-[0.68rem] text-ink-dim"
                  title={item.credentialId}
                >
                  {item.credentialId}
                </p>
              </>
            );

            return (
              <li key={item.id}>
                <Reveal delay={index * 50} className="h-full">
                  {hasLink ? (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card card-hover hairline-top group flex h-full flex-col p-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card hairline-top flex h-full flex-col p-5">
                      {content}
                    </div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
