"use client";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-900/10"
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

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="inline-block mb-6"
          >
            <div className="text-6xl">🌿</div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have questions, feedback, or partnership ideas? Let's build a sustainable future together.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-24">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Send Us a Message
            </span>
          </h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300 text-white" 
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300 text-white" 
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1">Your Message</label>
              <textarea 
                placeholder="Write your message here..." 
                rows="4" 
                className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300 text-white"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full p-4 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiSend /> Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-900/30 rounded-lg text-green-400">
                <FiMail className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Email Us</h3>
            </div>
            <p className="text-gray-400">contact@sustainabite.com</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-900/30 rounded-lg text-green-400">
                <FiMapPin className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Visit Us</h3>
            </div>
            <p className="text-gray-400">123 Green Street, Eco City, Earth</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-900/30 rounded-lg text-green-400">
                <FiPhone className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Call Us</h3>
            </div>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-6 text-xl">
              <motion.a 
                whileHover={{ scale: 1.2, color: "#3b5998" }}
                href="#" 
                className="text-gray-400 transition-all"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                href="#" 
                className="text-gray-400 transition-all"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                href="#" 
                className="text-gray-400 transition-all"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: "#0077B5" }}
                href="#" 
                className="text-gray-400 transition-all"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}