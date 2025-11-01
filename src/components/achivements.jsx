import React from 'react';
import urop from '../../public/urop.png';

function Achievements() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 overflow-auto">
      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 my-8 transform scale-[0.95]">
          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-2">
              Published Book Chapter
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-10 items-center">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-1 shadow-md w-72">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src={urop}
                    alt="Book Publication"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-4 text-center lg:text-left">
              {[
                "Contributed to “Machine Learning Approach to Predict Scattering Coefficients of Myocardium Tissue in the NIR Band for In-Vivo Communication.”",
                "Published in Edge-Enabled 6G Networking: Foundations, Technologies, and Applications.",
                <>
                  The book chapter can be accessed at{" "}
                  <a
                    href="https://srmap.edu.in/news/revolutionising-cardiac-health-monitoring/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:text-amber-900 font-medium underline underline-offset-4"
                  >
                    LINK
                  </a>.
                </>,
                "Aimed to enhance in-vivo communication and biomedical signal understanding.",
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

export default Achievements;
