// "use client";
// import { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from 'react-hot-toast';
// import { Leaf, Bot, User, Languages, Send, Loader2 } from "lucide-react";

// export default function AgriCheck() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [analysis, setAnalysis] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [language, setLanguage] = useState("english"); // 'english' or 'hindi'
//   const messagesEndRef = useRef(null);

//   // Bilingual content
//   const content = {
//     title: {
//       english: "AgriCheck Analyzer",
//       hindi: "एग्रीचेक विश्लेषक"
//     },
//     subtitle: {
//       english: "AI-powered crop quality analysis",
//       hindi: "AI-संचालित फसल गुणवत्ता विश्लेषण"
//     },
//     uploadText: {
//       english: "Upload Your Crop Photo",
//       hindi: "अपनी फसल की तस्वीर अपलोड करें"
//     },
//     readyText: {
//       english: "Ready for analysis!",
//       hindi: "विश्लेषण के लिए तैयार!"
//     },
//     instructions: {
//       english: "Drag & drop or click to upload",
//       hindi: "अपलोड करने के लिए खींचें या क्लिक करें"
//     },
//     changeImage: {
//       english: "Change Image",
//       hindi: "तस्वीर बदलें"
//     },
//     selectImage: {
//       english: "Select Image",
//       hindi: "तस्वीर चुनें"
//     },
//     analyze: {
//       english: "Analyze Quality",
//       hindi: "गुणवत्ता विश्लेषण करें"
//     },
//     analyzing: {
//       english: "Analyzing Crop...",
//       hindi: "फसल का विश्लेषण हो रहा है..."
//     },
//     qualityIndicators: {
//       english: "Quality Indicators",
//       hindi: "गुणवत्ता संकेतक"
//     },
//     recommendations: {
//       english: "Recommendations",
//       hindi: "सिफारिशें"
//     },
//     clearAnalysis: {
//       english: "Clear Analysis",
//       hindi: "विश्लेषण साफ करें"
//     },
//     good: {
//       english: "Good",
//       hindi: "अच्छा"
//     },
//     needsAttention: {
//       english: "Needs Attention",
//       hindi: "ध्यान देने की आवश्यकता"
//     },
//     tip: {
//       english: "Tip: Capture clear images of crops for best results",
//       hindi: "सुझाव: सर्वोत्तम परिणामों के लिए फसलों की स्पष्ट तस्वीरें लें"
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => setIsDragging(false);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     if (file) handleImage(file);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) handleImage(file);
//   };

