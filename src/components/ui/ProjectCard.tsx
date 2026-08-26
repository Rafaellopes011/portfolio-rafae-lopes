import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { SafeImage } from "./SafeImage";
import { BrowserFrame } from "./BrowserFrame";
import { TechBadge } from "./TechBadge";
import { Reveal } from "./Reveal";

interface ProjectCardProps {
  project: Project;
  /** Inverte a ordem das colunas para criar ritmo na lista. */
  reversed?: boolean;
  priority?: boolean;
}

export function ProjectCard({
  project,
  reversed = false,
  priority = false,
}: ProjectCardProps) {
  const isPublic = project.repositoryVisibility === "public";
  const detailsHref = `/projects/${project.slug}`;

  return (
    <article className="card hairline-top overflow-hidden">
      <div
        className={`grid gap-0 lg:grid-cols-2 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* ---------- visual ---------- */}
        <Reveal className="relative overflow-hidden bg-surface-2/40 p-6 sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-accent-2/[0.07]"
          />
          <Link
            href={detailsHref}
            tabIndex={-1}
            aria-hidden="true"
            className="group relative block"
          >
            <BrowserFrame
              label={`${project.slug}`}
              className="transition-transform duration-500 group-hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10]">
                <SafeImage
                  src={project.cover.src}
                  alt={project.cover.alt}
                  priority={priority}
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-top group-hover:scale-[1.02]"
                  fallbackLabel={`Adicione o screenshot em public${project.cover.src}`}
                />
              </div>
            </BrowserFrame>
          </Link>
        </Reveal>

        {/* ---------- conteúdo ---------- */}
        <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
          <Reveal delay={80}>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-soft">
                {project.category}
              </span>
              {project.featured ? (
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-dim">
                  Projeto em destaque
                </span>
              ) : null}
            </div>

            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              <Link
                href={detailsHref}
                className="transition-colors duration-300 hover:text-accent-soft"
              >
                {project.title}
              </Link>
            </h3>
            <p className="mt-1.5 text-sm font-medium text-accent-soft">
              {project.subtitle}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-[0.9375rem] leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[0.875rem] text-ink-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={250}>
            <ul className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <TechBadge label={tech} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-2.5 border-t border-line pt-6">
              <Link
                href={detailsHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-[0.8125rem] font-semibold text-white shadow-[0_10px_30px_-14px_var(--color-accent)] transition-all duration-300 hover:bg-accent-deep hover:-translate-y-0.5"
              >
                Ver detalhes
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2/70 px-4 py-2.5 text-[0.8125rem] font-semibold text-ink transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5"
                >
                  Demonstração
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-ink-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ) : null}

              {isPublic && project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2/70 px-4 py-2.5 text-[0.8125rem] font-semibold text-ink transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              ) : (
                <span
                  title={project.privateCodeNote}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2/40 px-4 py-2.5 text-[0.8125rem] font-medium text-ink-dim"
                >
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  Código privado
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
