import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    setError(""); // clear previous errors
    if (!name || !email || !password || !confirm) {
      setError("All fields are required");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      const data = response.data;

      if (data.success) {
        // Store token & user in localStorage
        if (data.token) localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Signup successful! Redirecting...");
        navigate("/"); // redirect to homepage
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="w-full h-[110vh] flex justify-center items-center bg-gray-100 pt-24 px-5">

      {/* SIGNUP CARD */}
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md 
                      transition-all duration-300 hover:shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-black text-center mb-8 tracking-wide">
          Create Account
        </h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-center font-medium mb-4">{error}</p>
        )}

        {/* Name */}
        <div className="mb-5">
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

        {/* Email */}
        <div className="mb-5">
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

        {/* Password */}
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-black outline-none transition"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-enter password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-black outline-none transition"
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full py-3 mt-2 text-lg font-semibold bg-black text-white rounded-xl 
                     shadow-md transition-transform duration-300 
                     hover:scale-105 hover:bg-gray-900"
        >
          Sign Up
        </button>

        {/* Bottom Section */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-black cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
