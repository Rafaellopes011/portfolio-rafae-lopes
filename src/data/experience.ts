export interface Experience {
  id: string;
  company: string;
  role: string;
  /** Ex.: "2025 — Atual" */
  period: string;
  /** Ex.: "Fortaleza, CE" ou "Remoto" */
  location?: string;
  /** Rótulo curto: "Pesquisa", "CLT", "Estágio", "Freelance"… */
  kind?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  /** Marca a experiência como atual (mostra o indicador pulsante). */
  current?: boolean;
}

/**
 * ------------------------------------------------------------------
 * COMO ADICIONAR UMA NOVA EXPERIÊNCIA
 * ------------------------------------------------------------------
 * Copie o bloco abaixo, preencha e coloque no TOPO do array
 * (a timeline é renderizada da mais recente para a mais antiga).
 *
 * {
 *   id: "empresa-cargo",
 *   company: "Nome da Empresa",
 *   role: "Cargo",
 *   period: "Jan 2025 — Atual",
 *   location: "Fortaleza, CE",
 *   kind: "CLT",
 *   current: true,
 *   description: "Uma ou duas frases sobre o contexto do trabalho.",
 *   responsibilities: [
 *     "Principal responsabilidade 1",
 *     "Principal responsabilidade 2",
 *   ],
 *   technologies: ["Java", "Spring", "PostgreSQL"],
 * },
 * ------------------------------------------------------------------
 */

export const experiences: Experience[] = [
  {
    id: "elevar-commerce",
    company: "Elevar Commerce",
    role: "Desenvolvedor Full Stack",
    period: "Fim de 2024 — Atual",
    kind: "E-commerce",
    current: true,
    description:
      "Atuação full stack em plataforma de e-commerce, do portal em Angular às APIs em Java/Spring e aos microsserviços em Node.js que dão suporte à operação.",
    responsibilities: [
      "Desenvolvimento do portal de e-commerce em Angular, com componentização e renderização no servidor (SSR).",
      "Implementação de APIs REST e regras de negócio no backend Java com Spring, persistindo em SQL Server.",
      "Manutenção e evolução de microsserviços em Node.js que apoiam a plataforma.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "Java",
      "Spring",
      "Node.js",
      "SQL Server",
    ],
  },
  {
    id: "unifor-ic",
    company: "Universidade de Fortaleza — UNIFOR",
    role: "Bolsista de Iniciação Científica",
    period: " Março de 2026 - Atual",
    location: "Fortaleza, CE",
    kind: "Pesquisa",
    current: true,
    description:
      "Selecionado pelo Edital de Equipes da Vice-Reitoria de Pesquisa para integrar equipe de projeto do Laboratório Azul, atuando na frente técnica de desenvolvimento.",
    responsibilities: [
      "Participação em projeto de pesquisa vinculado ao Laboratório Azul da Vice-Reitoria de Pesquisa.",
      "Atuação técnica em desenvolvimento de software dentro do escopo do projeto.",
      "Trabalho em equipe multidisciplinar sob orientação acadêmica.",
    ],
    technologies: ["Pesquisa aplicada", "Desenvolvimento de software"],
  },
];
