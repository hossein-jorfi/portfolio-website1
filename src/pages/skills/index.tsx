// constants
import { SKILLS } from "./contants";

// components
import Skill from "./skill";

const Skills = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {SKILLS.map((skill) => (
          <Skill key={skill.id} {...skill}>
            {skill.content}
          </Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
