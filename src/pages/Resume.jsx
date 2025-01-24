import { motion } from "framer-motion";
import AboutMe from "../components/resume/AboutMe";
import Skills from "../components/resume/Skills";
import Timeline from "../components/resume/Timeline";

const Resume = () => {
  const education = [
    {
      title: "Bachelor of Information and Communication Technology",
      organization: "University of Sri Jayewardenepura",
      period: "2022 - Present",
      description: "Specialized in Software Technology",
    },
    {
      title: "G.C.E. Advanced Level in Technology",
      organization: "Central College Kuliyapitiya",
      period: "2018 - 2020",
      description:
        "Bio System Technology (District Rank - 4) | ICT - A | Science for Technology - B",
    },
  ];

  const experience = [
    {
      title: "Clerk and Cashier",
      organization: "CRB Bank",
      period: "2021 - 2022",
      description:
        "Handled transactions, record-keeping, and customer service with accuracy and efficiency",
    },
  ];

  return (
    <div className="min-h-screen py-20 circuit-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-center mb-16 gradient-text">
            Resume
          </h1>

          <AboutMe />

          <Timeline items={education} title="Education" />
          <Timeline items={experience} title="Experience" />

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-200 mb-8">Skills</h2>
            <Skills />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
