import React from "react";

const About = () => {
  return (
    <div className="pt-25 min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl space-y-12">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 drop-shadow-sm">
          About <span className="text-purple-600">Trendzy</span>
        </h1>

        {/* Intro Box */}
        <div className="bg-white border border-gray-200 shadow-lg p-8 rounded-2xl">
          <p className="text-lg leading-relaxed text-gray-600 text-center">
            Welcome to <span className="text-purple-600 font-semibold">Trendzy</span>, 
            where fashion meets comfort and convenience.  
            Our mission is to provide stylish, high-quality products at prices that anyone can enjoy.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white border border-gray-200 shadow-lg p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold text-purple-600 mb-4 text-center">
            Our Vision
          </h2>
          <p className="text-gray-600 text-center leading-relaxed">
            At Trendzy, our vision is simple — empower people to express themselves
            through modern and accessible fashion. We aim to create an online store
            that feels smooth, safe, and effortless to use.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white border border-gray-200 shadow-xl p-8 rounded-2xl">
          <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">
            Why Choose Trendzy?
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="hover:text-purple-600 transition-all">
              ✨ High-quality, hand-selected products
            </li>
            <li className="hover:text-purple-600 transition-all">
              🚀 Fast & reliable delivery
            </li>
            <li className="hover:text-purple-600 transition-all">
              💬 Friendly customer support
            </li>
            <li className="hover:text-purple-600 transition-all">
              🔐 Secure payment options
            </li>
            <li className="hover:text-purple-600 transition-all">
              🎉 Trendzy exclusive deals & offers
            </li>
          </ul>
        </div>

        {/* Footer Quote */}
        <p className="text-center text-gray-500 text-sm mt-8 tracking-wide">
          “Trendzy — Where your style becomes your identity.”
        </p>

      </div>
    </div>
  );
};

export default About;
