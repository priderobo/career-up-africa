type Quote = {
  paragraphs: string[];
  name: string;
  role?: string;
};

const QUOTES: Quote[] = [
  {
    paragraphs: [
      "I feel like I'm doing my work well, but sometimes I just want a new challenge to boost my morale. I've taken on more responsibilities, covered duties, and my influence has grown within my department. But sometimes, even when you're doing more, you still find yourself wanting something new.",
    ],
    name: "Steven",
    role: "Health Information Manager",
  },
  {
    paragraphs: [
      "I do the work, but sometimes it doesn't look like I do. I'm naturally very social at work. I like going around, saying hello, checking in on people, laughing and having fun with my colleagues. The thing is, I actually do my work. My bosses know that I work, but because I'm always jovial and moving around, it can be difficult for other people to perceive me as someone who delivers.",
      "I've realised that sometimes, you don't just have to do the work. You also have to be seen as someone who does the work. And finding that balance between being yourself, building relationships with people, and making your work visible can be difficult.",
    ],
    name: "Tolulope",
    role: "Project Analyst",
  },
];

export default function VoicesQuote() {
  return (
    <section id="voices" className="py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mx-auto mb-10 max-w-[560px] text-center">
          <h2 className="text-[28px] font-bold md:text-[38px]">You&apos;re not the only one who feels this way</h2>
          <p className="mt-3.5 text-base text-muted">
            These are some of the most common things we hear from professionals doing good work and
            still wanting more.
          </p>
        </div>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">
          {QUOTES.map((q) => (
            <div
              key={q.name}
              className="relative flex flex-col rounded-2xl border border-line border-l-4 border-l-brand-teal bg-white px-6 pb-5 pt-7 shadow-panel"
            >
              <span className="absolute left-4 top-1 select-none font-display text-[40px] font-bold leading-none text-brand-teal-tint">
                &ldquo;
              </span>
              <div className="relative space-y-3 text-[14.5px] leading-relaxed text-ink">
                {q.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-0.5 pt-5">
                <strong className="font-display text-[14.5px]">{q.name}</strong>
                {q.role && <span className="text-[13px] text-muted">{q.role}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
