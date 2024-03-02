"use client"
import React, { useEffect, useState } from 'react';
import style from "./grid.module.css"// Import the styles

const TextAnimation = () => {
  const [colorIndex, setColorIndex] = useState(0);

  // Define your gradient colors
  const gradientColors = [
    '#4F46E5',
    '#8D44AD',
    '#D9526A',
    '#E76F51',
    '#F4D35E',
  ];

  useEffect(() => {
    // Update the color index every 2 seconds
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
    }, 2000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-4xl font-bold ${style.animate-gradient}`}>
      <span
        className={`bg-clip-text text-transparent bg-gradient-to-r from-${gradientColors[colorIndex]} to-${gradientColors[(colorIndex + 1) % gradientColors.length]}`}
      >
        Your Animated Text
      </span>
    </div>
  );
};

export default TextAnimation;
