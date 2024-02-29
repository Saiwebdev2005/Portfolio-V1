"use client";
import React, { useState, useEffect } from "react";
import {
  SlSocialInstagram,
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialGoogle,
} from "react-icons/sl";
import { useInView } from "react-intersection-observer";
const SocialLink = ({ Icon, Link }) => (
  <a
    href={Link}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 md:p-6 border-4 border-white text-xl md:text-2xl rounded-full hover:border-c2 hover:text-c3 duration-300"
  >
    <Icon />
  </a>
);

// Data array
const socialLinksData = [
  {
    Icon: SlSocialInstagram,
    Link: "https://instagram.com/leo__akasai?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    Icon: SlSocialLinkedin,
    Link: "https://www.linkedin.com/in/sai-kumar-a2486424a/",
  },
  { Icon: SlSocialGithub, Link: "https://github.com/Saiwebdev2005" },
  { Icon: SlSocialGoogle, Link: "mailto:saik434455@gmail.com" },
];
// Footer component
const Footer = () => {
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
    <div className="max-w-5xl mx-auto h-fit -mt-28 p-12 " ref={ref}>
      <footer className="flex flex-col items-center justify-start max-w-5xl mx-auto space-y-6">
        <div
          className={`flex justify-center items-center opacity-0 ${animationVisible ? "animate-slidein500" : ""}`}
        >
          <h1 className="text-c3 text-3xl md:text-6xl">Follow Along</h1>
        </div>
        <div
          className={`flex flex-row justify-center items-center space-x-4 md:space-x-12 md:space-y-0 opacity-0 ${animationVisible ? "animate-slidein700" : ""}`}
        >
          {socialLinksData.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
        <div>
          <p>Copy Rights 2023 Sai Kumar </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
