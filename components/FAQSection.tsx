type FaqItem = {
  q: string;
  a: string;
  open?: boolean;
};

const FAQS: FaqItem[] = [
  {
    q: "What is CareerUp Africa?",
    a: "CareerUp Africa is a learning platform for African professionals who want to grow, stay relevant, and make their next career move. We bring together practical courses and career pathways designed around real challenges professionals face at work.",
    open: true,
  },
  {
    q: "Who are the courses for?",
    a: "Our courses are for professionals at different stages of their careers, whether you're trying to get promoted, become AI-ready, become a better manager, find direction, or make a career transition.",
  },
  {
    q: "How are CareerUp Africa courses different from other online courses?",
    a: "We don't want you jumping from one random course to another. Our courses are organised into clear career pathways, so you can choose where you want to go and learn what helps you get there. We also work with professionals who understand the African corporate context.",
  },
  {
    q: "Do I get a certificate after completing a course?",
    a: "Our focus is on helping you actually use what you learn at work. Certificates may be part of some learning experiences, but the bigger goal is practical career progress, not simply collecting certificates.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-[1160px] px-8">
        <div className="mb-11">
          <h2 className="text-[28px] font-bold md:text-[38px]">FAQ</h2>
        </div>
        <div className="max-w-[760px]">
          {FAQS.map((item) => (
            <details key={item.q} open={item.open} className="border-b border-line py-[18px]">
              <summary className="faq-chevron flex cursor-pointer list-none items-center justify-between text-[15.5px] font-semibold hover:text-brand-blue">
                {item.q}
              </summary>
              <p className="mt-3.5 max-w-[620px] text-[14.5px] text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
