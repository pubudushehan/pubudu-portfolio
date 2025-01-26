import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaCloud,
  FaLaptopCode,
  FaMicrochip,
} from "react-icons/fa";

const TechBackground = () => {
  const [particles, setParticles] = useState([]);
  const techSymbols = [
    "<>",
    "/>",
    "{;}",
    "01",
    "if()",
    "[]",
    "&&",
    "||",
    "+=",
    "=>",
  ];
  const techIcons = [
    FaCode,
    FaDatabase,
    FaServer,
    FaCloud,
    FaLaptopCode,
    FaMicrochip,
  ];

  const generateBinary = () => {
    const length = Math.floor(Math.random() * 4) + 4; // 4-8 digits
    return Array(length)
      .fill(0)
      .map(() => Math.round(Math.random()))
      .join("");
  };

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      icon: techIcons[Math.floor(Math.random() * techIcons.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Binary Rain */}
      <div className="absolute right-0 w-1/5 h-full opacity-70">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-primary font-mono text-base md:text-lg"
            initial={{ y: -100, x: `${Math.random() * 100}%` }}
            animate={{
              y: "100vh",
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
            style={{
              opacity: 0.15,
              textShadow: "0 0 8px rgba(0, 242, 254, 0.5)",
            }}
          >
            {generateBinary()}
          </motion.div>
        ))}
      </div>

      {/* Code Symbols Rain */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary font-mono text-sm"
            initial={{ y: -100, x: `${Math.random() * 100}%` }}
            animate={{
              y: "100vh",
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          >
            {techSymbols[Math.floor(Math.random() * techSymbols.length)]}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Icons */}
      {particles.map((particle) => {
        const Icon = particle.icon;
        return (
          <motion.div
            key={particle.id}
            className="absolute text-primary opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 10}px`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      {/* Circuit Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        {/* Horizontal Lines */}
        <motion.path
          d="M0,100 h50 m10,0 h50 m10,0 h50 m10,0 h50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Vertical Lines */}
        <motion.path
          d="M50,0 v50 m0,10 v50 m0,10 v50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        {/* Connection Nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + i * 50}
            cy={100}
            r="3"
            className="text-primary fill-current"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* CPU Grid Pattern */}
      <div className="absolute bottom-20 right-20 opacity-10">
        <motion.div
          className="w-32 h-32 border-2 border-primary rounded-lg grid grid-cols-4 grid-rows-4 gap-1 p-2"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-primary/20"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechBackground;
