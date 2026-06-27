"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const INTRO_DURATION_MS = 2700;
const blockedKeys = new Set([
  " ",
  "PageDown",
  "PageUp",
  "ArrowDown",
  "ArrowUp",
  "Home",
  "End",
]);

export default function PageIntroOverlay() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const html = document.documentElement;
    const body = document.body;

    const keepAtTop = () => {
      window.scrollTo(0, 0);
    };

    const preventDefault = (event: Event) => {
      event.preventDefault();
    };

    const preventScrollKey = (event: KeyboardEvent) => {
      if (blockedKeys.has(event.key)) {
        event.preventDefault();
      }
    };

    html.classList.add("intro-lock");
    body.classList.add("intro-lock");
    keepAtTop();

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventScrollKey);
    window.addEventListener("scroll", keepAtTop);

    const timeoutId = window.setTimeout(() => {
      setIsActive(false);
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
      html.classList.remove("intro-lock");
      body.classList.remove("intro-lock");
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("keydown", preventScrollKey);
      window.removeEventListener("scroll", keepAtTop);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: 2.7,
        times: [0, 0.82, 1],
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.98, 1, 1, 0.98] }}
        transition={{
          duration: 2.35,
          times: [0, 0.18, 0.78, 1],
          ease: "easeInOut",
        }}
      >
        beyond.dev
      </motion.div>
    </motion.div>
  );
}
