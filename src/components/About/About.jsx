"use client";
import React, { useState } from "react";
import style from "./About.module.css";
import Button from "../Button/GlowButton"

function About() {

  return (
    <div className="max-w-4xl mx-auto h-fit md:h-screen mb-12 p-12">
      {/* Svg */}
      <div className="container flex flex-col justify-center items-center mx-auto">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl md:text-6xl  font-bold text-right text-c3">Who is Sai ?</h1>
      </div>
      {/* About Section */}
      <div className="flex flex-col sm:flex-row justify-center max-w-5xl mx-auto items-center p-4 space-y-8 sm:space-y-0 sm:space-x-8 mt-6">
        {/* left section */}
        <div className="w-full sm:w-1/2 md:scale-125  md:duration-200 ">
          <img
            src="/assets/Profile.jpg"
            alt=""
            className="rounded-box mx-auto sm:mx-0 hover:shadow-c2 hover:shadow-2xl"
            width="300"
            height="300"
          />
        </div>
        {/* right */}
        <div className="text-center sm:text-left md:text-lg space-y-4 items-center w-full sm:w-1/2 font-sans">
          {/* Your paragraphs */}
          <p>
            I’m <span className="text-c2 font-semibold">Sai Kumar</span>, a blockchain enthusiast and a front-end developer on a mission. I'm currently honing my skills in Information Technology at KG College of Arts and Science, with a special focus on learning about blockchain technology. My goal? To innovate and make a difference in the world, one block(chain) at a time!
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
