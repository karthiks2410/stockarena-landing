"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Download() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20" id="download">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center p-12 md:p-16 lg:p-20 rounded-[2.5rem] bg-gradient-to-br from-emerald-900/40 via-cyan-900/30 to-purple-900/40 border border-white/10 backdrop-blur-sm overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-purple-500/10 blur-3xl" />

          {/* Header */}
          <motion.h2
            className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get Started <span className="gradient-text">Today</span>
          </motion.h2>
          <motion.p
            className="relative text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join thousands of players competing in India&apos;s most exciting stock market fantasy game
          </motion.p>

          {/* Download buttons */}
          <motion.div
            className="relative flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* App Store - Coming Soon */}
            <button
              disabled
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-5 bg-white/5 text-gray-400 rounded-2xl border border-white/10 cursor-not-allowed transition-all duration-300 hover:bg-white/[0.07]"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-sm text-gray-500">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
              <span className="absolute -top-3 -right-3 text-sm bg-emerald-500 text-white px-3 py-1.5 rounded-full font-medium">
                Soon
              </span>
            </button>

            {/* Play Store - Coming Soon */}
            <button
              disabled
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-5 bg-white/5 text-gray-400 rounded-2xl border border-white/10 cursor-not-allowed transition-all duration-300 hover:bg-white/[0.07]"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <p className="text-sm text-gray-500">Get it on</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
              <span className="absolute -top-3 -right-3 text-sm bg-emerald-500 text-white px-3 py-1.5 rounded-full font-medium">
                Soon
              </span>
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="relative flex items-center gap-6 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-500 text-lg">or play instantly</span>
            <div className="flex-1 h-px bg-white/10" />
          </motion.div>

          {/* Web App Button - Active */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="https://bull-11-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>Play on Web App</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
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
          </motion.div>

          <motion.p
            className="relative mt-6 text-lg text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            No download required • Works on any device
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
