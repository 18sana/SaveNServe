"use client";
import { motion } from "framer-motion";
import { FiCheck, FiAlertTriangle, FiLink, FiShield, FiUser, FiTerminal, FiMail, FiLock } from "react-icons/fi";

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using SustainaBite, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.",
      icon: <FiCheck className="text-green-400 text-2xl" />
    },
    {
      title: "User Responsibilities",
      content: "You agree to use SustainaBite responsibly, avoiding any misuse of content, unauthorized data extraction, or actions that violate our policies.",
      icon: <FiUser className="text-green-400 text-2xl" />
    },
    {
      title: "Content Ownership",
      content: "All content on SustainaBite, including text, images, and recipes, is owned by us or our contributors. Unauthorized reproduction or distribution is prohibited.",
      icon: <FiShield className="text-green-400 text-2xl" />
    },
    {
      title: "Account & Security",
      content: "Users are responsible for maintaining the confidentiality of their account information. Any suspicious activity should be reported immediately.",
      icon: <FiLock className="text-green-400 text-2xl" />
    },
    {
      title: "Third-Party Links",
      content: "Our platform may contain links to third-party websites. We are not responsible for their content or privacy practices.",
      icon: <FiLink className="text-green-400 text-2xl" />
    },
    {
      title: "Termination of Service",
      content: "We reserve the right to suspend or terminate user access if any violation of these terms is detected.",
      icon: <FiTerminal className="text-green-400 text-2xl" />
    },
    {
      title: "Disclaimer of Warranties",
      content: "SustainaBite is provided 'as is' without warranties of any kind. We do not guarantee uninterrupted service or error-free content.",
      icon: <FiAlertTriangle className="text-green-400 text-2xl" />
    },
    {
      title: "Limitation of Liability",
      content: "SustainaBite shall not be liable for any direct, indirect, or incidental damages resulting from the use of our platform.",
      icon: <FiAlertTriangle className="text-green-400 text-2xl" />
    },
    {
      title: "Changes to These Terms",
      content: "We may update these terms periodically. Continued use of SustainaBite after changes means you accept the new terms.",
      // icon: <FiRefreshCw className="text-green-400 text-2xl" />
    }
  ];

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
            <div className="text-6xl">📜</div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using SustainaBite.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-500 mt-4"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </motion.div>
      </section>

      {/* Terms Sections */}
      <div className="relative max-w-4xl mx-auto px-6 pb-24 space-y-6">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-green-900/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-700 rounded-lg">
                {section.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
                    {section.title}
                  </span>
                </h2>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Need Clarification?
            </span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact our support team if you have any questions about these terms.
          </p>
          <motion.a
            href="mailto:support@sustainabite.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
          >
            <FiMail className="inline mr-2" /> Contact Support
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}