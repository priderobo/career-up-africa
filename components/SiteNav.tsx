"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Courses", href: "/#courses" },
  { label: "For Creators", href: "/for-creators" },
  { label: "For Companies", href: "/for-companies" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu if the viewport grows past the breakpoint while it's open
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    function onChange(e: MediaQueryListEvent) {
      if (e.matches) setOpen(false);
    }
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const dark = scrolled || open;

  return (
    <div
      className={`sticky top-0 z-[100] transition-colors duration-300 ${
        dark ? "bg-brand-blue shadow-[0_10px_26px_-16px_rgba(10,20,50,0.5)]" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="/">
          <img src={dark ? "/career_up_logo-2.png" : "/career_up_logo.png"} alt="CareerUp Africa" className="h-7" />
        </a>

        <nav className={`hidden gap-8 text-[15px] font-medium md:flex ${dark ? "text-white/80" : "text-muted"}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${dark ? "hover:text-white" : "hover:text-brand-blue"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className={`hidden items-center rounded-xl px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 md:inline-flex ${
              dark ? "bg-brand-orange hover:bg-[#DD640C]" : "bg-brand-blue hover:bg-[#16316F]"
            }`}
          >
            Start learning
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden ${
              dark ? "text-white hover:bg-white/10" : "text-ink hover:bg-canvas"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col border-t border-white/10 px-5 pb-5 pt-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3.5 text-[16px] font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand-orange px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-colors hover:bg-[#DD640C]"
            >
              Start learning
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
