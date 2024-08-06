import React from "react";

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
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind",
            "MySQL",
            "Python",
            "C++",
            "Git & GitHub",
          ].map((skill, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] hover:scale-105 transition-transform duration-300 p-6 rounded-lg bg-[#1e2a38] flex items-center justify-center"
            >
              <p className="text-xl font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
