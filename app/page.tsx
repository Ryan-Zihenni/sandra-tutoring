"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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

export default function Home() {
  const loop = [...testimonials, ...testimonials];

  return (
    <main
      className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#FFF2EF] text-[#1A2A4F]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#FFF2EF] to-[#FFE9DE]">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Personalized English Tutoring
          </h1>

          <p className="text-lg text-[#1A2A4F]/80 max-w-2xl mx-auto">
            Helping students build confidence, fluency, and strong foundations in English.
          </p>

          <p className="text-sm text-[#1A2A4F]/70 mt-2">
            Learning English should feel supportive, not stressful.
          </p>

          <div className="mt-10 flex justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#1A2A4F] text-white px-7 py-3 font-medium hover:bg-[#23376A] transition"
            >
              Book a Free Intro Call
            </a>
            <a
              href="#how"
              className="rounded-full border border-[#1A2A4F]/30 px-7 py-3 font-medium hover:border-[#1A2A4F]/50 transition"
            >
              How it works
            </a>
          </div>

          <div className="mt-3 text-sm text-[#1A2A4F]/70">
            No commitment. Just a conversation.
          </div>

          <div className="mt-10 flex justify-center gap-2 text-sm text-[#1A2A4F]/70">
            <span className="rounded-full border px-3 py-1">Online or in-person</span>
            <span className="rounded-full border px-3 py-1">Kids, teens, adults</span>
            <span className="rounded-full border px-3 py-1">ESL focused</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* About */}
        <section className="grid md:grid-cols-2 gap-12 items-start mt-20">
          <div className="flex justify-start">
            <div className="rounded-2xl border p-3 shadow-sm bg-white">
              <Image
                src="/tutor.jpg"
                alt="Sandra Mastromarino"
                width={320}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="text-left">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet Your Tutor
            </h2>

            <p className="leading-relaxed text-[#1A2A4F]/85">
              Hi — I’m Sandra Mastromarino. I’ve been teaching English as a Second Language
              for over 20 years, helping students from all backgrounds build confidence,
              clarity, and strong foundations in English. I earned my Master’s degree in
              Teaching from Fairleigh Dickinson University and have spent my career both
              in the classroom and working one-on-one with students.
            </p>

            <p className="leading-relaxed text-[#1A2A4F]/85 mt-4">
              I began my ESL journey at the New Jersey Japanese School and have since taught
              in both private and public school settings across New Jersey. I work with
              learners of all ages, from young children to adults.
            </p>

            <p className="leading-relaxed text-[#1A2A4F]/85 mt-4">
              I’m known for being warm, direct, and deeply invested in my students’ progress.
              I identify areas of weakness and work through them thoughtfully, while keeping
              learning engaging and encouraging.
            </p>

            <ul className="mt-6 space-y-2">
              <li>• 20+ years of ESL teaching experience</li>
              <li>• Master’s degree in Teaching</li>
              <li>• Private and public school experience</li>
              <li>• Works with children, teens, and adults worldwide</li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-24 text-left">
          <h2
            className="text-2xl font-semibold mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6 bg-white">
              <div className="font-semibold">1. Intro call</div>
              <p className="mt-2 text-[#1A2A4F]/80">
                A short conversation to understand goals, level, and needs.
              </p>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <div className="font-semibold">2. Personalized plan</div>
              <p className="mt-2 text-[#1A2A4F]/80">
                A focused plan built around the areas that matter most.
              </p>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <div className="font-semibold">3. Consistent progress</div>
              <p className="mt-2 text-[#1A2A4F]/80">
                Structured lessons, targeted feedback, real improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24 text-left">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Families Say
          </h2>

          <div className="relative overflow-hidden border rounded-xl bg-white">
            <div className="marquee flex gap-6 px-6 py-10 whitespace-nowrap">
              {loop.map((t, i) => (
                <div
                  key={i}
                  className="w-[320px] shrink-0 rounded-xl border p-5 bg-white whitespace-normal"
                >
                  <p className="leading-relaxed text-[#1A2A4F]/85">“{t.quote}”</p>
                  <p className="mt-4 text-sm font-medium text-[#1A2A4F]/70">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24 border-t pt-12 text-left">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact
          </h2>
          <p>
            Email:{" "}
            <span className="font-medium">sandrasuzz00@gmail.com</span>
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