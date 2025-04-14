import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  // Countdown Timer (For limited-time meal plans)
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Floating food icons
  const foodIcons = ["🍎", "🥑", "🍋", "🥦", "🍒", "🍇", "🥕", "🍊"];
  const floatingElements = foodIcons.map((icon, i) => ({
    id: i,
    icon,
    x: Math.random() * 100,
    size: 24 + Math.random() * 16,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.3,
  }));

  return (
    <div className="relative py-28 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center overflow-hidden">
      {/* Floating food elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ 
            y: -50,
            x: element.x,
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={{ 
            y: "100vh",
            opacity: [0, element.opacity, 0],
            rotate: 360
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute pointer-events-none"
          style={{
            left: `${element.x}%`,
            fontSize: `${element.size}px`,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-emerald-500/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* CTA Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-orange-400 mb-2 inline-block">
            JOIN THE FOOD REVOLUTION
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-emerald-400">
            Transform Your Meals Today
          </h2>
        </motion.div>

        {/* CTA Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Discover chef-curated recipes, personalized meal plans, and sustainable eating habits that will revolutionize your kitchen.
        </motion.p>

        {/* Countdown Timer for Special Offer */}
        {timeLeft > 0 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-emerald-500 blur-md opacity-70"></div>
              <div className="relative bg-gray-800 px-8 py-4 rounded-xl text-lg font-bold text-white border border-gray-700">
                <span className="text-orange-300">Limited-time offer:</span> {formatTime(timeLeft)} remaining
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="/explore-meals"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-8 py-4 rounded-xl text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Meals</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>

          <motion.a
            href="/subscribe"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-8 py-4 rounded-xl text-lg font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700"
          >
            <span>Get Premium</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center space-x-4 text-gray-400 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm">TRUSTED BY FOOD LOVERS WORLDWIDE</span>
            <div className="w-12 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <div className="text-orange-400 mr-2">★ ★ ★ ★ ★</div>
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">100% Organic Recipes</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Chef-Approved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}