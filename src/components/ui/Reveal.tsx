"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms para escalonar entradas em listas. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Entrada suave ao entrar na viewport.
 * Usa IntersectionObserver + CSS — sem bibliotecas de animação.
 */
/** Um observer só para a página inteira — dezenas de instâncias de
 *  IntersectionObserver custam caro no main thread em celular. */
type RevealCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, RevealCallback>();

function getObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );

  return sharedObserver;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  /** Depois da entrada o elemento deixa de precisar de camada própria. */
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      setSettled(true);
      return;
    }

    const observer = getObserver();
    callbacks.set(node, () => setVisible(true));
    observer.observe(node);

    return () => {
      callbacks.delete(node);
      observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!visible || settled) return;
    const timer = window.setTimeout(() => setSettled(true), delay + 800);
    return () => window.clearTimeout(timer);
  }, [visible, settled, delay]);

  return (
    <Tag
      ref={ref}
      style={
        settled ? undefined : ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
      }
      className={`reveal${visible ? " is-visible" : ""}${
        settled ? " is-settled" : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  );
}
