import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "pubudu.shehan@email.com",
      link: "mailto:pubudu.shehan@email.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+94 XX XXX XXXX",
      link: "tel:+94XXXXXXXX",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
    },
  ];

  return (
    <motion.div
      className="card space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-200">Get in Touch</h2>
        <p className="text-gray-400">
          Feel free to reach out to me for any questions or opportunities.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="text-primary">{detail.icon}</div>
            <div>
              <h3 className="text-gray-300 font-medium">{detail.title}</h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-400">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
