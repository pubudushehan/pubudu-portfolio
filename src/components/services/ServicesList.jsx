import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRobot,
} from "react-icons/fa";

const ServicesList = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Full-Stack Web Development",
      description:
        "Building responsive, modern web applications using the latest technologies and best practices.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "Next.js",
        "MongoDB",
        "Tailwind Css",
      ],
      color: "from-neon-blue to-primary",
      tagColor: "bg-primary/10 text-primary",
      delay: 0.2,
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      description:
        "Developing efficient and scalable software solutions for various platforms and needs.",
      technologies: [
        "Python",
        "Java",
        "C#",
        "SQL",
        "JavaScript",
        "RESTful APIs",
        "etc",
      ],
      color: "from-neon-purple to-secondary",
      tagColor: "bg-secondary/10 text-secondary",
      delay: 0.4,
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "ICT Classes",
      description:
        "Providing comprehensive ICT education and guidance for Advanced-Level ICT students.",
      technologies: [
        "Programming",
        "Database",
        "Networking",
        "Web Technologies",
        "etc",
      ],
      color: "from-neon-pink to-accent",
      tagColor: "bg-accent/10 text-accent",
      delay: 0.6,
    },
    {
      icon: <FaRobot />,
      title: "Machine Learning",
      description:
        "Implementing AI and ML solutions to solve complex problems and automate processes.",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Scikit-learn",
        "DALL-E",
        "etc",
      ],
      color: "from-neon-green to-primary",
      tagColor: "bg-neon-green/10 text-neon-green",
      delay: 0.8,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: service.delay }}
          className="relative group"
        >
          <div className="card backdrop-blur-xl overflow-hidden">
            {/* Animated background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 
              group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Service content */}
            <div className="relative z-10">
              {/* Icon with glowing effect - Updated with purple background */}
              <motion.div
                className="w-16 h-16 rounded-lg bg-[#F05A7E] 
                  flex items-center justify-center text-2xl mb-6 text-white glow"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6">{service.description}</p>

              {/* Technologies with updated color scheme */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm ${service.tagColor}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Decorative circuit lines */}
              <svg className="absolute top-0 right-0 w-24 h-24 opacity-20">
                <motion.path
                  d="M24 0 L24 24 L0 24"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: service.delay }}
                />
                <defs>
                  <linearGradient
                    id={`gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      className={`text-${service.color.split(" ")[1]}`}
                    />
                    <stop
                      offset="100%"
                      className={`text-${service.color.split(" ")[0]}`}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Hover effect glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
            group-hover:opacity-10 blur-xl transition-all duration-500 -z-10`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;
