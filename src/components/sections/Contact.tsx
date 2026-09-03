import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks, type SocialLink } from "@/data/social";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { EmailButton } from "@/components/ui/EmailButton";

const icons: Partial<Record<SocialLink["id"], LucideIcon>> = {
  github: Github,
  linkedin: Linkedin,
};

export function Contact() {
  const profiles = socialLinks.filter((link) => link.id !== "email");

  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden border-t border-line/70 py-20 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow absolute bottom-0 left-1/2 h-[22rem] w-[40rem] -translate-x-1/2 translate-y-1/3" />
      </div>

      <div className="container-page relative">
        <div className="crop-marks relative mx-auto max-w-4xl rounded-2xl border border-line bg-surface-2/40 px-6 py-14 sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="glow-duo pointer-events-none absolute inset-0 rounded-2xl"
          />

          <div className="relative">
            <SectionTitle
              align="center"
              index="07"
              title="Contato"
              description="Estou aberto a oportunidades como desenvolvedor Full Stack. O caminho mais rápido é o e-mail ou o LinkedIn."
            />

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <EmailButton email={profile.email} subject={profile.emailSubject} />
            <CopyEmail email={profile.email} />
          </div>
        </Reveal>

        <Reveal delay={220}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-line pt-8">
            {profiles.map((link) => {
              const Icon = icons[link.id];

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    ) : null}
                    <span className="font-medium">{link.label}</span>
                    <span className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-ink-dim">
                      {link.handle}
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-ink-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
