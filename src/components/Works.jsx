import React from "react";
import AMS from "../assets/AMS.png"; // Adjust the path as needed
import Ecom from "../assets/Ecom.png";
import Movie from "../assets/Movie.png";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-12">
          <p className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
            Work
          </p>
          <p className="py-6 text-xl">
            Here are a few of my recent projects. Click below to see more
            details or access the code.
          </p>
        </div>
        {/* Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${AMS})` }}
            className="shadow-lg shadow-[#040c16] group rounded-lg overflow-hidden flex justify-center items-center mx-auto bg-cover bg-center h-[300px] transition-transform transform hover:scale-105"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-6 text-center bg-[#0a192f] bg-opacity-75 rounded-lg w-full h-full transition-opacity duration-300">
              <span className="text-xl font-bold text-white mb-2">AMS</span>
              <p className="mb-4 text-base">
                An Application Tracking web application built with Next and
                MongoDB.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://app-ms.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/adhirajnandy/gyannj.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Ecom})` }}
            className="shadow-lg shadow-[#040c16] group rounded-lg overflow-hidden flex justify-center items-center mx-auto bg-cover bg-center h-[300px] transition-transform transform hover:scale-105"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-6 text-center bg-[#0a192f] bg-opacity-75 rounded-lg w-full h-full transition-opacity duration-300">
              <span className="text-xl font-bold text-white mb-2">
                eCommerce Website
              </span>
              <p className="mb-4 text-base">
                A full-featured eCommerce platform built with the MERN stack.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://easy-shop-033h.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/adhirajnandy/demo.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className="shadow-lg shadow-[#040c16] group rounded-lg overflow-hidden flex justify-center items-center mx-auto bg-cover bg-center h-[300px] transition-transform transform hover:scale-105"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-6 text-center bg-[#0a192f] bg-opacity-75 rounded-lg w-full h-full transition-opacity duration-300">
              <span className="text-xl font-bold text-white mb-2">
                Movie App
              </span>
              <p className="mb-4 text-base">
                A movie discovery app with advanced search features.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://moviehive-adhiraj.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/adhirajnandy/Movie-Website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
