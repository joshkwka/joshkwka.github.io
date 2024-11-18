import React, { useEffect, useState, useCallback } from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext'; // Adjust path as necessary
import Image from 'next/image'; // Assuming you're using Next.js

const HeroSection: React.FC = () => {
  const { isDarkMode } = useDarkMode(); 
  const [scrollPosition, setScrollPosition] = useState(0); 
  const [screenWidth, setScreenWidth] = useState(0); 

  // Throttle the scroll event to reduce re-renders
  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial resize and scroll position
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  // Calculate the car speed multiplier based on screen width
  const speedMultiplier = (screenWidth / 1000) * 1.2;

  return (
    <section id="home" className="relative h-screen">
      {/* Car Animation with Parallax Effect */}
      <div
        className="absolute bottom-20 left-2 transform -translate-y-1/2 transition-transform duration-300"
        style={{
          transform: `translateX(${scrollPosition * speedMultiplier}px)`,
        }}
      >
        <Image
          src={isDarkMode ? '/images/hero/light-hero-car.png' : '/images/hero/dark-hero-car.png'}
          alt="Cartoon Car"
          width={320}
          height={103}
        />
      </div>

      {/* Main Content - Text Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-7xl font-bold">
          Joshua Kwak 
        </h1>
        <h1 className="text-4xl font-bold">
          Engineer: 
        </h1>
        <h1 className="text-4xl font-bold mb-4">
          Software & Mechanical 
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          I am...
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
