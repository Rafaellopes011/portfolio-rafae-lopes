import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { socialByID } from "@/data/social";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StackDiagram } from "@/components/ui/StackDiagram";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* fundo: grade pontilhada + glow muito sutil */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_20%,transparent_100%)]" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[130px]" />
        <div className="absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-accent-2/[0.07] blur-[120px]" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          {/* ---------------- coluna de texto ---------------- */}
          <div>
            {profile.availabilityBadge ? (
              <Reveal>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2/60 px-3.5 py-1.5 text-xs font-medium text-ink-muted backdrop-blur">
                  <span
                    aria-hidden="true"
                    className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {profile.availabilityBadge}
                </span>
              </Reveal>
            ) : null}

            <Reveal delay={80}>
              <p
                className={`text-base text-ink-muted sm:text-lg ${
                  profile.availabilityBadge ? "mt-7" : ""
                }`}
              >
                Olá, eu sou{" "}
                <span className="font-semibold text-ink">{profile.name}</span>.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-2 font-[family-name:var(--font-display)] text-[2.6rem] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[3.6rem] xl:text-[4rem]">
                <span className="block text-ink">{profile.role}</span>
                <span className="text-gradient block">
                  &amp; {profile.secondaryRole}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="/#projetos">
                  Ver meus projetos
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </ButtonLink>

                <ButtonLink
                  href={socialByID.github.href}
                  variant="secondary"
                  external
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-ink-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </ButtonLink>

                <ButtonLink
                  href={socialByID.linkedin.href}
                  variant="ghost"
                  external
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
                {profile.heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-dim">
                      {stat.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-ink">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ---------------- coluna visual ---------------- */}
          <Reveal delay={200} className="lg:pl-4">
            <StackDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
