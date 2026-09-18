"use client";

import { useEffect, useState } from "react";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-[100] transition-colors duration-300 ${
        scrolled ? "bg-brand-blue shadow-[0_10px_26px_-16px_rgba(10,20,50,0.5)]" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-8 py-5">
        <a href="/">
          <img
            src={scrolled ? "/career_up_logo-2.png" : "/career_up_logo.png"}
            alt="CareerUp Africa"
            className="h-7"
          />
        </a>

        <nav
          className={`hidden gap-8 text-[15px] font-medium md:flex ${
            scrolled ? "text-white/80" : "text-muted"
          }`}
        >
          <a href="#courses" className={`transition-colors ${scrolled ? "hover:text-white" : "hover:text-brand-blue"}`}>
            Courses
          </a>
          <a href="/for-creators" className={`transition-colors ${scrolled ? "hover:text-white" : "hover:text-brand-blue"}`}>
            For Creators
          </a>
          <a href="/for-companies" className={`transition-colors ${scrolled ? "hover:text-white" : "hover:text-brand-blue"}`}>
            For Companies
          </a>
        </nav>

        <a
          href="#"
          className={`inline-flex items-center rounded-xl px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 ${
            scrolled ? "bg-brand-orange hover:bg-[#DD640C]" : "bg-brand-blue hover:bg-[#16316F]"
          }`}
        >
          Start learning
        </a>
      </div>
    </div>
  );
}
