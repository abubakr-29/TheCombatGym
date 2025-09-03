"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  link: string;
  isScroll?: boolean;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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

  // Handle navigation clicks
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
    isScroll?: boolean
  ) => {
    if (isScroll && link.startsWith("#")) {
      e.preventDefault();
      const targetId = link.substring(1); // Remove the '#'
      smoothScrollTo(targetId);
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 50);

      if (scrollY === 0) {
        setIsVisible(true);
      } else if (scrollY < lastScrollY) {
        setIsVisible(true);
      } else if (scrollY > lastScrollY && scrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const navItems1: NavItem[] = [
    { name: "Home", link: "/", isScroll: false },
    { name: "About", link: "#about", isScroll: true },
    { name: "Mission", link: "#mission", isScroll: true },
  ];

  const navItems2: NavItem[] = [
    { name: "Classes", link: "#classes", isScroll: true },
    { name: "Testimonials", link: "#testimonials", isScroll: true },
    { name: "Contact", link: "#contact", isScroll: true },
  ];

  const mobileNavItems: NavItem[] = [...navItems1, ...navItems2];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? isScrolled
            ? "bg-white backdrop-blur-md shadow-md translate-y-0"
            : "bg-transparent translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto px-6 md:px-14 xl:px-30">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation 1 */}
          <div className="hidden xl:flex space-x-14 h-full items-center">
            {navItems1.map((item) => (
              <div
                key={item.name}
                className="h-full group cursor-pointer relative flex items-center"
              >
                {item.isScroll ? (
                  <button
                    onClick={(e) =>
                      handleNavClick(e as any, item.link, item.isScroll)
                    }
                    className={`font-montserrat font-bold uppercase tracking-wide text-[0.7rem] transition-all cursor-pointer duration-300 group-hover:text-[#ff383e] ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    className={`font-montserrat font-bold uppercase tracking-wide text-[0.7rem] transition-all cursor-pointer duration-300 group-hover:text-[#ff383e] ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] mt-[9px] bg-[#ff383e] w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="font-bold z-50">
            <Link href="/">
              <Image
                src="/The Combat Gym Logo.png"
                width={65}
                height={65}
                alt="The Combat Gym Logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation 2 */}
          <div className="hidden xl:flex space-x-14 h-full items-center">
            {navItems2.map((item) => (
              <div
                key={item.name}
                className="h-full group cursor-pointer relative flex items-center"
              >
                {item.isScroll ? (
                  <button
                    onClick={(e) =>
                      handleNavClick(e as any, item.link, item.isScroll)
                    }
                    className={`font-montserrat font-bold uppercase text-[0.7rem] transition-all cursor-pointer duration-300 group-hover:text-[#ff383e] ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    className={`font-montserrat font-bold uppercase text-[0.7rem] transition-all cursor-pointer duration-300 group-hover:text-[#ff383e] ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] mt-[9px] bg-[#ff383e] w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="z-50 xl:hidden">
            <button
              className={`menu ${isMenuOpen ? "opened" : ""}`}
              aria-label="Main Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg width="50" height="50" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  stroke={isMenuOpen ? "#fff" : isScrolled ? "#000" : "#fff"}
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path
                  className="line line2"
                  stroke={isMenuOpen ? "#fff" : isScrolled ? "#000" : "#fff"}
                  d="M 20,50 H 80"
                />
                <path
                  className="line line3"
                  stroke={isMenuOpen ? "#fff" : isScrolled ? "#000" : "#fff"}
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden mobile-menu fixed inset-0 z-40 pt-30 px-10 sm:px-14 h-[100vh] w-[100%] bg-black transition-all duration-500 transform ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 items-center justify-center w-full h-full absolute top-0 left-0">
            {mobileNavItems.map((item) => (
              <div className="group w-fit" key={item.name}>
                {item.isScroll ? (
                  <button
                    onClick={(e) =>
                      handleNavClick(e as any, item.link, item.isScroll)
                    }
                    className="font-montserrat font-semibold cursor-pointer uppercase text-sm transition-all duration-300 text-white group-hover:text-[#ff383e]"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    className="font-montserrat font-semibold cursor-pointer uppercase text-sm transition-all duration-300 text-white group-hover:text-[#ff383e]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                <div className="mx-auto bg-[#ff383e] w-0 group-hover:w-full h-[1px] cursor-pointer transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
