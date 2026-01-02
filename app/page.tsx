"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const COLORS = {
  bg: "#FFF6ED", // warmer cream, closer to card
  navy: "#1A2A4F", // keep for strong readability
  pink: "#EFA8A0", // slightly desaturated
  peach: "#F5D6B8", // softer, more paper-like
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-[9px] h-2 w-2 rounded-full"
        style={{ background: COLORS.pink }}
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

export default function Home() {
  const loop = useMemo(() => [...testimonials, ...testimonials], []);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <a href="#about" onClick={onClick} className="nav-link">
        Meet your tutor
      </a>
      <a href="#how" onClick={onClick} className="nav-link">
        How it works
      </a>
      <a href="#contact" onClick={onClick} className="nav-link">
        Contact
      </a>
    </>
  );

  return (
    <main
      style={{ background: COLORS.bg, color: COLORS.navy }}
      className="min-h-screen"
    >
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-medium tracking-tight">
            Sandra Mastromarino
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <NavLinks />
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-sm font-medium border"
              style={{ borderColor: COLORS.navy, color: COLORS.navy }}
            >
              Book intro call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 border"
            style={{ borderColor: "rgba(26,42,79,0.25)" }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className="block w-5 h-[2px] mb-1"
              style={{ background: COLORS.navy }}
            />
            <span
              className="block w-5 h-[2px] mb-1"
              style={{ background: COLORS.navy }}
            />
            <span
              className="block w-5 h-[2px]"
              style={{ background: COLORS.navy }}
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white/95">
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
              <NavLinks onClick={() => setMobileOpen(false)} />
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-center"
                style={{ background: COLORS.navy, color: "white" }}
              >
                Book a Free Intro Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-16 pb-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="headline font-semibold tracking-tight">
            Personalized English Tutoring
          </h1>

          <div className="mt-6 space-y-2 max-w-3xl mx-auto">
            <p className="subhead">
              Helping students build confidence, fluency, and strong foundations in
              English.
            </p>
            <p className="support">Learning English should feel supportive and calm.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#contact"
              className="cta-primary"
              style={{ background: COLORS.navy, color: "white" }}
            >
              Book a Free Intro Call
            </a>
            <a
              href="#how"
              className="cta-secondary"
              style={{ borderColor: "rgba(26,42,79,0.25)" }}
            >
              How it works
            </a>
          </div>

          <div className="mt-4 text-sm opacity-80">
            No commitment. Just a conversation.
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 text-sm">
            <div className="chip">
              <span className="chip-dot" style={{ background: COLORS.pink }} />
              Online or in-person
            </div>
            <div className="chip">
              <span className="chip-dot" style={{ background: COLORS.peach }} />
              Kids, teens, adults
            </div>
            <div className="chip">
              <span className="chip-dot" style={{ background: COLORS.pink }} />
              ESL focused
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 pb-24 pt-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="portrait-card w-full max-w-[400px]">
              <Image
                src="/tutor.jpg"
                alt="Sandra Mastromarino"
                width={520}
                height={650}
                className="portrait-img"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="section-title font-semibold">Meet Your Tutor</h2>

            <div className="mt-5 space-y-4 body-copy">
              <p>
                Hi - I’m Sandra Mastromarino. I’ve been teaching English as a Second
                Language for over 20 years, helping students from all backgrounds build
                confidence, clarity, and strong foundations in English. I earned my
                Master’s degree in Teaching from Fairleigh Dickinson University and have
                spent my career both in the classroom and working one-on-one with
                students.
              </p>

              <p>
                I began my ESL journey at the New Jersey Japanese School and have since
                taught in both private and public school settings across New Jersey. I
                work with learners of all ages, from young children to adults.
              </p>

              <p>
                I’m known for being warm, direct, and deeply invested in my students’
                progress. I identify areas of weakness and work through them thoughtfully,
                while keeping learning engaging and encouraging.
              </p>

              <ul className="mt-5 space-y-2">
                <Bullet>20+ years of ESL teaching experience</Bullet>
                <Bullet>Master’s degree in Teaching</Bullet>
                <Bullet>Private and public school experience</Bullet>
                <Bullet>Works with children, teens, and adults worldwide</Bullet>
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <section id="how" className="mt-20">
          <h2 className="section-title font-semibold">How it works</h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="card-title">1. Intro call</div>
              <p className="card-body">
                A short conversation to understand goals, level, and needs.
              </p>
            </div>
            <div className="card">
              <div className="card-title">2. Personalized plan</div>
              <p className="card-body">
                A focused plan built around the areas that matter most.
              </p>
            </div>
            <div className="card">
              <div className="card-title">3. Consistent progress</div>
              <p className="card-body">
                Structured lessons, targeted feedback, real improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20">
          <h2 className="section-title font-semibold">What Families Say</h2>

          <div className="mt-6 relative overflow-hidden border rounded-2xl bg-white">
            <div className="marquee flex gap-6 px-6 py-12 whitespace-nowrap">
              {loop.map((t, i) => (
                <div
                  key={i}
                  className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl border p-6 bg-white whitespace-normal"
                >
                  <p className="body-copy leading-relaxed">“{t.quote}”</p>
                  <p className="mt-4 text-sm opacity-80 font-medium">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 border-t pt-12">
          <h2 className="section-title font-semibold">Contact</h2>
          <p className="mt-3 body-copy">
            Email: <span className="font-medium">sandrasuzz00@gmail.com</span>
          </p>
        </section>
      </section>

      <style>{`
        /* Typography */
        .headline {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .section-title {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: 28px;
          line-height: 1.2;
          margin: 0;
        }
        .body-copy, .subhead, .support, .nav-link, .cta-primary, .cta-secondary, .chip, .card-body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }
        .subhead {
          font-size: 18px;
          line-height: 1.5;
          opacity: 0.9;
        }
        .support {
          font-size: 14px;
          line-height: 1.4;
          opacity: 0.85;
        }

        /* Nav */
        .nav-link {
          opacity: 0.85;
          transition: opacity 150ms ease;
        }
        .nav-link:hover {
          opacity: 1;
        }

        /* Buttons */
        .cta-primary, .cta-secondary {
          border-radius: 9999px;
          padding: 14px 22px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
        }
        .cta-secondary {
          border-width: 1px;
          background: rgba(255,255,255,0.45);
        }

        /* Chips */
        .chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(26,42,79,0.18);
          padding: 12px 14px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.5);
        }
        .chip-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          flex: none;
        }

        /* Cards */
        .card {
          border: 1px solid rgba(26,42,79,0.16);
          border-radius: 18px;
          padding: 18px;
          background: rgba(255,255,255,0.65);
        }
        .card-title {
          font-weight: 700;
        }
        .card-body {
          margin-top: 8px;
          opacity: 0.85;
        }

        /* Portrait */
        .portrait-card {
          border: 1px solid rgba(26,42,79,0.16);
          border-radius: 22px;
          padding: 14px;
          background: rgba(255,255,255,0.6);
          box-shadow: 0 6px 16px rgba(26,42,79,0.08);
        }
        .portrait-img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          object-fit: cover;
          filter: brightness(1.04) contrast(0.96) saturate(0.95);
        }

        /* Marquee */
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