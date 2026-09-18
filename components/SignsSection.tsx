type Sign = {
  num: string;
  title: string;
  body: string;
};

const SIGNS: Sign[] = [
  { num: "01", title: "You are busy, but not moving.", body: "A full calendar can still be a holding pattern." },
  {
    num: "02",
    title: "Your best work is happening quietly.",
    body: "If the right people cannot see the value, it is harder to grow it.",
  },
  {
    num: "03",
    title: "You keep waiting to feel ready.",
    body: "Confidence usually arrives after the first small move, not before it.",
  },
  {
    num: "04",
    title: "Your next step sounds like everyone else's.",
    body: "A good career direction should feel specific to you.",
  },
  {
    num: "05",
    title: "You have outgrown your old definition of success.",
    body: "That is not a crisis. It is useful information.",
  },
];

// Full class names (not just the raw values) so Tailwind's content scanner can find them.
const ROTATIONS = [
  "rotate-[-1.6deg]",
  "rotate-[1.2deg]",
  "rotate-[-0.8deg]",
  "rotate-[1.6deg]",
  "rotate-[-1.1deg]",
];

const GHOST_COLORS = ["#1E3A8A", "#14B8A6", "#F97316"];

export default function SignsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <span className="mb-2.5 block text-[14.5px] font-semibold text-brand-teal">A gentle reality check</span>
          <h2 className="text-[28px] font-bold md:text-[40px]">The 5 Signs You&apos;re Stuck</h2>
          <p className="mt-4 text-[16.5px] text-muted">
            Stuck does not mean failing. It means your current way of working has stopped giving you useful
            information.
          </p>
        </div>
        <div className="mx-auto flex max-w-[920px] flex-wrap justify-center gap-5">
          {SIGNS.map((sign, i) => (
            <div
              key={sign.num}
              className={`relative max-w-[280px] flex-1 basis-[260px] overflow-hidden rounded-[22px] border border-line bg-white p-6 shadow-[0_18px_34px_-22px_rgba(22,26,44,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_26px_42px_-20px_rgba(22,26,44,0.26)] ${ROTATIONS[i]}`}
            >
              <span
                className="absolute -top-2 right-1.5 font-display text-7xl font-bold leading-none opacity-[0.08]"
                style={{ color: GHOST_COLORS[i % 3] }}
              >
                {sign.num}
              </span>
              <h3 className="relative mb-2 text-[16.5px] font-semibold leading-snug">{sign.title}</h3>
              <p className="relative text-[13.5px] text-muted">{sign.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
