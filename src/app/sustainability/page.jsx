"use client";
import { motion } from "framer-motion";
import { FiLeaf, FiSun, FiDroplet, FiWind, FiShare2 } from "react-icons/fi";

export default function Sustainability() {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50 text-gray-900">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-100/50"
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
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sustainability-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="inline-block mb-6"
          >
            <div className="text-6xl">🌱</div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              Sustainable Eating
            </span><br />
            <span className="text-gray-800">For a Healthier Planet</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how SustainaBite helps you make eco-conscious food choices that nourish both you and the environment.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 pb-24">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Why Sustainability Matters */}
          <motion.section
            variants={item}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                {/* <FiLeaf className="text-2xl" /> */}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Why Sustainability Matters</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Food production accounts for 26% of global greenhouse gas emissions. By making sustainable choices, we can reduce food waste by up to 50%, lower carbon footprints, and protect precious natural resources for future generations.
            </p>
          </motion.section>

          {/* Our Commitment */}
          <motion.section
            variants={item}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <FiSun className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Plant-based & locally sourced ingredients",
                "Recipes that minimize food waste",
                "Education on food's environmental impact",
                "Sustainable packaging solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Eco Tips */}
          <motion.section
            variants={item}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <FiDroplet className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Eco-Friendly Eating Tips</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🥬", tip: "Buy seasonal & local produce" },
                { icon: "🌱", tip: "Try plant-based alternatives" },
                { icon: "🔄", tip: "Reduce single-use plastics" },
                { icon: "♻️", tip: "Compost food scraps" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700">{item.tip}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Impact Stats */}
          <motion.section
            variants={item}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <FiWind className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Your Impact</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50%", label: "Less food waste" },
                { value: "30%", label: "Lower carbon" },
                { value: "100%", label: "More conscious" },
                { value: "∞", label: "Planet saved" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Sustainable Recipes */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Sustainable Recipes</h2>
            <p className="text-lg text-green-100 mb-6">
              Discover our collection of planet-friendly recipes that are as delicious as they are sustainable.
            </p>
            <motion.a
              href="/recipes"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Explore Recipes →
            </motion.a>
          </div>
        </motion.section>

        {/* Get Involved */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the Movement</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Together, we can transform our food system. Share your sustainable recipes, tips, and join our community of eco-conscious eaters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/community"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <FiShare2 /> Join Community
            </motion.a>
            <motion.a
              href="/contribute"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-200"
            >
              Share Your Recipe
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}