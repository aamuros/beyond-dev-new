"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/layout/logo";

/* ------------------------------------------------------------------ */
/*  Icons (inline SVGs for zero-dependency megamenu icons)             */
/* ------------------------------------------------------------------ */

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}

function IconTemplate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  );
}

function IconPlug({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Z" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

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

function IconChevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation Data                                                    */
/* ------------------------------------------------------------------ */

interface NavItem {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MegaMenuData {
  trigger: string;
  sections: {
    title: string;
    items: NavItem[];
  }[];
  featured?: {
    title: string;
    description: string;
    href: string;
    badge?: string;
  };
}

const megaMenus: MegaMenuData[] = [
  {
    trigger: "Platform",
    sections: [
      {
        title: "Build",
        items: [
          {
            label: "Product Overview",
            href: "/product/",
            description: "Discover what Beyond.dev can do for your team.",
            icon: IconLayers,
          },
          {
            label: "Templates",
            href: "/templates/",
            description: "Jump-start projects with ready-made blueprints.",
            icon: IconTemplate,
          },
          {
            label: "Integrations",
            href: "/integrations/",
            description: "Connect with the tools you already use.",
            icon: IconPlug,
          },
        ],
      },
    ],
    featured: {
      title: "14-Day Business System Starter",
      description: "Get a custom software system built for your business in just 14 days.",
      href: "/#contact",
      badge: "Popular",
    },
  },
  {
    trigger: "Resources",
    sections: [
      {
        title: "Learn",
        items: [
          {
            label: "Customers",
            href: "/customers/",
            description: "See how teams are shipping faster with Beyond.dev.",
            icon: IconUsers,
          },
          {
            label: "Documentation",
            href: "/docs/",
            description: "Guides, references, and API walkthroughs.",
            icon: IconBook,
          },
          {
            label: "Changelog",
            href: "/changelog/",
            description: "Latest updates and improvements.",
            icon: IconSparkles,
          },
        ],
      },
    ],
  },
];

const directLinks = [
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/#contact" },
];

/* ------------------------------------------------------------------ */
/*  Megamenu Panel                                                     */
/* ------------------------------------------------------------------ */

function MegaMenuPanel({ menu, onClose }: { menu: MegaMenuData; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
      style={{ minWidth: menu.featured ? "580px" : "380px" }}
    >
      {/* Little arrow pointer */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-[var(--color-white-500)] rounded-tl-sm" />

      <div
        className={cn(
          "relative rounded-2xl bg-white",
          "border border-[var(--color-white-500)]",
          "shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12),0_8px_24px_-8px_rgba(0,0,0,0.06)]",
          "overflow-hidden"
        )}
      >
        <div className={cn("flex", menu.featured ? "divide-x divide-[var(--color-white-400)]" : "")}>
          {/* Main items */}
          <div className="p-3 flex-1">
            {menu.sections.map((section, sIdx) => (
              <div key={section.title}>
                <p className="px-3 pt-2 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-black-700)]">
                  {section.title}
                </p>
                <ul className="space-y-0.5">
                  {section.items.map((item, iIdx) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: sIdx * 0.05 + iIdx * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "group/item flex items-start gap-3 rounded-xl px-3 py-2.5",
                          "transition-all duration-200",
                          "hover:bg-[var(--color-white-300)]"
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                            "bg-[var(--color-white-300)] text-[var(--color-black-600)]",
                            "transition-all duration-200",
                            "group-hover/item:bg-[var(--color-black-100)] group-hover/item:text-white",
                            "group-hover/item:shadow-sm"
                          )}
                        >
                          <item.icon className="h-[18px] w-[18px]" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold leading-tight text-[var(--color-black-200)] group-hover/item:text-[var(--color-black-100)]">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-[12.5px] leading-relaxed text-[var(--color-black-700)]">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured section */}
          {menu.featured && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-[220px] p-3"
            >
              <Link
                href={menu.featured.href}
                onClick={onClose}
                className={cn(
                  "group/featured flex h-full flex-col justify-between rounded-xl p-4",
                  "bg-gradient-to-br from-[var(--color-black-100)] to-[var(--color-black-300)]",
                  "transition-all duration-300",
                  "hover:from-[var(--color-black-50)] hover:to-[var(--color-black-200)]",
                  "hover:shadow-lg"
                )}
              >
                <div>
                  {menu.featured.badge && (
                    <span className="inline-block mb-2.5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[var(--color-yellow-500)] text-[var(--color-black-100)]">
                      {menu.featured.badge}
                    </span>
                  )}
                  <p className="text-[14px] font-semibold leading-snug text-white">
                    {menu.featured.title}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--color-black-800)]">
                    {menu.featured.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-[var(--color-yellow-500)] transition-transform duration-200 group-hover/featured:translate-x-1">
                  Get started
                  <IconArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Drawer                                                      */
/* ------------------------------------------------------------------ */

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // Lock body scroll when drawer is open
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
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
            {/* Close button */}
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

            {/* Links */}
            <nav className="flex-1 px-4 py-3">
              {megaMenus.map((menu) => (
                <div key={menu.trigger} className="border-b border-[var(--color-white-400)]">
                  <button
                    onClick={() =>
                      setExpandedMenu(expandedMenu === menu.trigger ? null : menu.trigger)
                    }
                    className="flex w-full items-center justify-between py-3.5 px-2 text-[15px] font-semibold text-[var(--color-black-200)]"
                  >
                    {menu.trigger}
                    <motion.span
                      animate={{ rotate: expandedMenu === menu.trigger ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconChevron className="h-4 w-4 text-[var(--color-black-700)]" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {expandedMenu === menu.trigger && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 pl-2">
                          {menu.sections.map((section) =>
                            section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-[var(--color-white-300)] transition-colors"
                              >
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-white-300)] text-[var(--color-black-600)]">
                                  <item.icon className="h-4 w-4" />
                                </span>
                                <div>
                                  <p className="text-[14px] font-medium text-[var(--color-black-200)]">
                                    {item.label}
                                  </p>
                                  <p className="text-[12px] text-[var(--color-black-700)]">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {directLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 px-2 text-[15px] font-semibold text-[var(--color-black-200)] border-b border-[var(--color-white-400)] hover:text-[var(--color-black-100)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="p-4 border-t border-[var(--color-white-400)]">
              <Link
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
              </Link>
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const scrollingDown = latest > previous;
    const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800;

    if (latest < 10) {
      // At the very top — hidden
      setVisible(false);
    } else if (latest < heroHeight) {
      // In hero section — show when scrolling down, hide when scrolling up
      setVisible(scrollingDown);
    } else {
      // Past hero — show on scroll up, hide on scroll down
      setVisible(!scrollingDown);
    }
  });

  const handleMenuEnter = useCallback((trigger: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(trigger);
  }, []);

  const handleMenuLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  // Close megamenu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.header
            ref={navRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                "transition-[border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                activeMenu && "shadow-[0px_62px_17px_0px_rgba(0,0,0,0),0px_40px_16px_0px_rgba(0,0,0,0.01),0px_22px_13px_0px_rgba(0,0,0,0.02),0px_10px_10px_0px_rgba(0,0,0,0.04),0px_2px_5px_0px_rgba(0,0,0,0.04)]"
              )}
            >
              {/* Desktop nav items — left aligned */}
              <div className="hidden lg:flex items-center gap-0.5">
                {/* Home link */}
                <Link
                  href="/"
                  className={cn(
                    "px-6 py-2.5 text-[16px] font-semibold leading-[24px] -tracking-[0.352px] rounded-full",
                    "text-[#19171c]",
                    "transition-all duration-200",
                    "hover:text-[var(--color-black-100)] hover:bg-[var(--color-white-300)]"
                  )}
                >
                  Home
                </Link>

                {/* Mega-menu triggers */}
                {megaMenus.map((menu) => (
                  <div
                    key={menu.trigger}
                    className="relative"
                    onMouseEnter={() => handleMenuEnter(menu.trigger)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-6 py-2.5 text-[16px] font-semibold leading-[24px] -tracking-[0.352px] rounded-full",
                        "transition-all duration-200 cursor-pointer",
                        activeMenu === menu.trigger
                          ? "text-[var(--color-black-100)] bg-[var(--color-white-300)]"
                          : "text-[#19171c] hover:text-[var(--color-black-100)] hover:bg-[var(--color-white-300)]"
                      )}
                      onClick={() =>
                        setActiveMenu(activeMenu === menu.trigger ? null : menu.trigger)
                      }
                      aria-expanded={activeMenu === menu.trigger}
                    >
                      {menu.trigger}
                      <motion.span
                        animate={{ rotate: activeMenu === menu.trigger ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconChevron className="h-3.5 w-3.5" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeMenu === menu.trigger && (
                        <MegaMenuPanel
                          menu={menu}
                          onClose={() => setActiveMenu(null)}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Direct links */}
                {directLinks.map((link) => (
                  <Link
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
                  </Link>
                ))}
              </div>

              {/* CTA buttons (desktop) — pushed right */}
              <div className="hidden lg:flex items-center gap-2 ml-auto">
                <Link
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
                </Link>
              </div>

              {/* Mobile menu button */}
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

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
