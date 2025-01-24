import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import Hero from "../components/home/Hero";
import SocialLinks from "../components/home/SocialLinks";

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      <div className="container mx-auto px-4 py-20">
        <animated.div style={fadeIn}>
          <Hero />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
