import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaRobot,
  FaCog,
  FaMemory,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";

const RoboticElements = () => {
  const robotParts = [
    {
      x: "10%",
      y: "20%",
      icon: <FaMicrochip className="text-neon-blue" />,
      delay: 0,
    },
    {
      x: "85%",
      y: "15%",
      icon: <FaRobot className="text-neon-purple" />,
      delay: 0.2,
    },
    {
      x: "75%",
      y: "85%",
      icon: <FaCog className="text-neon-pink" />,
      delay: 0.4,
    },
    {
      x: "15%",
      y: "75%",
      icon: <FaMemory className="text-neon-green" />,
      delay: 0.6,
    },
    {
      x: "90%",
      y: "50%",
      icon: <FaServer className="text-neon-blue" />,
      delay: 0.8,
    },
    {
      x: "5%",
      y: "40%",
      icon: <FaNetworkWired className="text-neon-purple" />,
      delay: 1,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {robotParts.map((part, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: part.x, top: part.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: part.delay,
            ease: "linear",
          }}
        >
          <div className="text-3xl glow">{part.icon}</div>
        </motion.div>
      ))}

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {robotParts.map((_, index) => (
          <motion.path
            key={`line-${index}`}
            stroke="url(#gradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "linear",
            }}
            d={`M ${Math.random() * 100}% ${
              Math.random() * 100
            }% Q ${50}% ${50}% ${Math.random() * 100}% ${Math.random() * 100}%`}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="50%" stopColor="#8b1eff" />
            <stop offset="100%" stopColor="#fe0173" />
          </linearGradient>
        </defs>
      </svg>

      {/* Radar Animation */}
      <div className="absolute bottom-10 right-10">
        <motion.div
          className="w-32 h-32 border-2 border-primary/30 rounded-full"
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute w-1 h-1/2 bg-gradient-to-b from-primary to-transparent origin-bottom"
            style={{ bottom: "50%", left: "50%" }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>

      {/* Binary Rain */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-primary"
            style={{ left: `${i * 10}%` }}
            initial={{ y: -100 }}
            animate={{ y: "100vh" }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j}>{Math.round(Math.random())}</div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoboticElements;
