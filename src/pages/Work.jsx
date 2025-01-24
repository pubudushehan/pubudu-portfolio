import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/work/ProjectCard";
import CertificateCard from "../components/work/CertificateCard";
import VolunteerCard from "../components/work/VolunteerCard";
import AchievementCard from "../components/work/AchievementCard";
import RoboticElements from "../components/common/RoboticElements";

const Work = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedItem, setSelectedItem] = useState(null);

  const tabs = [
    { id: "projects", label: "Projects", icon: "💻" },
    { id: "certificates", label: "Certificates", icon: "🏆" },
    { id: "volunteer", label: "Volunteer Work", icon: "💝" },
    { id: "achievements", label: "Achievements", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <RoboticElements />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Work
        </motion.h1>

        {/* Creative Mobile Tabs */}
        <div className="mb-12">
          <div className="backdrop-blur-xl bg-dark-light/30 rounded-2xl p-3">
            {/* Desktop View */}
            <div className="hidden md:flex justify-center space-x-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-primary/20 text-[#00ffff]"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-indicator-desktop"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#9f2bff]"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile View - 2x2 Grid */}
            <div className="md:hidden grid grid-cols-2 gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative group`}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`
                    relative z-10 flex flex-col items-center justify-center p-3 rounded-xl
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-br from-[#00ffff]/20 to-[#9f2bff]/20 text-[#00ffff]"
                        : "text-gray-400 hover:text-gray-200"
                    }
                  `}
                  >
                    {/* Animated Border */}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="active-tab-border"
                        className="absolute inset-0 rounded-xl"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00ffff]/20 to-[#9f2bff]/20" />
                        <div className="absolute inset-0 rounded-xl p-[1px]">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00ffff]/50 to-[#9f2bff]/50 opacity-50" />
                        </div>
                      </motion.div>
                    )}

                    {/* Icon with Glow */}
                    <motion.span
                      className={`text-2xl mb-2 ${
                        activeTab === tab.id ? "glow-text" : ""
                      }`}
                      animate={
                        activeTab === tab.id
                          ? {
                              scale: [1, 1.2, 1],
                              transition: { duration: 2, repeat: Infinity },
                            }
                          : {}
                      }
                    >
                      {tab.icon}
                    </motion.span>

                    {/* Label */}
                    <span className="text-sm font-medium">
                      {tab.label.split(" ")[0]}
                    </span>

                    {/* Animated Dots */}
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#00ffff]" />
                        <span className="w-1 h-1 rounded-full bg-[#9f2bff]" />
                        <span className="w-1 h-1 rounded-full bg-[#00ffff]" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeTab === "projects" && (
              <ProjectsSection setSelectedItem={setSelectedItem} />
            )}
            {activeTab === "certificates" && (
              <CertificatesSection setSelectedItem={setSelectedItem} />
            )}
            {activeTab === "volunteer" && (
              <VolunteerSection setSelectedItem={setSelectedItem} />
            )}
            {activeTab === "achievements" && (
              <AchievementsSection setSelectedItem={setSelectedItem} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-light/90 p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <DetailedView
                  item={selectedItem}
                  onClose={() => setSelectedItem(null)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Section Components
const ProjectsSection = ({ setSelectedItem }) => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with React and Framer Motion",
      image: "/projects/portfolio.webp",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      type: "project",
    },
    // Add more projects...
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          onClick={() => setSelectedItem(project)}
          delay={index * 0.1}
        />
      ))}
    </>
  );
};

const CertificatesSection = ({ setSelectedItem }) => {
  const certificates = [
    {
      title: "Web Development Certification",
      issuer: "Coursera",
      date: "2023",
      image: "/certificates/web-dev.webp",
      link: "https://coursera.org/verify/...",
      type: "certificate",
    },
    // Add more certificates...
  ];

  return (
    <>
      {certificates.map((cert, index) => (
        <CertificateCard
          key={index}
          certificate={cert}
          onClick={() => setSelectedItem(cert)}
          delay={index * 0.1}
        />
      ))}
    </>
  );
};

const VolunteerSection = ({ setSelectedItem }) => {
  const volunteerWork = [
    {
      title: "Tech Mentor",
      organization: "Local Code Club",
      period: "2022 - Present",
      description: "Teaching programming to high school students",
      image: "/volunteer/teaching.webp",
      type: "volunteer",
    },
    // Add more volunteer work...
  ];

  return (
    <>
      {volunteerWork.map((work, index) => (
        <VolunteerCard
          key={index}
          work={work}
          onClick={() => setSelectedItem(work)}
          delay={index * 0.1}
        />
      ))}
    </>
  );
};

const AchievementsSection = ({ setSelectedItem }) => {
  const achievements = [
    {
      title: "Hackathon Winner",
      event: "University Tech Fest 2023",
      description: "First place in the AI/ML category",
      image: "/achievements/hackathon.webp",
      type: "achievement",
    },
    // Add more achievements...
  ];

  return (
    <>
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={index}
          achievement={achievement}
          onClick={() => setSelectedItem(achievement)}
          delay={index * 0.1}
        />
      ))}
    </>
  );
};

const DetailedView = ({ item, onClose }) => {
  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="space-y-4">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        )}
        <h3 className="text-2xl font-bold gradient-text">{item.title}</h3>
        <p className="text-gray-300">{item.description}</p>

        {item.type === "project" && (
          <div className="flex space-x-4">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View on GitHub
              </a>
            )}
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Live Demo
              </a>
            )}
          </div>
        )}

        {item.type === "certificate" && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Verify Certificate
          </a>
        )}
      </div>
    </div>
  );
};

export default Work;
