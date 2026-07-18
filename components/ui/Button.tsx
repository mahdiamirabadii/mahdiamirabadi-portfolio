"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  magnetic?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

type Props = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]",
  secondary:
    "glass text-foreground hover:border-white/20 hover:bg-white/5",
  ghost: "text-muted hover:text-foreground",
};

export function Button({
  variant = "primary",
  magnetic = false,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[color,box-shadow,transform] duration-[160ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50 active:scale-[0.97]",
    variants[variant],
    className,
  );

  const content =
    "href" in props && props.href ? (
      <a href={props.href} className={classes}>
        {children}
      </a>
    ) : (
      <button
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );

  if (!magnetic) return content;

  return <Magnetic className="inline-flex">{content}</Magnetic>;
}
