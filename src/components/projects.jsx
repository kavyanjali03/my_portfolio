import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Gym application",
      description: "Developed a full-stack Gym Management System with role-based access for clients, coaches, and admins. The app allows clients to book coaches, schedule workouts, and give feedback, while coaches manage sessions and admins generate performance reports. Built using React, TypeScript, Node.js, and Express.js with microservices architecture, it's deployed on Kubernetes via KubeRocket and integrates AWS Lambda, API Gateway, and S3 for serverless backend services and cloud storage."
    },
    {
      title: "ML-Based Cardiac Scattering Analysis",
      description: "Executed a machine learning research project focusing on in-vivo wireless nanosensor networks (iWNSNs), specifically targeting the prediction of scattering losses in the myocardial tissue layer of the human heart. The project explored behavior across Terahertz (0.1–2.5 THz) and optical (400–650 THz) frequency bands. Machine learning models were trained and validated using datasets from the IT’IS database to estimate scattering coefficients. Model performance was evaluated through experiments involving different sample sizes and benchmarked against online datasets and key machine learning metrics. The research provided insights into the feasibility and limitations of machine learning in biomedical signal analysis and heart health monitoring."
    },
    {
      title: "Virtual Memory manager",
      description: "Developed a C++-based Virtual Memory Manager that simulates a virtual memory system using a Translation Lookaside Buffer (TLB) and a page table. Implemented address translation from virtual to physical memory using data from input files, supporting a TLB of 16 entries, a 256-entry page table, and 64KB of physical memory. Enabled reading virtual addresses from a ‘.txt‘ file and retrieving corresponding values from a simulated ‘.bin‘ memory file. The system calculates and displays TLB and page table hit rates, offering insights into memory access performance."
    },
    {
      title: "Beat Buddy",
      description: "Built an interactive music platform enabling users to discover new songs, create personalized playlists, and download music for offline use. Integrated real-time song recognition using advanced audio processing. Optimized performance for minimal latency to enhance user experience. Implemented robust encryption protocols to ensure user data privacy and security. Focused on delivering a seamless, intuitive, and secure music exploration journey."
    }
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 overflow-auto">
      <div className="min-h-full p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto py-8">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-12 text-center mt-10">
            My Projects
          </h1>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-amber-200 to-orange-250 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-base md:text-md leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;