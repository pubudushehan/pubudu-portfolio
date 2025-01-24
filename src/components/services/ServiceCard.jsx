import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description, technologies }) => {
  return (
    <motion.div
      className="card group hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="space-y-4">
        <motion.div
          className="text-primary group-hover:text-secondary transition-colors duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-semibold text-gray-200">{title}</h3>

        <p className="text-gray-400">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-dark-light/50 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
