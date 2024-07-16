// utils
import { Link } from "react-router-dom";

// components
import ButtonType1 from "../../components/button-type1";

const HomeButtons = () => {
  return (
    <div className="flex gap-2 md:gap-4">
      <ButtonType1>Download CV</ButtonType1>
      <DividerLine />
      <Link to="skills">
        <ButtonType1>Skills</ButtonType1>
      </Link>
      <ButtonType1>About</ButtonType1>
      <ButtonType1>Experience</ButtonType1>
    </div>
  );
};

export default HomeButtons;

const DividerLine = () => (
  <div className="w-[2px] rounded-lg bg-primary mx-2"></div>
);
