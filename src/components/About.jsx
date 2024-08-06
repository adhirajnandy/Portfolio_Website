import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex items-center"
    >
      <div className="container mx-auto px-6 py-16 flex flex-col justify-center">
        <div className="bg-[#1e2a38] p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
              About
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-right">
              <p className="text-2xl md:text-3xl font-semibold">
                Hi. I'm Adhiraj Nandy, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed">
                I am a Web developer with experience in building responsive and
                scalable web applications. My expertise lies in creating
                user-centric designs, ensuring seamless and engaging user
                experiences. I am passionate about crafting elegant solutions
                that meet user needs and drive business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
