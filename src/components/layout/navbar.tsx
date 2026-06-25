"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import Link from "next/link";
import Logo from "@/components/layout/logo";
import {
  Boxes,
  ChevronDown,
  X,
  Menu,
  Package,
  Calendar,
  Users,
  LayoutDashboard,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Systems", href: "#systems" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const platformCategories = [
  {
    label: "Business Operations",
    items: [
      {
        label: "Order Tracker",
        description: "Track orders from receipt to delivery",
        href: "#systems",
        icon: Package,
      },
      {
        label: "Booking System",
        description: "Manage appointments and reservations",
        href: "#systems",
        icon: Calendar,
      },
      {
        label: "Inventory Tracker",
        description: "Real-time stock monitoring and alerts",
        href: "#systems",
        icon: Boxes,
      },
      {
        label: "Customer Database",
        description: "Centralized customer information",
        href: "#systems",
        icon: Users,
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        label: "Admin Dashboard",
        description: "Overview of all your business systems",
        href: "#systems",
        icon: LayoutDashboard,
      },
      {
        label: "Reporting",
        description: "Insights and analytics in real time",
        href: "#systems",
        icon: BarChart3,
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => clearTimeout(closeTimeoutRef.current);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <div
      className="sticky top-0 z-[var(--site-header-z-index)]"
      style={
        {
          "--site-header-z-index": "50",
        } as React.CSSProperties
      }
    >
      <header
        className={cn(
          "border-b transition-colors duration-250",
          scrolled
            ? "border-subtle-stroke bg-white/95 backdrop-blur-md"
            : "border-transparent bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="absolute inset-0 -z-1 backdrop-blur-md" />

        <div className="mx-auto w-full max-w-[1440px] px-6">
          <nav
            className="pt-4 pb-[15px] text-base font-medium tracking-[-0.16px] leading-[22px]"
            style={{ fontFeatureSettings: '"ss03"' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex grow items-center gap-x-9">
                <Link
                  className="-mx-1 -my-2 rounded-xl px-1 py-2"
                  aria-label="BeyondDev homepage"
                  href="/"
                >
                  <Logo className="h-8 w-auto text-primary-foreground" />
                </Link>

                <div className="relative z-1 hidden lg:block">
                  <ul className="hidden items-center gap-x-1.5 lg:flex">
                    <li>
                      <div
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          className={cn(
                            "relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 button-ghost group select-none text-[15px] before:absolute before:-top-px before:-right-1 before:-bottom-px before:-left-1",
                            dropdownOpen &&
                              "bg-surface-dark text-primary-foreground"
                          )}
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          <span>Systems</span>
                          <ChevronDown
                            className={cn(
                              "h-[18px] w-[18px] transition-[transform] duration-300 ease-in-out",
                              dropdownOpen && "rotate-180"
                            )}
                            strokeWidth={1.2}
                          />
                        </button>

                        <div
                          className={cn(
                            "absolute left-0 top-full pt-2",
                            "transition-[opacity,transform] duration-200 ease-out",
                            dropdownOpen
                              ? "opacity-100 visible translate-y-0 pointer-events-auto"
                              : "opacity-0 invisible -translate-y-1 pointer-events-none"
                          )}
                        >
                          <div className="rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0px_0px_0px_1px_rgba(28,29,31,0.1),0px_1px_2px_0px_rgba(28,29,31,0.05),0px_2px_4px_-1px_rgba(28,29,31,0.02),0px_4px_8px_-2px_rgba(28,29,31,0.03),0px_8px_16px_-4px_rgba(28,29,31,0.04),0px_16px_32px_-8px_rgba(28,29,31,0.05),0px_32px_64px_-8px_rgba(28,29,31,0.06)]">
                            <ul className="relative grid w-180 grid-cols-2 gap-x-3 gap-y-1 p-4 pt-3 max-xl:w-144">
                              <svg
                                width="1"
                                height="100%"
                                className="divider absolute inset-y-0 left-0 text-primary-foreground/10 hidden"
                              >
                                <line
                                  x1="0.5"
                                  y1="0"
                                  x2="0.5"
                                  y2="100%"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                />
                              </svg>
                              {platformCategories.map((category) => (
                                <Fragment key={category.label}>
                                  <li className="contents">
                                    <p className="mt-3 mb-1 inline-block px-4 text-overline leading-4! col-span-2">
                                      {category.label}
                                    </p>
                                  </li>
                                  {category.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                      <li key={item.label} className="contents">
                                        <Link
                                          className="relative inline-flex cursor-pointer text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default rounded-xl text-base has-[>svg:last-child,>img:last-child]:pr-2.5 has-[>svg:first-child,>img:first-child]:pl-2.5 button-ghost group h-fit w-full items-center justify-start gap-x-3 p-1.5 md:p-2 before:absolute before:-top-0.75 before:-right-1.75 before:-bottom-0.75 before:-left-1.75"
                                          href={item.href}
                                          tabIndex={-1}
                                          data-tabindex=""
                                          onClick={() => setDropdownOpen(false)}
                                        >
                                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[13px] border border-subtle-stroke md:rounded-none md:border-0">
                                            <svg
                                              width="40"
                                              height="40"
                                              fill="none"
                                              className="absolute inset-0"
                                            >
                                              <g
                                                className="transition-colors duration-150ms ease-out stroke-white-700/40 group-hover:stroke-white-700/70 dark:stroke-black-500/40 dark:group-hover:stroke-black-500/70"
                                                strokeWidth=".7"
                                                strokeMiterlimit="10"
                                              >
                                                <path
                                                  d="M40 14H0M40 26H0M19.947 0 20 40"
                                                  strokeDasharray="1.6 1.6"
                                                />
                                                <path d="M35 0v40M5 0v40M0 5h40M0 35h40" />
                                              </g>
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                              <Icon className="h-5 w-5 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                          </div>
                                          <div className="flex w-full min-w-0 flex-col pr-2">
                                            <div className="flex w-full items-baseline justify-between gap-1.5 text-primary-foreground">
                                              <span className="truncate text-sm">
                                                {item.label}
                                              </span>
                                              <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                className="relative shrink-0 text-secondary-foreground opacity-0 max-lg:hidden -translate-x-0.25 transition-[opacity,translate] duration-400 ease-in-out group-hover:translate-0 group-hover:opacity-100 group-hover:duration-300 group-active:translate-0 group-active:opacity-100 group-active:duration-50"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M10.3536 6.35356C10.5488 6.1583 10.5488 5.84171 10.3536 5.64645L7.85355 3.14645C7.65829 2.95118 7.34171 2.95118 7.14645 3.14645C6.95118 3.34171 6.95118 3.65829 7.14645 3.85355L8.79289 5.5L2 5.50001C1.72386 5.50001 1.5 5.72386 1.5 6.00001C1.5 6.27615 1.72386 6.50001 2 6.50001L8.79289 6.5L7.14645 8.14645C6.95118 8.34171 6.95118 8.65829 7.14645 8.85355C7.34171 9.04882 7.65829 9.04882 7.85355 8.85355L10.3536 6.35356Z"
                                                  fill="currentColor"
                                                />
                                              </svg>
                                            </div>
                                            <p className="truncate text-accent-foreground text-sm">
                                              {item.description}
                                            </p>
                                          </div>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </Fragment>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    {navLinks
                      .filter((l) => l.label !== "Systems")
                      .map((link) => (
                        <li key={link.href}>
                          <Link
                            className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 button-ghost text-[15px] before:absolute before:-top-px before:-right-1 before:-bottom-px before:-left-1"
                            href={link.href}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <button
                className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border text-base transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default size-9 rounded-[10px] button-ghost lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="h-6 w-6 text-muted" />
                ) : (
                  <Menu className="h-6 w-6 text-muted" />
                )}
              </button>

              <div className="hidden gap-x-2.5 lg:flex">
                <Link
                  href="#contact"
                  className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm button-outline"
                >
                  Sign in
                </Link>
                <Link
                  href="#contact"
                  className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-9 gap-x-1.5 rounded-[10px] px-3 text-sm button-primary-navbar"
                >
                  Free Checkup
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative inline-flex cursor-pointer items-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-11.5 gap-x-2 rounded-xl px-3.5 text-base button-ghost justify-start"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2.5">
                <Link
                  href="#contact"
                  className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-11.5 gap-x-2 rounded-xl px-3.5 text-base button-outline"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="#contact"
                  className="relative inline-flex cursor-pointer items-center justify-center text-nowrap border transition-colors duration-300 ease-in-out hover:duration-50 active:duration-50 disabled:pointer-events-none disabled:cursor-default h-11.5 gap-x-2 rounded-xl px-3.5 text-base button-primary-navbar"
                  onClick={() => setMobileOpen(false)}
                >
                  Free Checkup
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
