"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const mealCategories = [
  { name: "Vegetarian", emoji: "🍃", link: "/meal-plans/vegetarian", description: "Nutritious plant-based meals packed with flavor.", color: "from-emerald-400 to-green-500" },
  { name: "Vegan", emoji: "🥦", link: "/meal-plans/vegan", description: "Completely animal-free meals for a healthy lifestyle.", color: "from-teal-400 to-emerald-500" },
  { name: "High-Protein", emoji: "💪", link: "/meal-plans/high-protein", description: "Protein-rich meals for muscle growth and fitness.", color: "from-blue-400 to-cyan-500" },
  { name: "Keto & Low-Carb", emoji: "🏋️‍♂️", link: "/meal-plans/keto", description: "Low-carb, high-fat meals to fuel your body.", color: "from-purple-400 to-indigo-500" },
  { name: "Budget-Friendly", emoji: "🏠", link: "/meal-plans/budget", description: "Affordable meal plans without compromising health.", color: "from-amber-400 to-orange-500" },
  { name: "Quick & Easy", emoji: "⏳", link: "/meal-plans/quick-easy", description: "Simple meals that take minimal time to prepare.", color: "from-pink-400 to-rose-500" },
];

const FeatureCard = ({ title, emoji, description, buttonText, buttonLink, children }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl"
  >
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl">{emoji}</span>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
          {title}
        </h3>
      </div>
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      {children}
      <Link href={buttonLink} className="mt-auto">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
        >
          {buttonText}
        </motion.button>
      </Link>
    </div>
  </motion.div>
);

export default function MealPlans() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 mt-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400"
        >
          Transform Your Eating Habits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Discover personalized meal plans tailored to your lifestyle, dietary needs, and health goals.
        </motion.p>
      </div>

      {/* Meal Plan Categories */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Explore Our Meal Plans
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mealCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${category.color} p-0.5 rounded-2xl hover:shadow-lg hover:shadow-${category.color.split('to-')[1].split('-')[0]}-500/30 transition-all`}
            >
              <div className="bg-gray-900 h-full p-6 rounded-2xl">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{category.emoji}</span>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 flex-grow">{category.description}</p>
                  <Link href={category.link} className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
                    >
                      Explore Plan
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <FeatureCard
          title="✨ Plan Your Own Meals"
          emoji="✨"
          description="Create custom meal plans tailored to your unique dietary needs, preferences, and health goals with our intuitive planner."
          buttonText="➕ Create Your Plan"
          buttonLink="/meal-plans/user-plans"
        >
          <ul className="space-y-2 text-gray-300 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Personalized recommendations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Save and edit your plans
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Track your progress
            </li>
          </ul>
        </FeatureCard>

        <FeatureCard
          title="🍽️ Ingredient-Based Suggestions"
          emoji="🍽️"
          description="Enter what you have and we'll suggest delicious meals you can make right now, reducing food waste."
          buttonText="📝 Get Suggestions"
          buttonLink="/meal-plans/ingredient-suggestions"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {['Tomato', 'Chicken', 'Rice', 'Spinach', 'Eggs'].map((ingredient) => (
              <span key={ingredient} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {ingredient}
              </span>
            ))}
          </div>
        </FeatureCard>

        <FeatureCard
          title="🍎 Nutritional Information"
          emoji="🍎"
          description="Detailed nutritional breakdowns for every meal including macros, vitamins, and dietary suitability markers."
          buttonText="📊 View Nutrition"
          buttonLink="/meal-plans/nutrition-info"
        >
          <div className="grid grid-cols-3 gap-2 mb-6 text-center">
            <div className="bg-gray-800 p-2 rounded-lg">
              <div className="text-green-400 font-bold">320</div>
              <div className="text-xs text-gray-400">CALORIES</div>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
              <div className="text-green-400 font-bold">24g</div>
              <div className="text-xs text-gray-400">PROTEIN</div>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
              <div className="text-green-400 font-bold">KETO</div>
              <div className="text-xs text-gray-400">DIET</div>
            </div>
          </div>
        </FeatureCard>

        <FeatureCard
          title="🛒 Smart Shopping List"
          emoji="🛒"
          description="Automatically generates organized shopping lists from your meal plans, sorted by category for convenience."
          buttonText="🛍️ Create List"
          buttonLink="/meal-plans/shopping-list"
        >
          <div className="flex gap-4 mb-6 text-sm">
            <div>
              <div className="text-green-400 mb-1">Produce</div>
              <ul className="text-gray-400 space-y-1">
                <li>• Tomatoes</li>
                <li>• Spinach</li>
              </ul>
            </div>
            <div>
              <div className="text-green-400 mb-1">Dairy</div>
              <ul className="text-gray-400 space-y-1">
                <li>• Eggs</li>
                <li>• Cheese</li>
              </ul>
            </div>
          </div>
        </FeatureCard>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl border border-gray-700 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Ready to Transform Your Eating Habits?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have improved their health with our personalized meal plans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
              >
                Start Your Journey
              </motion.button>
            </Link>
            <Link href="/meal-plans/demo">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-all"
              >
                Try Demo First
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}