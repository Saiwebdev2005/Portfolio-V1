"use client";
import React, { useState } from "react";
import skillsData from "./SkillsData";
const Skill = ({ Icon, label }) => (
  <li className="skills flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 max-w-sm">
    <Icon className="text-2xl sm:text-base" />
    <span className="text-lg sm:text-sm">{label}</span>
  </li>
);

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 bg-c2 p-24">
    {skillsData.map((category, index) => (
      <div key={index} className="flex flex-col justify-center space-y-6">
        <h1 className="text-4xl text-center">{category.title}</h1>
        <ul className="flex flex-col sm:flex-row  justify-between space-x-0 sm:space-x-6 space-y-6 sm:space-y-0">
          {category.skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </ul>
      </div>
    ))}
</div>

  );
}

export default Skills;
