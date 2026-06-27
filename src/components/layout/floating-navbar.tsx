"use client";

import { useState, useRef, useEffect } from "react";
import SmoothLink from "@/components/ui/smooth-link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/layout/logo";

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation Data                                                    */
/* ------------------------------------------------------------------ */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/#contact" },
  { label: "Contact", href: "/#contact" },
];

/* ------------------------------------------------------------------ */
/*  Mobile Drawer                                                      */
/* ------------------------------------------------------------------ */

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
            className={cn(
              "fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,360px)]",
              "bg-white shadow-2xl",
              "flex flex-col overflow-y-auto"
            )}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-white-400)]">
              <Logo className="h-5 w-auto" />
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
                <SmoothLink
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 px-2 text-[15px] font-semibold text-[var(--color-black-200)] border-b border-[var(--color-white-400)] hover:text-[var(--color-black-100)] transition-colors"
                >
                  {link.label}
                </SmoothLink>
              ))}
            </nav>

            <div className="p-4 border-t border-[var(--color-white-400)]">
              <SmoothLink
                href="/#contact"
                onClick={onClose}
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-3 rounded-full",
                  "bg-[var(--color-black-100)] text-white text-[14px] font-semibold",
                  "transition-all duration-200 hover:bg-[var(--color-black-300)]",
                  "active:scale-[0.97]"
                )}
              >
                Get Started
                <IconArrowRight className="h-4 w-4" />
              </SmoothLink>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Floating Navbar                                               */
/* ------------------------------------------------------------------ */

export default function FloatingNavbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const lastToggleRef = useRef(0);
  const lastDirectionRef = useRef<"up" | "down" | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const delta = latest - previous;
    const scrollingDown = delta > 0;
    const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800;
    const now = Date.now();

    let nextVisible: boolean | null = null;

    if (latest < 10) {
      nextVisible = false;
    } else if (latest < heroHeight) {
      if (scrollingDown && delta > 4) nextVisible = true;
      if (!scrollingDown && delta < -4) nextVisible = false;
    } else {
      nextVisible = !scrollingDown;
    }

    if (nextVisible !== null && nextVisible !== visible) {
      const direction = nextVisible ? "up" : "down";
      const minInterval = lastDirectionRef.current !== direction ? 300 : 150;
      if (now - lastToggleRef.current > minInterval) {
        setVisible(nextVisible);
        lastToggleRef.current = now;
        lastDirectionRef.current = direction;
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="sync">
        {visible && (
          <motion.header
            ref={navRef}
            initial={{ y: -80, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.8,
            }}
            className="fixed top-5 inset-x-0 mx-auto z-50 w-[calc(100%-2rem)] max-w-5xl"
          >
            <nav
              className={cn(
                "relative flex items-center",
                "h-[100px] px-4",
                "rounded-[20px]",
                "bg-white",
                "border-b border-[#f2f1f3]",
                "shadow-[0px_62px_17px_0px_rgba(0,0,0,0),0px_40px_16px_0px_rgba(0,0,0,0.01),0px_22px_13px_0px_rgba(0,0,0,0.02),0px_10px_10px_0px_rgba(0,0,0,0.04),0px_2px_5px_0px_rgba(0,0,0,0.04)]",
                "transition-[border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              )}
            >
              <div className="hidden lg:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <SmoothLink
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-6 py-2.5 text-[16px] font-semibold leading-[24px] -tracking-[0.352px] rounded-full",
                      "text-[#19171c]",
                      "transition-all duration-200",
                      "hover:text-[var(--color-black-100)] hover:bg-[var(--color-white-300)]"
                    )}
                  >
                    {link.label}
                  </SmoothLink>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-2 ml-auto">
                <SmoothLink
                  href="/#contact"
                  className={cn(
                    "group/cta inline-flex items-center gap-1.5",
                    "h-10 px-6 rounded-full",
                    "bg-[var(--color-black-100)] text-white",
                    "text-[14px] font-semibold",
                    "transition-all duration-200",
                    "hover:bg-[var(--color-black-300)]",
                    "active:scale-[0.96]"
                  )}
                >
                  <span>Get Started</span>
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                </SmoothLink>
              </div>

              <button
                className="lg:hidden p-2.5 rounded-full hover:bg-[var(--color-white-300)] transition-colors cursor-pointer"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <IconMenu className="h-5 w-5 text-[var(--color-black-400)]" />
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
