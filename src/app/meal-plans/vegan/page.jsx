"use client";
import Link from "next/link";

const veganMeals = [
  { meal: "Breakfast", food: "Smoothie Bowl with Chia Seeds 🥝🍓" },
  { meal: "Lunch", food: "Lentil Soup with Whole Wheat Bread 🍞" },
  { meal: "Dinner", food: "Stuffed Bell Peppers with Quinoa 🌶️" },
  { meal: "Snack", food: "Hummus with Carrot Sticks 🥕" },
];

export default function VeganMealPlan() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-400 flex justify-center items-center gap-2 mb-4">
          🌱 Vegan Meal Plan
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          A delicious and fully plant-based meal plan for a healthy lifestyle.
        </p>

        <div className="space-y-6">
          {veganMeals.map((item) => (
            <div key={item.meal} className="p-5 bg-gray-800 rounded-lg flex justify-between items-center hover:bg-green-300 hover:text-gray-900 transition">
              <h3 className="text-xl font-semibold">{item.meal}</h3>
              <p className="text-lg">{item.food}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/meal-plans">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              ← Back to Meal Plans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
