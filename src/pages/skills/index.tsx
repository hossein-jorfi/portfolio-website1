// constants
import { SKILLS } from "./contants";

// components
import Container from "../../components/container";
import Skill from "./skill";
import MenuItems from "../../components/menu-items";

const Skills = () => {
  return (
    <Container>
      <div className="flex flex-col w-full gap-5">
      <MenuItems />
        {/* <div className="w-full ">
          <p className="title">Skills</p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
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
