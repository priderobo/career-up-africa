import type { ReactElement } from "react";

// Placeholder hrefs — swap these for the real profile URLs once accounts are live.
const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "X", href: "#", icon: "x" },
  { name: "TikTok", href: "#", icon: "tiktok" },
] as const;

const SOCIAL_ICONS: Record<(typeof SOCIAL_LINKS)[number]["icon"], ReactElement> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10.5v6M8 7.8v.01M12 16.5v-3.6c0-1.4 1-2.4 2.2-2.4s2 .9 2 2.3v3.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M14 4v9.6a2.8 2.8 0 1 1-2.4-2.77M14 4c.3 2 1.7 3.5 3.7 3.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white pt-14">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mb-11 flex flex-wrap justify-between gap-10">
          <div>
            <img src="/career_up_logo.png" alt="CareerUp Africa" className="mb-3 h-6" />
            <p className="max-w-[220px] text-sm text-muted">Creative and career skills for corporate life.</p>

            <div className="mt-5 flex gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  {SOCIAL_ICONS[link.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-14">
            <div>
              <h4 className="mb-3.5 text-[13px] font-semibold">Courses</h4>
              <ul className="space-y-2.5">
                <li><a href="#courses" className="text-sm text-muted hover:text-brand-teal">Get Promoted</a></li>
                <li><a href="#courses" className="text-sm text-muted hover:text-brand-teal">Become AI-Ready</a></li>
                <li><a href="#courses" className="text-sm text-muted hover:text-brand-teal">Find Your Direction</a></li>
                <li><a href="#courses" className="text-sm text-muted hover:text-brand-teal">Become a Better Manager</a></li>
                <li><a href="#courses" className="text-sm text-muted hover:text-brand-teal">Corporate → Entrepreneur</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3.5 text-[13px] font-semibold">Company</h4>
              <ul className="space-y-2.5">
                <li><a href="/for-creators" className="text-sm text-muted hover:text-brand-teal">For Creators</a></li>
                <li><a href="/for-companies" className="text-sm text-muted hover:text-brand-teal">For Companies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 border-t border-line py-6 text-[13px] text-muted">
          <span>© 2026 CareerUp Africa. All rights reserved.</span>
          <span>Made for people building their careers at work.</span>
        </div>
      </div>
    </footer>
  );
}
