"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        h-16
        px-6 md:px-8 lg:px-12
        flex items-center justify-between
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      {/* Logo on left */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Theme toggle on right */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
