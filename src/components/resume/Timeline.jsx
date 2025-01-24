import { motion } from "framer-motion";

const Timeline = ({ items, title }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-200 mb-8">{title}</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l-2 border-primary/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
            <div className="card">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-200">
                  {item.title}
                </h3>
                <span className="text-sm text-primary">{item.period}</span>
              </div>
              <p className="text-gray-400 mb-2">{item.organization}</p>
              {item.description && (
                <p className="text-gray-500">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
