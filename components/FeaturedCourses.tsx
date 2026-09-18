type Course = {
  thumbGrad: string;
  tagBg: string;
  tagColor: string;
  tag: string;
  title: string;
  creator: string;
  meta: string;
  price: string;
};

const COURSES: Course[] = [
  {
    thumbGrad: "linear-gradient(160deg,#FDBA74,#F97316)",
    tagBg: "#FFEDD5",
    tagColor: "#F97316",
    tag: "Get Promoted",
    title: "Negotiating Your Next Promotion",
    creator: "Ngozi Bello · Bloom Talent Partners",
    meta: "6 lessons · 54 min",
    price: "$19",
  },
  {
    thumbGrad: "linear-gradient(160deg,#93C5FD,#1E3A8A)",
    tagBg: "#DCE5FA",
    tagColor: "#1E3A8A",
    tag: "Better Manager",
    title: "Leading Your First Team",
    creator: "Baraka Otieno · Nimbus People Co.",
    meta: "8 lessons · 72 min",
    price: "$24",
  },
  {
    thumbGrad: "linear-gradient(160deg,#5EEAD4,#14B8A6)",
    tagBg: "#D7F5F0",
    tagColor: "#14B8A6",
    tag: "AI Ready",
    title: "AI Tools for Everyday Work",
    creator: "Sade Coker · Fathom Labs",
    meta: "5 lessons · 41 min",
    price: "$15",
  },
  {
    thumbGrad: "linear-gradient(135deg,#1E3A8A,#14B8A6)",
    tagBg: "#DCE5FA",
    tagColor: "#1E3A8A",
    tag: "Communication",
    title: "Speaking Up in Meetings",
    creator: "Ngozi Bello · Bloom Talent Partners",
    meta: "4 lessons · 33 min",
    price: "$12",
  },
];

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mb-9 max-w-[560px]">
          <h2 className="text-[28px] font-bold md:text-[38px]">Featured courses</h2>
          <p className="mt-3.5 text-base text-muted">A few places to start, picked from across all six tracks.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex h-[110px] items-center justify-center" style={{ background: course.thumbGrad }}>
                <div className="play-triangle flex h-10 w-10 items-center justify-center rounded-full bg-white/90" />
              </div>
              <div className="p-4">
                <span
                  className="mb-2.5 inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold"
                  style={{ background: course.tagBg, color: course.tagColor }}
                >
                  {course.tag}
                </span>
                <h3 className="mb-1.5 text-[15px] font-semibold leading-snug">{course.title}</h3>
                <div className="mb-2.5 text-[12.5px] text-muted">{course.creator}</div>
                <div className="flex items-center justify-between border-t border-line pt-2.5">
                  <span className="text-xs text-muted">{course.meta}</span>
                  <span className="font-display text-[15px] font-bold text-brand-blue">{course.price}</span>
                </div>
              </div>
            </div>
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
