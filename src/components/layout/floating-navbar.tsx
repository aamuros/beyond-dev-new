"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "@/components/layout/logo";
import SmoothLink from "@/components/ui/smooth-link";

const navLinks = [
  { label: "Systems", href: "#systems" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#projects" },
];

const smoothTransition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

/* ── Dropdown animation variants ───────────────────────────────── */

const dropdownVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.2, ease: "easeOut" },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.25, delay: 0.05, ease: "easeIn" },
    },
  },
};

const linkItemVariants = {
  closed: { opacity: 0, y: -8 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.06,
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

/* ── Icon components ───────────────────────────────────────────── */

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

/* ── Animated hamburger / X toggle ─────────────────────────────── */

function MenuToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="lg:hidden absolute top-[6px] right-[10px] w-[44px] h-[44px] aspect-[1/1] flex items-center justify-center overflow-clip cursor-pointer z-10 hover:bg-[rgba(255,255,255,0.4)] rounded-full transition-colors"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center"
          >
            <IconX className="h-5 w-5 text-[#141414]" />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center"
          >
            <IconMenu className="h-5 w-5 text-[#141414]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

/* ── Main component ────────────────────────────────────────────── */

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 1023px)").matches
      : false
  );
  const { scrollY } = useScroll();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.8 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center items-start pt-4 lg:pt-6 w-min mx-auto overflow-visible"
    >
      {/* ── Single persistent nav bar (never unmounts) ──────────── */}
      <motion.nav
        animate={{
          paddingRight: isMobile
            ? mobileOpen ? 20 : scrolled ? 12 : 20
            : scrolled ? 8 : 24,
          borderRadius: isMobile && mobileOpen ? 28 : isMobile ? 28 : 36,
        }}
        transition={smoothTransition}
        className="relative flex flex-col w-[382px] lg:w-[584px] rounded-[28px] lg:rounded-[36px] bg-[rgba(237,237,237,0.64)] backdrop-blur-[48px] select-none overflow-hidden lg:overflow-visible"
        style={{ paddingRight: isMobile ? 20 : 24 }}
      >
        {/* ── Top bar (logo + desktop links + mobile toggle) ──── */}
        <div className="flex flex-row flex-nowrap items-center content-center justify-start h-[56px] py-[16px] pl-5 lg:h-[72px] lg:py-[17px] lg:pl-6 gap-[10px]">
          <SmoothLink href="#hero" className="shrink-0 flex items-center">
            <Logo className="h-[28px] lg:h-[38px] w-auto text-[#141414]" />
          </SmoothLink>

          {/* Desktop nav links */}
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

          {/* Mobile hamburger / close toggle */}
          <MenuToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          />
        </div>

        {/* ── Mobile dropdown content (slides open inside the same nav) */}
        <AnimatePresence initial={false}>
          {isMobile && mobileOpen && (
            <motion.div
              key="mobile-dropdown"
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-[24px] px-[20px] pb-[16px]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={linkItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    custom={i}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleAnchorClick(e, link.href);
                        setMobileOpen(false);
                      }}
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: "26px",
                        color: "#141414",
                        textDecoration: "none",
                        cursor: "pointer",
                        display: "block",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={linkItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  custom={navLinks.length}
                >
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      handleAnchorClick(e, "#contact");
                      setMobileOpen(false);
                    }}
                    className="whitespace-nowrap select-none"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 0,
                      fontSize: 16,
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
                      width: "100%",
                    }}
                  >
                    <span>Get in touch</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
