"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: "📊",
    title: "Real NSE/BSE Prices",
    description: "Live stock prices powered by Zerodha Kite API for authentic market experience",
  },
  {
    icon: "👥",
    title: "Private Contests",
    description: "Create private contests and invite friends for exclusive competitions",
  },
  {
    icon: "📱",
    title: "Live Tracking",
    description: "Monitor your portfolio performance in real-time with instant updates",
  },
  {
    icon: "🏅",
    title: "Performance Badges",
    description: "Earn badges and achievements as you improve your trading skills",
  },
  {
    icon: "📈",
    title: "Smart Insights",
    description: "Get intelligent suggestions to optimize your stock picks",
  },
  {
    icon: "🔒",
    title: "Secure & Safe",
    description: "Your data is protected with enterprise-grade security measures",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  // Stagger effect based on index
  const delay = index * 0.1;

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      transition={{ delay }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="group relative p-8 lg:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all duration-500 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Icon */}
      <motion.div
        className="relative w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {feature.icon}
      </motion.div>

      {/* Content */}
      <h3 className="relative text-xl lg:text-2xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="relative text-base lg:text-lg text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      id="features"
    >
      {/* Background gradient with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-cyan-900/5 to-transparent"
        style={{ y: backgroundY }}
      />

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Packed with <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need for an immersive stock market fantasy experience
          </p>
        </motion.div>

        {/* Features grid with individual scroll animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
