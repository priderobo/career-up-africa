import { icons } from "./icons";

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function ComingSoon({ eyebrow, title, description }: ComingSoonProps) {
  return (
    <section className="flex flex-1 items-center justify-center bg-white px-8 py-24">
      <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-[20px] shadow-glossy"
          style={{ background: "linear-gradient(160deg,#93C5FD,#1E3A8A)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
            {icons.rocket}
          </svg>
        </div>

        <span className="mt-6 text-[13px] font-semibold uppercase tracking-wide text-brand-teal">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-[32px] font-bold leading-[1.15] md:text-[42px]">{title}</h1>
        <p className="mt-4 max-w-[440px] text-[16.5px] text-muted">{description}</p>

        <a
          href="/"
          className="mt-8 inline-flex items-center rounded-xl bg-brand-blue px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#16316F]"
        >
          Back to home
        </a>
      </div>
    </section>
  );
}
