"use client";
import React, { useState } from 'react';

// Card component
const Card = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
  className="rounded-xl md:w-96 bg-c2 shadow-xl hover:scale-110 duration-300 hover:-translate-y-3 hover:shadow-purple-900 relative"
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  <div className={`absolute inset-0 transition-opacity rounded-xl ${hover ? 'opacity-70 text-white bg-c1 flex flex-row justify-center items-center space-x-4 duration-300' : 'opacity-0'}`}>
    <button className=' bg-white text-c3 px-4 py-2 text-xl rounded-lg border-white font-sans'>Github</button>
    <button className='bg-c1 px-4 py-2 text-xl rounded-lg border-white font-sans'>Link</button>
  </div>
  <figure>
    <img className='rounded-t-xl' src={project.image} alt={project.title} />
  </figure>
  <div className="card-body rounded-xl">
    <h2 className="card-title font-bold text-2xl">{project.title}</h2>
    <p>{project.description}</p>
    <div className="card-actions justify-end">
      {project.badges.map((badge, index) => (
        <div key={index} className="badge badge-outline bg-c1">{badge}</div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Card;
