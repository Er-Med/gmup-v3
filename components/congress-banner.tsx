import Link from "next/link";
import { Pointer } from "lucide-react";

import { ROUTES } from "@/lib/content";
import { cn } from "@/utils/cn";

type CongressBannerProps = {
  className?: string;
  theme?: string;
  date?: string;
  location?: string;
  href?: string;
  /** When false, hides the « S'inscrire » CTA (used on event detail pages). */
  showRegister?: boolean;
};

const DEFAULT_HREF = ROUTES.event("4eme-congres-urgences-pediatriques");
const DEFAULT_DATE = "30 et 31 Octobre 2026";
const DEFAULT_LOCATION = "Hôtel le Marriott Casablanca";
const DEFAULT_THEME = "Thème";

function splitDateLines(date: string) {
  const match = date.match(/^(.+?)\s+(octobre\s+\d{4})$/i);
  if (match) {
    return [match[1], match[2].replace(/^o/, "O")];
  }
  return [date];
}

function splitLocationLines(location: string) {
  const match = location.match(/^(.+?)\s+(Casablanca)$/i);
  if (match) return [match[1], match[2]];
  return [location];
}

function InfoChip({
  iconSrc,
  iconAlt,
  iconClassName,
  lines,
}: {
  iconSrc: string;
  iconAlt?: string;
  iconClassName?: string;
  lines: string[];
}) {
  return (
    <div className="flex min-h-[3.5rem] items-center gap-3 rounded-xl bg-gmup-teal-soft/80 px-4 py-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconSrc}
        alt={iconAlt ?? ""}
        aria-hidden
        width={28}
        height={28}
        className={cn("size-7 shrink-0", iconClassName)}
      />
      <p className="min-w-0 font-sans text-[0.9375rem] font-bold leading-[1.25] text-gmup-navy">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

function RegisterCtaLink({
  href,
  className,
  buttonClassName,
}: {
  href: string;
  className?: string;
  buttonClassName?: string;
}) {
  return (
    <div
      className={cn(
        /* pl reserves icon + gap so absolute hand never clips or overlaps siblings */
        "relative inline-flex items-center pl-[2.375rem]",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center text-gmup-teal animate-cta-icon-pulse"
      >
        <Pointer className="size-7 rotate-90" strokeWidth={2} />
      </span>
      <Link href={href} className={buttonClassName}>
        S&apos;inscrire au congrès
      </Link>
    </div>
  );
}

export function CongressBanner({
  className,
  theme = DEFAULT_THEME,
  date = DEFAULT_DATE,
  location = DEFAULT_LOCATION,
  href = DEFAULT_HREF,
  showRegister = true,
}: CongressBannerProps) {
  const dateLines = splitDateLines(date);
  const locationLines = splitLocationLines(location);

  return (
    <section
      aria-label="Bannière — 4ème Congrès des urgences pédiatriques"
      className={cn(
        "w-full px-5 md:px-0",
        className,
      )}
    >
      {/* —— Mobile layout —— */}
      <div className="md:hidden">
        <div className="flex flex-col gap-3 pt-5 pb-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/4eme-congres-title.svg"
            alt="4ème Congrès des urgences pédiatriques"
            width={220}
            height={68}
            className="h-auto w-full max-w-[17.5rem]"
          />
          {theme ? (
            <p className="max-w-[20rem] font-sans text-[0.8125rem] leading-snug text-[#8a97a8]">
              {theme}
            </p>
          ) : null}
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mobile-banner-bg.svg"
          alt=""
          aria-hidden
          width={720}
          height={690}
          className="mt-3 h-auto w-full select-none"
        />

        <div className="relative z-[1] -mt-10 flex flex-col gap-2.5 pb-6">
          <InfoChip iconSrc="/banner-calendar.svg" lines={dateLines} />
          <InfoChip
            iconSrc="/banner-maps.svg"
            iconClassName="h-7 w-auto"
            lines={locationLines}
          />
          {showRegister ? (
            <RegisterCtaLink
              href={href}
              className="mt-1 self-center"
              buttonClassName="inline-flex h-11 w-fit items-center justify-center rounded-[14px_14px_2.5rem_14px] bg-white px-5 font-sans text-[0.875rem] font-bold leading-none text-gmup-coral shadow-[0_2px_6px_rgba(33,51,85,0.1)] transition-colors hover:bg-gmup-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal"
            />
          ) : null}
        </div>
      </div>

      {/* —— Desktop layout —— */}
      <div className="relative hidden pb-[3.5rem] md:block [--info-bar-h:4.125rem]">
        <div className="relative isolate">
          <div className="relative flex aspect-[651.9/127.82] items-stretch overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/full-banner-bg.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill select-none"
            />

            <div className="relative z-[2] flex h-full w-[40%] shrink-0 flex-col gap-3.5 px-4 pt-5 pb-7 sm:gap-4 sm:px-5 sm:pt-6 sm:pb-9 md:gap-5 md:px-6 md:pt-2 md:pb-11">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/4eme-congres-title.svg"
                alt="4ème Congrès des urgences pédiatriques"
                width={220}
                height={68}
                className="h-auto w-full max-w-[15rem] sm:max-w-[18.5rem] md:max-w-[21rem]"
              />
              {theme ? (
                <p className="max-w-[18rem] font-sans text-[0.75rem] leading-snug text-[#8a97a8] sm:max-w-[20rem] sm:text-[0.8125rem] md:text-[0.875rem] md:leading-relaxed">
                  {theme}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-3 z-[3] w-[80%] sm:left-4 md:left-5">
          <div className="relative h-[var(--info-bar-h)] min-h-[var(--info-bar-h)]">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_4px_12px_rgba(23,59,115,0.08)]"
              viewBox="12.3 116.5 467.5 39"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M18.89,116.73h454.07c4.01,0,6.29,5.53,3.89,9.4l-13.91,22.43c-2.59,4.18-6.66,6.64-10.98,6.64H19.08c-3.48,0-6.32-3.38-6.38-7.59l-.32-22.88c-.06-4.39,2.87-8,6.51-8Z"
                fill="#ffffff"
                stroke="#198d93"
                strokeWidth="1"
                strokeMiterlimit={10}
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div
              className={cn(
                "relative z-[1] flex h-full flex-col justify-center gap-3 px-5 py-3 sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-0 md:gap-6 md:px-7",
                showRegister
                  ? "sm:justify-between sm:pr-12 md:pr-14"
                  : "sm:justify-start sm:gap-10 sm:pr-8 md:gap-14 md:pr-10",
              )}
            >
              <div className="flex min-w-0 items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/banner-calendar.svg"
                  alt=""
                  aria-hidden
                  width={26}
                  height={26}
                  className="size-[26px] shrink-0"
                />
                <p className="font-sans text-[0.875rem] font-bold leading-[1.25] text-gmup-navy sm:text-[0.9375rem]">
                  {dateLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex min-w-0 items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/banner-maps.svg"
                  alt=""
                  aria-hidden
                  width={26}
                  height={26}
                  className="h-[26px] w-auto shrink-0"
                />
                <p className="font-sans text-[0.875rem] font-bold leading-[1.25] text-gmup-navy sm:text-[0.9375rem]">
                  {locationLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {showRegister ? (
                <RegisterCtaLink
                  href={href}
                  className="shrink-0"
                  buttonClassName="inline-flex h-10 shrink-0 items-center justify-center rounded-[14px_14px_2.5rem_14px] bg-white px-4 font-sans text-[0.875rem] font-bold leading-none text-gmup-coral shadow-[0_2px_6px_rgba(33,51,85,0.1)] transition-colors hover:bg-gmup-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gmup-teal sm:text-[0.9375rem]"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
