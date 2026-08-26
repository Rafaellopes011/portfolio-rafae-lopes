import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks, type SocialLink } from "@/data/social";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { EmailButton } from "@/components/ui/EmailButton";
import { MailtoLink } from "@/components/ui/MailtoLink";

const icons: Record<SocialLink["id"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const descriptions: Record<SocialLink["id"], string> = {
  github: "Código, experimentos e repositórios públicos.",
  linkedin: "Trajetória profissional e contato para oportunidades.",
  email: "Para propostas, projetos ou uma conversa direta.",
};

export function Contact() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden border-t border-line/70 py-24 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[24rem] w-[44rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent/[0.09] blur-[130px]" />
      </div>

      <div className="container-page relative">
        <SectionTitle
          align="center"
          eyebrow="Contato"
          title={
            <>
              Vamos construir{" "}
              <span className="text-gradient">algo juntos?</span>
            </>
          }
          description="Estou aberto a oportunidades como desenvolvedor de Software ou Full Stack Developer, além de projetos que envolvam frontend, APIs, banco de dados e integração de IA. O caminho mais rápido é o e-mail ou o LinkedIn."
        />

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <EmailButton
              email={profile.email}
              subject={profile.emailSubject}
            />
            <CopyEmail email={profile.email} />
          </div>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {socialLinks.map((link, index) => {
            const Icon = icons[link.id];
            const isEmail = link.id === "email";

            const cardClass =
              "card card-hover hairline-top group flex h-full flex-col p-6";

            const cardContent = (
              <>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent-soft transition-colors duration-300 group-hover:border-accent/40">
                    <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-ink-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-base font-semibold text-ink">
                  {link.label}
                </h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">
                  {descriptions[link.id]}
                </p>
                <p className="mt-4 truncate font-[family-name:var(--font-mono)] text-xs text-ink-dim">
                  {link.handle}
                </p>
              </>
            );

            return (
              <li key={link.id}>
                <Reveal delay={index * 80}>
                  {isEmail ? (
                    // Mesmo fallback do botão principal: sem handler de
                    // mailto:, o clique cairia no vazio.
                    <MailtoLink
                      email={profile.email}
                      subject={profile.emailSubject}
                      className={cardClass}
                    >
                      {cardContent}
                    </MailtoLink>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {cardContent}
                    </a>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
