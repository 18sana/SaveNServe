"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex items-center justify-center overflow-hidden p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden mt-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-green-500/10 to-teal-400/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-3xl overflow-hidden mt-10">
          {/* Left Side - Illustration */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-green-900/80 to-gray-900 p-12 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mb-8"
              >
                <Image
                  src="/images/sustainabitelogo.jpg"
                  alt="Sustainabite Logo"
                  width={220}
                  height={220}
                  className="rounded-full shadow-2xl border-4 border-green-400/30"
                />
              </motion.div>
              <h2 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-300">
                Welcome Back!
              </h2>
              <p className="mt-4 text-gray-300 text-center text-xl leading-relaxed">
                Transform your leftover ingredients into <br/>culinary masterpieces.
              </p>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-500/10 blur-3xl"></div>
          </div>

          {/* Right Side - Login Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 flex flex-col items-center justify-center bg-gray-800/70 relative overflow-hidden"
          >
            {/* Form container */}
            <div className="w-full max-w-md z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mb-6"></div>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-center text-white">
                  Login to <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">Sustainabite</span>
                </h2>
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 mb-4 text-center px-4 py-2 bg-red-900/30 rounded-lg border border-red-700/50"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Authenticating...
                        </>
                      ) : (
                        "Log In"
                      )}
                    </span>
                    {isHovered && (
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-400 opacity-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <Link 
                    href="/signup" 
                    className="text-green-400 hover:text-teal-300 font-medium transition-colors duration-300 relative group"
                  >
                    Sign Up
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </p>
                <Link 
                  href="/forgot-password" 
                  className="inline-block mt-3 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
                >
                  Forgot password?
                </Link>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-green-500/5 blur-3xl"></div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}