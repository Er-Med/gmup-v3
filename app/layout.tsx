import type { Metadata } from "next";

import { SiteShell } from "@/components/layout";
import { SITE } from "@/lib/content";
import { carlito, ibmPlexSerif, inter, plusJakartaSans } from "@/lib/fonts";
import { typography } from "@/lib/typography";
import { LenisProvider } from "@/providers/lenis-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { cn } from "@/utils/cn";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `Qui sommes-nous ? | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SITE.locale}
      className={cn(
        "h-full scroll-smooth",
        plusJakartaSans.variable,
        ibmPlexSerif.variable,
        inter.variable,
        carlito.variable,
      )}
    >
      <body className={cn("min-h-full font-sans antialiased", plusJakartaSans.className)}>
        <div
          className={cn(
            "page-bg [--container-max:1180px] [--nav-bg:#1e3259] [--nav-text:#ffffff] font-sans text-body antialiased",
            typography.body,
          )}
        >
          <LenisProvider>
            <MotionProvider>
              <SiteShell>{children}</SiteShell>
            </MotionProvider>
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}
