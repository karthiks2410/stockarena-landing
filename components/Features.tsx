"use client";

import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="features">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-cyan-900/5 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Packed with <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need for an immersive stock market fantasy experience
          </p>
        </motion.div>

        {/* Features grid - larger cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
