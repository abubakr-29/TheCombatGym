"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/framerMotion/variants";

const OurMission = () => {
  return (
    <section id="mission" className="relative py-20">
      <motion.div
        variants={staggerContainer(0.2, 0.15)} // 0.2 initial delay, 0.15 gap between children
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="container mx-auto px-4 font-montserrat"
      >
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:justify-between">
          {/* Left Column - Header */}
          <motion.div
            variants={staggerContainer(0, 0.2)} // Nested stagger for heading elements
            className="w-full lg:w-2/5 flex flex-col gap-3"
          >
            <motion.h2
              variants={fadeIn("down", 0)}
              className="text-sm font-medium tracking-wider uppercase"
            >
              Our Mission
            </motion.h2>

            <motion.div
              variants={{
                hidden: { height: 0 },
                show: {
                  height: "2.5rem",
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="w-[1px] bg-black"
            />

            <motion.h1
              variants={fadeIn("up", 0)}
              className="text-3xl md:text-4xl lg:text-5xl font-[650] text-black leading-tight tracking-wider uppercase"
            >
              Train to <br className="hidden lg:block" /> Conquer
            </motion.h1>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            variants={fadeIn("up", 0)}
            className="w-full lg:w-3/5 space-y-6 flex flex-col items-center justify-end text-sm md:text-base"
          >
            <p className="leading-relaxed">
              At Combat Gym, our mission is to create an environment where
              athletes of all levels can train with purpose. Whether you&apos;re
              stepping onto the mats for the first time or chasing championship
              dreams, we provide the tools, coaching, and mindset needed to grow
              stronger every day. We believe in the power of martial arts not
              just to build fighters, but to build character, confidence, and
              resilience.
            </p>
            <p className="leading-relaxed">
              Our vision extends beyond the gym walls — we aim to cultivate a
              community that thrives on respect, hard work, and brotherhood.
              Every punch, kick, and grapple is more than just training;
              it&apos;s a step towards discipline, focus, and personal victory.
              At Combat Gym, we don&apos;t just train to fight. We train to
              conquer — both in sport and in life.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black"></div>
    </section>
  );
};

export default OurMission;
