"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

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
