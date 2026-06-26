"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import SmoothLink from "@/components/ui/smooth-link";
const footerLinkGroups = [
  {
    heading: "Systems",
    links: [
      { label: "Order Tracker", href: "#systems" },
      { label: "Booking System", href: "#systems" },
      { label: "Inventory Tracker", href: "#systems" },
      { label: "Customer Database", href: "#systems" },
      { label: "Admin Dashboard", href: "#systems" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "+63 917 123 4567", href: "tel:+639171234567", icon: "phone" },
      { label: "hello@beyonddev.ph", href: "mailto:hello@beyonddev.ph", icon: "mail" },
      { label: "Philippines", href: "#", icon: "map" },
    ],
  },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "GitHub",
    href: "#",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

function ContactIcon({ type }: { type: string }) {
  const className = "h-4 w-4 shrink-0 text-black";
  switch (type) {
    case "phone":
      return <Phone className={className} />;
    case "mail":
      return <Mail className={className} />;
    case "map":
      return <MapPin className={className} />;
    default:
      return null;
  }
}

const linkClasses =
  "block w-fit rounded transition-colors outline-none focus-visible:outline-focus px-1.5 -mx-1.5 text-xs font-medium text-black hover:text-gray-500 text-left disabled:opacity-0";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full overflow-hidden bg-[#09637E] text-slate-50 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto w-full">
        
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
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 mb-2 items-start"
        >
          <div>
            <SmoothLink href="#contact" className="inline-block bg-white text-[#09637E] font-semibold text-lg py-4 px-8 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm">
              Book a 15-Min Scoping Call
            </SmoothLink>
            <p className="mt-3 text-sm text-slate-300">No technical jargon, just practical solutions.</p>
          </div>
          
          <div className="flex flex-col space-y-3 text-xl font-medium md:pl-12">
            <SmoothLink href="#systems" className="hover:text-white text-slate-300 transition-colors w-max">Systems</SmoothLink>
            <SmoothLink href="#process" className="hover:text-white text-slate-300 transition-colors w-max">Process</SmoothLink>
            <SmoothLink href="#contact" className="hover:text-white text-slate-300 transition-colors w-max">Contact</SmoothLink>
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
          className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-slate-400"
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
