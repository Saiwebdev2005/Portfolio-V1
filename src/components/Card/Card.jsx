"use client";
import React, { useState } from "react";
import Button from "../Button/GlowButton";
import Link from "next/link";
// Card component
const Card = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href="#">
    <div
      className="rounded-lg border border-c3 md:w-96 bg-c1 shadow-2xl hover:scale-105 duration-300 hover:-translate-y-1 md:hover:-translate-y-3 hover:cursor-pointer hover:shadow-c3 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity rounded-xl `}
      >
      </div>
      <figure>
        <img className="rounded-t-xl" src={project.image} alt={project.title} />
      </figure>
      <div className="card-body rounded-xl space-y-2">
        <h2 className="card-title font-bold text-2xl md:text-3xl">{project.title}</h2>
        <p className="text-sm">{project.description}</p>
        <div className="card-actions justify-end">
          {project.badges.map((badge, index) => (
            <div key={index} className="badge badge-outline bg-c3 border-c1 py-3 text-c1 font-md">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
