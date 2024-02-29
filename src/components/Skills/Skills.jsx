"use client";
import { useEffect, useState } from "react";
import SkillSection from "./SkillSection";
import skills from "./skillCardData";
import { useInView } from "react-intersection-observer";
function Skills() {
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
    <div className="bg-black h-fit md:h-screen w-full p-12" ref={ref}>
      <div className="flex flex-col justify-center items-center space-y-12 mx-auto md:max-w-3xl ">
        <div
          className={`opacity-0 ${animationVisible ? "animate-slidein500" : ""}`}
        >
          <SkillSection title="Web Development" skills={skills.webDev} />
        </div>
        <div
          className={`opacity-0 ${animationVisible ? "animate-slidein1000" : ""}`}
        >
          <SkillSection
            title="Blockchain Development"
            skills={skills.blockChainDev}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
