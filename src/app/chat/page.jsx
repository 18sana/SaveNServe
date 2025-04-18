// // "use client";

// // import { useState } from "react";

// // export default function Home() {
// //   const [userInput, setUserInput] = useState("");
// //   const [response, setResponse] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async () => {
// //     if (!userInput.trim()) return;
// //     setLoading(true);
// //     setResponse("");

// //     try {
// //       const res = await fetch("/api/gemini", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ userInput }),
// //       });

// //       const data = await res.json();
// //       setResponse(data.reply || "No response from Gemini AI");
// //     } catch (error) {
// //       setResponse("Error getting response.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <h1>Gemini AI Chat</h1>
// //       <input
// //         type="text"
// //         value={userInput}
// //         onChange={(e) => setUserInput(e.target.value)}
// //         placeholder="Ask something..."
// //         style={{ padding: "10px", width: "60%", marginBottom: "10px" }}
// //       />
// //       <br />
// //       <button
// //         onClick={handleSubmit}
// //         style={{
// //           padding: "10px 20px",
// //           background: "#007bff",
// //           color: "#fff",
// //           border: "none",
// //           cursor: "pointer",
// //         }}
// //         disabled={loading}
// //       >
// //         {loading ? "Loading..." : "Ask Gemini"}
// //       </button>
// //       <div style={{ marginTop: "20px", fontSize: "18px", color: "black" }}>
// //         {response && <p><strong>Response:</strong> {response}</p>}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useRef, useEffect } from "react";
// import { Bot, User, Leaf, ShoppingBasket, Send, Loader2 } from "lucide-react";

// export default function ChatPage() {
//   const [activeTab, setActiveTab] = useState("farmer");
//   const [userInput, setUserInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Sample welcome messages for each category
//   const welcomeMessages = {
//     farmer: "👋 Hello farmer! I'm here to help with crop management, market prices, weather forecasts, and sustainable farming practices. How can I assist you today?",
//     retailer: "🛒 Welcome food retailer! Ask me about food donation logistics, inventory management, tax benefits, or connecting with local food banks."
//   };

//   // Scroll to bottom of chat
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Initialize with welcome message
//   useEffect(() => {
//     setMessages([{ text: welcomeMessages[activeTab], sender: "bot" }]);
//   }, [activeTab]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!userInput.trim()) return;
    
//     const newMessage = { text: userInput, sender: "user" };
//     setMessages(prev => [...prev, newMessage]);
//     setUserInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("/api/gemini", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           userInput,
//           context: `You are an agricultural assistant helping ${activeTab === "farmer" ? "farmers" : "food retailers"}.` 
//         }),
//       });

//       const data = await res.json();
//       setMessages(prev => [...prev, { text: data.reply || "I couldn't process that request.", sender: "bot" }]);
//     } catch (error) {
//       setMessages(prev => [...prev, { text: "Error getting response. Please try again.", sender: "bot" }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-teal-50 to-green-50 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
//             AgriConnect AI Assistant
//           </h1>
//           <p className="text-lg text-green-600">
//             Smart solutions for farmers and food retailers
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex rounded-lg bg-white shadow-md overflow-hidden">
//             <button
//               onClick={() => setActiveTab("farmer")}
//               className={`px-6 py-3 flex items-center gap-2 font-medium transition-all ${activeTab === "farmer" ? "bg-green-600 text-white" : "bg-white text-green-800 hover:bg-green-50"}`}
//             >
//               <Leaf className="h-5 w-5" />
//               Farmer Assistance
//             </button>
//             <button
//               onClick={() => setActiveTab("retailer")}
//               className={`px-6 py-3 flex items-center gap-2 font-medium transition-all ${activeTab === "retailer" ? "bg-green-600 text-white" : "bg-white text-green-800 hover:bg-green-50"}`}
//             >
//               <ShoppingBasket className="h-5 w-5" />
//               Retailer Support
//             </button>
//           </div>
//         </div>

