"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";
import { Leaf, Egg, Fish, Drumstick, ChevronRight } from "lucide-react";

const ketoLowCarbMeals = [
  { 
    meal: "Breakfast", 
    food: "Avocado & Egg Scramble", 
    emoji: "🥑🍳",
    icon: <Egg className="text-amber-400" />,
    description: "Scrambled eggs cooked in butter, served with avocado and cheese.",
    nutrition: { calories: 450, protein: 20, carbs: 6, fat: 38 },
    benefits: ["Keeps you full longer", "Great source of healthy fats", "Supports brain function"],
    advice: "Add some spinach for extra fiber and vitamins.",
    prepTime: "10 mins",
    carbColor: "from-green-400 to-emerald-400"
  },
  { 
    meal: "Lunch", 
    food: "Grilled Salmon with Asparagus", 
    emoji: "🍣",
    icon: <Fish className="text-blue-400" />,
    description: "Omega-3-rich grilled salmon with buttered asparagus.",
    nutrition: { calories: 600, protein: 45, carbs: 8, fat: 40 },
    benefits: ["Anti-inflammatory benefits", "Boosts heart health", "High in essential omega-3s"],
    advice: "Use grass-fed butter for extra flavor and nutrition.",
    prepTime: "20 mins",
    carbColor: "from-teal-400 to-cyan-400"
  },
  { 
    meal: "Dinner", 
    food: "Keto Chicken Alfredo", 
    emoji: "🍗🧀",
    icon: <Drumstick className="text-red-400" />,
    description: "Creamy Alfredo sauce with grilled chicken and zoodles (zucchini noodles).",
    nutrition: { calories: 500, protein: 40, carbs: 7, fat: 35 },
    benefits: ["Low in carbs", "High in protein", "Rich in healthy fats"],
    advice: "Replace heavy cream with coconut milk for a dairy-free version.",
    prepTime: "25 mins",
    carbColor: "from-purple-400 to-indigo-400"
  }
];

const faqData = [
  { 
    question: "Is keto good for weight loss?", 
    answer: "Yes! The keto diet helps burn fat for energy, leading to weight loss." 
  },
  { 
    question: "Can I eat fruits on keto?", 
    answer: "Only low-carb fruits like berries in moderation." 
  },
  { 
    question: "Do I need to count calories on keto?", 
    answer: "Not necessarily, but keeping track of carbs is crucial." 
  }
];

const nutritionColors = {
  calories: "#FF6B6B",
  protein: "#4ECDC4",
  carbs: "#A78BFA",
  fat: "#FBBF24"
};

export default function KetoLowCarbMealPlan() {
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
            <Leaf className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Keto & Low-Carb Fuel
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            High-fat, low-carb meal plan designed for ketosis and optimal energy
          </p>
        </motion.div>
      </div>

      {/* Meal Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {ketoLowCarbMeals.map((item, index) => (
          <motion.div
            key={item.meal}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl overflow-hidden hover:shadow-green-500/20 transition-all"
          >
            <div className="p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium bg-green-900/30 text-green-400 px-3 py-1 rounded-full">
                        {item.meal}
                      </span>
                      <span className="text-sm text-gray-400">{item.prepTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mt-2 flex items-center gap-2">
                      {item.food} <span className="text-2xl">{item.emoji}</span>
                    </h3>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Nutrition Section */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Nutrition Chart */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-green-400">Macronutrient Breakdown</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={[
                          { name: "Carbs", value: item.nutrition.carbs },
                          { name: "Protein", value: item.nutrition.protein },
                          { name: "Fats", value: item.nutrition.fat }
                        ]}
                        margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                      >
                        <XAxis 
                          dataKey="name" 
                          tick={{ fill: '#9CA3AF' }} 
                          axisLine={{ stroke: '#4B5563' }}
                        />
                        <YAxis 
                          tick={{ fill: '#9CA3AF' }} 
                          axisLine={{ stroke: '#4B5563' }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#111827',
                            borderColor: '#374151',
                            borderRadius: '0.5rem',
                            color: '#F3F4F6'
                          }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {["Carbs", "Protein", "Fats"].map((key, i) => (
                            <Cell 
                              key={i} 
                              fill={nutritionColors[key.toLowerCase()]} 
                              className="hover:opacity-80 transition-opacity"
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Benefits & Advice */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-green-400">Keto Benefits</h4>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, idx) => (
                        <motion.li 
                          key={idx}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700"
                        >
                          <div className="bg-green-900/30 p-1 rounded-full">
                            <ChevronRight className="w-4 h-4 text-green-400" />
                          </div>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Keto Tip</h4>
                    <p className="text-gray-300">{item.advice}</p>
                  </div>
                </div>
              </div>

              {/* Carb Highlight */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-green-400">Low-Carb Achievement</h4>
                <div className="bg-gradient-to-r from-green-900/30 to-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Net Carbs</div>
                      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                        {item.nutrition.carbs}g
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Keto-Friendly</div>
                      <div className="text-xl font-semibold text-green-400">✓ Under 10g</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            ❓ Keto Diet FAQs
          </h2>
          <Accordion 
            variant="splitted" 
            className="gap-4"
            itemClasses={{
              base: "border border-gray-700",
              title: "text-white font-medium",
              content: "text-gray-300"
            }}
          >
            {faqData.map((faq, idx) => (
              <AccordionItem key={idx} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <Link href="/meal-plans">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
          >
            ← Explore All Meal Plans
          </motion.button>
        </Link>
      </div>
    </div>
  );
}