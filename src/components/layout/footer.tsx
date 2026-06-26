"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-0 w-full bg-[#09637E] text-slate-50 pt-24 pb-12 px-6 h-screen flex flex-col justify-between overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        
        {/* Massive Statement with Upward Reveal Animation */}
        <motion.h2 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-5xl"
        >
          Great systems come from teams that are close enough to care — and technical enough to automate things.
        </motion.h2>

        {/* Staggered Quick Links and Interaction Grid */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-start"
        >
          <div>
            <a href="#contact" className="inline-block bg-white text-[#09637E] font-semibold text-lg py-4 px-8 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm">
              Book a 15-Min Scoping Call
            </a>
            <p className="mt-3 text-sm text-slate-300">No technical jargon, just practical solutions.</p>
          </div>
          
          <div className="flex flex-col space-y-3 text-xl font-medium md:pl-12">
            <a href="#systems" className="hover:text-white text-slate-300 transition-colors w-max">Systems</a>
            <a href="#process" className="hover:text-white text-slate-300 transition-colors w-max">Process</a>
            <a href="#contact" className="hover:text-white text-slate-300 transition-colors w-max">Contact</a>
          </div>
        </motion.div>
      </div>

      {/* Structural Closing Baseline */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-slate-400"
        >
          <p>&copy; 2026 beyond.dev &mdash; A beyond.ink studio company.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
