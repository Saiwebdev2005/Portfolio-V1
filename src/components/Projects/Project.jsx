"use client";
import React from "react";
import Link from 'next/link';
import projects from './ProjectData'
import Card from "../Card/Card";
function Project() {
 
  return (
    <div id="Project" className="max-w-5xl md:mx-auto p-16 md:p-auto h-fit">
      <div className="flex justify-center items-center p-12">
      <h1 className="text-6xl">Projects</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 font-sans max-w-5xl mx-auto">
    {/* Project Card */}
    {projects.map((project, index) => (
        <div className="max-w-sm mx-auto">
            <Card key={index} project={project} />
        </div>
    ))}
</div>
<div className="flex justify-center p-8">
  <Link href="/project" passHref>
    <button className="py-2 px-32 border-4 border-white rounded-md hover:border-c2 hover:text-c3 duration-300">
      View All Projects
    </button>
  </Link>
</div>

    </div>
  );
}

export default Project;
