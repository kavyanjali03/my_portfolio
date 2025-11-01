import React from "react";

export default function Card({ icon, name, description }) {
  return (
    <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center scale-95">
      {/* Icon */}
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md text-4xl">
        <img
          src={icon}
          alt={name}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
