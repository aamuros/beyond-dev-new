"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import InteractiveTextGrid from "@/components/sections/interactive-text-grid";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const topTextY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const bottomTextY = useTransform(scrollYProgress, [0, 1], [0, -38]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.9]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <InteractiveTextGrid />

      <motion.div
        style={{ y: topTextY, opacity: textOpacity }}
        className="pointer-events-none absolute inset-x-0 top-0 z-10 text-white"
      >
        <motion.div
          className="relative h-28"
          initial={{ opacity: 0, y: -18, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 2.85,
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <nav className="absolute left-4 top-6 hidden flex-col gap-1 text-lg font-semibold leading-[0.95] tracking-[-0.02em] text-white md:flex lg:left-6">
            <a className="pointer-events-auto w-fit transition-opacity hover:opacity-70" href="#systems">
              Work
            </a>
            <a className="pointer-events-auto w-fit transition-opacity hover:opacity-70" href="#process">
              Approach
            </a>
            <a className="pointer-events-auto w-fit transition-opacity hover:opacity-70" href="#about">
              Why Us
            </a>
            <a className="pointer-events-auto w-fit transition-opacity hover:opacity-70" href="#contact">
              Pricing
            </a>
          </nav>

          <div className="absolute left-1/2 top-5 -translate-x-1/2 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            beyond.dev
          </div>

          <a
            href="#contact"
            className="pointer-events-auto absolute right-4 top-5 hidden items-center gap-3 text-sm font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-80 sm:flex lg:right-6"
          >
            <span>Let&apos;s work together</span>
            <span className="flex size-9 items-center justify-center bg-white text-black">
              <ArrowUpRight className="size-5" strokeWidth={2} />
            </span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: bottomTextY, opacity: textOpacity }}
        className="pointer-events-none absolute inset-0 z-10 text-white"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 3.05,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="absolute bottom-[18vh] left-4 max-w-[92vw] md:bottom-[22vh] lg:bottom-[24vh] lg:left-6 lg:max-w-[1180px]">
            <h1 className="max-w-[1120px] text-5xl font-normal leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] 2xl:text-[104px]">
              Embedded digital team
              <br />
              for SaaS, mobile, web &amp; branding
            </h1>

            <p className="mt-6 max-w-[760px] text-lg font-medium leading-snug tracking-[-0.02em] text-white/85 md:text-xl lg:text-2xl">
              We don&apos;t just build systems &mdash; we become part of your workflow.
              Then we build, refine, and evolve your product from the inside out.
            </p>

            <a
              href="#process"
              className="pointer-events-auto mt-8 inline-flex items-center overflow-hidden rounded-full bg-white text-sm font-semibold text-black transition-opacity hover:opacity-85 md:text-base"
            >
              <span className="px-6 py-3">Learn our approach</span>
              <span className="flex size-12 items-center justify-center border-l border-black/10">
                <ArrowUpRight className="size-5" strokeWidth={2} />
              </span>
            </a>
          </div>

          <div className="absolute inset-x-4 bottom-5 grid grid-cols-1 gap-4 text-xs font-medium leading-tight tracking-[-0.01em] text-white/80 sm:grid-cols-3 lg:inset-x-6 lg:text-sm">
            <div>Opinionated creative technology studio</div>
            <div className="hidden text-center sm:block">
              Global Impact
              <br />
              Porto, Portugal &mdash; 15:17
            </div>
            <div className="hidden justify-self-end text-right sm:block">
              SaaS
              <br />
              Mobile
              <br />
              Web
              <br />
              Branding
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
