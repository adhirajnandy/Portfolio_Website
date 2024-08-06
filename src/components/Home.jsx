import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import faceGif from "../assets/giphy-ezgif.com-speed.webp"; // Adjust the path as needed

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:px-12 md:flex-row">
        {/* Content Section */}
        <div className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left md:pr-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 leading-tight">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md mx-auto md:mx-0">
            I am passionate about building web applications. I specialize in
            technologies such as React, Tailwind CSS, and MongoDB, which I use
            to create dynamic and responsive web solutions.
          </p>
          <div className="mt-8">
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              About Me
              <span className="group-hover:translate-x-1 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <img
            src={faceGif}
            alt="Animated face"
            className="rounded-lg shadow-lg mx-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
