"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Truck, User, LogOut } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push("/");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Surplus", href: "/surplus" },
    { name: "Connect", href: "/connect" },
    { name: "Donate", href: "/donate" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-sm" : "bg-white/90 backdrop-blur-lg"
      } transition-all duration-300 border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-2">
              <Truck className="text-teal-600 h-7 w-7" />
              <span className="text-2xl font-bold text-gray-900">
                Save<span className="text-teal-600">NServe</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {isLoggedIn ? (
              <motion.div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-1.5 rounded-full bg-teal-50 group-hover:bg-teal-100 transition-colors">
                    <User className="h-4 w-4 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Dashboard</span>
                </Link>
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </motion.button>
              </motion.div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2 text-gray-600 hover:text-teal-600 transition-colors font-medium"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link href="/signup">
                  <motion.button
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 4px 14px rgba(13, 148, 136, 0.2)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-medium"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <MobileNavLink key={item.name} href={item.href} setIsOpen={setIsOpen}>
                  {item.name}
                </MobileNavLink>
              ))}

              <div className="pt-2 border-t border-gray-100 mt-2">
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <MobileNavLink 
                      href="/dashboard" 
                      setIsOpen={setIsOpen} 
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="p-1.5 rounded-full bg-teal-50">
                        <User className="h-4 w-4 text-teal-600" />
                      </div>
                      Dashboard
                    </MobileNavLink>
                    <motion.button
                      onClick={handleLogout}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg font-medium"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </motion.button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link href="/login">
                      <motion.button
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                      >
                        Login
                      </motion.button>
                    </Link>
                    <Link href="/signup">
                      <motion.button
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium"
                      >
                        Sign Up
                      </motion.button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative px-4 py-2 text-gray-600 hover:text-teal-600 transition-colors font-medium"
    >
      {children}
      <motion.span
        layoutId="nav-underline"
        className="absolute left-1/2 bottom-1.5 h-0.5 w-0 bg-teal-600 rounded-full"
        initial={{ width: 0, x: "-50%" }}
        whileHover={{ width: "60%", x: "-50%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  </Link>
);

const MobileNavLink = ({ href, children, setIsOpen, className = "" }) => (
  <Link href={href} onClick={() => setIsOpen(false)}>
    <motion.div
      whileTap={{ scale: 0.98 }}
      className={`px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors font-medium ${className}`}
    >
      {children}
    </motion.div>
  </Link>
);