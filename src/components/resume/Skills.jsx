import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import CategorySection from "./CategorySection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 85 },
        { name: "TailwindCSS", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 70 },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Work", level: 85 },
        { name: "Communication", level: 85 },
        { name: "Leadership", level: 80 },
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
        >
          <CategorySection title={category.title}>
            {category.skills.map((skill, skillIndex) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1 + skillIndex * 0.05}
              />
            ))}
          </CategorySection>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
