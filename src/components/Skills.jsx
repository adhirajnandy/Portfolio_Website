import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
  { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
  { name: "Python", icon: <FaPython size={40} color="#306998" /> },
  { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F05032" /> },
];

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex items-center"
    >
      {/* Container */}
      <div className="container mx-auto p-6 md:p-12 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-12">
          <p className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Skills
          </p>
          <p className="py-4 text-xl">
            I enjoy diving into and learning new technologies. Here’s a
            selection of the skills and tools I have experience with:
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] hover:scale-105 transition-transform duration-300 p-6 rounded-lg bg-[#1e2a38] flex flex-col items-center justify-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="text-xl font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
