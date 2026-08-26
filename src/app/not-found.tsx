import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70dvh] items-center overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_10%,transparent_100%)]" />
      </div>

      <div className="container-page relative text-center">
        <p className="font-[family-name:var(--font-mono)] text-sm text-accent">
          404
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          O endereço acessado não existe ou foi movido.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar ao início
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
