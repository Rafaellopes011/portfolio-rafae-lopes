"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SafeImage } from "@/components/ui/SafeImage";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  /* --- estado de scroll (navbar compacta + blur) --- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --- scroll spy: destaca o item da seção visível --- */
  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .map((item) => item.section)
      .filter((id): id is string => Boolean(id))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  /* --- trava o scroll do body com o menu mobile aberto --- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* --- fecha o menu com Escape --- */
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line/80 bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]"
      >
        {/* marca */}
        <Link
          href="/"
          onClick={close}
          className="group flex items-center gap-2.5"
          aria-label={`${profile.name} — início`}
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-line-strong bg-surface-2 font-[family-name:var(--font-display)] text-[0.8rem] font-bold tracking-tight text-ink transition-colors duration-300 group-hover:border-accent/50">
            <SafeImage
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              sizes="36px"
              priority
              fallbackLabel={profile.initials}
            />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
            {profile.name}
          </span>
        </Link>

        {/* menu desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = isHome && item.section === active;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* social + toggle mobile */}
        <div className="flex items-center gap-2">
          <SocialLinks only={["github", "linkedin"]} className="hidden sm:flex" />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2/60 text-ink transition-colors duration-300 hover:border-accent/40 lg:hidden"
          >
            {open ? (
              <X className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            ) : (
              <Menu className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-line bg-base/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="container-page flex flex-col gap-1 py-5">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                style={{ animationDelay: `${index * 35}ms` }}
                className="animate-fade-in block rounded-lg px-3 py-3 text-[0.9375rem] font-medium text-ink-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 border-t border-line pt-4">
            <SocialLinks variant="labelled" className="flex-wrap gap-2" />
          </li>
        </ul>
      </div>
    </header>
  );
}
