"use client";

import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
} from "lucide-react";
import Link from "next/link";

interface QuickLink {
  name: string;
  link: string;
  isScroll?: boolean;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom smooth scroll function with cubic-bezier easing
  const smoothScrollTo = (targetId: string, offset: number = 80) => {
    const element = document.getElementById(targetId);
    if (element) {
      const startPosition = window.pageYOffset;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementPosition - offset;
      const distance = targetPosition - startPosition;
      const duration = 1200; // Duration in milliseconds
      let startTime: number | null = null;

      // Cubic bezier easing function (0.25, 0.1, 0.25, 1.0) - smooth acceleration
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Apply cubic-bezier easing
        const easeProgress = easeInOutCubic(progress);
        const currentPosition = startPosition + distance * easeProgress;

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  // Handle navigation clicks - FIXED TYPE
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    link: string,
    isScroll?: boolean
  ) => {
    if (isScroll && link.startsWith("#")) {
      e.preventDefault();
      const targetId = link.substring(1); // Remove the '#'
      smoothScrollTo(targetId);
    }
  };

  const quickLinks: QuickLink[] = [
    { name: "Home", link: "/", isScroll: false },
    { name: "About", link: "#about", isScroll: true },
    { name: "Mission", link: "#mission", isScroll: true },
    { name: "Classes", link: "#classes", isScroll: true },
    { name: "Testimonials", link: "#testimonials", isScroll: true },
    { name: "Contact", link: "#contact", isScroll: true },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100006568031683",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/zakirhossain2830/",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/+919145379014?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20classes.",
      icon: MessageCircle,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@thecombatgym8280",
      icon: Youtube,
    },
  ];

  return (
    <footer className="bg-white border-t border-black font-montserrat">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Build Your Legacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Transform your fitness and master combat skills with expert
                trainers at The Combat Gym. Build strength, confidence, and
                discipline—join us today!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-black" />
                <a
                  href="tel:+919145379014"
                  className="hover:text-black transition-colors duration-300"
                  rel="noopener noreferrer"
                >
                  +91 91453 79014
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-black" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zakirhossain2642@gmail.com&su=Inquiry%20about%20Combat%20Gym&body=Hi%20there,%20I%20would%20like%20to%20know%20more%20about%20your%20classes."
                  className="hover:text-black transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  zakirhossain2642@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">
              Quick Links
              <div className="w-8 h-0.5 bg-black mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isScroll ? (
                    <button
                      onClick={(e) =>
                        handleNavClick(e, link.link, link.isScroll)
                      }
                      className="text-gray-600 hover:text-black transition-colors cursor-pointer duration-300 font-medium text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.link}
                      className="text-gray-600 hover:text-black transition-colors cursor-pointer duration-300 font-medium"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">
              Find Us
              <div className="w-8 h-0.5 bg-black mt-2"></div>
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3762111038623!2d88.31831319999999!3d22.527575699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279d08f56738d%3A0xb9f5e20a1dcf9a18!2sTHE%20COMBAT%20GYM!5e0!3m2!1sen!2sin!4v1737541894861!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Combat Gym Location"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-black text-gray-700 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} -{" "}
              <Link href="/" className="text-black hover:underline font-medium">
                The Combat Gym
              </Link>{" "}
              - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
