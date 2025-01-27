import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pubudu Shehan</h3>
            <p className="text-gray-300">
              Full Stack Developer specializing in modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-300 hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-300 hover:text-white">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/pubudushehan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pubudu-shehan-37a2132a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:pubudushehankarunarathna@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://www.facebook.com/pubudu.shehan.9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Pubudu Shehan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
