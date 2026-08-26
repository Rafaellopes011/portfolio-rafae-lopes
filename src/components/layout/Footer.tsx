import Link from "next/link";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SafeImage } from "@/components/ui/SafeImage";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-9 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-line-strong bg-surface-2 font-[family-name:var(--font-display)] text-[0.7rem] font-bold text-ink">
            <SafeImage
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              sizes="32px"
              fallbackLabel={profile.initials}
            />
          </span>
          <div className="text-sm">
            <p className="font-semibold text-ink">{profile.name}</p>
            <p className="text-xs text-ink-dim">{profile.headline}</p>
          </div>
        </div>

        <SocialLinks />
      </div>

      <div className="border-t border-line/60">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-xs text-ink-dim sm:flex-row">
          <p>
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Construído com
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent-soft"
            >
              Next.js
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent-soft"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
