/**
 * Dados pessoais e de posicionamento.
 * Edite este arquivo para atualizar nome, headline, bio e foto.
 */

export const profile = {
  name: "Rafael Lopes",
  shortName: "Rafael",
  initials: "RL",
  role: "Software Developer",
  secondaryRole: "Full Stack Developer",
  headline: "Software Developer & Full Stack Developer",
  location: "Fortaleza, Ceará — Brasil",
  email: "rafaellopes250106@gmail.com",

  /** Assunto pré-preenchido no botão "Enviar e-mail" da seção Contato. */
  emailSubject: "Contato via portfólio",

  /** Foto de perfil — salve o arquivo em: public/images/profile.jpg */
  photo: "/images/profile.jpg",

  /**
   * Selo exibido no topo do Hero.
   * Deixe como string vazia ("") para não exibir nenhum selo.
   */
  availabilityBadge: "Disponível para novas oportunidades",

  /** Frase de apoio do Hero (1–2 linhas). */
  tagline:
    "Construo soluções completas de ponta a ponta — backend, frontend, banco de dados, integrações e regras de negócio — com Java (Spring), Node.js, Angular e React, em plataformas reais de e-commerce e em projetos próprios com inteligência artificial.",

  /** Estatísticas exibidas no rodapé do Hero. */
  heroStats: [
    { label: "Foco", value: "Backend & Frontend" },
    { label: "Atuação", value: "Full Stack" },
    { label: "Formação", value: "Ciência da Computação · 6º sem." },
  ],

  /** Seção "Sobre mim" — cada item é um parágrafo. */
  about: [
    "Sou **desenvolvedor de software com atuação Full Stack**, construindo soluções completas que envolvem backend, frontend, banco de dados, integrações e regras de negócio. No dia a dia, trabalho com **Java (Spring)**, **SQL Server**, **Node.js**, **Angular** e **React**, participando de diferentes etapas do desenvolvimento de um produto.",
    "Nos últimos projetos, atuei no desenvolvimento **end-to-end** de sistemas — de uma aplicação de **chat em tempo real** a uma plataforma de **e-commerce multi-tenant** —, passando por APIs, CRUDs, integrações, interfaces e as regras de negócio que sustentam cada fluxo.",
    "Atualmente sou estagiário na **Elevar Commerce**, onde atuo como Full Stack no desenvolvimento e na evolução de soluções de e-commerce, lidando com sistemas reais e demandas que atravessam toda a stack.",
    "Em paralelo, sou **bolsista de Iniciação Científica** na **UNIFOR**, integrando um projeto do **Laboratório Azul**, vinculado à Vice-Reitoria de Pesquisa, com atividades voltadas à pesquisa, inovação e desenvolvimento de soluções tecnológicas.",
    "Também mantenho projetos próprios com **inteligência artificial**, como o **AI BetScore**, plataforma de análise esportiva que integra React, Python, PostgreSQL/Neon e a API da OpenAI — da definição de contexto e prompts até a integração com as regras da aplicação.",
    "Em 2022, fui selecionado para a **Jornada Link**, da Link School of Business, integrando o único trio nordestino da edição, em uma experiência voltada a empreendedorismo, inovação e resolução de desafios.",
  ],

  /** Destaques rápidos exibidos como chips na seção Sobre. */
  aboutHighlights: [
    "Java & Spring",
    "SQL Server",
    "Node.js",
    "Angular & React",
    "APIs REST & integrações",
    "Regras de negócio",
    "Tempo real & multi-tenant",
    "IA aplicada a produto",
  ],
} as const;

export type Profile = typeof profile;
