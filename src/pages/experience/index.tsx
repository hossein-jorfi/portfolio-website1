// components
import MenuItems from "@/components/menu-items";
import Container from "../../components/container";
import ExperienceItem from "./experience-item";

const Experience = () => {
  return (
    <Container>
      <div className="flex flex-col w-full gap-5 text-primary">
        <MenuItems />
        <ExperienceItem />
      </div>
    </Container>
  );
};

export default Experience;
