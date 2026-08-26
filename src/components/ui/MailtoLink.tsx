"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

/**
 * Tempo de espera antes de assumir que o mailto: não abriu nada.
 * Quando um app externo assume o foco, a aba perde visibilidade bem antes disso.
 */
const FALLBACK_DELAY = 900;

export function buildMailto(email: string, subject?: string) {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

function buildGmail(email: string, subject?: string) {
  const base =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(email)}`;
  return subject ? `${base}&su=${encodeURIComponent(subject)}` : base;
}

interface MailtoLinkProps {
  email: string;
  subject?: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

/**
 * Link de e-mail com duas camadas:
 *
 * 1. mailto: — abre o cliente de e-mail padrão do visitante (Outlook, Mail,
 *    Gmail registrado como handler…), com destinatário e assunto preenchidos.
 * 2. Gmail web — usado só quando o passo 1 não abre nada, o que acontece em
 *    máquinas sem nenhum handler de mailto: registrado. Sem isso, o clique
 *    morre em silêncio e o visitante conclui que o link está quebrado.
 */
export function MailtoLink({
  email,
  subject,
  children,
  className = "",
  ...rest
}: MailtoLinkProps) {
  const timer = useRef<number | null>(null);

  function cancel() {
    if (timer.current === null) return;
    window.clearTimeout(timer.current);
    timer.current = null;
    window.removeEventListener("blur", cancel);
    document.removeEventListener("visibilitychange", onVisibilityChange);
  }

  function onVisibilityChange() {
    if (document.hidden) cancel();
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Ctrl/Cmd/clique do meio: deixa o navegador cuidar do link.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }

    cancel();

    // Se um app externo assumir o foco, o fallback é cancelado antes de disparar.
    window.addEventListener("blur", cancel, { once: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    timer.current = window.setTimeout(() => {
      cancel();
      const gmailHref = buildGmail(email, subject);
      const tab = window.open(gmailHref, "_blank", "noopener,noreferrer");
      // Bloqueador de pop-up barrou a nova aba: navega a própria aba.
      if (!tab) window.location.href = gmailHref;
    }, FALLBACK_DELAY);
  }

  return (
    <a
      href={buildMailto(email, subject)}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
