import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionTitleProps {
  /** Índice editorial da seção: "01", "02"… */
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Ação alinhada ao título no desktop (ex.: "Ver todos"). */
  action?: ReactNode;
  className?: string;
}

/**
 * Cabeçalho de seção: numeral + filete que atravessa a largura, título
 * em display. O numeral dá a sequência de leitura sem precisar de um
 * rótulo em caixa alta repetindo o próprio título logo abaixo.
 */
export function SectionTitle({
  index,
  title,
  description,
  align = "left",
  action,
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${
        isCenter
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10"
      } ${className}`}
    >
      <div className={isCenter ? "" : "max-w-2xl"}>
        <Reveal>
          <div
            className={`flex items-center gap-4 ${isCenter ? "justify-center" : ""}`}
          >
            {index ? (
              <span className="font-[family-name:var(--font-mono)] text-[0.8125rem] font-medium tracking-[0.1em] text-accent">
                {index}
              </span>
            ) : null}
            <span
              aria-hidden="true"
              className={`h-px bg-gradient-to-r from-accent/50 via-line-strong to-transparent ${
                isCenter ? "w-16" : "w-full max-w-[14rem] flex-1"
              }`}
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.75rem]">
            {title}
          </h2>
        </Reveal>

        {description ? (
          <Reveal delay={110}>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-muted">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>

      {action && !isCenter ? (
        <Reveal delay={140} className="shrink-0">
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}
