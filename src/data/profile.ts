/**
 * Dados pessoais e de posicionamento.
 * Edite este arquivo para atualizar nome, headline, bio e foto.
 */

export const profile = {
  name: "Rafael Lopes",
  shortName: "Rafael",
  initials: "RL",
  role: "Full Stack Developer",
  headline: "Full Stack Developer",
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

  /** Frase de apoio do Hero — uma linha, sem repetir a stack completa. */
  tagline:
    "Construo aplicações web de ponta a ponta, com foco em Java/Spring, Angular, React e Node.js.",

  /** Seção "Sobre mim" — cada item é um parágrafo. Máximo de dois. */
  about: [
    "Sou desenvolvedor Full Stack e gosto das duas pontas. Modelar os dados, escrever a regra de negócio e montar a API me interessa tanto quanto construir a interface que vai consumir tudo isso — é o que me deixa tocar um produto do começo ao fim, em vez de só uma camada dele.",
    "Estudo Ciência da Computação na UNIFOR, onde sou bolsista de Iniciação Científica no Laboratório Azul. Trabalho na Elevar Commerce, com sistemas de e-commerce em produção, e fora do expediente mantenho projetos próprios — normalmente para testar alguma ideia que envolve IA aplicada a produto.",
  ],
} as const;

export type Profile = typeof profile;
