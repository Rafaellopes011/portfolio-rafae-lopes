import { ArrowRight } from "lucide-react";
import { featuredProjects, projects } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";

export function Projects() {
  const hasMore = projects.length > featuredProjects.length;

  return (
    <section id="projetos" className="scroll-mt-24 py-20 md:py-32">
      <div className="container-page">
        <SectionTitle
          index="01"
          title="Projetos"
          description="Aplicações que construí do banco de dados à interface. Cada uma tem uma página com o problema, a solução, a arquitetura e as telas reais."
          action={
            hasMore ? (
              <ButtonLink href="/projects" variant="secondary" size="sm">
                Ver todos
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </ButtonLink>
            ) : null
          }
        />

        <div className="mt-14 space-y-10 md:mt-16 md:space-y-14">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
              priority={index === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
