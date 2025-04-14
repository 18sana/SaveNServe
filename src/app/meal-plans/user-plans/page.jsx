"use client";
import { useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import html2canvas from "html2canvas";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealTypes = ["Breakfast", "Lunch", "Dinner"];

export default function PlanYourMeal() {
  const [mealPlan, setMealPlan] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMealType, setSelectedMealType] = useState(null);
  const [newMeal, setNewMeal] = useState("");
  const [loading, setLoading] = useState(false);
  const chartRef = useRef(null);

  const openModal = (day, mealType) => {
    setSelectedDay(day);
    setSelectedMealType(mealType);
  };

  const closeModal = () => {
    setSelectedDay(null);
    setSelectedMealType(null);
    setNewMeal("");
  };

  const addMeal = async () => {
    if (!newMeal.trim()) return;

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/getNutrition", { foodItem: newMeal });

      if (response.data.success) {
        const nutrition = response.data.data[0];

        setMealPlan((prev) => ({
          ...prev,
          [selectedDay]: {
            ...prev[selectedDay],
            [selectedMealType]: [
              ...(prev[selectedDay]?.[selectedMealType] || []),
              {
                name: newMeal,
                calories: nutrition.calories,
                protein: nutrition.protein,
                carbs: nutrition.saturated_fat,
                fats: nutrition.total_fat,
              },
            ],
          },
        }));
      } else {
        alert("No nutrition data found for this food.");
      }
    } catch (error) {
      alert("Failed to fetch nutrition data.");
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  const calculateDayNutrition = (day) => {
    let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFats = 0;
    mealTypes.forEach((mealType) => {
      (mealPlan[day]?.[mealType] || []).forEach((meal) => {
        totalCalories += meal.calories || 0;
        totalProtein += meal.protein || 0;
        totalCarbs += meal.carbs || 0;
        totalFats += meal.fats || 0;
      });
    });
    return { totalCalories, totalProtein, totalCarbs, totalFats };
  };

  const weeklyNutrition = daysOfWeek.map((day) => calculateDayNutrition(day));

  const barChartData = {
    labels: daysOfWeek,
    datasets: [
      { 
        label: "Calories (kcal)", 
        data: weeklyNutrition.map(d => d.totalCalories), 
        backgroundColor: "rgba(236, 72, 153, 0.7)",
        borderColor: "rgba(236, 72, 153, 1)",
        borderWidth: 1
      },
      { 
        label: "Protein (g)", 
        data: weeklyNutrition.map(d => d.totalProtein), 
        backgroundColor: "rgba(14, 165, 233, 0.7)",
        borderColor: "rgba(14, 165, 233, 1)",
        borderWidth: 1
      },
      { 
        label: "Carbohydrate (g)", 
        data: weeklyNutrition.map(d => d.totalCarbs), 
        backgroundColor: "rgba(234, 179, 8, 0.7)",
        borderColor: "rgba(234, 179, 8, 1)",
        borderWidth: 1
      },
      { 
        label: "Fats (g)", 
        data: weeklyNutrition.map(d => d.totalFats), 
        backgroundColor: "rgba(34, 197, 94, 0.7)",
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 1
      },
    ],
  };

  const downloadChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "nutrition_chart.png";
        link.click();
      });
    }
  };

  const removeMeal = (day, mealType, index) => {
    setMealPlan(prev => {
      const updated = {...prev};
      if (updated[day]?.[mealType]) {
        updated[day][mealType] = updated[day][mealType].filter((_, i) => i !== index);
        if (updated[day][mealType].length === 0) {
          delete updated[day][mealType];
          if (Object.keys(updated[day]).length === 0) {
            delete updated[day];
          }
        }
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto mt-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            ✨ NutriPlan Pro
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Elevate your nutrition tracking with our sleek meal planning system
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {daysOfWeek.map((day) => {
            const { totalCalories, totalProtein, totalCarbs, totalFats } = calculateDayNutrition(day);
            return (
              <div key={day} className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-700/50">
                <div className="bg-gradient-to-r from-pink-600 to-violet-600 p-4">
                  <h2 className="text-xl font-bold text-white">{day}</h2>
                  <div className="text-xs text-white/80 mt-1">
                    <span className="inline-block mr-2">🔥 {Math.round(totalCalories)} kcal</span>
                    <span className="inline-block">💪 {Math.round(totalProtein)}g protein</span>
                  </div>
                </div>
                
                <div className="p-4">
                  {mealTypes.map((mealType) => (
                    <div key={mealType} className="mb-4 last:mb-0">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-pink-400">{mealType}</h3>
                        <button
                          onClick={() => openModal(day, mealType)}
                          className="text-xs bg-gray-700/50 hover:bg-gray-600/50 px-2 py-1 rounded transition border border-gray-600/50"
                        >
                          + Add
                        </button>
                      </div>
                      
                      {mealPlan[day]?.[mealType]?.length > 0 ? (
                        <ul className="space-y-2">
                          {mealPlan[day][mealType].map((meal, index) => (
                            <li key={index} className="bg-gray-700/30 p-2 rounded text-sm relative group border border-gray-600/30">
                              <div className="font-medium">{meal.name}</div>
                              <div className="text-xs text-gray-400 mt-1">
                                <span className="inline-block mr-2">🔥 {Math.round(meal.calories)} kcal</span>
                                <span className="inline-block mr-2">P: {Math.round(meal.protein)}g</span>
                                <span className="inline-block mr-2">C: {Math.round(meal.carbs)}g</span>
                                <span className="inline-block">F: {Math.round(meal.fats)}g</span>
                              </div>
                              <button
                                onClick={() => removeMeal(day, mealType, index)}
                                className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-pink-400 hover:text-pink-300 transition"
                              >
                                ×
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500 italic">No meals added yet</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden p-6 border border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                📊 Weekly Nutrition Dashboard
              </h2>
              <p className="text-gray-400 mt-1">Visual analytics for your weekly nutrition</p>
            </div>
            <button
              onClick={downloadChart}
              className="mt-3 md:mt-0 px-4 py-2 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg text-white hover:opacity-90 transition-all flex items-center shadow-lg hover:shadow-violet-500/20"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Chart
            </button>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/50">
            <div ref={chartRef}>
              <Bar 
                data={barChartData} 
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        color: '#e5e7eb',
                        font: {
                          size: 12
                        }
                      }
                    },
                    tooltip: {
                      backgroundColor: 'rgba(17, 24, 39, 0.9)',
                      titleColor: '#f3f4f6',
                      bodyColor: '#e5e7eb',
                      borderColor: '#374151',
                      borderWidth: 1,
                      padding: 12
                    }
                  },
                  scales: {
                    x: {
                      grid: {
                        color: 'rgba(55, 65, 81, 0.5)'
                      },
                      ticks: {
                        color: '#e5e7eb'
                      }
                    },
                    y: {
                      grid: {
                        color: 'rgba(55, 65, 81, 0.5)'
                      },
                      ticks: {
                        color: '#e5e7eb'
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedDay && selectedMealType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4">
          <div className="bg-gray-800/90 backdrop-blur-md rounded-xl shadow-2xl max-w-md w-full p-6 animate-fade-in border border-gray-700/50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                Add to {selectedMealType} on {selectedDay}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Food Item
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 outline-none transition"
                placeholder="e.g. Grilled Chicken Salad"
                value={newMeal}
                onChange={(e) => setNewMeal(e.target.value)}
                autoFocus
              />
              <p className="mt-1 text-xs text-gray-400">
                Enter a specific food item for accurate nutrition data
              </p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-700/50 text-white hover:bg-gray-600/50 transition border border-gray-600/50"
              >
                Cancel
              </button>
              <button
                onClick={addMeal}
                disabled={loading || !newMeal.trim()}
                className={`px-4 py-2 rounded-lg text-white transition ${loading || !newMeal.trim() ? 'bg-gradient-to-r from-pink-700 to-violet-700 opacity-70 cursor-not-allowed' : 'bg-gradient-to-r from-pink-600 to-violet-600 hover:opacity-90 shadow-lg'}`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                  </span>
                ) : 'Add Meal'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}