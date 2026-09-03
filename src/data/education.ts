export interface EducationItem {
  id: string;
  institution: string;
  course: string;
  period: string;
  location?: string;
  description: string;
  activities?: string[];
}

export const education: EducationItem[] = [
  {
    id: "unifor-cc",
    institution: "Universidade de Fortaleza — UNIFOR",
    course: "Ciência da Computação",
    // Atualize o semestre a cada início de período letivo.
    period: "6º semestre — em andamento",
    location: "Fortaleza, CE",
    description:
      "Base em algoritmos, estruturas de dados, engenharia de software, bancos de dados e arquitetura de sistemas.",
    activities: [
      "Desenvolvimento de aplicações completas como prática de curso e projetos próprios",
      "Atuação em pesquisa acadêmica como bolsista de Iniciação Científica",
    ],
  },
];

export interface ResearchItem {
  id: string;
  title: string;
  institution: string;
  program: string;
  lab: string;
  description: string;
  points: string[];
}

export const research: ResearchItem = {
  id: "ic-unifor",
  title: "Iniciação Científica",
  institution: "Universidade de Fortaleza — UNIFOR",
  program: "Edital de Equipes — Vice-Reitoria de Pesquisa",
  lab: "Laboratório Azul",
  description:
    "Bolsista selecionado pelo Edital de Equipes, integrando projeto do Laboratório Azul da Vice-Reitoria de Pesquisa da UNIFOR, na frente técnica de desenvolvimento.",
  points: [
    "Seleção por edital competitivo de formação de equipes de pesquisa",
    "Atuação técnica em desenvolvimento dentro de um contexto de pesquisa aplicada",
  ],
};

export interface ProgramItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

/** Programas e seleções fora da graduação. */
export const programs: ProgramItem[] = [
  {
    id: "jornada-link",
    title: "Jornada Link",
    organization: "Link School of Business",
    year: "2022",
    description:
      "Selecionado para a Jornada Link, integrando o único trio nordestino da edição — programa voltado a empreendedorismo, inovação e resolução de desafios.",
  },
];
