"use client";

import { useState } from "react";
import { MoveDown } from "lucide-react";
import { motion } from "motion/react";
import GymGallery from "./GymGallery";

// Type definitions
interface GalleryItem {
  title: string;
  description: string;
  image: string;
  overlay?: string;
  visitLink?: boolean;
}

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  galleryItems: GalleryItem[];
}

const GymAccordion = () => {
  const accordionData: AccordionItem[] = [
    {
      id: "classes",
      title: "Classes We Provide",
      content:
        "Our combat gym offers a wide range of classes designed to improve strength, skill, and discipline. From striking arts to grappling and conditioning, we provide professional training programs for all levels.",
      galleryItems: [
        {
          title: "Mixed Martial Arts (MMA)",
          description:
            "A complete combat sport combining striking and grappling techniques to build all-round fighting skills and endurance.",
          image: "/classes/mma.jpg",
          overlay: "MMA",
          visitLink: true,
        },
        {
          title: "Taekwondo",
          description:
            "A dynamic martial art focusing on powerful kicks, speed, and discipline to develop agility, flexibility, and confidence.",
          image: "/classes/taekwondo.jpg",
          overlay: "Taekwondo",
          visitLink: true,
        },
        {
          title: "Kickboxing",
          description:
            "A high-intensity striking art blending punches and kicks for fitness, power, and effective self-defence skills.",
          image: "/classes/kickboxing.jpg",
          overlay: "Kickboxing",
          visitLink: true,
        },
        {
          title: "Boxing",
          description:
            "Learn the science of boxing with proper technique, footwork, and conditioning to sharpen reflexes and power.",
          image: "/classes/boxing.jpg",
          overlay: "Boxing",
          visitLink: true,
        },
        {
          title: "Wushu",
          description:
            "A traditional Chinese martial art combining fluid movements, strength, and technique for combat and performance.",
          image: "/classes/wushu.jpg",
          overlay: "Wushu",
          visitLink: true,
        },
        {
          title: "Grappling",
          description:
            "Ground-based combat training focusing on submissions, takedowns, and control for both sport and self-defence.",
          image: "/classes/grappling.jpg",
          overlay: "Grappling",
          visitLink: true,
        },
        {
          title: "K-Pro (Combat Karate)",
          description:
            "A modern approach to karate blending traditional techniques with practical combat applications for real situations.",
          image: "/classes/karate.jpg",
          overlay: "K-Pro",
          visitLink: true,
        },
        {
          title: "Self-Defence (Certificate Course)",
          description:
            "A practical program designed to equip individuals with essential techniques to stay safe and confident in daily life.",
          image: "/classes/self-defence.jpg",
          overlay: "Self-Defence",
          visitLink: true,
        },
        {
          title: "CrossFit",
          description:
            "An intense strength and conditioning program that enhances endurance, power, and mobility for combat readiness.",
          image: "/classes/crossfit.jpg",
          overlay: "CrossFit",
          visitLink: true,
        },
      ],
    },
    {
      id: "recovery-wellness",
      title: "Sports Recovery & Wellness",
      content:
        "Our wellness programs focus on recovery, injury prevention, and overall health. From physiotherapy to nutrition and specialized therapies, we help athletes stay fit, strong, and prepared.",
      galleryItems: [
        {
          title: "Physiotherapy",
          description:
            "Rehabilitation and recovery sessions designed to improve mobility, reduce pain, and prevent future injuries.",
          image: "/recovery-wellness/physiotherapy.jpg",
          overlay: "Physiotherapy",
          visitLink: true,
        },
        {
          title: "Diet Plan",
          description:
            "Personalized nutrition guidance crafted to support strength, endurance, and healthy weight management.",
          image: "/recovery-wellness/diet-plan.jpg",
          overlay: "Diet Plan",
          visitLink: true,
        },
        {
          title: "First Aid Course",
          description:
            "Certified first aid training that equips athletes and individuals with vital life-saving skills in emergencies.",
          image: "/recovery-wellness/first-aid.jpg",
          overlay: "First Aid",
          visitLink: true,
        },
        {
          title: "Cupping Therapy",
          description:
            "A traditional recovery method that improves blood flow, reduces muscle tension, and speeds up healing.",
          image: "/recovery-wellness/cupping-therapy.jpg",
          overlay: "Cupping",
          visitLink: true,
        },
      ],
    },
    {
      id: "awards-achievements",
      title: "Awards & Achievements",
      content:
        "We take pride in our milestones and the recognition our athletes and team have earned through dedication, discipline, and excellence in combat sports.",
      galleryItems: [
        {
          title: "National Championships",
          description:
            "Recognition for outstanding performances at prestigious national-level competitions and tournaments.",
          image: "https://picsum.photos/400/300?random=14",
          overlay: "National",
          visitLink: false,
        },
        {
          title: "Certificates of Excellence",
          description:
            "Awards acknowledging consistent dedication, technical growth, and excellence in combat training.",
          image: "https://picsum.photos/400/300?random=16",
          overlay: "Certificates",
          visitLink: false,
        },
        {
          title: "Student Achievements",
          description:
            "Celebrating the success stories of our students who excel in competitions, exams, and professional recognition.",
          image: "https://picsum.photos/400/300?random=17",
          overlay: "Students",
          visitLink: false,
        },
      ],
    },
  ];

  const [openItem, setOpenItem] = useState<string | null>(accordionData[0].id);

  const toggleItem = (itemId: string): void => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section>
      <div className="w-full">
        {accordionData.map((item: AccordionItem, index: number) => (
          <motion.div
            key={item.id}
            id={item.id}
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Animated Border */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute top-0 left-0 w-full h-[1px] bg-gray-900 origin-left"
            />

            <div className="container mx-auto px-6 md:px-8 lg:px-4 font-montserrat">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-8 px-0 bg-transparent border-none cursor-pointer hover:bg-transparent focus:outline-none group"
              >
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-[650] text-black tracking-wide text-left uppercase">
                    {item.title}
                  </h2>
                  <MoveDown
                    className={`h-8 w-8 shrink-0 text-black transition-transform duration-300 ${
                      openItem === item.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItem === item.id
                    ? "h-full opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-8 pt-0">
                  {/* Text Content */}
                  <div className="max-w-3xl mb-6">
                    <p className="text-black text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  {/* Gallery */}
                  <GymGallery items={item.galleryItems} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GymAccordion;
