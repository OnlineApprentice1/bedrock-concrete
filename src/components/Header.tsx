"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 30 };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-base-200 backdrop-blur-md border-b-2 border-primary"
      style={{ borderColor: "var(--clr-primary)" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="type-card text-primary font-heading leading-none tracking-tight"
          style={{ color: "var(--clr-primary)", fontFamily: "var(--font-heading)" }}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="type-small text-base-content hover:text-primary transition-colors"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-profile"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-base-content hover:text-primary transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
              className="fixed inset-0 z-40 bg-base-100/80 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              key="drawer"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              transition={transition}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-base-200 border-l-2 md:hidden flex flex-col"
              style={{ borderColor: "var(--clr-primary)" }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-6 h-16 border-b-2"
                style={{ borderColor: "var(--clr-surface-3)" }}
              >
                <span
                  className="type-card font-heading"
                  style={{ color: "var(--clr-primary)", fontFamily: "var(--font-heading)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 text-base-content hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="type-body py-3 border-b transition-colors hover:text-primary"
                    style={{
                      color: "var(--clr-text-secondary)",
                      borderColor: "var(--clr-surface-3)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-profile inline-block w-full text-center"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
