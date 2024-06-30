import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // whileInView={{ opacity: 1 }}
        className="text-white text-9xl"
      >
        Hello Im Hossein
      </motion.p>
    </div>
  );
};

export default Home;
