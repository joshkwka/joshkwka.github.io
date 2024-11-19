import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '@/contexts/DarkModeContext';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const { isDarkMode } = useDarkMode();

  // Update screen width on resize
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const speedMultiplier = (screenWidth / 1000) * 1.15;
  const translateX = scrollPosition * speedMultiplier;

  return (
    <section id="home" className="relative h-screen">
      {/* Car Animation with Parallax Effect */}
      <motion.div
        className="absolute bottom-20 left-2 transform -translate-y-1/2"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={isDarkMode ? '/images/hero/light-hero-car.png' : '/images/hero/dark-hero-car.png'} // Conditional image source based on dark mode
          alt="Car"
          width={320}
          height={103}
        />
      </motion.div>

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-7xl font-bold">Joshua Kwak</h1>
        <h2 className="text-4xl font-bold">Engineer</h2>
        <p className="text-lg max-w-2xl mx-auto">I am...</p>
      </div>
    </section>
  );
};

export default HeroSection;
