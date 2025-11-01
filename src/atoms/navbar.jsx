// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-8 py-4 bg-amber-700 shadow-lg">
//       <div className="text-white font-bold text-lg tracking-wide">
//         <span className="text-white">Kavyanjali Munipalle</span>
//       </div>

//       <div className="flex gap-11 items-center mr-20">
//         <NavLink
//           to="/"
//           end
//           className={({ isActive }) =>
//             isActive
//               ? "text-white font-semibold uppercase text-sm tracking-wider border-b-2 border-white-600 pb-1"
//               : "text-gray-100 hover:text-white uppercase text-sm tracking-wider transition-colors"
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/skills"
//           className={({ isActive }) =>
//             isActive
//               ? "text-white font-semibold uppercase text-sm tracking-wider border-b-2 border-white-600 pb-1"
//               : "text-gray-100 hover:text-white uppercase text-sm tracking-wider transition-colors"
//           }
//         >
//           Skills
//         </NavLink>

//         <NavLink
//           to="/experience"
//           className={({ isActive }) =>
//             isActive
//               ? "text-white font-semibold uppercase text-sm tracking-wider border-b-2 border-white-600 pb-1"
//               : "text-gray-100 hover:text-white uppercase text-sm tracking-wider transition-colors"
//           }
//         >
//           Experience
//         </NavLink>

//         <NavLink
//           to="/projects"
//           className={({ isActive }) =>
//             isActive
//               ? "text-white font-semibold uppercase text-sm tracking-wider border-b-2 border-white-600 pb-1"
//               : "text-gray-100 hover:text-white uppercase text-sm tracking-wider transition-colors"
//           }
//         >
//           Projects
//         </NavLink>

//         <NavLink
//           to="/achievements"
//           className={({ isActive }) =>
//             isActive
//               ? "text-white font-semibold uppercase text-sm tracking-wider border-b-2 border-white-600 pb-1"
//               : "text-gray-100 hover:text-white uppercase text-sm tracking-wider transition-colors"
//           }
//         >
//           Achievements
//         </NavLink>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Skills", to: "/skills" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Achievements", to: "/achievements" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-amber-700 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <div className="text-white font-bold text-lg tracking-wide">
          <span>Kavyanjali Munipalle</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center mr-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold uppercase text-sm tracking-wider border-b-2 border-white pb-1"
                  : "text-gray-100 hover:text-white uppercase text-sm tracking-wider transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-amber-700 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)} // close menu on click
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold uppercase text-sm tracking-wider border-b-2 border-white pb-1"
                  : "text-gray-100 hover:text-white uppercase text-sm tracking-wider transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

