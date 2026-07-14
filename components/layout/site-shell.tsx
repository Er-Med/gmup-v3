import type { ReactNode } from "react";

import { CongressCtaStrip } from "@/components/congress-cta-strip";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { SocialLinks } from "@/components/layout/social-icons";
import { SITE } from "@/lib/content";
import { cn } from "@/utils/cn";

export function Footer() {
  return (
    <footer className="mt-auto">
      <CongressCtaStrip />

      <Container className="px-0 sm:px-5">
        <div className="grid grid-cols-1 justify-items-center gap-4 border-b border-gmup-border px-3 py-5 text-center sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:justify-items-stretch sm:gap-6 sm:px-8 sm:py-6 sm:text-left md:px-12">
          <p className="min-w-0 font-body text-[0.866rem] font-normal leading-snug text-gmup-text md:text-[0.939rem]">
            {SITE.fullName}
          </p>

          <p className="min-w-0 font-body text-[1.011rem] font-semibold leading-snug text-gmup-text sm:text-center md:text-[1.083rem]">
            © 2026 GMUP. Tous droits réservés.
          </p>

          <SocialLinks className="justify-self-center sm:justify-self-end" />
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
    <div
      className={cn(
        "flex min-h-screen max-w-full flex-col overflow-x-clip font-sans antialiased",
        className,
      )}
    >
      <div className="page-bg mx-auto flex min-h-screen w-full max-w-[var(--container-max)] flex-col">
        <Navbar />
        <main className="relative z-0 min-w-0 flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
