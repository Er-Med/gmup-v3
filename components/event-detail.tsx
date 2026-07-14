import Image from "next/image";

import { CongressBanner } from "@/components/congress-banner";
import { EventRegistrationCard } from "@/components/event-registration-card";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { Event } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

type EventDetailProps = {
  event: Event;
};

const INSCRIPTION_SLUG = "4eme-congres-urgences-pediatriques";

export function EventDetail({ event }: EventDetailProps) {
  const isInscriptionPage = event.slug === INSCRIPTION_SLUG;

  if (isInscriptionPage) {
    return (
      <>
        <CongressBanner showRegister={false} />

        <section
          id="inscription"
          className="page-surface relative pt-8 pb-8 md:pt-10 md:pb-10 lg:pt-12 lg:pb-12"
          aria-label={`${event.title} — inscription`}
        >
          <Container>
            <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-10">
              <Reveal direction="left" className="min-w-0">
                <figure className="overflow-hidden rounded-[4px] shadow-[0_4px_24px_rgba(33,51,85,0.08)]">
                  <Image
                    src="/4eme-congres-afiche.png"
                    alt="4ème Congrès des urgences pédiatriques — Save the date"
                    width={800}
                    height={1100}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </figure>
              </Reveal>

              <Reveal
                delay={0.1}
                direction="right"
                className="min-w-0 md:sticky md:top-36 md:self-start"
              >
                <EventRegistrationCard />
              </Reveal>
            </div>
          </Container>
        </section>
      </>
    );
  }

  const hasAffiche = Boolean(event.afficheImage);

  return (
    <>
      <CongressBanner />

      <section
        className={cn(
          "page-surface relative",
          hasAffiche
            ? "pt-3 pb-4 md:pt-4 md:pb-5 lg:pt-5 lg:pb-6"
            : "pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24",
        )}
        aria-label={event.title}
      >
        <Container>
          {hasAffiche ? (
            <div className="grid items-start gap-3 sm:grid-cols-2 sm:gap-4">
              <Reveal direction="left" className="min-w-0">
                <figure className="overflow-hidden rounded-[4px] border border-gmup-navy/25 shadow-[0_2px_12px_rgba(33,51,85,0.06)]">
                  <Image
                    src={event.afficheImage!}
                    alt={`${event.title} — Save the date`}
                    width={800}
                    height={1100}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </figure>
              </Reveal>

              <Reveal delay={0.08} direction="right" className="min-w-0">
                <figure className="overflow-hidden rounded-[4px] border border-gmup-navy/25 shadow-[0_2px_12px_rgba(33,51,85,0.06)]">
                  <Image
                    src={event.programmeImage}
                    alt={`Programme — ${event.title}`}
                    width={800}
                    height={1100}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </figure>
              </Reveal>
            </div>
          ) : (
            <>
              <Reveal>
                <header className="mb-8 max-w-3xl md:mb-10">
                  <h1 className={typography.h2}>{event.title}</h1>
                  <p className={cn("mt-2 text-secondary", typography.small)}>
                    {event.date}
                    {event.location ? ` — ${event.location}` : null}
                  </p>
                </header>
              </Reveal>

              <Reveal delay={0.08} direction="up" className="mx-auto max-w-3xl">
                <figure className="overflow-hidden">
                  <Image
                    src={event.programmeImage}
                    alt={`Programme — ${event.title}`}
                    width={800}
                    height={1100}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </figure>
              </Reveal>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
