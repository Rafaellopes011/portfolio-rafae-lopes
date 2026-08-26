import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionTitleProps {
  /** Rótulo pequeno acima do título. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent-soft`}
          >
            <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={60}>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={120}>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
