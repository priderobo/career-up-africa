import type { ReactElement } from "react";

// Partner logo marks, keyed by company slug. Only companies the team has verified
// get a logo; everyone else is rendered as a plain company name (see CompanyRow).
const LOGOS: Record<string, ReactElement> = {
  nimbus: (
    <>
      <rect width="24" height="24" rx="6" fill="#1E3A8A" />
      <path d="M7.5 16.5h9a3 3 0 0 0 .4-5.97A4.5 4.5 0 0 0 8.3 9.6 3.5 3.5 0 0 0 7.5 16.5z" fill="#fff" />
    </>
  ),
  fathom: (
    <>
      <rect width="24" height="24" rx="6" fill="#0F766E" />
      <path d="M5 10.5c2.3-2.5 4.7-2.5 7 0s4.7 2.5 7 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M5 15c2.3-2.5 4.7-2.5 7 0s4.7 2.5 7 0" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
};

type Company = {
  name: string;
  /** Set only for companies the team has verified; unlocks the logo + badge. */
  logo?: keyof typeof LOGOS;
};

type Course = {
  image: string;
  tag: string;
  tagColor: string;
  title: string;
  instructor: string;
  company?: Company;
  meta: string;
  price: string;
};

const COURSES: Course[] = [
  {
    image: "/courses/leading-your-first-team.jpg",
    tag: "Better Manager",
    tagColor: "#1E3A8A",
    title: "Leading Your First Team",
    instructor: "Baraka Otieno",
    company: { name: "Nimbus People Co.", logo: "nimbus" },
    meta: "8 lessons · 72 min",
    price: "₦12,000",
  },
  {
    image: "/courses/ai-tools-everyday-work.jpg",
    tag: "AI Ready",
    tagColor: "#0F766E",
    title: "AI Tools for Everyday Work",
    instructor: "Sade Coker",
    company: { name: "Fathom Labs", logo: "fathom" },
    meta: "5 lessons · 41 min",
    price: "₦6,500",
  },
  {
    image: "/courses/negotiating-your-promotion.jpg",
    tag: "Get Promoted",
    tagColor: "#C2410C",
    title: "Negotiating Your Next Promotion",
    instructor: "Ngozi Bello",
    company: { name: "Bloom Talent Partners" },
    meta: "6 lessons · 54 min",
    price: "₦7,500",
  },
];

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-none text-[#1D4ED8]" aria-label="Verified partner">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// Verified partners: logo + name + badge. Unverified companies: quiet grey name.
// Individual creators with no company: the row still renders so cards line up.
function CompanyRow({ company }: { company?: Company }) {
  if (company?.logo) {
    return (
      <div className="mb-2.5 flex min-w-0 items-center gap-[7px]">
        <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] flex-none rounded-md" aria-hidden="true">
          {LOGOS[company.logo]}
        </svg>
        <span className="truncate text-xs font-semibold">{company.name}</span>
        <VerifiedBadge />
      </div>
    );
  }
  return (
    <div className="mb-2 truncate text-xs font-medium text-muted">{company?.name ?? "Independent creator"}</div>
  );
}

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mb-9 max-w-[560px]">
          <h2 className="text-[28px] font-bold md:text-[38px]">Featured courses</h2>
          <p className="mt-3.5 text-base text-muted">A few places to start, picked from across all six tracks.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#DCE5FA] to-brand-blue-tint">
                <img
                  src={course.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />
                <span
                  className="absolute left-3 top-3 z-[2] rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold shadow-sm backdrop-blur-sm"
                  style={{ color: course.tagColor }}
                >
                  {course.tag}
                </span>
                {/* Play affordance, revealed on hover */}
                <div className="absolute inset-0 z-[2] flex items-center justify-center bg-ink/[0.18] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="play-triangle flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-200 group-hover:scale-100" />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5">
                <CompanyRow company={course.company} />
                <h3 className="line-clamp-2 text-[15.5px] font-semibold leading-snug tracking-[-0.005em]">{course.title}</h3>
                <div className="mb-3.5 mt-1.5 text-[12.5px] text-muted">
                  with <b className="font-semibold text-ink">{course.instructor}</b>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-line pt-3">
                  <span className="text-xs text-muted">{course.meta}</span>
                  <span className="font-display text-[15px] font-bold text-brand-blue">{course.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-xl border border-line px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            View all courses
          </a>
        </div>
      </div>
    </section>
  );
}
