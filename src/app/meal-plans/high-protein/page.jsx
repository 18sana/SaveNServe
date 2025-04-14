"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";
import { Dumbbell, Egg, Chicken, Fish, ChevronRight } from "lucide-react";

const highProteinMeals = [
  { 
    meal: "Breakfast", 
    food: "Protein Pancakes with Greek Yogurt", 
    emoji: "🥞",
    icon: <Egg className="text-amber-400" />,
    description: "Fluffy protein-packed pancakes served with Greek yogurt and fresh berries.",
    nutrition: { calories: 400, protein: 35, carbs: 45, fat: 10 },
    benefits: ["Boosts muscle growth", "Rich in essential amino acids", "Keeps you full longer"],
    advice: "Ideal for muscle gain. Add honey for extra energy.",
    prepTime: "15 mins"
  },
  { 
    meal: "Lunch", 
    food: "Grilled Chicken Salad with Quinoa", 
    emoji: "🥗",
    // icon: <Chicken className="text-red-400" />,
    description: "A nutrient-rich salad with grilled chicken, quinoa, and a light lemon dressing.",
    nutrition: { calories: 550, protein: 50, carbs: 40, fat: 12 },
    benefits: ["High-quality lean protein", "Supports weight management", "Packed with vitamins"],
    advice: "A great post-workout meal for muscle recovery.",
    prepTime: "25 mins"
  },
  { 
    meal: "Dinner", 
    food: "Salmon with Roasted Vegetables", 
    emoji: "🍣",
    icon: <Fish className="text-blue-400" />,
    description: "Omega-3-rich salmon served with roasted veggies and brown rice.",
    nutrition: { calories: 600, protein: 45, carbs: 50, fat: 20 },
    benefits: ["Great for brain health", "Reduces inflammation", "Supports heart health"],
    advice: "Best eaten at least 2 hours before sleep for proper digestion.",
    prepTime: "30 mins"
  }
];

const faqData = [
  { 
    question: "Why is protein important?", 
    answer: "Protein is essential for muscle repair, immune function, and energy production." 
  },
  { 
    question: "How much protein do I need daily?", 
    answer: "It depends on activity level, but generally 0.8-1.2g per kg of body weight is recommended." 
  },
  { 
    question: "Can I get enough protein without supplements?", 
    answer: "Yes! Lean meats, dairy, eggs, legumes, and nuts provide plenty of protein." 
  }
];

const nutritionColors = {
  calories: "#FF6B6B",
  protein: "#4ECDC4",
  carbs: "#FFD166",
  fat: "#A78BFA"
};

export default function HighProteinMealPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
            <Dumbbell className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Muscle Fuel Meal Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            High-protein nutrition designed to optimize performance and recovery
          </p>
        </motion.div>
      </div>

      {/* Meal Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {highProteinMeals.map((item, index) => (
          <motion.div
            key={item.meal}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl overflow-hidden hover:shadow-blue-500/20 transition-all"
          >
            <div className="p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">
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
                  <h4 className="text-lg font-semibold mb-4 text-blue-400">Macronutrient Breakdown</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={[
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
                          {["Protein", "Carbs", "Fats"].map((key, i) => (
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
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Benefits</h4>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, idx) => (
                        <motion.li 
                          key={idx}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700"
                        >
                          <div className="bg-blue-900/30 p-1 rounded-full">
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                          </div>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Coach's Advice</h4>
                    <p className="text-gray-300">{item.advice}</p>
                  </div>
                </div>
              </div>

              {/* Full Nutrition Info */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Complete Nutrition</h4>
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(item.nutrition).map(([key, value]) => (
                    <motion.div 
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 text-center"
                    >
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{key}</div>
                      <div className="text-xl font-bold">
                        {value}{key === 'calories' ? '' : 'g'}
                      </div>
                    </motion.div>
                  ))}
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
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            💪 Protein Nutrition FAQs
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
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            ← Explore All Meal Plans
          </motion.button>
        </Link>
      </div>
    </div>
  );
}