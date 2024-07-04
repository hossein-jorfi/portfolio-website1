// constants
import { SKILLS } from "./contants";

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
              {skill.content}
            </Skill>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;