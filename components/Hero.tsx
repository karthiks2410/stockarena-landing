"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-red-900/20" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* BULL VS BEAR ANIMATION */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bull from the left (green/bullish) */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 text-6xl md:text-8xl"
          initial={{ x: "-100vw", rotate: 0 }}
          animate={{
            x: ["calc(-100vw)", "calc(50vw - 80px)", "calc(50vw - 100px)", "calc(50vw - 80px)"],
            rotate: [0, 0, -10, 0],
            scale: [1, 1, 1.2, 1]
          }}
          transition={{
            duration: 3,
            times: [0, 0.6, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <span className="drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]">🐂</span>
            {/* Charge effect */}
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-emerald-500 to-transparent"
              animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
              transition={{ duration: 0.3, delay: 1.5, repeat: Infinity, repeatDelay: 7.7 }}
            />
          </div>
        </motion.div>

        {/* Bear from the right (red/bearish) */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 text-6xl md:text-8xl"
          initial={{ x: "100vw", rotate: 0 }}
          animate={{
            x: ["calc(100vw)", "calc(50vw - 20px)", "calc(50vw)", "calc(50vw - 20px)"],
            rotate: [0, 0, 10, 0],
            scale: [1, 1, 1.2, 1]
          }}
          transition={{
            duration: 3,
            times: [0, 0.6, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <span className="drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]">🐻</span>
            {/* Charge effect */}
            <motion.div
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-l from-red-500 to-transparent"
              animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
              transition={{ duration: 0.3, delay: 1.5, repeat: Infinity, repeatDelay: 7.7 }}
            />
          </div>
        </motion.div>

        {/* Collision explosion effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 0.5,
            delay: 1.8,
            repeat: Infinity,
            repeatDelay: 7.5
          }}
        >
          <div className="text-4xl md:text-6xl">💥</div>
        </motion.div>

        {/* Sparks flying */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "#10b981" : "#ef4444",
            }}
            initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: [0, (i - 2.5) * 60],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 0.8,
              delay: 1.8 + i * 0.05,
              repeat: Infinity,
              repeatDelay: 7.2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-emerald-400">Now Live in India</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Stock Arena</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-4"
        >
          India&apos;s First Stock Market Fantasy Game
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          Pick stocks. Compete with friends. Win bragging rights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://bull-11-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 animate-pulse-glow"
          >
            <span>Play Now on Web</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-gray-400 font-semibold rounded-full border border-white/10 cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>App Store</span>
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">Soon</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-400">1000+</p>
            <p className="text-sm text-gray-500">NSE/BSE Stocks</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-cyan-400">Real-time</p>
            <p className="text-sm text-gray-500">Live Prices</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">Free</p>
            <p className="text-sm text-gray-500">To Play</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
