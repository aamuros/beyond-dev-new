"use client";

import { motion } from "framer-motion";
import SmoothLink from "@/components/ui/smooth-link";

export default function Footer() {
  return (
    <footer className="relative min-h-[70vh] w-full overflow-hidden bg-[#09637E] text-slate-50 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Massive Statement with Upward Reveal Animation */}
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-5xl"
        >
          Great systems come from teams that are close enough to care &mdash; and technical enough to automate things.
        </motion.h2>

        {/* Quick Links and CTA */}
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-0 items-start"
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

          <div className="flex flex-col space-y-2 text-base font-medium md:pl-12">
            <SmoothLink
              href="#systems"
              className="hover:text-white text-slate-300 transition-colors w-max"
            >
              Systems
            </SmoothLink>
            <SmoothLink
              href="#process"
              className="hover:text-white text-slate-300 transition-colors w-max"
            >
              Process
            </SmoothLink>
            <SmoothLink
              href="#contact"
              className="hover:text-white text-slate-300 transition-colors w-max"
            >
              Contact
            </SmoothLink>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-10 mt-14 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-slate-400">
          <p>&copy; 2026 beyond.dev &mdash; A beyond.ink studio company.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="text-slate-400">LinkedIn</span>
            <span className="text-slate-400">GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
