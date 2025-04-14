const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const axios = require('axios');
const multer = require("multer");  


// ✅ Use Correct API Credentials
// const APP_ID = "71dd1b21";
// const API_KEY = "f1e88a0c70fd97ae4fb0790a2da93ad5";

const NUTRITIONIX_API_ID = process.env.NUTRITIONIX_API_ID;
const NUTRITIONIX_API_KEY = process.env.NUTRITIONIX_API_KEY;
const GEMINI_API_KEY = "AIzaSyDsXPH8l3iRJ23iEtDTRcCuG7i2Hn6w2jw";

app.post('/getNutrition', async (req, res) => {
    try {
        const { foodItem } = req.body;  // Get food item from request body

        if (!foodItem) {
            return res.status(400).json({ error: "Food item is required" });
        }

        const response = await axios.post(
            'https://trackapi.nutritionix.com/v2/natural/nutrients',
            { query: foodItem },  
            {
                headers: {
                    'x-app-id': '71dd1b21',    // Replace with your actual App ID
                    'x-app-key': 'f1e88a0c70fd97ae4fb0790a2da93ad5',  // Replace with your actual API Key
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.data && response.data.foods.length > 0) {
            const foodData = response.data.foods.map(food => ({
                name: food.food_name,
                calories: food.nf_calories,
                serving_size: `${food.serving_qty} ${food.serving_unit}`,
                total_fat: food.nf_total_fat,
                saturated_fat: food.nf_saturated_fat,
                protein: food.nf_protein
            }));

            res.json({ success: true, data: foodData });
        } else {
            res.status(404).json({ error: "No nutrition data found for the given food item" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch nutrition data" });
    }
});


app.post("/autogetNutrition", async (req, res) => {
    try {
        const { foodItem } = req.body;

        const response = await axios.post(
            "https://trackapi.nutritionix.com/v2/natural/nutrients",
            { query: foodItem },
            {
                headers: {
                    "x-app-id": "71dd1b21",  // Directly using App ID
                    "x-app-key": "f1e88a0c70fd97ae4fb0790a2da93ad5",  // Directly using API Key
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({
            success: true,
            data: response.data.foods[0],
        });
    } catch (error) {
        console.error("Error fetching nutrition data:", error);
        res.status(500).json({ success: false, message: "Failed to fetch nutrition data" });
    }
});

app.post("/generate-recipe", async (req, res) => {
    try {
        const { ingredients } = req.body;
        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ error: "Ingredients are required" });
        }

        const prompt = `Suggest a recipe using: ${ingredients.join(", ")}. Provide a detailed step-by-step method. use icons wherever necessary `;

        // Google Gemini API request
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        // Ensure valid JSON response handling
        let recipe = "No recipe found.";
        if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            recipe = response.data.candidates[0].content.parts[0].text;
        }

        res.json({ ingredients, recipe });
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to generate recipe" });
    }
});



// app.post("/get-shopping-list", async (req, res) => {
//     try {
//         const { dish } = req.body;
//         if (!dish) {
//             return res.status(400).json({ error: "Dish name is required" });
//         }

//         const prompt = `Give me a concise list of essential ingredients (with approximate quantities) to prepare "${dish}". Only list ingredients, do not include explanations or tips.`;

//         // AI Request (Google Gemini API)
//         const response = await axios.post(
//             `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//             {
//                 contents: [{ parts: [{ text: prompt }] }]
//             },
//             {
//                 headers: { "Content-Type": "application/json" }
//             }
//         );

//         let shoppingList = [];

//         if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
//             shoppingList = response.data.candidates[0].content.parts[0].text
//                 .split("\n") // Split into lines
//                 .filter(item => item.includes(":")) // Keep only lines with ingredients
//                 .map(item => item.replace(/\*\*|\*/g, "").trim()); // Remove markdown symbols and extra spaces
//         }

//         res.json({ dish, shoppingList });
//     } catch (error) {
//         console.error("Error:", error.response?.data || error.message);
//         res.status(500).json({ error: "Failed to fetch shopping list" });
//     }
// });


    app.post("/get-shopping-list", async (req, res) => {
        try {
            const { dish } = req.body;
            console.log("🔵 Received dish:", dish);
    
            if (!dish) {
                return res.status(400).json({ error: "⚠ Dish name is required!" });
            }
    
            // **Improved AI Prompt**
            const prompt = `For the dish "${dish}", provide:
            1. A list of essential ingredients with approximate quantities.
            2. Step-by-step cooking instructions (5 steps max).
            3. A fun fact or health benefit related to this dish.
            Format the response as:
            - Ingredients: (list each item on a new line with quantity)
            - Steps: (list each step on a new line)
            - Fun Fact: (1-2 sentence fun fact)`;
    
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                { contents: [{ parts: [{ text: prompt }] }] },
                { headers: { "Content-Type": "application/json" } }
            );
    
            console.log("🟢 AI Response:", response.data);
    
            let shoppingList = [];
            let recipeSteps = [];
            let aiFact = "";
    
            if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
                const responseText = response.data.candidates[0].content.parts[0].text;
                const sections = responseText.split("\n\n");
    
                sections.forEach((section) => {
                    if (section.startsWith("- Ingredients:")) {
                        shoppingList = section
                            .split("\n")
                            .slice(1)
                            .map(item => item.replace(/\*\*|\*/g, "").trim())
                            .filter(item => item.includes(":"));
                    } else if (section.startsWith("- Steps:")) {
                        recipeSteps = section.split("\n").slice(1).map(step => step.trim());
                    } else if (section.startsWith("- Fun Fact:")) {
                        aiFact = section.replace("- Fun Fact:", "").trim();
                    }
                });
            }
    
            console.log("✅ Final Shopping List:", shoppingList);
            console.log("✅ Recipe Steps:", recipeSteps);
            console.log("✅ Fun Fact:", aiFact);
    
            res.json({ dish, shoppingList, recipeSteps, aiFact });
    
        } catch (error) {
            console.error("❌ Error:", error.response?.data || error.message);
            res.status(500).json({ error: "Failed to fetch shopping list!" });
        }
    });


app.post("/get-nutrition2", async (req, res) => {
    try {
        const { ingredients } = req.body;
        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ error: "Ingredients are required" });
        }

        const prompt = `Provide nutritional values (Calories, Protein, Fat, Carbs) for the following ingredients: ${ingredients}.`;

        // Google Gemini API request
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        let nutritionInfo = "No data found.";
        if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            nutritionInfo = response.data.candidates[0].content.parts[0].text;
        }

        res.json({ ingredients, nutritionInfo });
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch nutritional info" });
    }
});



