"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function PhoneCard({
  screenshot,
  index,
}: {
  screenshot: (typeof screenshots)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Different parallax for each card - Apple-style staggered reveal
  const yOffset = 100 + index * 30;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -15 : 15, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale, rotateY }}
      whileHover={{ y: -20, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center perspective-1000"
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
        className="mt-6 text-base lg:text-lg font-medium text-[var(--foreground-secondary)]"
        style={{ opacity }}
      >
        {screenshot.label}
      </motion.p>
    </motion.div>
  );
}

export default function Screenshots() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      id="screenshots"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity, scale: headerScale }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--foreground)]">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-[var(--foreground-secondary)] max-w-3xl mx-auto">
            A beautiful, intuitive interface designed for the best trading experience
          </p>
        </motion.div>

        {/* Screenshots with individual scroll animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {screenshots.map((screenshot, index) => (
            <PhoneCard key={screenshot.label} screenshot={screenshot} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
