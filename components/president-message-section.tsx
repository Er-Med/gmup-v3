"use client";

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { PRESIDENT_LETTER, PRESIDENT_MESSAGE } from "@/lib/content";

function QuoteMark({
  closing = false,
  className,
}: {
  closing?: boolean;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/double-quotes.svg"
      alt=""
      width={20}
      height={15}
      aria-hidden
      className={[
        "inline-block h-[0.55em] w-auto shrink-0 align-text-top",
        closing ? "ml-0.5 rotate-180" : "mr-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

function PresidentPortrait() {
  const { president } = PRESIDENT_LETTER;

  return (
    <figure className="mx-auto w-full max-w-[220px] border border-[#0e8a92]/40 bg-white p-2.5 lg:mx-0 lg:max-w-none">
      <Image
        src={PRESIDENT_MESSAGE.portraitSrc}
        alt={PRESIDENT_MESSAGE.portraitAlt}
        width={320}
        height={404}
        sizes="(max-width: 1024px) 220px, 220px"
        className="h-auto w-full object-cover object-top"
      />
      <figcaption className="mt-2.5 text-center">
        <p className="font-nav text-base font-bold leading-snug tracking-wide text-gmup-navy">
          {president.name}
        </p>
      </figcaption>
    </figure>
  );
}

export function PresidentMessageSection() {
  const { lead, intro, quote, closing } = PRESIDENT_LETTER;

  return (
    <section
      className="relative overflow-hidden pt-8 pb-2 md:pt-10 md:pb-3"
      id="president"
      aria-labelledby="president-title"
    >
      <Container className="relative">
        <Reveal>
          <div className="mb-4 inline-flex max-w-full flex-col items-stretch gap-0.5 md:mb-5">
            <h2
              id="president-title"
              className="font-nav text-2xl font-bold tracking-[0.04em] text-gmup-coral uppercase md:text-[1.75rem]"
            >
              {PRESIDENT_MESSAGE.label}
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mot-underline.svg"
              alt=""
              width={220}
              height={16}
              className="h-auto w-0 min-w-full"
              aria-hidden
            />
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-[minmax(180px,220px)_minmax(0,1fr)] md:items-center md:gap-2.5 lg:gap-3">
          <Reveal direction="left" className="self-center">
            <PresidentPortrait />
          </Reveal>

          <Reveal direction="right" as="div" className="relative min-w-0">
            <div className="flex flex-col gap-0 font-nav text-gmup-blue md:pl-[0.85em]">
              <p
                className="prose-justify text-xl font-bold leading-[1.4] [word-spacing:-0.02em] md:-indent-[0.85em] md:text-[19.5px]"
                lang="fr"
              >
                <QuoteMark />
                {lead}
                <QuoteMark closing />
              </p>
              {intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="prose-justify text-base font-normal leading-[1.5] [word-spacing:-0.02em]"
                  lang="fr"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-2 md:mt-2.5">
          <blockquote className="font-nav text-xl font-bold leading-[1.4] text-gmup-blue [word-spacing:-0.02em] md:text-[19.5px]">
            <p className="prose-justify" lang="fr">
              <QuoteMark />
              {quote}
              <QuoteMark closing />
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.12} className="mt-0">
          <div className="flex flex-col gap-0 font-nav text-base font-normal leading-[1.5] text-gmup-blue [word-spacing:-0.02em]">
            {closing.map((paragraph, index) => (
              <p key={index} className="prose-justify" lang="fr">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
