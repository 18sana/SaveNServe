"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiHeart, FiShield, FiUsers, FiTruck } from "react-icons/fi";

export default function FoodDonationPage() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-green-500/10 to-teal-400/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[url('/food-bg.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/70 to-gray-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(5,20,15,0.8)_70%)]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="text-green-400 text-5xl mb-4">🍲</div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Share a Meal,
            </span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Change a Life
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our movement to eliminate hunger and food waste. Every donation creates ripples of change in our community.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dodonate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center gap-2"
              >
                Start Donating <FiArrowRight className="text-lg" />
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800/50 border border-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-gray-700/20 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="animate-bounce w-8 h-8 border-4 border-gray-400 rounded-full"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                Our Impact
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "10M+", label: "Meals Donated", icon: <FiHeart className="text-3xl text-pink-400" /> },
              { number: "500+", label: "NGO Partnerships", icon: <FiUsers className="text-3xl text-blue-400" /> },
              { number: "95%", label: "Food Utilization", icon: <FiShield className="text-3xl text-green-400" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-2 shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-800 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900/50 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
                Why Donate Food?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Reduce Waste", 
                text: "Prevent excess food from going to waste and feed those in need instead of landfills.",
                icon: "♻️",
                color: "from-green-400 to-teal-400"
              },
              { 
                title: "Feed the Hungry", 
                text: "Provide nutritious meals to struggling families and individuals in your community.",
                icon: "🍽️",
                color: "from-amber-400 to-yellow-400"
              },
              { 
                title: "Make an Impact", 
                text: "Your small act of kindness can create lasting change in someone's life.",
                icon: "✨",
                color: "from-purple-400 to-pink-400"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-all duration-500 via-transparent from-gray-800 to-gray-900"></div>
                <div className="relative z-10 p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-green-400/30 transition-all duration-300">
                  <div className={`text-5xl mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${item.color} text-white`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                How It Works
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800 -ml-0.5"></div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-16 md:space-y-0"
            >
              {[
                { 
                  step: "1", 
                  title: "List Your Food", 
                  text: "Enter details of surplus food you wish to donate through our simple form.", 
                  icon: <FiTruck className="text-2xl" />,
                  direction: "left"
                },
                { 
                  step: "2", 
                  title: "Connect with NGOs", 
                  text: "Local charities and food banks will be instantly notified about your donation.", 
                  icon: <FiUsers className="text-2xl" />,
                  direction: "right"
                },
                { 
                  step: "3", 
                  title: "Create Impact", 
                  text: "Your contribution gets distributed to those who need it most in your community.", 
                  icon: <FiHeart className="text-2xl" />,
                  direction: "left"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`relative flex flex-col md:flex-row items-center ${item.direction === 'left' ? 'md:text-right' : 'md:text-left'}`}
                >
                  {/* For desktop */}
                  <div className={`hidden md:block w-1/2 ${item.direction === 'left' ? 'pr-10' : 'pl-10'} ${item.direction === 'left' ? 'order-1' : 'order-2'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`p-6 rounded-xl bg-gradient-to-br ${item.direction === 'left' ? 'from-gray-800 to-gray-900' : 'from-gray-900 to-gray-800'} border border-gray-800 shadow-lg`}
                    >
                      <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.text}</p>
                    </motion.div>
                  </div>
                  
                  {/* Step circle */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl shadow-lg z-10 mx-auto order-1">
                    {item.step}
                  </div>
                  
                  {/* For mobile */}
                  <div className="md:hidden w-full mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 pl-16">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-gray-950 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Voices of Change
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                name: "Amit Kumar", 
                role: "Restaurant Owner",
                quote: "Donating surplus food has never been easier! This platform streamlined our donation process while helping our community.", 
                bg: "bg-gradient-to-br from-gray-900 to-gray-800"
              },
              { 
                name: "Sneha Roy", 
                role: "NGO Volunteer",
                quote: "This innovative solution connects those in need with surplus food efficiently, reducing waste and hunger simultaneously.", 
                bg: "bg-gradient-to-br from-gray-800 to-gray-900"
              },
              { 
                name: "Rahul Mehta", 
                role: "Community Leader",
                quote: "A revolutionary approach to food distribution that benefits everyone involved. Truly making a difference!", 
                bg: "bg-gradient-to-br from-gray-900 to-gray-800"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`${testimonial.bg} p-8 rounded-2xl border border-gray-800 hover:border-pink-400/30 transition-all duration-300 hover:-translate-y-2 shadow-xl`}
              >
                <div className="mb-6 text-yellow-400 text-4xl">"</div>
                <p className="text-gray-300 italic text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl border border-gray-800 shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
                Ready to Make a Difference?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of others who are transforming surplus food into hope and nourishment for those in need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dodonate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  Start Donating Now <FiArrowRight className="text-lg" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800/50 border border-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-gray-700/20 transition-all duration-300"
                >
                  Learn About Our Mission
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}