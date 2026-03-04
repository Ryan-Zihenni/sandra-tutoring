"use client";

import { scrollToSection } from "./utils/navigation"
import Image from "next/image"
import Family from "../public/images/family.svg"
import Squiggle from "../public/images/squiggle_1.svg"
import SquiggleAlt from "../public/images/squiggle_2.svg"
import SquiggleArrow from "../public/images/squiggle_arrow.svg"
import imgPortraitImg from "../public/images/sandra_mastromarino.png"
import { ArrowCircleDownIcon } from "@phosphor-icons/react"
import { FadeInView } from "./components/FadeInView"
import ReviewsSlider from "./components/ReviewsSlider"
import { EmblaOptionsType } from "embla-carousel"
import Button from "./components/Button"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import "./styles/slider.css"

export default function App() {
  const OPTIONS: EmblaOptionsType = { align: "start", loop: true };
  // Testimonial reviews data
  const REVIEWS = [
    {
      text: "She explains things in a way that finally makes sense. The lessons are structured, but still feel positive and motivating.",
      author: "Adult ESL student",
    },
    {
      text: "Sandra sets a high bar and focuses on the exact areas my daughter needed help with. The improvement in writing has been noticeable.",
      author: "Parent of high school student",
    },
    {
      text: "Sandra is patient, clear, and incredibly encouraging. My child's confidence improved quickly, and we saw progress week to week.",
      author: "Parent of middle school student",
    },
    {
      text: "I was nervous speaking English, but Sandra made me feel comfortable right away. I am speaking more confidently at work now.",
      author: "Adult professional",
    },
    {
      text: "My son actually looks forward to lessons. Sandra is warm, but she also holds him accountable, which is exactly what we needed.",
      author: "Parent of elementary student",
    },
    {
      text: "The feedback is specific and actionable. We finally have a clear plan for reading and writing, and it is working.",
      author: "Parent of ESL learner",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden antialiased">
      <Navigation />

      {/* Hero Section */}
      <section className="flex items-center min-h-screen h-fit lg:max-h-225 overflow-hidden py-35 md:pt-32 md:pb-20">
        {/* Background Squiggles */}
        <Squiggle className="absolute -bottom-50 md:-bottom-75 lg:-bottom-50 -left-30 md:-left-60 lg:-left-75 w-100 md:w-150 lg:w-175 text-secondary" />
        <SquiggleAlt className="absolute -top-20 md:-top-50 lg:-top-100 -right-50 w-100 md:w-150 lg:w-250 h-auto opacity-50 pointer-events-none"/>
        
        {/* Hero Content */}
        <div className="max-w-3xl h-auto mx-auto flex flex-col gap-8 md:gap-12 z-10">
          <FadeInView>
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="font-['Oooh_Baby',sans-serif] text-muted-foreground text-2xl whitespace-nowrap rotate-2 mb-4">
                Personalized english lessons
              </p>
              <h1 className="font-serif tracking-tight leading-[1.1]">
                Learning English should feel supportive and calm.
              </h1>
              <p className="text-muted-foreground text-lg tracking-tight max-w-md">
                Helping students build confidence, clarity, and strong
                foundations in English.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Button />
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="flex items-center justify-center gap-2 px-4 py-1.5 hover:text-primary-foreground hover:bg-primary rounded-full transition-all duration-300 ease-in-out border border-neutral-200"
                >
                  <span className="font-semibold tracking-tighter">
                    How it works
                  </span>
                  <ArrowCircleDownIcon weight="duotone" size={20} />
                </button>
              </div>
              <p className="  text-muted-foreground text-sm tracking-tight leading-5">
                No commitment. Just a conversation.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Feature Banner */}
      <section className="bg-secondary rounded-t-3xl md:rounded-none py-12 md:py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-20 items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 grow justify-center">
            <div className="w-8 h-8 shrink-0">
              <Image
                src="/images/raised-hand.svg"
                className="block"
                width={100}
                height={100}
                alt=""
                unoptimized
              />
            </div>
            <span className="tracking-tight">Online or in-person</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 grow justify-center">
            <div className="w-8 h-8 shrink-0">
              <Family className="text-accent w-full h-full" />
            </div>
            <span className="tracking-tight">Kids, teens, adults</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 grow justify-center">
            <div className="w-8 h-8 shrink-0">
              <Image
                src="/images/globe.svg"
                className="block"
                width={100}
                height={100}
                alt=""
                unoptimized
              />
            </div>
            <span className="tracking-tight">ESL focused</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="meet-your-tutor">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
          <FadeInView>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.2]">
              I’ve been teaching English as a Second Language for over 20 years,
              helping students from all backgrounds build confidence, clarity,
              and strong foundations in English.
            </h2>
          </FadeInView>

          {/* Bio Grid */}
          <FadeInView delay={0.1}>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-28 items-center">
              <div className="relative w-full md:max-w-md aspect-square">
                <Image
                  alt="Sandra Mastromarino"
                  className="w-full h-full object-cover rounded-3xl"
                  src={imgPortraitImg}
                />
                <Image
                  src="/images/Badge.svg"
                  className="absolute -left-4 md:-left-8 lg:-left-12 -top-5 md:-top-10 lg:-top-14 block w-25 h-25 md:w-25 md:h-25 lg:w-30 lg:h-30"
                  width={100}
                  height={100}
                  alt=""
                  unoptimized
                />
              </div>

              <div className="text-lg tracking-tight space-y-6">
                <p>
                  I earned my Master’s degree in Teaching from Fairleigh
                  Dickinson University and have spent my career both in the
                  classroom and working one-on-one with students.
                </p>
                <p>
                  I began my ESL journey at the New Jersey Japanese School and
                  have since taught in both private and public school settings
                  across New Jersey.
                </p>
                <p>
                  I’m known for being warm, direct, and deeply invested in my
                  students’ progress.
                </p>
              </div>
            </div>
          </FadeInView>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <FadeInView delay={0.1}>
              <div className="border border-neutral-200 rounded-3xl h-full p-6 flex flex-col gap-20">
                <div className="w-11 h-11">
                  <Image
                    src="/images/calendar.svg"
                    className="block"
                    width={100}
                    height={100}
                    alt=""
                    unoptimized
                  />
                </div>
                <h3 className="font-serif tracking-tight">
                  20+ years of ESL teaching experience
                </h3>
              </div>
            </FadeInView>

            {/* Card 2 */}
            <FadeInView delay={0.2}>
              <div className="border border-neutral-200 rounded-3xl h-full p-6 flex flex-col gap-20">
                <div className="w-11 h-11">
                  <Image
                    src="/images/certificate.svg"
                    className="block"
                    width={100}
                    height={100}
                    alt=""
                    unoptimized
                  />
                </div>
                <h3 className="font-serif tracking-tight">
                  Master’s degree in Teaching
                </h3>
              </div>
            </FadeInView>

            {/* Card 3 */}
            <FadeInView delay={0.3}>
              <div className="border border-neutral-200 rounded-3xl h-full p-6 flex flex-col gap-20">
                <div className="w-11 h-11">
                  <Image
                    src="/images/school-cap.svg"
                    className="block"
                    width={100}
                    height={100}
                    alt=""
                    unoptimized
                  />
                </div>
                <h3 className="font-serif tracking-tight">
                  Private and public school experience
                </h3>
              </div>
            </FadeInView>

            {/* Card 4 */}
            <FadeInView delay={0.4}>
              <div className="border border-neutral-200 rounded-3xl h-full p-6 flex flex-col gap-20">
                <div className="w-11 h-11">
                  <Family className="text-tertiary w-full h-full" />
                </div>
                <h3 className="font-serif tracking-tight">
                  For children, teens, and adults
                </h3>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-secondary rounded-t-3xl md:rounded-t-4xl lg:rounded-t-[80px] overflow-hidden"
      >
        {/* Background Squiggle */}
        <Squiggle className="absolute -bottom-150 -left-100 w-250 opacity-40 text-white" />

        <div className="relative max-w-6xl mx-auto flex flex-col gap-12">
          <FadeInView>
            <div className="max-w-xl flex flex-col gap-6">
              <h2 className="font-serif tracking-tight">How it works...</h2>
              <p className="  text-muted-foreground text-lg tracking-[-0.4px]">
                I will identify areas of weakness and work through them
                thoughtfully, while keeping learning engaging and encouraging.
              </p>
            </div>
          </FadeInView>

          {/* Step Cards */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SquiggleArrow className="absolute -top-40 -right-20 w-37.5 text-accent pointer-events-none hidden lg:block"/>

            {/* Step 1 */}
            <FadeInView delay={0.1}>
              <div className="bg-white rounded-3xl p-6 lg:p-8 flex flex-col gap-10">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <Image
                    className="absolute inset-0 text-primary w-full h-full"
                    src="/images/bullet.svg"
                    alt=""
                    width={100}
                    height={100}
                    unoptimized
                  />
                  <span className="z-10 text-white text-xl md:text-2xl">1</span>
                </div>
                <div className="flex flex-col gap-5 pt-3">
                  <h3 className="font-serif tracking-tight">
                    Book your intro call
                  </h3>
                  <p className="text-muted-foreground tracking-tight">
                    A short conversation to understand goals, level, and needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button />
                  <p className="text-muted-foreground text-sm tracking-tight">
                    No commitment. Just a conversation.
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Step 2 */}
            <FadeInView delay={0.2}>
              <div className="bg-white rounded-3xl h-full p-6 lg:p-8 flex flex-col gap-10">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <Image
                    className="absolute inset-0 text-primary w-full h-full"
                    src="/images/bullet.svg"
                    alt=""
                    width={100}
                    height={100}
                    unoptimized
                  />
                  <span className="z-10 text-white text-xl md:text-2xl">2</span>
                </div>
                <div className="flex flex-col gap-5 pt-3">
                  <h3 className="font-serif tracking-tight">
                    Personalized plan
                  </h3>
                  <p className="text-muted-foreground tracking-tight">
                    A focused plan built around the areas that matter most.
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Step 3 */}
            <FadeInView delay={0.3}>
              <div className="bg-white rounded-3xl h-full p-6 lg:p-8 flex flex-col gap-10">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <Image
                    className="absolute inset-0 text-primary w-full h-full"
                    src="/images/bullet.svg"
                    alt=""
                    width={100}
                    height={100}
                    unoptimized
                  />
                  <span className="z-10 text-white text-xl md:text-2xl">3</span>
                </div>
                <div className="flex flex-col gap-5 pt-3">
                  <h3 className="font-serif tracking-tight">
                    Consistent progress
                  </h3>
                  <p className="text-muted-foreground tracking-tight">
                    Structured lessons, targeted feedback, real improvement.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-0">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="font-serif tracking-tight mb-20">
              What families say...
            </h2>
          </FadeInView>
        </div>
      </section>

      {/* Reviews Slider */}
      <ReviewsSlider reviews={REVIEWS} options={OPTIONS} />

      <Footer />
    </div>
  );
}
