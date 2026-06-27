"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SmoothLink from "@/components/ui/smooth-link";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Subtle parallax on text content only
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (

    <footer
      ref={footerRef}
      className="footer-drawer"
    >
      <div
        className="footer-drawer__inner"
      >
        <div className="max-w-6xl mx-auto w-full">

          {/* Massive Statement */}
          <motion.h2
            style={{ y }}
            className="text-2xl md:text-4xl font-bold tracking-tight leading-tight max-w-4xl"
          >
            Great systems come from teams that are close enough to care — and technical enough to automate things.
          </motion.h2>

          {/* Quick Links and CTA */}
          <motion.div
            style={{ y }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mb-0 items-start"
          >
            <div>
              <SmoothLink
                href="#contact"
                className="inline-block bg-white text-[#09637E] font-semibold text-base py-3 px-6 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                Book a 15-Min Scoping Call
              </SmoothLink>
              <p className="mt-3 text-sm text-slate-300">
                No technical jargon, just practical solutions.
              </p>
            </div>

            <div className="flex flex-col space-y-2 text-base font-medium md:pl-12 footer-link-list">
              <SmoothLink
                href="#systems"
                className="footer-link hover:text-white text-slate-300 transition-colors w-max"
              >
                Systems
              </SmoothLink>
              <SmoothLink
                href="#process"
                className="footer-link hover:text-white text-slate-300 transition-colors w-max"
              >
                Process
              </SmoothLink>
              <SmoothLink
                href="#contact"
                className="footer-link hover:text-white text-slate-300 transition-colors w-max"
              >
                Contact
              </SmoothLink>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-slate-400">
            <p>&copy; 2026 beyond.dev &mdash; A beyond.ink studio company.</p>
            <div className="flex gap-6 mt-3 md:mt-0">
              <span className="text-slate-400">LinkedIn</span>
              <span className="text-slate-400">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
