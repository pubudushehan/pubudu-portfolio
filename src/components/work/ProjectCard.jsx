import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-xl bg-dark-light/30">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <h3 className="text-xl font-bold mb-2 gradient-text">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

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
                stroke="url(#project-gradient)"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;
