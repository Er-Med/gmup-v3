"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { useIsMobile } from "@/hooks";
import { SITE } from "@/lib/content";
import { buildNav, type NavItem } from "@/lib/navigation";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

const linkBase =
  "relative py-1.5 font-medium tracking-[0.01em] text-white/95 transition-[color,font-size,padding] duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40";

const activeUnderline =
  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gmup-teal after:opacity-100";

const HIDE_AT = 72;
const SHOW_AT = 16;

function NavLink({
  item,
  className,
  compact,
}: {
  item: NavItem;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={item.href}
      aria-current={item.current ? "page" : undefined}
      className={cn(
        linkBase,
        compact ? "text-[0.8125rem]" : "text-[0.9375rem]",
        item.current && activeUnderline,
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

function EspacePublicButton({
  item,
  compact,
}: {
  item: NavItem;
  compact?: boolean;
}) {
  return (
    <Link
      href={item.href}
      aria-current={item.current ? "page" : undefined}
      className={cn(
        "inline-flex items-center rounded-full border border-white/70 font-medium tracking-[0.01em] text-white transition-[color,border-color,background-color,padding,font-size,gap] duration-300 hover:border-white hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40",
        compact
          ? "gap-1.5 px-3 py-1 text-[0.8125rem]"
          : "gap-2 px-4 py-1.5 text-[0.9375rem]",
        item.current && "border-white bg-white/10",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "shrink-0 transition-[width,height] duration-300",
          compact ? "size-3.5" : "size-4",
        )}
        aria-hidden
      >
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 19.25c1.4-3.1 3.7-4.5 6.5-4.5s5.1 1.4 6.5 4.5" />
      </svg>
      {item.label}
    </Link>
  );
}

function MobileNavLink({
  item,
  className,
}: {
  item: NavItem;
  className?: string;
}) {
  return (
    <Link
      href={item.href}
      aria-current={item.current ? "page" : undefined}
      className={cn(
        "block px-5 py-4 font-medium text-white transition-colors duration-200 aria-[current=page]:bg-white/10",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

function MobileEspacePublicButton({ item }: { item: NavItem }) {
  return (
    <div className="px-5 py-3">
      <Link
        href={item.href}
        aria-current={item.current ? "page" : undefined}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-[0.9375rem] font-medium text-white transition-colors duration-200 hover:border-white hover:bg-white/8",
          item.current && "border-white bg-white/10",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 shrink-0"
          aria-hidden
        >
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.5 19.25c1.4-3.1 3.7-4.5 6.5-4.5s5.1 1.4 6.5 4.5" />
        </svg>
        {item.label}
      </Link>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const nav = buildNav(pathname);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoHidden, setLogoHidden] = useState(false);
  const homeItem = nav.items[0];
  const blogItem = nav.items.find((item) => item.href === nav.blog)!;
  const sectionItems = nav.items.filter(
    (item) => item !== homeItem && item !== blogItem,
  );
  const linkClass = "uppercase tracking-[0.06em]";
  const isCompact = logoHidden;

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setDropdownOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function updateLogoVisibility(scrollY: number) {
    setLogoHidden((hidden) => {
      if (!hidden && scrollY > HIDE_AT) return true;
      if (hidden && scrollY < SHOW_AT) return false;
      return hidden;
    });
  }

  useLenis((lenis) => {
    updateLogoVisibility(lenis.scroll);
  });

  useEffect(() => {
    function onScroll() {
      updateLogoVisibility(window.scrollY);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[var(--nav-bg)] text-[var(--nav-text)]",
        open && "is-open",
      )}
    >
      <motion.div
        initial={false}
        animate={
          logoHidden
            ? { height: 0, opacity: 0 }
            : { height: "auto", opacity: 1 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: isMobile ? 0.25 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }
        }
        className="overflow-hidden bg-white"
        aria-hidden={logoHidden}
      >
        <Container className="flex max-w-none items-center justify-center px-6 py-4 md:py-5 lg:px-10">
          <Link
            href={nav.home}
            tabIndex={logoHidden ? -1 : undefined}
            className="transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src="/logo-ar-fr.svg"
              alt="Logo GMUP — Groupe Marocain des Urgences Pédiatriques"
              width={420}
              height={186}
              className="h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
              priority
            />
          </Link>
        </Container>
      </motion.div>

      <Container
        className={cn(
          "relative flex items-center justify-between transition-[max-width,min-height,padding,gap] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isCompact
            ? "min-h-[3.25rem] max-w-[var(--container-max)] gap-4 px-5 md:min-h-[3.5rem]"
            : "min-h-[4.5rem] max-w-[90rem] gap-6 px-6 md:min-h-[5rem] lg:px-10",
        )}
      >
        <Link
          href={nav.home}
          className={cn(
            "relative z-10 flex shrink-0 items-center transition-[gap,opacity] duration-300 hover:opacity-90",
            isCompact ? "gap-2" : "gap-2.5",
          )}
        >
          <Image
            src="/short-logo.svg"
            alt=""
            width={72}
            height={72}
            className={cn(
              "w-auto object-contain transition-[height] duration-300",
              isCompact ? "h-8 md:h-9" : "h-12 md:h-14",
            )}
            aria-hidden
          />
          <span
            className={cn(
              typography.nav,
              "font-bold tracking-[0.04em] text-white transition-[font-size] duration-300",
              isCompact
                ? "text-[1.0625rem] md:text-[1.125rem]"
                : "text-[1.375rem] md:text-[1.5rem]",
            )}
          >
            {SITE.name}
          </span>
        </Link>

        <nav
          className={cn(
            "ml-auto hidden items-center transition-[gap] duration-300 md:flex",
            isCompact ? "gap-3.5 lg:gap-5" : "gap-5 lg:gap-7",
          )}
          aria-label="Navigation principale"
        >
          <NavLink item={homeItem} className={linkClass} compact={isCompact} />

          {sectionItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className={linkClass}
              compact={isCompact}
            />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={cn(
                linkBase,
                "inline-flex items-center gap-1.5",
                isCompact ? "text-[0.8125rem]" : "text-[0.9375rem]",
                linkClass,
                nav.isAgendaActive && activeUnderline,
              )}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((value) => !value)}
            >
              Agenda événements
              <span
                aria-hidden
                className="border-x-[3px] border-t-[4px] border-x-transparent border-t-current opacity-75"
              />
            </button>

            <ul
              role="menu"
              className={cn(
                "absolute top-[calc(100%+0.75rem)] left-1/2 min-w-[19rem] -translate-x-1/2 rounded-lg border border-white/15 bg-[var(--nav-bg)] py-1.5 shadow-lg transition-[opacity,transform,visibility] duration-200",
                dropdownOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0",
              )}
            >
              {nav.events.map((event) => (
                <li key={event.href} role="none">
                  <Link
                    role="menuitem"
                    href={event.href}
                    aria-current={event.current ? "page" : undefined}
                    className="block px-4 py-2.5 text-sm leading-snug whitespace-nowrap text-white/95 transition-colors duration-200 hover:bg-white/8 aria-[current=page]:bg-white/10"
                  >
                    {(() => {
                      const match = event.label.match(
                        /^(\d+)(ème|e)\s+([\s\S]+)$/i,
                      );
                      if (!match) return event.label;
                      return (
                        <>
                          {match[1]}
                          <sup>{match[2]}</sup> {match[3]}
                        </>
                      );
                    })()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <EspacePublicButton item={blogItem} compact={isCompact} />
        </nav>

        <button
          type="button"
          className="relative z-10 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-[1.35rem]" aria-hidden>
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full bg-current transition",
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </Container>

      <nav
        className={cn(
          "border-t border-white/10 bg-[var(--nav-bg)] md:hidden",
          open ? "block" : "hidden",
        )}
        aria-label="Navigation mobile"
      >
        <MobileNavLink item={homeItem} className={linkClass} />
        {sectionItems.map((item) => (
          <MobileNavLink key={item.label} item={item} className={linkClass} />
        ))}
        <div className="pb-1">
          <span className="block px-5 pt-4 pb-2 text-xs font-medium tracking-[0.12em] text-white/60 uppercase">
            Agenda événements
          </span>
          {nav.events.map((event) => (
            <Link
              key={event.href}
              href={event.href}
              aria-current={event.current ? "page" : undefined}
              className="block py-3.5 pr-5 pl-8 text-sm leading-snug text-white/95 transition-colors duration-200 aria-[current=page]:bg-white/10"
            >
              {event.label}
            </Link>
          ))}
        </div>
        <MobileEspacePublicButton item={blogItem} />
      </nav>
    </header>
  );
}
