import { Element } from "react-scroll";
import Container from "../../components/container";

const Skills = () => {
  return (
    <Container scrollTarget="skills">
      <Element name="skills" className="h-full w-full">
        <p className="title">Skills</p>
      </Element>
    </Container>
  );
};

export default Skills;
