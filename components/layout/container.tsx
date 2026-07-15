import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "nav" | "footer";
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "w-full px-5 md:px-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
