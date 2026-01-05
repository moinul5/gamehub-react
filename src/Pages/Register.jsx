import React, { use } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { motion } from "framer-motion";
import useTitle from "../components/useTitle";

function Register() {
  const [error, setError] = useState("");
  const { registerUser } = use(AuthContext);
  useTitle("GameHub | Register");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // clear previous error

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photoURL = form.photoURL.value.trim();
    const password = form.password.value;

    // Name validation
    if (!name) {
      setError("Name is required");
      return;
    }

    // Email validation
    if (!email) {
      setError("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Photo URL validation
    if (!photoURL) {
      setError("Photo URL is required");
      return;
    }

    try {
      new URL(photoURL);
    } catch {
      setError("Please enter a valid photo URL");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    // ready for Firebase here
    registerUser(email, password)
      .then()
      .catch();
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-lg">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an account on <span className="text-yellow-400">Game</span>
            Hub
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text text-slate-300">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="input input-bordered w-full bg-slate-900 text-slate-200"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text text-slate-300">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Profile image URL"
                className="input input-bordered w-full bg-slate-900 text-slate-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text text-slate-300">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-slate-900 text-slate-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text text-slate-300">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a strong password"
                className="input input-bordered w-full bg-slate-900 text-slate-200"
              />
              <p className="text-xs text-slate-400 mt-1">
                Must be at least 6 characters, include uppercase & lowercase
                letters.
              </p>
            </div>
            {error && (
              <p className="text-sm text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Register Button */}
            <button className="btn btn-warning w-full text-black font-semibold">
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-slate-500">OR</div>

          {/* Google Register */}
          <button className="btn btn-outline w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
            Continue with Google
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-slate-400 mt-6">
            Already have an account?{" "}
            <NavLink to="/login" className="text-yellow-400 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Register;
