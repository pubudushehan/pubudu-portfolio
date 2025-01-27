import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const AchievementCard = ({ achievement, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-xl bg-dark-light/30 p-6">
        <div className="flex items-start space-x-4">
          {/* Achievement Icon */}
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaAward className="text-3xl text-primary" />
          </motion.div>

          {/* Achievement Details */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 gradient-text">
              {achievement.title}
            </h3>

            {/* Organization */}
            <div className="flex items-center text-gray-400 mb-2">
              <FaUniversity className="mr-2 text-primary" />
              <span>{achievement.organization}</span>
            </div>

            {/* Period */}
            <div className="flex items-center text-gray-400">
              <FaCalendarAlt className="mr-2 text-primary" />
              <span>{achievement.period}</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-2 right-2 text-primary opacity-0 group-hover:opacity-100"
          whileHover={{ scale: 1.1 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </motion.div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default AchievementCard;
