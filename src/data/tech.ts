export interface TechCategory {
  id: string;
  title: string;
  items: string[];
}

/**
 * Lista completa da stack — este é o único lugar do site onde ela
 * aparece inteira. Hero, experiências e projetos citam só o que é
 * relevante ao próprio contexto.
 */
export const techCategories: TechCategory[] = [
  {
    id: "backend",
    title: "Backend",
    items: ["Java", "Spring", "Node.js", "Python", "APIs REST"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "database",
    title: "Banco de dados",
    items: ["SQL Server", "PostgreSQL", "Neon"],
  },
  {
    id: "ai",
    title: "Inteligência artificial",
    items: ["OpenAI / ChatGPT API", "Integração com LLMs", "Engenharia de prompts"],
  },
  {
    id: "tools",
    title: "Ferramentas",
    items: ["Git", "GitHub", "GitLab", "Postman"],
  },
];
