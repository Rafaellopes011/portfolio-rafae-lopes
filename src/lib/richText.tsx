import { Fragment, type ReactNode } from "react";

/**
 * Converte a sintaxe `**texto**` dos arquivos de dados em <strong>.
 * Mantém o conteúdo editável em texto puro sem trazer um parser de Markdown.
 */
export function renderEmphasis(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, index) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-ink">
          {chunk.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={index}>{chunk}</Fragment>;
  });
}
