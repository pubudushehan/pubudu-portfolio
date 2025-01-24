import { motion } from "framer-motion";

const VolunteerCard = ({ title, organization, period, description, image }) => {
  return (
    <motion.div
      className="card group overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {image && (
        <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>
      )}

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
        <p className="text-gray-400">{organization}</p>
        <p className="text-sm text-neon-blue">{period}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default VolunteerCard;
