"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";
import { Clock, Zap, Egg, Salad, Shrimp } from "lucide-react";

const quickEasyMeals = [
  { 
    meal: "Breakfast", 
    food: "Avocado Toast with Eggs", 
    emoji: "🥑🍞",
    icon: <Egg className="text-amber-400" />,
    description: "Crispy whole grain toast topped with mashed avocado and a fried egg.",
    nutrition: { calories: 350, protein: 15, carbs: 30, fat: 18 },
    benefits: ["Ready in 10 mins", "High in healthy fats", "Keeps you full longer"],
    advice: "Add red pepper flakes for an extra kick!",
    prepTime: "10 mins",
    timeColor: "from-amber-400 to-yellow-400"
  },
  { 
    meal: "Lunch", 
    food: "Grilled Chicken Salad", 
    emoji: "🥗🍗",
    icon: <Salad className="text-green-400" />,
    description: "Fresh salad with grilled chicken, cherry tomatoes, cucumber, and light dressing.",
    nutrition: { calories: 420, protein: 40, carbs: 12, fat: 20 },
    benefits: ["Ready in 12 mins", "Packed with protein", "Refreshing and light"],
    advice: "Use Greek yogurt instead of mayo for a healthier dressing.",
    prepTime: "12 mins",
    timeColor: "from-green-400 to-emerald-400"
  },
  { 
    meal: "Dinner", 
    food: "One-Pan Garlic Shrimp & Veggies", 
    emoji: "🍤🥦",
    // icon: <Shrimp className="text-pink-400" />,
    description: "Shrimp stir-fried with broccoli, bell peppers, and garlic in olive oil.",
    nutrition: { calories: 480, protein: 35, carbs: 10, fat: 28 },
    benefits: ["Ready in 15 mins", "Loaded with antioxidants", "Low-carb and filling"],
    advice: "Pair with quinoa for extra fiber.",
    prepTime: "15 mins",
    timeColor: "from-purple-400 to-indigo-400"
  }
];

const faqData = [
  { 
    question: "How can I make quick meals?", 
    answer: "Use simple ingredients and one-pan cooking techniques." 
  },
  { 
    question: "What's a high-protein quick meal?", 
    answer: "Eggs, grilled chicken, shrimp, or cottage cheese-based meals." 
  },
  { 
    question: "How do I save time cooking?", 
    answer: "Prep ingredients ahead of time and use quick-cooking proteins like shrimp or eggs." 
  }
];

const nutritionColors = {
  calories: "#FF6B6B",
  protein: "#4ECDC4",
  carbs: "#A78BFA",
  fat: "#FBBF24"
};

export default function QuickEasyMeals() {
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
            <Zap className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Lightning-Fast Meals
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Healthy, delicious meals you can make in 15 minutes or less
          </p>
        </motion.div>
      </div>

      {/* Meal Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {quickEasyMeals.map((item, index) => (
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

              {/* Time & Nutrition */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Time Highlight */}
                <div className="bg-gradient-to-r from-blue-900/30 to-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold mb-2 text-blue-400">Quick Prep</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Preparation Time</div>
                      <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.timeColor}`}>
                        {item.prepTime}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Effort Level</div>
                      <div className="text-xl font-semibold text-blue-400">✓ Super Easy</div>
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
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Why This Works</h4>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, idx) => (
                        <motion.li 
                          key={idx}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700"
                        >
                          <div className="bg-blue-900/30 p-1 rounded-full">
                            {/* <ChevronRight className="w-4 h-4 text-blue-400" /> */}
                          </div>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Chef's Quick Tip</h4>
                    <p className="text-gray-300">{item.advice}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Time-Saving Tips Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            ⏱️ Time-Saving Kitchen Hacks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Prep Ahead", 
                icon: <Clock className="w-10 h-10 text-blue-400" />,
                tips: ["Chop veggies on Sunday", "Pre-make dressings", "Hard-boil eggs for the week"]
              },
              { 
                title: "Smart Shortcuts", 
                icon: <Zap className="w-10 h-10 text-blue-400" />,
                tips: ["Use frozen veggies", "Buy pre-cooked proteins", "Keep canned beans on hand"]
              },
              { 
                title: "One-Pan Magic", 
                // icon: <Shrimp className="w-10 h-10 text-blue-400" />,
                tips: ["Sheet pan dinners", "Stir-fries", "One-pot pasta dishes"]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
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
            ❓ Quick Meals FAQs
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