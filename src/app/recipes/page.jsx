"use client";
import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from 'react-hot-toast';

export default function Home() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleImage(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) handleImage(file);
  };

  const handleImage = (file) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error('Please upload an image first!');
      return;
    }
    setLoading(true);
    setRecipe(null);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/get-recipe", formData);
      setRecipe(response.data);
      toast.success('Recipe generated successfully! 🎉');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to generate recipe 😢');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,150,0.15),_transparent)] mt-10"></div>
      
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold text-emerald-400 my-12 drop-shadow-lg"
      >
        Culinary Alchemist ✨
      </motion.h1>

      <motion.form 
        onSubmit={handleSubmit}
        className={`w-full max-w-2xl p-8 rounded-3xl border-2 shadow-2xl ${isDragging ? 'border-emerald-400' : 'border-gray-700'} bg-gray-800/30 backdrop-blur-lg transition-all duration-300`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="space-y-6 text-center">
          <div className="p-4 bg-emerald-500/20 rounded-xl inline-block shadow-md">
            <span className="text-4xl">📸</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">
            {preview ? 'Perfect Shot!' : 'Snap Your Ingredients'}
          </h2>
          <p className="text-gray-400">{preview ? "Ready to create magic?" : "Drag & drop or click to upload"}</p>
        </div>

        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput" />
        <motion.label htmlFor="fileInput" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="block w-full py-4 bg-gray-700/50 border border-gray-500 rounded-xl text-center text-white cursor-pointer hover:bg-gray-700 transition">
          {preview ? 'Change Image' : 'Choose File'}
        </motion.label>

        {preview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="relative aspect-square rounded-xl overflow-hidden border-2 border-gray-700 mt-4 shadow-lg">
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            <button onClick={() => { setPreview(null); setImage(null); }}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition">
              ✕
            </button>
          </motion.div>
        )}

        {preview && (
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl font-bold text-gray-900 hover:shadow-lg transition">
            {loading ? (<span className="flex items-center justify-center gap-2"><span className="animate-spin">🌀</span> Cooking Magic...</span>) : "✨ Generate Recipe"}
          </motion.button>
        )}
      </motion.form>

      <AnimatePresence>
        {recipe && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-4xl mt-12 p-8 rounded-3xl border-2 border-gray-700 bg-gray-800/50 backdrop-blur-lg shadow-xl">
            <h2 className="text-3xl font-bold text-emerald-400 text-center drop-shadow-md">{recipe.recipe_name}</h2>
            <p className="text-gray-400 text-center mt-2">AI-Generated Culinary Masterpiece</p>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Detected Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.detected_ingredients.map((ing, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-400/10 text-emerald-300 rounded-full text-sm">{ing}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Instructions</h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((step, i) => (
                    <li key={i} className="text-gray-300">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
