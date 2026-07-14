"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { useIsMobile } from "@/hooks";
import { cn } from "@/utils/cn";

type AnimatedBannerProps = {
  src: string;
  alt: string;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedBanner({ src, alt, className }: AnimatedBannerProps) {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const simple = prefersReducedMotion || isMobile;

  return (
    <section
      aria-label="Bannière"
      className={cn("w-full px-4 pt-4 sm:px-5 sm:pt-5 md:px-6 md:pt-6", className)}
    >
      <motion.div
        className="page-gradient relative w-full overflow-hidden rounded-2xl leading-none sm:rounded-3xl md:rounded-[1.75rem]"
        initial={
          prefersReducedMotion
            ? false
            : simple
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 28,
                }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: simple ? 0.4 : 1.15, ease }}
      >
        {simple ? (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={720}
            sizes="100vw"
            className="block h-[240px] w-full object-cover object-center sm:h-[280px] md:h-auto md:object-contain"
            priority
          />
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, ease }}
              className="w-full"
            >
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={720}
                sizes="100vw"
                className="block h-[240px] w-full object-cover object-center sm:h-[280px] md:h-auto md:object-contain"
                priority
              />
            </motion.div>

            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: "120%", opacity: [0, 0.7, 0] }}
              transition={{ duration: 1.35, ease, delay: 0.35 }}
            />
          </>
        )}
      </motion.div>
    </section>
  );
}
