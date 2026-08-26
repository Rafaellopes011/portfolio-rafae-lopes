import { Boxes, Database, Layers, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Layer {
  icon: LucideIcon;
  label: string;
  items: string;
}

const layers: Layer[] = [
  { icon: Layers, label: "Interface", items: "React · Angular · TypeScript" },
  {
    icon: Boxes,
    label: "API & regras de negócio",
    items: "Java · Spring · Node.js · Python",
  },
  { icon: Database, label: "Dados", items: "PostgreSQL · SQL Server · Neon" },
  { icon: Sparkles, label: "Inteligência artificial", items: "OpenAI API · LLMs" },
];

/**
 * Elemento visual do Hero: representa as camadas que eu atravesso
 * ao construir uma aplicação, do frontend à IA.
 */
export function StackDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* glow de fundo */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 blur-2xl"
      />

      <div className="card animate-float-slow relative overflow-hidden p-1.5 shadow-[0_40px_90px_-50px_rgba(0,0,0,1)]">
        {/* chrome da janela */}
        <div className="flex items-center gap-2 rounded-t-[0.7rem] border-b border-line bg-surface-3/50 px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </span>
          <span className="ml-2 font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-dim">
            arquitetura da aplicação
          </span>
        </div>

        <ul className="space-y-2 p-4">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <li key={layer.label} className="relative">
                <div className="group flex items-center gap-3.5 rounded-xl border border-line bg-surface-2/70 px-4 py-3.5 transition-all duration-300 hover:border-accent/35 hover:bg-surface-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-base text-accent-soft transition-colors duration-300 group-hover:border-accent/40">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.8125rem] font-semibold text-ink">
                      {layer.label}
                    </span>
                    <span className="mt-0.5 block truncate font-[family-name:var(--font-mono)] text-[0.7rem] text-ink-dim">
                      {layer.items}
                    </span>
                  </span>
                </div>

                {/* conector entre camadas */}
                {index < layers.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="ml-[2.4rem] block h-2 w-px bg-gradient-to-b from-line-strong to-transparent"
                  />
                ) : null}
              </li>
            );
          })}
        </ul>

        <p className="border-t border-line px-4 py-3.5 text-center text-[0.72rem] leading-relaxed text-ink-dim">
          Do modelo de dados à interface — uma aplicação inteira, ponta a ponta.
        </p>
      </div>
    </div>
  );
}
