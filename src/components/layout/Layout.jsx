import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TechBackground from "../common/TechBackground";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
      <TechBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
