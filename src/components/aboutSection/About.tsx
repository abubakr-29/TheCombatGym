"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/framerMotion/variants";

interface Slide {
  id: number;
  subHeading: string;
  title: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subHeading: "We Master",
    title: "Combat Sports with Precision & Power.",
    image: "/about/power.png",
  },
  {
    id: 2,
    subHeading: "We Train",
    title: "Champions—From Beginners to Competitors.",
    image: "/about/teaching.png",
  },
  {
    id: 3,
    subHeading: "We Learn",
    title: "From Elite Coaches Who Lead by Example",
    image: "/about/coach.png",
  },
  {
    id: 4,
    subHeading: "We Build",
    title: "Confidence, Skill & Resilience",
    image: "/about/group.png",
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  // Touch events for mobile
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setIsAutoPlaying(true);
  };

  // Mouse events for desktop
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = (): void => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!touchStart || !touchEnd) {
      setIsAutoPlaying(true);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setIsAutoPlaying(true);
  };

  const onMouseLeave = (): void => {
    if (isDragging) {
      setIsDragging(false);
      setIsAutoPlaying(true);
    }
  };

  return (
    <section
      id="about"
      className="container mx-auto overflow-hidden px-4 pt-22 font-montserrat"
    >
      {/* Fixed Heading with Animation */}
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h1
          variants={fadeIn("up", 0)}
          className="text-sm font-medium mb-2 tracking-wider uppercase"
        >
          WHO WE ARE
        </motion.h1>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "2.5rem" }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: false, amount: 0.6 }}
          className="w-[1px] bg-black"
        />
      </motion.div>

      <div
        className="relative cursor-grab active:cursor-grabbing select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            }`}
          >
            {/* Layout Container */}
            <div className="flex flex-col">
              {/* Top Section with Text */}
              <div className="flex items-center justify-start pt-2 pb-8">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h2 className="font-[400] italic text-2xl md:text-3xl lg:text-4xl uppercase">
                      {slide.subHeading}
                    </h2>

                    {/* Slide Indicators */}
                    <div className="flex space-x-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          onMouseEnter={() => setIsAutoPlaying(false)}
                          onMouseLeave={() => setIsAutoPlaying(true)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? "bg-gray-800 scale-125"
                              : "bg-gray-400 hover:bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-[650] text-black leading-tight uppercase">
                    {slide.title}
                  </h1>
                </div>
              </div>

              {/* Bottom Section with Image */}
              <div className="relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1024}
                  height={386}
                  className="w-full object-cover"
                  priority={true}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
