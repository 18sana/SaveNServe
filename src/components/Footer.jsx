"use client"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLeaf } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, color: "text-blue-500" },
    { icon: <FaInstagram />, color: "text-pink-500" },
    { icon: <FaTwitter />, color: "text-sky-400" },
    { icon: <FaYoutube />, color: "text-red-500" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { name: "FAQs", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-green-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaLeaf className="text-green-400 text-2xl" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                SustainaBite
              </h2>
            </div>
            <p className="text-gray-400 mb-6">Eat well, live sustainably. Your guide to eco-friendly meals.</p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Support & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">Get eco-friendly recipes & sustainability tips in your inbox!</p>
            
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-4 pr-12 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-2 bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg"
              >
                <FiSend className="text-lg" />
              </motion.button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-gray-400 text-sm">
              <input type="checkbox" id="consent" className="accent-green-500" />
              <label htmlFor="consent">I agree to receive emails</label>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12"
        ></motion.div>

        {/* Copyright & Bottom Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SustainaBite. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-green-400 transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-green-400 transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-green-400 transition text-sm">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}