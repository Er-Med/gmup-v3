import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { SocialLinks } from "@/components/layout/social-icons";
import { ROUTES, SITE } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--nav-bg)] text-[var(--nav-text)]">
      <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5">
        <Link
          href={ROUTES.home}
          className="flex min-w-0 items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/short-logo.svg"
            alt="Logo GMUP"
            width={40}
            height={40}
            className="h-9 w-auto shrink-0 object-contain"
          />
          <span className="min-w-0 leading-tight">
            <span
              className={cn(
                typography.nav,
                "block text-[1rem] font-bold tracking-[0.04em] text-white",
              )}
            >
              {SITE.name}
            </span>
            <span className="mt-0.5 block max-w-[16rem] text-[0.5625rem] leading-snug font-medium tracking-[0.04em] text-white/75 uppercase md:max-w-[20rem]">
              {SITE.fullName}
            </span>
          </span>
        </Link>

        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-white/90 sm:justify-end">
            <a
              href={`tel:${SITE.organizer.phone}`}
              className="transition-colors hover:text-white"
            >
              {SITE.organizer.phoneDisplay}
            </a>
            <span className="hidden h-3.5 w-px bg-white/30 sm:block" aria-hidden />
            <a
              href={`mailto:${SITE.organizer.email}`}
              className="min-w-0 truncate transition-colors hover:text-white"
            >
              {SITE.organizer.email}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end">
            <SocialLinks />
            <p className={cn(typography.small, "text-[0.75rem] text-white/70")}>
              © 2026 GMUP. Tous droits réservés.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div className={cn("flex min-h-screen flex-col font-sans antialiased", className)}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
