import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import RoboticElements from "../components/common/RoboticElements";

const Contact = () => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <RoboticElements />

      {/* AI Assistant Animation */}
      <motion.div
        className="absolute right-10 top-40 w-64 h-64 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <AIAssistantAnimation />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities. I'm
            always excited to connect with fellow tech enthusiasts!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-dark-light/30 p-8 rounded-2xl border border-primary/10">
              {/* Circuit Board Pattern Background */}
              <div className="absolute inset-0 opacity-5">
                <CircuitPattern />
              </div>

              <form className="space-y-6 relative">
                <div className="space-y-2">
                  <label className="text-gray-300 block">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-dark-light/50 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 block">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-dark-light/50 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 block">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-dark-light/50 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-xl backdrop-blur-xl bg-dark-light/30 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    {link.icon}
                  </span>
                  <span className="text-gray-300">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="backdrop-blur-xl bg-dark-light/30 p-6 rounded-2xl border border-primary/10">
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                Quick Contact
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start space-x-3">
                  <span className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <FaEnvelope size={18} />
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:pubudushehankarunarathna@gmail.com"
                      className="text-gray-200 hover:text-primary transition-colors duration-300 break-all"
                    >
                      pubudushehankarunarathna@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-3">
                  <span className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <div className="space-y-0.5">
                      <a
                        href="tel:+94789988379"
                        className="block text-gray-200 hover:text-primary transition-colors duration-300"
                      >
                        +94 789988379
                      </a>
                      <a
                        href="tel:+94716598089"
                        className="block text-gray-200 hover:text-primary transition-colors duration-300"
                      >
                        +94 716598089
                      </a>
                    </div>
                  </div>
                </div>

                {/* Available and Response Time - Combined in one line */}
                <div className="flex items-center space-x-3 pt-3 border-t border-primary/10">
                  <span className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ⚡
                    </motion.div>
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">
                      Available for freelance opportunities and collaborations.
                    </p>
                    <div className="flex items-center space-x-1 mt-0.5">
                      <span className="text-[#00ffff]">
                        Quick response guaranteed!
                      </span>
                      <span className="text-white">🚀</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const socialLinks = [
  { name: "LinkedIn", url: "#", icon: <FaLinkedin size={20} /> },
  { name: "GitHub", url: "#", icon: <FaGithub size={20} /> },
  { name: "Twitter", url: "#", icon: <FaTwitter size={20} /> },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: <FaEnvelope size={20} />,
  },
];

const CircuitPattern = () => (
  <svg width="100%" height="100%" className="absolute inset-0">
    <pattern
      id="circuit"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M10 10h30v30h-30z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="25" cy="25" r="3" fill="currentColor" />
      <path d="M25 10v12M10 25h12" stroke="currentColor" strokeWidth="0.5" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

const AIAssistantAnimation = () => (
  <div className="relative">
    {/* Robot Head */}
    <motion.div
      className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 absolute left-1/2 -translate-x-1/2"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Animated Circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-2 border-primary/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeOut",
        }}
      />
    ))}

    {/* Scanner Effect */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
      animate={{
        y: [0, 128, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);

export default Contact;
