import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import TechBackground from "./TechBackground";
import RoboticElements from "../common/RoboticElements";
import profileImage from "../../assets/images/profile.webp";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <TechBackground />
      <RoboticElements />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="mb-8 relative"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 relative glow">
            <img
              src={profileImage}
              alt="Pubudu Shehan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/20" />
          </div>
          {/* Decorative circles */}
          <div className="absolute -inset-2 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
          <div className="absolute -inset-4 border-2 border-dashed border-secondary/20 rounded-full animate-spin-slow-reverse" />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Pubudu Shehan
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full-Stack Web Developer | Software Engineer | ICT Teacher
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Ambitious and adaptable undergraduate specializing in Software
          Technology, passionate about creating innovative solutions and pushing
          the boundaries of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://drive.google.com/file/d/1Q_Ct0kM0O7whHQ0wiZ9gIqoWnzFyVZOx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center space-x-2"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
