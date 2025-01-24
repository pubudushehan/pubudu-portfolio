import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";

const CertificateCard = ({ certificate, onClick, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-xl bg-dark-light/30 p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 gradient-text">
              {certificate.title}
            </h3>
            <p className="text-gray-400">{certificate.issuer}</p>
            <p className="text-gray-500 text-sm">{certificate.date}</p>
          </div>
        </div>

        {/* Preview Badge */}
        <motion.div
          className="absolute top-2 right-2 text-primary opacity-0 group-hover:opacity-100"
          whileHover={{ scale: 1.1 }}
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
