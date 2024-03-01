"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button/GlowButton";
import Card from "@/components/Card/Card";
import projects from "@/components/Projects/ProjectData";
import { useInView } from "react-intersection-observer";
function ProjectPage() {
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
    <div className="w-full h-full md:h-screen bg-c1">
      <div id="Project" className="max-w-5xl mx-auto" ref={ref}>
        <div
          className={`flex justify-center items-center p-12 opacity-0 ${animationVisible ? "animate-slidein500" : ""}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-c3">Projects</h1>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 font-sans max-w-5xl mx-auto opacity-0 ${animationVisible ? "animate-slidein700" : ""}`}
        >
          {/* Project Card */}
          {projects.map((project, index) => (
            <div className="w-72 md:w-auto  mx-auto">
              <Card key={index} project={project} />
            </div>
          ))}
        </div>
        <div
          className={`flex justify-center p-8 ${animationVisible ? "animate-slidein1000 opacity-0" : ""}`}
        >
          <Button buttonText="Go Back" link="/" />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
