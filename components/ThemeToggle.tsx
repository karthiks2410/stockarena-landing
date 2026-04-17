"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="
        relative
        w-11 h-11
        flex items-center justify-center
        rounded-full
        border border-gray-300 dark:border-gray-600
        bg-white/80 dark:bg-gray-800/80
        backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:scale-110
        hover:border-emerald-400 dark:hover:border-emerald-400
        hover:shadow-lg hover:shadow-emerald-500/20
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-emerald-500
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900
      "
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
            absolute inset-0
            w-5 h-5
            text-amber-500
            transition-all duration-500 ease-out
            ${isDark
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
            }
          `}
          aria-hidden="true"
        >
          {/* Sun circle */}
          <circle cx="12" cy="12" r="4" />
          {/* Sun rays */}
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>

        {/* Moon Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
            absolute inset-0
            w-5 h-5
            text-indigo-400
            transition-all duration-500 ease-out
            ${isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
            }
          `}
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  );
}
