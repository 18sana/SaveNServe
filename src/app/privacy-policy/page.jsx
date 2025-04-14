"use client";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiMail, FiLink, FiUser, FiSettings, FiRefreshCw } from "react-icons/fi";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We may collect personal information such as your name, email address, and preferences when you subscribe to our newsletter, sign up for an account, or interact with our services.",
      icon: <FiUser className="text-green-400 text-2xl" />
    },
    {
      title: "How We Use Your Information",
      content: "Your information helps us improve our services, personalize your experience, and send you eco-friendly recipes, sustainability tips, and updates about SustainaBite.",
      icon: <FiSettings className="text-green-400 text-2xl" />
    },
    {
      title: "Data Protection & Security",
      content: "We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no online service is completely secure, so we encourage users to stay mindful of their personal data.",
      icon: <FiLock className="text-green-400 text-2xl" />
    },
    {
      title: "Cookies & Tracking Technologies",
      content: "We use cookies to enhance your browsing experience, track website analytics, and personalize content. You can manage your cookie preferences through your browser settings.",
      icon: <FiShield className="text-green-400 text-2xl" />
    },
    {
      title: "Third-Party Services",
      content: "SustainaBite may include links to third-party websites. We are not responsible for their privacy practices, so we encourage you to review their privacy policies before providing any information.",
      icon: <FiLink className="text-green-400 text-2xl" />
    },
    {
      title: "Your Rights & Choices",
      content: "You have the right to access, update, or delete your personal information. If you have any privacy concerns, please contact us at privacy@sustainabite.com.",
      icon: <FiMail className="text-green-400 text-2xl" />
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy periodically. We will notify users of any significant changes through our website or email.",
      icon: <FiRefreshCw className="text-green-400 text-2xl" />
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
            <div className="text-6xl">🔒</div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. Here's how we protect your data.
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

      {/* Policy Sections */}
      <div className="relative max-w-4xl mx-auto px-6 pb-24 space-y-8">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-green-900/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-700 rounded-lg">
                {section.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
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
              Have Privacy Concerns?
            </span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We're committed to protecting your data. Contact our privacy team with any questions.
          </p>
          <motion.a
            href="mailto:privacy@sustainabite.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
          >
            <FiMail className="inline mr-2" /> Email Our Privacy Team
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}