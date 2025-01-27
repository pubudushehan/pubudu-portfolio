import { motion } from "framer-motion";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";

const VolunteerCard = ({ work, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-xl bg-dark-light/30">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            style={{
              objectPosition: work.title.includes("Headshot")
                ? "center 40%"
                : work.title.includes("Referee")
                ? "center 60%" // Moved down more and zoomed out
                : work.title.includes("Organizing Committee")
                ? "center 40%"
                : "center",
              objectFit:
                work.title.includes("Referee") ||
                work.title.includes("Organizing Committee")
                  ? "contain" // Zoomed out to show full photo
                  : "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-light/90 via-dark-light/50 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 relative">
          <h3 className="text-xl font-bold mb-2 gradient-text">{work.title}</h3>

          {/* Organization and Period */}
          <div className="flex flex-col space-y-2 mb-3">
            <div className="flex items-center text-gray-400">
              <FaBuilding className="mr-2 text-primary" />
              <span className="line-clamp-1">{work.organization}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FaCalendarAlt className="mr-2 text-primary" />
              <span>{work.period}</span>
            </div>
          </div>

          <p className="text-gray-300 mb-4 line-clamp-3">{work.description}</p>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-1 -right-1 w-20 h-20 opacity-20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay }}
          >
            <svg width="80" height="80">
              <path
                d="M0 80 L80 80 L80 0"
                stroke="url(#volunteer-gradient)"
                strokeWidth="1"
                fill="none"
              />
              <defs>
                <linearGradient
                  id="volunteer-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#8b1eff" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default VolunteerCard;
