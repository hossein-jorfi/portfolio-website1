import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // whileInView={{ opacity: 1 }}
        className="text-white text-9xl"
      >
        Hello Im Hossein
      </motion.p>
      <HomeButtons />
    </div>
  );
};

export default Home;
