import { profile } from "./profile";

/**
 * Ajuste `url` para o domínio final na Vercel antes do deploy.
 * Ex.: "https://rafaellopes.vercel.app"
 */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafael-lopes.vercel.app",
  title: `${profile.name} | Software & Full Stack Developer`,
  shortTitle: profile.name,
  description:
    "Portfólio de Rafael Lopes — Software Developer com atuação Full Stack. Frontend, backend, banco de dados e integrações: Java, Spring, Node.js, Python, Angular, React, SQL Server, PostgreSQL e IA aplicada a produto.",
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
  { label: "Sobre", href: "/#sobre", section: "sobre" },
  { label: "Experiência", href: "/#experiencia", section: "experiencia" },
  { label: "Projetos", href: "/#projetos", section: "projetos" },
  { label: "Tecnologias", href: "/#tecnologias", section: "tecnologias" },
  { label: "Formação", href: "/#formacao", section: "formacao" },
  { label: "Certificados", href: "/#certificados", section: "certificados" },
  { label: "Contato", href: "/#contato", section: "contato" },
];
