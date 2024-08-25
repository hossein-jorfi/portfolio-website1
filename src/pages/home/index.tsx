import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";
import SocialMedia from "./social-media";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center gap-6 h-[calc(100vh-100px)]">
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
    className="title"
  >
    {"Hossein Jorfi".split("").map((el, i) => (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: i / 10,
        }}
        key={i}
      >
        {el}
      </motion.span>
    ))}
    <p className="text-base sm:text-xl md:text-4xl md:ml-1 text-primary/70">Front End Developer</p>
  </motion.p>
);
