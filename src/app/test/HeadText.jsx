"use client";
import React, { useState, useEffect } from "react";

const GradientText = () => {
  const [gradientIndex, setGradientIndex] = useState(0);
  const colors = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-yellow-500",
    "from-red-500 to-pink-500",
    // Add more color combinations as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1500); // Change color every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, [colors.length]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1
        className={`text-4xl font-bold bg-gradient-to-r ${colors[gradientIndex]} bg-clip-text text-transparent transition-colors duration-1000`}
      >
        Gradient Text
      </h1>
    </div>
  );
};

export default GradientText;
