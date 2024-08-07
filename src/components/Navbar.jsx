import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-md z-50 backdrop-blur-md">
        <div>
          <Link to="home" smooth={true} duration={500}>
            <h1 className="text-2xl font-semibold font-serif border rounded-md p-2 cursor-pointer hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105">
              AN
            </h1>
          </Link>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex gap-x-8 items-center">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-cyan-500 transition-colors duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 cursor-pointer text-2xl"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-300 ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={500}
              className="transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={500}
              className="transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
              className="transform hover:scale-105"
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="work"
              smooth={true}
              duration={500}
              className="transform hover:scale-105"
            >
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
              className="transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="fixed flex flex-col top-[90%] left-0 lg:top-[35%] lg:left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/adhiraj-nandy-086ab726b/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/adhirajnandy"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:adhirajnandy9@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1IN73u6XtHhwC5ev9MUMVi3P6rWSOpr04/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
