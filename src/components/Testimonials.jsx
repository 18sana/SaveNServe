import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Food Blogger",
    review:
      "Sustainabite has completely transformed the way I think about food waste. The AI-powered recipe suggestions are spot-on, helping me create delicious meals from ingredients I already have. Love the smooth UI and ease of use!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Environmental Activist",
    review:
      "I've tried several sustainability apps, but Sustainabite stands out with its innovative food donation feature. Now, I can easily share surplus meals with people in need. It's truly a game-changer in reducing food waste!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Kapoor",
    role: "Nutritionist",
    review:
      "The smart meal planning feature is perfect for my clients who struggle with meal prep. Sustainabite helps them plan healthy meals while staying mindful of food sustainability. The real-time alerts are a brilliant touch!",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Desai",
    role: "Tech Enthusiast",
    review:
      "From the sleek design to the AI-powered insights, everything about Sustainabite is top-notch. The global food trends section keeps me updated on sustainability practices worldwide. A must-have for anyone passionate about food and the planet!",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

const Testimonials = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.h2 
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Voices of Impact
          </motion.h2>
          <motion.p 
            className="text-xl max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover how Sustainabite is revolutionizing food sustainability through the experiences of our community.
          </motion.p>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-20 w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                hoverIndex === null || hoverIndex === index ? "opacity-100" : "opacity-40"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-sm z-0"></div>
              
              <div className="relative z-10 h-full p-6 flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full border-2 border-white/20 group-hover:border-blue-400 transition-all duration-300" 
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 flex-grow">{testimonial.review}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-400">
                    {testimonial.rating.toFixed(1)}
                  </span>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-blue-400/30 rounded-2xl pointer-events-none transition-all duration-500"></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-blue-400 blur-md"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 blur-md"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute left-0 top-1/4 w-20 h-20 rounded-full bg-blue-400/10 blur-xl animate-float"></div>
        <div className="absolute right-0 bottom-1/3 w-32 h-32 rounded-full bg-emerald-400/10 blur-xl animate-float-delay"></div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Testimonials;