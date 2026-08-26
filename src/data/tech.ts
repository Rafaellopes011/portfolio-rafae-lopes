export interface TechCategory {
  id: string;
  title: string;
  /** Uma linha explicando o que eu faço com essa categoria. */
  summary: string;
  items: string[];
  /** Categoria principal recebe destaque visual. */
  primary?: boolean;
}

export const techCategories: TechCategory[] = [
  {
    id: "backend",
    title: "Backend",
    summary: "Onde eu construo a regra de negócio, as APIs e a lógica do produto.",
    items: ["Java", "Spring", "Node.js", "Python", "APIs REST"],
    primary: true,
  },
  {
    id: "frontend",
    title: "Frontend",
    summary:
      "Interfaces componentizadas, responsivas e integradas à API — a parte do produto que o usuário sente.",
    items: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
    primary: true,
  },
  {
    id: "database",
    title: "Banco de Dados",
    summary: "Modelagem, consultas e persistência em bancos relacionais.",
    items: ["SQL Server", "PostgreSQL", "Neon"],
  },
  {
    id: "ai",
    title: "Inteligência Artificial",
    summary: "LLMs integrados ao produto como parte da regra de negócio.",
    items: [
      "OpenAI / ChatGPT API",
      "Integração com LLMs",
      "Engenharia de prompts",
    ],
  },
  {
    id: "tools",
    title: "Ferramentas",
    summary: "Versionamento, colaboração e teste de integrações.",
    items: ["Git", "GitHub", "GitLab", "Postman", "Integração de APIs"],
  },
];
