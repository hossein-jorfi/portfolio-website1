// constants
import { SKILLS } from "./contants";

// components
import Container from "../../components/container";
import Skill from "./skill";

const Skills = () => {
  return (
    <Container scrollTarget="skills">
      <div className="w-full h-full">
        <p className="title">Skills</p>
      </div>

      <div>
        {SKILLS.map((skill) => (
          <Skill {...skill} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
