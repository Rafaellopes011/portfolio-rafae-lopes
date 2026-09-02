import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { renderEmphasis } from "@/lib/richText";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* ---------- retrato ---------- */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div
                aria-hidden="true"
                className="glow-duo absolute -inset-4 rounded-[1.75rem]"
              />
              <div className="card relative overflow-hidden p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[0.75rem]">
                  <SafeImage
                    src={profile.photo}
                    alt={`Foto de ${profile.name}`}
                    sizes="(max-width: 1024px) 90vw, 380px"
                    fallbackLabel="Salve sua foto em public/images/profile.jpg"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-base/85 via-base/5 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
                      {profile.name}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-muted">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ---------- texto ---------- */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Sobre mim"
              title={
                <>
                  As duas pontas,{" "}
                  <span className="text-gradient">um produto só</span>
                </>
              }
            />

            <div className="mt-8 space-y-5">
              {profile.about.map((paragraph, index) => (
                <Reveal key={index} delay={index * 90}>
                  <p className="text-[1.0625rem] leading-[1.75] text-ink-muted">
                    {renderEmphasis(paragraph)}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <ul className="mt-9 flex flex-wrap gap-2">
                {profile.aboutHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface-2/60 px-3 py-2 text-[0.8125rem] text-ink-muted transition-colors duration-300 hover:border-accent/30 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
