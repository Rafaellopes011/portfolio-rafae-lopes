export interface Certification {
  id: string;
  title: string;
  issuer: string;
  /** Ex.: "Fev 2025" */
  issued: string;
  /** Usado só para ordenar (AAAA-MM). */
  issuedAt: string;
  /** Código da credencial exibido pelo emissor. */
  credentialId: string;
  /**
   * Link público da credencial.
   * Deixe vazio ("") para exibir apenas o código, sem link.
   */
  credentialUrl?: string;
  /** Agrupa o certificado em uma trilha na seção. */
  track: "Frontend" | "Backend" | "Dados" | "Fundamentos";
}

/**
 * ------------------------------------------------------------------
 * COMO ADICIONAR UM CERTIFICADO
 * ------------------------------------------------------------------
 * Copie um bloco abaixo e preencha. A ordenação é automática
 * (mais recente primeiro), então a posição no array não importa.
 * ------------------------------------------------------------------
 */
const items: Certification[] = [
  {
    id: "alura-nodejs",
    title: "Node.js",
    issuer: "Alura",
    issued: "Jul 2026",
    issuedAt: "2026-07",
    credentialId: "a6db0eb5-285f-4915-b1ca-3a8d5b174d64",
    track: "Backend",
  },
  {
    id: "alura-angular-2026-05",
    title: "Angular",
    issuer: "Alura",
    issued: "Mai 2026",
    issuedAt: "2026-05",
    credentialId: "82bbdc29-0b3d-4bd7-883b-fd84dffafda0",
    track: "Frontend",
  },
  {
    id: "alura-rxjs-angular",
    title: "RxJS e Angular",
    issuer: "Alura",
    issued: "Abr 2026",
    issuedAt: "2026-04",
    credentialId: "7d2c135c-4eb6-4977-b68a-e460c25bd272",
    track: "Frontend",
  },
  {
    id: "alura-angular-2026-04",
    title: "Angular",
    issuer: "Alura",
    issued: "Abr 2026",
    issuedAt: "2026-04",
    credentialId: "fd8d4e42-518d-4129-b142-80985307829b",
    track: "Frontend",
  },
  {
    id: "alura-angular-14-a",
    title: "Angular 14",
    issuer: "Alura",
    issued: "Fev 2025",
    issuedAt: "2025-02",
    credentialId: "2ca4630d-6b93-45cd-8610-21fe4a1caf16",
    track: "Frontend",
  },
  {
    id: "alura-angular-14-b",
    title: "Angular 14",
    issuer: "Alura",
    issued: "Fev 2025",
    issuedAt: "2025-02",
    credentialId: "5db3714f-a06d-4ac3-835e-5dfff84938ab",
    track: "Frontend",
  },
  {
    id: "alura-typescript-pratica",
    title: "TypeScript na prática",
    issuer: "Alura",
    issued: "Fev 2025",
    issuedAt: "2025-02",
    credentialId: "8a980c2a-b705-4c45-b24d-a9dabf061c99",
    track: "Frontend",
  },
  {
    id: "alura-typescript-a",
    title: "TypeScript",
    issuer: "Alura",
    issued: "Fev 2025",
    issuedAt: "2025-02",
    credentialId: "c2e2c4fd-3230-40b9-8cfb-7bfce86fe1a3",
    track: "Frontend",
  },
  {
    id: "alura-typescript-b",
    title: "TypeScript",
    issuer: "Alura",
    issued: "Fev 2025",
    issuedAt: "2025-02",
    credentialId: "0109dd36-61d3-4c75-a0c7-edf6750047b0",
    track: "Frontend",
  },
  {
    id: "alura-sqlite-dez-2024",
    title: "SQLite Online",
    issuer: "Alura",
    issued: "Dez 2024",
    issuedAt: "2024-12",
    credentialId: "1dc826af-7f29-4e0f-952c-3dd2aadd5f57",
    track: "Dados",
  },
  {
    id: "alura-sqlite-nov-2024",
    title: "SQLite Online",
    issuer: "Alura",
    issued: "Nov 2024",
    issuedAt: "2024-11",
    credentialId: "4a8e37ef-dc16-48de-b9fd-544bac677943",
    track: "Dados",
  },
  {
    id: "alura-logica-programacao",
    title: "Lógica de programação",
    issuer: "Alura",
    issued: "Abr 2024",
    issuedAt: "2024-04",
    credentialId: "ad16b9d5-9cb0-49d5-a8a5-69fda160217f",
    track: "Fundamentos",
  },
];

/** Mais recentes primeiro. */
export const certifications: Certification[] = [...items].sort((a, b) =>
  b.issuedAt.localeCompare(a.issuedAt),
);
