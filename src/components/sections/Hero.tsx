import { ArrowRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { socialByID } from "@/data/social";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28"
    >
      {/* fundo: grade pontilhada + halo de acento */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_20%,transparent_100%)]" />
        <div className="glow absolute -top-40 left-1/2 h-[32rem] w-[50rem] -translate-x-1/2" />
        <div className="glow glow-2 absolute -right-24 top-32 hidden h-[24rem] w-[24rem] lg:block" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ---------------- retrato ---------------- */}
          <Reveal
            delay={120}
            className="order-first mx-auto w-full max-w-[13rem] sm:max-w-[15rem] lg:order-last lg:mx-0 lg:ml-auto lg:max-w-[23rem]"
          >
            <div className="crop-marks group relative">
              {/* moldura deslocada — profundidade sem sombra pesada */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full rounded-2xl border border-accent/25 lg:-bottom-4 lg:-left-4"
              />

              <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface-2">
                <div className="relative aspect-square lg:aspect-[4/5]">
                  <SafeImage
                    src={profile.photo}
                    alt={`Foto de ${profile.name}`}
                    priority
                    sizes="(max-width: 639px) 208px, (max-width: 1023px) 240px, 368px"
                    className="object-top transition-transform duration-700 md:group-hover:scale-[1.03]"
                    fallbackLabel="Salve sua foto em public/images/profile.jpg"
                  />
                </div>
                {/* véu de acento: integra a foto à paleta do site */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 mix-blend-overlay"
                />
              </div>
            </div>
          </Reveal>

          {/* ---------------- texto ---------------- */}
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.02em] text-ink-muted lg:justify-start">
                {profile.availabilityBadge ? (
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {profile.availabilityBadge}
                  </span>
                ) : null}
                <span
                  aria-hidden="true"
                  className="hidden text-ink-dim sm:inline"
                >
                  ·
                </span>
                <span className="text-ink-dim">{profile.location}</span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-[3rem] font-bold leading-[0.95] tracking-[-0.045em] text-ink sm:text-[4rem] lg:text-[4.75rem]">
                Rafael
                <br />
                <span className="text-gradient">Lopes</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
                <span
                  aria-hidden="true"
                  className="h-px w-8 shrink-0 bg-accent"
                />
                <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-ink sm:text-xl">
                  {profile.role}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted lg:mx-0">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                <ButtonLink href="/#projetos">
                  Ver projetos
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
                </ButtonLink>

                <ButtonLink
                  href={socialByID.linkedin.href}
                  variant="secondary"
                  external
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
