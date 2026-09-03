import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-offset-4 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_10px_30px_-12px_var(--color-accent)] hover:bg-accent-deep hover:shadow-[0_14px_38px_-12px_var(--color-accent)] hover:-translate-y-0.5",
  secondary:
    "border border-line-strong bg-surface-2/70 text-ink hover:border-accent/40 hover:bg-surface-3 hover:-translate-y-0.5",
  ghost:
    "border border-transparent text-ink-muted hover:border-line hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-5 py-3 text-sm",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Abre em nova aba. Links http(s) externos. */
  external?: boolean;
  /** Arquivo estático (ex.: PDF): abre em nova aba, fora do roteador do Next. */
  file?: boolean;
  className?: string;
  "aria-label"?: string;
}

/**
 * Endereços que o roteador do Next não deve interceptar:
 * mailto:, tel:, sms:, http(s):// e afins.
 */
const NON_ROUTED_HREF = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  file = false,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external || file || NON_ROUTED_HREF.test(href)) {
    const opensNewTab = file || (external && /^https?:/i.test(href));

    return (
      <a
        href={href}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
