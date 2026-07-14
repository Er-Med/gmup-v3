"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/layout/social-icons";
import { SITE } from "@/lib/content";
import { buildNav, type NavItem } from "@/lib/navigation";
import { cn } from "@/utils/cn";

const pillTransition = {
  type: "tween" as const,
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1] as const,
};

const navItemBase =
  "relative z-0 inline-flex items-center rounded-[4px] px-2.5 py-1.5 font-[family-name:var(--font-nav)] text-[0.9375rem] leading-none tracking-[0.01em] transition-[background-color_0.3s,color_0.3s,transform_0.25s,box-shadow_0.3s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40 lg:px-5 lg:text-base";

const navItemInactive =
  "font-normal text-white/90 hover:text-white";

const navItemActive =
  "z-10 font-medium text-[#223A6A]";

function ActivePill({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.span
      layoutId="nav-active-pill"
      className="pointer-events-none absolute inset-0 -z-10 rounded-[4px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-[background-color_0.3s,box-shadow_0.3s,transform_0.25s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#fbfcfe] group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]"
      transition={reduceMotion ? { duration: 0 } : pillTransition}
      aria-hidden
    />
  );
}

function NavLink({
  item,
  className,
  reduceMotion,
}: {
  item: NavItem;
  className?: string;
  reduceMotion: boolean;
}) {
  const isActive = Boolean(item.current);

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        navItemBase,
        isActive ? cn("group", navItemActive) : navItemInactive,
        className,
      )}
    >
      {isActive ? <ActivePill reduceMotion={reduceMotion} /> : null}
      <span className="relative z-10 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
        {item.label}
      </span>
    </Link>
  );
}

