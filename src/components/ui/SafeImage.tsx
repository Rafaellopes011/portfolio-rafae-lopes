"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Passado direto ao next/image. */
  sizes?: string;
  priority?: boolean;
  /** Texto do placeholder quando a imagem ainda não existe. */
  fallbackLabel?: string;
}

/**
 * next/image com fallback visual elegante.
 * Evita layout quebrado enquanto um screenshot ainda não foi adicionado
 * em /public — o card continua apresentável.
 */
export function SafeImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  fallbackLabel,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  /* Imagens do cache (ou com `priority`) costumam terminar de carregar antes
     da hidratação — nesse caso `onLoad` nunca dispara e o elemento ficaria
     preso em opacity 0. Na montagem, conferimos o estado real do <img>. */
  useEffect(() => {
    const node = imageRef.current;
    if (!node?.complete) return;

    if (node.naturalWidth === 0) setFailed(true);
    else setLoaded(true);
  }, []);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="grid-bg flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-2 p-6 text-center"
      >
        <ImageOff className="h-5 w-5 text-ink-dim" aria-hidden="true" />
        <span className="max-w-[26ch] text-xs leading-relaxed text-ink-dim">
          {fallbackLabel ?? `Adicione a imagem em public${src}`}
        </span>
      </div>
    );
  }

  return (
    <>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        onError={() => setFailed(true)}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-[opacity,transform] duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
      {!loaded ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-surface-2"
        />
      ) : null}
    </>
  );
}
