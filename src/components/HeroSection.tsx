import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "@/contexts/DarkModeContext";
import DotsGrid from "@/components/DotsGrid";
import Image from "next/image";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const { isDarkMode } = useDarkMode();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const calculateSpeedMultiplier = () => {
      const width = window.innerWidth;
      setSpeedMultiplier((width / 1000) * 1.15);
    };

    calculateSpeedMultiplier();
    window.addEventListener("resize", calculateSpeedMultiplier);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", calculateSpeedMultiplier);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const translateX = scrollPosition * speedMultiplier;

  return (
    <section
      id="home"
      className="relative h-screen min-h-custom overflow-hidden"
    >
      {/* Car Animation with Parallax Effect */}
      <motion.div
        className="absolute bottom-20 left-2 transform -translate-y-1/2 z-20"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={isDarkMode ? "/images/hero/light-hero-car.png" : "/images/hero/dark-hero-car.png"}
          alt="Car"
          width={320}
          height={103}
          priority
        />
      </motion.div>

      <DotsGrid mousePosition={mousePosition} />

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 z-20">
        <h1 className="text-5xl font-bold py-1 sm:text-5xl whitespace-nowrap">Joshua Kwak</h1>
        <h2 className="text-3xl font-bold py-1 sm:text-3xl">Engineer</h2>
        <h2 className="text-2xl font-bold italic py-1 sm:text-3xl whitespace-nowrap">
          Software & Mechanical
        </h2>
        <p className="text-md max-w-2xl mx-auto sm:text-md">
          I am a passionate engineer with a strong foundation in both software and mechanical systems.
          With a background in mechatronics, I strive to solve complex problems and push the boundaries
          of technology.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
