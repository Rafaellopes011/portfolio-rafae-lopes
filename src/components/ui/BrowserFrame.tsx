import type { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  /** Texto exibido na barra de endereço fake. */
  label?: string;
  className?: string;
}

/**
 * Moldura de navegador para apresentar screenshots com contexto de produto.
 */
export function BrowserFrame({
  children,
  label,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-surface-2 shadow-[0_30px_70px_-40px_rgba(0,0,0,1)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface-3/60 px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </span>
        {label ? (
          <span className="mx-auto truncate rounded-md bg-base/60 px-3 py-0.5 font-[family-name:var(--font-mono)] text-[0.65rem] text-ink-dim">
            {label}
          </span>
        ) : null}
      </div>
      <div className="relative bg-base">{children}</div>
    </div>
  );
}
