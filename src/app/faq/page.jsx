"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiLeaf } from "react-icons/fi";

const faqs = [
  {
    question: "What is SustainaBite?",
    answer: "SustainaBite is your guide to sustainable and eco-friendly eating. We provide plant-based recipes, sustainability tips, and food choices that help you reduce your environmental impact.",
    icon: "🌱"
  },
  {
    question: "Are all recipes completely vegan?",
    answer: "Not all recipes are 100% vegan, but we focus on plant-based, organic, and eco-conscious food choices that support sustainability.",
    icon: "🥗"
  },
  {
    question: "How can I contribute to SustainaBite?",
    answer: "We welcome contributions! You can share sustainable recipes, write blog posts, or support us by engaging with our community on social media.",
    icon: "🤝"
  },
  {
    question: "Is SustainaBite free to use?",
    answer: "Yes! SustainaBite is completely free. Our goal is to educate and inspire people to make environmentally friendly food choices.",
    icon: "💚"
  },
  {
    question: "How can I contact you for collaborations?",
    answer: "We love collaborations! Reach out to us via our Contact Page or email us at contact@sustainabite.com.",
    icon: "📩"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-900/10"
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
      <section className="relative py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="inline-block mb-6"
          >
            {/* <FiLeaf className="text-6xl text-green-400" /> */}
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers about our sustainable food mission.
          </p>
        </motion.div>
      </section>

      {/* FAQ List */}
      <div className="relative max-w-4xl mx-auto px-6 pb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.02 }}
                className={`w-full flex items-center justify-between p-6 text-left rounded-xl ${openIndex === index ? 'bg-gray-800' : 'bg-gray-800/50'} backdrop-blur-sm border border-gray-700 shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{faq.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-green-400"
                >
                  <FiChevronDown className="text-xl" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-800/30 backdrop-blur-sm border-l-2 border-green-500 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're here to help! Reach out to our team for more information.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}