"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";

const vegetarianMeals = [
  { 
    meal: "Breakfast", 
    food: "Avocado Toast with Scrambled Tofu", 
    emoji: "🥑🍞",
    description: "A protein-rich breakfast with crispy toast, creamy avocado, and seasoned scrambled tofu.",
    nutrition: { calories: 350, protein: 15, carbs: 40, fat: 18 },
    benefits: ["Rich in healthy fats", "Great for digestion", "Boosts metabolism"],
    advice: "Good for weight management. Ideal portion: 2 slices for active individuals, 1 slice for low-calorie diets."
  },
  { 
    meal: "Lunch", 
    food: "Chickpea Salad Wrap", 
    emoji: "🌯",
    description: "A whole-wheat wrap with chickpeas, fresh veggies, and tahini dressing.",
    nutrition: { calories: 450, protein: 20, carbs: 55, fat: 10 },
    benefits: ["High in plant protein", "Improves heart health", "Good for muscle recovery"],
    advice: "Rich in fiber. Keeps you full for longer."
  },
  { 
    meal: "Dinner", 
    food: "Vegetable Stir-Fry with Quinoa", 
    emoji: "🥦🍚",
    description: "A delicious stir-fry with colorful veggies and quinoa in a garlic-ginger sauce.",
    nutrition: { calories: 400, protein: 18, carbs: 50, fat: 9 },
    benefits: ["Full of antioxidants", "Balances blood sugar", "Rich in essential minerals"],
    advice: "Perfect for post-workout recovery. Light yet fulfilling."
  }
];

const faqData = [
  { question: "Is a vegetarian diet nutritious?", answer: "Yes! A balanced vegetarian diet provides all essential nutrients like protein, fiber, and vitamins." },
  { question: "How can I get enough protein?", answer: "Plant-based sources like tofu, lentils, chickpeas, and quinoa are excellent protein sources." },
  { question: "Are vegetarian meals good for weight loss?", answer: "Absolutely! They are rich in fiber, keeping you full for longer and reducing calorie intake." }
];

const nutritionColors = {
  calories: "#FF6B6B",
  protein: "#4ECDC4",
  carbs: "#FFD166",
  fat: "#A78BFA"
};

export default function VegetarianMealPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400"
        >
          🌱 Vegetarian Meal Plan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          A nutritionally balanced vegetarian meal plan designed for optimal health and delicious flavors
        </motion.p>
      </div>

      {/* Meal Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {vegetarianMeals.map((item, index) => (
          <motion.div
            key={item.meal}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{item.emoji}</span>
                    <h3 className="text-2xl font-bold text-white">{item.meal}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-green-400">{item.food}</h4>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
                <div className="flex gap-2">
                  {item.benefits.slice(0, 2).map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition Section */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nutrition Chart */}
                <div>
                  <h5 className="text-lg font-semibold mb-4">Nutrition Breakdown</h5>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={[
                          { name: "Calories", value: item.nutrition.calories },
                          { name: "Protein", value: item.nutrition.protein },
                          { name: "Carbs", value: item.nutrition.carbs },
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
                          {Object.keys(item.nutrition).map((key, i) => (
                            <Cell 
                              key={i} 
                              fill={nutritionColors[key]} 
                              className="hover:opacity-80 transition-opacity"
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Nutrition Progress Circles */}
                <div>
                  <h5 className="text-lg font-semibold mb-4">Nutritional Values</h5>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(item.nutrition).map(([key, value], i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-2">
                          <Circle 
                            percent={(value / (key === 'calories' ? 800 : 100)) * 100}
                            strokeWidth={8}
                            strokeColor={nutritionColors[key]}
                            trailWidth={4}
                            trailColor="#374151"
                            className="absolute"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold">{value}</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-300 capitalize">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits & Advice */}
              <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3">Health Benefits</h5>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h5 className="text-lg font-semibold mb-2 text-green-400">Dietitian's Advice</h5>
                    <p className="text-gray-300">{item.advice}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            ❓ Vegetarian Diet FAQs
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