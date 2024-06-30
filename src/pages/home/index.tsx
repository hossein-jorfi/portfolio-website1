import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";
import SocialMedia from "./social-media";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <SocialMedia />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // whileInView={{ opacity: 1 }}
        className="text-primary text-9xl"
      >
        Hello Im Hossein
      </motion.p>
      <HomeButtons />
    </div>
  );
};

export default Home;
