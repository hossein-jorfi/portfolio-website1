import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";
import SocialMedia from "./social-media";
// import ProfileImage from "@/assets/profile.jpg";
// import ReactLogo from "@/assets/react.svg?react";
// import NextLogo from "@/assets/skills/next.svg?react";

const Home = () => {
  return (
    <div className="flex justify-center relative">
      {/* <ReactLogo className="absolute -top-32 -left-32 w-[450px] h-[450px] z-10 blur" />
      <NextLogo className="absolute -bottom-32 -right-32 w-[450px] h-[450px] z-10 blur opacity-25" /> */}
      <div className="flex flex-col justify-center gap-6 h-[calc(100vh-100px)] z-20">
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
    <p className="text-base sm:text-xl md:text-4xl md:ml-1 text-primary/70">
      Front End Developer
    </p>
  </motion.p>
);
