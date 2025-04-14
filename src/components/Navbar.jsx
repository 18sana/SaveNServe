"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Leaf, User, LogOut } from "lucide-react";

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
    { name: "Recipes", href: "/recipes" },
    { name: "Meal Plans", href: "/meal-plans" },
    { name: "Donate", href: "/donate" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-xl shadow-xl" : "bg-gray-900/80 backdrop-blur-lg"
      } transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animation */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="text-green-400 h-6 w-6" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                Sustainabite
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-600 mx-2"></div>

            {isLoggedIn ? (
              <motion.div className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <User className="h-5 w-5 text-green-400" />
                  <span className="text-white">Dashboard</span>
                </Link>
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg border border-red-500/30 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </motion.button>
              </motion.div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2 text-white hover:text-green-400 transition-colors"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link href="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
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
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4">
              {navItems.map((item) => (
                <MobileNavLink key={item.name} href={item.href} setIsOpen={setIsOpen}>
                  {item.name}
                </MobileNavLink>
              ))}

              <div className="pt-4 border-t border-gray-800">
                {isLoggedIn ? (
                  <div className="space-y-3">
                    <MobileNavLink href="/dashboard" setIsOpen={setIsOpen} className="flex items-center gap-2">
                      <User className="h-5 w-5 text-green-400" />
                      Dashboard
                    </MobileNavLink>
                    <motion.button
                      onClick={handleLogout}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg border border-red-500/30"
                    >
                      <LogOut className="h-5 w-5" />
                      Logout
                    </motion.button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/login">
                      <motion.button
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-3 text-white hover:bg-gray-800 rounded-lg border border-gray-700"
                      >
                        Login
                      </motion.button>
                    </Link>
                    <Link href="/signup">
                      <motion.button
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/20"
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
      whileHover={{ scale: 1.05 }}
      className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors"
    >
      {children}
      <motion.span
        layoutId="nav-underline"
        className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  </Link>
);

const MobileNavLink = ({ href, children, setIsOpen, className = "" }) => (
  <Link href={href} onClick={() => setIsOpen(false)}>
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white transition-colors ${className}`}
    >
      {children}
    </motion.div>
  </Link>
);