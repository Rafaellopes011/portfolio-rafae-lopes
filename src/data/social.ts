export interface SocialLink {
  id: "github" | "linkedin" | "email";
  label: string;
  /** Texto curto exibido em cards de contato. */
  handle: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "@Rafaellopes011",
    href: "https://github.com/Rafaellopes011",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "/in/rafael-lopes",
    href: "https://www.linkedin.com/in/rafael-lopes-19b5463a0/",
  },
  {
    id: "email",
    label: "E-mail",
    handle: "rafaellopes250106@gmail.com",
    href: "mailto:rafaellopes250106@gmail.com",
  },
];

export const socialByID = Object.fromEntries(
  socialLinks.map((link) => [link.id, link]),
) as Record<SocialLink["id"], SocialLink>;
