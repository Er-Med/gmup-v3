import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionTitle } from "@/components/section-title";
import { OBJECTIVES } from "@/lib/content";

function EcgBullet() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/objective-line-divider.svg"
      alt=""
      width={32}
      height={16}
      aria-hidden
      className="mt-1 h-4 w-8 shrink-0"
    />
  );
}

export function ObjectivesSection() {
  return (
    <section
      className="pt-4 pb-10 md:pt-3.5 md:pb-12"
      id="objectifs"
      aria-labelledby="objectifs-title"
    >
      <Container>
        <Reveal>
          <SectionTitle id="objectifs-title" dividerSrc="/obj-bureau-divider.svg">
            Objectifs
          </SectionTitle>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-2 flex max-w-[47.41rem] list-none flex-col gap-1.5 md:mt-3 md:gap-2">
            {OBJECTIVES.map((objective) => (
              <li
                key={objective}
                className="flex items-start gap-3 md:gap-4"
              >
                <EcgBullet />
                <p className="font-body text-[17.1px] font-medium leading-snug text-gmup-navy md:text-[19px]">
                  {objective}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
