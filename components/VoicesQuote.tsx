export default function VoicesQuote() {
  return (
    <section id="voices" className="py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mx-auto mb-11 max-w-[560px] text-center">
          <h2 className="text-[28px] font-bold md:text-[38px]">You&apos;re not the only one who feels this way</h2>
          <p className="mt-3.5 text-base text-muted">
            This is one of the most common things we hear from professionals doing good work and still
            wanting more.
          </p>
        </div>

        <div className="relative mx-auto max-w-[720px] rounded-[20px] border border-line border-l-4 border-l-brand-teal bg-white p-11 pb-9 shadow-panel">
          <span className="absolute left-6 top-1.5 select-none font-display text-6xl font-bold leading-none text-brand-teal-tint">
            &ldquo;
          </span>
          <p className="relative mb-6 mt-2.5 text-lg leading-relaxed text-ink">
            I feel like I&apos;m doing my work well, but sometimes I just want a new challenge to boost my
            morale. I&apos;ve taken on more responsibilities, covered duties, and my influence has grown
            within my department. But sometimes, even when you&apos;re doing more, you still find yourself
            wanting something new.
          </p>
          <div className="flex flex-col gap-0.5">
            <strong className="font-display text-[15.5px]">Steven</strong>
            <span className="text-[13.5px] text-muted">Health Information Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
}
