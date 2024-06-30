import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";
import SocialMedia from "./social-media";

const Home = () => {
  return (
    <div className="flex justify-center h-4/5">
      <div className="flex flex-col justify-center gap-6 h-full">
        <SocialMedia />
        <Title />
        <HomeButtons />
      </div>
    </div>
  );
};

export default Home;

const Title = () => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    // whileInView={{ opacity: 1 }}
    className="text-primary text-9xl"
  >
    Hello Im Hossein
  </motion.p>
);
