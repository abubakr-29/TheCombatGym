"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative h-[165vw] sm:h-[110vw] lg:h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/thecombatgymhero_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/herothumbnail.png"
      />

      {/* overlay with fade in */}
      <motion.div
        className="absolute inset-0 bg-black/60 z-10 will-change-[opacity]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-20 font-poppins text-white text-center px-6 sm:px-8 md:px-12 lg:px-16 space-y-3">
        <motion.h1
          className="font-bold mb-4 text-3xl md:text-5xl tracking-wide text-[#ff383e] uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Combat Gym
        </motion.h1>

        <motion.p
          className="font-semibold tracking-tight sm:tracking-wide text-md sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I&apos;m Zakir Hossain - Elite Combat Trainer
        </motion.p>

        <motion.p
          className="font-[300] leading-snug tracking-tight sm:tracking-wide text-md md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I&apos;ve trained champions and transformed countless lives.
        </motion.p>

        <motion.p
          className="font-[300] leading-snug tracking-tight sm:tracking-wide text-md md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          I teach the committed the secrets to mastering combat and achieving
          greatness.
        </motion.p>

        <div className="my-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://wa.me/+919145379014?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20classes."
              target="_blank"
              className="inline-block text-base md:text-lg bg-[#ff383e] px-6 py-4 hover:bg-white hover:text-black duration-300 transition-all font-semibold tracking-wide shadow-lg"
            >
              LEARN FROM THE BEST
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
