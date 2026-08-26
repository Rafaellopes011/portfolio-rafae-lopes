import { ArrowRight } from "lucide-react";
import { featuredProjects, projects } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const hasMore = projects.length > 0;

  return (
    <section id="projetos" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-page">
        <SectionTitle
          eyebrow="Projetos"
          title={
            <>
              Aplicações reais,{" "}
              <span className="text-gradient">construídas ponta a ponta</span>
            </>
          }
          description="Cada projeto abaixo tem uma página própria com o case study completo — problema, solução, arquitetura e telas."
        />

        <div className="mt-14 space-y-8 md:mt-16 md:space-y-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reversed={index % 2 === 1}
              priority={index === 0}
            />
          ))}
        </div>

        {hasMore ? (
          <Reveal delay={120}>
            <div className="mt-12 flex justify-center">
              <ButtonLink href="/projects" variant="secondary">
                Ver todos os projetos
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </ButtonLink>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