//         {/* Chat Container */}
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//           {/* Chat Header */}
//           <div className={`p-4 ${activeTab === "farmer" ? "bg-green-600" : "bg-green-700"} text-white`}>
//             <div className="flex items-center gap-3">
//               <div className={`p-2 rounded-full ${activeTab === "farmer" ? "bg-green-700" : "bg-green-800"}`}>
//                 {activeTab === "farmer" ? (
//                   <Leaf className="h-6 w-6" />
//                 ) : (
//                   <ShoppingBasket className="h-6 w-6" />
//                 )}
//               </div>
//               <div>
//                 <h2 className="font-bold text-lg">
//                   {activeTab === "farmer" ? "Farmer Support" : "Food Retailer Support"}
//                 </h2>
//                 <p className="text-sm opacity-90">
//                   {activeTab === "farmer" 
//                     ? "Ask about crops, weather, or market prices" 
//                     : "Ask about donations, logistics, or partnerships"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Messages Area */}
//           <div className="h-96 overflow-y-auto p-4 bg-gray-50">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-3/4 rounded-lg p-4 ${message.sender === "user" 
//                     ? "bg-green-100 text-green-900 rounded-br-none" 
//                     : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-200"}`}
//                 >
//                   <div className="flex items-start gap-2">
//                     {message.sender === "bot" ? (
//                       <div className="p-1 bg-green-100 rounded-full mt-1">
//                         <Bot className="h-4 w-4 text-green-600" />
//                       </div>
//                     ) : (
//                       <div className="p-1 bg-green-600 rounded-full mt-1">
//                         <User className="h-4 w-4 text-white" />
//                       </div>
//                     )}
//                     <div className="whitespace-pre-wrap">{message.text}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="flex justify-start mb-4">
//                 <div className="bg-white rounded-lg rounded-bl-none p-4 shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-2">
//                     <div className="p-1 bg-green-100 rounded-full">
//                       <Bot className="h-4 w-4 text-green-600" />
//                     </div>
//                     <Loader2 className="h-4 w-4 animate-spin text-green-600" />
//                     <span>Thinking...</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder={
//                   activeTab === "farmer" 
//                     ? "Ask about crops, weather, or market prices..." 
//                     : "Ask about food donations, logistics, or partnerships..."
//                 }
//                 className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 disabled={loading}
//               />
//               <button
//                 type="submit"
//                 disabled={loading || !userInput.trim()}
//                 className={`p-3 rounded-lg ${loading || !userInput.trim() 
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
//                   : "bg-green-600 text-white hover:bg-green-700"} transition-colors`}
//               >
//                 {loading ? (
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                 ) : (
//                   <Send className="h-5 w-5" />
//                 )}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-2 text-center">
//               {activeTab === "farmer"
//                 ? "Tip: Try asking 'What's the best crop for my region this season?'"
//                 : "Tip: Try asking 'How can I get tax benefits for food donations?'"}
//             </p>
//           </form>
//         </div>

//         {/* Feature Highlights */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//           <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
//             <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//               <Leaf className="text-green-600" />
//             </div>
//             <h3 className="font-bold text-lg text-green-800 mb-2">Farm Optimization</h3>
//             <p className="text-gray-600">
//               Get personalized advice on crop rotation, soil health, and sustainable farming practices.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
//             <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//               <ShoppingBasket className="text-green-600" />
//             </div>
//             <h3 className="font-bold text-lg text-green-800 mb-2">Donation Logistics</h3>
//             <p className="text-gray-600">
//               Learn about food preservation, transportation, and connecting with local charities.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
//             <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//               <Bot className="text-green-600" />
//             </div>
//             <h3 className="font-bold text-lg text-green-800 mb-2">Market Insights</h3>
//             <p className="text-gray-600">
//               Real-time market prices, demand forecasts, and profitable selling strategies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, User, Leaf, ShoppingBasket, Send, Loader2, Languages } from "lucide-react";

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState("farmer");
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("english"); // 'english' or 'hindi'
  const messagesEndRef = useRef(null);

  // Welcome messages for each user type and language
  const welcomeMessages = {
    farmer: {
      english: "👋 Hello farmer! I can help with crop management, market prices, weather forecasts, and sustainable farming practices. What would you like to know today?",
      hindi: "👋 नमस्ते किसान भाई! मैं फसल प्रबंधन, बाजार भाव, मौसम पूर्वानुमान और टिकाऊ खेती के बारे में मदद कर सकता हूँ। आज आप क्या जानना चाहेंगे?"
    },
    retailer: {
      english: "🛒 Welcome food retailer! I can assist with food donation logistics, inventory management, tax benefits, and connecting with local food banks."
      // Hindi not needed for retailer in this implementation
    }
  };

  // Common questions for quick start
  const quickQuestions = {
    farmer: {
      english: [
        "What's the best crop for my region this season?",
        "How can I improve soil fertility?",
        "Current market prices for tomatoes?"
      ],
      hindi: [
        "इस सीजन में मेरे क्षेत्र के लिए सबसे अच्छी फसल कौन सी है?",
        "मैं मिट्टी की उर्वरता कैसे सुधार सकता हूँ?",
        "टमाटर के वर्तमान बाजार भाव क्या हैं?"
      ]
    },
    retailer: {
      english: [
        "How do I get tax benefits for food donations?",
        "Where can I donate excess food in my area?",
        "Best practices for food preservation?"
      ]
    }
  };

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage = activeTab === "farmer" 
      ? welcomeMessages.farmer[language] 
      : welcomeMessages.retailer.english;
    
    setMessages([{ text: welcomeMessage, sender: "bot" }]);
  }, [activeTab, language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || loading) return;
    
    const newMessage = { text: userInput, sender: "user" };
    setMessages(prev => [...prev, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          userInput,
          context: `You are an agricultural assistant helping ${activeTab === "farmer" ? "a farmer" : "a food retailer"}. 
          ${language === "hindi" ? "Respond in Hindi unless asked to switch to English." : "Respond in English unless asked to switch to Hindi."}` 
        }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { text: data.reply || (language === "hindi" ? "मैं उस अनुरोध को संसाधित नहीं कर पाया।" : "I couldn't process that request."), sender: "bot" }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: language === "hindi" ? "प्रतिक्रिया प्राप्त करने में त्रुटि। कृपया पुनः प्रयास करें।" : "Error getting response. Please try again.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setUserInput(question);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !loading) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "english" ? "hindi" : "english");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-green-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto mt-20">
        {/* Header with Logo */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h1 className="text-3xl font-bold text-green-800">
              AgriConnect<span className="text-teal-600">AI</span>
            </h1>
          </div>
          <p className="text-lg text-green-600">
            Smart agricultural solutions powered by Gemini
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white shadow-md overflow-hidden border border-green-100">
            <button
              onClick={() => setActiveTab("farmer")}
              className={`px-6 py-3 flex items-center gap-2 font-medium transition-all ${activeTab === "farmer" ? "bg-green-600 text-white" : "bg-white text-green-800 hover:bg-green-50"}`}
            >
              <Leaf className="h-5 w-5" />
              Farmer Mode
            </button>
            <button
              onClick={() => {
                setActiveTab("retailer");
                setLanguage("english"); // Reset to English when switching to retailer
              }}
              className={`px-6 py-3 flex items-center gap-2 font-medium transition-all ${activeTab === "retailer" ? "bg-green-600 text-white" : "bg-white text-green-800 hover:bg-green-50"}`}
            >
              <ShoppingBasket className="h-5 w-5" />
              Retailer Mode
            </button>
          </div>
        </div>

        {/* Main Chat Container */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-green-100">
          {/* Chat Header */}
          <div className={`p-4 ${activeTab === "farmer" ? "bg-stone-500" : "bg-teal-600"} text-white flex justify-between items-center`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${activeTab === "farmer" ? "bg-green-700" : "bg-teal-700"}`}>
                {activeTab === "farmer" ? (
                  <Leaf className="h-6 w-6" />
                ) : (
                  <ShoppingBasket className="h-6 w-6" />
                )}
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {activeTab === "farmer" ? "Farmer Assistant" : "Food Retailer Assistant"}
                </h2>
                <p className="text-sm opacity-90">
                  {activeTab === "farmer" 
                    ? language === "hindi" 
                      ? "फसलों, मौसम या बाजार भाव के बारे में पूछें" 
                      : "Ask about crops, weather, or market prices"
                    : "Ask about donations, logistics, or partnerships"}
                </p>
              </div>
            </div>
            
            {/* Language Toggle Button (only for farmer mode) */}
            {activeTab === "farmer" && (
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-sm transition-colors"
              >
                <Languages className="h-4 w-4" />
                {language === "english" ? "हिंदी" : "English"}
              </button>
            )}
          </div>

          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${message.sender === "user" 
                    ? "bg-teal-600 text-white rounded-br-none" 
                    : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-200"}`}
                >
                  <div className="flex items-start gap-3">
                    {message.sender === "bot" ? (
                      <div className="p-1.5 bg-green-100 rounded-full mt-0.5">
                        <Bot className="h-4 w-4 text-green-600" />
                      </div>
                    ) : (
                      <div className="p-1.5 bg-teal-700 rounded-full mt-0.5">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div className="whitespace-pre-wrap flex-1">{message.text}</div>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white rounded-lg rounded-bl-none p-4 shadow-sm border border-gray-200 max-w-[80%]">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-green-100 rounded-full">
                      <Bot className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-green-600" />
                      <span className="text-gray-600">
                        {language === "hindi" ? "प्रतिक्रिया तैयार की जा रही है..." : "Generating response..."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-4 pt-2 pb-3 bg-gray-100 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {(activeTab === "farmer" ? quickQuestions.farmer[language] : quickQuestions.retailer.english).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs px-3 py-1.5 bg-white text-green-800 rounded-full border border-green-200 hover:bg-green-50 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  activeTab === "farmer" 
                    ? language === "hindi"
                      ? "फसलों, मौसम या बाजार भाव के बारे में पूछें..."
                      : "Ask about crops, weather, or market prices..."
                    : "Ask about food donations, logistics, or partnerships..."
                }
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !userInput.trim()}
                className={`p-3 rounded-lg flex items-center justify-center ${loading || !userInput.trim() 
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                  : "bg-green-600 text-white hover:bg-green-700"} transition-colors`}
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {activeTab === "farmer"
                ? language === "hindi"
                  ? "सुझाव: जैविक खेती तकनीक या कीट नियंत्रण विधियों के बारे में पूछें"
                  : "Tip: Ask about organic farming techniques or pest control methods"
                : "Tip: Ask about food safety regulations for donations"}
            </p>
          </form>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Leaf className="text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-green-800 mb-2">Farm Optimization</h3>
            <p className="text-gray-600">
              Get personalized advice on crop rotation, soil health, irrigation, and sustainable farming practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <ShoppingBasket className="text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-green-800 mb-2">Donation Network</h3>
            <p className="text-gray-600">
              Connect with local food banks, understand regulations, and optimize your donation process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Bot className="text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-green-800 mb-2">Real-time Insights</h3>
            <p className="text-gray-600">
              Access market prices, weather forecasts, and demand trends specific to your location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}