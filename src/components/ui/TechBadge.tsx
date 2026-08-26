interface TechBadgeProps {
  label: string;
  /** "sm" para cards, "md" para a seção de tecnologias. */
  size?: "sm" | "md";
  accent?: boolean;
}

export function TechBadge({
  label,
  size = "sm",
  accent = false,
}: TechBadgeProps) {
  const sizing =
    size === "sm"
      ? "px-2.5 py-1 text-[0.72rem]"
      : "px-3.5 py-2 text-[0.8125rem]";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border font-medium transition-colors duration-300 ${sizing} ${
        accent
          ? "border-accent/30 bg-accent/10 text-accent-soft"
          : "border-line bg-surface-2 text-ink-muted hover:border-line-strong hover:text-ink"
      }`}
    >
      {size === "md" ? (
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${accent ? "bg-accent" : "bg-ink-dim"}`}
        />
      ) : null}
      {label}
    </span>
  );
}
