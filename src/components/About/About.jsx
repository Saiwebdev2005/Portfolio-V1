"use client";
import React, { useState } from "react";
import style from "./About.module.css";
import Button from "../Button/GlowButton"

function About() {
  const [isReadMore, setIsReadMore] = useState(false);

  const extraContent = <div>
    <p>
      But that’s not all! I’m also a blockchain enthusiast, always on the
      lookout for the next big thing. It’s like being a treasure hunter,
      but the treasure is a block of code!
    </p>
    <p>
      Currently, I’m expanding my tech arsenal at KG College of Arts and
      Science, pursuing a Bachelor of Science in Information Technology.
      It’s like being back at Hogwarts, but instead of spells, I’m
      learning about web and blockchain development!
    </p>
    <p>
      In the grand scheme of things, I’m just a coder on a mission - to
      become an innovative developer and maybe, just maybe, change the
      world one block(chain) at a time!
    </p>
  </div>;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="max-w-4xl mx-auto h-fit mb-12 p-12">
      {/* Svg */}
      <div className="container flex flex-col justify-center items-center mx-auto">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl md:text-6xl  font-bold text-right text-c3">Who is Sai ?</h1>
      </div>
      {/* About Section */}
      <div className="flex flex-col sm:flex-row justify-center max-w-5xl mx-auto items-center p-4 space-y-8 sm:space-y-0 sm:space-x-8">
        {/* left section */}
        <div className="w-full sm:w-1/2 md:hover:scale-125  md:duration-300 ">
          <img
            src="/assets/Profile.jpg"
            alt=""
            className="rounded-box mx-auto sm:mx-0 hover:shadow-purple-900 hover:shadow-xl"
            width="300"
            height="300"
          />
        </div>
        {/* right */}
        <div className="text-center sm:text-left space-y-4 items-center w-full sm:w-1/2 font-sans">
          {/* Your paragraphs */}
          <p>
            I’m <span className="text-purple-600">Sai Kumar</span>, your friendly neighborhood Front-End
            Developer at KGXperience. I juggle with React.js components by day,
            turning coffee into code and creating web magic.
          </p>
          <div className="read-more-content">
            {isReadMore && extraContent}
          </div>
          <div onClick={toggleReadMore}>
          <Button  buttonText={isReadMore ? "Read Less ↑" : "Read More ↓"}>
          </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
