"use client";
import { useState } from "react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealTypes = ["Breakfast", "Lunch", "Dinner"];

const fetchNutritionData = async (foodItem) => {
  try {
    const response = await fetch("/getNutrition", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ foodItem }),
    });

    const data = await response.json();
    if (data.success) {
      return {
        name: data.data.food_name,
        servingSize: `${data.data.serving_qty} ${data.data.serving_unit}`,
        weight: `${data.data.serving_weight_grams}g`,
        calories: data.data.nf_calories,
        fat: data.data.nf_total_fat,
        saturatedFat: data.data.nf_saturated_fat,
        cholesterol: data.data.nf_cholesterol,
        sodium: data.data.nf_sodium,
        carbohydrates: data.data.nf_total_carbohydrate,
        fiber: data.data.nf_dietary_fiber,
        sugars: data.data.nf_sugars,
        protein: data.data.nf_protein,
        potassium: data.data.nf_potassium,
        phosphorus: data.data.nf_p,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching nutrition data:", error);
    return null;
  }
};

const getRandomMealPlan = async () => {
  const mealOptions = ["Rice", "Chicken", "Eggs", "Paneer", "Dal", "Chapati", "Salad", "Fish", "Banana", "Milk", "Oats"];

  const mealPlan = {};
  const promises = [];

  for (const day of daysOfWeek) {
    mealPlan[day] = {};
    for (const mealType of mealTypes) {
      const randomMeal = mealOptions[Math.floor(Math.random() * mealOptions.length)];
      const mealPromise = fetchNutritionData(randomMeal).then((mealData) => {
        mealPlan[day][mealType] = mealData
          ? mealData
          : { name: randomMeal, calories: 0, protein: 0, fat: 0, carbohydrates: 0, sodium: 0 };
      });
      promises.push(mealPromise);
    }
  }

  await Promise.all(promises);
  return mealPlan;
};

export default function AutoMealPlan() {
  const [mealPlan, setMealPlan] = useState({});

  const regenerateMealPlan = async () => {
    const newMealPlan = await getRandomMealPlan();
    setMealPlan(newMealPlan);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 mt-2">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">🍽️ Auto-Generated Meal Plan</h1>
        <p className="text-lg text-gray-300 mb-10">Here’s your AI-generated meal plan for the week!</p>
        <button
          onClick={regenerateMealPlan}
          className="mb-6 px-6 py-2 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition"
        >
          🔄 Regenerate Meal Plan
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {Object.keys(mealPlan).length > 0 &&
          daysOfWeek.map((day) => (
            <div key={day} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-400">{day}</h2>
              {mealTypes.map((mealType) => (
                <div key={mealType} className="mt-3">
                  <p className="text-lg font-semibold">{mealType}:</p>
                  <p className="text-gray-300 ml-4">• {mealPlan[day][mealType].name}</p>
                  <p className="text-gray-400 ml-4">📊 Calories: {mealPlan[day][mealType].calories} kcal</p>
                  <p className="text-gray-400 ml-4">💪 Protein: {mealPlan[day][mealType].protein}g</p>
                  <p className="text-gray-400 ml-4">🍔 Fat: {mealPlan[day][mealType].fat}g</p>
                  <p className="text-gray-400 ml-4">🥔 Carbs: {mealPlan[day][mealType].carbohydrates}g</p>
                  <p className="text-gray-400 ml-4">🧂 Sodium: {mealPlan[day][mealType].sodium}mg</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}