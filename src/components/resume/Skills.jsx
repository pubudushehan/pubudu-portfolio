import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaPython,
  FaJava,
  FaCogs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaLightbulb,
  FaUsers,
  FaBrain,
  FaChartLine,
  FaChalkboardTeacher,
  FaDatabase,
  FaClock,
  FaPalette,
  FaTasks,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiVisualstudiocode,
  SiAdobeillustrator,
  SiCanva,
  SiPostman,
  SiCsharp,
  SiC,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <FaServer />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "SQL", icon: <FaDatabase />, color: "#00758F" },
        { name: "NoSQL", icon: <FaServer />, color: "#00758F" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "C#", icon: <SiCsharp />, color: "#239120" },
        { name: "C", icon: <SiC />, color: "#A8B9CC" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
        {
          name: "Adobe Illustrator",
          icon: <SiAdobeillustrator />,
          color: "#FF9A00",
        },
        { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Teaching", icon: <FaChalkboardTeacher />, color: "#00F2FE" },
        { name: "Problem Solving", icon: <FaBrain />, color: "#00F2FE" },
        { name: "Team Work", icon: <FaUsers />, color: "#8B1EFF" },
        { name: "Leadership", icon: <FaLightbulb />, color: "#FE0173" },
        { name: "Communication", icon: <FaChartLine />, color: "#00FF9D" },
        { name: "Time Management", icon: <FaClock />, color: "#00F2FE" },
        { name: "Creativity", icon: <FaPalette />, color: "#00F2FE" },
        { name: "Project Management", icon: <FaTasks />, color: "#00F2FE" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="card"
        >
          <h3 className="text-xl font-semibold text-gray-200 mb-6">
            {category.title}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 group hover:cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="text-4xl"
                  variants={{
                    initial: {
                      color: "#6B7280",
                      scale: 1,
                      rotate: 0,
                    },
                    hover: {
                      color: skill.color,
                      scale: 1.2,
                      rotate: 360,
                      transition: {
                        duration: 0.3,
                        rotate: { duration: 0.5 },
                      },
                    },
                  }}
                >
                  {skill.icon}
                </motion.div>
                <motion.span
                  className="text-sm text-center"
                  variants={{
                    initial: { color: "#9CA3AF" },
                    hover: {
                      color: skill.color,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
