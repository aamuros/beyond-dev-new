"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function LenisRouteSync() {
  const lenis = useLenis();
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname && lenis) {
      lenis.resize();
      prevPath.current = pathname;
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        duration: 0.9,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.8,
        anchors: {
          offset: -80,
          duration: 1.0,
        },
      }}
    >
      <LenisRouteSync />
      {children}
    </ReactLenis>
  );
}
