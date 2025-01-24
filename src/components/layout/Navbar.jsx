import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaUserGraduate,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/services", icon: <FaCode />, label: "Services" },
    { path: "/work", icon: <FaBriefcase />, label: "Work" },
    { path: "/resume", icon: <FaUserGraduate />, label: "Resume" },
    { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-light/80 backdrop-blur-xl border-b border-primary/10">
      {/* Desktop Navigation */}
      <div className="hidden md:block container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="relative group">
            {/* Animated Logo Container */}
            <div className="relative w-12 h-12">
              {/* Outer Ring with Gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ffff] to-[#9f2bff] p-[1px] animate-spin-slow">
                <div className="w-full h-full rounded-full bg-dark-light/90 backdrop-blur-sm" />
              </div>

              {/* Inner Circle with PS Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold gradient-text">PS</span>
              </div>

              {/* Glowing Effect on Hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md bg-gradient-to-r from-[#00ffff] to-[#9f2bff]" />

              {/* Animated Dots */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-[#00ffff]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear",
                  }}
                  style={{
                    top:
                      i === 0 ? 0 : i === 1 ? "50%" : i === 2 ? "100%" : "50%",
                    left:
                      i === 0 ? "50%" : i === 1 ? "100%" : i === 2 ? "50%" : 0,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          </Link>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="md:hidden">
          <div className="flex justify-between items-center px-4 py-3">
            <Link to="/" className="relative group">
              {/* Animated Logo Container */}
              <div className="relative w-12 h-12">
                {/* Outer Ring with Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ffff] to-[#9f2bff] p-[1px] animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-dark-light/90 backdrop-blur-sm" />
                </div>

                {/* Inner Circle with PS Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">PS</span>
                </div>

                {/* Glowing Effect on Hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md bg-gradient-to-r from-[#00ffff] to-[#9f2bff]" />

                {/* Animated Dots */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#00ffff]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear",
                    }}
                    style={{
                      top:
                        i === 0
                          ? 0
                          : i === 1
                          ? "50%"
                          : i === 2
                          ? "100%"
                          : "50%",
                      left:
                        i === 0
                          ? "50%"
                          : i === 1
                          ? "100%"
                          : i === 2
                          ? "50%"
                          : 0,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
            </Link>
            {/* Tech-themed toggle button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center group"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                className="text-primary text-xl"
              >
                ⚡
              </motion.div>
              {/* Animated ring */}
              <motion.div
                animate={{
                  scale: isOpen ? [1, 1.2, 1] : 1,
                  opacity: isOpen ? [0.5, 0.8, 0.5] : 0.5,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-lg border border-primary/30"
              />
            </motion.button>
          </div>

          {/* Mobile Menu with Tech Theme */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-dark-light/95 backdrop-blur-lg border-t border-primary/10"
              >
                <div className="relative py-2 px-4">
                  {/* Circuit Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <CircuitPattern />
                  </div>

                  {/* Navigation Items */}
                  <div className="grid grid-cols-3 gap-2 relative z-10">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`relative flex flex-col items-center p-3 rounded-xl ${
                            isActive(item.path)
                              ? "bg-primary/20 text-primary"
                              : "text-gray-400 hover:text-gray-200"
                          }`}
                        >
                          <motion.span
                            className="text-xl mb-1"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="text-xs">{item.label}</span>
                          {isActive(item.path) && (
                            <motion.div
                              layoutId="mobile-nav-indicator"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Decorative Elements */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 opacity-20"
                    animate={{
                      background: [
                        "linear-gradient(to right, transparent, #00ffff, transparent)",
                        "linear-gradient(to right, transparent, #ff00ff, transparent)",
                        "linear-gradient(to right, transparent, #00ffff, transparent)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </nav>
  );
};

const CircuitPattern = () => (
  <svg width="100%" height="100%" className="absolute inset-0">
    <pattern
      id="circuit-mobile"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M10 10h30v30h-30z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="25" cy="25" r="3" fill="currentColor" />
      <path d="M25 10v12M10 25h12" stroke="currentColor" strokeWidth="0.5" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#circuit-mobile)" />
  </svg>
);

export default Navbar;
