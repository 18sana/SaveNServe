"use client";

import { motion } from "framer-motion";
import { 
  LightBulbIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ClipboardIcon, 
  FireIcon, 
  HeartIcon 
} from "@heroicons/react/24/solid";

const steps = [
  {
    id: 1,
    title: "Scan Your Ingredients",
    description: "Manually enter or scan barcodes of leftover ingredients using AI.",
    icon: <LightBulbIcon className="h-12 w-12 text-green-400" />,
    hoverColor: "border-green-400 shadow-green-400/50",
  },
  {
    id: 2,
    title: "AI-Powered Recipe Suggestions",
    description: "Our AI curates recipe ideas based on your available ingredients.",
    icon: <SparklesIcon className="h-12 w-12 text-blue-400" />,
    hoverColor: "border-blue-400 shadow-blue-400/50",
  },
  {
    id: 3,
    title: "Customize & Save",
    description: "Modify recipes, save favorites, and get nutrition details.",
    icon: <ClipboardIcon className="h-12 w-12 text-purple-400" />,
    hoverColor: "border-purple-400 shadow-purple-400/50",
  },
  {
    id: 4,
    title: "Cook with Step-by-Step Guide",
    description: "Follow detailed instructions with timers and video demos.",
    icon: <FireIcon className="h-12 w-12 text-orange-400" />,
    hoverColor: "border-orange-400 shadow-orange-400/50",
  },
  {
    id: 5,
    title: "Share & Inspire Others",
    description: "Upload your own recipes and contribute to the community.",
    icon: <CheckCircleIcon className="h-12 w-12 text-yellow-400" />,
    hoverColor: "border-yellow-400 shadow-yellow-400/50",
  },
  {
    id: 6,
    title: "Food Donation Drive",
    description: "Easily donate surplus food to nearby shelters and communities.",
    icon: <HeartIcon className="h-12 w-12 text-red-400" />,
    hoverColor: "border-red-400 shadow-red-400/50",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white"
        >
          How It Works
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300">
          A <strong>smart & simple</strong> 6-step process to reduce food waste, cook delicious meals, and give back to the community.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: step.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`p-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl flex flex-col items-center text-center space-y-4 
              transition-all duration-300 ease-in-out hover:${step.hoverColor} hover:border-2 hover:shadow-lg`}
            >
              {step.icon}
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

