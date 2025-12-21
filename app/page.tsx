"use client";

import { useState } from "react";
import Image from "next/image";

/* ---------------- NAV ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF2EF]/95 backdrop-blur border-b border-[#FFDBB6]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-[#1A2A4F] font-medium">
          Sandra Mastromarino
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[#1A2A4F]">
          <a href="#tutor">Meet your tutor</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
          <a
            href="#contact"
            className="rounded-full bg-[#1A2A4F] text-white px-4 py-2 font-medium"
          >
            Book intro call
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden rounded-xl border border-[#FFDBB6] bg-white/60 px-3 py-2"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#FFDBB6] bg-[#FFF2EF]">
          <div className="px-6 py-4 flex flex-col gap-3 text-[#1A2A4F]">
            <a href="#tutor" onClick={() => setOpen(false)}>Meet your tutor</a>
            <a href="#how" onClick={() => setOpen(false)}>How it works</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#1A2A4F] text-white px-4 py-3 text-center font-medium"
            >
              Book intro call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const testimonials = [
  { quote: "Sandra is patient, clear, and incredibly encouraging.", name: "Parent of middle school student" },
  { quote: "She explains things in a way that finally makes sense.", name: "Adult ESL student" },
  { quote: "The improvement in writing has been noticeable.", name: "Parent of high school student" },
  { quote: "I am speaking more confidently at work now.", name: "Adult professional" },
  { quote: "My son actually looks forward to lessons.", name: "Parent of elementary student" },
  { quote: "The feedback is specific and actionable.", name: "Parent of ESL learner" },
];

export default function Home() {
  const loop = [...testimonials, ...testimonials];

  return (
    <main className="min-h-screen bg-[#FFF2EF] text-[#1A2A4F] font-sans">
      <Nav />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">
          Personalized English Tutoring
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-[#1A2A4F]/80">
          Helping students build confidence, fluency, and strong foundations in English.
        </p>

        <p className="mt-2 text-sm text-[#1A2A4F]/70">
          Learning English should feel supportive and calm.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[#1A2A4F] text-white px-8 py-4 font-medium"
          >
            Book a Free Intro Call
          </a>
          <a
            href="#how"
            className="rounded-full border border-[#1A2A4F]/30 px-8 py-4 font-medium"
          >
            How it works
          </a>
        </div>

        <p className="mt-4 text-sm text-[#1A2A4F]/60">
          No commitment. Just a conversation.
        </p>

        <ul className="mt-10 space-y-2 text-sm text-left max-w-sm mx-auto">
          <li>• Online or in-person</li>
          <li>• Kids, teens, adults</li>
          <li>• ESL focused</li>
        </ul>
      </section>

      {/* ABOUT */}
      <section id="tutor" className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-start">
        <div className="rounded-2xl border border-[#FFDBB6] p-3 bg-white">
          <Image
            src="/tutor.jpg"
            alt="Sandra Mastromarino"
            width={320}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div>
          <h2 className="font-serif text-3xl mb-4">Meet Your Tutor</h2>

          <p className="text-[#1A2A4F]/80 leading-relaxed">
            Hi — I’m Sandra Mastromarino. I’ve been teaching English as a Second Language for over 20 years.
          </p>

          <p className="mt-4 text-[#1A2A4F]/80 leading-relaxed">
            I earned my Master’s degree in Teaching from Fairleigh Dickinson University and have worked in both private and public schools across New Jersey.
          </p>

          <ul className="mt-6 space-y-2">
            <li>• 20+ years ESL experience</li>
            <li>• Master’s in Teaching</li>
            <li>• Kids, teens, adults</li>
          </ul>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl mb-10">How it works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Intro call", "Short conversation to understand goals."],
            ["Personalized plan", "Focused plan around what matters."],
            ["Progress", "Structured lessons and feedback."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl border border-[#FFDBB6] p-6 bg-white">
              <div className="font-medium mb-2">{title}</div>
              <p className="text-sm text-[#1A2A4F]/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl mb-6">What Families Say</h2>

        <div className="overflow-hidden border border-[#FFDBB6] rounded-xl bg-white">
          <div className="flex gap-6 px-6 py-10 marquee">
            {loop.map((t, i) => (
              <div key={i} className="w-[300px] shrink-0 border border-[#FFDBB6] rounded-xl p-5">
                <p className="text-sm text-[#1A2A4F]/80">“{t.quote}”</p>
                <p className="mt-3 text-xs text-[#1A2A4F]/60">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-[#FFDBB6]">
        <h2 className="font-serif text-3xl mb-4">Contact</h2>
        <p>Email: <strong>sandrasuzz00@gmail.com</strong></p>
      </section>

      <style>{`
        .marquee {
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}