import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { CongressBanner } from "@/components/congress-banner";
import { ObjectivesSection } from "@/components/objectives-section";
import { PresidentMessageSection } from "@/components/president-message-section";
import { SectionTitle } from "@/components/section-title";

export function Home() {
  return (
    <>
      <CongressBanner />

      <PresidentMessageSection />

      <section
        className="h-fit pt-2 pb-5 md:pt-3 md:pb-4"
        id="bureau"
        aria-labelledby="bureau-title"
      >
        <Container>
          <Reveal>
            <SectionTitle id="bureau-title" className="mb-3 md:mb-1">
              Le Bureau
            </SectionTitle>
          </Reveal>

          <Reveal delay={0.08} className="mt-0 w-full md:-mt-2">
            <Image
              src="/organigrame.svg"
              alt="Organigramme du Bureau du GMUP"
              width={588}
              height={213}
              sizes="(max-width: 768px) calc(100vw - 2.5rem), 1060px"
              className="h-auto w-full bg-transparent object-contain"
            />
          </Reveal>
        </Container>
      </section>

      <ObjectivesSection />
    </>
  );
}
