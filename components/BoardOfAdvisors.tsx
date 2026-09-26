"use client";

import { useEffect, useState } from "react";

type Advisor = {
  name: string;
  role: string;
  /** Full bio, one string per paragraph — shown in the modal, excerpted on hover. */
  bio: string[];
  linkedin: string;
  photo: string;
  /** Tailwind object-position class, so faces stay in frame on the portrait crop. */
  focus?: string;
  accent: string;
};

const ADVISORS: Advisor[] = [
  {
    name: "Charity Eruaga",
    role: "Founder, CareerUp Africa",
    bio: [
      "Charity Eruaga is an operations and business management professional with experience across programme management and business operations.",
      "She has worked with organisations across Africa and the UK, supporting teams to turn ideas into structured, practical, and measurable outcomes.",
      "She is the founder of CareerUp Africa, a workforce development platform focused on helping African professionals build more resilient and future-ready careers.",
    ],
    linkedin: "https://www.linkedin.com/in/eruagacharity",
    photo: "/advisors/charity-eruaga.jpg",
    focus: "object-top",
    accent: "#F97316",
  },
  {
    name: "Princess Nkoyo Iwok",
    role: "Public Administration & Supply Chain",
    bio: [
      "Amb. Princess (Dr) Nkoyo E.A. Iwok is a seasoned Administrator, Supply Chain & Logistics professional with over 32 years of working experience.",
      "She holds BA (Hons) and Masters degrees in Public Administration and Logistics & Supply Chain Management. In addition, she possesses an M.Phil in Procurement Management, and four professional certifications from Canada, the United Kingdom, and Nigeria.",
      "She has worked notably in four MDAs: the Office of the President, Office of the Head of the Civil Service of the Federation, Federal Ministry of Interior, and the National Identity Management Commission (NIMC), where she has held management roles in administration, procurement and supply chain.",
      "Throughout her career, she has led teams, managed high level projects, and represented Nigeria at local and international forums, and has won over twenty awards for excellence.",
      "She is an alumna of London School of Business Administration, UK, Harvard and Rome Business Schools respectively.",
      "She is passionate about mentoring and supporting women development, in career and entrepreneurship.",
      "Princess Nkoyo is an Ambassador of the African Union, Agenda 2063.",
      "Additionally, she is involved in humanitarian initiatives, including supporting educational opportunities for underserved children.",
    ],
    linkedin: "https://www.linkedin.com/in/amb-princess-dr-nkoyo-iwok-05240ab5/",
    photo: "/advisors/nkoyo-iwok.jpg",
    focus: "object-top",
    accent: "#1E3A8A",
  },
  {
    name: "Vanessa Goldbee",
    role: "Co-Founder, Cammina",
    bio: [
      "Vanessa Goldbee is a technology and business professional with experience in AI, data, digital transformation, and business consulting.",
      "She has worked with organisations including Teradata and is the Co-Founder of Cammina, which helps organisations understand and improve how technology affects people and customer outcomes.",
    ],
    linkedin: "https://www.linkedin.com/in/vanessaporter1/",
    photo: "/advisors/vanessa-goldbee.jpg",
    focus: "object-top",
    accent: "#14B8A6",
  },
  {
    name: "Ndubuisi C. Justin Onyemuche",
    role: "Founder & CEO, BraceMoni",
    bio: [
      "Ndubuisi C. Justin Onyemuche is a fintech entrepreneur and business leader with a focus on financial inclusion and expanding access to credit for underserved individuals and small businesses across Africa.",
      "He is the Founder and CEO of BraceMoni, a structured lending company providing working capital to individuals and SMEs that are often underserved by traditional financial institutions. Under his leadership, BraceMoni has served over 300 borrowers across Nigeria, developing flexible repayment structures that reflect the realities of borrowers' income and cash flow.",
      "He is also the founder of BRACE Empowerment Initiative, a nonprofit focused on financial education and community support, complementing his work in financial inclusion.",
      "As a Kingdom entrepreneur, Ndubuisi is passionate about building sustainable businesses that combine responsible lending, innovation, and social impact. His work is driven by a commitment to helping individuals and businesses access the financial resources they need to grow and thrive.",
    ],
    linkedin: "https://www.linkedin.com/in/ndubuisi-c-justin",
    photo: "/advisors/ndubuisi-onyemuche.jpg",
    focus: "object-center",
    accent: "#1E3A8A",
  },
];

function LinkedInMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function AdvisorModal({ advisor, onClose }: { advisor: Advisor; onClose: () => void }) {
  // Close on Escape, and stop the page behind the dialog from scrolling
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={advisor.name}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[720px] overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-canvas"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex flex-col gap-5 p-6 sm:flex-row sm:gap-6 sm:p-8">
          <div className="h-28 w-28 flex-none overflow-hidden rounded-2xl border border-line sm:h-32 sm:w-32">
            <img src={advisor.photo} alt={advisor.name} className={`h-full w-full object-cover ${advisor.focus ?? ""}`} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-display text-[22px] font-bold leading-tight">{advisor.name}</h3>
            <div className="mt-1.5 text-[14px] font-semibold" style={{ color: advisor.accent }}>
              {advisor.role}
            </div>
            <a
              href={advisor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-3 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#08508f]"
            >
              <LinkedInMark />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="space-y-4 border-t border-line px-6 pb-8 pt-6 text-[15px] leading-relaxed text-muted sm:px-8">
          {advisor.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdvisorCard({ advisor, onOpen }: { advisor: Advisor; onOpen: () => void }) {
  return (
    <div className="group overflow-hidden rounded-[18px] border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* The photo doubles as the button: hover reveals the bio, click opens it in full */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Read ${advisor.name}'s full bio`}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-canvas text-left"
      >
        <img
          src={advisor.photo}
          alt={advisor.name}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${advisor.focus ?? ""}`}
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/85 to-ink/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <p className="line-clamp-[7] text-[12.5px] leading-relaxed text-white/85">{advisor.bio[0]}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white">
            Read full bio
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </button>

      <div className="px-4 pb-4 pt-3.5">
        <h3 className="text-[15.5px] font-semibold leading-snug tracking-[-0.005em]">{advisor.name}</h3>
        <div className="mt-1 text-[12.5px] font-medium" style={{ color: advisor.accent }}>
          {advisor.role}
        </div>
        <a
          href={advisor.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-muted transition-colors hover:text-[#0A66C2]"
        >
          <LinkedInMark className="h-[15px] w-[15px]" />
          Connect
        </a>
      </div>
    </div>
  );
}

export default function BoardOfAdvisors() {
  const [open, setOpen] = useState<Advisor | null>(null);

  return (
    <section id="advisors" className="bg-white py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mx-auto mb-11 max-w-[560px] text-center">
          <span className="text-[13px] font-semibold uppercase tracking-wide text-brand-teal">Board of Advisors</span>
          <h2 className="mt-3 text-[28px] font-bold md:text-[38px]">Guided by people who&apos;ve done it</h2>
          <p className="mt-3.5 text-base text-muted">
            Leaders across public administration, technology and finance helping shape how CareerUp Africa
            supports professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADVISORS.map((a) => (
            <AdvisorCard key={a.name} advisor={a} onOpen={() => setOpen(a)} />
          ))}
        </div>
      </div>

      {open && <AdvisorModal advisor={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
