import { Check } from "lucide-react";
import type { Experience } from "@/data/experience";
import { TechBadge } from "./TechBadge";
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
    <li className="relative grid gap-6 pl-9 md:grid-cols-[10rem_1fr] md:gap-10 md:pl-0">
      {/* trilho da timeline */}
      <span
        aria-hidden="true"
        className={`absolute left-[0.4375rem] top-2.5 w-px bg-gradient-to-b from-line-strong via-line to-transparent md:left-[10.4375rem] ${
          isLast ? "h-16" : "h-full"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 md:left-[10rem] ${
          experience.current
            ? "animate-pulse-ring border-accent bg-accent"
            : "border-line-strong bg-surface-3"
        }`}
      />

      {/* período */}
      <Reveal delay={delay} className="md:pr-10 md:text-right">
        <p className="font-[family-name:var(--font-mono)] text-[0.8125rem] font-medium text-accent-soft">
          {experience.period}
        </p>
        {experience.kind ? (
          <p className="mt-1 text-xs text-ink-dim">{experience.kind}</p>
        ) : null}
        {experience.location ? (
          <p className="mt-0.5 text-xs text-ink-dim">{experience.location}</p>
        ) : null}
      </Reveal>

      {/* conteúdo */}
      <Reveal
        delay={delay + 80}
        className="card card-hover hairline-top -mt-1 p-6 md:p-7"
      >
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
          {experience.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent-soft">
          {experience.company}
        </p>

        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">
          {experience.description}
        </p>

        {experience.responsibilities.length > 0 ? (
          <ul className="mt-5 space-y-2.5">
            {experience.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-muted"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {experience.technologies.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
            {experience.technologies.map((tech) => (
              <li key={tech}>
                <TechBadge label={tech} />
              </li>
            ))}
          </ul>
        ) : null}
      </Reveal>
    </li>
  );
}
