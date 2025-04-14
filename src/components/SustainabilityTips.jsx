"use client";
import { motion } from "framer-motion";

const sustainabilityTips = [
  {
    title: "Smart Food Preservation",
    description: "Learn proper storage techniques to extend food freshness and reduce spoilage",
    icon: "🥦",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Zero-Waste Packaging",
    description: "Discover innovative alternatives to single-use plastics in your kitchen",
    icon: "🔄",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Seasonal Eating",
    description: "Maximize nutrition and sustainability by aligning with nature's calendar",
    icon: "🌱",
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Energy-Efficient Cooking",
    description: "Reduce your carbon footprint with smart kitchen practices",
    icon: "⚡",
    color: "from-amber-500 to-yellow-600",
  },
  {
    title: "Closed-Loop Composting",
    description: "Transform food scraps into nutrient-rich soil for your garden",
    icon: "♻️",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Water Conservation",
    description: "Implement simple changes to dramatically reduce water waste",
    icon: "💧",
    color: "from-indigo-500 to-blue-600",
  },
];

const TipCard = ({ tip, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${tip.color} p-0.5 shadow-xl`}
    >
      <div className="h-full bg-gray-900 rounded-[calc(1rem-2px)] p-6 flex flex-col">
        <div className="mb-4 text-4xl">{tip.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
        <p className="text-gray-300 mb-4">{tip.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto w-fit px-4 py-2 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function SustainabilityTips() {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-sm font-medium mb-4">
            SUSTAINABILITY HUB
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200">
              Eco-Conscious Living
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Actionable tips to reduce your environmental impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityTips.map((tip, index) => (
            <TipCard key={index} tip={tip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};