import type { ReactElement } from "react";

// Simple line-icon fragments (children of a <svg viewBox="0 0 24 24" fill="none">),
// shared between the hero icon grid and the "Find Your Next Move" cards so every
// icon in the product traces back to one definition.

export const icons: Record<string, ReactElement> = {
  chart: (
    <>
      <path d="M4 17l5-5 3 3 6-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h4v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  lightbulb: (
    <path
      d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.2 11.1c.5.3.8.9.8 1.5V16h5v-.4c0-.6.3-1.2.8-1.5A6 6 0 0 0 12 3z"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.6" />
      <path d="M15.2 8.8l-2 6-6 2 2-6 6-2z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 5H4v1a4 4 0 0 0 4 4M17 5h3v1a4 4 0 0 1-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 13v3M9 20h6M10 17h4v3h-4z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.3" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.2" fill="#fff" />
    </>
  ),
  rocket: (
    <>
      <path
        d="M12 2.3c2.8 2 4.6 5.6 4.6 9.2 0 2-.9 3.8-1.9 4.8l-2.7 2.7-2.7-2.7c-1-1-1.9-2.8-1.9-4.8 0-3.6 1.8-7.2 4.6-9.2z"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="1.7" fill="#fff" />
    </>
  ),
  connect: (
    <>
      <circle cx="8" cy="12" r="4" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16" cy="12" r="4" stroke="#fff" strokeWidth="1.6" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="1.6" />
      <path
        d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
};
