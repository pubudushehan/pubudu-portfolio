import { motion } from "framer-motion";

const CategorySection = ({ title, children }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-gray-200 mb-6">{title}</h3>
      {children}
    </motion.div>
  );
};

export default CategorySection;
