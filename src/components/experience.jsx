import React from 'react';
import epamPhoto from '../../public/epam_me.jpg';

function Experience() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 overflow-auto">
      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Center White Card */}
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 my-8 transform scale-[0.95]">
          
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
              SWE Intern | Epam Systems
            </h1>
            <p className="text-lg md:text-xl text-amber-700">
              Jan 2025 – June 2025
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-10 items-center">
            
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-2 shadow-md w-80">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src={epamPhoto}
                    alt="Epam Systems"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Points */}
            <div className="space-y-4 text-center lg:text-left">
              {[
                "Developed a Gym Management Web Application with distinct roles (Client, Coach, Admin), improving role-based accessibility and user experience.",
                "Built responsive UI with React, TypeScript, and JavaScript, and developed backend services with Node.js and Express.js.",
                "Implemented secure authentication and authorization using AWS Cognito, and integrated RESTful APIs with AWS Lambda, API Gateway, and S3 for a serverless backend.",
                "Deployed the application on KubeRocket using Kubernetes, ensuring scalable and containerized deployment.",
                "Collaborated in Agile teams using JIRA, actively contributing to sprint planning, stand-ups, and retrospectives while strengthening teamwork and problem-solving skills.",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 justify-center lg:justify-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-600 group-hover:scale-125 transition-transform"></div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
