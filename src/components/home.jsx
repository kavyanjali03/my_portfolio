// import React from 'react';
// import { Github, Linkedin, Facebook , Mail} from 'lucide-react';
// import resume from '../assets/myresume.pdf';
// import myphto from '../../public/cute.jpg';

// export default function Home() {
//   return (
//     <>
//       <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-auto">
//         <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
//           <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Left side - Photo */}
//             <div className="flex justify-start order-1 lg:order-1">
//               <div className="relative">
//                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
//                  <img 
//                  src={myphto} 
//                  alt="Kavyanjali"
//                  className="w-full h-full object-cover"
//                  />
//                  </div>

//                 <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-amber-600 rounded-full opacity-20"></div>
//                 <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-orange-400 rounded-full opacity-20"></div>
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 text-center lg:text-left">
//               <div>
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
//                   Hey! I'm <span className="text-amber-700">Kavyanjali</span>
//                 </h1>
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
//                   I'm a <span className="text-amber-700">Developer</span>
//                   {/* <span className="animate-pulse">|</span> */}
//                 </h2>
//               </div>

//               <p className="text-gray-700 text-base sm:text-lg leading-relaxed px-4 lg:px-0">
//                 Enthusiastic software developer skilled in JavaScript, React.js, Node.js, and 
//                 Express.js, with experience in building responsive and user-focused web 
//                 applications. Proficient in both frontend and backend development, RESTful 
//                 APIs, and MongoDB integration. Currently strengthening DSA fundamentals 
//                 and exploring AI/ML to develop scalable, real-world solutions.
//               </p>

//               {/* Social Media Icons */}
//               <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
//                 <a 
//                   href="https://github.com/kavyanjali03" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 sm:border-4 border-amber-700 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300 text-amber-700"
//                 >
//                   <Github size={20} className="sm:w-6 sm:h-6" />
//                 </a>

//                 <a 
//                     href="mailto:munipallekavyanjali@gmail.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 sm:border-4 border-amber-700 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300 text-amber-700"
//                 >
//                   <Mail size={20} className="sm:w-6 sm:h-6" />
//                 </a>

//                 <a 
//                   href="https://www.linkedin.com/in/kavyanjali-munipalle-4a426524b/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 sm:border-4 border-amber-700 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300 text-amber-700"
//                 >
//                   <Linkedin size={20} className="sm:w-6 sm:h-6" />
//                 </a>

//                 <a 
//                   href="https://twitter.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 sm:border-4 border-amber-700 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300 text-amber-700"
//                 >
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* Download CV Button */}
//               <div className="flex justify-center lg:justify-start">
//                 <a 
//                   href={resume}
//                   download="Kavyanjali_Resume.pdf"
//                   className="bg-amber-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
//                 >
//                   Download CV
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import resume from "../assets/myresume.pdf";
import myphto from "../../public/cute.jpg";

export default function Home() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-auto">
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left side - Photo */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1  mt-9  sm:mt-10 lg:mt-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[6px] sm:border-8 border-white shadow-2xl ">
                <img
                  src={myphto}
                  alt="Kavyanjali"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-amber-600 rounded-full opacity-20"></div>
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-orange-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 text-center lg:text-left">
            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
                Hey! I'm{" "}
                <span className="text-amber-700">Kavyanjali</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                I'm a{" "}
                <span className="text-amber-700">Developer</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-3 sm:px-6 lg:px-0">
              Enthusiastic software developer skilled in JavaScript, React.js, Node.js,
              and Express.js, with experience in building responsive and user-focused
              web applications. Proficient in both frontend and backend development,
              RESTful APIs, and MongoDB integration. Currently strengthening DSA
              fundamentals and exploring AI/ML to develop scalable, real-world solutions.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start pt-2">
              {[
                {
                  icon: <Github size={22} className="sm:w-6 sm:h-6" />,
                  link: "https://github.com/kavyanjali03",
                },
                {
                  icon: <Mail size={22} className="sm:w-6 sm:h-6" />,
                  link: "mailto:munipallekavyanjali@gmail.com",
                },
                {
                  icon: <Linkedin size={22} className="sm:w-6 sm:h-6" />,
                  link:
                    "https://www.linkedin.com/in/kavyanjali-munipalle-4a426524b/",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  link: "https://twitter.com",
                },
              ].map(({ icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 sm:border-4 border-amber-700 flex items-center justify-center hover:bg-amber-700 hover:text-white transition-all duration-300 text-amber-700"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <a
                href={resume}
                download="Kavyanjali_Resume.pdf"
                className="bg-amber-700 text-white px-5 py-2 sm:px-7 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
