import { ArrowDown, ArrowRight } from "lucide-react";
import type { ProjectStackGroup } from "@/data/projects";

interface StackChainProps {
  groups: ProjectStackGroup[];
}

/**
 * Diagrama de arquitetura do projeto: cada camada da stack vira um nó,
 * ligados na ordem em que a requisição os atravessa. Vertical no celular,
 * horizontal a partir do desktop.
 */
export function StackChain({ groups }: StackChainProps) {
  if (groups.length === 0) return null;

  return (
    <ol className="flex flex-col items-stretch gap-0 lg:flex-row lg:items-center">
      {groups.map((group, index) => (
        <li
          key={group.label}
          className="flex flex-col items-stretch lg:flex-1 lg:flex-row lg:items-center"
        >
          <div className="flex-1 rounded-xl border border-line bg-surface-2/50 px-5 py-4">
            <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-ink-dim">
              {group.label}
            </p>
            <ul className="mt-2 space-y-0.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-[family-name:var(--font-display)] text-[0.9375rem] font-semibold leading-snug text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {index < groups.length - 1 ? (
            <span
              aria-hidden="true"
              className="flex items-center justify-center py-2 text-ink-dim lg:px-3 lg:py-0"
            >
              <ArrowDown className="h-4 w-4 lg:hidden" />
              <ArrowRight className="hidden h-4 w-4 lg:block" />
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
