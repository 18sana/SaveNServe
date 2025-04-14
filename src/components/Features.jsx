"use client";
import { useState } from "react";
import { 
  SparklesIcon, 
  CalendarIcon, 
  HeartIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  GlobeAltIcon 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Recipes",
    description: "Get personalized recipe suggestions based on your pantry items, dietary needs, and cooking preferences.",
    icon: <SparklesIcon className="h-8 w-8 text-green-400" />,
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    title: "Smart Meal Planning",
    description: "Automated weekly meal plans with optimized grocery lists and nutrition tracking.",
    icon: <CalendarIcon className="h-8 w-8 text-blue-400" />,
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    title: "Food Sharing Network",
    description: "Connect with local communities to share surplus food and reduce waste.",
    icon: <HeartIcon className="h-8 w-8 text-pink-400" />,
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    title: "Sustainability Analytics",
    description: "Track your environmental impact with detailed carbon footprint reports.",
    icon: <ChartBarIcon className="h-8 w-8 text-purple-400" />,
    color: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
  },
  {
    title: "Global Food Trends",
    description: "Discover the latest innovations in sustainable cooking worldwide.",
    icon: <GlobeAltIcon className="h-8 w-8 text-amber-400" />,
    color: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    title: "Smart Notifications",
    description: "Get alerts for expiring food and local sustainability events.",
    icon: <LightBulbIcon className="h-8 w-8 text-teal-400" />,
    color: "bg-gradient-to-br from-teal-500 to-emerald-600",
  },
];

const FeatureCard = ({ feature, isExpanded, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl cursor-pointer p-0.5 ${feature.color}`}
    >
      <div className={`h-full p-6 rounded-[calc(1rem-2px)] bg-gray-900 transition-all duration-300 ${isExpanded ? "bg-gray-800" : ""}`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${feature.color.replace('bg-gradient-to-br', 'bg-gradient-to-tr')} bg-opacity-20`}>
            {feature.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-gray-300 overflow-hidden"
            >
              {feature.description}
            </motion.p>
          </div>
        </div>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        )}
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-sm font-medium mb-4">
            <SparklesIcon className="h-4 w-4 mr-2" />
            INNOVATIVE FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200">
              Smart Kitchen Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI-powered tools to transform your cooking and reduce waste
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              isExpanded={expanded === index}
              onClick={() => setExpanded(expanded === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;