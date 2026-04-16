"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/home.png",
    alt: "Browse Contests",
    label: "Browse Contests",
  },
  {
    src: "/screenshots/contests.png",
    alt: "Live Contests",
    label: "Track Live",
  },
  {
    src: "/screenshots/leaderboard.png",
    alt: "Leaderboard",
    label: "Leaderboard",
  },
  {
    src: "/screenshots/login.png",
    alt: "Login Screen",
    label: "Easy Login",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Screenshots() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 overflow-hidden" id="screenshots">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A beautiful, intuitive interface designed for the best trading experience
          </p>
        </motion.div>

        {/* Screenshots - spread across full width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.label}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.03 }}
              className="flex flex-col items-center"
            >
              {/* Phone frame */}
              <div className="phone-frame transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 w-full max-w-[320px]">
                <div className="phone-screen relative w-full aspect-[9/19.5]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Label */}
              <motion.p
                className="mt-6 text-base lg:text-lg font-medium text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {screenshot.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