function EspacePublicButton({
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
        "inline-flex shrink-0 items-center gap-2 rounded-md border border-gmup-mint px-2.5 py-1.5 font-[family-name:var(--font-nav)] text-[0.9375rem] font-normal tracking-[0.01em] text-gmup-mint transition-[color,border-color,background-color,padding,gap] duration-300 hover:bg-gmup-mint/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gmup-mint/40 lg:px-3.5 lg:text-base",
        item.current && "bg-gmup-mint/15",
        className,
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
        "block px-5 py-4 font-[family-name:var(--font-nav)] text-base font-normal text-white transition-colors duration-200 aria-[current=page]:bg-white/10",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

function AgendaTrigger({
  active,
  open,
  onToggle,
  reduceMotion,
  children,
}: {
  active: boolean;
  open: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn(
        navItemBase,
        "gap-1.5",
        active ? cn("group", navItemActive) : navItemInactive,
      )}
      aria-expanded={open}
      aria-haspopup="true"
      onClick={onToggle}
    >
      {active ? <ActivePill reduceMotion={reduceMotion} /> : null}
      <span className="relative z-10 inline-flex items-center gap-1.5 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
        {children}
        <span
          aria-hidden
          className="border-x-[3px] border-t-[4px] border-x-transparent border-t-current opacity-75"
        />
      </span>
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const nav = buildNav(pathname);
  const reduceMotion = useReducedMotion() ?? false;
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const homeItem = nav.items[0];
  const blogItem = nav.items.find((item) => item.href === nav.blog)!;
  const sectionItems = nav.items.filter(
    (item) => item !== homeItem && item !== blogItem,
  );
  const linkClass = "tracking-[0.01em]";

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

  return (
    <header className={cn("z-50 text-[var(--nav-text)]", open && "is-open")}>
      <div className="header-brand-bg">
        <Container className="flex items-center justify-between gap-4 py-3.5 sm:gap-5 sm:py-4.5 md:py-5 lg:gap-6 lg:py-6">
          <Link
            href={nav.home}
            className="shrink-0 transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src="/logo-arrondi-ar-fr.svg"
              alt="Logo GMUP — Groupe Marocain des Urgences Pédiatriques"
              width={200}
              height={200}
              className="h-[5.4rem] w-auto object-contain sm:h-[6.3rem] md:h-[6.75rem] lg:h-[7.2rem]"
              priority
            />
          </Link>

          <div className="flex min-w-0 flex-col items-end gap-1.5 sm:gap-2.5 md:gap-3">
            <Image
              src="/title-ar-fr.svg"
              alt={SITE.fullName}
              width={480}
              height={54}
              className="h-5 w-auto max-w-full object-contain object-right sm:h-[1.8rem] md:h-[2.025rem] lg:h-[2.25rem]"
              priority
            />
            <SocialLinks variant="header" className="gap-1.5 sm:gap-2.5" />
          </div>
        </Container>
      </div>

      <Container
        className={cn("px-0 md:px-5", pathname === "/" && "pb-0")}
      >
        <div
          className={cn(
            "overflow-x-clip bg-[var(--nav-bg)]",
            pathname === "/"
              ? "relative z-10"
              : "rounded-xl shadow-[0_2px_8px_rgba(15,35,70,0.12)]",
            open && "overflow-hidden",
          )}
        >
          <div className="relative flex h-16 min-h-16 items-center justify-between gap-3 px-3 md:gap-4 md:px-4 lg:gap-6 lg:px-5">
            <nav
              className="hidden w-full min-w-0 items-center justify-between gap-2 md:flex lg:gap-4"
              aria-label="Navigation principale"
            >
              <LayoutGroup id="primary-nav">
                <div className="flex min-w-0 flex-wrap items-center gap-0.5 lg:gap-2">
                  <NavLink
                    item={homeItem}
                    className={linkClass}
                    reduceMotion={reduceMotion}
                  />

                  {sectionItems.map((item) => (
                    <NavLink
                      key={item.label}
                      item={item}
                      className={linkClass}
                      reduceMotion={reduceMotion}
                    />
                  ))}

                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <AgendaTrigger
                      active={nav.isAgendaActive}
                      open={dropdownOpen}
                      onToggle={() => setDropdownOpen((value) => !value)}
                      reduceMotion={reduceMotion}
                    >
                      Agenda événements
                    </AgendaTrigger>

                    <ul
                      role="menu"
                      hidden={!dropdownOpen}
                      className={cn(
                        "absolute top-[calc(100%+0.75rem)] left-0 z-20 max-w-[min(19rem,calc(100vw-2rem))] min-w-[16rem] rounded-lg border border-white/15 bg-[var(--nav-bg)] py-1.5 shadow-lg transition-[opacity,transform] duration-200 lg:left-1/2 lg:min-w-[19rem] lg:-translate-x-1/2",
                        dropdownOpen
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0",
                      )}
                    >
                      {nav.events.map((event) => (
                        <li key={event.href} role="none">
                          <Link
                            role="menuitem"
                            href={event.href}
                            aria-current={event.current ? "page" : undefined}
                            className="block px-4 py-2.5 font-[family-name:var(--font-nav)] text-base leading-snug font-normal text-white/95 transition-colors duration-200 hover:bg-white/8 aria-[current=page]:bg-white/10"
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
                </div>
              </LayoutGroup>

              <EspacePublicButton item={blogItem} />
            </nav>

            <div className="flex w-full items-center justify-between gap-3 md:hidden">
              <button
                type="button"
                className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
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
                      open
                        ? "bottom-1/2 translate-y-1/2 -rotate-45"
                        : "bottom-0",
                    )}
                  />
                </span>
              </button>

              <EspacePublicButton
                item={blogItem}
                className="px-3 py-1.5 text-[0.9375rem]"
              />
            </div>
          </div>

          <nav
            className={cn(
              "border-t border-white/10 md:hidden",
              open ? "block" : "hidden",
            )}
            aria-label="Navigation mobile"
          >
            <MobileNavLink item={homeItem} className={linkClass} />
            {sectionItems.map((item) => (
              <MobileNavLink
                key={item.label}
                item={item}
                className={linkClass}
              />
            ))}
            <div className="pb-3">
              <span className="block px-5 pt-4 pb-2 font-[family-name:var(--font-nav)] text-xs font-normal tracking-[0.12em] text-white/60 uppercase">
                Agenda événements
              </span>
              {nav.events.map((event) => (
                <Link
                  key={event.href}
                  href={event.href}
                  aria-current={event.current ? "page" : undefined}
                  className="block py-3.5 pr-5 pl-8 font-[family-name:var(--font-nav)] text-base leading-snug font-normal text-white/95 transition-colors duration-200 aria-[current=page]:bg-white/10"
                >
                  {event.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
