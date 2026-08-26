/**
 * ------------------------------------------------------------------
 * PROJETOS
 * ------------------------------------------------------------------
 * Fonte única de verdade para os cards da Home, a página /projects
 * e as páginas de case study em /projects/[slug].
 *
 * Regra importante:
 *  - repositoryVisibility: "public"  -> exige githubUrl preenchido
 *  - repositoryVisibility: "private" -> NENHUM link de repositório é
 *    exibido; a UI mostra "Código privado".
 * ------------------------------------------------------------------
 */

export type RepositoryVisibility = "public" | "private";

export type ProjectFocus = "fullstack" | "frontend" | "backend";

export interface ProjectImage {
  /** Caminho a partir de /public. */
  src: string;
  alt: string;
  caption?: string;
  /** Imagens marcadas como "wide" ocupam duas colunas na galeria. */
  wide?: boolean;
  /**
   * Prints verticais (telas de celular). Renderizados inteiros, sem corte,
   * em moldura retrato — não use junto com "wide".
   */
  portrait?: boolean;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectStackGroup {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  focus: ProjectFocus;
  featured: boolean;
  /** Ordem de exibição (menor primeiro). */
  order: number;
  /** Meu papel no projeto. */
  role: string;
  /** Descrição curta — usada no card. */
  description: string;
  /** Parágrafos da visão geral no case study. */
  longDescription: string[];
  /** Stack resumida exibida no card. */
  technologies: string[];
  /** Stack detalhada por camada, exibida no case study. */
  stack: ProjectStackGroup[];
  /** Bullets de destaque exibidos no card. */
  highlights: string[];
  /** Blocos "o problema" / "a solução" do case study. */
  problem?: string;
  solution?: string;
  /** Fluxo passo a passo, renderizado como diagrama horizontal. */
  flow?: { step: string; detail: string }[];
  /** Funcionalidades apresentadas em grid no case study. */
  features: ProjectFeature[];
  /** O que este projeto demonstra tecnicamente. */
  technicalHighlights?: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  repositoryVisibility: RepositoryVisibility;
  githubUrl?: string;
  demoUrl?: string;
  /** Nota exibida junto ao selo de código privado. */
  privateCodeNote?: string;
}

export const projects: Project[] = [
  {
    slug: "ai-betscore",
    title: "AI BetScore",
    subtitle: "Plataforma de Inteligência Artificial para Análises Esportivas",
    category: "Full Stack · IA",
    focus: "fullstack",
    featured: true,
    order: 1,
    role: "Desenvolvedor Full Stack — frontend, backend, banco de dados e integração com IA",
    description:
      "Aplicação Full Stack que usa inteligência artificial como apoio à análise esportiva. O usuário conversa com uma IA especializada, configura o perfil das análises e recebe leituras de partidas, mercados, odds e estatísticas.",
    longDescription: [
      "A AI BetScore é uma plataforma que aplica inteligência artificial à análise esportiva. Ela foi pensada para dois públicos: o usuário comum, que quer entender uma partida sem garimpar estatística manualmente, e o tipster, que precisa de ferramentas mais avançadas para estruturar suas análises.",
      "O núcleo da experiência é um chat com uma IA especializada em contexto esportivo. Por trás dele existe um backend em Python responsável por autenticação, controle de planos, persistência das configurações do usuário e pela orquestração das chamadas à OpenAI com o contexto correto.",
      "Cada usuário pode moldar o comportamento da IA: faixa de odds, quantidade de sugestões de odds altas, esportes, ligas acompanhadas e recursos avançados como gestão de banca. Essas preferências ficam persistidas e passam a fazer parte do contexto enviado ao modelo.",
    ],
    technologies: ["React", "Python", "OpenAI", "PostgreSQL", "Neon"],
    stack: [
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["Python"] },
      { label: "Inteligência Artificial", items: ["OpenAI / ChatGPT API"] },
      { label: "Banco de Dados", items: ["PostgreSQL", "Neon"] },
    ],
    highlights: [
      "Chat com IA especializada em análise esportiva",
      "Configuração dinâmica do comportamento da IA",
      "Autenticação, planos e controle de acesso",
      "Integração OpenAI + engenharia de prompts",
    ],
    problem:
      "Analisar uma partida exige cruzar muita informação: estatísticas, histórico, mercados disponíveis e movimentação de odds. Esse trabalho é lento, disperso entre várias fontes e difícil de repetir com consistência — tanto para quem aposta por conta própria quanto para quem produz análises para outras pessoas.",
    solution:
      "A AI BetScore centraliza parte desse processo em um único lugar. O usuário define seus critérios uma vez, conversa com uma IA especializada em contexto esportivo e recebe leituras organizadas de partidas, mercados e odds — como apoio à decisão, e não como promessa de resultado.",
    flow: [
      {
        step: "Usuário",
        detail: "Autentica na plataforma e acessa sua área restrita, com recursos liberados conforme o plano.",
      },
      {
        step: "Configura preferências",
        detail: "Define faixa de odds, perfil de odds altas, esportes, ligas e recursos avançados como gestão de banca.",
      },
      {
        step: "Conversa com a IA",
        detail: "Faz perguntas em linguagem natural sobre partidas, mercados, odds e estatísticas.",
      },
      {
        step: "IA processa o contexto",
        detail: "O backend monta o contexto da análise a partir das preferências persistidas e do domínio esportivo.",
      },
      {
        step: "Análise esportiva",
        detail: "A resposta volta como leitura estruturada de dados, servindo de apoio à decisão do usuário.",
      },
    ],
    features: [
      {
        title: "Chat com Inteligência Artificial",
        description:
          "Interface de conversa onde o usuário pergunta em linguagem natural sobre partidas, mercados e odds.",
      },
      {
        title: "IA especializada em esportes",
        description:
          "O modelo opera dentro de um contexto de domínio esportivo definido pela aplicação, não como chat genérico.",
      },
      {
        title: "Análise de partidas e mercados",
        description:
          "Leitura de confrontos e dos mercados disponíveis, organizada para consumo rápido.",
      },
      {
        title: "Análise e interpretação de odds",
        description:
          "Interpretação das odds dentro da faixa configurada pelo próprio usuário.",
      },
      {
        title: "Consulta de estatísticas",
        description:
          "Consulta e interpretação de estatísticas como insumo das análises geradas.",
      },
      {
        title: "Sugestões baseadas em dados",
        description:
          "Sugestões apresentadas como apoio à decisão, sempre a partir de dados — nunca como garantia de resultado.",
      },
      {
        title: "Configuração personalizada da IA",
        description:
          "Painel dedicado para ajustar como a IA deve conduzir as análises daquele usuário.",
      },
      {
        title: "Perfil e faixa de odds",
        description:
          "Definição de odd mínima e máxima e de quantas sugestões de odds altas devem entrar no pacote final.",
      },
      {
        title: "Seleção de esportes e ligas",
        description:
          "Escolha das competições acompanhadas, separadas entre ligas principais e alternativas.",
      },
      {
        title: "Perfis de usuário e tipsters",
        description:
          "Recursos para o usuário comum e recursos específicos para quem atua como tipster.",
      },
      {
        title: "Gestão de banca",
        description:
          "Recurso avançado com valor de banca e definição de unidade em percentual.",
      },
      {
        title: "Sistema de planos",
        description:
          "Planos que determinam a cobertura de ligas e quais recursos ficam disponíveis na conta.",
      },
      {
        title: "Autenticação e área restrita",
        description:
          "Login, sessão e proteção das rotas internas da plataforma.",
      },
      {
        title: "Dashboard próprio",
        description:
          "Workspace interno com chat, bets e configurações da IA em uma navegação única.",
      },
    ],
    technicalHighlights: [
      "Interface completa desenvolvida em React, do site público ao workspace interno",
      "Backend em Python responsável por regras de negócio, autenticação e orquestração da IA",
      "Persistência em PostgreSQL hospedado na Neon",
      "Integração com a OpenAI / ChatGPT API dentro do fluxo da aplicação",
      "Engenharia de prompts e definição de contexto de domínio para análise esportiva",
      "Configuração da IA persistida por usuário e aplicada nas análises seguintes",
      "Controle de acesso por plano, delimitando recursos e cobertura de ligas",
      "Gestão de banca como recurso avançado com parâmetros definidos pelo usuário",
    ],
    cover: {
      src: "/images/betscore/01-landing.png",
      alt: "Landing page da AI BetScore com o título 'Palpites de Apostas Gerados por IA'",
    },
    gallery: [
      {
        src: "/images/betscore/01-landing.png",
        alt: "Landing page da AI BetScore com o título 'Palpites de Apostas Gerados por IA'",
        caption: "Landing page — apresentação da plataforma",
        wide: true,
      },
      {
        src: "/images/betscore/04-chat.png",
        alt: "Workspace interno da AI BetScore com o chat de inteligência artificial aberto",
        caption: "Workspace — chat com a IA BetScore",
        wide: true,
      },
      {
        src: "/images/betscore/05-configuracoes.png",
        alt: "Tela de configurações da IA com perfil de odds, esportes, ligas e gestão de banca",
        caption: "Configurações da IA — odds, ligas e recursos avançados",
        wide: true,
      },
      {
        src: "/images/betscore/03-login.png",
        alt: "Tela de login da AI BetScore",
        caption: "Autenticação",
      },
      {
        src: "/images/betscore/02-quem-somos.png",
        alt: "Página institucional 'Quem Somos' da AI BetScore",
        caption: "Página institucional",
      },
    ],
    repositoryVisibility: "private",
    privateCodeNote:
      "Projeto com código-fonte privado. A apresentação demonstra suas funcionalidades, interface e conceitos técnicos sem exposição do código.",
  },

