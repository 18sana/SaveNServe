"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

// Team Member Data
const teamMembers = [
  {
    name: "Sajal Mishra",
    role: "Founder & Chief Architect",
    image: "/images/sajal.jpg",
    bio: "Leads the technological vision of SustainaBite, designing and developing the platform with full-stack expertise.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Sana Asiwal",
    role: "Sustainability Strategist",
    image: "/sana.jpg",
    bio: "Drives the sustainability mission, curating content that educates users about eco-friendly practices.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Shailendra Khatri",
    role: "Operations Lead",
    image: "/shailendra.jpg",
    bio: "Manages operations and fosters community growth, connecting with sustainability enthusiasts.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Shivani Agrawal",
    role: "Marketing Director",
    image: "/shivani.jpg",
    bio: "Spreads our vision through digital marketing, engaging audiences and building brand awareness.",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
];

export default function Team() {
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
            <div className="text-6xl">🌿</div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Meet Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The passionate minds integrating technology and sustainability for a better future.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-green-900/20 transition-all duration-300"
          >
            {/* Profile Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-green-400 mt-1">{member.role}</p>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">{member.bio}</p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-4">
                <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                  <FiGithub className="text-lg" />
                </a>
                <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                  <FiLinkedin className="text-lg" />
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                  <FiTwitter className="text-lg" />
                </a>
                <a href={member.social.email} className="text-gray-400 hover:text-white transition-colors">
                  <FiMail className="text-lg" />
                </a>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join Us CTA */}
      <section className="relative py-16 px-6 text-center bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-700 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
                Join Our Mission
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to help build a sustainable future.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              Explore Opportunities
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}