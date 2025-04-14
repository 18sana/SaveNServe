"use client";
import { motion } from "framer-motion";
import { FiLeaf, FiTarget, FiAward, FiHeart, FiUsers } from "react-icons/fi";

export default function About() {
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
              About SustainaBite
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Eat well, live sustainably. Your guide to eco-friendly meals in a modern world.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="/images/about-us.png"
            alt="SustainaBite Mission"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-gray-900/0"></div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-900/50 rounded-lg text-green-400">
              <FiTarget className="text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            At <span className="font-semibold text-green-400">SustainaBite</span>, we're revolutionizing sustainable eating by crafting delicious, planet-friendly recipes that minimize waste, reduce carbon footprints, and champion ethical sourcing.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Zero Waste', 'Plant-Based', 'Ethical Sourcing', 'Carbon Neutral'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-6xl mx-auto px-6 mb-24">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* What We Do */}
          <motion.div
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-900/30 rounded-lg text-green-400">
                {/* <FiLeaf className="text-2xl" /> */}
              </div>
              <h3 className="text-2xl font-bold text-white">What We Do</h3>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "🍽️", text: "Eco-Friendly Recipes with locally sourced ingredients" },
                { icon: "🌍", text: "Sustainability Tips to reduce waste and carbon footprint" },
                { icon: "🛒", text: "Smart Consumption advice for conscious grocery shopping" },
                { icon: "📖", text: "Educational Content on sustainable living & food habits" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            variants={item}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-900/30 rounded-lg text-green-400">
                <FiAward className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Why It Matters</h3>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "✅", text: "Reduces carbon footprint with plant-based meals" },
                { icon: "✅", text: "Minimizes food waste and encourages mindful cooking" },
                { icon: "✅", text: "Supports ethical farming and organic sourcing" },
                { icon: "✅", text: "Promotes healthier, nutrient-rich diets" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl border border-gray-700 shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-900/30 rounded-full text-green-400">
                <FiUsers className="text-3xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
                Join Our Sustainable Revolution
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of a community transforming the way we eat, one sustainable bite at a time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiHeart /> Get Involved
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/recipes"
                className="px-8 py-4 bg-gray-800/50 border border-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-gray-700/20 transition-all duration-300"
              >
                Explore Recipes
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}