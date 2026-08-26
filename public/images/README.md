# Imagens do portfólio

Salve os arquivos exatamente com estes nomes — os caminhos já estão
referenciados em `src/data/`.

## Foto de perfil

| Arquivo | Onde aparece | Formato ideal |
| --- | --- | --- |
| `profile.jpg` | Seção "Sobre mim" | Retrato vertical (proporção 4:5) |

> Editável em `src/data/profile.ts` → `profile.photo`

## AI BetScore — `images/betscore/`

| Arquivo | Screenshot |
| --- | --- |
| `01-landing.png` | Landing page ("Palpites de Apostas Gerados por IA") |
| `02-quem-somos.png` | Página "Quem Somos" |
| `03-login.png` | Tela de login |
| `04-chat.png` | Workspace / Chat com a IA |
| `05-configuracoes.png` | Configurações da IA (odds, ligas, gestão de banca) |

> Editável em `src/data/projects.ts` → projeto `ai-betscore`

## Personal Copilot — `images/gym-app/`

Painel do personal (prints desktop, marcados como `wide`):

| Arquivo | Screenshot |
| --- | --- |
| `01-alunos.png` | Carteira de alunos (também usada como capa) |
| `02-aluno-evolucao.png` | Evolução de carga por grupo muscular |
| `03-comparacao-fotos.png` | Comparação de fotos entre semanas |
| `04-treino-ia.png` | Treino sugerido pela IA |
| `05-check-ins.png` | Histórico de check-ins |
| `06-coleta-ia.png` | Configuração da coleta da IA |
| `07-alertas.png` | Alertas automáticos |
| `08-cadastro-aluno.png` | Wizard de cadastro |

App do aluno (prints de celular, marcados como `portrait`):

| Arquivo | Screenshot |
| --- | --- |
| `09-app-hoje.png` | Metas do dia |
| `10-app-treino.png` | Execução do treino |
| `11-app-progresso.png` | Progresso em 12 semanas |
| `12-app-conquistas.png` | Conquistas e medalhas |
| `13-app-checkin.png` | Envio do check-in |

Para adicionar mais telas, inclua os arquivos aqui e acrescente entradas
no array `gallery` do projeto `personal-copilot` em `src/data/projects.ts`.
Use `wide: true` para prints de desktop e `portrait: true` para prints de
celular — este último renderiza a imagem inteira, sem corte.

## Open Graph

Nenhum arquivo necessário: a imagem de compartilhamento (1200×630) é gerada
automaticamente no build por `src/app/opengraph-image.tsx`.

---

### Dica de performance

Antes de commitar, comprima os PNGs (ex.: [squoosh.app](https://squoosh.app)).
O Next.js já serve as imagens em AVIF/WebP e com lazy loading, mas arquivos
originais menores deixam o build e o deploy mais rápidos.

Enquanto uma imagem não existir, o site exibe um placeholder discreto no lugar
— nada quebra.
