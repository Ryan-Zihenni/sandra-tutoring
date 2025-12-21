"use client";

import Image from "next/image";

const COLORS = {
  navy: "#1A2A4F",
  rose: "#F7A5A5",
  peach: "#FFDBB6",
  blush: "#FFF2EF",
};

const testimonials = [
  {
    quote:
      "Sandra is patient, clear, and incredibly encouraging. My child’s confidence improved quickly, and we saw progress week to week.",
    name: "Parent of middle school student",
  },
  {
    quote:
      "She explains things in a way that finally makes sense. The lessons are structured, but still feel positive and motivating.",
    name: "Adult ESL student",
  },
  {
    quote:
      "Sandra sets a high bar and focuses on the exact areas my daughter needed help with. The improvement in writing has been noticeable.",
    name: "Parent of high school student",
  },
  {
    quote:
      "I was nervous speaking English, but Sandra made me feel comfortable right away. I am speaking more confidently at work now.",
    name: "Adult professional",
  },
  {
    quote:
      "My son actually looks forward to lessons. Sandra is warm, but she also holds him accountable, which is exactly what we needed.",
    name: "Parent of elementary student",
  },
  {
    quote:
      "The feedback is specific and actionable. We finally have a clear plan for reading and writing, and it is working.",
    name: "Parent of ESL learner",
  },
];

const iconBullet = (
  <span
    aria-hidden="true"
    className="inline-block h-[9px] w-[9px] rounded-full"
    style={{ backgroundColor: COLORS.rose }}
  />
);

