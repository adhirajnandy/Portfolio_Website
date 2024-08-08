import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex items-center"
    >
      <div className="container mx-auto px-6 py-16 flex flex-col items-center">
        {/* About Me Section */}
        <div className="w-full max-w-3xl mb-12">
          <div className="text-center lg:text-center">
            <p className="text-4xl font-bold border-b-4 border-cyan-500 inline-block">
              About Me
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2s pt-6">
              Hi, I'm Adhiraj Nandy. I'm passionate about web development and
              design, and I love building responsive and engaging web
              applications.
            </p>
            <p className="text-lg md:text-xl leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
              With experience in creating user-centric designs and scalable
              solutions, I strive to deliver elegant and effective web solutions
              that drive business success.
            </p>
          </div>
        </div>
        {/* Connect with Me Section */}
        <div className="w-full max-w-3xl">
          <div className="bg-[#1e2a38] p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-2xl font-semibold mb-4">Connect with Me</p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Feel free to reach out to me for collaborations, project
                inquiries, or just to say hello. I'm always open to new
                opportunities and conversations.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:ad.adhirajnandy@gmail.com"
                  className="text-center rounded-lg px-6 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105"
                >
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/adhiraj-nandy-086ab726b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center rounded-lg px-6 py-2 bg-cyan-500 text-white font-bold text-lg transition-transform transform hover:scale-105"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