  {
    slug: "personal-copilot",
    title: "Personal Copilot",
    subtitle: "Painel do personal e app do aluno, com IA no acompanhamento",
    category: "Frontend",
    focus: "frontend",
    featured: true,
    order: 2,
    role: "Desenvolvedor Frontend — produto, interface e arquitetura de componentes",
    description:
      "Produto de acompanhamento de treino com duas interfaces conectadas: um painel desktop para o personal trainer e um app mobile para o aluno, com alertas e sugestões de treino geradas por IA.",
    longDescription: [
      "Personal Copilot é um produto pensado para a relação entre personal trainer e aluno — e não apenas uma tela de treino. São duas interfaces distintas sobre a mesma base de dados: um painel desktop, onde o personal gerencia a carteira de alunos, e um app mobile, onde o aluno registra o dia a dia.",
      "O fio condutor é o ciclo de acompanhamento: o aluno faz o check-in semanal (peso, água, sono e fotos), esses dados alimentam a evolução de carga por grupo muscular, e a IA usa esse histórico para levantar alertas ('sem evolução de carga há 3 semanas', 'frequência em queda') e sugerir o próximo treino — sempre com aprovação do personal antes de chegar ao aluno.",
      "Construí o produto inteiro em React com um design system autoral em CSS — sem framework de UI e sem biblioteca de gráficos. O desafio técnico foi manter duas experiências muito diferentes, um painel denso de dados e um app mobile enxuto, coerentes sobre a mesma modelagem e com o mesmo vocabulário visual.",
    ],
    technologies: ["React", "Vite", "CSS"],
    stack: [
      { label: "Frontend", items: ["React 18", "Vite"] },
      { label: "Estilização", items: ["CSS puro", "Design system autoral"] },
      { label: "Estado & dados", items: ["Modelagem local", "localStorage"] },
    ],
    highlights: [
      "Duas interfaces no mesmo produto: painel desktop e app mobile",
      "IA aplicada ao acompanhamento: alertas e sugestão de treino",
      "Design system autoral em CSS, sem framework de UI",
      "Fluxo completo de check-in, evolução e aprovação de treino",
    ],
    problem:
      "Informações de treino e de acompanhamento de aluno costumam ficar espalhadas em planilhas, prints e mensagens. Falta um lugar onde personal e aluno enxerguem a mesma coisa, de forma organizada e fácil de consultar no celular.",
    solution:
      "Um produto com duas pontas: o aluno registra o check-in semanal no app, o personal enxerga tudo consolidado no painel, e a IA transforma esse histórico em alertas e sugestões de treino que só chegam ao aluno depois da aprovação do profissional.",
    flow: [
      {
        step: "Cadastro do aluno",
        detail:
          "Wizard em 6 etapas: dados pessoais, avaliação física, treino, coleta da IA, conquistas e envio do acesso.",
      },
      {
        step: "Check-in do aluno",
        detail:
          "No app, o aluno envia peso, água, sono e as 3 fotos da semana.",
      },
      {
        step: "Leitura da IA",
        detail:
          "O histórico vira evolução de carga, comparação visual e alertas automáticos.",
      },
      {
        step: "Aprovação do personal",
        detail:
          "O treino sugerido é editado e aprovado antes de chegar ao aluno.",
      },
    ],
    features: [
      {
        title: "Painel de alunos",
        description:
          "Carteira completa com status de cada aluno (evoluindo, atenção, estagnado), carga atual, último check-in e sparkline de evolução.",
      },
      {
        title: "Alertas gerados por IA",
        description:
          "Sinalização automática de estagnação de carga, queda de frequência e check-in atrasado, com atalho direto para o aluno.",
      },
      {
        title: "Evolução de carga por grupo",
        description:
          "Progressão de peito, costas, ombros, bíceps e tríceps ao longo de 12 semanas, com variação percentual no período.",
      },
      {
        title: "Comparação visual de fotos",
        description:
          "Slider entre semanas com leitura automática da IA sobre o que mudou — apresentada como sugestão, não como veredito.",
      },
      {
        title: "Treino sugerido pela IA",
        description:
          "Montagem do treino a partir do objetivo e da frequência, editável série a série e sujeito à aprovação do personal.",
      },
      {
        title: "App do aluno",
        description:
          "Interface mobile com metas do dia, execução do treino, progresso, conquistas e envio do check-in semanal.",
      },
      {
        title: "Gamificação",
        description:
          "Sequência de dias ativos e medalhas por consistência, hidratação, sono e volume de treinos.",
      },
      {
        title: "Design system autoral",
        description:
          "Tipografia, cores e componentes definidos em CSS próprio, consistentes entre o painel desktop e o app mobile.",
      },
    ],
    technicalHighlights: [
      "Duas aplicações (painel e app do aluno) sobre a mesma modelagem de dados",
      "Arquitetura de componentes React organizada por domínio, não por tipo de arquivo",
      "Design system construído em CSS puro, sem framework de UI",
      "Modelagem de dados e persistência resolvidas inteiramente no cliente",
      "Visualizações de evolução desenhadas na mão, sem biblioteca de gráficos",
    ],
    cover: {
      src: "/images/gym-app/01-alunos.png",
      alt: "Painel de alunos do Personal Copilot",
    },
    gallery: [
      {
        src: "/images/gym-app/01-alunos.png",
        alt: "Painel com a carteira de alunos e o status de cada um",
        caption: "Painel do personal — carteira de alunos e status de evolução",
        wide: true,
      },
      {
        src: "/images/gym-app/02-aluno-evolucao.png",
        alt: "Evolução de carga por grupo muscular ao longo de 12 semanas",
        caption: "Evolução de carga por grupo muscular",
        wide: true,
      },
      {
        src: "/images/gym-app/03-comparacao-fotos.png",
        alt: "Comparação de fotos entre semanas com análise da IA",
        caption: "Comparação visual entre semanas, com leitura da IA",
        wide: true,
      },
      {
        src: "/images/gym-app/04-treino-ia.png",
        alt: "Treino sugerido pela IA aguardando aprovação do personal",
        caption: "Treino sugerido pela IA — editável e sujeito a aprovação",
        wide: true,
      },
      {
        src: "/images/gym-app/05-check-ins.png",
        alt: "Histórico de check-ins semanais do aluno",
        caption: "Histórico de check-ins semanais",
      },
      {
        src: "/images/gym-app/06-coleta-ia.png",
        alt: "Configuração dos dados que a IA solicita ao aluno",
        caption: "Configuração da coleta da IA e conquistas",
      },
      {
        src: "/images/gym-app/07-alertas.png",
        alt: "Lista de alertas gerados automaticamente pela IA",
        caption: "Alertas automáticos por aluno",
      },
      {
        src: "/images/gym-app/08-cadastro-aluno.png",
        alt: "Wizard de cadastro de novo aluno em seis etapas",
        caption: "Cadastro de aluno em 6 etapas",
      },
      {
        src: "/images/gym-app/09-app-hoje.png",
        alt: "Tela inicial do app do aluno com as metas do dia",
        caption: "App do aluno — metas do dia",
        portrait: true,
      },
      {
        src: "/images/gym-app/10-app-treino.png",
        alt: "Execução do treino no app, com registro de séries e cargas",
        caption: "Execução do treino, série a série",
        portrait: true,
      },
      {
        src: "/images/gym-app/11-app-progresso.png",
        alt: "Gráficos de progresso de carga, peso e água no app do aluno",
        caption: "Progresso das últimas 12 semanas",
        portrait: true,
      },
      {
        src: "/images/gym-app/12-app-conquistas.png",
        alt: "Tela de conquistas e medalhas do aluno",
        caption: "Conquistas e sequência de dias ativos",
        portrait: true,
      },
      {
        src: "/images/gym-app/13-app-checkin.png",
        alt: "Envio do check-in semanal com fotos e medidas",
        caption: "Check-in semanal enviado pelo aluno",
        portrait: true,
      },
    ],
    repositoryVisibility: "public",
    githubUrl: "https://github.com/Rafaellopes011/Academy-gym",
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

export const allProjects = [...projects].sort((a, b) => a.order - b.order);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
