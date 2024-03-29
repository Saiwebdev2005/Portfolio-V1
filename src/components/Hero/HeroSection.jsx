import React from "react";
import HeadText from "../HeadText/HeadText";
import Starfield from "@/components/StarField/StarField";

// HeroSection component
const HeroSection = () => {
  let image = "/assets/astronaut.png";
  return (
    <div className="p-4 pt-24 pb-0 md:pt-28 h-screen bg-c12 relative">
      {/* <Starfield className=" absolute inset-0 z-0" /> */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row z-10 relative">
        {/* left section */}
        <div className="flex flex-col md:w-3/4 text-center md:items-left justify-center space-y-4 md:text-left">
          <h2 className="animate-slidein500 opacity-0 text-white text-xl md:text-3xl font-semibold">
            Hi, my name is
          </h2>
          <div className="animate-slidein700 opacity-0">
            <HeadText />
          </div>

          <p className="animate-slidein1000 opacity-0 text-2xl md:text-4xl font-semibold">
            Junior Web3 Developer
          </p>
        </div>
        {/* Right Section */}
        <div className=" w-1/2 md:w-1/4 scale-125 md:scale-150 flex justify-center items-center mx-auto pt-6 ">
          <div className="animate-slidein700 opacity-0">
            <img
              src={image}
              className=" text-purple-600 floating  duration-100"
              alt="Coding"
              width="320"
              height="420"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
