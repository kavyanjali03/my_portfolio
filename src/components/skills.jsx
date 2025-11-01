import React from "react";
import Card from "../atoms/card.jsx";

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description:
        "Experienced in building dynamic and responsive web applications using React.js, leveraging component-based architecture for efficient UI development.",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      description:
        "Proficient in C++ programming for system-level applications, algorithm implementation, and performance optimization.",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description:
        "Proficient in server-side development with Node.js, creating scalable backend services and RESTful APIs to support web applications.",
    },
    
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description:
        "Experienced in Python programming for various applications, including web development, data analysis, and automation tasks.",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description:
        "Proficient in TypeScript for building robust and maintainable web applications, enhancing JavaScript with static typing and advanced features.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description:
        "Skilled in JavaScript for creating interactive and dynamic web experiences, utilizing modern frameworks and libraries for frontend development.",
    },
    {
      name: "Express.js",
      icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
      description:
        "Skilled in Express.js for building robust backend services and APIs, facilitating server-side logic and routing in web applications.",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      description:
        "Experienced in Tailwind CSS for rapid UI development, utilizing utility-first classes to create responsive and customizable designs.",
    },
  ];

  const frameworks = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description:
        "Experienced in version control using Git, managing code repositories, branching, and collaborating on projects effectively.",
    },
    {
      name: "Jira",
      icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
      description:
        "Proficient in using Jira for project management, tracking issues, and facilitating agile workflows in software development.",
    },
    {
      name: "Figma",
      icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      description:
        "Skilled in Figma for UI/UX design, creating wireframes, prototypes, and collaborative design projects for web and mobile applications.",
    },
    {
      name: "AWS",
      icon: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
      description:
        "Familiar with AWS cloud services for deploying and managing web applications, utilizing services like EC2, S3, and Lambda.",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description:
        "Skilled in using MongoDB for NoSQL database management, designing flexible schemas and performing efficient data operations for web applications.",
    },
    {
      name: "Redux",
      icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
      description:
        "Proficient in Redux for state management in React applications, enabling predictable state changes and efficient data flow.",
    },
    {
      name: "Webpack",
      icon: "https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",
      description:
        "Skilled in Webpack for module bundling and asset management, optimizing web application performance and development workflows.",
    },
    {
      name: "Microservices",
      icon: "https://cdn.worldvectorlogo.com/logos/microservices.svg",
      description:
        "Familiar with microservices architecture for building scalable and maintainable applications, enabling independent deployment and development of services.",
    },
  ];

  const core_concepts = [
 
    {
        name: "OOPS",
        icon: "https://cdn.worldvectorlogo.com/logos/oop.svg",
        description:
        "Proficient in Object-Oriented Programming principles, facilitating modular and reusable code design for complex software systems.",    
    },
    {
        name: "RESTful APIs",
        icon: "https://cdn.worldvectorlogo.com/logos/rest-api.svg",
        description:
        "Experienced in designing and implementing RESTful APIs, enabling seamless communication between client and server applications.",
    },
    {
        name:"Machine Learning",
        icon: "https://cdn.worldvectorlogo.com/logos/machine-learning-4.svg",
        description:
        "Familiar with machine learning concepts and techniques, applying algorithms to analyze data and derive meaningful insights for various applications.",
    },
    {
        name:"deep Learning",
        icon: "https://cdn.worldvectorlogo.com/logos/deep-learning-2.svg",
        description:
        "Basic understanding of deep learning principles, utilizing neural networks for complex pattern recognition and data analysis tasks.",
    }
]

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 overflow-auto">
      <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 pt-10">
              My <span className="text-amber-700">Skills</span>
            </h1>
          </div>

          {/* --- Skills Section --- */}
          <div className="flex justify-start mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 pb-2">
              Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} {...skill} />
            ))}
          </div>

          {/* --- Frameworks Section --- */}
          <div className="flex justify-start mb-8 mt-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 pb-2">
              Frameworks & Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => (
              <Card key={index} {...framework} />
            ))}
          </div>


          <div className="flex justify-start mb-8 mt-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 pb-2">
              Core Concepts
              </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {core_concepts.map((concept, index) => (
              <Card key={index} {...concept} />
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}
