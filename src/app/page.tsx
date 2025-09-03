import About from "@/components/aboutSection/About";
import BackToTop from "@/components/BackToTop";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footerSection/Footer";
import GymAccordion from "@/components/gymAccordion/GymAccordion";
import Hero from "@/components/heroSection/Hero";
import OurMission from "@/components/missionSection/OurMission";
import TestimonialsSection from "@/components/testimonialsSection/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurMission />
      <GymAccordion />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
