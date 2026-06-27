"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "@/components/layout/logo";

const navLinks = [
  { label: "Systems", href: "#systems" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#projects" },
];

/* Shared transition config — keeps padding + CTA perfectly in sync */
const smoothTransition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1] as const, /* cubic-bezier — smooth ease-out */
};

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,360px)] bg-white shadow-2xl flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-end px-5 py-4 border-b border-[var(--color-white-400)]">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-[var(--color-white-300)] transition-colors"
                aria-label="Close menu"
              >
                <IconX className="h-5 w-5 text-[var(--color-black-400)]" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 px-2 text-[15px] font-semibold text-[#141414] border-b border-[var(--color-white-400)] hover:text-[var(--color-black-100)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    []
  );

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.8 }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center items-center pt-6 w-min mx-auto overflow-visible"
      >
        <motion.nav
          animate={{ paddingRight: scrolled ? 8 : 24 }}
          transition={smoothTransition}
          className="relative flex flex-row flex-nowrap items-center content-center justify-start w-[584px] h-[72px] py-[17px] pl-6 rounded-[36px] gap-[10px] bg-[rgba(237,237,237,0.64)] backdrop-blur-[48px] overflow-visible select-none"
          style={{ paddingRight: 24 }}
        >
          <Link href="/" className="shrink-0 flex items-center">
            <Logo className="h-[38px] w-auto text-[#141414]" />
          </Link>

          <div
            className="hidden lg:flex flex-row flex-nowrap items-center content-center justify-end overflow-visible relative"
            style={{ flex: "1 0 0px", height: 22 }}
          >
            <div
              className="flex flex-row items-center shrink-0"
              style={{ gap: 24 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  style={{
                    fontSize: 16,
                    fontStyle: "normal",
                    fontWeight: 600,
                    letterSpacing: "0.2px",
                    lineHeight: "22px",
                    color: "#141414",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  className="whitespace-nowrap transition-opacity duration-200 hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {scrolled && (
                <motion.div
                  key="cta-button"
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: "auto", opacity: 1, marginLeft: 24 }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{
                    width: smoothTransition,
                    marginLeft: smoothTransition,
                    opacity: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  className="shrink-0 overflow-hidden"
                  style={{ borderRadius: 999 }}
                >
                  <Link
                    href="#contact"
                    onClick={(e) => handleAnchorClick(e, "#contact")}
                    className="whitespace-nowrap select-none"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 0,
                      fontSize: 16,
                      fontStyle: "normal",
                      fontWeight: 600,
                      letterSpacing: "0.2px",
                      lineHeight: "22px",
                      color: "#fff",
                      background: "#141414",
                      backdropFilter: "blur(40px)",
                      borderRadius: 999,
                      borderWidth: 0,
                      borderStyle: "none",
                      padding: "11px 16px",
                      textAlign: "center",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#2e3238"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#141414"; }}
                  >
                    <span>Get in touch</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-[rgba(255,255,255,0.4)] transition-colors cursor-pointer shrink-0"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <IconMenu className="h-5 w-5 text-[#141414]" />
          </button>
        </motion.nav>
      </motion.header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
