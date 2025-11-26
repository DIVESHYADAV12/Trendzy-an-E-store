import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 pt-24 px-5">

      {/* LOGIN CARD */}
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md 
                      transition-all duration-300 hover:shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-black text-center mb-8 tracking-wide">
          Login
        </h1>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-black outline-none transition"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-black outline-none transition"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full py-3 mt-3 text-lg font-semibold bg-black text-white rounded-xl 
                     shadow-md transition-transform duration-300 
                     hover:scale-105 hover:bg-gray-900"
        >
          Login
        </button>

        {/* Extra Section */}
        <p className="text-center text-gray-500 text-sm mt-6">
          New to Trendzy?{" "}
          <span className="text-black cursor-pointer hover:underline">Create an account</span>
        </p>

      </div>
    </div>
  );
};

export default Login;
