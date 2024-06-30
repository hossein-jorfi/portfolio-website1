import { motion } from "framer-motion";
import HomeButtons from "./home-buttons";
import SocialMedia from "./social-media";
import Container from "../../components/container";

const Home = () => {
  return (
    <Container scrollTarget="home"> 
      <div className="flex flex-col justify-center gap-6 h-full">
        <SocialMedia />
        <Title />
        <HomeButtons />
      </div>
    </Container>
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
    Hello Im Hossein
  </motion.p>
);
