"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeIn,
  scaleUp,
  staggerContainer,
  textVariant,
} from "@/framerMotion/variants";

const Hero = () => {
  return (
    <section className="relative h-[165vw] sm:h-[110vw] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Scale Animation */}
      <motion.video
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay with Fade In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 bg-black/40 z-10"
      />

      {/* Content Container with Stagger */}
      <motion.div
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        animate="show"
        className="relative z-20 font-poppins text-white text-center px-6 sm:px-8 md:px-12 lg:px-16 space-y-3"
      >
        {/* Main Title with Dramatic Entry */}
        <motion.h1
          variants={textVariant(0)}
          className="font-bold mb-4 text-3xl md:text-5xl tracking-wide text-[#ff383e] uppercase"
        >
          The Combat Gym
        </motion.h1>

        {/* Subtitle with Slide In */}
        <motion.p
          variants={fadeIn("up", 0)}
          className="font-semibold tracking-tight sm:tracking-wide text-md sm:text-xl md:text-2xl"
        >
          I&apos;m Zakir Hossain - Elite Combat Trainer
        </motion.p>

        {/* Description Lines with Staggered Fade In */}
        <motion.p
          variants={fadeIn("up", 0)}
          className="font-[300] leading-snug tracking-tight sm:tracking-wide text-md md:text-xl"
        >
          I&apos;ve trained champions and transformed countless lives.
        </motion.p>

        <motion.p
          variants={fadeIn("up", 0)}
          className="font-[300] leading-snug tracking-tight sm:tracking-wide text-md md:text-xl"
        >
          I teach the committed the secrets to mastering combat and achieving
          greatness.
        </motion.p>

        {/* CTA Button with Scale Up */}
        <motion.div variants={scaleUp(0)} className="my-10">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="https://wa.me/+919145379014?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20classes."
              target="_blank"
              className="inline-block text-base md:text-lg bg-[#ff383e] px-6 py-4 hover:bg-white hover:text-black duration-300 transition-all font-semibold tracking-wide shadow-lg"
            >
              LEARN FROM THE BEST
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
