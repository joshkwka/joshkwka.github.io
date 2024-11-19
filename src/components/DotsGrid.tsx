import { useState, useEffect } from 'react';

const DotsGrid = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [colorUpdateKey, setColorUpdateKey] = useState(0); 

  const googleColorsHSL = [
    { h: 220, s: 85, l: 50 }, // Blue
    { h: 0, s: 78, l: 50 }, // Red
    { h: 44, s: 89, l: 50 }, // Yellow
    { h: 122, s: 60, l: 40 }, // Green
  ];
  const hoverRadius = 100;
  const dotSpacing = 35;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Timer to periodically update the colors
    const timer = setInterval(() => {
      setColorUpdateKey((prev) => prev + 1);
    }, 200); // Update colors every 200ms

    return () => clearInterval(timer);
  }, []);

  // Calculate grid size dynamically based on screen size and fixed dot spacing
  const calculateGridSize = () => {
    const cols = Math.ceil(screenWidth / dotSpacing); 
    const rows = Math.ceil(screenHeight / dotSpacing); 
    return { cols, rows };
  };

  // Create a grid of dots with dynamic size
  const createDots = () => {
    const { cols, rows } = calculateGridSize();
    const dots = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * dotSpacing;
        const y = i * dotSpacing;
        dots.push({ x, y });
      }
    }

    return dots;
  };

  // Function to calculate opacity based on distance from the center of the screen
  const getDotOpacity = (dotX: number, dotY: number) => {
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
  
    // Calculate the distance to the center of the screen
    const distance = Math.sqrt(Math.pow(dotX - centerX, 2) + Math.pow(dotY - centerY, 2));
  
    // Use the maximum possible distance (diagonal) to normalize the opacity
    const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  
    // Calculate the opacity as a combination of both horizontal and vertical distance  
    const horizontalDistanceFactor = Math.abs(dotX - centerX) / screenWidth;
    const verticalDistanceFactor = Math.abs(dotY - centerY) / screenHeight;
  
    // Combine both factors for a consistent fade across the screen
    const totalDistanceFactor = 1.8*Math.max(horizontalDistanceFactor, verticalDistanceFactor);
  
    // Calculate opacity based on the distance factor
    const opacity = Math.max(0.25 - totalDistanceFactor * 0.25, 0);
  
    return opacity;
  };
  

  // Function to determine if a dot is within the hover radius
  const isWithinHoverRadius = (dotX: number, dotY: number) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - dotX, 2) + Math.pow(mousePosition.y - dotY, 2)
    );

    return distance <= hoverRadius;
  };

  // Function to calculate the color based on distance from the mouse
  const getGradientColor = (dotX: number, dotY: number) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - dotX, 2) + Math.pow(mousePosition.y - dotY, 2)
    );

    const maxSaturation = 100;
    const minSaturation = 60;

    // Interpolate saturation based on distance
    const saturation = Math.max(
      minSaturation,
      maxSaturation - (distance / hoverRadius) * (maxSaturation - minSaturation)
    );

    const randomColor =
      googleColorsHSL[Math.floor(Math.random() * googleColorsHSL.length)];

    return `hsl(${randomColor.h}, ${saturation}%, ${randomColor.l}%)`;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {createDots().map((dot, index) => {
        const dotSize = 7;
        const opacity = getDotOpacity(dot.x, dot.y);

        // Set the dot color based on hover state and apply gradient effect
        const isHovered = isWithinHoverRadius(dot.x, dot.y);
        const dotColor = isHovered
          ? getGradientColor(dot.x, dot.y)
          : 'gray';

        return (
          <div
            key={`${index}-${colorUpdateKey}`} // Trigger re-render on color update
            className="absolute rounded-full z-10"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: dotColor,
              opacity: isHovered ? 1 : opacity,
              transition: 'opacity 0.2s ease-out, background-color 0.2s ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export default DotsGrid;
