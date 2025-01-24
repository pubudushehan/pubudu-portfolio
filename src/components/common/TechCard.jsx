import { motion } from "framer-motion";

const TechCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative group ${className}`}
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-dark-light/40 backdrop-blur-xl rounded-2xl" />

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-6 rounded-2xl">{children}</div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
    </motion.div>
  );
};

export default TechCard;