export default function Home() {
  const loop = [...testimonials, ...testimonials];

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.blush, color: COLORS.navy }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: "rgba(26,42,79,0.12)", backgroundColor: "rgba(255,242,239,0.85)" }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-medium tracking-tight" style={{ color: COLORS.navy }}>
            Sandra Mastromarino
          </a>

          <nav className="flex items-center gap-5 text-sm">
            <a href="#about" className="hover:opacity-80">
              Meet your tutor
            </a>
            <a href="#how" className="hover:opacity-80">
              How it works
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>

            <a
              href="#contact"
              className="ml-2 rounded-full px-4 py-2 font-medium transition"
              style={{ backgroundColor: COLORS.navy, color: COLORS.blush }}
            >
              Book intro call
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(to bottom, ${COLORS.peach}55, ${COLORS.blush})` }}>
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-14 text-left">
          <h1
            className="text-4xl md:text-6xl leading-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", color: COLORS.navy }}
          >
            Personalized English Tutoring
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl" style={{ color: "rgba(26,42,79,0.82)" }}>
            Helping students build confidence, fluency, and strong foundations in English.
          </p>

          {/* Fix orphan line by keeping it short and slightly wider max width */}
          <p className="mt-3 text-sm md:text-base max-w-3xl" style={{ color: "rgba(26,42,79,0.72)" }}>
            Learning English should feel supportive and calm.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full px-7 py-3 font-medium transition border"
              style={{ backgroundColor: COLORS.navy, color: COLORS.blush, borderColor: COLORS.navy }}
            >
              Book a Free Intro Call
            </a>

            <a
              href="#how"
              className="rounded-full px-7 py-3 font-medium transition border"
              style={{ backgroundColor: "transparent", color: COLORS.navy, borderColor: "rgba(26,42,79,0.28)" }}
            >
              How it works
            </a>

            <span className="w-full md:w-auto md:ml-2 text-sm" style={{ color: "rgba(26,42,79,0.70)" }}>
              No commitment. Just a conversation.
            </span>
          </div>

          {/* Replace pills with a simple bulleted row */}
          <div className="mt-10 grid sm:grid-cols-3 gap-3 text-sm" style={{ color: "rgba(26,42,79,0.78)" }}>
            <div className="flex items-center gap-2">
              {iconBullet} <span>Online or in-person</span>
            </div>
            <div className="flex items-center gap-2">
              {iconBullet} <span>Kids, teens, adults</span>
            </div>
            <div className="flex items-center gap-2">
              {iconBullet} <span>ESL focused</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* About */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-start pt-14">
          <div className="flex justify-center md:justify-start">
            <div className="rounded-2xl border p-3 shadow-sm" style={{ backgroundColor: COLORS.blush, borderColor: "rgba(26,42,79,0.18)" }}>
              <Image
                src="/tutor.jpg"
                alt="Sandra Mastromarino"
                width={360}
                height={440}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="text-left">
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", color: COLORS.navy }}
            >
              Meet Your Tutor
            </h2>

            <div className="mt-6 space-y-4" style={{ color: "rgba(26,42,79,0.82)" }}>
              <p className="leading-relaxed">
                Hi - I’m Sandra Mastromarino. I’ve been teaching English as a Second Language for over 20 years, helping students
                from all backgrounds build confidence, clarity, and strong foundations in English. I earned my Master’s degree in
                Teaching from Fairleigh Dickinson University and have spent my career both in the classroom and working one-on-one
                with students.
              </p>

              <p className="leading-relaxed">
                I began my ESL journey at the New Jersey Japanese School and have since taught in both private and public school
                settings across New Jersey. I work with learners of all ages, from young children to adults.
              </p>

              <p className="leading-relaxed">
                I’m known for being warm, direct, and deeply invested in my students’ progress. I identify areas of weakness and
                work through them thoughtfully, while keeping learning engaging and encouraging.
              </p>
            </div>

            {/* Bullets, not pills */}
            <ul className="mt-7 space-y-3" style={{ color: "rgba(26,42,79,0.84)" }}>
              <li className="flex items-start gap-3">
                {iconBullet} <span>20+ years of ESL teaching experience</span>
              </li>
              <li className="flex items-start gap-3">
                {iconBullet} <span>Master’s degree in Teaching</span>
              </li>
              <li className="flex items-start gap-3">
                {iconBullet} <span>Private and public school experience</span>
              </li>
              <li className="flex items-start gap-3">
                {iconBullet} <span>Works with children, teens, and adults worldwide</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-24">
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", color: COLORS.navy }}
          >
            How it works
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "rgba(26,42,79,0.18)", backgroundColor: "rgba(255,255,255,0.55)" }}>
              <div className="font-semibold">1. Intro call</div>
              <p className="mt-3 leading-relaxed" style={{ color: "rgba(26,42,79,0.78)" }}>
                A short conversation to understand goals, level, and needs.
              </p>
            </div>

            <div className="rounded-xl border p-6" style={{ borderColor: "rgba(26,42,79,0.18)", backgroundColor: "rgba(255,255,255,0.55)" }}>
              <div className="font-semibold">2. Personalized plan</div>
              <p className="mt-3 leading-relaxed" style={{ color: "rgba(26,42,79,0.78)" }}>
                A focused plan built around the areas that matter most.
              </p>
            </div>

            <div className="rounded-xl border p-6" style={{ borderColor: "rgba(26,42,79,0.18)", backgroundColor: "rgba(255,255,255,0.55)" }}>
              <div className="font-semibold">3. Consistent progress</div>
              <p className="mt-3 leading-relaxed" style={{ color: "rgba(26,42,79,0.78)" }}>
                Structured lessons, targeted feedback, real improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24">
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", color: COLORS.navy }}
          >
            What Families Say
          </h2>

          <div className="mt-10 relative overflow-hidden border rounded-xl" style={{ borderColor: "rgba(26,42,79,0.18)", backgroundColor: "rgba(255,255,255,0.40)" }}>
            <div className="marquee flex gap-6 px-6 py-12 whitespace-nowrap">
              {loop.map((t, i) => (
                <div
                  key={i}
                  className="w-[340px] shrink-0 rounded-xl border p-6 whitespace-normal"
                  style={{ borderColor: "rgba(26,42,79,0.18)", backgroundColor: COLORS.blush }}
                >
                  <p className="leading-relaxed" style={{ color: "rgba(26,42,79,0.82)" }}>
                    “{t.quote}”
                  </p>
                  <p className="mt-5 text-sm font-medium" style={{ color: "rgba(26,42,79,0.70)" }}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-xs" style={{ color: "rgba(26,42,79,0.60)" }}>
            Replace these with real testimonials when you have them.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24 border-t pt-12" style={{ borderColor: "rgba(26,42,79,0.18)" }}>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", color: COLORS.navy }}
          >
            Contact
          </h2>

          <p className="mt-4" style={{ color: "rgba(26,42,79,0.82)" }}>
            Email: <span className="font-medium">sandrasuzz00@gmail.com</span>
          </p>
        </section>
      </div>

      <style>{`
        .marquee {
          width: max-content;
          animation: marquee-scroll 65s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}