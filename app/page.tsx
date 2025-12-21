"use client";

import Image from "next/image";

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
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <div className="bg-gradient-to-b from-amber-50/70 to-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Personalized English Tutoring
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helping students build confidence, fluency, and strong foundations in English.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Learning English should feel supportive, not stressful.
          </p>

          <div className="mt-10 flex justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-black text-white px-7 py-3 font-medium hover:bg-gray-800 transition"
            >
              Book a Free Intro Call
            </a>
            <a
              href="#how"
              className="rounded-full border border-gray-300 px-7 py-3 font-medium hover:border-gray-400 transition"
            >
              How it works
            </a>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            No commitment. Just a conversation.
          </div>

          <div className="mt-10 flex justify-center gap-2 text-sm text-gray-600">
            <span className="rounded-full border px-3 py-1">Online or in-person</span>
            <span className="rounded-full border px-3 py-1">Kids, teens, adults</span>
            <span className="rounded-full border px-3 py-1">ESL focused</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* About */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
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

          <div>
            <h2 className="text-2xl font-semibold mb-4">Meet Your Tutor</h2>

            <p className="text-gray-700 leading-relaxed">
              Hi — I’m Sandra Mastromarino. I’ve been teaching English as a Second Language
              for over 20 years, helping students from all backgrounds build confidence,
              clarity, and strong foundations in English. I earned my Master’s degree in
              Teaching from Fairleigh Dickinson University and have spent my career both
              in the classroom and working one-on-one with students.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              I began my ESL journey at the New Jersey Japanese School and have since taught
              in both private and public school settings across New Jersey. I work with
              learners of all ages, from young children to adults.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              I’m known for being warm, direct, and deeply invested in my students’ progress.
              I identify areas of weakness and work through them thoughtfully, while keeping
              learning engaging and encouraging.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• 20+ years of ESL teaching experience</li>
              <li>• Master’s degree in Teaching</li>
              <li>• Private and public school experience</li>
              <li>• Works with children, teens, and adults worldwide</li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-20">
          <h2 className="text-2xl font-semibold mb-8">How it works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6">
              <div className="font-semibold">1. Intro call</div>
              <p className="text-gray-700 mt-2">
                A short conversation to understand goals, level, and needs.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <div className="font-semibold">2. Personalized plan</div>
              <p className="text-gray-700 mt-2">
                A focused plan built around the areas that matter most.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <div className="font-semibold">3. Consistent progress</div>
              <p className="text-gray-700 mt-2">
                Structured lessons, targeted feedback, real improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">What Families Say</h2>

          <div className="relative overflow-hidden border rounded-xl">
            <div className="marquee flex gap-6 px-6 py-10 whitespace-nowrap">
              {loop.map((t, i) => (
                <div
                  key={i}
                  className="w-[320px] shrink-0 rounded-xl border p-5 bg-white whitespace-normal"
                >
                  <p className="text-gray-700 leading-relaxed">“{t.quote}”</p>
                  <p className="mt-4 text-sm text-gray-600 font-medium">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 border-t pt-12">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700">
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