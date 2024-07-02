// constants
import { SKILLS } from "./contants";

// utils
import { motion } from "framer-motion";

// components
import Container from "../../components/container";
import Skill from "./skill";

const Skills = () => {
  return (
    <Container scrollTarget="skills">
      <div className="flex flex-col w-full gap-5">
        <div className="w-full ">
          <p className="title">Skills</p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {SKILLS.map((skill) => (
            <Skill key={skill.id} {...skill}>
              {"<h1>Hello World</h1>".split("").map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                  className="text-3xl"
                >
                  {el}
                </motion.span>
              ))}
            </Skill>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
