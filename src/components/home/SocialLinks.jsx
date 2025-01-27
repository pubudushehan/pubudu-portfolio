import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/pubudushehan",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/pubudu-shehan-37a2132a6/",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:pubudushehankarunarathna@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-2xl" />,
      url: "https://www.facebook.com/pubudu.shehan.9",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="flex space-x-6"
    >
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-300 transition-colors duration-300 ${link.color}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.1 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
