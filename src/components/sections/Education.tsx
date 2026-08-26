import { FlaskConical, GraduationCap, MapPin } from "lucide-react";
import { education, research } from "@/data/education";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          eyebrow="Formação"
          title={
            <>
              Base acadêmica e{" "}
              <span className="text-gradient">pesquisa aplicada</span>
            </>
          }
          description="Graduação em Ciência da Computação somada à atuação como bolsista de Iniciação Científica."
        />

        <div className="mt-14 grid gap-4 md:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ---------- graduação ---------- */}
          <div className="space-y-4">
            {education.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 80}
                className="card card-hover hairline-top p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent-soft">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                        {item.course}
                      </h3>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent-soft">
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm font-medium text-ink-muted">
                      {item.institution}
                    </p>

                    <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-[family-name:var(--font-mono)] text-xs text-ink-dim">
                      <span>{item.period}</span>
                      {item.location ? (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          {item.location}
                        </span>
                      ) : null}
                    </p>

                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">
                      {item.description}
                    </p>

                    {item.activities && item.activities.length > 0 ? (
                      <ul className="mt-5 space-y-2 border-t border-line pt-5">
                        {item.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-start gap-2.5 text-[0.875rem] text-ink-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                            />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ---------- iniciação científica ---------- */}
          <Reveal
            delay={140}
            className="card hairline-top relative overflow-hidden p-6 md:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-2/[0.10] blur-3xl"
            />

            <div className="relative">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent-soft">
                <FlaskConical className="h-5 w-5" aria-hidden="true" />
              </span>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                {research.title}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-ink-muted">
                {research.institution}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-line bg-surface-2/60 px-2.5 py-1 text-[0.72rem] text-ink-muted">
                  {research.program}
                </span>
                <span className="rounded-lg border border-accent/25 bg-accent/[0.08] px-2.5 py-1 text-[0.72rem] text-accent-soft">
                  {research.lab}
                </span>
              </div>

              <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-muted">
                {research.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {research.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[0.875rem] text-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent-2"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
