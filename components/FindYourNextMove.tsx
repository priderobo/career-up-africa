import { icons } from "./icons";

type Track = {
  grad: string;
  icon: React.ReactElement;
  title: string;
  body: string;
};

const TRACKS: Track[] = [
  {
    grad: "linear-gradient(160deg,#93C5FD,#1E3A8A)",
    icon: icons.chip,
    title: "Become AI Ready",
    body: "Build the skills to work confidently with AI and stay relevant as the way we work changes.",
  },
  {
    grad: "linear-gradient(160deg,#5EEAD4,#14B8A6)",
    icon: icons.compass,
    title: "Become a Better Manager",
    body: "Develop the skills to lead people, manage performance, and become the kind of manager people want to work with.",
  },
  {
    grad: "linear-gradient(160deg,#FDBA74,#F97316)",
    icon: icons.target,
    title: "Get Promoted",
    body: "Build the skills, visibility and business understanding you need to take on more responsibility and move up.",
  },
];

export default function FindYourNextMove() {
  return (
    <section id="tracks" className="py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mb-11 max-w-[560px]">
          <h2 className="text-[28px] font-bold md:text-[38px]">Find Your Next Move</h2>
          <p className="mt-3.5 text-base text-muted">
            Not sure where to start? Choose the career goal that matches where you want to go next and
            discover courses designed to help you get there.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TRACKS.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-teal hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-glossy" style={{ background: track.grad }}>
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  {track.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-[17.5px] font-semibold">{track.title}</h3>
              <p className="text-[14.5px] text-muted">{track.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
