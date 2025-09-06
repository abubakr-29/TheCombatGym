"use client";

import { useState, useEffect, useRef } from "react";
import { MoveRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/framerMotion/variants";

// Type definition
interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  time: string;
}

const TestimonialsSection = () => {
  const testimonialData: TestimonialItem[] = [
    {
      id: "Review 1",
      author: "Nizam Sk",
      rating: 5,
      text: "The best place to learn MMA! The coaches are highly skilled, supportive, and push you to achieve your best. The training sessions are well-structured, combining technique, conditioning, and sparring to help you grow as a fighter.",
      time: "2 weeks ago",
    },
    {
      id: "Review 2",
      author: "Yash Dassani",
      rating: 5,
      text: "The Combat Gym is the perfect place for anyone passionate about Mixed Martial Arts. Equipped with state-of-the-art facilities, this gym caters to beginners and advanced fighters alike.",
      time: "1 month ago",
    },
    {
      id: "Review 3",
      author: "Md Faizan",
      rating: 4,
      text: "Its the best place from you can learn martial art, self defence and combat training. By learning those things you can have confidence in your life and in any critical situation you will not feel helpless.",
      time: "3 weeks ago",
    },
    {
      id: "Review 4",
      author: "Lap castle",
      rating: 5,
      text: "Best place to learn Martial Arts. You can learn Taekwondo, MMA, K-Pro, Self Defence and many more. Teachers are good to their students and treat them like their own.",
      time: "2 months ago",
    },
    {
      id: "Review 5",
      author: "Sk Taufique Umar",
      rating: 4,
      text: "Experienced the best place for all types of Martial Arts. They provide the best coaches for better training as well as organised equipment.",
      time: "1 month ago",
    },
    {
      id: "Review 6",
      author: "Ashique Ali",
      rating: 5,
      text: "One of the best combat training institutes, especially for MMA, Kickboxing, and Taekwondo, with experienced certified trainers. Thanks to Combat Gym.",
      time: "3 months ago",
    },
    {
      id: "Review 7",
      author: "KHAN",
      rating: 5,
      text: "One of the best Martial Arts gyms in Kolkata that trains you in Kickboxing, Boxing, Taekwondo & MMA. Certified coach, with excellent guidance, individual attention and very effective courses.",
      time: "4 months ago",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialData.length]);

  const goToNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = (): void => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Touch/Mouse handlers for swiping
  const handleStart = (clientX: number): void => {
    setIsDragging(true);
    setStartX(clientX);
    setIsAutoPlaying(false);
  };

  const handleMove = (clientX: number): void => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleEnd = (): void => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (translateX > threshold) {
      goToPrev();
    } else if (translateX < -threshold) {
      goToNext();
    }

    setTranslateX(0);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent): void => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent): void => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent): void => {
    handleMove(e.clientX);
  };

  const handleMouseUp = (): void => {
    handleEnd();
  };

  const handleMouseLeave = (): void => {
    if (isDragging) {
      handleEnd();
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-[#ff383e] text-[#ff383e]" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="relative w-full font-montserrat min-h-[60vh] md:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden py-16 md:py-0"
    >
      {/* Background Image */}
      <Image
        width={1200}
        height={600}
        src="/testimonial_bg.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        priority={true}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="container mx-auto z-20 px-6 md:px-8 lg:px-4">
        <div className="max-w-4xl text-white">
          <motion.div
            variants={staggerContainer(0.3, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="mb-8"
          >
            <motion.h1
              variants={fadeIn("up", 0)}
              className="text-sm font-medium mb-2 tracking-wider uppercase"
            >
              Testimonials
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
              className="w-[1px] bg-white mb-1"
            ></motion.div>
            <motion.h2
              variants={fadeIn("up", 0)}
              className="font-[400] italic text-2xl md:text-3xl lg:text-4xl uppercase"
            >
              What People Say
            </motion.h2>
            <motion.h2
              variants={fadeIn("up", 0)}
              className="font-[650] text-[#ff383e] text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase"
            >
              About Us
            </motion.h2>
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative">
            {/* Current Testimonial */}
            <div
              className="overflow-hidden select-none"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={isDragging ? handleMouseMove : undefined}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% + ${
                    isDragging ? translateX : 0
                  }px))`,
                  cursor: isDragging ? "grabbing" : "grab",
                }}
              >
                {testimonialData.map((testimonial: TestimonialItem) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-sm md:text-base leading-relaxed mb-6 text-white/90">
                        &quot;{testimonial.text}&quot;
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-between">
                        <div>
                          <cite className="text-white font-semibold italic">
                            {testimonial.author}
                          </cite>
                          <p className="text-white/70 text-sm mt-1">
                            {testimonial.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-4 md:mt-8">
              {/* Navigation Arrows - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={goToPrev}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:cursor-pointer transition-all duration-300 group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#ff383e] transition-colors" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:cursor-pointer transition-all duration-300 group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:text-[#ff383e] transition-colors" />
                </button>
              </div>

              {/* Pagination Dots - Centered on mobile */}
              <div className="flex items-center gap-2 md:ml-auto mx-auto md:mx-0">
                {testimonialData.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer ${
                      index === currentIndex
                        ? "bg-[#ff383e] scale-125"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-10 group inline-block">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/+919145379014?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20The%20Combat%20Gym"
              className="group flex gap-2 text-sm md:text-base font-semibold text-white hover:text-[#ff383e] uppercase transition-colors"
            >
              EXPLORE OUR GYM{" "}
              <MoveRight className="group-hover:translate-x-2 duration-300 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
