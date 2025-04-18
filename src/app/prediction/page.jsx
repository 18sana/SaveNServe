"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiInfo, FiCheck, FiTrendingUp } from "react-icons/fi";

export default function Home() {
  const [form, setForm] = useState({
    city: '',
    food: '',
    checkout_price: '',
    base_price: '',
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  const cityToCenterId = {
    indore: 108,
    ujjain: 32,
    mumbai: 52,
    delhi: 174
  };

  const foodToMealId = {
    tomato: 2290,
    potato: 1248,
    wheat: 1902,
    rice: 2304
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const city = form.city.toLowerCase().trim();
    const food = form.food.toLowerCase().trim();

    const center_id = cityToCenterId[city];
    const meal_id = foodToMealId[food];
    const checkout_price = parseFloat(form.checkout_price);
    const base_price = parseFloat(form.base_price);
    const price_diff = checkout_price - base_price;

    if (!center_id || !meal_id) {
      alert("Invalid city or food name.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          center_id,
          meal_id,
          checkout_price,
          base_price,
          emailer_for_promotion: 0,
          homepage_featured: 0,
          week: 146,
          price_diff
        })
      });

      const data = await res.json();
      setPrediction(data.predicted_demand);
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-start justify-center pt-16 px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white w-full max-w-2xl p-8 rounded-3xl shadow-2xl border border-emerald-200 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-200 rounded-full opacity-20"></div>

        <div className="relative z-10">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex flex-col items-center mb-8">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full shadow-lg mb-4">
              <FiTrendingUp className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700 mb-2">
              Food Demand Forecast
            </h1>
            <p className="text-gray-600 text-center max-w-md">
              Optimize your kitchen operations with AI-powered demand predictions
            </p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="space-y-5" variants={containerVariants} initial="hidden" animate="visible">
            {[
              { name: 'city', label: 'City' },
              { name: 'food', label: 'Crop' },
              { name: 'checkout_price', label: 'Checkout Price' },
              { name: 'base_price', label: 'Base Price' }
            ].map(({ name, label }) => (
              <motion.div key={name} variants={itemVariants}>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor={name} className="block text-sm font-medium text-emerald-800">
                    {label}
                  </label>
                  <button
                    type="button"
                    className="text-emerald-500 hover:text-emerald-700"
                    onMouseEnter={() => setShowTooltip(name)}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <FiInfo size={16} />
                  </button>
                </div>
                <input
                  id={name}
                  name={name}
                  type={name.includes('price') ? 'number' : 'text'}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full p-3 border border-emerald-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  required
                />
                {showTooltip === name && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-gray-500 mt-1 px-2">
                    {getFieldDescription(name)}
                  </motion.div>
                )}
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl transition-all shadow-md hover:shadow-lg font-bold flex items-center justify-center space-x-2 ${
                  isLoading
                    ? 'bg-emerald-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Predicting...</span>
                  </>
                ) : (
                  <>
                    <FiTrendingUp />
                    <span>Predict Demand</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>

          <AnimatePresence>
            {prediction !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-300 text-emerald-900 text-center py-6 px-6 rounded-2xl shadow-inner relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-md mb-3">
                    <FiCheck className="text-emerald-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Predicted Demand</h3>
                  <p className="text-4xl font-extrabold text-emerald-700 mb-2">{Math.round(prediction)}</p>
                  <p className="text-sm text-emerald-800">Tons expected</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// Tooltip text
function getFieldDescription(field) {
  const descriptions = {
    city: "City Name mapped to center_id",
    food: "Crop mapped to crop_id",
    checkout_price: "Price farmer sets for selling/donating",
    base_price: "Original price before discount"
  };
  return descriptions[field] || "No description available";
}