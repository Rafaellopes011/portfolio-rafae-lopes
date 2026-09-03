import { profile } from "./profile";

/**
 * Ajuste `url` para o domínio final na Vercel antes do deploy.
 * Ex.: "https://rafaellopes.vercel.app"
 */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafael-lopes.vercel.app",
  title: `${profile.name} | Full Stack Developer`,
  shortTitle: profile.name,
  description:
    "Portfólio de Rafael Lopes — Full Stack Developer. Aplicações web construídas de ponta a ponta com Java, Spring, Angular, React, Node.js, SQL Server e PostgreSQL.",
  locale: "pt_BR",
  keywords: [
    "Rafael Lopes",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Java",
    "Spring",
    "Node.js",
    "Python",
    "React",
    "Angular",
    "TypeScript",
    "PostgreSQL",
    "OpenAI",
    "Desenvolvedor Fortaleza",
  ],
};

export interface NavItem {
  label: string;
  href: string;
  /** id da seção na home, usado pelo scroll spy */
  section?: string;
}

export const navItems: NavItem[] = [
  { label: "Início", href: "/#inicio", section: "inicio" },
  { label: "Projetos", href: "/#projetos", section: "projetos" },
  { label: "Experiência", href: "/#experiencia", section: "experiencia" },
  { label: "Sobre", href: "/#sobre", section: "sobre" },
  { label: "Tecnologias", href: "/#tecnologias", section: "tecnologias" },
  { label: "Formação", href: "/#formacao", section: "formacao" },
  { label: "Certificações", href: "/#certificados", section: "certificados" },
  { label: "Contato", href: "/#contato", section: "contato" },
];
