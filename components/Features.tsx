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

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent" id="features">
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
            Packed with <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for an immersive stock market fantasy experience
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:bg-white/[0.07]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
