"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import SustainabilityTips from "@/components/SustainabilityTips";
import CommunityContributions from "@/components/CommunityContributions";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Sustainabite - AI-Powered Zero-Waste Recipe Generator</title>
        <meta name="description" content="Reduce food waste with AI-driven recipes & meal planning. Save money and the planet with personalized sustainable cooking solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 text-gray-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-20 w-80 h-80 bg-teal-400 rounded-full filter blur-3xl opacity-15"
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-400/30"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-20">
          <div className="absolute top-6 right-6 z-50">
           
          </div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl text-center md:text-left mb-16 md:mb-0"
          >
            <div className="inline-block px-4 py-1 mb-4 bg-emerald-800/50 rounded-full backdrop-blur-sm border border-emerald-400/30">
              <span className="text-emerald-300 text-sm font-medium">AI-Powered Sustainability</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              <span className="bg-clip-text text-red bg-gradient-to-r from-emerald-300 to-teal-200 ">
                <Typewriter
                  options={{
                    strings: ["Sustainabite", "Zero Waste Recipes", "AI Meal Planning", "Eco Cooking"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your leftovers into delicious meals with our AI-powered recipe generator. 
              Reduce food waste, save money, and cook sustainably with personalized recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg"
              >
                Start Cooking Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-emerald-400/50 hover:bg-emerald-900/30 hover:border-emerald-400"
              >
                How It Works
              </motion.button>
            </div>
            
            <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-900 overflow-hidden">
                    
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Trusted by 10,000+ eco-conscious cooks</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full max-w-lg "
          >
            <div className="relative bg-gradient-to-br from-gray-900/80 to-emerald-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-400/20 shadow-2xl ">
              <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] opacity-10"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-emerald-300 font-mono">recipe_generator.exe</div>
                </div>
                
                <div className="mb-8">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 mb-4">
                    <div className="text-emerald-400 text-sm font-mono mb-2">Input Ingredients:</div>
                    <div className="flex flex-wrap gap-2">
                      {['chicken', 'tomatoes', 'basil', 'pasta', 'cheese'].map((ingredient) => (
                        <span key={ingredient} className="px-3 py-1 bg-emerald-900/30 text-emerald-200 rounded-full text-xs">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-emerald-400 text-sm font-mono mb-2">Generated Recipe:</div>
                    <h3 className="text-xl font-bold text-white mb-2">Creamy Tomato Basil Pasta</h3>
                    <p className="text-gray-300 text-sm mb-3">Estimated waste reduction: 85%</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>⏱️ 25 mins</span>
                      <span>🍽️ 4 servings</span>
                      <span>🌱 2.3kg CO₂ saved</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-emerald-900/30 rounded-lg">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">AI-Powered Suggestions</h4>
                      <p className="text-gray-400 text-sm">Get creative recipes tailored to your ingredients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-emerald-900/30 rounded-lg">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Save Money</h4>
                      <p className="text-gray-400 text-sm">Reduce grocery bills by using what you already have</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border-t border-gray-800 p-4 flex justify-between items-center">
                <div className="text-xs text-gray-500">Sustainabite AI v2.4</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-emerald-600/70 hover:bg-emerald-600 text-white text-sm rounded-lg transition-all"
                >
                  Generate New Recipe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>

        {/* Rest of your components */}
        <HowItWorks />
        <Features />
        <Testimonials />
        <SustainabilityTips />
        <CommunityContributions />
        <Partners />
        <FinalCTA />
      </main>
    </>
  );
}