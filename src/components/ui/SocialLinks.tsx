import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { socialLinks, type SocialLink } from "@/data/social";

const icons: Record<SocialLink["id"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

interface SocialLinksProps {
  /** "icon" = só ícones; "labelled" = ícone + rótulo. */
  variant?: "icon" | "labelled";
  /** Filtra quais links exibir. */
  only?: SocialLink["id"][];
  className?: string;
}

export function SocialLinks({
  variant = "icon",
  only,
  className = "",
}: SocialLinksProps) {
  const links = only
    ? socialLinks.filter((link) => only.includes(link.id))
    : socialLinks;

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.id];
        const isExternal = link.id !== "email";

        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              className={
                variant === "icon"
                  ? "flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2/60 text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink"
                  : "flex items-center gap-2 rounded-lg border border-line bg-surface-2/60 px-3.5 py-2 text-sm font-medium text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink"
              }
            >
              <Icon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
              {variant === "labelled" ? <span>{link.label}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
