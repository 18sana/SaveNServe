"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, User, Lock, Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.fullName || !formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      setMessage({ text: "All fields are required!", type: "error" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessage({ text: "Invalid email format!", type: "error" });
      return;
    }

    if (!validatePassword(formData.password)) {
      setMessage({ text: "Password must be at least 6 characters long!", type: "error" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match!", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (res.ok) {
        setMessage({ text: "Signup successful! Redirecting...", type: "success" });
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setMessage({ text: data.message || "Signup failed. Try again.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Something went wrong. Please try again later.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white flex items-center justify-center p-4 overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/food-pattern.png')] opacity-5"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden mt-10 mb-10">
        {/* Left side - Visual */}
        <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-teal-900/80 to-gray-900/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/food-grid.png')] opacity-10"></div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-teal-500 to-green-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/sustainabitelogo.jpg" 
                  alt="Sustainabite Logo" 
                  width={160} 
                  height={160} 
                  className="object-contain p-4 rounded-full"
                />
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400 mb-4">
              Join Sustainabite
            </h2>
            <p className="text-lg text-gray-300 max-w-md">
              Start your journey towards sustainable eating and smart meal planning today!
            </p>
          </motion.div>

          {/* Floating food icons */}
          {['🥑', '🍅', '🥦', '🍠', '🥕'].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: Math.random() * 100 - 50 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute text-3xl opacity-70"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        {/* Right side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Create Account</h2>
              <p className="text-gray-400">Join our community of sustainable food lovers</p>
            </div>

            {message && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg mb-6 text-sm ${
                  message.type === "error" 
                    ? "bg-red-900/30 border border-red-700 text-red-400" 
                    : "bg-green-900/30 border border-green-700 text-green-400"
                }`}
              >
                {message.text}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                {/* Full Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 text-white placeholder-gray-400 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 text-white placeholder-gray-400 transition-all"
                  />
                </div>

                {/* Username */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 text-white placeholder-gray-400 transition-all"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 text-white placeholder-gray-400 transition-all"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-teal-400 transition" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-teal-400 transition" />
                    )}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 text-white placeholder-gray-400 transition-all"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-teal-400 transition" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-teal-400 transition" />
                    )}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-400 hover:text-teal-300 font-medium transition">
                Log In
              </Link>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-700/50 text-sm font-medium text-white hover:bg-gray-700 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-gray-700/50 text-sm font-medium text-white hover:bg-gray-700 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm4.293 15.707a1 1 0 01-1.414 0L10 11.414l-2.879 2.293a1 1 0 01-1.414-1.414L8.586 10 5.707 7.121a1 1 0 011.414-1.414L10 8.586l2.879-2.293a1 1 0 011.414 1.414L11.414 10l2.879 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}