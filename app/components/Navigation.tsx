import { useState, useEffect } from "react";
import { scrollToSection } from "../utils/navigation";
import Button from "./Button";
import Image from "next/image";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import imgPortraitImg from "../../public/images/sandra_mastromarino.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle menu link clicks
  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  return (
    <nav className="fixed top-0 z-20 w-full pt-4 px-4 md:px-10 lg:px-16">
      <div className="bg-white max-w-6xl mx-auto rounded-3xl border border-neutral-200 shadow-xs">
        <div className="flex items-center justify-between pl-6 pr-3 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <Image
                alt="Sandra Mastromarino"
                className="w-full h-full object-cover"
                src={imgPortraitImg}
              />
            </div>
            <span className="font-serif text-xl tracking-tight">
              Sandra Mastromarino
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleMenuClick("meet-your-tutor")}
              className="font-medium tracking-tight hover:opacity-70 transition-opacity"
            >
              Meet Ms. M
            </button>
            <button
              onClick={() => handleMenuClick("how-it-works")}
              className="font-medium tracking-tight hover:opacity-70 transition-opacity"
            >
              How it works
            </button>
            <button
              onClick={() => handleMenuClick("contact")}
              className="font-medium tracking-tight hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
          </div>

          <div className="flex gap-1">
            {/* CTA Button */}
            <div className="hidden md:block"><Button /></div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon size="24" /> : <ListIcon size="24" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 px-6 py-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleMenuClick("meet-your-tutor")}
                className="text-left font-medium tracking-tight py-4 hover:opacity-70 transition-opacity"
              >
                Meet Ms. M
              </button>
              <button
                onClick={() => handleMenuClick("how-it-works")}
                className="text-left font-medium tracking-tight py-4 hover:opacity-70 transition-opacity"
              >
                How it works
              </button>
              <button
                onClick={() => handleMenuClick("contact")}
                className="text-left font-medium tracking-tight py-4 hover:opacity-70 transition-opacity"
              >
                Contact
              </button>
              <Button />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