const upload = multer({ storage: multer.memoryStorage() });

// Endpoint: Upload image -> Detect Ingredients -> Suggest Recipe
// app.post("/get-recipe-from-image", upload.single("image"), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: "Image is required" });
//         }

//         // Convert image to Base64
//         const imageBase64 = req.file.buffer.toString("base64");

//         // Prepare request for Google Gemini AI
//         const prompt = "Extract food ingredients from this image and suggest a recipe using them.";
        
//         const requestBody = {
//             contents: [
//                 {
//                     parts: [
//                         { text: prompt },
//                         { inlineData: { mimeType: "image/jpeg", data: imageBase64 } }
//                     ]
//                 }
//             ]
//         };

//         // Call Gemini AI for ingredient detection & recipe generation
//         const response = await axios.post(
//             `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//             requestBody,
//             { headers: { "Content-Type": "application/json" } }
//         );

//         // Extract AI-generated response
//         let aiResponse = "No recipe found.";
//         if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
//             aiResponse = response.data.candidates[0].content.parts[0].text;
//         }

//         res.json({ recipe: aiResponse });
//     } catch (error) {
//         console.error("Error:", error.response?.data || error.message);
//         res.status(500).json({ error: "Failed to process image and generate recipe" });
//     }
// });


// app.post("/get-recipe", upload.single("image"), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: "Image is required" });
//         }

//         // Convert image to base64 for API processing
//         const imageBase64 = req.file.buffer.toString("base64");

//         // Step 1: Extract ingredients from the image using Gemini AI
//         const ingredientPrompt = "Analyze the image and list the main food ingredients.";
//         const ingredientResponse = await axios.post(
//             `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//             {
//                 contents: [{ parts: [{ text: ingredientPrompt }, { inline_data: { mime_type: "image/jpeg", data: imageBase64 } }] }]
//             },
//             { headers: { "Content-Type": "application/json" } }
//         );

