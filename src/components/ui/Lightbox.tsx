"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";

interface GalleryProps {
  images: ProjectImage[];
}

/**
 * Galeria em grid assimétrico com lightbox acessível
 * (Escape para fechar, setas para navegar).
 */
export function Gallery({ images }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  const go = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, go]);

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <li
            key={image.src + index}
            className={image.wide ? "sm:col-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="card card-hover group block w-full overflow-hidden p-2 text-left"
              aria-label={`Ampliar imagem: ${image.alt}`}
            >
              <span className="relative block overflow-hidden rounded-[0.6rem] bg-surface-2">
                <span
                  className={`relative block ${
                    image.portrait
                      ? "aspect-[3/4]"
                      : image.wide
                        ? "aspect-[16/9]"
                        : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes={image.wide ? "(max-width: 640px) 92vw, 60rem" : "(max-width: 640px) 92vw, 30rem"}
                    className={`transition-transform duration-700 group-hover:scale-[1.03] ${
                      image.portrait
                        ? "object-contain object-center"
                        : "object-cover object-top"
                    }`}
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </span>

              {image.caption ? (
                <span className="block px-3 pb-1 pt-3 text-[0.8125rem] text-ink-muted transition-colors duration-300 group-hover:text-ink">
                  {image.caption}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      {/* ---------------- lightbox ---------------- */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption ?? active.alt}
          className="animate-fade-in fixed inset-0 z-[80] flex items-center justify-center bg-base/92 p-4 backdrop-blur-md sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2/80 text-ink transition-colors hover:border-accent/40 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  go(-1);
                }}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-line bg-surface-2/80 text-ink transition-colors hover:border-accent/40 sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  go(1);
                }}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-line bg-surface-2/80 text-ink transition-colors hover:border-accent/40 sm:right-6"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          ) : null}

          <figure
            className="animate-zoom-in flex max-h-full w-full max-w-6xl flex-col gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative max-h-[78vh] w-full overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src={active.src}
                alt={active.alt}
                width={1920}
                height={1080}
                sizes="(max-width: 1280px) 96vw, 72rem"
                className="h-auto max-h-[78vh] w-full object-contain"
              />
            </div>
            <figcaption className="text-center text-sm text-ink-muted">
              {active.caption ?? active.alt}
              {images.length > 1 ? (
                <span className="ml-2 font-[family-name:var(--font-mono)] text-xs text-ink-dim">
                  {(openIndex ?? 0) + 1}/{images.length}
                </span>
              ) : null}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
