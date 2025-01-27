import { motion } from "framer-motion";
import {
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

const AboutMe = () => {
  const interests = [
    {
      icon: <FaCode className="text-3xl text-neon-blue" />,
      title: "Web Development",
      description:
        "Building modern and responsive web applications using cutting-edge technologies.",
    },
    {
      icon: <FaRobot className="text-3xl text-neon-purple" />,
      title: "Machine Learning",
      description:
        "Exploring AI and ML technologies to create intelligent solutions.",
    },
    {
      icon: <FaLaptopCode className="text-3xl text-neon-pink" />,
      title: "Software Engineering",
      description: "Developing efficient and scalable software solutions.",
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-neon-green" />,
      title: "Teaching",
      description: "Sharing knowledge and guiding students in ICT education.",
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-200 mb-8">About Me</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card mb-8"
      >
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I am an undergraduate student pursuing a Bachelor's degree in Software
          Engineering Technology at the University of Sri Jayewardenepura. I am
          passionate about Full-Stack web development and creating innovative
          solutions that make a positive impact. Currently focusing on
          full-stack development and exploring machine learning technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-dark-light/50 glow">
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-200">
                {interest.title}
              </h3>
              <p className="text-gray-400">{interest.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
