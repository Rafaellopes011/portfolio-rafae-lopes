import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { SafeImage } from "./SafeImage";
import { BrowserFrame } from "./BrowserFrame";
import { Reveal } from "./Reveal";

interface ProjectCardProps {
  project: Project;
  /** Numeral editorial exibido no canto do card. */
  index?: number;
  priority?: boolean;
}

/**
 * Card grande de projeto: o screenshot ocupa a largura inteira e o texto
 * fica abaixo dele. É o elemento com maior peso visual do site.
 */
export function ProjectCard({
  project,
  index,
  priority = false,
}: ProjectCardProps) {
  const isPublic = project.repositoryVisibility === "public";
  const detailsHref = `/projects/${project.slug}`;

  return (
    <Reveal
      as="article"
      className="card group relative overflow-hidden transition-[border-color,box-shadow] duration-500 md:hover:border-accent/35 md:hover:shadow-[0_40px_90px_-60px_var(--color-accent)]"
    >
      {/* ---------- screenshot ---------- */}
      <Link
        href={detailsHref}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block bg-surface-2/50 p-4 sm:p-6 md:p-8"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-accent-2/[0.08]"
        />
        <div className="crop-marks relative">
          <BrowserFrame
            label={project.slug}
            className="transition-transform duration-500 md:group-hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <SafeImage
                src={project.cover.src}
                alt={project.cover.alt}
                priority={priority}
                sizes="(max-width: 1024px) 92vw, 68rem"
                className="object-top"
                fallbackLabel={`Adicione o screenshot em public${project.cover.src}`}
              />
            </div>
          </BrowserFrame>
        </div>
      </Link>

      {/* ---------- conteúdo ---------- */}
      <div className="relative border-t border-line p-6 sm:p-8 md:p-10">
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div>
            {index ? (
              <span
                aria-hidden="true"
                className="numeral-ghost block select-none font-[family-name:var(--font-display)] text-[3.25rem] font-bold leading-[0.8] sm:text-[4rem]"
              >
                {String(index).padStart(2, "0")}
              </span>
            ) : null}

            <p className="mt-5 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em] text-ink-dim">
              {project.category}
            </p>

            <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] text-ink sm:text-[2.75rem] sm:leading-[1.05]">
              <Link
                href={detailsHref}
                className="transition-colors duration-300 hover:text-accent-soft"
              >
                {project.title}
              </Link>
            </h3>

            <p className="mt-2 text-[1.0625rem] font-medium text-accent-soft">
              {project.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.75] text-ink-muted">
              {project.description}
            </p>

            <p className="mt-6 font-[family-name:var(--font-mono)] text-[0.8125rem] text-ink-dim">
              {project.technologies.join("  ·  ")}
            </p>
          </div>

          {/* o que foi construído — sem repetir a stack */}
          {project.highlights.length > 0 ? (
            <ul className="space-y-2.5 lg:border-l lg:border-line lg:pl-10">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ink-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-line pt-7">
          <Link
            href={detailsHref}
            className="group/cta inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-14px_var(--color-accent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep"
          >
            Ver detalhes
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/demo inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2/70 px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              Demonstração
              <ArrowUpRight
                className="h-3.5 w-3.5 text-ink-dim transition-transform duration-300 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ) : null}

          {isPublic && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2/70 px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <span
              title={project.privateCodeNote}
              className="inline-flex items-center gap-2 px-1 text-sm font-medium text-ink-dim"
            >
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Código privado
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}
