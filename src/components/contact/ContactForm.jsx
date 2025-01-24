import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full bg-dark-light/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>

        <button type="submit" className="button-primary w-full">
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
