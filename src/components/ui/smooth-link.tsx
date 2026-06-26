"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import type { ComponentProps } from "react";

type SmoothLinkProps = ComponentProps<typeof Link>;

export default function SmoothLink({ href, onClick, ...props }: SmoothLinkProps) {
  const lenis = useLenis();
  const pathname = usePathname();

  const resolvedHref = typeof href === "string" ? href : (href as { pathname?: string })?.pathname ?? "";

  const hasHash = resolvedHref.includes("#");
  const hashIndex = resolvedHref.indexOf("#");
  const hash = hashIndex >= 0 ? resolvedHref.slice(hashIndex) : "";
  const path = hashIndex >= 0 ? resolvedHref.slice(0, hashIndex) : resolvedHref;

  const isSamePage = path === "" || path === pathname;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (hasHash && isSamePage && hash) {
      e.preventDefault();
      const target = document.querySelector(hash) as HTMLElement | null;
      if (target) {
        lenis?.scrollTo(target, { offset: -80 });
      }
    } else if (isSamePage && !hasHash) {
      e.preventDefault();
      lenis?.scrollTo(0);
    }
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
