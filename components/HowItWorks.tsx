"use client";

import { motion } from "framer-motion";

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
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20",
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-4" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three simple steps to start your stock market fantasy journey
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const colors = colorMap[step.color as keyof typeof colorMap];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl ${colors.bg} border ${colors.border} transition-all duration-300 hover:scale-105 ${colors.glow} hover:shadow-xl`}
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6">{step.icon}</div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 ${colors.text}`}>
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
