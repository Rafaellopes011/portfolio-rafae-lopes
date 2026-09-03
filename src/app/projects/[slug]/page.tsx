import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Github,
  Lock,
  Sparkles,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { site } from "@/data/site";
import { SafeImage } from "@/components/ui/SafeImage";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Gallery } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { StackChain } from "@/components/ui/StackChain";
import { ButtonLink } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  const description = `${project.subtitle} — ${project.description}`;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/projects/${project.slug}`,
      title: `${project.title} | ${project.subtitle}`,
      description,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${project.subtitle}`,
      description,
      images: [project.cover.src],
    },
  };
}

/** Cabeçalho reutilizável dos blocos do case study. */
function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
      {children}
    </h2>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const isPublic = project.repositoryVisibility === "public";

  return (
    <article className="pb-24">
      {/* ================= hero do case ================= */}
      <header className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_10%,transparent_100%)]" />
          <div className="glow absolute -top-32 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2" />
        </div>

        <div className="container-page relative">
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Todos os projetos
            </Link>
          </Reveal>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Reveal delay={60}>
                <p className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em] text-ink-dim">
                  {project.category}
                </p>
              </Reveal>

              <Reveal delay={110}>
                <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-gradient mt-3 font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
                  {project.subtitle}
                </p>
              </Reveal>

              <Reveal delay={210}>
                <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-muted">
                  {project.description}
                </p>
              </Reveal>
            </div>

            {/* meta + ações */}
            <Reveal delay={240} className="card p-6">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-dim">
                    Meu papel
                  </dt>
                  <dd className="mt-1.5 leading-relaxed text-ink">
                    {project.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-ink-dim">
                    Stack
                  </dt>
                  <dd className="mt-2 font-[family-name:var(--font-mono)] text-[0.8125rem] leading-relaxed text-ink-muted">
                    {project.technologies.join("  ·  ")}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {project.demoUrl ? (
                  <ButtonLink href={project.demoUrl} size="sm" external>
                    Demonstração
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </ButtonLink>
                ) : null}

                {isPublic && project.githubUrl ? (
                  <ButtonLink
                    href={project.githubUrl}
                    size="sm"
                    variant="secondary"
                    external
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Ver no GitHub
                  </ButtonLink>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2/40 px-4 py-2 text-[0.8125rem] font-medium text-ink-dim">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    Código privado
                  </span>
                )}
              </div>
            </Reveal>
          </div>

          {/* imagem principal */}
          <Reveal delay={280} className="mt-14">
            <BrowserFrame label={project.slug}>
              <div className="relative aspect-[16/9]">
                <SafeImage
                  src={project.cover.src}
                  alt={project.cover.alt}
                  priority
                  sizes="(max-width: 1024px) 96vw, 72rem"
                  className="object-top"
                  fallbackLabel={`Adicione o screenshot em public${project.cover.src}`}
                />
              </div>
            </BrowserFrame>
          </Reveal>
        </div>
      </header>

      <div className="container-page space-y-24 md:space-y-28">
        {/* ================= visão geral ================= */}
        <section>
          <Reveal>
            <BlockTitle>Visão geral</BlockTitle>
          </Reveal>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {project.longDescription.map((paragraph, index) => (
              <Reveal key={index} delay={index * 80}>
                <p className="text-[1rem] leading-[1.8] text-ink-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================= problema / solução ================= */}
        {project.problem || project.solution ? (
          <section className="grid gap-10 md:grid-cols-2 md:gap-14">
            {project.problem ? (
              <Reveal className="border-l-2 border-line-strong pl-6 md:pl-8">
                <span className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em] text-ink-dim">
                  Problema
                </span>
                <p className="mt-4 text-[1rem] leading-[1.8] text-ink-muted">
                  {project.problem}
                </p>
              </Reveal>
            ) : null}

            {project.solution ? (
              <Reveal delay={90} className="border-l-2 border-accent pl-6 md:pl-8">
                <span className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em] text-accent-soft">
                  Solução
                </span>
                <p className="mt-4 text-[1rem] leading-[1.8] text-ink-muted">
                  {project.solution}
                </p>
              </Reveal>
            ) : null}
          </section>
        ) : null}

        {/* ================= fluxo ================= */}
        {project.flow && project.flow.length > 0 ? (
          <section>
            <Reveal>
              <BlockTitle>Como funciona</BlockTitle>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
                O caminho percorrido desde a configuração do usuário até a
                análise devolvida pela plataforma.
              </p>
            </Reveal>

            <ol className="mt-9 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {project.flow.map((step, index) => (
                <Reveal
                  key={step.step}
                  delay={(index % 3) * 70}
                  as="li"
                  className="border-t border-line pt-5"
                >
                  <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1rem] font-bold leading-snug text-ink">
                    {step.step}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-muted">
                    {step.detail}
                  </p>
                </Reveal>
              ))}
            </ol>
          </section>
        ) : null}

        {/* ================= funcionalidades ================= */}
        <section>
          <Reveal>
            <BlockTitle>Principais funcionalidades</BlockTitle>
          </Reveal>

          <ul className="mt-9 grid gap-x-12 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={(index % 2) * 70}
                as="li"
                className="border-b border-line py-5"
              >
                <h3 className="flex items-start gap-2.5 text-[0.9375rem] font-semibold text-ink">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {feature.title}
                </h3>
                <p className="mt-2 pl-[1.625rem] text-[0.875rem] leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ================= stack ================= */}
        <section>
          <Reveal>
            <BlockTitle>Arquitetura</BlockTitle>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
              As camadas do projeto, na ordem em que a aplicação as atravessa.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-9">
            <StackChain groups={project.stack} />
          </Reveal>

          {project.technicalHighlights &&
          project.technicalHighlights.length > 0 ? (
            <Reveal delay={120} className="mt-14 border-t border-line pt-9">
              <h3 className="flex items-center gap-2.5 text-[1rem] font-semibold text-ink">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                O que implementei
              </h3>
              <ul className="mt-5 grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
                {project.technicalHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </section>

        {/* ================= galeria ================= */}
        {project.gallery.length > 0 ? (
          <section>
            <Reveal>
              <BlockTitle>Galeria</BlockTitle>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
                Telas reais da aplicação. Clique em qualquer imagem para
                ampliar.
              </p>
            </Reveal>

            <div className="mt-9">
              <Gallery images={project.gallery} />
            </div>
          </section>
        ) : null}

        {/* ================= código ================= */}
        <section>
          <Reveal className="card relative overflow-hidden p-7 md:p-9">
            <div
              aria-hidden="true"
              className="glow glow-2 absolute -left-20 -top-20 h-52 w-52"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-xl font-bold text-ink sm:text-2xl">
                  {isPublic ? (
                    <>
                      <Github className="h-5 w-5 text-accent" aria-hidden="true" />
                      Código-fonte
                    </>
                  ) : (
                    <>
                      <Lock className="h-5 w-5 text-accent" aria-hidden="true" />
                      Código-fonte privado
                    </>
                  )}
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {isPublic
                    ? "O repositório deste projeto está disponível publicamente no GitHub."
                    : (project.privateCodeNote ??
                      "Projeto com código-fonte privado. A apresentação demonstra suas funcionalidades, interface e conceitos técnicos sem exposição do código.")}
                </p>
              </div>

              {isPublic && project.githubUrl ? (
                <ButtonLink href={project.githubUrl} external>
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Ver repositório
                </ButtonLink>
              ) : (
                <ButtonLink href="/#contato" variant="secondary">
                  Falar sobre o projeto
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </section>

        {/* ================= navegação ================= */}
        <Reveal className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-10">
          <ButtonLink href="/projects" variant="secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Todos os projetos
          </ButtonLink>
          <ButtonLink href="/#contato">Entrar em contato</ButtonLink>
        </Reveal>
      </div>
    </article>
  );
}
