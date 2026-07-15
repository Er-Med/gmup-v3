"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ROUTES } from "@/lib/content";

const CONGRESS_HREF = `${ROUTES.event("4eme-congres-urgences-pediatriques")}#inscription`;
const HIDE_CTA_ON = ROUTES.event("4eme-congres-urgences-pediatriques");

type CongressCtaStripProps = {
  className?: string;
  href?: string;
};

export function CongressCtaStrip({
  className,
  href = CONGRESS_HREF,
}: CongressCtaStripProps) {
  const pathname = usePathname();
  const showRegister = pathname !== HIDE_CTA_ON;

  return (
    <section
      aria-label="Inscription au 4ème Congrès des urgences pédiatriques"
      className={className}
    >
      <Reveal>
        <Container className="px-0">
          <div className="bg-gmup-navy">
            <div
              className={
                showRegister
                  ? "flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-4 md:px-8 md:py-[1.125rem]"
                  : "flex flex-col px-5 py-5 sm:px-6 sm:py-4 md:px-8 md:py-[1.125rem]"
              }
            >
              <div className="flex min-w-0 items-start gap-3.5 sm:items-center sm:gap-4 md:gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/calendar-circle.svg"
                  alt=""
                  width={48}
                  height={48}
                  aria-hidden
                  className="size-11 shrink-0 md:size-12"
                />

                <div className="min-w-0">
                  <p className="font-body text-base leading-snug font-normal text-white md:text-lg md:leading-snug">
                    Rejoignez-nous au 4<sup className="text-[0.65em]">ème</sup>{" "}
                    Congrès des urgences pédiatriques
                  </p>
                  <p className="mt-0.5 font-body text-[0.9375rem] font-light leading-snug text-white/70 md:text-base">
                    30 et 31 Octobre 2026 – Hôtel le Marriott, Casablanca
                  </p>
                </div>
              </div>

              {showRegister ? (
                <Link
                  href={href}
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 self-center rounded-lg bg-gmup-coral px-5 py-2.5 font-nav text-[0.8125rem] font-bold tracking-[0.04em] text-white uppercase transition-colors hover:bg-[#d94f58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:self-center md:px-6 md:py-3 md:text-sm"
                >
                  Je m&apos;inscris maintenant
                  <span aria-hidden className="text-base leading-none">
                    ›
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
