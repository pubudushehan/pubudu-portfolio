import { motion } from "framer-motion";
import ServicesList from "../components/services/ServicesList";
import RoboticElements from "../components/common/RoboticElements";

const Services = () => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <RoboticElements />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold text-center mb-16 gradient-text">
            My Services
          </h1>
          <ServicesList />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
