"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import {
  fadeIn,
  scaleUp,
  staggerContainer,
  textVariant,
} from "@/framerMotion/variants";

const Hero = () => {
  const reduce = useReducedMotion(); // respects user reduced-motion
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative h-[165vw] sm:h-[110vw] lg:h-screen flex items-center justify-center overflow-hidden">
        {/* VIDEO - I recommend NOT animating the video. */}
        <m.video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero_poster.png"
        />

        {/* overlay */}
        <m.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute inset-0 bg-black/40 z-10 will-change-[opacity]"
        />

        {/* content container with stagger */}
        <m.div
          variants={reduce ? {} : staggerContainer(0.18, 0.2)}
          initial="hidden"
          animate="show"
          className="relative z-20 font-poppins text-white text-center px-6 sm:px-8 md:px-12 lg:px-16 space-y-3"
        >
          <m.h1
            variants={reduce ? {} : textVariant(0.05)}
            className="font-bold mb-4 text-3xl md:text-5xl tracking-wide text-[#ff383e] uppercase"
          >
            The Combat Gym
          </m.h1>

          <m.p
            variants={reduce ? {} : fadeIn("up", 0.12)}
            className="font-semibold tracking-tight sm:tracking-wide text-md sm:text-xl md:text-2xl"
          >
            I&apos;m Zakir Hossain - Elite Combat Trainer
          </m.p>

          <m.p
            variants={reduce ? {} : fadeIn("up", 0.18)}
            className="font-[300] leading-snug tracking-tight sm:tracking-wide text-md md:text-xl"
          >
            I&apos;ve trained champions and transformed countless lives.
          </m.p>

          <m.p
            variants={reduce ? {} : fadeIn("up", 0.24)}
            className="font-[300] leading-snug tracking-tight sm:tracking-wide text-md md:text-xl"
          >
            I teach the committed the secrets to mastering combat and achieving
            greatness.
          </m.p>

          <m.div variants={reduce ? {} : scaleUp(0.3)} className="my-10">
            <m.div
              whileHover={!reduce ? { scale: 1.05 } : {}}
              whileTap={!reduce ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="https://wa.me/+919145379014?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20classes."
                target="_blank"
                className="inline-block text-base md:text-lg bg-[#ff383e] px-6 py-4 hover:bg-white hover:text-black duration-300 transition-all font-semibold tracking-wide shadow-lg"
              >
                LEARN FROM THE BEST
              </Link>
            </m.div>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
