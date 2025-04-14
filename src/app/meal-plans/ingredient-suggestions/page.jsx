"use client";
import { useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";

export default function IngredientMealSuggestion() {
  const [inputIngredient, setInputIngredient] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const addIngredient = () => {
    const trimmedIngredient = inputIngredient.trim();
    if (trimmedIngredient && !selectedIngredients.includes(trimmedIngredient)) {
      setSelectedIngredients([...selectedIngredients, trimmedIngredient]);
    }
    setInputIngredient("");
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((ing) => ing !== ingredient));
  };

  const generateRecipe = async () => {
    if (selectedIngredients.length === 0) {
      alert("Please add at least one ingredient!");
      return;
    }

    setLoading(true);
    setGeneratedRecipe(null);

    try {
      const response = await axios.post("http://localhost:5000/generate-recipe", {
        ingredients: selectedIngredients,
      });

      if (response.data && response.data.recipe) {
        setGeneratedRecipe(response.data.recipe);
      } else {
        setGeneratedRecipe("⚠️ No recipe found. Please try again!");
      }
    } catch (error) {
      console.error("Error generating recipe:", error);
      setGeneratedRecipe("⚠️ Failed to generate recipe. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadRecipeAsImage = () => {
    const recipeElement = document.getElementById("recipe-container");
    if (!recipeElement) return;

    html2canvas(recipeElement, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "recipe.png";
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6 flex flex-col items-center">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 mt-40">
        {/* Left Section - Input & Button */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-green-400">🥗 Your Ingredients</h2>
          <p className="text-gray-300 mt-2">Enter ingredients and let AI generate a meal!</p>

          {/* Input Box & Button */}
          <div className="mt-6 flex gap-3">
            <input
              type="text"
              placeholder="Enter ingredient (e.g., Eggs, Chicken)..."
              value={inputIngredient}
              onChange={(e) => setInputIngredient(e.target.value)}
              className="px-4 py-2 rounded-lg text-black w-full border border-gray-400 outline-none focus:border-blue-500 transition-all"
            />
            <button
              onClick={addIngredient}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              ➕ Add
            </button>
          </div>

          {/* Selected Ingredients List */}
          {selectedIngredients.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedIngredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-gray-700 px-4 py-2 rounded-lg flex items-center text-lg shadow-md"
                >
                  {ingredient}
                  <button
                    onClick={() => removeIngredient(ingredient)}
                    className="ml-2 text-red-400 hover:text-red-600 transition-all duration-300"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Generate Button */}
          <div className="mt-6">
          <button
  onClick={generateRecipe}
  className="px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  {loading ? "⏳ Generating..." : "🍽️ Generate Recipe"}
</button>



          </div>
        </div>

        {/* Right Section - About the AI Generator */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
  <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg">
    Ingredient-Based Recipe Generator
  </h1>
  <p className="text-lg text-gray-300 mt-4 leading-relaxed">
    Transform your available ingredients into mouthwatering meals with our AI-powered recipe generator! 
    Just enter the ingredients you have, and let AI craft a delicious, easy-to-follow recipe for you. 🍳✨
  </p>

  <div className="mt-6">
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>✨ AI-curated meal ideas tailored to your ingredients</li>
      <li>📌 Step-by-step, easy-to-follow instructions</li>
      <li>💡 Get creative and discover new recipe inspirations</li>
      <li>📥 Save and download recipes as images for later use</li>
    </ul>
  </div>
</div>

      </div>

      {/* Recipe Display - Full Width */}
      <div className="w-full mt-12 flex justify-center px-8">
        {loading ? (
          <div className="text-center text-xl text-gray-300 animate-pulse">
            ⏳ Generating your recipe, please wait...
          </div>
        ) : generatedRecipe ? (
          <div
            id="recipe-container"
            className="w-full max-w-4xl bg-gray-900 bg-opacity-90 p-10 rounded-xl shadow-xl border border-gray-700 text-gray-300 transition-all"
          >
            {/* 🌟 Recipe Header */}
            <h2 className="text-4xl font-extrabold text-yellow-400 flex items-center gap-2 text-center justify-center">
              🍽️ Your AI-Generated Recipe
            </h2>
            <div className="w-32 h-1 bg-yellow-500 rounded-full mx-auto mt-3"></div>

            {/* 📜 Recipe Content */}
            <div className="mt-8 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
              {generatedRecipe.split("\n").map((line, index) => (
                <p
                  key={index}
                  className={`p-4 rounded-lg shadow-md border ${
                    line.includes("**") ? "border-yellow-400 text-yellow-300 font-bold" : "border-gray-700 bg-gray-800"
                  }`}
                >
                  {line.replace(/\*\*/g, "")}
                </p>
              ))}
            </div>

            {/* ✨ Footer Message */}
            <div className="mt-8 flex justify-between items-center px-4">
              <p className="text-sm text-gray-400 italic">
                🍀 Enjoy your meal! AI-crafted just for you.
              </p>
              <span className="text-yellow-300 text-lg font-semibold">⭐ Bon Appétit!</span>
            </div>
          </div>
        ) : (
          selectedIngredients.length > 0 &&
          !loading && (
            <p className="text-gray-400 text-center mt-6">
              ✨ Enter ingredients and click "Generate Recipe"!
            </p>
          )
        )}
      </div>

      {/* 📥 Download Button */}
      {generatedRecipe && (
        <div className="mt-6 flex justify-center">
          <button onClick={downloadRecipeAsImage} className="px-6 py-3 bg-purple-500 text-white">
            📥 Download Recipe as PNG
          </button>
        </div>
      )}
    </div>
  );
}
