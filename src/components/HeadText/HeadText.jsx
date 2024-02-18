"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = ["white", "#7510F7", "#5BE9B9"];

const HeadText = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const currentColor = colors[currentColorIndex];

  return (
    <div>
      <motion.h1
        className={`text-8xl font-extrabold transition-colors duration-500 ease-in-out`}
        style={{ color: currentColor }}
      >
        SAI KUMAR
      </motion.h1>
    </div>
  );
};

export default HeadText;
