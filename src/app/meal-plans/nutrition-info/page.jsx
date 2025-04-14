"use client";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

export default function NutritionInfo() {
  const [inputIngredient, setInputIngredient] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [nutritionData, setNutritionData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const addIngredient = () => {
    if (inputIngredient.trim() && !selectedIngredients.includes(inputIngredient)) {
      setSelectedIngredients([...selectedIngredients, inputIngredient.trim()]);
    }
    setInputIngredient("");
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((ing) => ing !== ingredient));
  };

  const fetchNutritionInfo = async () => {
    if (selectedIngredients.length === 0) {
      alert("Please add at least one ingredient!");
      return;
    }

    setLoading(true);
    setNutritionData(null);
    setChartData([]);
    setImageUrl("");

    try {
      const response = await axios.post("http://localhost:5000/get-nutrition2", {
        ingredients: selectedIngredients,
      });

      const nutritionText = response.data.nutritionInfo;
      setNutritionData(nutritionText);

      const extractedData = extractNutritionValues(nutritionText);
      setChartData(extractedData);

      fetchImage(selectedIngredients[0]);
    } catch (error) {
      console.error("Error fetching nutrition info:", error);
      setNutritionData("⚠️ Failed to fetch nutritional info. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchImage = async (ingredient) => {
    try {
      const response = await axios.get(`https://source.unsplash.com/400x300/?${ingredient}`);
      setImageUrl(response.request.responseURL);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const extractNutritionValues = (text) => {
    const values = {};
    const regex = /(\*\*Calories:\*\*| \*\*Protein:\*\*| \*\*Fat:\*\*| \* Saturated Fat:| \*\*Carbohydrates:\*\*)[^0-9]*([\d.]+)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      values[match[1].replace(/\*\*/g, "").trim()] = parseFloat(match[2]);
    }
    return Object.keys(values).map((key) => ({ 
      name: key, 
      value: values[key],
      icon: key.includes("Calories") ? "🔥" : 
            key.includes("Protein") ? "💪" : 
            key.includes("Fat") ? "🍔" : 
            key.includes("Carbohydrates") ? "🥔" : "🍎"
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
              Smart Nutrition Analyzer
            </h1>
            <p className="text-xl text-gray-300">
              Discover the nutritional secrets of your food. Get instant analysis of calories, proteins, fats and more.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-amber-400 text-2xl">🔥</div>
                <h3 className="font-bold mt-2">Calories</h3>
                <p className="text-sm text-gray-400">Energy content</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-blue-400 text-2xl">💪</div>
                <h3 className="font-bold mt-2">Protein</h3>
                <p className="text-sm text-gray-400">Muscle building</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-green-400 text-2xl">🥑</div>
                <h3 className="font-bold mt-2">Fats</h3>
                <p className="text-sm text-gray-400">Essential nutrients</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-purple-400 text-2xl">🍞</div>
                <h3 className="font-bold mt-2">Carbs</h3>
                <p className="text-sm text-gray-400">Energy source</p>
              </div>
            </div>
          </div>

          {/* Right Content - Input Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Analyze Your Ingredients
              </h2>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. chicken, rice, avocado..."
                  value={inputIngredient}
                  onChange={(e) => setInputIngredient(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-amber-500/30 text-white placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                />
                <button
                  onClick={addIngredient}
                  className="px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>

              {/* Selected Ingredients */}
              {selectedIngredients.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Selected Ingredients:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedIngredients.map((ingredient, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-700/50 px-3 py-2 rounded-lg flex items-center text-sm border border-gray-600/50 hover:bg-gray-600/50 transition-all"
                      >
                        {ingredient}
                        <button
                          onClick={() => removeIngredient(ingredient)}
                          className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={fetchNutritionInfo}
                disabled={loading || selectedIngredients.length === 0}
                className={`mt-6 w-full py-3 rounded-xl text-white transition-all shadow-lg ${loading || selectedIngredients.length === 0 ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:opacity-90 hover:shadow-amber-500/20'}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Get Nutrition Analysis
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {nutritionData && (
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-700/50">
              <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                Nutrition Report
              </h2>
              <p className="text-center text-gray-400 mt-2">Detailed analysis of your ingredients</p>
            </div>

            <div className="p-6 md:p-8">
              {/* Food Image */}
              {imageUrl && (
                <div className="flex justify-center mb-8">
                  <div className="relative group">
                    <img
                      src={imageUrl}
                      alt="Food Item"
                      className="rounded-xl shadow-xl w-full max-w-md h-48 object-cover border-2 border-gray-700/50 group-hover:border-amber-400/50 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-medium">{selectedIngredients[0]}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Nutritional Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {chartData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-amber-400/30 transition-all hover:shadow-lg group"
                  >
                    <div className="flex items-center">
                      <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg text-gray-300">{item.name}</h3>
                        <p className="text-4xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                          {item.value}g
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nutrition Chart */}
              {chartData.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Visual Nutrition Breakdown
                  </h3>
                  <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis 
                          type="number" 
                          tick={{ fill: "#9CA3AF" }}
                          stroke="#4B5563"
                        />
                        <YAxis 
                          type="category" 
                          dataKey="name" 
                          tick={{ fill: "#E5E7EB", fontSize: 14 }}
                          stroke="#4B5563"
                          width={120}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "#1F2937",
                            borderColor: "#374151",
                            borderRadius: "0.5rem",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                          }}
                          itemStyle={{ color: "#E5E7EB" }}
                          labelStyle={{ fontWeight: "bold", color: "#F3F4F6" }}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}