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

export default function Screenshots() {
  return (
    <section className="py-24 px-4 overflow-hidden" id="screenshots">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A beautiful, intuitive interface designed for the best trading experience
          </p>
        </motion.div>

        {/* Screenshots carousel */}
        <div className="flex gap-6 justify-center flex-wrap lg:flex-nowrap">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Phone frame */}
              <div
                className={`phone-frame ${index === 1 ? "animate-float" : ""}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="phone-screen relative w-[280px] h-[560px] md:w-[300px] md:h-[600px]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                  />
                </div>
              </div>

              {/* Label */}
              <p className="mt-4 text-sm font-medium text-gray-400">
                {screenshot.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
