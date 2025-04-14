"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";
import { Wallet, Egg, Chicken, Eggplant, ChevronRight } from "lucide-react";

const budgetKetoMeals = [
  { 
    meal: "Breakfast", 
    food: "Egg & Cheese Omelette", 
    emoji: "🍳🧀",
    icon: <Egg className="text-amber-400" />,
    description: "Fluffy eggs cooked with cheese and a side of sautéed cabbage.",
    nutrition: { calories: 400, protein: 22, carbs: 5, fat: 30 },
    benefits: ["Affordable and filling", "High in protein", "Supports brain function"],
    advice: "Add a pinch of turmeric for extra antioxidants.",
    prepTime: "10 mins",
    cost: "$1.50 per serving",
    costColor: "from-amber-400 to-yellow-400"
  },
  { 
    meal: "Lunch", 
    food: "Cabbage Stir-Fry with Minced Chicken", 
    emoji: "🍗🥬",
    // icon: <Chicken className="text-red-400" />,
    description: "Sautéed cabbage and minced chicken cooked with garlic and spices.",
    nutrition: { calories: 500, protein: 35, carbs: 8, fat: 28 },
    benefits: ["Cheap yet nutritious", "High in fiber", "Rich in vitamins"],
    advice: "Use ground chicken or eggs as a cheaper protein option.",
    prepTime: "15 mins",
    cost: "$2.00 per serving",
    costColor: "from-green-400 to-emerald-400"
  },
  { 
    meal: "Dinner", 
    food: "Eggplant & Peanut Butter Curry", 
    emoji: "🍆🥜",
    // icon: <Eggplant className="text-purple-400" />,
    description: "Soft-cooked eggplant in a creamy peanut butter sauce with spices.",
    nutrition: { calories: 450, protein: 20, carbs: 9, fat: 35 },
    benefits: ["Low-cost meal", "Rich in healthy fats", "Good for digestion"],
    advice: "Use coconut milk for extra creaminess.",
    prepTime: "20 mins",
    cost: "$1.75 per serving",
    costColor: "from-purple-400 to-indigo-400"
  }
];

const faqData = [
  { 
    question: "Can I do keto on a budget?", 
    answer: "Yes! Focus on eggs, cabbage, chicken, and affordable fats like peanuts." 
  },
  { 
    question: "Are peanuts keto-friendly?", 
    answer: "Yes, in moderation. They're high in fats but also contain some carbs." 
  },
  { 
    question: "What's the cheapest protein for keto?", 
    answer: "Eggs, canned tuna, and ground chicken are great affordable options." 
  }
];

const nutritionColors = {
  calories: "#FF6B6B",
  protein: "#4ECDC4",
  carbs: "#A78BFA",
  fat: "#FBBF24"
};

export default function BudgetKetoMealPlan() {
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
            <Wallet className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Budget Keto Meal Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Affordable low-carb meals that keep you in ketosis without breaking the bank
          </p>
        </motion.div>
      </div>

      {/* Meal Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {budgetKetoMeals.map((item, index) => (
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

              {/* Cost & Nutrition */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Cost Highlight */}
                <div className="bg-gradient-to-r from-green-900/30 to-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Budget Friendly</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Estimated Cost</div>
                      <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.costColor}`}>
                        {item.cost}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Savings</div>
                      <div className="text-xl font-semibold text-green-400">✓ 40% Cheaper</div>
                    </div>
                  </div>
                </div>

                {/* Quick Nutrition Facts */}
                <div className="grid grid-cols-3 gap-2">
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
                    <h4 className="text-lg font-semibold mb-3 text-green-400">Budget Benefits</h4>
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
                    <h4 className="text-lg font-semibold mb-2 text-green-400">Money-Saving Tip</h4>
                    <p className="text-gray-300">{item.advice}</p>
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
            ❓ Budget Keto FAQs
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