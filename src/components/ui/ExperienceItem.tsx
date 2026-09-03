import type { Experience } from "@/data/experience";
import { Reveal } from "./Reveal";

interface ExperienceItemProps {
  experience: Experience;
  /** Último item da timeline não desenha a linha até o fim. */
  isLast?: boolean;
  delay?: number;
}

export function ExperienceItem({
  experience,
  isLast,
  delay = 0,
}: ExperienceItemProps) {
  return (
    <li className="relative grid gap-4 pl-8 md:grid-cols-[11.5rem_1fr] md:gap-10 md:pl-0">
      {/* trilho da timeline */}
      <span
        aria-hidden="true"
        className={`absolute left-[0.4375rem] top-3 w-px bg-gradient-to-b from-accent/40 via-line-strong to-transparent md:left-[11.9375rem] ${
          isLast ? "h-20" : "h-full"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute left-0 top-2 flex h-3.5 w-3.5 rounded-full border-2 md:left-[11.5rem] ${
          experience.current
            ? "animate-pulse-ring border-accent bg-accent"
            : "border-line-strong bg-surface-3"
        }`}
      />

      {/* período */}
      <Reveal delay={delay} className="md:pr-8 md:text-right">
        <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] font-medium text-accent-soft">
          {experience.period}
        </p>
        <p className="mt-1 text-xs text-ink-dim">
          {[experience.kind, experience.location]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </Reveal>

      {/* conteúdo */}
      <Reveal delay={delay + 70} className="pb-2">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em] text-ink sm:text-[1.75rem]">
          {experience.company}
        </h3>
        <p className="mt-1.5 text-[0.9375rem] font-semibold text-accent-soft">
          {experience.role}
        </p>

        <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.75] text-ink-muted">
          {experience.description}
        </p>

        {experience.responsibilities.length > 0 ? (
          <ul className="mt-5 max-w-2xl space-y-2.5">
            {experience.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.875rem] leading-relaxed text-ink-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {experience.technologies.length > 0 ? (
          <p className="mt-5 font-[family-name:var(--font-mono)] text-[0.8125rem] leading-relaxed text-ink-dim">
            {experience.technologies.join("  ·  ")}
          </p>
        ) : null}
      </Reveal>
    </li>
  );
}
