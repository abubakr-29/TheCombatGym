"use client";

import { motion } from "motion/react";

const OurMission = () => {
  return (
    <section id="mission" className="relative py-20">
      <div className="container mx-auto px-4 font-montserrat">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:justify-between">
          {/* Left Column - Header */}
          <motion.div
            className="w-full lg:w-2/5 flex flex-col gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-sm font-medium tracking-wider uppercase"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Mission
            </motion.h1>
            <motion.div
              className="w-[1px] bg-black"
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            />
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-[650] text-black leading-tight tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Train to <br className="hidden lg:block" /> Conquer
            </motion.h1>
          </motion.div>

          {/* Right Column - Description */}
          <div className="w-full lg:w-3/5 space-y-6 flex flex-col items-center justify-end text-sm md:text-base">
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Combat Gym, our mission is to create an environment where
              athletes of all levels can train with purpose. Whether you&apos;re
              stepping onto the mats for the first time or chasing championship
              dreams, we provide the tools, coaching, and mindset needed to grow
              stronger every day. We believe in the power of martial arts not
              just to build fighters, but to build character, confidence, and
              resilience.
            </motion.p>
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our vision extends beyond the gym walls — we aim to cultivate a
              community that thrives on respect, hard work, and brotherhood.
              Every punch, kick, and grapple is more than just training;
              it&apos;s a step towards discipline, focus, and personal victory.
              At Combat Gym, we don&apos;t just train to fight. We train to
              conquer — both in sport and in life.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-black"
        initial={{ height: 0 }}
        whileInView={{ height: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
    </section>
  );
};

export default OurMission;
