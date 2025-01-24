import { motion } from "framer-motion";

const TechBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute w-full h-full bg-grid-pattern" />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
              y: ["-10vh", "-20vh"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full filter blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full filter blur-[120px] opacity-20 animate-pulse delay-1000" />

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-matrix-pattern animate-matrix" />
      </div>
    </div>
  );
};

export default TechBackground;
