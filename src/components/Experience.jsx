import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      id="experience"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center"
    >
      <div className="container mx-auto px-8 py-16">
        <div className="bg-[#1e2a38] p-8 rounded-lg shadow-lg">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
              Experience
            </p>
          </div>

          {/* Organizations Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-cyan-500 pb-2">
              Organizations
            </h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-bold">
                  1. Gemini Solutions Pvt Ltd
                </h3>
                <p className="text-gray-400">Role: Technical Trainee</p>
                <p className="text-gray-400">Duration: 05/2024 - 07/2024</p>
                <p className="mt-2">
                  <ul>
                    <li>
                      &#8226; Developed web applications using modern
                      technologies including MongoDB, ExpressJS, ReactJS, and
                      NodeJS.
                    </li>
                    <li>
                      &#8226; Utilized Bootstrap for front-end design and
                      Postman for backend API testing.
                    </li>
                    <li>
                      &#8226; Participated in code reviews, and resolved
                      technical challenges.
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  2. Indian Institute of Technology, Guwahati
                </h3>
                <p className="text-gray-400">Role: Intern</p>
                <p className="text-gray-400">Duration: 12/2023 - 01/2024</p>
                <p className="mt-2">
                  <ul>
                    <li>
                      &#8226; Developed a MATLAB-based ANN prediction model
                      using COMSOL simulation data.
                    </li>
                    <li>
                      &#8226; Overcame challenges in data interpretation and
                      model accuracy.
                    </li>
                    <li>&#8226; Technologies and Tools used- COMSOL, MATLAB</li>
                  </ul>
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  {" "}
                  3. Indian Institute of Technology, Guwahati
                </h3>
                <p className="text-gray-400">Role: Intern</p>
                <p className="text-gray-400">Duration: 06/2023 - 07/2023</p>
                <p className="mt-2">
                  <ul>
                    <li>
                      &#8226; Project aimed at computer vision and machine
                      learning algorithms to identify and classify edible fish
                      species.
                    </li>
                    <li>
                      &#8226; Participated in data collection and annotation
                      efforts, including sourcing and organizing fish imagery
                      data sets.
                    </li>
                    <li>
                      &#8226; Technologies and Tools used- Python, LabelImg,
                      Numpy, Pandas.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
