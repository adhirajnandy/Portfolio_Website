import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full items-center">
          <p className="text-4xl font-bold border-b-4 border-cyan-500 text-gray-300 mb-4">
            Contact
          </p>
          <p className="text-gray-300 text-lg">
            I'd love to hear from you. Send me a message!
          </p>
        </div>
        <form className="flex flex-col space-y-4">
          <input
            className="bg-[#ccd6f6] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-[#ccd6f6] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            name="message"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="bg-cyan-500 text-white border-2 border-cyan-500 rounded-lg px-6 py-3 mt-4 mx-auto flex items-center font-bold text-lg transition-all duration-300 hover:bg-cyan-600 hover:border-cyan-600">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
