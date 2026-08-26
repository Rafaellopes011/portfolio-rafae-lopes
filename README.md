<div align="center">

# Rafael Lopes — Portfólio

**Software Developer & Full Stack Developer**

Portfólio pessoal construído com Next.js 15, TypeScript e Tailwind CSS v4.

[Visitar o site](https://rafael-lopes.vercel.app) ·
[LinkedIn](https://www.linkedin.com/in/rafael-lopes-19b5463a0/) ·
[GitHub](https://github.com/Rafaellopes011)

</div>

---

## Sobre

Site profissional que apresenta meu perfil, experiência, stack e projetos —
com páginas de **case study** dedicadas para cada projeto, incluindo aqueles
cujo código-fonte é privado.

Destaques da implementação:

- **100% estático** — todas as rotas são pré-renderizadas no build (SSG)
- **~113 kB de JS** no primeiro carregamento, sem bibliotecas de animação
- Animações de entrada via `IntersectionObserver` + CSS, respeitando
  `prefers-reduced-motion`
- Dados totalmente separados dos componentes (`src/data/`)
- SEO completo: metadata, Open Graph, Twitter Card, JSON-LD, `sitemap.xml` e
  `robots.txt`
- Acessibilidade: HTML semântico, `alt` em todas as imagens, navegação por
  teclado, skip link, estados de foco visíveis

## Screenshot

<!-- Salve uma captura da home em public/images/portfolio-preview.png -->

![Prévia do portfólio](public/images/portfolio-preview.png)

## Stack

| Camada | Tecnologias |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 |
| Ícones | lucide-react |
| Fontes | Inter + Space Grotesk (`next/font`) |
| Deploy | Vercel |

## Como executar localmente

Requisitos: **Node.js 18.18+**

```bash
git clone https://github.com/Rafaellopes011/portfolio-rafael.git
cd portfolio-rafael

npm install
npm run dev
```

A aplicação fica disponível em <http://localhost:3000>.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servir o build de produção
npm run lint    # análise estática
```

## Estrutura

```
src/
├─ app/                        # rotas (App Router)
│  ├─ layout.tsx               # layout raiz, metadata e JSON-LD
│  ├─ page.tsx                 # home (composição das seções)
│  ├─ projects/
│  │  ├─ page.tsx              # listagem /projects
│  │  └─ [slug]/page.tsx       # case study /projects/:slug
│  ├─ sitemap.ts · robots.ts
│  └─ globals.css              # design tokens e utilitários
│
├─ components/
│  ├─ layout/                  # Navbar, Footer
│  ├─ sections/                # Hero, About, Experience, Projects, ...
│  └─ ui/                      # ProjectCard, TechBadge, Gallery, Reveal, ...
│
├─ data/                       # ← conteúdo do site (editar aqui)
│  ├─ profile.ts               # nome, headline, bio, foto
│  ├─ projects.ts              # projetos e case studies
│  ├─ experience.ts            # timeline profissional
│  ├─ education.ts             # formação e iniciação científica
│  ├─ tech.ts                  # stack por categoria
│  ├─ social.ts                # GitHub, LinkedIn, e-mail
│  └─ site.ts                  # SEO e itens de navegação
│
└─ lib/                        # utilitários
```

### Editando o conteúdo

Nenhum texto fica escrito dentro dos componentes. Para atualizar o site, edite
apenas os arquivos de `src/data/`.

**Adicionar um projeto** — inclua um objeto no array `projects` de
`src/data/projects.ts`. A rota `/projects/<slug>` é gerada automaticamente.

Sobre a visibilidade do repositório:

```ts
repositoryVisibility: "public"   // exibe o botão "GitHub" (exige githubUrl)
repositoryVisibility: "private"  // exibe "🔒 Código privado", sem nenhum link
```

**Adicionar uma experiência** — copie o template comentado no topo de
`src/data/experience.ts` e coloque a nova entrada no início do array.

**Imagens** — consulte [`public/images/README.md`](public/images/README.md)
para os nomes de arquivo esperados. Enquanto uma imagem não existir, o site
mostra um placeholder discreto no lugar.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — nenhuma configuração extra é
   necessária.
4. Defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` com o domínio final
   (ex.: `https://rafaellopes.vercel.app`) para que as URLs canônicas e as
   tags Open Graph apontem para o endereço correto.

> O projeto não contém chaves, tokens ou credenciais de nenhum tipo.

## Licença

Código disponível sob a licença MIT. O conteúdo (textos, imagens e projetos
apresentados) é de uso pessoal.
