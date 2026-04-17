"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    icon: "📈",
    title: "Pick Stocks",
    description: "Choose from 1000+ NSE/BSE stocks to build your dream portfolio",
    color: "emerald",
  },
  {
    icon: "🎯",
    title: "Track Live",
    description: "Watch your portfolio performance in real-time during market hours",
    color: "cyan",
  },
  {
    icon: "🏆",
    title: "Win & Compete",
    description: "Beat your friends and climb the leaderboard to claim victory",
    color: "purple",
  },
];

const colorMap = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    shadow: "hover:shadow-emerald-500/20",
    glow: "bg-emerald-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-400",
    shadow: "hover:shadow-cyan-500/20",
    glow: "bg-cyan-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-600 dark:text-purple-400",
    shadow: "hover:shadow-purple-500/20",
    glow: "bg-purple-500/20",
  },
};

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);

  const colors = colorMap[step.color as keyof typeof colorMap];

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      whileHover={{ scale: 1.02, y: -8 }}
      className={`group relative p-10 lg:p-12 rounded-3xl ${colors.bg} border ${colors.border} transition-all duration-500 ${colors.shadow} hover:shadow-2xl`}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 ${colors.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[var(--background)] border-2 border-[var(--card-border)] flex items-center justify-center text-lg font-bold text-[var(--foreground)] z-10">
        {index + 1}
      </div>

      {/* Icon */}
      <motion.div
        className="relative text-6xl lg:text-7xl mb-8"
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        {step.icon}
      </motion.div>

      {/* Content */}
      <h3 className={`relative text-2xl lg:text-3xl font-bold mb-4 ${colors.text}`}>
        {step.title}
      </h3>
      <p className="relative text-lg text-[var(--foreground-secondary)] leading-relaxed">
        {step.description}
      </p>

      {/* Arrow connector (not on last item) */}
      {index < steps.length - 1 && (
        <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 text-[var(--foreground-muted)] items-center">
          <motion.svg
            className="w-10 h-10 lg:w-12 lg:h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        </div>
      )}
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-20" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-[var(--foreground-secondary)] max-w-3xl mx-auto">
            Three simple steps to start your stock market fantasy journey
          </p>
        </motion.div>

        {/* Steps with individual scroll animations */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
