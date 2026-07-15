import { cn } from "@/utils/cn";

type SectionTitleProps = {
  id?: string;
  children: string;
  className?: string;
  dividerSrc?: string;
};

/** Coral section title with teal decorative underline. */
export function SectionTitle({
  id,
  children,
  className,
  dividerSrc = "/bureau%26objectif-underline.svg",
}: SectionTitleProps) {
  return (
    <header
      className={cn(
        "mb-4 inline-flex max-w-full flex-col items-stretch gap-0.5 md:mb-5",
        className,
      )}
    >
      <h2
        id={id}
        className="font-nav text-2xl font-bold tracking-[0.04em] text-gmup-coral uppercase md:text-[1.75rem]"
      >
        {children}
      </h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dividerSrc}
        alt=""
        width={112}
        height={15}
        className="h-auto w-0 min-w-full"
        aria-hidden
      />
    </header>
  );
}
