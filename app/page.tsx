"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const COLORS = {
  bg: "#FFF2EF",
  navy: "#1A2A4F",
  pink: "#F7A5A5",
  peach: "#FFDBB6",
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
    <main style={{ background: COLORS.bg, color: COLORS.navy }} className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-medium">Sandra Mastromarino</span>

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

          <button
            className="md:hidden p-2 border rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 flex flex-col gap-4">
              <NavLinks onClick={() => setMobileOpen(false)} />
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-center text-white"
                style={{ background: COLORS.navy }}
              >
                Book a Free Intro Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-16 pb-10 text-center">
        <h1 className="headline">Personalized English Tutoring</h1>

        <p className="subhead mt-6">
          Helping students build confidence, fluency, and strong foundations in English.
        </p>
        <p className="support mt-2">
          Learning English should feel supportive and calm.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#contact"
            className="cta-primary"
            style={{ background: COLORS.navy, color: "white" }}
          >
            Book a Free Intro Call
          </a>
          <a href="#how" className="cta-secondary">
            How it works
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 text-sm">
          <div className="chip">Online or in-person</div>
          <div className="chip">Kids, teens, adults</div>
          <div className="chip">ESL focused</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <Image
            src="/tutor.jpg"
            alt="Sandra Mastromarino"
            width={420}
            height={520}
            className="rounded-2xl"
          />

          <div>
            <h2 className="section-title">Meet Your Tutor</h2>
            <p className="body-copy mt-4">
              Hi – I’m Sandra Mastromarino. I’ve been teaching English as a Second Language
              for over 20 years...
            </p>

            <ul className="mt-6 space-y-2">
              <Bullet>20+ years of ESL teaching experience</Bullet>
              <Bullet>Master’s degree in Teaching</Bullet>
              <Bullet>Private and public school experience</Bullet>
              <Bullet>Works with children, teens, and adults worldwide</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="section-title">Contact</h2>

        <p className="body-copy mt-3">
          Email: <strong>sandrasuzz00@gmail.com</strong>
        </p>

        <div className="mt-6">
          <a
            href="mailto:sandrasuzz00@gmail.com?subject=Tutoring%20Inquiry"
            className="cta-primary"
            style={{ background: COLORS.navy, color: "white" }}
          >
            Email Sandra
          </a>
        </div>
      </section>

      <style>{`
        .headline {
          font-family: ui-serif, Georgia, serif;
          font-size: clamp(42px, 6vw, 72px);
        }
        .section-title {
          font-family: ui-serif, Georgia, serif;
          font-size: 28px;
        }
        .body-copy, .subhead, .support {
          font-family: system-ui, sans-serif;
        }
        .cta-primary, .cta-secondary {
          border-radius: 9999px;
          padding: 14px 24px;
          font-weight: 600;
        }
        .cta-secondary {
          border: 1px solid rgba(0,0,0,0.2);
        }
        .chip {
          border: 1px solid rgba(0,0,0,0.15);
          border-radius: 9999px;
          padding: 10px 16px;
        }
      `}</style>
    </main>
  );
}