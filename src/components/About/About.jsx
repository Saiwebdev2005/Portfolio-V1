"use client";
import React, { useState, useEffect } from "react";
import style from "./About.module.css";
import Button from "../Button/GlowButton";
import { useInView } from "react-intersection-observer";

function About() {
  const [animationVisible, setAnimationVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setAnimationVisible(true);
    }
  }, [inView]);

  return (
    <div
      className={`max-w-4xl mx-auto h-fit md:h-screen mt-0 mb-12 p-12`}
      ref={ref}
    >
      {/* Svg */}
      <div className=" container flex flex-col justify-center items-center mx-auto">
        {/* Header */}
        <div className="p-0 md:p-6">
          <h1
            className={`text-4xl md:text-6xl opacity-0 font-bold text-right text-c3 ${animationVisible ? "animate-slidein500" : ""}`}
            ref={ref}
          >
            Who is Sai ?
          </h1>
        </div>
        {/* About Section */}
        <div
          className={`flex flex-col sm:flex-row opacity-0 justify-center max-w-5xl mx-auto items-center p-4 space-y-8 sm:space-y-0 sm:space-x-8 mt-6  ${animationVisible ? "animate-slidein700" : ""}`}
        >
          {/* left section */}
          <div className="w-full sm:w-1/2 md:scale-125  md:duration-200 ">
            <img
              src="/assets/ProfilePic.jpg"
              alt=""
              className="rounded-box mx-auto sm:mx-0 shadow-c2 shadow-2xl"
              width="300"
              height="300"
            />
          </div>
          {/* right */}
          <div className="text-center sm:text-left md:text-2xl space-y-4 items-center w-full sm:w-1/2 font-sans">
            {/* Your paragraphs */}
            <p>
              I’m <span className="text-c2 font-semibold">Sai Kumar</span>, Web3
              Developer and college student, bridging web2 and web3 realms.
              Passionate about{" "}
              <span className="text-c3"> DeFi and asset tokenization</span>{" "}
              within the blockchain ecosystem, I'm committed to pushing
              technological boundaries in decentralized applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
