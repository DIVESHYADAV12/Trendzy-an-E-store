import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // 🔥 STORE TOKEN + USER
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful!");
      navigate("/"); // redirect home
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 pt-24 px-5">

      {/* LOGIN CARD */}
      <form 
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md 
                  transition-all duration-300 hover:shadow-2xl"
      >

        {/* Title */}
        <h1 className="text-3xl font-bold text-black text-center mb-8 tracking-wide">
          Login
        </h1>

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
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-black outline-none transition"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 mt-3 text-lg font-semibold bg-black text-white rounded-xl 
                     shadow-md transition-transform duration-300 
                     hover:scale-105 hover:bg-gray-900"
        >
          Login
        </button>

        {/* Extra Section */}
        <p className="text-center text-gray-500 text-sm mt-6">
          New to <span className="font-semibold text-black">Trendzy</span>?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-black cursor-pointer hover:underline"
          >
            Create an account
          </span>
        </p>

      </form>
    </div>
  );
};

export default Login;
