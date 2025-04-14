// // "use client";
// // import { useState } from "react";
// // import axios from "axios";
// // import { FaShoppingCart, FaUtensils, FaCheckCircle, FaLightbulb } from "react-icons/fa";
// // import { motion } from "framer-motion";

// // export default function ShoppingListPage() {
// //   const [dish, setDish] = useState("");
// //   const [shoppingList, setShoppingList] = useState([]);
// //   const [recipeSteps, setRecipeSteps] = useState([]);
// //   const [aiFact, setAiFact] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const fetchShoppingList = async () => {
// //     if (!dish.trim()) {
// //       setError("⚠ Please enter a dish name!");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await axios.post("http://localhost:5000/get-shopping-list", { dish });

// //       setShoppingList(response.data.shoppingList);
// //       setRecipeSteps(response.data.recipeSteps);
// //       setAiFact(response.data.aiFact);
// //     } catch (err) {
// //       setError("❌ Failed to generate shopping list. Try again!");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white p-6">
// //       {/* 🔥 Header Section */}
// //       <motion.div
// //         className="text-center text-4xl font-bold text-blue-400 py-6 flex justify-center items-center gap-3 mt-10"
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <FaShoppingCart className="text-yellow-400 text-5xl mt-10" />
// //         AI-Powered Shopping List
// //       </motion.div>

// //       {/* 🍽 Input Section */}
// //       <div className="flex justify-center">
// //         <motion.div
// //           className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <label className="block text-lg font-semibold mb-2">Enter Dish Name:</label>
// //           <div className="flex items-center gap-2">
// //             <FaUtensils className="text-yellow-400 text-xl" />
// //             <input
// //               type="text"
// //               placeholder="e.g., Dal Makhani"
// //               value={dish}
// //               onChange={(e) => setDish(e.target.value)}
// //               className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
// //             />
// //           </div>
// //           <button
// //             onClick={fetchShoppingList}
// //             className="w-full mt-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md transition-all duration-300 font-bold shadow-lg"
// //             disabled={loading}
// //           >
// //             {loading ? "Generating..." : "Generate Shopping List"}
// //           </button>
// //           {error && <p className="text-red-400 mt-4">{error}</p>}
// //         </motion.div>
// //       </div>

// //       {/* 📌 Shopping List & Recipe Section */}
// //       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
// //         {/* 🛒 Shopping List */}
// //         {shoppingList.length > 0 && (
// //           <motion.div
// //             className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <h2 className="text-2xl font-bold text-blue-400 mb-4">🛒 Shopping List</h2>
// //             <ul className="grid grid-cols-2 gap-4">
// //               {shoppingList.map((item, index) => (
// //                 <li
// //                   key={index}
// //                   className="bg-gray-700 p-4 rounded-md flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300"
// //                 >
// //                   <FaCheckCircle className="text-green-400" />
// //                   <span className="font-bold text-white">{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         )}

// //         {/* 🔥 Recipe Steps */}
// //         {recipeSteps.length > 0 && (
// //           <motion.div
// //             className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <h2 className="text-2xl font-bold text-green-400 mb-4">👨‍🍳 Recipe Steps</h2>
// //             <ul className="list-decimal pl-6 space-y-2">
// //               {recipeSteps.map((step, index) => (
// //                 <li
// //                   key={index}
// //                   className="bg-gray-700 p-3 rounded-md shadow-md hover:scale-105 transition-all duration-300"
// //                 >
// //                   {step}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         )}
// //       </div>

// //       {/* 💡 AI Fun Fact */}
// //       {aiFact && (
// //         <motion.div
// //           className="mt-10 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 text-center mx-auto max-w-4xl"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <div className="flex justify-center items-center gap-3">
// //             <FaLightbulb className="text-yellow-400 text-3xl" />
// //             <h3 className="text-xl font-semibold text-yellow-400">Did You Know?</h3>
// //           </div>
// //           <p className="text-white mt-2">{aiFact}</p>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { FaShoppingCart, FaUtensils, FaCheckCircle, FaLightbulb, FaInfoCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function ShoppingListPage() {
//   const [dish, setDish] = useState("");
//   const [shoppingList, setShoppingList] = useState([]);
//   const [recipeSteps, setRecipeSteps] = useState([]);
//   const [aiFact, setAiFact] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchShoppingList = async () => {
//     if (!dish.trim()) {
//       setError("⚠ Please enter a dish name!");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post("http://localhost:5000/get-shopping-list", { dish });
//       setShoppingList(response.data.shoppingList);
//       setRecipeSteps(response.data.recipeSteps);
//       setAiFact(response.data.aiFact);
//     } catch (err) {
//       setError("❌ Failed to generate shopping list. Try again!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Header Section */}
//       <motion.div
//         className="text-center text-4xl font-bold text-blue-400 py-6 flex justify-center items-center gap-3 mt-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
       
