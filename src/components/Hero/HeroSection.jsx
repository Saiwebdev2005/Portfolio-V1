import React from 'react';
import { SlSocialInstagram, SlSocialGithub, SlSocialLinkedin, SlSocialGoogle } from "react-icons/sl";
import  style from './HeroSection.module.css';

// SocialLink component
const SocialLink = ({ Icon, Link }) => (
  <li className="cursor-pointer hover:text-c3 duration-300">
    <a href={Link} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  </li>
);


// Data array
const socialLinksData = [
  { Icon: SlSocialInstagram, Link: "https://instagram.com/leo__akasai?igshid=OGQ5ZDc2ODk2ZA==" },
  { Icon: SlSocialLinkedin, Link: "https://www.linkedin.com/in/sai-kumar-a2486424a/" },
  { Icon: SlSocialGithub, Link: "https://github.com/Saiwebdev2005" },
  { Icon: SlSocialGoogle, Link: "mailto:saik434455@gmail.com" },
];



// HeroSection component
const HeroSection = () => {
  let image = "/assets/astronaut.png";
  return (
    <div className="p-4 py-24 md:py-32 h-screen bg-c12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* left section */}
        <div className="flex flex-col md:w-1/2 text-center md:items-left justify-center space-y-4 md:text-left">
          <h2 className="text-white text-xl md:text-xl lg:text-2xl font-semibold">
            Hi, my name is
          </h2>
          <h1 className="text-4xl md:text-8xl scale-115 font-bold text-c3 hover:uppercase duration-1000">
            Sai Kumar
          </h1>
          <p>Junior Frontend Developer - KGXperience</p>
          <ul className="flex flex-row justify-center md:justify-start space-x-8 text-2xl">
            {socialLinksData.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </ul>
        </div>
        {/* Right Section */}
        <div className="w-1/2 scale-125 flex justify-center items-center mx-auto pt-6">
          <img src={image} className="text-purple-600 floating  duration-100" alt="Coding" width="320" height="420" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
