"use client";
import React, { useState, useEffect } from "react";

const GradientText = () => {
  const [gradientIndex, setGradientIndex] = useState(0);
  const colors = [
    "from-cyan-500 to-purple-500",
    "from-green-500 to-yellow-500",
    "from-red-500 to-pink-500",
    // Add more color combinations as needed
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
        Gradient Text
      </h1>
    </div>
  );
};

export default GradientText;