//         AI-Powered Shopping List
//       </motion.div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-12 px-4">
//         {/* Left Side - AI Explanation */}
//         <motion.div
//           className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-2xl"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <FaInfoCircle className="text-blue-400 text-3xl" />
//             <h2 className="text-2xl font-bold text-blue-400">How It Works?</h2>
//           </div>
          
//           <p className="text-gray-300 mb-4 text-lg leading-relaxed">
//             Our AI-powered shopping list generator uses advanced natural language processing to analyze recipes and create perfect shopping lists.
//           </p>
          
//           <div className="space-y-4">
//             <div className="flex items-start gap-3">
//               <div className="text-green-400 mt-1">
//                 <FaCheckCircle />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-white">Smart Parsing</h3>
//                 <p className="text-gray-400">Extracts ingredients from any recipe description</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="text-purple-400 mt-1">
//                 <FaShoppingCart />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-white">AI Optimization</h3>
//                 <p className="text-gray-400">Organizes items by category and estimates quantities</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="text-yellow-400 mt-1">
//                 <FaLightbulb />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-white">Cooking Intelligence</h3>
//                 <p className="text-gray-400">Provides pro tips and nutritional insights automatically</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side - Input Section */}
//         <motion.div
//           className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <label className="block text-lg font-semibold mb-2">Enter Dish Name:</label>
//           <div className="flex items-center gap-2">
//             <FaUtensils className="text-yellow-400 text-xl" />
//             <input
//               type="text"
//               placeholder="e.g., Dal Makhani"
//               value={dish}
//               onChange={(e) => setDish(e.target.value)}
//               className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
//             />
//           </div>
//           <button
//             onClick={fetchShoppingList}
//             className="w-full mt-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md transition-all duration-300 font-bold shadow-lg"
//             disabled={loading}
//           >
//             {loading ? "Generating..." : "Generate Shopping List"}
//           </button>
//           {error && <p className="text-red-400 mt-4">{error}</p>}
//         </motion.div>
//       </div>

//       {/* Shopping List & Recipe Section */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-7xl mx-auto">
//         {/* Shopping List */}
//         {shoppingList.length > 0 && (
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold text-blue-400 mb-4">🛒 Shopping List</h2>
//             <ul className="grid grid-cols-2 gap-4">
//               {shoppingList.map((item, index) => (
//                 <li
//                   key={index}
//                   className="bg-gray-700 p-4 rounded-md flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300"
//                 >
//                   <FaCheckCircle className="text-green-400" />
//                   <span className="font-bold text-white">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}

//         {/* Recipe Steps */}
//         {recipeSteps.length > 0 && (
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold text-green-400 mb-4">👨‍🍳 Recipe Steps</h2>
//             <ul className="list-decimal pl-6 space-y-2">
//               {recipeSteps.map((step, index) => (
//                 <li
//                   key={index}
//                   className="bg-gray-700 p-3 rounded-md shadow-md hover:scale-105 transition-all duration-300"
//                 >
//                   {step}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>

