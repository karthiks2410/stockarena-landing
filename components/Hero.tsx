"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - Apple-style
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-cyan-900/30"
        style={{ y }}
      />

      {/* Animated background shapes with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 left-0 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[150px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTYwIDBIMHY2MGg2MFYwek0xIDFoNTh2NThIMVYxeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-40"
        style={{ y }}
      />

      {/* Main content with parallax fade */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto text-center pt-20"
        style={{ opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-emerald-400">Now Live in India</span>
        </motion.div>

        {/* Main heading with text parallax */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          style={{ y: textY }}
        >
          <span className="gradient-text">Stock Arena</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-4"
        >
          India&apos;s First Stock Market Fantasy Game
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto"
        >
          Pick stocks. Compete with friends. Win bragging rights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="https://bull-11-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
          >
            <span>Play Now on Web</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <button
            disabled
            className="inline-flex items-center gap-2 px-10 py-5 bg-white/5 text-gray-400 text-lg font-semibold rounded-full border border-white/10 cursor-not-allowed"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>App Store</span>
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">Soon</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="grid grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-emerald-400">1000+</p>
            <p className="text-sm md:text-base text-gray-500 mt-2">NSE/BSE Stocks</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-cyan-400">Real-time</p>
            <p className="text-sm md:text-base text-gray-500 mt-2">Live Prices</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-purple-400">Free</p>
            <p className="text-sm md:text-base text-gray-500 mt-2">To Play</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
