import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import type { Event } from "@/lib/content";
import { typography } from "@/lib/typography";
import { cn } from "@/utils/cn";

type EventInfoSectionProps = {
  event: Event;
  className?: string;
};

type InfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex gap-3.5">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gmup-teal/10 text-gmup-teal"
        aria-hidden
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className={typography.eyebrow}>{label}</p>
        <p className={cn("mt-1.5 leading-snug", typography.name)}>{value}</p>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EventTypeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function EventInfoSection({ event, className }: EventInfoSectionProps) {
  return (
    <Reveal delay={0.06} direction="up">
      <section
        aria-label="Informations sur l'événement"
        className={cn("mb-12 md:mb-14", className)}
      >
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          <InfoItem icon={<CalendarIcon />} label="Date" value={event.date} />
          <InfoItem
            icon={<LocationIcon />}
            label="Lieu"
            value={event.location}
          />
          <InfoItem
            icon={<EventTypeIcon />}
            label="Type"
            value={event.eventType}
          />
        </div>

        {event.excerpt && (
          <div className="mt-10 max-w-2xl border-t border-gmup-navy/8 pt-8">
            <p className={typography.eyebrow}>À propos</p>
            <p
              className={cn(
                "mt-3 text-[0.9375rem] leading-[1.7] sm:text-[1.0625rem] sm:leading-[1.75]",
                typography.prose,
              )}
              lang="fr"
            >
              {event.excerpt}
            </p>
          </div>
        )}
      </section>
    </Reveal>
  );
}
