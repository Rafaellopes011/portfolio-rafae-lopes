import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { allProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos desenvolvidos por Rafael Lopes — aplicações Full Stack, integrações com IA e interfaces em React e Angular.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="pb-24">
      <header className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_10%,transparent_100%)]" />
          <div className="glow absolute -top-32 left-1/2 h-[24rem] w-[42rem] -translate-x-1/2" />
        </div>

        <div className="container-page relative">
          <Reveal>
            <ButtonLink href="/" variant="ghost" size="sm" className="-ml-3">
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Voltar ao início
            </ButtonLink>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-7 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
              Projetos
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-muted">
              Aplicações que construí do backend à interface. Cada uma tem uma
              página de detalhes com o problema, a solução, a arquitetura e as
              telas reais.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="container-page space-y-8 md:space-y-10">
        {allProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            reversed={index % 2 === 1}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
