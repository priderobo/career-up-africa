"use client";

import { useEffect, useState } from "react";
import { icons } from "./icons";

type OrbitItem = {
  phrase: string;
  color: string;
  grad: string;
  icon: React.ReactElement;
};

const ITEMS: OrbitItem[] = [
  { phrase: "Earn more.", color: "#14B8A6", grad: "linear-gradient(160deg,#5EEAD4,#14B8A6)", icon: icons.chart },
  { phrase: "Think sharper.", color: "#F97316", grad: "linear-gradient(160deg,#FDBA74,#F97316)", icon: icons.lightbulb },
  { phrase: "Lead better.", color: "#1E3A8A", grad: "linear-gradient(160deg,#93C5FD,#1E3A8A)", icon: icons.compass },
  { phrase: "Win more.", color: "#14B8A6", grad: "linear-gradient(160deg,#5EEAD4,#14B8A6)", icon: icons.trophy },
  { phrase: "Get ahead.", color: "#F97316", grad: "linear-gradient(160deg,#FDBA74,#F97316)", icon: icons.target },
  { phrase: "Level up.", color: "#1E3A8A", grad: "linear-gradient(160deg,#93C5FD,#1E3A8A)", icon: icons.rocket },
  { phrase: "Connect better.", color: "#14B8A6", grad: "linear-gradient(160deg,#5EEAD4,#14B8A6)", icon: icons.connect },
  { phrase: "Stay sharp.", color: "#F97316", grad: "linear-gradient(160deg,#FDBA74,#F97316)", icon: icons.chip },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % ITEMS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white pb-8 pt-16 md:pt-[70px]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 px-8 md:grid-cols-2">
        <div>
          <h1 className="text-[34px] font-bold leading-[1.12] tracking-tight md:text-[52px]">
            Your corporate career needs an upgrade.
          </h1>
          <p className="mt-5 max-w-[440px] text-[16.5px] text-muted">
            Get better at what you do, become harder to replace, and get noticed for what&apos;s next.
            Learn from industry experts at leading organisations.
          </p>
          <a
            href="#courses"
            className="mt-7 inline-flex items-center rounded-xl bg-brand-blue px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#16316F]"
          >
            Explore Courses
          </a>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-4 rounded-3xl border border-line bg-white p-6 shadow-card">
            {ITEMS.map((item, i) => (
              <div
                key={item.phrase}
                className={`flex aspect-square items-center justify-center rounded-[20px] transition-all duration-300 ${
                  i === active ? "scale-105 shadow-glossy-active" : "scale-95 opacity-45 shadow-glossy"
                }`}
                style={{ background: item.grad }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-[44%] w-[44%]">
                  {item.icon}
                </svg>
              </div>
            ))}
          </div>

          <div className="relative mt-6 min-h-[30px] text-center">
            {ITEMS.map((item, i) => (
              <span
                key={item.phrase}
                className={`absolute inset-x-0 font-display text-[22px] font-bold transition-all duration-300 ${
                  i === active ? "relative opacity-100" : "translate-y-1.5 opacity-0"
                }`}
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full align-middle" style={{ background: item.color }} />
                {item.phrase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