//         // Extract detected ingredients from API response
//         let detectedIngredients = ingredientResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No ingredients found.";

//         if (detectedIngredients.toLowerCase().includes("no ingredients found")) {
//             return res.status(404).json({ error: "No ingredients detected. Try a clearer image." });
//         }

//         detectedIngredients = detectedIngredients.split(",").map(ing => ing.trim());

//         // Step 2: Generate a recipe based on detected ingredients
//         const recipePrompt = `Suggest a recipe using these ingredients: ${detectedIngredients.join(", ")}. Provide the recipe name, ingredients list, and step-by-step instructions.`;
//         const recipeResponse = await axios.post(
//             `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//             {
//                 contents: [{ parts: [{ text: recipePrompt }] }]
//             },
//             { headers: { "Content-Type": "application/json" } }
//         );

//         let recipeText = recipeResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No recipe found.";

//         // Structure recipe output
//         const recipeLines = recipeText.split("\n").map(line => line.trim()).filter(line => line);
//         let recipeName = recipeLines[0] || "Unknown Recipe";
//         let ingredientsIndex = recipeLines.findIndex(line => line.toLowerCase().includes("ingredients:"));
//         let instructionsIndex = recipeLines.findIndex(line => line.toLowerCase().includes("instructions:"));

//         const ingredients = ingredientsIndex !== -1 && instructionsIndex !== -1
//             ? recipeLines.slice(ingredientsIndex + 1, instructionsIndex)
//             : [];

//         const instructions = instructionsIndex !== -1
//             ? recipeLines.slice(instructionsIndex + 1)
//             : [];

//         // Final structured JSON response
//         res.json({
//             detected_ingredients: detectedIngredients,
//             recipe_name: recipeName,
//             ingredients: ingredients,
//             instructions: instructions
//         });

//     } catch (error) {
//         console.error("Error:", error.response?.data || error.message);
//         res.status(500).json({ error: "Failed to process the image." });
//     }
// });


app.post("/get-recipe", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Image is required" });
        }

        const imageBase64 = req.file.buffer.toString("base64");

        // Step 1: Extract ingredients from image
        const ingredientPrompt = "List only the detected food ingredients from the image, without extra text.";
        const ingredientResponse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: ingredientPrompt }, { inline_data: { mime_type: "image/jpeg", data: imageBase64 } }] }]
            },
            { headers: { "Content-Type": "application/json" } }
        );

        let detectedIngredients = ingredientResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        detectedIngredients = detectedIngredients.split("\n").map(ing => ing.replace(/\*+|\s*[\(\[].*?[\)\]]\s*/g, "").trim()).filter(Boolean);

        if (detectedIngredients.length === 0) {
            return res.status(404).json({ error: "No ingredients detected. Try a clearer image." });
        }

        // Step 2: Generate a structured recipe based on detected ingredients
        const recipePrompt = `Generate a structured recipe using these ingredients: ${detectedIngredients.join(", ")}. 
        - Start with the recipe name.
        - Follow with an 'Ingredients' section listing only ingredient names.
        - Finally, provide an 'Instructions' section with step-by-step guidance.`;
        
        const recipeResponse = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: recipePrompt }] }]
            },
            { headers: { "Content-Type": "application/json" } }
        );

        let recipeText = recipeResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No recipe found.";
        const recipeLines = recipeText.split("\n").map(line => line.trim()).filter(line => line);

        // Extract recipe name
        let recipeName = recipeLines.shift() || "Unknown Recipe";

        // Extract ingredients and instructions
        let ingredientsIndex = recipeLines.findIndex(line => line.toLowerCase().includes("ingredients:"));
        let instructionsIndex = recipeLines.findIndex(line => line.toLowerCase().includes("instructions:"));

        const ingredients = ingredientsIndex !== -1 && instructionsIndex !== -1
            ? recipeLines.slice(ingredientsIndex + 1, instructionsIndex).map(ing => ing.replace(/\*+/, "").trim())
            : [];

        const instructions = instructionsIndex !== -1
            ? recipeLines.slice(instructionsIndex + 1).map(step => step.replace(/^\d+\./, "").trim())
            : [];

        // Send structured JSON response
        res.json({
            detected_ingredients: detectedIngredients,
            recipe_name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        });

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to process the image." });
    }
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

