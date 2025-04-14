"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Heart, Carrot, Soup, PepperHot, Wheat } from "lucide-react";

const veganMeals = [
  { 
    meal: "Breakfast", 
    food: "Smoothie Bowl with Chia Seeds", 
    emoji: "🥝🍓",
    description: "A vibrant blend of tropical fruits, berries, and superfood toppings packed with antioxidants.",
    nutrition: { calories: 320, protein: 8, carbs: 58, fat: 6 },
    prepTime: "5 mins",
    icon: <Leaf className="text-green-400" />
  },
  { 
    meal: "Lunch", 
    food: "Lentil Soup with Whole Wheat Bread", 
    emoji: "🍞",
    description: "Hearty lentil soup with aromatic spices served with freshly baked whole wheat bread.",
    nutrition: { calories: 420, protein: 22, carbs: 65, fat: 5 },
    prepTime: "25 mins",
    icon: <Soup className="text-amber-400" />
  },
  { 
    meal: "Dinner", 
    food: "Stuffed Bell Peppers with Quinoa", 
    emoji: "🌶️",
    description: "Colorful bell peppers stuffed with protein-rich quinoa, black beans, and roasted vegetables.",
    nutrition: { calories: 380, protein: 18, carbs: 52, fat: 10 },
    prepTime: "35 mins",
    // icon: <PepperHot className="text-red-400" />
  },
  { 
    meal: "Snack", 
    food: "Hummus with Carrot Sticks", 
    emoji: "🥕",
    description: "Creamy homemade hummus with fresh carrot sticks for a perfect mid-day energy boost.",
    nutrition: { calories: 220, protein: 7, carbs: 25, fat: 11 },
    prepTime: "10 mins",
    icon: <Carrot className="text-orange-400" />
  }
];

export default function VeganMealPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 mt-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Plant-Powered Nutrition
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A delicious and fully plant-based meal plan designed for optimal health and sustainability
          </p>
        </motion.div>
      </div>

      {/* Meal Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {veganMeals.map((item, index) => (
          <motion.div
            key={item.meal}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl overflow-hidden hover:shadow-green-500/20 transition-all"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-green-900/30 text-green-400 px-3 py-1 rounded-full">
                      {item.meal}
                    </span>
                    <span className="text-sm text-gray-400">{item.prepTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 flex items-center gap-2">
                    {item.food} <span className="text-xl">{item.emoji}</span>
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 mt-4">{item.description}</p>

              {/* Nutrition Info */}
              <div className="mt-6 grid grid-cols-4 gap-2">
                {Object.entries(item.nutrition).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{key}</div>
                    <div className="font-bold mt-1">
                      {value}{key === 'calories' ? '' : 'g'}
                    </div>
                  </div>
                ))}
              </div>

              {/* View Recipe Button */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-6"
              >
                <Link 
                  href={`/recipes/${item.food.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full py-2 text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-md hover:shadow-green-500/20 transition-all"
                >
                  View Recipe
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            🌿 Benefits of Vegan Eating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Heart Health", icon: "❤️", desc: "Lower cholesterol and reduced risk of heart disease" },
              { title: "Sustainability", icon: "🌎", desc: "Smaller environmental footprint than animal products" },
              { title: "Nutrient Rich", icon: "🥗", desc: "Packed with vitamins, minerals, and antioxidants" }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <Link href="/meal-plans">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2 mx-auto"
          >
            <Wheat className="w-5 h-5" />
            Explore All Meal Plans
          </motion.button>
        </Link>
      </div>
    </div>
  );
}