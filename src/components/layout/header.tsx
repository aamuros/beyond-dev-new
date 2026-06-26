"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/layout/logo";
import styles from "./header.module.css";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Product", href: "/product/" },
  { label: "Customers", href: "/customers/" },
  { label: "Templates", href: "/templates/" },
  { label: "Pricing", href: "/pricing/" },
];

function BurgerIcon() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0.5 10H15.5V8.33333H0.5V10ZM0.5 5.83333H15.5V4.16667H0.5V5.83333ZM0.5 0V1.66667H15.5V0H0.5Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Trigger appear-in animation on mount
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        styles.header,
        styles.hasAppearIn,
        animateIn && styles.animateIn,
        isScrolled && styles.isScrolled,
        mobileOpen && styles.mobileMenuOpen
      )}
    >
      <div className={cn(styles.container)}>
        {/* Background layers */}
        <div className={cn(styles.mainNavBg, styles.mainNavBgDefault)} />
        <div className={cn(styles.mainNavBg, styles.mainNavBgScroll)} />

        {/* Grid layout */}
        <div className={styles.grid}>
          <div className={styles.content}>
            {/* Left: Logo + Nav links */}
            <div className={styles.columnLeft}>
              <div className={styles.logo}>
                <Link
                  href="/"
                  aria-label="BeyondDev Logo : Back to homepage"
                >
                  <Logo className="h-7 w-auto" />
                </Link>
              </div>
              <nav className={styles.links}>
                <h2 className={styles.srOnly} aria-hidden="true">
                  Main navigation
                </h2>
                <ul role="menubar" aria-label="Main navigation menu">
                  {navItems.map((item) => (
                    <li
                      key={item.label}
                      role="menuitem"
                      className={styles.navLink}
                    >
                      <Link href={item.href} className={styles.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right: Buttons */}
            <div className={styles.columnRight}>
              <div className={styles.buttons}>
                <div className={styles.preBurgerButton}>
                  <Link
                    href="#contact"
                    className={cn(
                      styles.button,
                      styles.buttonBlack,
                      styles.buttonSmall,
                      styles.headerButton
                    )}
                  >
                    <span className={styles.buttonInner}>Get Started</span>
                  </Link>
                </div>
                <div className={styles.burgerButtonWrapper}>
                  <button
                    type="button"
                    className={cn(
                      styles.button,
                      styles.buttonBlack,
                      styles.buttonSmall,
                      styles.headerButton,
                      styles.burgerButton
                    )}
                    aria-disabled="false"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    <span className={styles.buttonInner}>
                      {mobileOpen ? <CloseIcon /> : <BurgerIcon />}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.container}>
            <nav className={styles.mobileNav}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={cn(
                  styles.button,
                  styles.buttonBlack,
                  styles.buttonSmall,
                  styles.mobileCta
                )}
                onClick={() => setMobileOpen(false)}
              >
                <span className={styles.buttonInner}>Get Started</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      <div
        className={styles.backdrop}
        onClick={() => setMobileOpen(false)}
      />
    </header>
  );
}