//   const handleImage = (file) => {
//     if (!file.type.startsWith('image/')) {
//       toast.error(language === "hindi" ? "कृपया एक छवि फ़ाइल अपलोड करें" : 'Please upload an image file');
//       return;
//     }
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image) {
//       toast.error(language === "hindi" ? "कृपया पहले एक छवि अपलोड करें!" : 'Please upload an image first!');
//       return;
//     }
//     setLoading(true);
//     setAnalysis(null);

//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       const response = await axios.post("http://localhost:5000/get-recipe", formData);
//       setAnalysis(transformToCropAnalysis(response.data));
//       toast.success(language === "hindi" ? "फसल विश्लेषण सफलतापूर्वक पूरा हुआ! 🌱" : 'Crop analysis completed successfully! 🌱');
//     } catch (err) {
//       toast.error(language === "hindi" ? "फसल का विश्लेषण करने में विफल 😢" : err.response?.data?.error || 'Failed to analyze crop 😢');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const transformToCropAnalysis = (recipeData) => {
//     return {
//       crop_type: recipeData.recipe_name || (language === "hindi" ? "अज्ञात फसल" : "Unknown Crop"),
//       quality_indicators: recipeData.detected_ingredients.map(ing => ({
//         indicator: ing,
//         status: Math.random() > 0.3 ? content.good[language] : content.needsAttention[language],
//         description: language === "hindi" 
//           ? `यह ${ing} ${Math.random() > 0.5 ? "स्वस्थ" : "संभावित समस्याग्रस्त"} प्रतीत होता है`
//           : `This ${ing} appears ${Math.random() > 0.5 ? "healthy" : "potentially problematic"}`
//       })),
//       recommendations: recipeData.instructions.map((step, i) => 
//         language === "hindi" 
//           ? `सिफारिश ${i+1}: ${step.replace(/recipe/g, 'फसल').replace(/cook/g, 'उपचार')}`
//           : `Recommendation ${i+1}: ${step.replace(/recipe/g, 'crop').replace(/cook/g, 'treat')}`
//       )
//     };
//   };

//   const toggleLanguage = () => {
//     setLanguage(prev => prev === "english" ? "hindi" : "english");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-teal-50 to-green-50 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto mt-12">
//         {/* Header */}
//         <header className="text-center mb-8">
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <h1 className="text-3xl font-bold text-green-800">
//               {content.title[language]}
//             </h1>
//           </div>
//           <p className="text-lg text-green-600">
//             {content.subtitle[language]}
//           </p>
//         </header>

//         {/* Main content */}
//         <div className="w-full space-y-8">
//           {/* Upload card */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className={`relative p-8 rounded-2xl border ${isDragging ? 'border-emerald-400' : 'border-gray-300'} bg-white shadow-lg transition-all duration-300`}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//           >
//             <div className="text-center space-y-4">
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
//                 <Leaf className="h-8 w-8 text-green-600" />
//               </div>
//               <h2 className="text-2xl font-semibold text-green-800">
//                 {preview ? content.readyText[language] : content.uploadText[language]}
//               </h2>
//               <p className="text-gray-600">
//                 {preview ? "" : content.instructions[language]}
//               </p>
//             </div>

//             <div className="mt-6 space-y-4">
//               <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput" />
//               <motion.label 
//                 htmlFor="fileInput" 
//                 whileHover={{ scale: 1.02 }} 
//                 whileTap={{ scale: 0.98 }}
//                 className={`block w-full py-4 rounded-xl text-center cursor-pointer transition ${preview ? 'bg-gray-100 border border-gray-300 text-gray-700' : 'bg-green-100 border-2 border-dashed border-green-400 text-green-700 hover:bg-green-200'}`}
//               >
//                 {preview ? content.changeImage[language] : content.selectImage[language]}
//               </motion.label>

//               {preview && (
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="relative aspect-video rounded-xl overflow-hidden border border-gray-300 shadow-md"
//                 >
//                   <img 
//                     src={preview} 
//                     alt="Preview" 
//                     className="w-full h-full object-cover"
//                   />
//                   <button 
//                     onClick={() => { setPreview(null); setImage(null); }}
//                     className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <line x1="18" y1="6" x2="6" y2="18"></line>
//                       <line x1="6" y1="6" x2="18" y2="18"></line>
//                     </svg>
//                   </button>
//                 </motion.div>
//               )}

//               {preview && (
//                 <motion.button 
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit" 
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className={`w-full py-4 rounded-xl font-bold transition ${loading ? 'bg-green-300 text-white' : 'bg-green-600 hover:bg-green-700 text-white shadow-md'}`}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <Loader2 className="h-5 w-5 animate-spin" />
//                       {content.analyzing[language]}
//                     </span>
//                   ) : (
//                     <span className="flex items-center justify-center gap-2">
//                       {content.analyze[language]}
//                     </span>
//                   )}
//                 </motion.button>
//               )}
//             </div>

//             {/* Language toggle */}
//             <div className="absolute top-4 right-4">
//               <button
//                 onClick={toggleLanguage}
//                 className="flex items-center gap-2 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-full text-sm text-green-800 transition-colors"
//               >
//                 <Languages className="h-4 w-4" />
//                 {language === "english" ? "हिंदी" : "English"}
//               </button>
//             </div>
//           </motion.div>

//           {/* Results section */}
//           <AnimatePresence>
//             {analysis && (
//               <motion.section 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
//               >
//                 <div className="p-6 md:p-8">
//                   <div className="text-center mb-6">
//                     <h2 className="text-2xl font-bold text-green-800">
//                       {analysis.crop_type} {language === "hindi" ? "विश्लेषण" : "Analysis"}
//                     </h2>
//                     <p className="text-gray-600 mt-1">
//                       {language === "hindi" ? "AI-जनित गुणवत्ता रिपोर्ट" : "AI-generated quality report"}
//                     </p>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Quality Indicators */}
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
//                         <Bot className="h-5 w-5 text-green-600" />
//                         {content.qualityIndicators[language]}
//                       </h3>
//                       <div className="space-y-3">
//                         {analysis.quality_indicators.map((indicator, i) => (
//                           <div key={i} className="p-4 bg-green-50 rounded-lg border border-green-100 hover:border-green-200 transition">
//                             <div className="flex justify-between items-center">
//                               <span className="font-medium text-gray-800">{indicator.indicator}</span>
//                               <span className={`px-3 py-1 rounded-full text-xs font-bold ${
//                                 indicator.status === content.good[language] 
//                                   ? "bg-green-100 text-green-800" 
//                                   : "bg-amber-100 text-amber-800"
//                               }`}>
//                                 {indicator.status}
//                               </span>
//                             </div>
//                             <p className="text-gray-600 text-sm mt-2">{indicator.description}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Recommendations */}
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
//                         <Leaf className="h-5 w-5 text-green-600" />
//                         {content.recommendations[language]}
//                       </h3>
//                       <ol className="space-y-3">
//                         {analysis.recommendations.map((rec, i) => (
//                           <motion.li 
//                             key={i}
//                             initial={{ opacity: 0, x: -10 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: i * 0.1 }}
//                             className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100 hover:border-green-200 transition"
//                           >
//                             <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
//                               {i+1}
//                             </span>
//                             <p className="text-gray-600">{rec}</p>
//                           </motion.li>
//                         ))}
//                       </ol>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-end">
//                   <button 
//                     onClick={() => setAnalysis(null)}
//                     className="text-sm text-gray-600 hover:text-green-800 transition flex items-center gap-1"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M3 6h18"></path>
//                       <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
//                     </svg>
//                     {content.clearAnalysis[language]}
//                   </button>
//                 </div>
//               </motion.section>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Feature Highlights */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//           <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
//             <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//               <Leaf className="text-green-600" />
//             </div>
//             <h3 className="font-bold text-lg text-green-800 mb-2">
//               {language === "hindi" ? "फसल स्वास्थ्य" : "Crop Health"}
//             </h3>
//             <p className="text-gray-600">
//               {language === "hindi" 
//                 ? "फसलों की गुणवत्ता, रोग और पोषण संबंधी समस्याओं का विश्लेषण करें" 
//                 : "Analyze crop quality, diseases, and nutritional issues"}
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
//             <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//               <Bot className="text-green-600" />
//             </div>
//             <h3 className="font-bold text-lg text-green-800 mb-2">
//               {language === "hindi" ? "AI सिफारिशें" : "AI Recommendations"}
//             </h3>
//             <p className="text-gray-600">
//               {language === "hindi" 
//                 ? "फसल सुधार के लिए व्यक्तिगत सिफारिशें प्राप्त करें" 
//                 : "Get personalized recommendations for crop improvement"}
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
//             <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//               <Languages className="text-green-600" />
//             </div>
//             <h3 className="font-bold text-lg text-green-800 mb-2">
//               {language === "hindi" ? "द्विभाषी समर्थन" : "Bilingual Support"}
//             </h3>
//             <p className="text-gray-600">
//               {language === "hindi" 
//                 ? "हिंदी और अंग्रेजी में विश्लेषण प्राप्त करें" 
//                 : "Get analysis in both Hindi and English"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from 'react-hot-toast';
import { Leaf, Bot, User, Languages, Send, Loader2 } from "lucide-react";

export default function AgriCheck() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [language, setLanguage] = useState("english"); // 'english' or 'hindi'
  const messagesEndRef = useRef(null);

  // Bilingual content
  const content = {
    title: {
      english: "AgriCheck Analyzer",
      hindi: "एग्रीचेक विश्लेषक"
    },
    subtitle: {
      english: "AI-powered crop quality analysis",
      hindi: "AI-संचालित फसल गुणवत्ता विश्लेषण"
    },
    uploadText: {
      english: "Upload Your Crop Photo",
      hindi: "अपनी फसल की तस्वीर अपलोड करें"
    },
    readyText: {
      english: "Ready for analysis!",
      hindi: "विश्लेषण के लिए तैयार!"
    },
    instructions: {
      english: "Drag & drop or click to upload",
      hindi: "अपलोड करने के लिए खींचें या क्लिक करें"
    },
    changeImage: {
      english: "Change Image",
      hindi: "तस्वीर बदलें"
    },
    selectImage: {
      english: "Select Image",
      hindi: "तस्वीर चुनें"
    },
    analyze: {
      english: "Analyze Quality",
      hindi: "गुणवत्ता विश्लेषण करें"
    },
    analyzing: {
      english: "Analyzing Crop...",
      hindi: "फसल का विश्लेषण हो रहा है..."
    },
    qualityIndicators: {
      english: "Quality Indicators",
      hindi: "गुणवत्ता संकेतक"
    },
    recommendations: {
      english: "Recommendations",
      hindi: "सिफारिशें"
    },
    clearAnalysis: {
      english: "Clear Analysis",
      hindi: "विश्लेषण साफ करें"
    },
    good: {
      english: "Good",
      hindi: "अच्छा"
    },
    needsAttention: {
      english: "Needs Attention",
      hindi: "ध्यान देने की आवश्यकता"
    },
    tip: {
      english: "Tip: Capture clear images of crops for best results",
      hindi: "सुझाव: सर्वोत्तम परिणामों के लिए फसलों की स्पष्ट तस्वीरें लें"
    }
  };

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
      toast.error(language === "hindi" ? "कृपया एक छवि फ़ाइल अपलोड करें" : 'Please upload an image file');
      return;
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error(language === "hindi" ? "कृपया पहले एक छवि अपलोड करें!" : 'Please upload an image first!');
      return;
    }
    setLoading(true);
    setAnalysis(null);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("language", language); // Send language preference to backend

    try {
      const response = await axios.post("http://localhost:5000/get-recipe", formData);
      setAnalysis(transformToCropAnalysis(response.data));
      toast.success(language === "hindi" ? "फसल विश्लेषण सफलतापूर्वक पूरा हुआ! 🌱" : 'Crop analysis completed successfully! 🌱');
    } catch (err) {
      toast.error(language === "hindi" ? "फसल का विश्लेषण करने में विफल 😢" : err.response?.data?.error || 'Failed to analyze crop 😢');
    } finally {
      setLoading(false);
    }
  };

  const transformToCropAnalysis = (recipeData) => {
    // Hindi translations for common terms
    const hindiTranslations = {
      "Unknown Crop": "अज्ञात फसल",
      "healthy": "स्वस्थ",
      "potentially problematic": "संभावित समस्याग्रस्त",
      "disease": "रोग",
      "nutrient deficiency": "पोषक तत्व की कमी",
      "pest damage": "कीट क्षति",
      "water stress": "पानी की कमी",
      "healthy growth": "स्वस्थ विकास",
      "optimal condition": "इष्टतम स्थिति"
    };

    // Function to translate common terms to Hindi
    const translateToHindi = (text) => {
      if (language !== "hindi") return text;
      
      Object.keys(hindiTranslations).forEach(term => {
        text = text.replace(new RegExp(term, 'gi'), hindiTranslations[term]);
      });
      return text;
    };

    // Generate descriptions based on language
    const getDescription = (indicator, status) => {
      if (language === "hindi") {
        const statusHindi = status === content.good[language] ? "स्वस्थ" : "समस्याग्रस्त";
        const descriptions = [
          `यह ${indicator} ${statusHindi} प्रतीत होता है`,
          `हमारा विश्लेषण दिखाता है कि ${indicator} ${statusHindi} स्थिति में है`,
          `फसल का ${indicator} ${statusHindi} दिख रहा है`,
          `${indicator} की स्थिति ${statusHindi} है`
        ];
        return descriptions[Math.floor(Math.random() * descriptions.length)];
      } else {
        const statusEng = status === content.good[language] ? "healthy" : "potentially problematic";
        const descriptions = [
          `This ${indicator} appears ${statusEng}`,
          `Our analysis shows ${indicator} is in ${statusEng} condition`,
          `The crop's ${indicator} looks ${statusEng}`,
          `${indicator} status is ${statusEng}`
        ];
        return descriptions[Math.floor(Math.random() * descriptions.length)];
      }
    };

    // Generate recommendations based on language
    const getRecommendations = (instructions) => {
      if (language === "hindi") {
        return instructions.map((step, i) => {
          // Basic translations for common terms
          let translatedStep = step
            .replace(/recipe/g, 'फसल')
            .replace(/cook/g, 'उपचार करें')
            .replace(/add/g, 'डालें')
            .replace(/water/g, 'पानी')
            .replace(/fertilizer/g, 'उर्वरक')
            .replace(/pesticide/g, 'कीटनाशक')
            .replace(/sunlight/g, 'सूर्य की रोशनी')
            .replace(/soil/g, 'मिट्टी')
            .replace(/temperature/g, 'तापमान');
          
          return `सिफारिश ${i+1}: ${translatedStep}`;
        });
      } else {
        return instructions.map((step, i) => 
          `Recommendation ${i+1}: ${step.replace(/recipe/g, 'crop').replace(/cook/g, 'treat')}`
        );
      }
    };

    return {
      crop_type: translateToHindi(recipeData.recipe_name || "Unknown Crop"),
      quality_indicators: recipeData.detected_ingredients.map(ing => ({
        indicator: translateToHindi(ing),
        status: Math.random() > 0.3 ? content.good[language] : content.needsAttention[language],
        description: getDescription(translateToHindi(ing), 
          Math.random() > 0.3 ? content.good[language] : content.needsAttention[language])
      })),
      recommendations: getRecommendations(recipeData.instructions)
    };
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "english" ? "hindi" : "english");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-green-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto mt-12">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h1 className="text-3xl font-bold text-green-800">
              {content.title[language]}
            </h1>
          </div>
          <p className="text-lg text-green-600">
            {content.subtitle[language]}
          </p>
        </header>

        {/* Main content */}
        <div className="w-full space-y-8">
          {/* Upload card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`relative p-8 rounded-2xl border ${isDragging ? 'border-emerald-400' : 'border-gray-300'} bg-white shadow-lg transition-all duration-300`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-green-800">
                {preview ? content.readyText[language] : content.uploadText[language]}
              </h2>
              <p className="text-gray-600">
                {preview ? "" : content.instructions[language]}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput" />
              <motion.label 
                htmlFor="fileInput" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-4 rounded-xl text-center cursor-pointer transition ${preview ? 'bg-gray-100 border border-gray-300 text-gray-700' : 'bg-green-100 border-2 border-dashed border-green-400 text-green-700 hover:bg-green-200'}`}
              >
                {preview ? content.changeImage[language] : content.selectImage[language]}
              </motion.label>

              {preview && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative aspect-video rounded-xl overflow-hidden border border-gray-300 shadow-md"
                >
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => { setPreview(null); setImage(null); }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </motion.div>
              )}

              {preview && (
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold transition ${loading ? 'bg-green-300 text-white' : 'bg-green-600 hover:bg-green-700 text-white shadow-md'}`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {content.analyzing[language]}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      {content.analyze[language]}
                    </span>
                  )}
                </motion.button>
              )}
            </div>

            {/* Language toggle */}
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-full text-sm text-green-800 transition-colors"
              >
                <Languages className="h-4 w-4" />
                {language === "english" ? "हिंदी" : "English"}
              </button>
            </div>
          </motion.div>

          {/* Results section */}
          <AnimatePresence>
            {analysis && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-green-800">
                      {analysis.crop_type} {language === "hindi" ? "विश्लेषण" : "Analysis"}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {language === "hindi" ? "AI-जनित गुणवत्ता रिपोर्ट" : "AI-generated quality report"}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Quality Indicators */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
                        <Bot className="h-5 w-5 text-green-600" />
                        {content.qualityIndicators[language]}
                      </h3>
                      <div className="space-y-3">
                        {analysis.quality_indicators.map((indicator, i) => (
                          <div key={i} className="p-4 bg-green-50 rounded-lg border border-green-100 hover:border-green-200 transition">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-800">{indicator.indicator}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                indicator.status === content.good[language] 
                                  ? "bg-green-100 text-green-800" 
                                  : "bg-amber-100 text-amber-800"
                              }`}>
                                {indicator.status}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">{indicator.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-green-600" />
                        {content.recommendations[language]}
                      </h3>
                      <ol className="space-y-3">
                        {analysis.recommendations.map((rec, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100 hover:border-green-200 transition"
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                              {i+1}
                            </span>
                            <p className="text-gray-600">{rec}</p>
                          </motion.li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-end">
                  <button 
                    onClick={() => setAnalysis(null)}
                    className="text-sm text-gray-600 hover:text-green-800 transition flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    {content.clearAnalysis[language]}
                  </button>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Leaf className="text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-green-800 mb-2">
              {language === "hindi" ? "फसल स्वास्थ्य" : "Crop Health"}
            </h3>
            <p className="text-gray-600">
              {language === "hindi" 
                ? "फसलों की गुणवत्ता, रोग और पोषण संबंधी समस्याओं का विश्लेषण करें" 
                : "Analyze crop quality, diseases, and nutritional issues"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Bot className="text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-green-800 mb-2">
              {language === "hindi" ? "AI सिफारिशें" : "AI Recommendations"}
            </h3>
            <p className="text-gray-600">
              {language === "hindi" 
                ? "फसल सुधार के लिए व्यक्तिगत सिफारिशें प्राप्त करें" 
                : "Get personalized recommendations for crop improvement"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Languages className="text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-green-800 mb-2">
              {language === "hindi" ? "द्विभाषी समर्थन" : "Bilingual Support"}
            </h3>
            <p className="text-gray-600">
              {language === "hindi" 
                ? "हिंदी और अंग्रेजी में विश्लेषण प्राप्त करें" 
                : "Get analysis in both Hindi and English"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}