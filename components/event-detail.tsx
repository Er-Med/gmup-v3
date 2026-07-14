import Image from "next/image";
import Link from "next/link";

import { AnimatedBanner } from "@/components/animated-banner";
import { CongressBanner } from "@/components/congress-banner";
import { EventRegistrationCard } from "@/components/event-registration-card";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ROUTES, type Event } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

type EventDetailProps = {
  event: Event;
};

function formatEditionTitle(title: string) {
  const match = title.match(/^(\d+)(ème|e)\s+([\s\S]+)$/i);
  if (!match) return title;
  return (
    <>
      {match[1]}
      <sup>{match[2]}</sup> {match[3]}
    </>
  );
}

export function EventDetail({ event }: EventDetailProps) {
  const title = formatEditionTitle(event.title);
  const isCongress = event.slug === "4eme-congres-urgences-pediatriques";

  return (
    <>
      {isCongress ? (
        <CongressBanner
          theme={event.excerpt}
          date={event.date}
          location={event.location}
          href={`${ROUTES.event(event.slug)}#inscription`}
        />
      ) : (
        <AnimatedBanner
          src="/banner-v2.webp"
          alt={`Bannière — ${event.title}`}
        />
      )}

      <section
        className="page-surface relative border-b border-gmup-navy/8 pt-10 pb-24 md:pt-12 lg:pt-14 lg:pb-28"
        aria-labelledby="event-title"
      >
        <Container>
          <Reveal>
            <nav
              className={cn(
                "mb-10 flex flex-wrap items-center gap-2 md:mb-12",
                typography.small,
                "text-muted",
              )}
              aria-label="Fil d'Ariane"
            >
              <Link
                href={ROUTES.home}
                className={cn(
                  typography.link,
                  "text-secondary transition hover:text-gmup-teal",
                )}
              >
                Qui sommes-nous ?
              </Link>
              <span aria-hidden className="text-muted/70">
                /
              </span>
              <span className="text-secondary">Agenda</span>
              <span aria-hidden className="text-muted/70">
                /
              </span>
              <span className="text-secondary">{title}</span>
            </nav>
          </Reveal>

          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-start lg:gap-20 xl:gap-24">
            <div className="min-w-0">
              <Reveal as="header" direction="left" className="mb-12 max-w-3xl md:mb-14">
                <span className={cn("mb-3.5 inline-block", typography.eyebrow)}>
                  Agenda · Événement
                </span>
                <h1 className={typography.h2} id="event-title">
                  {title}
                </h1>
                <div
                  className="mt-5 h-0.5 w-12 rounded-full bg-gmup-coral/75"
                  aria-hidden
                />
              </Reveal>

              <Reveal delay={0.1} direction="up" className="min-w-0">
                <figure className="overflow-hidden rounded-2xl border border-gmup-teal/15 bg-gmup-navy-soft">
                  <Image
                    src={event.programmeImage}
                    alt={`Programme — ${event.title}`}
                    width={800}
                    height={1100}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </figure>

                <p className="mt-7 md:mt-8">
                  <a
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gmup-navy bg-transparent px-5 py-4 uppercase tracking-wide text-heading transition hover:bg-gmup-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal",
                      typography.button,
                    )}
                    href={event.programmeImage}
                    download
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Télécharger le programme
                  </a>
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={0.12}
              direction="right"
              className="min-w-0 lg:sticky lg:top-40 lg:self-start"
            >
              <aside aria-labelledby="inscription-title">
                <EventRegistrationCard />
              </aside>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <p className="mt-16 border-t border-gmup-navy/8 pt-8 md:mt-20">
              <Link
                href={ROUTES.home}
                className={cn(
                  "uppercase tracking-wide text-heading transition hover:text-gmup-teal",
                  typography.button,
                )}
              >
                ← Retour à Qui sommes-nous ?
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
