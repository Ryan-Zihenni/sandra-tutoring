import Image from "next/image"
import Squiggle from "../../public/images/squiggle_2.svg"
import { FadeInView } from "./FadeInView"
import Button from "./Button"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-primary rounded-t-3xl md:rounded-t-4xl lg:rounded-t-[80px] w-full pt-16 md:pt-24 lg:pt-32 pb-10 px-6 md:px-10 lg:px-24 overflow-hidden"
    >
      {/* Background Squiggle */}
      <Squiggle className="w-600 absolute -bottom-250 -right-400 opacity-10 -rotate-60 pointer-events-none"/>

      <div className="relative max-w-6xl mx-auto flex flex-col gap-16 md:gap-24 lg:gap-32">
        {/* CTA Row */}
        <FadeInView>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center justify-between">
            <h2 className="font-serif text-white tracking-tight max-w-sm">
              I’d love to hear from you!
            </h2>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <Button />
              <p className="text-primary-foreground tracking-tight md:text-right leading-5">
                Or email me at{" "}
                <a
                  href="mailto:sandrasuzz00@gmail.com"
                  className="underline hover:opacity-70"
                >
                  sandrasuzz00@gmail.com
                </a>
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Divider */}
        <div className="h-px w-full bg-white opacity-20" />

        {/* Footer Info */}
        <FadeInView delay={0.1}>
          <div className="flex flex-col gap-14">
            <h1
              className="font-serif text-primary-foreground tracking-tight"
              style={{ fontSize: "clamp(3em, 12vw, 12em)" }}
            >
              Sandra Mastromarino
            </h1>
            <p className="text-white text-sm tracking-tight opacity-50">
              © Sandra Mastromarino, 2026
            </p>
          </div>
        </FadeInView>
      </div>
    </footer>
  );
}