//       {/* AI Fun Fact */}
//       {aiFact && (
//         <motion.div
//           className="mt-10 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 text-center mx-auto max-w-4xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="flex justify-center items-center gap-3">
//             <FaLightbulb className="text-yellow-400 text-3xl" />
//             <h3 className="text-xl font-semibold text-yellow-400">Did You Know?</h3>
//           </div>
//           <p className="text-white mt-2">{aiFact}</p>
//         </motion.div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import axios from "axios";
import { 
  FaShoppingCart, 
  FaUtensils, 
  FaCheckCircle, 
  FaLightbulb, 
  FaInfoCircle, 
  FaBalanceScale,
  FaClock,
  FaHeartbeat,
  FaLeaf,
  FaRegStar,
  FaSeedling,
  FaFireAlt,
  FaBlender,
  FaWeightHanging
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ShoppingListPage() {
  const [dish, setDish] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [aiFact, setAiFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchShoppingList = async () => {
    if (!dish.trim()) {
      setError("Please enter a dish name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/get-shopping-list", { dish });
      setShoppingList(response.data.shoppingList);
      setRecipeSteps(response.data.recipeSteps);
      setAiFact(response.data.aiFact);
    } catch (err) {
      setError("Failed to generate shopping list. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-900/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-green-900/20 blur-3xl"></div>
      </div>

      {/* Header Section */}
      <motion.header
        className="relative z-10 text-center py-8 md:py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="inline-flex items-center gap-3 bg-gray-800/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700 shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full">
            <FaUtensils className="text-white text-xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            AI Chef Companion
          </h1>
        </motion.div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Your intelligent kitchen assistant for smarter meal planning and effortless cooking
        </p>
      </motion.header>

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
        {/* Left Side - Features */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
              <FaInfoCircle className="text-blue-400 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">Smart Kitchen Features</h2>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              className="p-5 bg-gray-700/50 rounded-xl border border-gray-600/50 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                  <FaLeaf className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Ingredient Intelligence</h3>
                  <p className="text-gray-300">
                    AI-powered analysis identifies core ingredients, suggests alternatives for dietary restrictions, and optimizes quantities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-5 bg-gray-700/50 rounded-xl border border-gray-600/50 hover:border-purple-400/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <FaWeightHanging className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Precision Portions</h3>
                  <p className="text-gray-300">
                    Automatically adjusts quantities based on serving size and cooking method with nutritional balance in mind.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-5 bg-gray-700/50 rounded-xl border border-gray-600/50 hover:border-yellow-400/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                  <FaClock className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Time Optimization</h3>
                  <p className="text-gray-300">
                    Smart scheduling suggests parallel cooking tasks and estimates total preparation time accurately.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-5 bg-gray-700/50 rounded-xl border border-gray-600/50 hover:border-red-400/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-500/20 rounded-lg border border-red-500/30">
                  <FaFireAlt className="text-red-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Cooking Techniques</h3>
                  <p className="text-gray-300">
                    Recommends optimal cooking methods based on ingredients and desired results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Input Section */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8">
            <div>
              <label className="block text-lg font-medium mb-4 text-gray-300">What would you like to cook?</label>
              <motion.div 
                className="flex items-center gap-3 bg-gray-700/70 p-4 rounded-xl border border-gray-600/50 focus-within:border-blue-400/50 transition-all"
                whileFocus={{ borderColor: "rgba(96, 165, 250, 0.5)" }}
              >
                <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <FaBlender className="text-blue-400 text-xl" />
                </div>
                <input
                  type="text"
                  placeholder="e.g., Butter Chicken, Vegan Lasagna, Sushi Rolls..."
                  value={dish}
                  onChange={(e) => setDish(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-lg placeholder-gray-500"
                  onKeyPress={(e) => e.key === 'Enter' && fetchShoppingList()}
                />
              </motion.div>
            </div>

            <motion.button
              onClick={fetchShoppingList}
              className="w-full p-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 
                       rounded-xl transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3
                       shadow-lg hover:shadow-blue-500/20 active:scale-95 border border-blue-500/30"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Crafting Your Plan...
                </>
              ) : (
                <>
                  <FaRegStar className="text-yellow-300" />
                  Generate Smart Shopping List
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {error && (
                <motion.div
                  className="p-4 bg-red-900/30 border border-red-500/30 rounded-xl text-red-300 flex gap-3 items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <FaLightbulb className="text-red-400 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {shoppingList.length > 0 && (
          <motion.div
            className="relative z-10 max-w-6xl mx-auto mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {/* Shopping List & Recipe Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Enhanced Shopping List */}
              <motion.div
                className="bg-gray-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                    <FaShoppingCart className="text-blue-400 text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{dish} Shopping List</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {shoppingList.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-700/50 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-600/50 transition-all border border-gray-600/30 hover:border-blue-400/30"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <FaCheckCircle className="text-green-400 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Detailed Recipe Steps */}
              <motion.div
                className="bg-gray-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                    <FaSeedling className="text-green-400 text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Cooking Instructions</h2>
                </div>
                
                <div className="space-y-4">
                  {recipeSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-700/50 p-5 rounded-xl border border-gray-600/30 hover:border-teal-400/30 transition-all group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-100 leading-relaxed">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Nutrition & Fun Facts */}
            {aiFact && (
              <motion.div
                className="mt-12 bg-gradient-to-r from-blue-900/30 to-teal-900/30 p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30">
                    <FaHeartbeat className="text-red-400 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Nutritional Insights & Fun Facts</h3>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {aiFact.split('\n').map((line, index) => (
                    <motion.p 
                      key={index} 
                      className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0" />
                      {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-500 text-sm mt-16 mb-8">
        <p>AI Chef Companion — Revolutionizing your kitchen experience</p>
      </footer>
    </div>
  );
}