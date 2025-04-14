import { motion } from "framer-motion";

const partners = [
  { name: "EcoFund", logo: "/images/eco.png" },
  { name: "GreenFuture", logo: "/images/green.png" },
  { name: "SustainaTech", logo: "/images/sustain.png" },
  { name: "EarthCare", logo: "/images/earthcare.png" },
  { name: "NatureFirst", logo: "/images/naturefirst.png" },
  { name: "GoGreen", logo: "/images/gogreen.png" },
];

const floatingElements = new Array(20).fill(0).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 8 + Math.random() * 12,
  delay: Math.random() * 5,
  duration: 10 + Math.random() * 10,
  type: Math.random() > 0.5 ? "leaf" : "circle",
  color: `rgba(${
    Math.random() > 0.5 ? "34,197,94" : "59,130,246"
  },${0.2 + Math.random() * 0.3})`,
}));

export default function Partners() {
  return (
    <div className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Floating decorative elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ 
            y: -50,
            x: element.x,
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={{ 
            y: "100vh",
            opacity: [0, 1, 0],
            rotate: element.type === "leaf" ? 360 : 0
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${element.x}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            color: element.color,
            backgroundColor: element.type === "circle" ? element.color : "transparent",
            borderRadius: element.type === "circle" ? "50%" : "0",
            fontSize: element.type === "leaf" ? `${element.size}px` : "0",
          }}
        >
          {element.type === "leaf" ? "🍃" : ""}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-green-400 mb-2 inline-block">
              STRATEGIC ALLIANCES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Our Valued Partners
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We collaborate with visionary organizations dedicated to sustainability 
              and environmental innovation. Together, we're creating meaningful change.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Become a Partner
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Side: Partner Logos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transitionDelay={index * 0.1}
                className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-green-400/50 flex items-center justify-center transition-all duration-500"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm">TRUSTED BY INDUSTRY LEADERS</span>
            <div className="w-8 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-gray-800/50 text-sm border border-gray-700">
              Eco-Certified
            </span>
            <span className="px-4 py-2 rounded-full bg-gray-800/50 text-sm border border-gray-700">
              Sustainable Practices
            </span>
            <span className="px-4 py-2 rounded-full bg-gray-800/50 text-sm border border-gray-700">
              Green Alliance Member
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}