"use client";

import { ReactLenis } from "lenis/react";

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
      {children}
    </ReactLenis>
  );
}
